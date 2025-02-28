// Signup
'use-strict'

// Signup functionality
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const firstName = document.querySelector("#firstName");
    const lastName = document.querySelector("#LastName");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const userTypeRadios = document.querySelectorAll(".user-type input[name='userType']");
    const signUpBtn = document.querySelector(".btn-cont button");
    const successModal = document.querySelector(".modal-block");
    const otpInputs = document.querySelectorAll(".modal-input-group input");
    const continueBtn = document.querySelector("#continueBtn");
    const resendBtn = document.querySelector("#resendBtn");
    const timer = document.querySelector(".timer");
    const otpEmail = document.querySelector(".email");

    function validateForm() {
        let isValid = true;
        let isChecked = false;
        const requiredFields = [firstName, lastName, email, password];

        requiredFields.forEach((field) => {
            if (!field.value.trim()) {
                field.style.border = "1px solid red";
                isValid = false;
            } else {
                field.style.border = "1px solid #ccc";
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

    document.querySelectorAll("input").forEach((input) => {
        input.addEventListener("input", () => {
            input.style.border = "1px solid #ccc";
        });
    });

    signUpBtn.addEventListener("click", (e) => {
        if (!validateForm()) {
            alert("Please fill all required fields.");
            e.preventDefault();
            return;
        }

        localStorage.setItem("userEmail", email.value);
        successModal.style.display = "block";
        form.reset();

        let userEmail = localStorage.getItem("userEmail");
        if (userEmail && otpEmail) {
            otpEmail.textContent = `${userEmail}`;
        }

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
        if (!resendBtn.disabled) {
            alert("Code resent successfully");

            let timeLeft = 60;
            resendBtn.disabled = true;
            resendBtn.style.cursor = "not-allowed";
            resendBtn.style.opacity = "0.6";
            resendBtn.textContent = `Resend Code in`;

            const restartCountdown = setInterval(() => {
                timeLeft--;
                timer.textContent = `${timeLeft}s`;

                if (timeLeft <= 0) {
                    clearInterval(restartCountdown);
                    resendBtn.disabled = false;
                    resendBtn.style.cursor = "pointer";
                    resendBtn.style.opacity = "1";
                    resendBtn.textContent = "Resend Code";
                }
            }, 1000);
        }
    });

    continueBtn.addEventListener("click", () => {
        let otpValue = "";
        let isOtpFilled = true;

        otpInputs.forEach((input) => {
            if (!input.value.trim()) {
                input.style.border = "0.5px solid red";
                isOtpFilled = false;
            } else {
                input.style.border = "1px solid #ccc";
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
            alert("Invalid OTP. Please try again.");
        }
    });
});