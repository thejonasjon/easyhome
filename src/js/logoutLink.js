'use-strict'

// Hide login & signup link if user is login
document.addEventListener("DOMContentLoaded", () => {
    const logoutLink = document.querySelector(".logoutLink");
    const loginLink = document.querySelector(".loginLink");
    const signupLink = document.querySelector(".signupLink");

    console.log(signupLink)


    function showLink() {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

        if (!loggedInUser || !loggedInUser.email) {
            console.log(`Test ${loggedInUser.email}`)
            loginLink.style.display = "block";
            signupLink.style.display = "block";

        } else {
            logoutLink.style.display = "block";
            loginLink.style.display = "none";
            signupLink.style.display = "none";
        }
    }
    showLink();
});