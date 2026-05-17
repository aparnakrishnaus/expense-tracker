import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import Analytics from "../components/Analytics";

function AnalyticsPage() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/expenses/")
      .then((res) => {
        setExpenses(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

   const totalSpent = expenses.reduce(
    (acc, item) => acc + Number(item.amount),
    0
  );
    const transactionCount = expenses.length;
     const categoryTotals = {};

     expenses.forEach((expense) => {
    const category = expense.category || "Other";

    categoryTotals[category] =
      (categoryTotals[category] || 0) + Number(expense.amount);
  });

  const topCategory =
    Object.keys(categoryTotals).length > 0
      ? Object.entries(categoryTotals).sort((a, b) => b[1] - a[1])[0][0]
      : "N/A";

  const highestExpense =
    expenses.length > 0
      ? [...expenses].sort((a, b) => b.amount - a.amount)[0]
      : null;


  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="mt-12">
        <p className="uppercase tracking-[4px] text-sm text-gray-400">
          Financial Intelligence
        </p>

        <p className="text-gray-400 mt-3 max-w-2xl">
          Visualize your spending patterns and financial behavior.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-lg">
          <p className="text-gray-400 text-sm">Total Spent</p>

          <h2 className="text-3xl font-black text-white mt-2">
            ₹{totalSpent}
          </h2>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-lg">
          <p className="text-gray-400 text-sm">Top Category</p>

          <h2 className="text-3xl font-black text-white mt-2">
            {topCategory}
          </h2>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-lg">
          <p className="text-gray-400 text-sm">Transactions</p>

          <h2 className="text-3xl font-black text-white mt-2">
            {transactionCount}
          </h2>
        </div>

      </div>

      {/* Insight Banner */}
      <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/20 rounded-2xl p-6">
        
        <p className="text-sm uppercase tracking-widest text-emerald-300 mb-2">
          Insight
        </p>

        <h3 className="text-xl font-bold text-white">
          {topCategory} is currently your highest spending category.
        </h3>

        <p className="text-gray-300 mt-2">
          Monitor this category closely to improve monthly savings.
        </p>
      </div>

      {/* Charts */}
      <Analytics expenses={expenses} />

      {/* Highlights */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg">
        
        <h3 className="text-xl font-bold text-white mb-4">
          Spending Highlights
        </h3>

        {highestExpense ? (
          <div className="space-y-3 text-gray-300">
            <p>
              Biggest Expense:
              <span className="text-white font-semibold ml-2">
                ₹{highestExpense.amount}
              </span>
            </p>

            <p>
              Category:
              <span className="text-white font-semibold ml-2">
                {highestExpense.category}
              </span>
            </p>

            <p>
              Date:
              <span className="text-white font-semibold ml-2">
                {highestExpense.date}
              </span>
            </p>
          </div>
        ) : (
          <p className="text-gray-400">
            No expense data available yet.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default AnalyticsPage;