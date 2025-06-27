📊 Student Marks Distribution Graph
A Node.js project that generates realistic random marks for 40 students across 4 subjects and provides a visual analysis using an HTML report with interactive charts (via Chart.js).

🗂️ Project Structure

StudentMarksGraph/
├── index.js                  # Main file to run the program
├── dataGenerator.js         # Logic to generate marks
├── statistics.js            # Calculates subject-wise and overall statistics
├── reportGenerator.js       # Generates HTML report with charts
├── student_marks_data.json  # Raw generated data (auto-created)
├── public/
│   ├── style.css            # CSS for the HTML report
│   ├── script.js            # Chart.js rendering logic
│   └── student_marks_report.html # Final report file (auto-created)
📚 Subjects Included
Each student is assigned marks (0–100) in the following 4 subjects:

Operating System

DBMS

Cyber Security

Theory of Computation

Total score per student: out of 400

🚀 How to Use
1. Clone or download the project
bash
Copy
Edit
git clone https://github.com/RoniDey1819/StudentMarksGraph.git
cd StudentMarksGraph
2. Install Node.js if not already
Download Node.js here

3. Run the project
bash
Copy
Edit
node index.js
This will:

Generate random marks for 40 students

Calculate statistics

Generate a visual HTML report at:
public/student_marks_report.html

4. View the report
Open public/student_marks_report.html in any browser.

📈 Features
Student-wise total marks with stacked bar chart

Subject-wise performance (Above 90 & Below 40)

Tabular view with highlights for high/low scores

Responsive layout using plain HTML/CSS

Interactive charts via Chart.js

📦 Dependencies
Chart.js – Included via CDN in the HTML file

No need to install anything manually, as this project uses pure Node.js and browser-based scripts.

🛠️ Customization
Want to change the number of students or subjects?
Edit dataGenerator.js and update the subject list and mark logic.

📄 License
This project is open-source and free to use for educational and demo purposes.