document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const loginLink = document.querySelector(".login-link");
    const registerLink = document.querySelector(".register-link");

    loginLink.addEventListener("click", function () {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    });

    registerLink.addEventListener("click", function () {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });
});