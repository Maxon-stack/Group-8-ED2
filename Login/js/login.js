/**
 * This JavaScript file handles the operation of the admin login page.
 * 
 */

// Login form 
const loginForm = document.getElementById("login-form");

// Buttons
const createAccountButton = document.getElementById("createAccountBtn");

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

    fetch(`http://localhost:3000/login?username=${email}&password=${password}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data == 'Success') {
                alert('Login was successful');
            } else {
                alert('Login attempt failed');
            }
        });

    loginForm.reset();
});

// Navigate to account creation page
createAccountButton.addEventListener('click', (e) => {
    e.preventDefault();

    window.location.href = "create_account.html";
});