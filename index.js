const { generateMarks } = require('./dataGenerator');
const { calculateStatistics } = require('./statistics');
const { generateHTMLReport, createBarChart } = require('./reportGenerator');
const fs = require('fs');

function main() {
    console.log('🎓 Student Marks Distribution Analysis');
    console.log('=====================================\n');

    const students = generateMarks();
    const stats = calculateStatistics(students);

    console.log('\n📊 SUMMARY STATISTICS');
    console.log(`Total students: ${students.length}`);
    console.log(`Students with >90 marks: ${stats.above90.total}`);
    console.log(`Students with <40 marks: ${stats.below40.total}`);

    console.log('\n📈 HIGH PERFORMERS BY SUBJECT:');
    Object.entries(stats.above90.bySubject).forEach(([subject, count]) => {
        console.log(`${subject}: ${count}`);
    });

    console.log('\n📉 LOW PERFORMERS BY SUBJECT:');
    Object.entries(stats.below40.bySubject).forEach(([subject, count]) => {
        console.log(`${subject}: ${count}`);
    });

    const subjects = ['Operating System', 'DBMS', 'Cyber Security', 'Theory of Computation'];
    subjects.forEach(subject => {
        createBarChart(stats.distribution[subject], `${subject} - Marks Distribution`);
    });

    generateHTMLReport(students, stats);

    fs.writeFileSync('student_marks_data.json', JSON.stringify({ students, stats }, null, 2));

    console.log('\n✅ Report generated at public/student_marks_report.html');
}

main();
