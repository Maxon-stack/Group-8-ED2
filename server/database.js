var mysql = require('mysql');
require('dotenv').config();

var connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_DATABASE,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
});

connection.connect((error) => {
    if (error) throw error;
    console.log('Connected to database');
});

module.exports = connection;