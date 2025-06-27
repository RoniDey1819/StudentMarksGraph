# Student Marks Distribution Analysis

A comprehensive Node.js application that generates synthetic student marks data and provides detailed statistical analysis with interactive visualizations.

## 📊 Features

- **Synthetic Data Generation**: Creates realistic student marks for 40 students across 4 subjects
- **Statistical Analysis**: Calculates performance metrics and distribution patterns
- **Interactive Visualizations**: Dynamic charts showing student performance and subject-wise analysis
- **HTML Report Generation**: Beautiful, responsive web report with tables and charts
- **Console Analytics**: Terminal-based bar charts and summary statistics

## 🏫 Subjects Covered

- Operating System
- Database Management System (DBMS)
- Cyber Security
- Theory of Computation

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd student-marks-analysis
```

2. Install dependencies:
```bash
npm install
```

3. Run the application:
```bash
node index.js
```

### Output

The application generates:
- **Console Output**: Summary statistics and ASCII bar charts
- **HTML Report**: `public/student_marks_report.html` - Interactive web report
- **JSON Data**: `student_marks_data.json` - Raw data for further analysis

## 📁 Project Structure

```
student-marks-analysis/
├── index.js                 # Main application entry point
├── dataGenerator.js         # Synthetic data generation
├── statistics.js            # Statistical calculations
├── reportGenerator.js       # HTML report and chart generation
├── student_marks_data.json  # Generated data output
└── public/
    ├── student_marks_report.html  # Generated HTML report
    ├── style.css                  # Report styling
    └── script.js                  # Client-side chart rendering
```

## 🔧 Core Components

### 1. Data Generator (`dataGenerator.js`)
- Generates realistic marks using weighted random distribution
- Ensures marks stay within 0-100 range
- Creates 40 unique students with marks for all subjects

### 2. Statistics Calculator (`statistics.js`)
- Tracks high performers (>90 marks) and low performers (<40 marks)
- Creates mark distribution buckets (0-20, 21-40, 41-60, 61-80, 81-100)
- Calculates both student-wise and subject-wise statistics

### 3. Report Generator (`reportGenerator.js`)
- Creates responsive HTML reports with embedded data
- Generates ASCII bar charts for console output
- Integrates Chart.js for interactive visualizations

### 4. Main Application (`index.js`)
- Orchestrates the entire analysis pipeline
- Outputs comprehensive console statistics
- Generates all reports and data files

## 📈 Sample Output

### Console Statistics
```
🎓 Student Marks Distribution Analysis
=====================================

📊 SUMMARY STATISTICS
Total students: 40
Students with >90 marks: 10
Students with <40 marks: 16

📈 HIGH PERFORMERS BY SUBJECT:
Operating System: 6
DBMS: 0
Cyber Security: 4
Theory of Computation: 3

📉 LOW PERFORMERS BY SUBJECT:
Operating System: 4
DBMS: 5
Cyber Security: 4
Theory of Computation: 6
```

### HTML Report Features
- **Interactive Charts**: 
  - Stacked bar chart showing student-wise total marks
  - Comparative chart of high/low performers by subject
- **Detailed Table**: All student marks with color-coded performance indicators
- **Summary Cards**: Quick overview of key statistics
- **Responsive Design**: Works on desktop and mobile devices

## 🎨 Visual Elements

### Color Coding
- **Green Background**: High scores (>90)
- **Red Background**: Low scores (<40)
- **Blue Accents**: Primary UI elements
- **Clean Layout**: Professional styling with cards and charts

### Chart Types
- **Stacked Bar Charts**: Student performance across all subjects
- **Comparative Bar Charts**: High vs low performers by subject
- **Distribution Analysis**: Mark ranges and frequency

## 🔍 Analysis Insights

The application provides insights into:
- **Subject Difficulty**: Which subjects have more high/low performers
- **Student Performance**: Individual and comparative analysis
- **Mark Distribution**: Spread of marks across different ranges
- **Performance Patterns**: Trends in student achievement

## 📊 Data Format

### Student Data Structure
```json
{
  "id": 1,
  "name": "Student_1",
  "marks": {
    "Operating System": 97,
    "DBMS": 74,
    "Cyber Security": 77,
    "Theory of Computation": 43
  }
}
```

### Statistics Structure
```json
{
  "above90": {
    "total": 10,
    "bySubject": { ... }
  },
  "below40": {
    "total": 16,
    "bySubject": { ... }
  },
  "distribution": { ... }
}
```

## 🛠️ Customization

### Modify Subjects
Edit the `subjects` array in `dataGenerator.js` and other files:
```javascript
const subjects = ['Subject1', 'Subject2', 'Subject3', 'Subject4'];
```

### Adjust Student Count
Change the loop limit in `dataGenerator.js`:
```javascript
for (let i = 1; i <= 50; i++) { // Change from 40 to 50
```

### Modify Mark Distribution
Adjust the random generation algorithm in `generateMarks()` function for different distributions.

## 🔧 Dependencies

- **Chart.js**: Interactive chart rendering
- **Node.js Built-ins**: `fs`, `path` for file operations
- **HTML/CSS**: Responsive design and styling

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For questions or support, please open an issue in the GitHub repository.

---

*Generated with ❤️ for educational analysis and visualization*