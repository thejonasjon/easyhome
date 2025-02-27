// Sidarbar
// import { maii } from "./sidebar.js";
'use-strict'

// document.addEventListener("DOMContentLoaded", function () {
//     const sidebarLinks = document.querySelectorAll(".sidebar-container nav ul li a");

//     // Get the saved active path or fallback to current path
//     const savedActivePath = localStorage.getItem("activeSidebar") || window.location.pathname;

//     sidebarLinks.forEach((link) => {
//         const listItem = link.closest("li");
//         const linkPath = new URL(link.href).pathname;

//         // Remove active from all items
//         listItem.classList.remove("active");

//         // Set active if it matches saved or current path
//         if (linkPath === savedActivePath) {
//             listItem.classList.add("active");
//         }

//         // Click event to update active link
//         link.addEventListener("click", function () {
//             localStorage.setItem("activeSidebar", linkPath);
//         });
//     });
// });

// const sidebarLogo = document.querySelector(".sidebar--dashboard .brand-containter");
// const logoText = document.querySelector(".sidebar--dashboard .logo-text");
// const logoIcon = document.querySelector(".sidebar--dashboard .logo-icon");


// console.log(logoIcon)


// if (!logoIcon || !logoText) {
//     console.error("Elements not found!");
//     return;
// }

// logoIcon.addEventListener("click", () => {
//     logoIcon.classList.toggle("hidden");
//     logoText.classList.toggle("hidden");
// });
document.addEventListener("DOMContentLoaded", function () {
    if (window.matchMedia("(max-width: 1024px)").matches) {
        const sidebarCont = document.querySelector(".sidebar--dashboard .sidebar-container");
        const sidebarUl = document.querySelector(".sidebar-container ul");
        const sidebarBrandCont = document.querySelector(".sidebar-container .brand-containter");
        const navLinks = document.querySelectorAll(".sidebar-container nav li a");
        const logoIcon = document.querySelector(".brand-containter .logo-icon");
        const logoText = document.querySelector(".brand-containter .logo-text");

        // navLinks.forEach(link => {
        //     link.classList.remove("active");
        // });

        logoIcon.addEventListener("click", function () {
            // logoText.classList.toggle("active");

            if (logoText.classList.contains("active")) {
                logoText.classList.remove("active");
                logoText.style.visibility = "hidden";
                // sidebarUl.style.alignItems = "center"
                sidebarBrandCont.style.width = "unset"


                navLinks.forEach(link => {
                    link.style.fontSize = "0";
                });

            } else {
                logoText.classList.add("active");
                logoText.style.visibility = "visible";
                sidebarCont.style.width = "fit-content";
                sidebarUl.style.alignItems = "flex-start";
                sidebarBrandCont.style.width = "29rem"

                navLinks.forEach(link => {
                    link.style.fontSize = "1.92rem";
                });

            }
        });
    }
});






