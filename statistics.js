// statistics.js
function calculateStatistics(students) {
    const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology'];
    const stats = {
        above90: { total: 0, bySubject: {} },
        below40: { total: 0, bySubject: {} },
        distribution: {}
    };

    subjects.forEach(subject => {
        stats.above90.bySubject[subject] = 0;
        stats.below40.bySubject[subject] = 0;
        stats.distribution[subject] = {
            '0-20': 0, '21-40': 0, '41-60': 0, '61-80': 0, '81-100': 0
        };
    });

    students.forEach(student => {
        let hasAbove90 = false;
        let hasBelow40 = false;

        subjects.forEach(subject => {
            const mark = student.marks[subject];
            if (mark > 90) {
                stats.above90.bySubject[subject]++;
                hasAbove90 = true;
            }
            if (mark < 40) {
                stats.below40.bySubject[subject]++;
                hasBelow40 = true;
            }

            if (mark <= 20) stats.distribution[subject]['0-20']++;
            else if (mark <= 40) stats.distribution[subject]['21-40']++;
            else if (mark <= 60) stats.distribution[subject]['41-60']++;
            else if (mark <= 80) stats.distribution[subject]['61-80']++;
            else stats.distribution[subject]['81-100']++;
        });

        if (hasAbove90) stats.above90.total++;
        if (hasBelow40) stats.below40.total++;
    });

    return stats;
}

module.exports = { calculateStatistics };
