import React from "react";
import Counter from "./Home/Counter/Counter";
import Hero from "./Home/Hero";
import Stopwatch from "./Home/StopWatch/StopWatch";
import Todo from "./Home/Todo/Todo";

const Home = () => {
  return (
    <div>
      <Hero />
      <Counter />
      <Todo />
      <Stopwatch />
    </div>
  );
};

export default Home;
