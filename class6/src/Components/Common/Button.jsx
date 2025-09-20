import React from "react";
import { Link } from "react-router-dom";

const Button = ({ label, theme = "light", to, onClick }) => {
  const baseStyle =
    "px-6 py-3 rounded-lg font-semibold shadow-md cursor-pointer transition-all duration-300 hover:scale-110";

  const styles = {
    light: "bg-white text-blue-600 hover:bg-gray-200 border border-white",
    dark: "bg-blue-600 text-white hover:bg-blue-700 border border-blue-600",
  };

  if (to) {
    return (
      <Link target="_blank" to={to} className={`${baseStyle} ${styles[theme]}`}>
        {label}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={`${baseStyle} ${styles[theme]}`}>
      {label}
    </button>
  );
};

export default Button;
