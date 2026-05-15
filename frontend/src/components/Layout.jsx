import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex min-h-screen bg-[#0f172a]">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">

        <Header />

        <div className="mt-8">
          <Outlet />
        </div>

      </div>
    </div>
  );
}

export default Layout;