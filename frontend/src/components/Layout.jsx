import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0f172a]">

      {/* Desktop Sidebar */}
      <div className="hidden md:block shrink-0">
        <Sidebar />
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full overflow-y-auto">
            <Sidebar onNavigate={() => setMenuOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-3 sm:p-4 lg:p-6 min-w-0">

        <Header onMenuClick={() => setMenuOpen(true)} />

        <div className="mt-4 lg:mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
