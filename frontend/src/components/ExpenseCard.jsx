import { motion } from "framer-motion";

function ExpenseCard({ expense }) {
  const amount = Number(expense?.amount) || 0;

  const getMoodEmoji = () => {
    if (amount < 200) return "🙂";
    if (amount < 1000) return "😅";
    if (amount < 5000) return "😭";
    return "💸";
  };

  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      transition={{ duration: 0.2 }}
      className="
        bg-[#111827]
        border
        border-white/10
        rounded-2xl
        p-3
        shadow-xl
        hover:border-emerald-400/20
        transition-all
      "
    >
      {/* Top */}
      <div className="flex items-center justify-between">
        
        <span className="text-2xl">
          {getMoodEmoji()}
        </span>

        <span
          className="
            text-[10px]
            px-2
            py-1
            rounded-full
            bg-white/5
            text-gray-400
          "
        >
          {expense.category || "General"}
        </span>
      </div>

      {/* Description */}
      <div className="mt-3">
        
        <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2">
          {expense.description || "Expense"}
        </h3>

        <p className="text-gray-500 text-xs mt-1">
          {expense.date || "No Date"}
        </p>
      </div>

      {/* Amount */}
      <div className="mt-3 pt-2 border-t border-white/5">
        
        <p className="text-red-400 text-lg font-black">
          -₹{amount.toFixed(0)}
        </p>
      </div>
    </motion.div>
  );
}

export default ExpenseCard;