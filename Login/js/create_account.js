/**
 * This JavaScript file handles code necessary for the operation of the create_account page.
 * 
 */

// Buttons
const signupBtn = document.getElementById('signupBtn');
const backToLoginBtn = document.getElementById('backToLoginBtn');
const returnToDashboardBtn = document.getElementById('returnToDashboardBtn');

// Form
const signupForm = document.getElementById('signup-form');

signupBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const adminName = signupForm['userName'].value;
    const username = signupForm['userEmail'].value;
    const password = signupForm['userPassword'].value;

    const signupURL = `http://localhost:3000/signup?name=${adminName}&username=${username}&password=${password}`;

    fetch(signupURL)
        .then(response => {
            response.json();
            if (response.status === 201) {
                alert('Account created successfully.');
            } else if (response.status == 403) {
                alert('An account with this email already exists.');
            } else if (response.status === 500) {
                alert('The server responded with an error.')
            } else {
                alert('Failed to create account.');
            }
        });

    signupForm.reset();
})

// Navigate back to login page
backToLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    window.location.href = "index.html";
});

// Navigate back to home page
returnToDashboardBtn.addEventListener('click', (e) => {
    e.preventDefault();

    window.location.href = "../../index.html";
});