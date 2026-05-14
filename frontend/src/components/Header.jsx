import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Search,
  Plus,
  LayoutDashboard,
  BarChart3,
  WalletCards,
  Menu,
} from "lucide-react";

function Header({ onAddClick }) {
  const [search, setSearch] = useState("");

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 pt-4">

      {/* Glass Navbar */}
      <div className="max-w-7xl mx-auto bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl px-6 py-4">

        <div className="flex items-center justify-between gap-6">

          {/* LEFT */}
          <div className="flex items-center gap-10">

            {/* Logo */}
            <div>
              <h1 className="text-2xl font-black tracking-tight text-white">
                Fiscal
                <span className="text-emerald-400"> Atelier</span>
              </h1>

              <p className="text-xs text-gray-400 tracking-[3px] uppercase">
                Expense Intelligence
              </p>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-3">

              <button className="flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-400/20 px-4 py-2 rounded-2xl text-sm font-medium">
                <LayoutDashboard size={18} />
                Dashboard
              </button>

              <button className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-2xl transition-all text-sm">
                <BarChart3 size={18} />
                Analytics
              </button>

              <motion.button whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }} className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-2xl transition-all text-sm">
                <WalletCards size={18} />
                Wallets
              </motion.button>
            </nav>
          </div>

          {/* CENTER SEARCH */}
          <div className="hidden md:flex flex-1 max-w-md relative">

            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search transactions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/10 border border-white/10 text-white placeholder:text-gray-400 rounded-2xl pl-11 pr-4 py-3 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
            />
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {/* Add Expense */}
            <button
              onClick={onAddClick}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:scale-95 transition-all duration-200 text-white px-5 py-3 rounded-2xl font-semibold shadow-lg shadow-emerald-500/20"
            >
              <Plus size={18} />
              Add Expense
            </button>

            {/* Notification */}
            <button className="relative w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all">
              <Bell size={20} />

              <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-emerald-400"></span>
            </button>

            {/* Profile */}
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg">
              A
            </div>

            {/* Mobile Menu */}
            <button className="lg:hidden w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-gray-300">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;