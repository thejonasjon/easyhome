// Hamburger funtionalities

'use-strict'

document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");
    const hero = document.querySelector(".hero .content") ||
    document.querySelector(".page-hero .content-static") ||
    document.querySelector(".page-hero--rent");

    const heroPage = document.querySelector(".page-hero header") || document.querySelector(".page-hero--rent header");

    const hamburger = document.querySelector("#hamburger");
    const menuOpen = document.querySelector("#menu-open");
    const menuClose = document.querySelector("#menu-close");
    const navMenu = document.querySelector("#nav-menu");

    menuOpen.addEventListener("click", () => {
        hero.style.backgroundColor = "#2E302D" || "";
        menuOpen.classList.add("hidden");
        menuClose.classList.toggle("hidden");
        navMenu.style.display = "block";
        body.style.overflow = "hidden";
        heroPage.style.backgroundColor = "#2e302d";

    })

    menuClose.addEventListener("click", () => {
        hero.style.backgroundColor = "unset"
        menuOpen.classList.toggle("hidden");
        menuClose.classList.toggle("hidden");
        navMenu.style.display = "none";
        body.style.overflow = "scroll";
        heroPage.style.backgroundColor = "#121312";

    })
});