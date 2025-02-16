// Sidarbar
// import { maii } from "./sidebar.js";
'use-strict'

document.addEventListener("DOMContentLoaded", function () {
    const sidebarLinks = document.querySelectorAll(".sidebar-container nav ul li a");

    const savedActivePath = localStorage.getItem("activeSidebar");
    const currentPath = window.location.pathname;

    let hasActive = false;

    sidebarLinks.forEach((link) => {
        const linkPath = new URL(link.href).pathname;

        if (!hasActive && (linkPath === savedActivePath || linkPath === currentPath)) {
            link.closest("li").classList.add("active");
            hasActive = true;
        } else {
            link.closest("li").classList.remove("active");
        }

        link.addEventListener("click", (e) => {
            sidebarLinks.forEach((el) => el.closest("li").classList.remove("active"));

            let target = e.target.closest("li");
            if (target) {
                target.classList.add("active");
                localStorage.setItem("activeSidebar", linkPath);
            }
        });
    });
});



