// Profile
'use-strict'

// document.addEventListener("DOMContentLoaded", () => {
//     const profileEditBtn = document.querySelector("editProfile");



// })
// Prefill profile
document.addEventListener("DOMContentLoaded", function () {
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));

    if (userProfile) {
        document.querySelector(".profile-name").textContent = `${userProfile.firstName} ${userProfile.lastName}`;
        // document.querySelector(".profile-photo img").src = userProfile.profileImage;

        const fields = {
            "First Name": userProfile.firstName,
            "Last Name": userProfile.lastName,
            "Email Address": userProfile.email,
            "Phone Number": userProfile.phoneNumber,
            "Occupation": userProfile.occupation,
            "Country": userProfile.country,
            "State": userProfile.state,
            "LGA": userProfile.lga,
            "Postal Code": userProfile.postalCode,
            "Residential Address": userProfile.residentialAddress,
            "Account Number": userProfile.accountNumber,
            "Account Name": userProfile.accountName,
            "Bank": userProfile.bank
        };

        document.querySelectorAll(".details .sub-info").forEach(detail => {
            const label = detail.querySelector(".label")?.textContent.trim();
            if (label && fields[label]) {
                detail.querySelector(".label-value").textContent = fields[label];
            }
        });
    }
});


// Edit profile
document.addEventListener("DOMContentLoaded", () => {
    const editProfileBtn = document.getElementById("editProfile");
    const profileForm = document.querySelector(".profile-edit form");
    const profileSection = document.querySelector(".profile");
    const profileEditSection = document.querySelector(".profile-edit");


    if (!profileForm) return;

    function loadProfileData() {
        const storedProfile = JSON.parse(localStorage.getItem("userProfile")) || {};

        profileForm.querySelectorAll("input").forEach(input => {
            input.value = storedProfile[input.name] || "";
        });
    }

    function validateForm() {
        let isValid = true;

        profileForm.querySelectorAll("input[required]").forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add("error");
            } else {
                input.classList.add("error");
            }
        });

        return isValid;
    }

    editProfileBtn?.addEventListener("click", () => {
        loadProfileData();
        profileSection.style.display = "none";
        profileEditSection.style.display = "block";
        editProfileBtn.style.display = "none";
    });

    profileForm.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!validateForm()) {
            alert("Please fill in all required fields.");
            return;
        }

        const updatedProfile = {};
        profileForm.querySelectorAll("input").forEach(input => {
            updatedProfile[input.name] = input.value;
        });

        localStorage.setItem("userProfile", JSON.stringify(updatedProfile));

        alert("Profile updated successfully!");
        location.reload();
    });

    loadProfileData();
});




