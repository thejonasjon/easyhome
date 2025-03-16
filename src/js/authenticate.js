// Authentication

'use-strict'

// Funtionality to confirm user is login or not
document.addEventListener("DOMContentLoaded", () => {
    function checkAuth() {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

        if (!loggedInUser || !loggedInUser.email) {
            window.location.href = "/src/pages/login.html";
            return;
        }

        if (!loggedInUser.completedOnboarding) {
            window.location.href = "/src/pages/onboarding.html";
            return;
        }

        const currentPage = window.location.pathname.replace("/src/pages/", "");

        const tenantDashboard = "/src/pages/tenant.html";
        const landlordDashboard = "/src/pages/landlord.html";

        const landlordPages = ["landlord.html", "post-property.html", "my-listings.html", "landlord-profile.html", "performance.html"];

        const tenantPages = ["tenant.html", "overview.html", "tenant-profile.html", "maintenance.html"];

        if (loggedInUser.role === "userTypeTenant" && landlordPages.includes(currentPage)) {
            window.location.href = tenantDashboard;
        } else if (loggedInUser.role === "userTypeLandlord" && tenantPages.includes(currentPage)) {
            window.location.href = landlordDashboard;
        }
    }

    checkAuth();
});




