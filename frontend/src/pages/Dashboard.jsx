import { useEffect, useState } from "react";
import axios from "axios";
import ExpenseList from "../components/ExpenseList";
import AddExpenseForm from "../components/AddExpenseForm";
import Header from "../components/Header";
import SummaryCard from "../components/SummaryCard";
import Analytics from "./AnalyticsPage";
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

    const [activeTab, setActiveTab] = useState("dashboard");
    const [showAllExpenses, setShowAllExpenses] = useState(false);

    const visibleExpenses = showAllExpenses
        ? expenses
        : expenses.slice(0, 5);

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="min-h-screen bg-[#0f172a] text-white overflow-x-hidden relative">

                {/* Background Glow Effects */}
                <div className="absolute top-0 left-0 w-56 h-56 bg-emerald-500/20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-56 h-56 bg-cyan-500/20 blur-3xl rounded-full"></div>

                <main className="relative z-10 pt-1 px-2 sm:px-4 max-w-7xl mx-auto">

                    {/* Hero Section */}
                    <motion.section initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-5">
                        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 shadow-2xl">

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                                {/* Left */}
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Sparkles className="text-emerald-400" size={16} />
                                        <p className="uppercase tracking-[2px] text-xs text-gray-300">
                                            Smart Finance Tracker
                                        </p>
                                    </div>

                                    <h1 className="text-2xl sm:text-3xl font-black leading-tight">
                                        Track Your
                                        <span className="text-emerald-400"> Expenses </span>
                                        
                                    </h1>

                                    <p className="mt-2 text-sm text-gray-300 max-w-xl leading-relaxed">
                                        A modern personal finance dashboard with elegant visuals,
                                        smooth interaction, and aesthetic analytics.
                                    </p>

                                    <button
                                        onClick={() => setShowForm(true)}
                                        className="mt-3 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 transition-all px-4 py-2 rounded-xl font-semibold shadow-lg shadow-emerald-500/30 text-sm"
                                    >
                                        <Plus size={16} />
                                        Add Expense
                                    </button>
                                </div>

                                {/* Right Floating Cards */}
                                <div className="grid grid-cols-2 gap-3 w-full sm:w-[240px] md:w-[280px]">

                                    <div className="bg-white/10 border border-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-lg">
                                        <Wallet className="text-emerald-400 mb-2" />
                                        <p className="text-gray-400 text-xs">Wallet Balance</p>
                                        <h2 className="text-xl font-bold mt-1">₹24,500</h2>
                                    </div>

                                    <div className="bg-white/10 border border-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-lg">
                                        <TrendingUp className="text-cyan-400 mb-2" />
                                        <p className="text-gray-400 text-xs">Monthly Saving</p>
                                        <h2 className="text-xl font-bold mt-1">+18%</h2>
                                    </div>

                                    <div className="col-span-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl p-4 text-black shadow-xl">
                                        <p className="font-semibold text-sm">
                                            Financial Insight
                                        </p>

                                        <h3 className="text-xl sm:text-2xl font-black mt-1">
                                            Keep growing 📈
                                        </h3>

                                        <p className="mt-1 text-xs">
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
                        className="mb-5"
                    >
                        <SummaryCard expenses={expenses} />
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
                        className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">

                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <p className="text-gray-400 text-xs uppercase tracking-[2px]">
                                    Recent Activity
                                </p>

                                <h2 className="text-xl font-bold mt-1">
                                    Transactions
                                </h2>
                            </div>

                            <div className="bg-emerald-500/20 text-emerald-300 px-3 py-1.5 rounded-xl text-xs">
                                {expenses.length} Records
                            </div>
                        </div>

                        <div>
                            <div className="max-h-[360px] sm:max-h-[420px] overflow-hidden">
                                <ExpenseList expenses={visibleExpenses} />
                            </div>

                            {expenses.length > 5 && (
                                <button
                                    onClick={() => setShowAllExpenses(!showAllExpenses)}
                                    className="mt-4 mx-auto flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition"
                                >
                                    {showAllExpenses ? (
                                        <>
                                            Show less
                                            <span className="text-lg">↑</span>
                                        </>
                                    ) : (
                                        <>
                                            Show more
                                            <span className="text-lg">↓</span>
                                        </>
                                    )}
                                </button>
                            )}
                        </div>
                    </motion.section>
                </main>
                <motion.button
                    onClick={() => setShowForm(true)}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{
                        scale: 1.08,
                        y: -4,
                    }}
                    whileTap={{ scale: 0.92 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                    className="
    fixed
    bottom-5
    right-5
    sm:bottom-6
    sm:right-6
    z-50
    w-12
    h-12
    rounded-full
    bg-gradient-to-r
    from-emerald-500
    to-cyan-500
    text-white
    shadow-[0_0_30px_rgba(16,185,129,0.45)]
    flex
    items-center
    justify-center
    backdrop-blur-xl
  "
                >
                    <Plus size={22} strokeWidth={2.5} />
                </motion.button>
            </div>
        </motion.main>
    );
}

export default Dashboard;