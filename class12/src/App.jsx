// App.jsx
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";
import Calculator from "./component/Calculator";
import Student from "./component/Student";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    // <Calculator />
    <Student />
    // <div className="flex flex-col items-center justify-center h-screen">
    //   <h1 className="text-3xl font-bold">Counter: {count}</h1>
    //   <div className="mt-4 flex gap-4">
    //     <button onClick={() => dispatch(increment())}>+</button>
    //     <button onClick={() => dispatch(decrement())}>-</button>
    //     <button onClick={() => dispatch(reset())}>Reset</button>
    //   </div>
    // </div>
  );
}

export default App;
