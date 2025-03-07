// Signup
'use-strict'
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const firstName = document.querySelector("#firstName");
    const lastName = document.querySelector("#lastName");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const userTypeRadios = document.querySelectorAll(".user-type input[name='userType']");
    const signUpBtn = document.querySelector(".btn-cont button");
    const successModal = document.querySelector(".modal-block");
    const otpEmail = document.querySelector(".email");
    const timer = document.querySelector(".timer");
    const resendBtn = document.querySelector("#resendBtn");
    const otpInputs = document.querySelectorAll(".otp-input");

    function getUsersData() {
        return JSON.parse(localStorage.getItem("UsersData")) || [];
    }

    function saveUsersData(users) {
        localStorage.setItem("UsersData", JSON.stringify(users));
    }

    function validateForm() {
        let isValid = true;
        let isChecked = false;
        const requiredFields = [firstName, lastName, email, password];

        requiredFields.forEach((field) => {
            if (!field.value.trim()) {
                field.style.border = "0.5px solid red";
                isValid = false;
            } else {
                field.style.border = "0.5px solid #ccc";
            }
        });

        userTypeRadios.forEach((radio) => {
            if (radio.checked) {
                isChecked = true;
            }
        });

        if (!isChecked) {
            alert("Please select either 'Landlord' or 'Tenant'.");
            isValid = false;
        }

        return isValid;
    }

    function normalizeEmail(email) {
        return email.trim().toLowerCase();
    }

    function getSelectedUserRole() {
        let selectedRole = "";
        userTypeRadios.forEach((radio) => {
            if (radio.checked) {

                // selectedRole = radio.value;
                selectedRole = sessionStorage.getItem("selectedUserRole");
            }
        });
        return selectedRole;
    }

    signUpBtn.addEventListener("click", (e) => {
        e.preventDefault();

        if (!validateForm()) {
            alert("Please fill all required fields.");
            return;
        }

        const usersData = getUsersData();
        const normalizedEmail = normalizeEmail(email.value);

        if (usersData.some(user => user.email === normalizedEmail)) {
            alert("Email already exists. Please use a different email.");
            return;
        }

        const userRole = getSelectedUserRole();
        if (!userRole) {
            alert("Please select either 'Landlord' or 'Tenant'.");
            return;
        }

        const newUser = {
            firstName: firstName.value.trim(),
            lastName: lastName.value.trim(),
            email: normalizedEmail,
            password: password.value,
            role: userRole,
            completedOnboarding: false
        };

        usersData.push(newUser);
        saveUsersData(usersData);

        // activate active session
        localStorage.setItem("loggedInUser", JSON.stringify(newUser));


        // alert("Signup successful!");
        successModal.style.display = "block";
        otpEmail.textContent = `${normalizedEmail}`;

        form.reset();
        userTypeRadios.forEach(radio => radio.checked = false);

        let timeLeft = 60;
        resendBtn.disabled = true;
        resendBtn.style.cursor = "not-allowed";
        resendBtn.style.opacity = "0.6";

        const countdown = setInterval(() => {
            timeLeft--;
            timer.textContent = `${timeLeft}s`;

            if (timeLeft <= 0) {
                clearInterval(countdown);
                resendBtn.disabled = false;
                resendBtn.style.cursor = "pointer";
                resendBtn.style.opacity = "1";
                resendBtn.textContent = "Resend Code";
            }
        }, 1000);
    });

    resendBtn.addEventListener("click", () => {
        let timeLeft = 60;
        resendBtn.disabled = true;
        resendBtn.style.cursor = "not-allowed";
        resendBtn.style.opacity = "0.6";
        resendBtn.textContent = "Resending...";

        setTimeout(() => {
            alert("A new OTP has been sent to your email.");
            resendBtn.textContent = "Resend Code";
            resendBtn.disabled = false;
            resendBtn.style.cursor = "pointer";
            resendBtn.style.opacity = "1";

            const countdown = setInterval(() => {
                timeLeft--;
                timer.textContent = `${timeLeft}s`;

                if (timeLeft <= 0) {
                    clearInterval(countdown);
                    resendBtn.disabled = false;
                    resendBtn.style.cursor = "pointer";
                    resendBtn.style.opacity = "1";
                    resendBtn.textContent = "Resend Code";
                }
            }, 1000);
        }, 2000);
    });

    continueBtn.addEventListener("click", () => {
        let otpValue = "";
        let isOtpFilled = true;

        otpInputs.forEach((input) => {
            if (!input.value.trim()) {
                input.style.border = "0.1px solid red";
                isOtpFilled = false;
            } else {
                input.style.border = "0.1px solid green";
                otpValue += input.value;
            }
        });

        if (!isOtpFilled) {
            alert("Please enter the 6-digit code.");
            return;
        }

        if (otpValue === "123456") {
            window.location.href = "onboarding.html";
        } else {
            alert("TEST MODE: Invalid OTP. Kindly try 123456.");
        }
    });
});
