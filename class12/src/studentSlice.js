import { createSlice } from "@reduxjs/toolkit";
import { ref, push, get, child, update, remove } from "firebase/database";
import { db } from "./firebase";

const studentSlice = createSlice({
  name: "students",
  initialState: {
    list: [],
  },
  reducers: {
    setStudents: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setStudents } = studentSlice.actions;
export default studentSlice.reducer;

// ✅ Fetch students from Firebase
export const fetchStudents = () => async (dispatch) => {
  const dbRef = ref(db);
  const snapshot = await get(child(dbRef, "students"));
  if (snapshot.exists()) {
    const data = snapshot.val();
    const studentsArray = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));
    dispatch(setStudents(studentsArray));
  } else {
    dispatch(setStudents([]));
  }
};

// ✅ Add student
export const addStudent = (student) => async (dispatch) => {
  const dataRef = ref(db, "students");
  await push(dataRef, student);
  dispatch(fetchStudents()); // 🔁 get fresh data
};

// ✅ Update student
export const updateStudent = (student) => async (dispatch) => {
  const studentRef = ref(db, `students/${student.id}`);
  await update(studentRef, {
    fullName: student.fullName,
    section: student.section,
    result: student.result,
  });
  dispatch(fetchStudents());
};

// ✅ Delete student
export const deleteStudent = (student) => async (dispatch) => {
  const studentRef = ref(db, `students/${student.id}`);
  await remove(studentRef);
  dispatch(fetchStudents());
};
