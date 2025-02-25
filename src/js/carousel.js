// script for slideshows
"use strict";
// Code need to be improved
document.querySelectorAll(".carouselTarget").forEach((section) => {
    const carousel = section.querySelector(".carousel");
    const prevBtn = section.querySelector(".prev");
    const nextBtn = section.querySelector(".next");
    const slides = carousel.querySelectorAll(".slide");

    let index = 0;
    let slidesLength = slides.length;
    let slideWidth, extraSpace;

    if (section.id === "property-rent--home"){
        slideWidth = 530;
        extraSpace = 200;

    } else if (section.id === "property-rent--available"){
        slideWidth = 350;
        extraSpace = 200;

    } else if(section.id === "property-rent--newly-rented") {
        slideWidth = 280;
        extraSpace = 100;
    }


    function updateCarousel() {
        let translateX = -index * slideWidth;
        if (index === slidesLength - 3) {
            translateX -= extraSpace;
        }

        carousel.style.transform = `translateX(${translateX}px)`;

        if (section.id === "property-rent--home"){
            prevBtn.style.opacity = index === 0 ? "0" : "1";
            nextBtn.style.opacity = index >= slidesLength - 3 ? "0" : "1";
        }

        if (section.id === "property-rent--available"){
            prevBtn.style.opacity = index === 0 ? "0" : "1";
            nextBtn.style.opacity = index >= slidesLength - 3 ? "0" : "1";
        }

        if (section.id === "property-rent--newly-rented"){
            prevBtn.style.opacity = index === 0 ? "0" : "1";
            nextBtn.style.opacity = index >= slidesLength - 3 ? "0" : "1";
        }
    }

    nextBtn.addEventListener("click", () => {
        if (index < slidesLength - 3) {
            index++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });

    updateCarousel();
});
