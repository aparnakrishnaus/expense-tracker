import ExpenseCard from "./ExpenseCard";

function ExpenseList({ expenses = [] }) {

  if (!expenses || expenses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-gray-400 text-lg font-medium">
          No transactions yet
        </p>
        <p className="text-gray-400 text-sm mt-1">
          Start by adding your first expense
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      
      {expenses.map((expense) => (
        <ExpenseCard key={expense.id} expense={expense} />
      ))}

    </div>
  );
}

export default ExpenseList;