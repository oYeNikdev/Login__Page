const loginForm = document.getElementById("loginForm");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const formMessage = document.getElementById("formMessage");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    formMessage.textContent =
        "This prototype is not connected to college authentication yet. No credentials were sent or checked.";
});

togglePassword.addEventListener("click", function () {
    const shouldShowPassword = password.type === "password";
    password.type = shouldShowPassword ? "text" : "password";
    togglePassword.textContent = shouldShowPassword ? "Hide" : "Show";
    togglePassword.setAttribute("aria-label", shouldShowPassword ? "Hide password" : "Show password");
    togglePassword.setAttribute("aria-pressed", String(shouldShowPassword));
});

document.getElementById("forgotPassword").addEventListener("click", function () {
    formMessage.textContent =
        "Password recovery will be available when the college authentication method is chosen.";
});

document.getElementById("getHelp").addEventListener("click", function () {
    formMessage.textContent =
        "For this prototype, contact your college IT support team for account access help.";
});

loginForm.addEventListener("input", function () {
    formMessage.textContent = "";
});
