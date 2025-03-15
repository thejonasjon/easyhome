// Rent details
// Slides funtionality
document.addEventListener("DOMContentLoaded", () => {
    const prevBtn = document.querySelector(".slide-navigatoions .backward-left");
    const nextBtn = document.querySelector(".slide-navigatoions .forward-right");

    const slides = document.querySelectorAll(".details-carousel .slide");
    const slideCont = document.querySelector(".slide-cont .count");

    console.log(slides.length)

    let slideIndex = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? "block" : "none";
        });

        slideCont.textContent = `${slideIndex + 1}/${slides.length}`;
    }

    nextBtn.addEventListener("click", () => {
        slideIndex = slideIndex < slides.length - 1 ? slideIndex + 1 : 0;
        updateSlides();
    });

    prevBtn.addEventListener("click", () => {
        slideIndex-- ? slideIndex > 1 : slideIndex = slides.length - 1;
        updateSlides();
    });

    updateSlides();
});

// Play video funtionality
document.addEventListener("DOMContentLoaded", () => {
    const playBtn = document.querySelector(".play-btn");
    const imgDiv = document.querySelector(".video-bg img");
    const iframeDiv = document.querySelector(".video-bg iframe");
    const playerDiv = document.querySelector(".video-wraper .video-icons");

    playBtn.addEventListener("click", () => {
        imgDiv.style.display = "none";
        iframeDiv.style.display = "block";
        playBtn.style.display = "none"
        playerDiv.style.display = "none"

        let videoSrc = iframeDiv.getAttribute("src");

        if (!videoSrc.includes("autoplay=1")) {
            // console.log(videoSrc);
            // console.log(videoSrc.includes("?"));
            // console.log(`${videoSrc}&autoplay=1&controls=0`);

            let newSrc = videoSrc.includes("?")
                ? `${videoSrc}&autoplay=1&controls=0`
                : `${videoSrc}?autoplay=1&controls=0`;
            iframeDiv.setAttribute("src", newSrc);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".contact-form");
    const contactBtn = document.querySelector(".btn-cont .contact-landlord");
    const contactInputs = document.querySelectorAll(".contact-form input[required]");
    const messageTextarea = document.querySelector(".contact-form textarea");

    contactBtn.addEventListener("click", (e) => {
        e.preventDefault();

        let validForm = true;

        contactInputs.forEach((input) => {
            if (input.value.trim() === "") {
                input.style.border = "0.1px solid red";
                validForm = false;
            } else {
                input.style.border = "0.1px solid transparet";
            }

            input.addEventListener("input", () => {
                input.value.trim().length > 0 ? input.style.border = "unset" : input.style.border = "0.1px solid red";
            });

        });

        if (messageTextarea.value.trim() === "") {
            messageTextarea.style.border = "0.1px solid red";
            validForm = false;
        } else {
            messageTextarea.style.border = "unset";
        }

        messageTextarea.addEventListener("input", () => {
            messageTextarea.value.trim().length > 0 ? messageTextarea.style.border = "unset" : messageTextarea.style.border = "0.1px solid red";
        });

        if (validForm) {
            alert("Form submitted successfully!");
            contactForm.reset();
        }
    });
});

// Call & Whatsapp activities
document.addEventListener("DOMContentLoaded", () => {
    const whatsappButton = document.querySelector(".whatsapp");
    const callButton = document.querySelector(".call");

    callButton.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "tel:+2348135319804";
    });

    whatsappButton.addEventListener("click", (e) => {
        e.preventDefault();
        window.open("https://wa.me/2348176473566", "_blank");
    });
});





