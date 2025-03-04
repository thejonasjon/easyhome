// My Listings
'Use-strict'

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".listing-nav button");
    const rentListings = document.querySelector("#rentListings");
    const shortletListings = document.querySelector("#shortletListings");

    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Show/hide listings based on button index
            if (index === 0) {
                rentListings.style.display = "flex";
                shortletListings.style.display = "none";
            } else {
                rentListings.style.display = "none";
                shortletListings.style.display = "flex";
            }
        });
    });

    buttons[0].click();
});

// Filter funtionality
document.addEventListener("DOMContentLoaded", () => {
    // Filter functionality
});






