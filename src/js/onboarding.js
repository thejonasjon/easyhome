// Onboardging functionalities

'use strict'

// Onboarding funtionality
document.addEventListener("DOMContentLoaded", function () {
    const nextButton = document.querySelector("#nextBtn");
    const prevButton = document.querySelector("#prevBtn");
    // const skipButton = document.querySelector("#skipBtn");

    const stages = document.querySelectorAll(".onboarding-steps button");
    const steps = document.querySelectorAll(".form-text-cont .parentStep");
    const stepTwoSubSteps = document.querySelectorAll(".step--2 [class^='step--2-of--']");
    const stepFourSubSteps = document.querySelectorAll(".step--4 [class^='step--4-of--']");
    const subStepsStatus = document.querySelector(".sub-step-update");

    const onboardingScreen = document.querySelector(".onboarding");
    const userVerificationScreen = document.querySelector(".user-verification");

    const businessCACBlock = document.querySelector("#businessCACBlock");

    const userType = sessionStorage.getItem("selectedUserRole");
    let currentStep = 1;
    let totalSteps = stages.length;

    let currentSubStep = 1;
    let totalSubSteps = stepTwoSubSteps.length;

    let currentSubStep4 = 1;
    let totalSubSteps4 = stepFourSubSteps.length;

    if (!userType) {
        alert("Kindly signup again");
        window.location.href = "/src/pages/signup.html";
    }

    if (userType === "userTypeTenant") {
        document.querySelector(".step--2")?.remove();
        stages[1]?.remove();
    }

    function updateStages() {
        stages.forEach((stage, index) => {
            stage.classList.toggle("active", index + 1 === currentStep);
            stage.disabled = index + 1 > currentStep;
        });

        prevButton.style.display = currentStep === 1 ? "none" : "flex";
        // skipButton.style.display = (currentStep === 3 && userType === "userTypeTenant") ||
        //                            (currentStep === 4 && userType === "userTypeLandlord") ? "block" : "none";
    }

    function showSubStep(subStep, subStepDivs) {
        subStepDivs.forEach((subStepDiv, index) => {
            subStepDiv.style.display = index + 1 === subStep ? "block" : "none";
        });
        subStepsStatus.textContent = `${subStep} / ${totalSubSteps}`;
    }


    function showStep(step) {
        steps.forEach((stepDiv, index) => {
            let stepNumber = index + 1;

            if (userType === "userTypeTenant" && stepNumber === 2) {
                stepNumber++;
            }

            if (userType === "userTypeLandlord") {
                if (stepNumber === 2) showSubStep(currentSubStep, stepTwoSubSteps);
                if (stepNumber === 4) showSubStep(currentSubStep4, stepFourSubSteps);
            }

            if (userType === "userTypeTenant" && stepNumber === 4) {
                showSubStep(currentSubStep4, stepFourSubSteps);
            }

            stepDiv.style.display = stepNumber === step ? "flex" : "none";
        });

        updateStages();
    }

    function validateStep(step) {
        let isValid = true;
        const stepDiv = document.querySelector(`.step--${step}`);
        const inputs = stepDiv?.querySelectorAll("input[required], select[required], textarea[required]") || [];

        inputs.forEach((input) => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.border = "0.1px solid red";
            } else {
                input.style.border = "0.1px solid #ccc";
            }
        });

        return isValid;
    }

    nextButton.addEventListener("click", () => {
        if (!validateStep(currentStep)) {
            alert("Please fill in all required fields before proceeding.");
            return;
        }

        if (userType === "userTypeLandlord" && currentStep === 2) {
            businessCACBlock.style.display = "block";
            if (currentSubStep < totalSubSteps) {
                currentSubStep++;
                showSubStep(currentSubStep, stepTwoSubSteps);
                return;
            }
        }

        if (userType === "userTypeLandlord" && currentStep === 4) {
            if (currentSubStep4 < totalSubSteps4) {
                currentSubStep4++;
                showSubStep(currentSubStep4, stepFourSubSteps);
                return;
            }
        }

        if (userType === "userTypeTenant" && currentStep === 4) {
            if (currentSubStep4 < totalSubSteps4) {
                currentSubStep4++;
                showSubStep(currentSubStep4, stepFourSubSteps);
                return;
            }
        }

        currentStep++;

        if (userType === "userTypeTenant" && currentStep === 2) {
            currentStep = 3;
        }

        if (currentStep > totalSteps) {
            onboardingScreen.style.display = "none";
            userVerificationScreen.style.display = "block";
            userVerificationScreen.scrollIntoView({ behavior: "smooth", block: "center" });
        }

        showStep(currentStep);
    });

    prevButton.addEventListener("click", () => {
        if (userType === "userTypeLandlord" && currentStep === 4 && currentSubStep4 > 1) {
            currentSubStep4--;
            showSubStep(currentSubStep4, stepFourSubSteps);
            return;
        }

        if (userType === "userTypeLandlord" && currentStep === 2 && currentSubStep > 1) {
            currentSubStep--;
            showSubStep(currentSubStep, stepTwoSubSteps);
            return;
        }

        currentStep--;

        if (userType === "userTypeTenant" && currentStep === 2) {
            currentStep = 1;
        }

        if (currentStep < 1) currentStep = 1;
        showStep(currentStep);
    });

    stages.forEach((stage, index) => {
        stage.addEventListener("click", () => {
            if (index + 1 <= currentStep) {
                currentStep = index + 1;

                if (userType === "userTypeTenant" && currentStep === 2) {
                    currentStep = 3;
                }

                showStep(currentStep);
            }
        });
    });

    showStep(currentStep);
});

// Stop loader afer 4s
document.addEventListener("DOMContentLoaded", function () {
    const loader = document.querySelector(".loader-wrapper");
    // const headingH4 = document.querySelector(".user-verification .heading h4");

    setTimeout(() => {
        loader.style.animation = "none";
    }, 40000);
});

// Update user onboarding value and and Redirect user to apporperiate page
document.addEventListener("DOMContentLoaded", () => {
    const availableListing = document.querySelector("#availableListing");
    const goDashboard = document.querySelector("#goDashboard");

    const userType = sessionStorage.getItem("selectedUserRole") || "";

    // Retrieve data from localStorage
    let usersData = JSON.parse(localStorage.getItem("UsersData")) || [];
    let activeUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};

    if (!activeUser.email) {
        window.location.href = "/src/pages/signup.html";
    }

    function updateOnboardingStatus() {
        activeUser.completedOnboarding = true;

        usersData = usersData.map(user =>
            user.email === activeUser.email ? { ...user, completedOnboarding: true } : user
        );

        localStorage.setItem("loggedInUser", JSON.stringify(activeUser));
        localStorage.setItem("UsersData", JSON.stringify(usersData));
    }

    goDashboard.addEventListener("click", () => {
        updateOnboardingStatus();
        window.location.href = userType === "userTypeLandlord" ? "/src/pages/landlord.html" : "/src/pages/tenant.html";
    });

    availableListing.addEventListener("click", () => {
        updateOnboardingStatus();
        window.location.href = "/src/pages/property-listings.html";
    });
});

// Custome Document upload
document.addEventListener("DOMContentLoaded", () => {
    const inputGroups = document.querySelectorAll(".input-group-file");

    inputGroups.forEach((group) => {
        const fileInput = group.querySelector(".file-input");
        const fileTrigger = group.querySelector(".sub-input-group-file");
        const fileNameDisplay = group.querySelector(".no-file-chose");

        fileTrigger.addEventListener("click", () => {
            fileInput.click();
        });

        fileInput.addEventListener("change", (event) => {
            if (event.target.files.length > 0) {
                fileNameDisplay.textContent = "File Selected";
            } else {
                fileNameDisplay.textContent = "No File Chosen";
            }
        });
    });
});






