const fs = require('fs');
const path = require('path');

function generateHTMLReport(students, stats) {
    const subjects = ['Operating System', 'DBMS', 'Cyber Security', 'Theory of Computation'];

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Student Report</title>
    <link rel="stylesheet" href="./style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>
</head>
<body>
    <div class="container">
        <h1>Student Marks Distribution Analysis</h1>
        <div class="stats-grid">
            <div class="stat-card">
                <h3>High Performers (>90)</h3>
                <div class="stat-number">${stats.above90.total}</div>
            </div>
            <div class="stat-card">
                <h3>Low Performers (<40)</h3>
                <div class="stat-number">${stats.below40.total}</div>
            </div>
        </div>

        <h2>Student-wise Total Marks (Stacked)</h2>
        <div class="chart-container"><canvas id="distributionChart"></canvas></div>

        <h2>Subject-wise High/Low Performers</h2>
        <div class="chart-container"><canvas id="performanceChart"></canvas></div>

        <h2>Detailed Marks Table</h2>
        <div class="table-container">
            <table>
                <thead>
                    <tr><th>ID</th><th>Name</th>${subjects.map(s => `<th>${s}</th>`).join('')}<th>Average</th></tr>
                </thead>
                <tbody>
                    ${students.map(s => {
        const avg = (Object.values(s.marks).reduce((a, b) => a + b, 0) / 4).toFixed(1);
        return `<tr>
                            <td>${s.id}</td><td>${s.name}</td>
                            ${subjects.map(sub => {
            const m = s.marks[sub];
            const cls = m > 90 ? 'high-score' : m < 40 ? 'low-score' : '';
            return `<td class="${cls}">${m}</td>`;
        }).join('')}
                            <td><strong>${avg}</strong></td>
                        </tr>`;
    }).join('')}
                </tbody>
            </table>
        </div>
    </div>

    <script>
        window.studentsData = ${JSON.stringify(students)};
        window.statsData = ${JSON.stringify(stats)};
    </script>
    <script src="./script.js"></script>
</body>
</html>
`;

    const outPath = path.join(__dirname, 'public', 'student_marks_report.html');
    fs.writeFileSync(outPath, html);
}

function createBarChart(data, title) {
    const maxValue = Math.max(...Object.values(data));
    const maxBarLength = 50;
    console.log(`\n${title}`);
    console.log('='.repeat(title.length));
    for (const [range, value] of Object.entries(data)) {
        const barLength = Math.round((value / maxValue) * maxBarLength);
        console.log(`${range.padEnd(12)} │ ${'█'.repeat(barLength)} ${value}`);
    }
}

module.exports = { generateHTMLReport, createBarChart };
