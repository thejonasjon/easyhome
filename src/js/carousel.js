// script for slideshows
'use strict'

const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const slides = document.querySelectorAll(".carousel .slide");
const slideWidth = 530;
const extraSpace = 200;
let index = 0;

function updateCarousel() {
    const totalSlides = slides.length;
    let translateX = -index * slideWidth;

    if (index === totalSlides - 3) {
        translateX -= extraSpace;
    }

    carousel.style.transform = `translateX(${translateX}px)`;

    prevBtn.style.opacity = index === 0 ? "0" : "1";

    nextBtn.style.opacity = index >= totalSlides - 3 ? "0" : "1";
}

nextBtn.addEventListener("click", () => {
    if (index < slides.length - 3) {
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
