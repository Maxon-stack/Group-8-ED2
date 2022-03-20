const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const converter = require('json-2-csv');
const fs = require('fs');

const connection = require('./database');

const app = express();
app.use(cors()); // Cross Origin Resource Sharing
app.use(bodyParser.json()); // for parsing json objects in request body

/**
 * Port 3000 for development purposes, our sponsor 
 * should let us know what port is available on their network to use.
 */
const port = 3000;

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
app.get('/login', async (request, response) => {
    let admin = null;

    let sql = 'SELECT * FROM Administrators';
    connection.query(sql, async (error, results) => {
        if (error) console.log(error);

        for (let i = 0; i < results.length; i++) {
            const record = results[i];
            if (request.query.username === record.username) {
                console.log(record);
                admin = record;
            }
        }

        if (admin) {
            try {
                const result = await bcrypt.compare(request.query.password, admin.password); // check encrypted password
                if (result) {
                    response.status(200).json('Success');
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
        const hashedPass = await bcrypt.hash(request.query.password, 10); // encrypt password via hash algorithm
        console.log(hashedPass);

        /* Allow Rank/Role properties? If so, implement in UI instead of hardcoding it. */
        let sql = `INSERT INTO \`InProcessingDemo\`.\`Administrators\` (\`name\`, \`role\`, 
        \`rank\`, \`username\`, \`password\`) VALUES (\'${request.query.name}\', \'Admin\', 
        \'Sergeant\', \'${request.query.username}\', \'${hashedPass}\');`;
        connection.query(sql, (error, results) => {
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
 * For soldiers submitting their bio sheet, questionnaire, etc., this endpoint will be 
 * designed to inject the data into the database in the appropriate table.
 */
app.get('/submit-form', (request, response) => {
});

/**
 * Export data endpoint.
 * 
 * For admins, this endpoint will be designed to pull data from the database and export it 
 * into a CSV file. 
 */
app.get('/admindata', (request, response) => {
    let sql = 'SELECT * FROM Administrators';
    connection.query(sql, (error, results) => {
        if (error) console.log(error);

        const jsonData = JSON.parse(JSON.stringify(results));

        converter.json2csv(jsonData, (err, csv) => {
            if (err) { console.error(err) };

            console.log(csv);

            fs.writeFileSync('admin_data.csv', csv);
        });

        // Respond with CSV file from database data
        response.status(200).attachment('admin_data.csv').sendFile(__dirname + '/admin_data.csv');
    });
});

app.listen(port, () => {
    console.log('Listening on port 3000');
});
