import {
  LayoutDashboard,
  BarChart3,
  WalletCards,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar({ onNavigate }) {
  const navItemClass = ({ isActive }) =>
    `
      flex items-center gap-3
      px-3
      py-2.5
      rounded-xl
      transition-all
      text-sm font-medium
      ${
        isActive
          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/20"
          : "text-gray-400 hover:bg-white/5 hover:text-white"
      }
    `;

  return (
    <aside
      className="
        w-[260px]
        md:w-[280px]
        min-h-screen
        bg-[#0b1220]
        border-r border-white/10
        p-4
        sticky top-0
      "
    >
      {/* Logo */}
      <div className="mb-6">

        <h1 className="text-2xl font-black text-white">
          Fiscal
          <span className="text-emerald-400">
            {" "}Atelier
          </span>
        </h1>

        <p className="text-xs tracking-[3px] uppercase text-gray-500 mt-1">
          Expense Intelligence
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">

        <NavLink
          to="/"
          end
          className={navItemClass}
          onClick={onNavigate}
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink
          to="/analytics"
          className={navItemClass}
          onClick={onNavigate}
        >
          <BarChart3 size={18} />
          Analytics
        </NavLink>

        <NavLink
          to="/wallets"
          className={navItemClass}
          onClick={onNavigate}
        >
          <WalletCards size={18} />
          Wallets
        </NavLink>

        <NavLink
          to="/settings"
          className={navItemClass}
          onClick={onNavigate}
        >
          <Settings size={18} />
          Settings
        </NavLink>
      </nav>

      {/* Bottom User Card */}
      <div
        className="
          absolute
          bottom-4
          left-4
          right-4
          bg-white/5
          border border-white/10
          rounded-2xl
          p-3
        "
      >
        <div className="flex items-center gap-3">

          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-gradient-to-br
              from-emerald-400
              to-cyan-500
              flex
              items-center
              justify-center
              font-bold
              text-white
            "
          >
            A
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm">
              Aparna
            </h3>

            <p className="text-gray-400 text-xs">
              Premium User
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;