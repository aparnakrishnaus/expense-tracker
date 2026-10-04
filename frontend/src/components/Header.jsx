import { useState } from "react";
import {
  Bell,
  Search,
  Menu,
} from "lucide-react";
import { useLocation } from "react-router-dom";

function Header({ onMenuClick }) {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Dashboard";

      case "/analytics":
        return "Analytics";

      case "/wallets":
        return "Wallets";

      case "/settings":
        return "Settings";

      default:
        return "Fiscal Atelier";
    }
  };
  const [search, setSearch] = useState("");

  return (
    <header className="top-0 z-40 px-1 sm:px-2 pt-2">

      <div
        className="
          bg-white/10
          backdrop-blur-2xl
          border border-white/10
          rounded-2xl
          shadow-2xl
          px-4
          py-3
          sm:px-5
        "
      >
        <div className="flex items-center justify-between gap-4">

          {/* LEFT */}
          <div>
            <h1 className="text-xl font-black text-white">
              {getPageTitle()}
            </h1>

            <p className="text-xs text-gray-400 mt-1">
              Track your financial activity
            </p>
          </div>

          {/* SEARCH */}
          <div className="hidden md:flex flex-1 max-w-xl relative">

            <Search
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
              size={18}
            />

            <input
              type="text"
              placeholder="Search transactions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                bg-white/5
                border border-white/10
                text-white
                placeholder:text-gray-500
                rounded-xl
                pl-11
                pr-4
                py-2.5
                outline-none
                focus:border-emerald-400
                focus:ring-2
                focus:ring-emerald-400/20
                transition-all
              "
            />
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {/* Notification */}
            <button
              onClick={onMenuClick}
              className="
                relative
                w-10
                h-10
                rounded-xl
                bg-white/5
                border border-white/10
                flex
                items-center
                justify-center
                text-gray-300
                hover:bg-white/10
                hover:text-white
                transition-all
              "
            >
              <Bell size={18} />

              <span
                className="
                  absolute
                  top-2.5
                  right-2.5
                  w-2
                  h-2
                  rounded-full
                  bg-emerald-400
                "
              />
            </button>

            {/* Profile */}
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
                text-white
                font-bold
                shadow-lg
              "
            >
              A
            </div>

            {/* Mobile */}
            <button
              onClick={onMenuClick}
              className="
                lg:hidden
                w-10
                h-10
                rounded-xl
                bg-white/5
                border border-white/10
                flex
                items-center
                justify-center
                text-gray-300
              "
            >
              <Menu size={20} />
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;