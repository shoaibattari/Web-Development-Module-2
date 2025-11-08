import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { input, clear, calculate } from "../calculatorSlice";

function Calculator() {
  const value = useSelector((state) => state.calculator.value);
  const dispatch = useDispatch();

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-4 rounded-2xl shadow-lg w-72">
        <div className="text-right text-3xl font-mono p-4 bg-gray-200 rounded-lg mb-4">
          {value}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() =>
                btn === "=" ? dispatch(calculate()) : dispatch(input(btn))
              }
              className="bg-gray-300 text-xl cursor-pointer hover:scale-110 font-semibold py-2 rounded-lg hover:bg-gray-400 transition"
            >
              {btn}
            </button>
          ))}
          <button
            onClick={() => dispatch(clear())}
            className="col-span-4 bg-red-400 text-white font-bold py-2 rounded-lg hover:bg-red-500"
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
