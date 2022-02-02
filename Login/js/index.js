/**
 * This JavaScript file handles the Firebase configuration data and initialized an instance
 * of Firebase authentication. 
 * 
 * Author: Marlon Orellana
 */

var firebaseConfig = {
    apiKey: "AIzaSyDSzE57km6Lu-w5L-ed8mhV0un5YU6bzRg",
    authDomain: "project-demo-99e28.firebaseapp.com",
    projectId: "project-demo-99e28",
    storageBucket: "project-demo-99e28.appspot.com",
    messagingSenderId: "367018460384",
    appId: "1:367018460384:web:2fdf73df35a3f24933bc85",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Get a reference to the login form
const loginForm = document.getElementById("login-form");
const createAccountButton = document.getElementById("createAccountBtn");

/**
 * On submitting the form, login with the user's credentials.
 * If there is an error, an alert is displayed to the user.
 */
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm['userEmail'].value;
    const password = loginForm['userPassword'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        loginForm.reset();

        // Navigate to admin page here
    }).catch(error => {
        alert(error.message);
    })
})

// Testing sample api endpoint, though this endpoint will be used in the future 
// to create an account
createAccountButton.addEventListener('click', (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/hello')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            loginForm.reset();
        });
});