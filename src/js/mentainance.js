// Mentainance
'use-strict'

// Submit request
document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll(".nav-btns button");

    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            navButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    const submitBtn = document.querySelector("#submitIssue");
    const issueModal = document.querySelector(".issue-modal");

    submitBtn.addEventListener("click", () => {
        issueModal.style.display = "flex";
        issueModal.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
            issueModal.style.display = "none";
        }, 2000);
    });
});

// Navigate performance tabs funtionalities
document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll(".nav-btns button");
    const sections = [
        document.querySelector(".mentainance-cont .ment-step"),
        document.querySelector(".my-request"),
        document.querySelector(".maintenance-policies")
    ];

    function showSection(index) {
        sections.forEach((section, i) => {
            if (section) {
                section.style.display = i === index ? "block" : "none";
            }
        });
    }

    showSection(0);
    navButtons[0].classList.add("active");

    navButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            navButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            showSection(index);
        });
    });
});
