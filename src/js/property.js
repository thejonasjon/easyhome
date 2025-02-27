// Property posting

'use strict'

const wrap = document.querySelector(".wrap");

// Property Title Input
const propertyTitleInput = document.querySelector(".wrap .input-group input[type='text']");

// Purpose Checkboxes
const rentCheckbox = document.querySelector(".wrap input[name='rent']");
const shortLetCheckbox = document.querySelector(".wrap input[name='shortLet']");

// Type of Property Checkboxes
const flatOrRentCheckbox = document.querySelector(".wrap input[name='flat-or-rent']");
const houseCheckbox = document.querySelector(".wrap input[name='short-let']");

// Subtype Dropdown Button
const subtypeDropdownBtn = document.querySelector(".wrap .dropdown-option button");

// Subtype Dropdown Options
const subtypeDropdownOptions = document.querySelectorAll(".wrap .dropdown-btn-group button");

// Address Fields
const stateInput = document.querySelector(".wrap #state");
const lgaInput = document.querySelector(".wrap #LGA");
const townInput = document.querySelector(".wrap #town");
const streetEstateInput = document.querySelector(".wrap #streetEstate");

// Wrap 2
const wrapStep2 = document.querySelector(".wrap.step-2");

// Number Inputs
const noOfBedroom = document.querySelector(".wrap.step-2 #noOfBedroom");
const noOfBathroom = document.querySelector(".wrap.step-2 #noOfBathroom");
const noOfToilet = document.querySelector(".wrap.step-2 #noOfToilet");

// Feature Checkboxes
const boreholeCheckbox = document.querySelector(".wrap.step-2 #borehole");
const servicedCheckbox = document.querySelector(".wrap.step-2 #serviced");
const parkingSpaceCheckbox = document.querySelector(".wrap.step-2 #parking-space");
const petsAllowedCheckbox = document.querySelector(".wrap.step-2 #pets-allowed");
const prepaidMeterCheckbox = document.querySelector(".wrap.step-2 #prepaid");
const cctvCheckbox = document.querySelector(".wrap.step-2 #cctv");
const swimmingPoolCheckbox = document.querySelector(".wrap.step-2 #swimming-pool");
const fencedCheckbox = document.querySelector(".wrap.step-2 #fence");
const furnishedCheckbox = document.querySelector(".wrap.step-2 #furnished");
const generatorCheckbox = document.querySelector(".wrap.step-2 #generator");
const securityCheckbox = document.querySelector(".wrap.step-2 #security");
const popCeilingCheckbox = document.querySelector(".wrap.step-2 #popCeiling");
const newlyBuiltCheckbox = document.querySelector(".wrap.step-2 #newlyBuilt");
const airConditionerCheckbox = document.querySelector(".wrap.step-2 #airConditioner");
const networkAccessCheckbox = document.querySelector(".wrap.step-2 #networkAccess");
const gatedHousesCheckbox = document.querySelector(".wrap.step-2 #gatedHouses");

// Textarea Inputs
const descriptionInput = document.querySelector(".wrap.step-2 #description");

// Price and Duration
const priceInput = document.querySelector(".wrap.step-2 #price");
const durationInput = document.querySelector(".wrap.step-2 #duration");


// Wrap 3
const wrapStep3 = document.querySelector(".wrap.step-3");

const tcPP = document.querySelector(".terms-condition-privacy-policy #TCPP");
console.log(tcPP)

// Upload file
// Add more file functionality
document.addEventListener("DOMContentLoaded", () => {
    const parentUploadBlock = document.querySelector(".upload-photo-group");

    parentUploadBlock.addEventListener("click", function (event) {
        const container = event.target.closest(".upload-image");
        if (!container) return;

        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";

        fileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                const fileUploaded = new FileReader();
                fileUploaded.onload = function (e) {
                    container.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image" style="width: 100%; height: auto; border-radius: 8px;">`;
                };
                fileUploaded.readAsDataURL(file);
            }
        });

        fileInput.click();
    });

    // Add More button functionality
    const addMoreFileBtn = document.querySelector(".add-more");

    addMoreFileBtn.addEventListener("click", () => {
        const isClicked = true;
        for (let i = 0; i < 3; i++) {
            const index = parentUploadBlock.children.length + 1;
            const fileBlock = document.createElement("div");
            fileBlock.classList.add("upload-image", "flex", "flex-column", "justify-center");

            fileBlock.innerHTML = `
                <p>${index}</p>
                <div class="svg-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="#fff" fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879l.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0zm10.125-7.81a1.125 1.125 0 1 1 2.25 0a1.125 1.125 0 0 1-2.25 0" clip-rule="evenodd" />
                    </svg>
                </div>
                <p class="add-text-svg flex align-center gap--4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
                        <path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v12m6-6H6" />
                    </svg>
                    Add Image
                </p>
            `;

            parentUploadBlock.appendChild(fileBlock);
        }

        if(isClicked){
            addMoreFileBtn.style.cursor = "not-allowed";
            addMoreFileBtn.style.opacity = "0.5";
            addMoreFileBtn.replaceWith(addMoreFileBtn.cloneNode(true));
        }

    });
});

// Upload video funtionality
document.addEventListener("DOMContentLoaded", () => {
    const uploadVideoContainer = document.querySelector(".upload-video");

    uploadVideoContainer.addEventListener("click", function () {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "video/*";

        fileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                const maxSize = 1 * 1024 * 1024 * 1024;
                if (file.size > maxSize) {
                    alert("File size exceeds 1GB. Please upload a smaller video.");
                    return;
                }

                const fileReader = new FileReader();
                fileReader.onload = function (e) {
                    uploadVideoContainer.innerHTML = `
                        <video controls style="width: 100%; border-radius: 8px;">
                            <source src="${e.target.result}" type="${file.type}">
                            Your browser does not support the video tag.
                        </video>
                    `;
                };
                fileReader.readAsDataURL(file);
            }
        });

        fileInput.click();
    });
});

// Form steps funtionalities
document.addEventListener("DOMContentLoaded", () => {
    let currentStep = 1;
    const totalSteps = 3;
    const steps = document.querySelectorAll(".steps button");
    const btnContinue = document.querySelector("#continue");

    function showStep(step) {
        document.querySelector(`.steps [step-data="${step}"]`).classList.add("active")

        if (step === 1){
            document.querySelector(".step-1").style.display = "block";
            document.querySelector(".step-2").style.display = "none";
            document.querySelector(".step-3").style.display = "none";
        } else if(step === 2) {
            document.querySelector(".step-1").style.display = "none";
            document.querySelector(".step-2").style.display = "block";
            document.querySelector(".step-3").style.display = "none";
        } else if(step === 3) {
            document.querySelector(".step-1").style.display = "none";
            document.querySelector(".step-2").style.display = "none";
            document.querySelector(".step-3").style.display = "block";
        } else {
            alert("Something went wrong!")
        }

        btnContinue.textContent = step === totalSteps ? "Submit" : "Continue";
        btnContinue.type = step === totalSteps ? "submit" : "button";
    }

    btnContinue.addEventListener("click", () => {
        if (currentStep < totalSteps) {
            currentStep++;
            steps.forEach((stp) => {
                const stepNumber = parseInt(stp.getAttribute("step-data"));
                if (stepNumber === currentStep) {
                    stp.classList.add("active");
                } else {
                    stp.classList.remove("active");
                }
            });
            showStep(currentStep);
        } else {
            alert("Form submitted!");
        }
    });

    steps.forEach((step) => {
        step.addEventListener("click", () => {
            const stepNumber = parseInt(step.getAttribute("step-data"));
            currentStep < stepNumber ? currentStep++ : currentStep--;

            steps.forEach((stp) => {
                if (stp === currentStep) {
                    stp.classList.add("active");
                } else {
                    stp.classList.remove("active");
                }
            });
            showStep(currentStep);
        });
    });

    showStep(currentStep);
});


