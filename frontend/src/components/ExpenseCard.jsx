function ExpenseCard({ expense }) {
  const amount = Number(expense?.amount) || 0;

  return (
    <div className="group flex items-center justify-between p-5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300">
      
      {/* LEFT */}
      <div className="flex items-center gap-4">
        
        {/* Icon */}
        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 group-hover:bg-white transition">
          💸
        </div>

        {/* Info */}
        <div>
          <h4 className="text-md font-semibold text-gray-800">
            {expense.category || "No Category"}
          </h4>
          <p className="text-xs text-gray-500">
            {expense.date || "No Date"}
          </p>
        </div>

      </div>

      {/* RIGHT */}
      <div className="text-right">
        <p className="text-lg font-bold text-red-500">
          -₹{amount.toFixed(2)}
        </p>
      </div>

    </div>
  );
}

export default ExpenseCard;