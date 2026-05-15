import { motion } from "framer-motion";
import {
  Wallet,
  TrendingUp,
  IndianRupee,
} from "lucide-react";

function SummaryCard({
  expenses = [],
  title = "Total Expenses",
}) {
  const total = Array.isArray(expenses)
    ? expenses.reduce((sum, item) => {
        const value = Number(item?.amount);
        return sum + (isNaN(value) ? 0 : value);
      }, 0)
    : 0;

  const safeTotal = isNaN(total) ? 0 : total;

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      transition={{ duration: 0.25 }}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-[#131c2f]
        shadow-2xl
        p-7
      "
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full"></div>

      {/* Top Row */}
      <div className="flex items-start justify-between relative z-10">
        
        <div>
          <p className="text-gray-400 uppercase tracking-[3px] text-xs">
            Finance Overview
          </p>

          <h3 className="text-xl font-semibold text-white mt-2">
            {title}
          </h3>
        </div>

        {/* Icon */}
        <div
          className="
            w-14
            h-14
            rounded-2xl
            bg-emerald-500/10
            border
            border-emerald-400/20
            flex
            items-center
            justify-center
          "
        >
          <Wallet className="text-emerald-400" size={26} />
        </div>
      </div>

      {/* Amount */}
      <div className="mt-8 relative z-10">
        
        <div className="flex items-center gap-2">
          <IndianRupee
            className="text-emerald-400"
            size={28}
            strokeWidth={2.5}
          />

          <h2 className="text-5xl font-black text-white tracking-tight">
            {safeTotal.toFixed(2)}
          </h2>
        </div>

        {/* Growth Indicator */}
        <div className="mt-5 flex items-center gap-2">
          
          <div
            className="
              flex
              items-center
              gap-1
              px-3
              py-1.5
              rounded-full
              bg-emerald-500/10
              border
              border-emerald-400/20
            "
          >
            <TrendingUp size={15} className="text-emerald-400" />

            <span className="text-sm text-emerald-300 font-medium">
              +12.4%
            </span>
          </div>

          <p className="text-gray-500 text-sm">
            compared to last month
          </p>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-[3px]
          bg-gradient-to-r
          from-emerald-500
          to-cyan-500
        "
      ></div>
    </motion.div>
  );
}

export default SummaryCard;