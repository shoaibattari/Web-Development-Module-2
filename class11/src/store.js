// store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import calculatorReducer from "./calculatorSlice";
import studentReducer from "./studentSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    calculator: calculatorReducer,
    students: studentReducer,
  },
});
