const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const converter = require('json-2-csv');
const fs = require('fs');
const xlsx = require("xlsx");
require('dotenv').config();

const pool = require('./database');
const serverAdminDatabase = require('./serverAdminDatabase');
const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = require('./tokens');

const app = express();
app.use(cors()); // Cross Origin Resource Sharing
app.use(bodyParser.json()); // for parsing json objects in request body

/**
 * Port 3000 for development purposes, our sponsor 
 * should let us know what port is available on their network to use.
 */
const PORT = 8080;
const DB_NAME = 'ozvnvo0we0wrviab';

// Sample API endpoint
app.get('/', (request, response) => {
    response.status(200).json('Hello World!');
});

/**
 * This endpoint is for admins logging in.
 * 
 * The idea is to send a request to the db with the request objects being a username and password
 * and see if it matches in our "Admin" table in the DB which is yet to be implemented.
 * 
 * This endpoint uses a SQL query for a database I setup on my local machine for testing purposes.
 * The database is not hosted anywhere else, so it won't work on someone else's machine.
 */
app.post('/login', async (request, response) => {
    let admin = null;

    let sql = 'SELECT * FROM administrators';
    pool.query(sql, async (error, results) => {
        if (error) console.log(error);

        for (let i = 0; i < results.length; i++) {
            const record = results[i];
            if (request.body.username === record.username) {
                console.log('Found user in login:\n', record);
                admin = record;
            }
        }

        if (admin) {
            try {
                const result = await bcrypt.compare(request.body.password, admin.password); // check encrypted password
                console.log(result);
                if (result) {
                    const user = { name: admin.name, username: admin.username, password: admin.password };

                    const accessToken = generateAccessToken(user);
                    const refreshToken = jwt.sign(user, REFRESH_TOKEN_SECRET); // Generate refresh token
                    console.log('Refresh token generated');
                    let updateQuery = `UPDATE \`${DB_NAME}\`.\`administrators\` SET \`refreshToken\` = '${refreshToken}' WHERE (\`username\` = \'${admin.username}\');`; // Insert refresh token into admin database
                    pool.query(updateQuery, async (error, results) => {
                        if (error) {
                            console.error(error);
                            response.status(500).json('Failure');
                        } else {
                            console.log('Successful insertion of refresh token:\n', results);
                        }
                    });

                    response.status(200).json({ message: 'Success', accessToken: accessToken, refreshToken: refreshToken });
                } else {
                    response.status(500).json('Failure');
                }
            } catch {
                response.status(500).json('Failure');
            }
        }
        else if (!admin) {
            response.status(400).json('Account not found.');
        } else {
            response.status(401).json('Failure');
        }
    });
});

/**
 * This endpoint is for forwarding gotData information from the serverAdminDatabase file
 * to the adminDatabase file which deals with populating admin webpage.
*/
app.get("/getGotData", async (request, response) => {
    response.status(200).json(serverAdminDatabase());
})

/**
 * Generates an access token with a session expiry timer. 
 * This function is called in the login endpoint, so when a user successfully logs in
 * the server responds with an access token generated here and a refresh token, also generated
 * in the login endpoint above.
 */
function generateAccessToken(user) {
    console.log('Access token generated');
    return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: '1200000' }); // Generate access token, expires in 15s (15 min for actual implementation)
}

/**
 * Middleware function to authenticate JWT tokens found in network requests.
 * 
 * Verifies the token sent in a network request is authorized. If so, the server responds
 * with a 200 status (OK) and carries on. Otherwise, the server responds with 403 if the token
 * is outdated or responds with 401 if the token is not contained in the response.
 */
function authenticateToken(request, response, next) {

    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) { return response.sendStatus(401) };

    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            console.log('Unauthorized access token, possibly expired');
            return response.sendStatus(403)
        };
        request.user = user;
        next();
    });
}

/**
 * Authorizes an incoming token using the authenticateToken function above.
 */
app.get('/authorize', authenticateToken, (request, response) => {
    console.log('Access token authorized');
    return response.sendStatus(200);
});

/**
 * Generates a new access token to allow continued authorization when access token (15min)
 * is expired as long as a valid refresh token is found in the database.
 */
app.post('/refresh', (request, response) => {
    const refreshToken = request.body.token;
    if (refreshToken == null) { return response.sendStatus(401) };

    let sql = `SELECT * FROM administrators WHERE (\`refreshToken\` = \'${refreshToken}\')`;
    pool.query(sql, async (error, results) => {
        if (error) console.log(error);

        if (results.length != 0) { // If refresh token found in db
            jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
                if (err) { console.log(err); return response.sendStatus(403) };
                const accessToken = generateAccessToken({ username: user.username, password: user.password });
                response.status(200).json({ message: 'Success', accessToken: accessToken });
            });
        } else {
            return response.sendStatus(403);
        }
    });
});

/**
 * Logout function which receives a refresh token in the request object. If there is a match in the database, it simply
 * deletes the refresh token found in the database (sets to NULL) and responds with a 204 status. Otherwise it responds with
 * either a 401 if no token is found in the request or a 403 if not found in the database. 
 */
app.delete('/logout', (request, response) => {
    const refreshToken = request.body.token;
    if (refreshToken == null) { return response.sendStatus(401) };

    let sql = `SELECT * FROM administrators WHERE (\`refreshToken\` = \'${refreshToken}\')`;
    pool.query(sql, async (error, results) => {
        if (error) console.error(error);

        if (results.length != 0) { // If refresh token found in db

            /**
             * We don't want to delete the row, just set the refreshToken column to NULL. 
             */
            let deleteQuery = `UPDATE \`${DB_NAME}\`.\`administrators\` SET \`refreshToken\` = NULL WHERE (\`refreshToken\` = \'${refreshToken}\')`;
            pool.query(deleteQuery, async (error, results) => {
                if (error) console.error(error);

                response.sendStatus(204);
            });
        } else {
            return response.sendStatus(403);
        }
    });
});

/**
 * This endpoint is for creating an account (signing up).
 * 
 * This endpoint will be designed for taking the request object and creating a new row
 * in the admin table in our database, essentially creating a new admin account.
 * 
 * This endpoint uses a SQL query for a database I setup on my local machine for testing purposes.
 * The database is not hosted anywhere else, so it won't work on someone else's machine.
 */
app.get('/signup', async (request, response) => {
    try {
        const hashedPass = await bcrypt.hash(request.body.password, 10); // encrypt password via hash algorithm
        console.log(hashedPass);

        let sql = `INSERT INTO \`${DB_NAME}\`.\`administrators\` (\`name\`, 
        \`username\`, \`password\`, \`refreshToken\`) VALUES (\'${request.body.name}\', 
        \'${request.body.username}\', \'${hashedPass}\', \'123\');`;
        pool.query(sql, (error, results) => {
            if (error) console.error(error);

            if (!error) {
                response.status(201).json('Success');
            } else if (error.code === 'ER_DUP_ENTRY') {
                response.status(403).json('An account with this email already exists.');
            } else {
                response.status(500).json('Failure');
            }
        });
    } catch {
        response.status(500).json('Failure');
    }
});

/**
 * Form submission endpoint.
 * 
 * For soldiers submitting their bio sheet, questionnaire, etc., this endpoint submits the data into the database based on what platoon was selected, and also
 * submits the questionnaire results into its own table. 
 * 
 * Since the DODID is unique, the DODID in the table platoon_one, for example, will match the row in the 
 * questionnaire table with the same DODID, so those are the responses of the same soldier in the questionnaire.
 */
app.post('/submit', (request, response) => {
    const formData = request.body ? request.body : null;
    if (!formData) {
        return response.status(400).json('Invalid data found in request body.');
    }

    var xviii_datasheet = {}, bh_stigma_questionnaire = {};

    // Loop through request body and separate data into the datasheet variable 
    // and the questionnaire
    for (let prop in formData) {
        if (prop == "bh_Stigma") {
            for (bh_prop in formData.bh_Stigma) {
                if (bh_prop == 'q_two' || bh_prop == 'q_three' || bh_prop == 'q_four') {
                    bh_stigma_questionnaire[bh_prop] = JSON.stringify(formData.bh_Stigma[bh_prop]);
                } else {
                    bh_stigma_questionnaire[bh_prop] = formData.bh_Stigma[bh_prop];
                }
            }
            break;
        }
        xviii_datasheet[prop] = formData[prop];
    }

    console.log(xviii_datasheet);
    console.log(bh_stigma_questionnaire);

    let plt_tables = {
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        'Senior': 'senior'
    };

    try {
        let sql = `INSERT INTO \`${DB_NAME}\`.\`platoon_${plt_tables[xviii_datasheet.platoon]}\` (\`PLT\`, \`DODID\`, \`SSN\`, \`first_name\`, 
        \`last_name\`, \`rank\`, \`MOS\`, \`ASI\`, \`gaining_unit\`, \`gender\`, \`phone_number\`, \`arrival_date\`, \`date_of_birth\`, \`place_of_birth\`, 
        \`home_of_record\`, \`ETS\`, \`security_clearance\`, \`BASD\`, \`DOR\`, \`marital_status\`,
        \`blood_type\`, \`glasses\`, \`inserts_on_hand\`, \`color_blind\`, \`vaccine_status\`, \`email\`, \`army_email\`, \`street_address\`, 
        \`address_line_2\`, \`city\`, \`state\`, \`zip_code\`, \`emergency_name\`, \`emergency_relation\`, \`emergency_phone_number\`, \`emergency_email\`, 
        \`emergency_street_address\`, \`emergency_address_line_2\`, \`emergency_city\`, \`emergency_state\`, \`emergency_zip_code\`) VALUES 
        (\'${xviii_datasheet.platoon}\', \'${xviii_datasheet.DODID}\', \'${xviii_datasheet.SSN}\', 
        \'${xviii_datasheet.first_name}\', \'${xviii_datasheet.last_name}\', \'${xviii_datasheet.rank}\', 
        \'${xviii_datasheet.MOS}\', \'${xviii_datasheet.ASI}\', \'${xviii_datasheet.gaining_unit}\', \'${xviii_datasheet.gender}\', 
        \'${xviii_datasheet.phone_number}\', \'${xviii_datasheet.arrival_date}\', \'${xviii_datasheet.date_of_birth}\', \'${xviii_datasheet.place_of_birth}\',
        \'${xviii_datasheet.home_of_record}\', \'${xviii_datasheet.ETS}\', \'${xviii_datasheet.security_clearence}\', \'${xviii_datasheet.BASD}\', \'${xviii_datasheet.DOR}\',
        \'${xviii_datasheet.marital_status}\', \'${xviii_datasheet.blood_type}\', \'${xviii_datasheet.glasses}\', \'${xviii_datasheet.inserts}\',
        \'${xviii_datasheet.color_blind}\', \'${xviii_datasheet.covid_vaccine}\', \'${xviii_datasheet.personal_email}\', \'${xviii_datasheet.army_email}\', \'${xviii_datasheet.street_address}\',
        \'${xviii_datasheet.address_line_2}\', \'${xviii_datasheet.city}\', \'${xviii_datasheet.state}\', \'${xviii_datasheet.zip}\', \'${xviii_datasheet.emergency_name}\', 
        \'${xviii_datasheet.emergency_relation}\', \'${xviii_datasheet.emergency_phone_number}\', \'${xviii_datasheet.emergency_email}\', \'${xviii_datasheet.emergency_street_address}\',
        \'${xviii_datasheet.emergency_address_line_2}\', \'${xviii_datasheet.emergency_city}\', \'${xviii_datasheet.emergency_state}\', \'${xviii_datasheet.emergency_zip}\');`;
        pool.query(sql, (error, results) => {
            if (error) console.error(error);

            if (!error) {
                console.log('datasheet successfully submitted');

                let bh_sql = `INSERT INTO \`${DB_NAME}\`.\`bh_stigma_questionnaire\` (\`DODID\`, \`q_one\`, \`q_two\`, \`q_three\`, \`q_four\`, \`q_five\`, \`q_six\`, \`q_seven\`, \`q_eight\`, \`q_nine\`, \`q_ten\`) VALUES (\'${xviii_datasheet.DODID}\', \'${bh_stigma_questionnaire.q_one}\', \'${bh_stigma_questionnaire.q_two}\', \'${bh_stigma_questionnaire.q_three}\', \'${bh_stigma_questionnaire.q_four}\', \'${bh_stigma_questionnaire.q_five}\', \'${bh_stigma_questionnaire.q_six}\', \'${bh_stigma_questionnaire.q_seven}\', \'${bh_stigma_questionnaire.q_eight}\', \'${bh_stigma_questionnaire.q_nine}\', \'${bh_stigma_questionnaire.q_ten}\')`;
                pool.query(bh_sql, (error, results) => {
                    if (error) console.error(error);

                    if (!error) {
                        console.log('questionnaire successfully submitted');
                        response.status(200).json('Successful form submission.');
                    }
                });
            } else {
                response.status(500).json('Failure with bh');
            }
        });
    } catch {
        response.status(500).json('Failure');
    }
});

/**
    * Map for fileName to database table
*/
var buttonToFile = [
    ['1stplt.xlsx', 'platoon_one'],
    ['2ndplt.xlsx', 'platoon_two'],
    ['3rdplt.xlsx', 'platoon_three'],
    ['seniorSignin.xlsx', 'platoon_senior'],
    ['shippingRoster.xlsx', 'shipping_roster'],
    ['newArrivals.xlsx', 'new_arrivals'],
];

function intToChar(int) {
    const code = 'a'.charCodeAt(0);
    return String.fromCharCode(code + int);
}

/**
 * Export data endpoint.
 * 
 * For admins, this endpoint will be designed to pull data from the database and export it 
 * into a CSV file. 
 */
app.get('/admindata', async (request, response) => {
	let table = "";
	for (let [fn, tl] of buttonToFile) {
		if (fn == request.query.fileName){
			table = tl;
			continue;
		}
	}
	console.log("find table", table);
	if (table == ""){
		response.status(200).json("");
		return;
	}

	let sql = 'SELECT * FROM ' + table;
	pool.query(sql, (error, results) => {
		if (error) console.log(error);
		const jsonData = JSON.parse(JSON.stringify(results));

		converter.json2csv(jsonData, (err, csv) => {
			if (err) { console.error(err) };
			//fs.writeFileSync(request.query.fileName, csv);
			//fs.appendFileSync(request.query.fileName, csv);


            //const spreadsheet = xlsx.readFile(request.query.fileName);
            const spreadsheet = xlsx.readFile("template.xlsx");
            //console.log(spreadsheet);
            const sheets = spreadsheet.SheetNames;
            const sheetName = sheets[0];
            const sheet = spreadsheet.Sheets[sheetName];
            const JsonOrder = [ "PLT", "gaining_unit", "DODID", "SSN", "first_name", "last_name", "rank", "MOS", "ASI", "date_of_birth", "place_of_birth", "gender", "home_of_record", "ETS", "security_clearance", "BASD", "DOR", "marital_status", "arrival_date", "blood_type", "glasses", "inserts_on_hand", "color_blind", "vaccine_status", "phone_number", "email", "army_email", "street_address", "address_line_2", "city", "state", "zip_code", "emergency_name", "emergency_relation", "emergency_phone_number", "emergency_email", "emergency_street_address", "emergency_address_line_2", "emergency_city", "emergency_state", "emergency_zip_code"];

            // for (let i = 0; i < JsonOrder.length; i++){
            //     sheet['A'+i+1] = [v = JsonOrder[i]];
            // }

            for (let i = 0; i < jsonData.length; i++) {
                const PersonJson = jsonData[i];
                
                for (let num = 0; num < JsonOrder.length; num++) {
                    //sheet['A'+ i + 1] = ""

                    const Letter = intToChar(num + 1)
                    const field = JsonOrder[num];
                    let val = PersonJson[field]

                    const index = `${Letter.toUpperCase()}${i + 2}`;
                    if (sheet[index] === undefined){
                        sheet[index] = [];
                    }
                    
                    sheet[index].v = val
                    //console.log("writing " + index + " as " + val);
                }
            }
            
            spreadsheet.Sheets[sheetName] = sheet;
			xlsx.writeFileXLSX(spreadsheet, request.query.fileName, {raw: true});
		});

		// Respond with CSV fileName
		response.status(200).json(request.query.fileName);
	});
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
