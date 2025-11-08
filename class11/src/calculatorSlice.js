import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    value: "0",
  },
  reducers: {
    input: (state, action) => {
      // If initial 0, replace it
      if (state.value === "0") state.value = action.payload;
      else state.value += action.payload;
    },
    clear: (state) => {
      state.value = "0";
    },
    calculate: (state) => {
      try {
        // Use eval safely (for demo)
        state.value = eval(state.value).toString();
      } catch {
        state.value = "Error";
      }
    },
  },
});

export const { input, clear, calculate } = calculatorSlice.actions;
export default calculatorSlice.reducer;
