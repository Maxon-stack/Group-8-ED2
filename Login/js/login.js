/**
 * This JavaScript file handles the operation of the admin login page.
 * 
 */

// Login form 
const loginForm = document.getElementById("login-form");

// Buttons
const createAccountButton = document.getElementById("createAccountBtn");
const returnToDashboardBtn = document.getElementById('returnToDashboardBtn');

/**
 * On submitting the form, login with the user's credentials.
 * If there is an error, an alert is displayed to the user.
 */
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm['userEmail'].value;
    const password = loginForm['userPassword'].value;

    const jsonData = {
        username: `${email}`,
        password: `${password}`
    };

    const loginURL = `http://localhost:3000/login`;

    fetch(loginURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
    })
        .then(response => {
            response.json();
            if (response.status === 200) {
                alert('Logged in successfully.');
                window.location.replace('Admin/index.html');
            } else if (response.status === 404) {
                alert('An account with this email was not found. Try creating an account.');
            } else if (response.status === 401) {
                alert('Login failure. Try a different password.');
            } else if (response.status === 403) {
                alert('Access denied.');
            }
            else {
                alert('Failed to login.');
            }
        });

    loginForm.reset();
});

// Navigate to account creation page
// createAccountButton.addEventListener('click', (e) => {
//     e.preventDefault();

//     window.location.href = "create_account.html";
// });

// Navigate back to home page
returnToDashboardBtn.addEventListener('click', (e) => {
    e.preventDefault();

    window.location.replace('../../index.html');
});