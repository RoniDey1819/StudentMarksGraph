// index.js
const fs = require('fs');
const { generateMarks } = require('./dataGenerator');
const { calculateStatistics } = require('./statistics');
const { generateHTMLReport, createBarChart } = require('./reportGenerator');

function main() {
    console.log('🎓 Student Marks Distribution Analysis');
    console.log('=====================================\n');

    const students = generateMarks();
    const stats = calculateStatistics(students);

    console.log('\n📊 SUMMARY STATISTICS');
    console.log('=====================');
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

    const htmlReport = generateHTMLReport(students, stats);
    fs.writeFileSync('student_marks_report.html', htmlReport);

    const reportData = {
        students,
        statistics: stats,
        generatedAt: new Date().toISOString()
    };
    fs.writeFileSync('student_marks_data.json', JSON.stringify(reportData, null, 2));

    console.log('\n✅ Analysis Complete!');
    console.log('📄 Files generated:');
    console.log('   - student_marks_report.html');
    console.log('   - student_marks_data.json');
    console.log('\n💡 Open student_marks_report.html in your browser to view interactive charts!');
}

if (require.main === module) {
    main();
}
