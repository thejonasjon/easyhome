// Utility Codes

'use-strict'

// On page load

if (performance.navigation.type === 1) {
    console.log("Page was refreshed!");
}

if (performance.getEntriesByType("navigation")[0]?.type === "reload") {
    console.log("Page was refreshed 2!");
}

document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const selectedOption = document.getElementById("selected-option");
    const hiddenInput = document.getElementById("dropdown-value");

    dropdownBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle("show");
        dropdownBtn.classList.toggle("active");
    });

    dropdownMenu.querySelectorAll("li").forEach((item) => {
        item.addEventListener("click", function (e) {
            e.stopPropagation();
            selectedOption.textContent = this.textContent;
            hiddenInput.value = this.dataset.value;
            dropdownBtn.classList.remove("active");
            dropdownMenu.classList.remove("show");
        });
    });

    document.addEventListener("click", () => {
        dropdownMenu.classList.remove("show");
        dropdownBtn.classList.remove("active");
    });
});



