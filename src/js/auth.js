'use-strict'

// Password show and hide on input field with type password
const passwordInput = document.querySelector("#password");
const togglePassword = document.querySelector("#toggle-password");
const toggleIcon = document.getElementById("toggle-icon");

togglePassword.addEventListener("click", () => {
    const isPasswordVisible = passwordInput.type === "password";
    passwordInput.type = isPasswordVisible ? "text" : "password";
    toggleIcon.textContent = isPasswordVisible ? "Hide" : "Show";
});