// Authentication

'use-strict'

// Funtionality to confirm user is login or not
document.addEventListener("DOMContentLoaded", () => {
    function checkAuth() {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

        if (!loggedInUser || !loggedInUser.email) {
            window.location.href = "login.html";
            return;
        }

        if (!loggedInUser.completedOnboarding) {
            window.location.href = "onboarding.html";
            return;
        }
    }
    checkAuth();
});

