import { useEffect, useState } from "react";
import axios from "axios";

import Analytics from "../components/Analytics";

function AnalyticsPage() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/expenses/")
      .then((res) => {
        setExpenses(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="space-y-8">

      {/* Page Header */}
      <div>
        <p className="uppercase tracking-[4px] text-sm text-gray-400">
          Financial Intelligence
        </p>

        <h1 className="text-4xl md:text-5xl font-black text-white mt-2">
          Analytics Dashboard 📊
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl">
          Visualize your spending behavior, category distribution,
          and monthly financial trends in a modern interactive view.
        </p>
      </div>

      {/* Analytics Charts */}
      <Analytics expenses={expenses} />

    </div>
  );
}

export default AnalyticsPage;