const StatCard = ({ icon, title, value, change }) => (
  <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow hover:shadow-md transition">
    <div className="p-3 bg-gray-100 rounded-lg">{icon}</div>
    <div>
      <h4 className="text-sm font-medium text-gray-500">{title}</h4>
      <div className="flex items-baseline gap-2">
        <p className="text-xl font-bold text-gray-800">{value}</p>
        <span
          className={`text-sm font-semibold ${
            change.startsWith("+") ? "text-green-500" : "text-red-500"
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  </div>
);
export default StatCard;
