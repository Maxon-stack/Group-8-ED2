/**
 * This JavaScript file handles code necessary for the operation of the create_account page.
 * 
 */

// Inputs
const name = document.getElementById('userName');
const username = document.getElementById('userEmail');
const password = document.getElementById('userPassword');

// Buttons
const signupBtn = document.getElementById('signupBtn');
const backToLoginBtn = document.getElementById('backToLoginBtn');

signupBtn.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('Nothing yet!');
})

// Navigate back to login page
backToLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    window.location.href = "index.html";
});