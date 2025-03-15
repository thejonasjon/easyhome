// Utility Codes

'use-strict'

// On page load

if (performance.navigation.type === 1) {
    console.log("Page was refreshed!");
}

if (performance.getEntriesByType("navigation")[0]?.type === "reload") {
    console.log("Page was refreshed 2!");
}

document.addEventListener("DOMContentLoaded", () => {
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const selectedOption = document.getElementById("selected-option");
    const hiddenInput = document.getElementById("dropdown-value");

    if (dropdownBtn) {
        dropdownBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            dropdownMenu.classList.toggle("show");
            dropdownBtn.classList.toggle("active");
        });
    }

    if (dropdownMenu) {
        dropdownMenu.querySelectorAll("li").forEach((item) => {
            item.addEventListener("click", function (e) {
                e.stopPropagation();
                selectedOption.textContent = this.textContent;
                hiddenInput.value = this.dataset.value;
                dropdownBtn.classList.remove("active");
                dropdownMenu.classList.remove("show");
            });
        });
    }

    document.addEventListener("click", () => {
        dropdownMenu.classList.remove("show");
        dropdownBtn.classList.remove("active");
    });
});

// Logout functionality
document.addEventListener("DOMContentLoaded", () => {
    const logoutIcon = document.querySelector(".logout a");
    const logoutModal = document.querySelector("#logoutModal");
    const btns = document.querySelectorAll(".btn-group button");
    const logoutbtn = document.querySelector("nav li:last-child a");

    if (logoutIcon) {
        logoutIcon.addEventListener("click", toggleModal);
    }

    if (logoutbtn) {
        logoutbtn.addEventListener("click", toggleModal);
    }

    function toggleModal() {
        if (logoutModal) {
            logoutModal.classList.toggle("prompt");
        }
    }

    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            if (e.target.id === "logOutYes") {
                localStorage.removeItem("loggedInUser");
                window.location.href = "/src/pages/login.html";
            } else if (logoutModal) {
                logoutModal.classList.toggle("prompt");
            }
        });
    });
});

// Post a property redirect functionality
document.addEventListener("DOMContentLoaded", () => {
    const postPropertyBtn = document.querySelector("#postProperty button");

   if(postPropertyBtn) {
    postPropertyBtn.addEventListener("click", () => {
        window.location.href = "post-property.html";
    })
   }
});

// View details rent funtionality
document.addEventListener("DOMContentLoaded", () => {
    const detailBtns = document.querySelectorAll(".view-details a");

    if(detailBtns) {
        detailBtns.forEach((btn, index) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const detailsRow = document.querySelectorAll(".overview-row")[index];
                detailsRow.style.display = detailsRow.style.display === "table-row" ? "none" : "table-row";
            });
        })
    }
})

// Renew rent funtionality
document.addEventListener("DOMContentLoaded", () => {
    const renewRentBtn = document.querySelector("#renewRent button");
    const checkBtns = document.querySelectorAll(".select-renew");
    const renewBtn = document.querySelector("#renew");
    const textElement = document.querySelector(".rent-renew-cont .text p");

    console.log(textElement)

    if (renewRentBtn) {
        renewRentBtn.addEventListener("click", () => {
            const isCancel = renewRentBtn.textContent === "Cancel";

            checkBtns.forEach((check) => {
                check.style.display = isCancel ? "none" : "flex";
            });

            if (renewBtn) {
                renewBtn.style.display = isCancel ? "none" : "block";
            }

            if (textElement) {
                textElement.style.display = isCancel ? "none" : "block";
            }

            renewRentBtn.textContent = isCancel ? "Renew Rent" : "Cancel";
        });
    }
});






