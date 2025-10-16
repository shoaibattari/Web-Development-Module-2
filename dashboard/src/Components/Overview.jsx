import {
  FaUsers,
  FaBox,
  FaShoppingCart,
  FaMoneyBillWave,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  Legend,
  ResponsiveContainer,
} from "recharts";

import StatCard from "./StatCard";
import { salesData, userGrowth } from "../assets/data";

const Overview = () => {
  return (
    <div className="p-6 fade-in">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 ">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Dashboard Overview
          </h2>
          <p className="text-gray-500 mt-1">
            Welcome back Here’s a quick summary of your business activity.
          </p>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard
          icon={<FaUsers className="text-blue-500 text-3xl" />}
          title="Total Users"
          value="1,240"
          change="+5.2%"
        />
        <StatCard
          icon={<FaBox className="text-green-500 text-3xl" />}
          title="Products"
          value="320"
          change="+2.8%"
        />
        <StatCard
          icon={<FaShoppingCart className="text-orange-500 text-3xl" />}
          title="Orders"
          value="890"
          change="-1.3%"
        />
        <StatCard
          icon={<FaMoneyBillWave className="text-purple-500 text-3xl" />}
          title="Revenue"
          value="$12,430"
          change="+7.6%"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Line Chart - Revenue Trend */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">
            Revenue Trend
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#3B82F6"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="orders"
                stroke="#F59E0B"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart - User Growth */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">
            User Growth
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={userGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-10 bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">
          Recent Activity
        </h3>
        <ul className="space-y-3 text-gray-600">
          <li>
            New user <b>Ali Khan</b> registered.
          </li>
          <li> Order #1023 has been completed.</li>
          <li>
            New review on <b>“Wireless Mouse”</b>.
          </li>
          <li> System update scheduled for midnight.</li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
