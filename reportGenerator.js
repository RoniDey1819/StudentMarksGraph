// reportGenerator.js

function generateHTMLReport(students, stats) {
    const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology'];

    let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Student Marks Distribution Report</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background-color: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        h1, h2 { color: #333; text-align: center; }
        .chart-container { width: 100%; height: 400px; margin: 20px 0; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0; }
        .stat-card { background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #007bff; }
        .stat-number { font-size: 24px; font-weight: bold; color: #007bff; }
        .table-container { overflow-x: auto; margin: 20px 0; }
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: 8px; text-align: center; border: 1px solid #ddd; }
        th { background-color: #f8f9fa; font-weight: bold; }
        .high-score { background-color: #d4edda; }
        .low-score { background-color: #f8d7da; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Student Marks Distribution Analysis</h1>
        <p style="text-align: center; color: #666;">Analysis of 40 students across 4 subjects</p>
        
        <div class="stats-grid">
            <div class="stat-card">
                <h3>High Performers (>90)</h3>
                <div class="stat-number">${stats.above90.total}</div>
                <p>Students with at least one subject >90 marks</p>
            </div>
            <div class="stat-card">
                <h3>Low Performers (<40)</h3>
                <div class="stat-number">${stats.below40.total}</div>
                <p>Students with at least one subject <40 marks</p>
            </div>
        </div>
        
        <h2>Marks Distribution by Subject</h2>
        <div class="chart-container">
            <canvas id="distributionChart"></canvas>
        </div>
        
        <h2>Performance Statistics by Subject</h2>
        <div class="chart-container">
            <canvas id="performanceChart"></canvas>
        </div>
        
        <h2>Detailed Student Marks</h2>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>Mathematics</th>
                        <th>Physics</th>
                        <th>Chemistry</th>
                        <th>Biology</th>
                        <th>Average</th>
                    </tr>
                </thead>
                <tbody>`;

    students.forEach(student => {
        const total = Object.values(student.marks).reduce((sum, mark) => sum + mark, 0);
        const average = (total / 4).toFixed(1);

        html += `
                    <tr>
                        <td>${student.id}</td>
                        <td>${student.name}</td>`;

        subjects.forEach(subject => {
            const mark = student.marks[subject];
            const cssClass = mark > 90 ? 'high-score' : mark < 40 ? 'low-score' : '';
            html += `<td class="${cssClass}">${mark}</td>`;
        });

        html += `<td><strong>${average}</strong></td>
                    </tr>`;
    });

    html += `
                </tbody>
            </table>
        </div>
    </div>

    <script>
        const ctx1 = document.getElementById('distributionChart').getContext('2d');
        new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
                datasets: [
                    {
                        label: '0-20',
                        data: [${subjects.map(s => stats.distribution[s]['0-20']).join(', ')}],
                        backgroundColor: '#dc3545'
                    },
                    {
                        label: '21-40',
                        data: [${subjects.map(s => stats.distribution[s]['21-40']).join(', ')}],
                        backgroundColor: '#fd7e14'
                    },
                    {
                        label: '41-60',
                        data: [${subjects.map(s => stats.distribution[s]['41-60']).join(', ')}],
                        backgroundColor: '#ffc107'
                    },
                    {
                        label: '61-80',
                        data: [${subjects.map(s => stats.distribution[s]['61-80']).join(', ')}],
                        backgroundColor: '#20c997'
                    },
                    {
                        label: '81-100',
                        data: [${subjects.map(s => stats.distribution[s]['81-100']).join(', ')}],
                        backgroundColor: '#28a745'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { stacked: true },
                    y: { stacked: true }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Marks Distribution by Grade Ranges'
                    }
                }
            }
        });

        const ctx2 = document.getElementById('performanceChart').getContext('2d');
        new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
                datasets: [
                    {
                        label: 'Above 90 marks',
                        data: [${subjects.map(s => stats.above90.bySubject[s]).join(', ')}],
                        backgroundColor: '#28a745'
                    },
                    {
                        label: 'Below 40 marks',
                        data: [${subjects.map(s => stats.below40.bySubject[s]).join(', ')}],
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
    </script>
</body>
</html>`;

    return html;
}

function createBarChart(data, title) {
    console.log(`\n${title}`);
    console.log('='.repeat(title.length));

    const maxValue = Math.max(...Object.values(data));
    const maxBarLength = 50;

    Object.entries(data).forEach(([key, value]) => {
        const barLength = Math.round((value / maxValue) * maxBarLength);
        const bar = '█'.repeat(barLength);
        console.log(`${key.padEnd(12)} │${bar} ${value}`);
    });
}

module.exports = { generateHTMLReport, createBarChart };
