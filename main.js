'use-strict'

// Footer current date
const currentYear = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", function () {
    const footerDate = document.querySelector("#footer-date");
    if (footerDate) {
        footerDate.textContent = new Date().getFullYear();
    }
});

// Dropdown funtionalities
document.addEventListener("DOMContentLoaded", () => {
    const dropdownOptions = document.querySelectorAll(".dropdown-option");
    const homePage = document.querySelector(".search-container--home");
    const postPropertyPage = document.querySelector(".post-a-property");
    const onboardingPage = document.querySelector(".onboarding");

    dropdownOptions.forEach(dropdown => {
        const dropdownBtn = dropdown.querySelector("button");
        const dropdownMenu = dropdown.querySelector(".dropdown-btn-group");
        const dropdownItems = dropdownMenu.querySelectorAll("button");

        dropdownBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            closeAllDropdowns();
            dropdownMenu.classList.toggle("show");
            // console.log(dropdownBtn.innerText)

            if (homePage) {
                console.log(homePage)
                dropdownBtn.style.backgroundColor = '#e3ab99';
            } else {
                dropdownBtn.style.backgroundColor = '#4D4B4A';
                dropdownBtn.style.color = '#fff'
            }

            if (postPropertyPage) {
                dropdownBtn.style.border = '1px solid #e3ab99';
                dropdownBtn.style.backgroundColor = 'transparent';

            } else {
                // dropdownBtn.style.backgroundColor = '#4D4B4A';
                dropdownBtn.style.color = '#fff'
            }

            if (onboardingPage) {
                dropdownBtn.style.color = '#bcbdbc';
                dropdownBtn.style.backgroundColor = '#000';

            } else {
                dropdownBtn.style.color = '#fff'
                dropdownBtn.style.backgroundColor = '#000';
            }

        });

        dropdownItems.forEach(item => {
            item.addEventListener("click", (e) => {
                e.stopPropagation();

                // dropdownBtn.innerText = e.target.innerText;
                const btnTextNode = dropdownBtn.childNodes[0];
                if (btnTextNode.nodeType === Node.TEXT_NODE) {
                    btnTextNode.textContent = e.target.innerText.trim() + " ";
                }
                dropdownMenu.classList.remove("show");

                if (postPropertyPage) {
                    dropdownBtn.style.border = 'unset';
                    dropdownBtn.style.backgroundColor = '#7a7c79';
                }

                if (onboardingPage) {
                    dropdownBtn.style.color = '#383838';
                    dropdownBtn.style.backgroundColor = '#db9680';
                }
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
document.addEventListener("DOMContentLoaded", () => {
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

// User role selection functionality
document.addEventListener("DOMContentLoaded", () => {
    const userRoleOptions = document.querySelectorAll(".navLink-dropdown.signup li a");

    const roleMapping = {
        "As Homeowner": "userTypeLandlord",
        "As Tenant": "userTypeTenant"
    };

    console.log(roleMapping["As Tenant"])

    if (userRoleOptions) {
        userRoleOptions.forEach((role) => {
            role.addEventListener("click", (event) => {
                event.preventDefault();
                const selectedRoleText = event.target.textContent.trim();

                if (roleMapping[selectedRoleText]) {
                    sessionStorage.setItem("selectedUserRole", roleMapping[selectedRoleText]);

                    // Redirect to signup page
                    window.location.href = "/src/pages/signup.html";
                }
            });
        });
    }
});

// Newsletter Funtionality
document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.querySelector(".footer-content input[type='email']");
    const submitButton = document.querySelector(".footer-content .input-group button");
    const sectionCont = document.querySelector(".footer-content .shift-right");

    const newsletterModal = document.querySelector(".newsletter-subscription-modal");
    const newletterBtn = document.querySelector("#newletterBtn");

    const body = document.querySelector("body");

    // newsLetterPrompt
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();

        const emailValue = emailInput.value.trim();

        removeMessage();

        if (!emailValue) {
            emailInput.style.border = "0.5px solid red";
            displayMessage("Email is required!", "#300101");
        } else {
            newsletterModal.classList.toggle("newsLetterPrompt");
            body.style.overflow = newsletterModal.classList.contains("newsLetterPrompt") ? "hidden" : "auto";
        }
    });

    if (newletterBtn) {
        newletterBtn.addEventListener("click", () => {
            emailInput.value = ""
            newsletterModal.classList.toggle("newsLetterPrompt");
            body.style.overflow = newsletterModal.classList.contains("newsLetterPrompt") ? "hidden" : "auto";
        });
    }

    function displayMessage(message, color) {
        const msgElement = document.createElement("p");
        msgElement.classList.add("message");
        msgElement.textContent = message;
        msgElement.style.color = color;
        msgElement.style.fontSize = "1.4rem";
        msgElement.style.marginTop = "0.5rem";
        sectionCont.appendChild(msgElement);
    }

    function removeMessage() {
        const existingMessage = sectionCont.querySelector(".message");
        if (existingMessage) {
            existingMessage.remove();
        }
    }

    emailInput.addEventListener("input", () => {
        emailInput.style.border = "unset";
        removeMessage();
    });
});







