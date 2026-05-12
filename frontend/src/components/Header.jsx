import { useState } from "react";

function Header({ onAddClick }) {
  const [search, setSearch] = useState("");

  return (
    <header className="backdrop-blur-xl bg-white/70 border-b border-gray-200 shadow-sm px-10 py-5 flex items-center justify-between fixed w-full top-0 z-50">

      {/* LEFT: Brand + Nav */}
      <div className="flex items-center gap-10">
        
        <h1 className="text-2xl font-extrabold tracking-tight text-emerald-900">
          Fiscal Atelier
        </h1>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <span className="text-emerald-600 border-b-2 border-emerald-600 pb-1 cursor-pointer">
            Dashboard
          </span>
          <span className="text-gray-500 hover:text-emerald-700 cursor-pointer">
            Analytics
          </span>
          <span className="text-gray-500 hover:text-emerald-700 cursor-pointer">
            Wallets
          </span>
        </nav>

      </div>

      {/* CENTER: Search */}
      <div className="flex-1 mx-10 max-w-md">
        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-2.5 rounded-xl bg-gray-100 focus:bg-white border border-transparent focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
        />
      </div>

      {/* RIGHT: Actions */}
      <div className="flex items-center gap-5">

        {/* Add Button */}
        <button
          onClick={onAddClick}
          className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-5 py-2.5 rounded-2xl shadow-lg hover:scale-95 transition-all duration-200"
        >
          <span className="text-lg">＋</span>
          Add Expense
        </button>

        {/* Icons */}
        <span className="cursor-pointer text-gray-500 hover:text-emerald-600 text-xl">
          🔔
        </span>

        {/* Profile */}
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold border">
          A
        </div>

      </div>
    </header>
  );
}

export default Header;