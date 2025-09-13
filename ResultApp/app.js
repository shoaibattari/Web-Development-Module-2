// Dummy student data
const students = [
  {
    name: "shoaib",
    roll: "6",
    class: "6",
    marks: { English: 85, Math: 90, Science: 78, History: 88, Computer: 92 },
  },
  {
    name: "hussain",
    roll: "6",
    class: "7",
    marks: { English: 75, Math: 65, Science: 70, History: 80, Computer: 60 },
  },
  {
    name: "hunain",
    roll: "8",
    class: "8",
    marks: { English: 95, Math: 98, Physics: 92, Chemistry: 89, Biology: 94 },
  },
];

// Grade calculator
function calculateGrade(percentage) {
  if (percentage >= 90) return "A+";
  if (percentage >= 80) return "A";
  if (percentage >= 70) return "B";
  if (percentage >= 60) return "C";
  if (percentage >= 50) return "D";
  return "F";
}

// Show result page
if (window.location.pathname.includes("result.html")) {
  const query = JSON.parse(localStorage.getItem("studentQuery"));
  const student = students.find(
    (s) =>
      s.roll === query.roll &&
      s.class === query.cls &&
      s.name.toLowerCase() === query.name.toLowerCase()
  );

  const resultDiv = document.getElementById("result");

  if (student) {
    const marks = student.marks;
    const subjects = Object.keys(marks);
    const total = subjects.reduce((sum, sub) => sum + marks[sub], 0);
    const maxTotal = subjects.length * 100;
    const percentage = ((total / maxTotal) * 100).toFixed(2);
    const grade = calculateGrade(percentage);

    let html = `
      <h3 class="text-xl font-semibold mb-4">${student.name} 
        <span class="text-gray-500">(Roll: ${student.roll}, Class: ${student.class})</span>
      </h3>
      <table class="w-full border-collapse border border-gray-300 mb-6">
        <thead class="bg-blue-600 text-white">
          <tr>
            <th class="border border-gray-300 px-4 py-2">Subject</th>
            <th class="border border-gray-300 px-4 py-2">Marks</th>
          </tr>
        </thead>
        <tbody>
    `;
    subjects.forEach((sub) => {
      html += `
        <tr>
          <td class="border border-gray-300 px-4 py-2">${sub}</td>
          <td class="border border-gray-300 px-4 py-2">${marks[sub]}</td>
        </tr>
      `;
    });
    html += `
        </tbody>
      </table>
      <div class="text-left space-y-2">
        <p><strong>Total:</strong> ${total}/${maxTotal}</p>
        <p><strong>Percentage:</strong> ${percentage}%</p>
        <p><strong>Grade:</strong> <span class="font-bold text-blue-600  cursor-pointer">${grade}</span></p>
      </div>

        <button class="bg-black text-white w-full rounded-xl mt-4 py-4"  onclick="window.location.href='index.html'"> Go To Home</button>
    `;

    resultDiv.innerHTML = html;
  } else {
    resultDiv.innerHTML = `<p class="text-red-600 font-semibold">Student not found!</p>
    
      <button class="bg-black text-white w-full rounded-xl mt-4 py-2 cursor-pointer" onclick="window.location.href='index.html'"> Go To Home</button>
    
    `;
  }
}
