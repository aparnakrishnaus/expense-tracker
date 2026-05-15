import { useState } from "react";
import {
  Bell,
  Search,
  Menu,
} from "lucide-react";

function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="sticky top-0 z-40 px-6 pt-6">

      <div
        className="
          bg-white/10
          backdrop-blur-2xl
          border border-white/10
          rounded-3xl
          shadow-2xl
          px-6
          py-4
        "
      >
        <div className="flex items-center justify-between gap-6">

          {/* LEFT */}
          <div>
            <h1 className="text-2xl font-black text-white">
              Dashboard
            </h1>

            <p className="text-sm text-gray-400 mt-1">
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
                rounded-2xl
                pl-11
                pr-4
                py-3
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
              className="
                relative
                w-12
                h-12
                rounded-2xl
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
              <Bell size={20} />

              <span
                className="
                  absolute
                  top-3
                  right-3
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
                w-12
                h-12
                rounded-2xl
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
              className="
                lg:hidden
                w-12
                h-12
                rounded-2xl
                bg-white/5
                border border-white/10
                flex
                items-center
                justify-center
                text-gray-300
              "
            >
              <Menu size={22} />
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;