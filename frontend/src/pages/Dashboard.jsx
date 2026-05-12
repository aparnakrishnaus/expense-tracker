import { useEffect, useState } from "react";
import axios from "axios";
import ExpenseList from "../components/ExpenseList";
import AddExpenseForm from "../components/AddExpenseForm";
import Header from "../components/Header";
import SummaryCard from "../components/SummaryCard";

function Dashboard() {
    const [expenses, setExpenses] = useState([]);
     const [showForm, setShowForm] = useState(false);


    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/expenses/")
            .then((res) => setExpenses(res.data))
            .catch((err) => console.error(err));
    }, []);

    const handleAddExpense = (newExpense) => {
        setExpenses((prev) => [newExpense, ...prev]);
        setShowForm(false);
    };

    return (
<div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-100 pb-20">      
      {/* 🔹 Top Header */}
     <Header onAddClick={() => setShowForm(true)} />

      {/* 🔹 Main Content */}
      <main className="pt-24 px-6 max-w-2xl mx-auto space-y-8">
        
        {/* 🔹 Summary */}
        <SummaryCard />

        {/* 🔹 Add Expense */}
        {showForm && (
          <AddExpenseForm onAdd={handleAddExpense} onClose={() => setShowForm(false)}/>
        )}

        {/* 🔹 Transactions */}
           <ExpenseList expenses={expenses} />

      </main>
    </div>
    );


}


export default Dashboard;

