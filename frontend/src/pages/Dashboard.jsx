
import { useEffect, useState } from "react";
import axios from "axios";
import ExpenseList from "../components/ExpenseList";
import AddExpenseForm from "../components/AddExpenseForm";
import Header from "../components/Header";
import SummaryCard from "../components/SummaryCard";
import {
    Wallet,
    TrendingUp,
    Sparkles,
    Plus,
} from "lucide-react";
import { motion } from "framer-motion";

function Dashboard() {
    const [expenses, setExpenses] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/expenses/")
            .then((res) => setExpenses(res.data))
            .catch((err) => console.error(err));
    }, []);

    const handleAddExpense = (newExpense) => {
        setExpenses((prev) => [newExpense, ...prev]);
        setShowForm(false);
    };

    return (
        <motion.main
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
        <div className="min-h-screen bg-[#0f172a] text-white overflow-hidden relative">

            {/* Background Glow Effects */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>

            {/* Header */}
            <Header onAddClick={() => setShowForm(true)} />

            <main className="relative z-10 pt-28 px-5 max-w-7xl mx-auto">

                {/* Hero Section */}
                <motion.section initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-10">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

                            {/* Left */}
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Sparkles className="text-emerald-400" size={20} />
                                    <p className="uppercase tracking-[4px] text-sm text-gray-300">
                                        Smart Finance Tracker
                                    </p>
                                </div>

                                <h1 className="text-4xl md:text-5xl font-black leading-tight">
                                    Track Your
                                    <span className="text-emerald-400"> Expenses </span>
                                    Beautifully
                                </h1>

                                <p className="mt-4 text-gray-300 max-w-xl leading-relaxed">
                                    A modern personal finance dashboard with elegant visuals,
                                    smooth interaction, and aesthetic analytics.
                                </p>

                                <button
                                    onClick={() => setShowForm(true)}
                                    className="mt-6 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 transition-all px-6 py-3 rounded-2xl font-semibold shadow-lg shadow-emerald-500/30"
                                >
                                    <Plus size={18} />
                                    Add Expense
                                </button>
                            </div>

                            {/* Right Floating Cards */}
                            <div className="grid grid-cols-2 gap-4 w-full md:w-[320px]">

                                <div className="bg-white/10 border border-white/10 rounded-2xl p-5 backdrop-blur-lg">
                                    <Wallet className="text-emerald-400 mb-3" />
                                    <p className="text-gray-400 text-sm">Wallet Balance</p>
                                    <h2 className="text-2xl font-bold mt-1">₹24,500</h2>
                                </div>

                                <div className="bg-white/10 border border-white/10 rounded-2xl p-5 backdrop-blur-lg">
                                    <TrendingUp className="text-cyan-400 mb-3" />
                                    <p className="text-gray-400 text-sm">Monthly Saving</p>
                                    <h2 className="text-2xl font-bold mt-1">+18%</h2>
                                </div>

                                <div className="col-span-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl p-5 text-black shadow-xl">
                                    <p className="font-semibold">
                                        Financial Insight
                                    </p>

                                    <h3 className="text-3xl font-black mt-2">
                                        Keep growing 📈
                                    </h3>

                                    <p className="mt-2 text-sm">
                                        Your spending is healthier than last month.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Summary Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mb-8"
                >
                    <SummaryCard />
                </motion.section>

                {/* Add Expense Modal/Form */}
                {showForm && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full max-w-lg"
                        >
                            <AddExpenseForm
                                onAdd={handleAddExpense}
                                onClose={() => setShowForm(false)}
                            />
                        </motion.div>
                    </div>
                )}

                {/* Expense List */}
                <motion.section initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">

                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <p className="text-gray-400 text-sm uppercase tracking-[3px]">
                                Recent Activity
                            </p>

                            <h2 className="text-2xl font-bold mt-1">
                                Transactions
                            </h2>
                        </div>

                        <div className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-xl text-sm">
                            {expenses.length} Records
                        </div>
                    </div>

                    <ExpenseList expenses={expenses} />
                </motion.section>
            </main>
        </div>
        </motion.main>
    );
}

export default Dashboard;