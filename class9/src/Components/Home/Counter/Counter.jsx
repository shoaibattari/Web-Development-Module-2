import { useEffect, useState } from "react";
import Button from "../../Common/Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("counter not negative allowed");
    }
  };
  useEffect(() => {
    document.title = `you clicked ${count} times`;
  }, [count]);

  return (
    <div className="w-full py-24 pb-36 flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold mb-4">Counter App</h1>

      <div className="flex flex-col items-center gap-4">
        <p className="text-3xl text-blue-600 font-semibold">{count}</p>
        <div className="flex justify-between items-center gap-3">
          {count > 0 && (
            <Button label={"-1"} theme="dark" onClick={decrement} />
          )}

          <Button label={"+1"} theme="danger" onClick={increment} />
        </div>
      </div>
    </div>
  );
};

export default Counter;
