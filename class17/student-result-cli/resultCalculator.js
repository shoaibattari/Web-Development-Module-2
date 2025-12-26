function calculateResult(name, subjects) {
  const totalMarks = subjects.length * 100;
  let obtainedMarks = 0;

  subjects.forEach(sub => {
    obtainedMarks += sub.marks;
  });

  const percentage = (obtainedMarks / totalMarks) * 100;

  let grade;
  if (percentage >= 80) grade = "A+";
  else if (percentage >= 70) grade = "A";
  else if (percentage >= 60) grade = "B";
  else if (percentage >= 50) grade = "C";
  else grade = "Fail";

  return {
    name,
    subjects,
    totalMarks,
    obtainedMarks,
    percentage: percentage.toFixed(2),
    grade
  };
}

module.exports = calculateResult;
