const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Cross Origin Resource Sharing

/**
 * Port 3000 for development purposes, our sponsor 
 * should let us know what port is available on their network to use.
 */
const port = 3000;

// Sample API endpoint
app.get('/hello', (request, response) => {
    response.status(200).json('Hello World!');
});

/**
 * This endpoint is for admins logging in.
 * 
 * The idea is to send a request to the db with the request objects being a username and password
 * and see if it matches in our "Admin" table in the DB which is yet to be implemented.
 */
app.get('/login', (request, response) => {

});

/**
 * This endpoint is for creating an account (signing up).
 * 
 * This endpoint will be designed for taking the request object and creating a new row
 * in the admin table in our database, essentially creating a new admin account.
 */
app.post('/signup', (request, response) => {

});

/**
 * Form submission endpoint.
 * 
 * For soldiers submitting their bio sheet, questionnaire, etc., this endpoint will be 
 * designed to inject the data into the database in the appropriate table.
 */
app.post('submit-form', (request, response) => {

});

/**
 * Export data endpoint.
 * 
 * For admins, this endpoint will be designed to pull data from the database and export it 
 * into a CSV file. 
 */
app.get('export-data', (request, response) => {

});

app.listen(port, () => {
    console.log('Listening on port 3000');
});
