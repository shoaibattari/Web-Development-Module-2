import express from "express";

const router = express.Router();

const studentData = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 23 },
];
// get all students
router.get("/students", (req, res) => {
  res.json(studentData);
});

// get single student
router.get("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id, 10);
  const student = studentData.find((s) => s.id === studentId);
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

// create student
router.post("/students", (req, res) => {
  const newStudent = req.body;
  studentData.push(newStudent);
  res.status(201).json(newStudent);
});

// update student
router.put("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id, 10);
  const updatedStudent = req.body;
  const index = studentData.findIndex((s) => s.id === studentId);
  if (index !== -1) {
    studentData[index] = updatedStudent;
    res.json(updatedStudent);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

// all delete
router.delete("/students", (req, res) => {
  studentData.length = 0;
  res.json({ message: "All students deleted successfully" });
});

// single delete
router.delete("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id, 10);
  const index = studentData.findIndex((s) => s.id === studentId);
  if (index !== -1) {
    studentData.splice(index, 1);
    res.json({ message: "Student deleted successfully" });
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

export default router;
