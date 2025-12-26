const readline = require("readline");
const greeting = require("./greeting");
const calculateResult = require("./resultCalculator");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ✅ Pre-written subject list
const subjectNames = ["English", "Math", "Science", "Computer"];
const subjects = [];

rl.question("Enter Student Name: ", (name) => {
  console.log(greeting(name));

  let index = 0;

  function askMarks() {
    if (index === subjectNames.length) {
      const result = calculateResult(name, subjects);

      console.log("\n STUDENT RESULT");
      console.log("----------------------");

      result.subjects.forEach(sub => {
        console.log(`${sub.name}: ${sub.marks} / 100`);
      });

      console.log("----------------------");
      console.log("Total Marks:", result.totalMarks);
      console.log("Obtained Marks:", result.obtainedMarks);
      console.log("Percentage:", result.percentage + "%");
      console.log("Grade:", result.grade);

      rl.close();
      return;
    }

    const subject = subjectNames[index];

    rl.question(`Enter marks for ${subject} (0–100): `, (marks) => {
      const num = Number(marks);

      if (isNaN(num) || num < 0 || num > 100) {
        console.log("❌ Marks must be between 0 and 100");
        askMarks();
        return;
      }

      subjects.push({
        name: subject,
        marks: num
      });

      index++;
      askMarks();
    });
  }

  askMarks();
});
