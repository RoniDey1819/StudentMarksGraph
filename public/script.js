document.addEventListener('DOMContentLoaded', () => {
    // The `students` and `stats` objects should be injected or loaded via fetch.
    // For now, you can embed them inline with <script> or load from JSON file.

    const students = window.studentsData;
    const stats = window.statsData;
    const subjects = ['Operating System', 'DBMS', 'Cyber Security', 'Theory of Computation'];

    // Chart 1: Student-wise Total Marks
    const ctx1 = document.getElementById('distributionChart').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: students.map(s => s.name),
            datasets: subjects.map((subject, index) => ({
                label: subject,
                data: students.map(s => s.marks[subject]),
                backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545'][index]
            }))
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                    ticks: { autoSkip: false, maxRotation: 90, minRotation: 90 }
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    max: 400,
                    title: {
                        display: true,
                        text: 'Total Marks (0–400)'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Student-wise Total Marks (Stacked by Subject)'
                }
            }
        }
    });

    // Chart 2: High/Low by Subject
    const ctx2 = document.getElementById('performanceChart').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: subjects,
            datasets: [
                {
                    label: 'Above 90 marks',
                    data: subjects.map(s => stats.above90.bySubject[s]),
                    backgroundColor: '#28a745'
                },
                {
                    label: 'Below 40 marks',
                    data: subjects.map(s => stats.below40.bySubject[s]),
                    backgroundColor: '#dc3545'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'High and Low Performers by Subject'
                }
            }
        }
    });
});
