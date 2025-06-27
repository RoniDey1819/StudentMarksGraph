function generateMarks() {
    const students = [];
    const subjects = ['Operating System', 'DBMS', 'Cyber Security', 'Theory of Computation'];

    for (let i = 1; i <= 40; i++) {
        const student = {
            id: i,
            name: `Student_${i}`,
            marks: {}
        };

        subjects.forEach(subject => {
            let mark = Math.round((Math.random() + Math.random() + Math.random()) / 3 * 100);
            mark += Math.round((Math.random() - 0.5) * 20) + 15;
            mark = Math.max(0, Math.min(100, mark));
            student.marks[subject] = mark;
        });

        students.push(student);
    }

    return students;
}

module.exports = { generateMarks };
