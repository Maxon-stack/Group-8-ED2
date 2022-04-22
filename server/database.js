var mysql = require('mysql');
require('dotenv').config();

// var connection = mysql.createConnection({
//     host: "localhost",
//     database: "InProcessingDemo",
//     user: "root",
//     password: "CHDC3G7C",
// });

// var connection = mysql.createConnection({
//     host: 'localhost',
//     database: 'xviii_database',
//     user: 'root',
//     password: 'password',
// });

var pool = mysql.createPool({
    host: 'us-cdbr-east-05.cleardb.net',
    database: 'heroku_a3258b7e4d7034b',
    user: 'b59ee423efcdd8',
    password: '344cbaa8',
});

// connection.connect((error) => {
//     if (error) throw error;
//     console.log('Connected to database');
// });

module.exports = pool;