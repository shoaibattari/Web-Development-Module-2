import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "students",
  initialState: {
    list: [],
  },
  reducers: {
    addStudent: (state, action) => {
      state.list.push(action.payload);
    },
    updateStudent: (state, action) => {
      const { id, fullName, section, result } = action.payload;
      const existing = state.list.find((s) => s.id === id);
      if (existing) {
        existing.fullName = fullName;
        existing.section = section;
        existing.result = result;
      }
    },
    deleteStudent: (state, action) => {
      state.list = state.list.filter((s) => s.id !== action.payload);
    },
  },
});

export const {
  addStudent,
  updateStudent,
  deleteStudent,
} = studentSlice.actions;

export default studentSlice.reducer;
