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
        rounded-2xl
        border
        border-white/10
        bg-[#131c2f]
        shadow-2xl
        p-4
        sm:p-5
      "
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/10 blur-3xl rounded-full"></div>

      {/* Top Row */}
      <div className="flex items-start justify-between relative z-10">
        
        <div>
          <p className="text-gray-400 uppercase tracking-[2px] text-xs">
            Finance Overview
          </p>

          <h3 className="text-base font-semibold text-white mt-1">
            {title}
          </h3>
        </div>

        {/* Icon */}
        <div
          className="
            w-10
            h-10
            rounded-xl
            bg-emerald-500/10
            border
            border-emerald-400/20
            flex
            items-center
            justify-center
          "
        >
          <Wallet className="text-emerald-400" size={20} />
        </div>
      </div>

      {/* Amount */}
      <div className="mt-4 relative z-10">
        
        <div className="flex items-center gap-2">
          <IndianRupee
            className="text-emerald-400"
            size={22}
            strokeWidth={2.5}
          />

          <h2 className="text-3xl font-black text-white tracking-tight">
            {safeTotal.toFixed(2)}
          </h2>
        </div>

        {/* Growth Indicator */}
        <div className="mt-3 flex items-center gap-2">
          
          <div
            className="
              flex
              items-center
              gap-1
              px-2
              py-1
              rounded-full
              bg-emerald-500/10
              border
              border-emerald-400/20
            "
          >
            <TrendingUp size={13} className="text-emerald-400" />

            <span className="text-xs text-emerald-300 font-medium">
              +12.4%
            </span>
          </div>

          <p className="text-gray-500 text-xs">
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