// dataGenerator.js
function generateMarks() {
    const students = [];
    const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology'];

    for (let i = 1; i <= 40; i++) {
        const student = {
            id: i,
            name: `Student_${i}`,
            marks: {}
        };

        subjects.forEach(subject => {
            const rand1 = Math.random();
            const rand2 = Math.random();
            const rand3 = Math.random();

            let mark = Math.round((rand1 + rand2 + rand3) / 3 * 100);
            mark += Math.round((Math.random() - 0.5) * 20);
            mark = Math.max(0, Math.min(100, mark));

            student.marks[subject] = mark;
        });

        students.push(student);
    }

    return students;
}

module.exports = { generateMarks };
