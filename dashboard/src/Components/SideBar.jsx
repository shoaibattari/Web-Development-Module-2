import { Link, useLocation } from "react-router-dom";
import { RESOURCES } from "../assets/data";

const SideBar = () => {
  const location = useLocation(); // to highlight active link

  return (
    <aside className="w-64 bg-black text-white border-r border-gray-800 min-h-screen flex flex-col">
      {/* Header */}
      <h1 className="text-xl font-bold mb-4 text-center py-4 border-b border-gray-700">
        My Dashboard
      </h1>

      {/* Links */}
      <nav className="flex-1 overflow-y-auto flex flex-col gap-1 p-2">
        {/* Overview Link */}
        <Link
          to="/dashboard"
          className={`px-4 py-2 rounded transition-colors duration-200 ${
            location.pathname === "/dashboard"
              ? "bg-white text-black font-semibold"
              : "hover:bg-white/10"
          }`}
        >
          Overview
        </Link>

        {/* Resource Links */}
        {RESOURCES.map((r) => {
          const isActive = location.pathname === `/dashboard/${r}`;
          return (
            <Link
              key={r}
              to={`/dashboard/${r}`}
              className={`px-4 py-2 rounded capitalize transition-colors duration-200 ${
                isActive
                  ? "bg-white text-black font-semibold"
                  : "hover:bg-white/10"
              }`}
            >
              {r}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default SideBar;
