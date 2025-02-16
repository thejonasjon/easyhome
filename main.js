'use-strict'

// Footer current date
const currentYear = new Date().getFullYear();
document.querySelector("#footer-date").innerHTML = currentYear;

// Dropdown funtionalities
document.addEventListener("DOMContentLoaded", function () {
    const dropdownOptions = document.querySelectorAll(".dropdown-option");

    dropdownOptions.forEach(dropdown => {
        const dropdownBtn = dropdown.querySelector("button");
        const dropdownMenu = dropdown.querySelector(".dropdown-btn-group");
        const dropdownItems = dropdownMenu.querySelectorAll("button");

        // Toggle dropdown show/hide
        dropdownBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            closeAllDropdowns();
            dropdownMenu.classList.toggle("show");
        });

        dropdownItems.forEach(item => {
            item.addEventListener("click", (e) => {
                e.stopPropagation();

                dropdownBtn.innerText = e.target.innerText;
                dropdownMenu.classList.remove("show");
            });
        });
    });

    document.addEventListener("click", () => {
        closeAllDropdowns();
    });

    // Function to close all dropdowns
    function closeAllDropdowns() {
        document.querySelectorAll(".dropdown-btn-group").forEach(menu => {
            menu.classList.remove("show");
        });
    }
});

// NaviLink Dropdown funtionalities
document.addEventListener("DOMContentLoaded", function () {
    const dropdownOptions = document.querySelectorAll(".navLink-dropdown-option");

    dropdownOptions.forEach(option => {
        const dropdownMenu = option.querySelector(".navLink-dropdown");

        option.addEventListener("click", (e) => {
            e.stopPropagation();
            closeAllDropdowns();
            dropdownMenu.classList.toggle("show");
        });

        option.addEventListener("mouseenter", (e) => {
            e.stopPropagation();
            closeAllDropdowns();
            dropdownMenu.classList.toggle("show");
        });
    });

    document.addEventListener("click", () => {
        closeAllDropdowns();
    });

    function closeAllDropdowns() {
        document.querySelectorAll(".navLink-dropdown").forEach(menu => {
            menu.classList.remove("show");
        });
    }
});
