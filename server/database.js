var mysql = require('mysql');
require('dotenv').config();

// var connection = mysql.createConnection({
//     host: "localhost",
//     database: "InProcessingDemo",
//     user: "root",
//     password: "CHDC3G7C",
// });

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'ozvnvo0we0wrviab',
    user: 'root',
    password: 'password',
});

// var pool = mysql.createPool({
//     host: 'bv2rebwf6zzsv341.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//     database: 'ozvnvo0we0wrviab',
//     user: 'q9zus6zu6dp0xtbh',
//     connectionLimit: 1, // connection limit set to 1 for testing, in the production server this is set to 8.
//     password: 'ewjeelc9lx9vjt51',
// });

// connection.connect((error) => {
//     if (error) throw error;
//     console.log('Connected to database');
// });

module.exports = connection;