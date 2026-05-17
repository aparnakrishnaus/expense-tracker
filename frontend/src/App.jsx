import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import AnalyticsPage from "./pages/AnalyticsPage";
import WalletPage from "./pages/WalletPage";
import SettingsPage from "./pages/SettingsPage";

import "@fontsource/space-grotesk/300.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Shared Layout */}
        <Route path="/" element={<Layout />}>

          {/* Dashboard */}
          <Route index element={<Dashboard />} />

          {/* Analytics */}
          <Route
            path="analytics"
            element={<AnalyticsPage />}
          />
          <Route
            path="wallets"
            element={<WalletPage />}
          />
          <Route
            path="settings"
            element={<SettingsPage />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;