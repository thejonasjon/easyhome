// Authentication

'use-strict'

// Funtionality to confirm user is login or not
document.addEventListener("DOMContentLoaded", () => {
    function checkAuth() {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

        if (!loggedInUser) {
            window.location.href = "login.html";
        }
    }

    checkAuth();
})

