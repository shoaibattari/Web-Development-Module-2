import React, { useState, useEffect } from "react";
import Button from "../../Common/Button";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div className="min-h-92 h-full w-full flex  flex-col items-center justify-center space-y-4">
      <h2 className="text-5xl text-center text-blue-500 font-semibold">
        Stopwatch
      </h2>
      <p className="text-2xl text-center text-grey-500 font-semibold pt-2">
        {time} sec
      </p>
      <div className="flex justify-center items-center gap-2">
        <Button
          theme="dark"
          label={isRunning ? "Stop" : "Start"}
          onClick={() => setIsRunning(!isRunning)}
        />
        <Button
          theme="light"
          label={"Reset"}
          onClick={() => {
            setTime(0);
            setIsRunning(false);
          }}
        />
      </div>
    </div>
  );
};

export default Stopwatch;
