import { useState } from "react";
import { motion } from "framer-motion";
import {
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  CreditCard,
  Landmark,
} from "lucide-react";

function WalletPage() {
  const balance = 28450;
  const income = 42000;
  const expenses = 13550;

  const [cards, setCards] = useState([]);
  const [formData, setFormData] = useState({
    type: "",
    number: "",
    holder: "",
    expiry: "",
  });
  const [showCardForm, setShowCardForm] = useState(false);

  const handleAddCard = (e) => {
    e.preventDefault();

    if (
      !formData.type ||
      !formData.number ||
      !formData.holder ||
      !formData.expiry
    ) {
      return;
    }

    const maskedNumber =
      "**** **** **** " + formData.number.slice(-4);

    const newCard = {
      id: Date.now(),
      type: formData.type,
      number: maskedNumber,
      holder: formData.holder,
      expiry: formData.expiry,
    };

    setCards([...cards, newCard]);

    setFormData({
      type: "",
      number: "",
      holder: "",
      expiry: "",
    });

    setShowCardForm(false);
  };
  const handleDeleteCard = (id) => {
  setCards(cards.filter((card) => card.id !== id));
};
  const transactions = [
    {
      id: 1,
      title: "Netflix Subscription",
      amount: "- ₹499",
      date: "Today",
      type: "expense",
    },
    {
      id: 2,
      title: "Salary Credit",
      amount: "+ ₹42,000",
      date: "Yesterday",
      type: "income",
    },
    {
      id: 3,
      title: "Amazon Purchase",
      amount: "- ₹1,299",
      date: "2 days ago",
      type: "expense",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Header */}
      <div>
        <p className="uppercase tracking-[4px] text-sm text-gray-400">
          Digital Finance
        </p>

        <p className="text-gray-400 mt-3 max-w-2xl">
          Manage your balance, monitor transactions, and track
          your financial activity in one secure wallet.
        </p>
      </div>

      {/* Balance Card */}
      <motion.div
        whileHover={{ y: -4 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 p-8 backdrop-blur-xl"
      >
        <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 text-emerald-300 mb-4">
              <Wallet size={24} />
              <p className="uppercase tracking-widest text-sm font-medium">
                Available Balance
              </p>
            </div>

            <h1 className="text-5xl font-black text-white">
              ₹{balance.toLocaleString()}
            </h1>

            <p className="text-gray-300 mt-3">
              Updated just now
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 min-w-[180px]">
              <div className="flex items-center gap-2 text-emerald-400 mb-3">
                <ArrowDownLeft size={18} />
                <p className="text-sm">Income</p>
              </div>

              <h3 className="text-2xl font-bold text-white">
                ₹{income.toLocaleString()}
              </h3>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 min-w-[180px]">
              <div className="flex items-center gap-2 text-red-400 mb-3">
                <ArrowUpRight size={18} />
                <p className="text-sm">Expenses</p>
              </div>

              <h3 className="text-2xl font-bold text-white">
                ₹{expenses.toLocaleString()}
              </h3>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Wallet Cards */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-bold text-white">
            Linked Cards
          </h2>

          <button
            onClick={() => setShowCardForm(true)}
            className="rounded-xl bg-emerald-500 px-5 py-2 text-white font-medium hover:bg-emerald-600 transition"
          >
            Add Card
          </button>
        </div>

        {showCardForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#111827] p-6">

              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  Add New Card
                </h2>

                <button
                  onClick={() => setShowCardForm(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <form
                onSubmit={handleAddCard}
                className="space-y-4"
              >

                <input
                  type="text"
                  placeholder="Card Type"
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      type: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none"
                />

                <input
                  type="text"
                  placeholder="Card Number"
                  value={formData.number}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      number: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none"
                />

                <input
                  type="text"
                  placeholder="Card Holder"
                  value={formData.holder}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      holder: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none"
                />

                <input
                  type="text"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      expiry: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none"
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-emerald-500 py-3 font-semibold text-white hover:bg-emerald-600 transition"
                >
                  Save Card
                </button>

              </form>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {cards.length === 0 && (
            <div className="col-span-full rounded-3xl border border-dashed border-white/10 p-10 text-center">
              <p className="text-gray-400">
                No cards added yet.
              </p>
            </div>
          )}
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
             className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-5 shadow-xl"
            >
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-gray-400 text-sm">
                      {card.type}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
    <button
      onClick={() => handleDeleteCard(card.id)}
      className="text-xs text-red-400 hover:text-red-300 transition"
    >
      Remove
    </button>

    <CreditCard className="text-white" />
  </div>
                </div>

                <h3 className="text-xl  tracking-[3px] font-semibold text-white mb-6">
                  {card.number}
                </h3>

                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      CARD HOLDER
                    </p>

                    <p className="text-white font-medium">
                      {card.holder}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      EXPIRES
                    </p>

                    <p className="text-white font-medium">
                      {card.expiry}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            Recent Transactions
          </h2>

          <Landmark className="text-emerald-400" />
        </div>

        <div className="space-y-4">
          {transactions.map((transaction, index) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 4 }}
              className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4"
            >
              <div>
                <h3 className="text-white font-medium">
                  {transaction.title}
                </h3>

                <p className="text-sm text-gray-400 mt-1">
                  {transaction.date}
                </p>
              </div>

              <p
                className={`font-bold text-lg ${transaction.type === "income"
                  ? "text-emerald-400"
                  : "text-red-400"
                  }`}
              >
                {transaction.amount}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default WalletPage;
