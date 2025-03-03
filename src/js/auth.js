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

// OTP Funtionality, jump to next input at max value
document.querySelectorAll(".otp-input").forEach((input, index, inputs) => {
    input.addEventListener("input", (e) => {
        if (e.target.value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && index > 0 && !e.target.value) {
            inputs[index - 1].focus();
        }
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

// SSO fFuntionality
document.addEventListener("DOMContentLoaded", () => {
    const authContBtns = document.querySelectorAll(".auth-cont button");

    authContBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            alert("Social Login integration will be available soon, Kindly login or signup with credentials. Thank You!");
        });
    });
});










