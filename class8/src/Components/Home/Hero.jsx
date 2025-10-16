import React from "react";
import Button from "../Common/Button";

const Hero = () => {
  return (
    <section className="text-white py-24 flex items-center">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hello React 🚀</h1>
        <p className="text-lg md:text-2xl mb-6">
          With <span className="font-semibold">Sir Hamza</span> and{" "}
          <span className="font-semibold">Miss Maimoona</span>
        </p>

        <div className="flex justify-center gap-4">
          <Button
            label="Get Started"
            theme="light"
            to="https://react.dev/learn"
          />
          <Button
            label="Learn More"
            theme="dark"
            to={"https://react.dev/reference/react"}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
