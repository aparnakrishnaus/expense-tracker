import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

function Analytics({ expenses = [] }) {

  if (expenses.length === 0) {
    return (
      <div
        className="
          bg-[#111827]
          border border-white/10
          rounded-3xl
          p-10
          text-center
          text-gray-400
        "
      >
        No analytics data available yet 📊
      </div>
    );
  }

  // CATEGORY DATA
  const categoryData = {};

  expenses.forEach((expense) => {
    const category = expense.category || "Other";
    const amount = Number(expense.amount) || 0;

    if (categoryData[category]) {
      categoryData[category] += amount;
    } else {
      categoryData[category] = amount;
    }
  });

  const pieData = Object.entries(categoryData).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  // MONTHLY DATA
  const monthlyData = {};

  expenses.forEach((expense) => {
    const date = new Date(expense.date);

    const month = date.toLocaleString("default", {
      month: "short",
    });

    const amount = Number(expense.amount) || 0;

    if (monthlyData[month]) {
      monthlyData[month] += amount;
    } else {
      monthlyData[month] = amount;
    }
  });

  const barData = Object.entries(monthlyData).map(
    ([month, amount]) => ({
      month,
      amount,
    })
  );

  const COLORS = [
    "#10b981",
    "#06b6d4",
    "#8b5cf6",
    "#f59e0b",
    "#ef4444",
  ];

  return (
    <div className="grid grid-cols-1 2xl:grid-cols-3 gap-6">

      {/* PIE CHART */}
      <div
        className="
          bg-[#111827]
          border border-white/10
          rounded-3xl
          p-6
          shadow-xl
        "
      >
        <h2 className="text-white text-xl font-bold mb-6">
          Category Breakdown
        </h2>

        <div className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>

              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />

            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* BAR CHART */}
      <div
        className="
          bg-[#111827]
          border border-white/10
          rounded-3xl
          p-6
          shadow-xl
        "
      >
        <h2 className="text-white text-xl font-bold mb-6">
          Monthly Spending
        </h2>

        <div className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">

            <BarChart data={barData}>

              <XAxis
                dataKey="month"
                stroke="#9ca3af"
              />

              <YAxis
                stroke="#9ca3af"
              />

              <Tooltip />

              <Bar
                dataKey="amount"
                fill="#10b981"
                radius={[12, 12, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Analytics;