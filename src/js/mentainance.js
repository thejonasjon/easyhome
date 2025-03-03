// Mentainance
'use-strict'

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
