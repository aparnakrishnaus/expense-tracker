import {
  LayoutDashboard,
  BarChart3,
  WalletCards,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {
  const navItemClass = ({ isActive }) =>
    `
      flex items-center gap-3
      px-4 py-3
      rounded-2xl
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
        w-[280px]
        min-h-screen
        bg-[#0b1220]
        border-r border-white/10
        p-6
        sticky top-0
      "
    >
      {/* Logo */}
      <div className="mb-10">

        <h1 className="text-3xl font-black text-white">
          Fiscal
          <span className="text-emerald-400">
            {" "}Atelier
          </span>
        </h1>

        <p className="text-xs tracking-[4px] uppercase text-gray-500 mt-2">
          Expense Intelligence
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-3">

        <NavLink
          to="/"
          end
          className={navItemClass}
        >
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to="/analytics"
          className={navItemClass}
        >
          <BarChart3 size={20} />
          Analytics
        </NavLink>

        <NavLink
          to="/wallets"
          className={navItemClass}
        >
          <WalletCards size={20} />
          Wallets
        </NavLink>

        <NavLink
          to="/settings"
          className={navItemClass}
        >
          <Settings size={20} />
          Settings
        </NavLink>
      </nav>

      {/* Bottom User Card */}
      <div
        className="
          absolute
          bottom-6
          left-6
          right-6
          bg-white/5
          border border-white/10
          rounded-3xl
          p-4
        "
      >
        <div className="flex items-center gap-3">

          <div
            className="
              w-12
              h-12
              rounded-2xl
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
            <h3 className="text-white font-semibold">
              Aparna
            </h3>

            <p className="text-gray-400 text-sm">
              Premium User
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;