function SummaryCard({ 
  expenses = [], 
  title = "Total Expenses",
  color = "text-emerald-600"
}) {

  const total = Array.isArray(expenses)
    ? expenses.reduce((sum, item) => {
        const value = Number(item?.amount);
        return sum + (isNaN(value) ? 0 : value);
      }, 0)
    : 0;

  const safeTotal = isNaN(total) ? 0 : total;

  return (
    <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-lg shadow-xl border border-white/30 hover:scale-[1.02] transition-all duration-300">
      
      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h2 className={`text-4xl font-bold mt-2 ${color}`}>
        ₹{safeTotal.toFixed(2)}
      </h2>

    </div>
  );
}

export default SummaryCard;