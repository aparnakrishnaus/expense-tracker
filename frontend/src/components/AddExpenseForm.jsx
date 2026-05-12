import { useState } from "react";
import { addExpense } from "../services/api";

function AddExpenseForm({ onAdd, onClose }) {
  const [form, setForm] = useState({
    amount: "",
    category: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addExpense(form)
      .then((res) => {
        onAdd(res.data); // update UI
        setForm({ amount: "", category: "", date: "", description: "" });
      })
      .catch((err) => {
        console.error("Full error:", err);

        if (err.response) {
          console.error("Backend error data:", err.response.data);
          console.error("Status:", err.response.status);
        } else if (err.request) {
          console.error("No response received:", err.request);
        } else {
          console.error("Error message:", err.message);
        }
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow space-y-6"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Add Expense</h2>

        <button
          type="button"
          onClick={onClose}
          className="text-red-500 font-bold"
        >
          ✕
        </button>
      </div>


      {/* Amount + Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Amount */}
        <div>
          <label className="text-sm text-gray-500">Amount</label>
          <input
            name="amount"
            type="number"
            placeholder="0.00"
            value={form.amount}
            onChange={handleChange}
            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="text-sm text-gray-500">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select category</option>
            <option value="Groceries">Groceries</option>
            <option value="Dining">Dining</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Bills">Bills</option>
          </select>
        </div>
      </div>

      {/* Date */}
      <div>
        <label className="text-sm text-gray-500">Date</label>
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Description */}
      <div>
        <label className="text-sm text-gray-500">Description</label>
        <input
          name="description"
          placeholder="What was this for?"
          value={form.description}
          onChange={handleChange}
          className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
      >
        Add Expense
      </button>
    </form>
  );

}

export default AddExpenseForm;