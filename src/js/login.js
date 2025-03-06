// Login

'use-strict'

// Log user in and store active session
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("form");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const usersData = JSON.parse(localStorage.getItem("UsersData")) || [];
        const normalizedEmail = emailInput.value.trim().toLowerCase();
        const password = passwordInput.value;

        const user = usersData.find(user => user.email === normalizedEmail);

        if (!user) {
            alert("User not found. Please sign up.");
            return;
        }

        if (user.password !== password) {
            alert("Incorrect credentials. Try again.");
            return;
        }

        localStorage.setItem("loggedInUser", JSON.stringify(user));

        if (user.role === "userTypeTenant") {
            window.location.href = "/src/pages/tenant.html";
        } else if (user.role === "userTypeLandlord") {
            window.location.href = "/src/pages/landlord.html";
        } else {
            alert("Invalid role detected.");
        }
    });
});
