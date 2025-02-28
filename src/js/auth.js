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

// UserRole auto check as selected from previous page
document.addEventListener("DOMContentLoaded", () => {
    const userTypeRadios = document.querySelectorAll(".user-type input[name='userType']");

    const savedUserRole = sessionStorage.getItem("selectedUserRole");

    if (savedUserRole) {
        userTypeRadios.forEach((radio) => {
            console.log(radio.id)

            if (radio.id === savedUserRole) {
                radio.checked = true;
            }
        });
    }

    userTypeRadios.forEach((radio) => {
        radio.addEventListener("change", () => {
            sessionStorage.setItem("selectedUserRole", radio.id);
        });
    });
});

// Signup validation, to be added later when head is calm

// Login Validiation
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === "tenant@gmail.com" && password === "password") {
            window.location.href = "/src/pages/dashboard.html";
        } else if (email === "landlord@gmail.com" && password === "password") {
            window.location.href = "/src/pages/dashboard.html";
         } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});








