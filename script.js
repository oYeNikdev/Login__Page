const loginForm = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const successMessage = document.getElementById("successMessage");

const togglePassword = document.getElementById("togglePassword");


loginForm.addEventListener("submit", function (event) {

    // Stop page from refreshing
    event.preventDefault();

    // Clear previous messages
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;


    // Email validation
    if (email.value.trim() === "") {

        emailError.textContent = "Email is required.";
        isValid = false;

    } else if (!email.value.includes("@")) {

        emailError.textContent = "Please enter a valid email.";
        isValid = false;
    }


    // Password validation
    if (password.value.trim() === "") {

        passwordError.textContent = "Password is required.";
        isValid = false;

    } else if (password.value.length < 6) {

        passwordError.textContent =
            "Password must be at least 6 characters.";

        isValid = false;
    }


    // Login successful
    if (isValid) {

        successMessage.textContent = "Login successful!";

        loginForm.reset();
    }
});


// Show / Hide password
togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";
        togglePassword.textContent = "Hide";

    } else {

        password.type = "password";
        togglePassword.textContent = "Show";
    }
});