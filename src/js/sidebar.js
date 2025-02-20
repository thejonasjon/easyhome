// Sidarbar
// import { maii } from "./sidebar.js";
'use-strict'

document.addEventListener("DOMContentLoaded", function () {
    const sidebarLinks = document.querySelectorAll(".sidebar-container nav ul li a");

    // Get the saved active path or fallback to current path
    const savedActivePath = localStorage.getItem("activeSidebar") || window.location.pathname;

    sidebarLinks.forEach((link) => {
        const listItem = link.closest("li");
        const linkPath = new URL(link.href).pathname;

        // Remove active from all items
        listItem.classList.remove("active");

        // Set active if it matches saved or current path
        if (linkPath === savedActivePath) {
            listItem.classList.add("active");
        }

        // Click event to update active link
        link.addEventListener("click", function () {
            localStorage.setItem("activeSidebar", linkPath);
        });
    });
});

