document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.querySelector("#performanceChart").getContext("2d");

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: "Rent",
                data: [10, 85, 45, 60, 78, 90, 95, 80, 70, 60, 55, 45],
                borderColor: "#66FF66",
                backgroundColor: "rgba(102, 255, 102, 0.2)",
                borderWidth: 2,
                tension: 0.4
            },
            {
                label: "Short Let",
                data: [5, 70, 60, 80, 85, 100, 65, 75, 85, 95, 100, 110],
                borderColor: "#FF5733",
                backgroundColor: "rgba(255, 87, 51, 0.2)",
                borderWidth: 2,
                tension: 0.4
            }
        ]
    };

    new Chart(ctx, {
        type: "line",
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: "#FAF9F8",
                        borderDash: [4, 4],
                        lineWidth: 1,
                        drawBorder: false,
                        drawTicks: false
                    },
                    ticks: {
                        color: "#FAF9F8"
                    }
                },
                x: {
                    grid: {
                        color: "#FAF9F8",
                        borderDash: [4, 4],
                        lineWidth: 1,
                        drawBorder: false,
                        drawTicks: false
                    },
                    ticks: {
                        color: "#FAF9F8"
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
});

// Bar chart
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.querySelector("#rentingChart").getContext("2d");

const rentingChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Oct 2024", "Nov 2024", "Dec 2024", "Jan 2025", "Feb 2025"],
        datasets: [
            {
                label: "Short Let",
                data: [60, 50, 90, 30, 30],
                backgroundColor: "#BF4469",
                borderRadius: 3,
            },
            {
                label: "Rent",
                data: [80, 70, 30, 90, 50],
                backgroundColor: "#D48166",
                borderRadius: 3,
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: { color: "white" }
            },
            x: {
                ticks: { color: "white" }
            }
        },
        plugins: {
            legend: { display: false }
        }
    }
});

})
