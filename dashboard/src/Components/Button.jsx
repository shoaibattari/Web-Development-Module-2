import {
  FaPlus,
  FaSave,
  FaTrash,
  FaSpinner,
  FaEdit,
  FaTimes,
} from "react-icons/fa";

const Button = ({
  text = "Submit",
  onClick,
  loading = false,
  variant = "primary",
  showIcon = false,
  icon = "FaPlus",
  className = "",
  type = "button",
}) => {
  const baseStyle =
    "px-4 py-2 rounded-xl font-medium transition-all duration-300  hover:opacity-50 flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-95 cursor-pointer";

  const variants = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-200  text-gray-800",
    danger: "bg-red-500 text-white",
  };

  const iconMap = {
    FaPlus: <FaPlus />,
    FaSave: <FaSave />,
    FaTrash: <FaTrash />,
    FaEdit: <FaEdit />,
    FaTimes: <FaTimes />,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`${baseStyle} ${variants[variant]} ${
        loading ? "opacity-70 cursor-not-allowed" : ""
      } ${className}`}
    >
      {loading ? (
        <FaSpinner className="animate-spin" />
      ) : (
        showIcon && iconMap[icon]
      )}
      {text}
    </button>
  );
};

export default Button;
