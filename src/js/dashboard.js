const ctx = document.querySelector("#performanceChart").getContext('2d');

const data = {
    labels: ['Jan 2025', 'Feb 2025'],
    datasets: [
        {
            label: 'Rent',
            data: [10, 85],
            borderColor: '#66FF66',
            backgroundColor: 'rgba(102, 255, 102, 0.2)',
            borderWidth: 2,
            tension: 0.4
        },
        {
            label: 'Short Let',
            data: [5, 70],
            borderColor: '#FF5733',
            backgroundColor: 'rgba(255, 87, 51, 0.2)',
            borderWidth: 2,
            tension: 0.4
        }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'white'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.3)',
                    borderDash: [5, 5]
                }
            },
            x: {
                ticks: {
                    color: 'white'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.3)',
                    borderDash: [5, 5]
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
};

new Chart(ctx, config);
