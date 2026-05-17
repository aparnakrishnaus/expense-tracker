import { motion } from "framer-motion";
import {
  User,
  Bell,
  Shield,
  Moon,
  CreditCard,
  ChevronRight,
} from "lucide-react";

function SettingsPage() {
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
          Preferences & Security
        </p>

        <p className="text-gray-400 mt-3 max-w-2xl">
          Manage your account preferences, notifications,
          payment methods, and privacy settings.
        </p>
      </div>

      {/* Profile Card */}
      <motion.div
        whileHover={{ y: -4 }}
        className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="h-20 w-20 rounded-2xl bg-white/10 flex items-center justify-center text-white">
              <User size={34} />
            </div>

            <div>
              <h2 className="text-3xl font-black text-white">
                Aparna Krishna
              </h2>

              <p className="text-gray-300 mt-2">
                aparna@example.com
              </p>
            </div>
          </div>

          <button
            className="
              bg-white text-black px-6 py-3 rounded-2xl
              font-semibold hover:scale-105 transition
            "
          >
            Edit Profile
          </button>
        </div>
      </motion.div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Account Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#111827] border border-white/10 rounded-3xl p-6 shadow-xl"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Account Settings
          </h2>

          <div className="space-y-4">

            <div className="flex items-center justify-between bg-white/5 border border-white/5 rounded-2xl p-4 hover:bg-white/10 transition">
              <div className="flex items-center gap-4">
                <div className="text-emerald-400">
                  <User size={20} />
                </div>

                <div>
                  <h3 className="text-white font-medium">
                    Personal Information
                  </h3>

                  <p className="text-sm text-gray-400 mt-1">
                    Update your account details
                  </p>
                </div>
              </div>

              <ChevronRight className="text-gray-500" />
            </div>

            <div className="flex items-center justify-between bg-white/5 border border-white/5 rounded-2xl p-4 hover:bg-white/10 transition">
              <div className="flex items-center gap-4">
                <div className="text-cyan-400">
                  <CreditCard size={20} />
                </div>

                <div>
                  <h3 className="text-white font-medium">
                    Payment Methods
                  </h3>

                  <p className="text-sm text-gray-400 mt-1">
                    Manage saved cards and billing
                  </p>
                </div>
              </div>

              <ChevronRight className="text-gray-500" />
            </div>

            <div className="flex items-center justify-between bg-white/5 border border-white/5 rounded-2xl p-4 hover:bg-white/10 transition">
              <div className="flex items-center gap-4">
                <div className="text-purple-400">
                  <Shield size={20} />
                </div>

                <div>
                  <h3 className="text-white font-medium">
                    Privacy & Security
                  </h3>

                  <p className="text-sm text-gray-400 mt-1">
                    Passwords and authentication
                  </p>
                </div>
              </div>

              <ChevronRight className="text-gray-500" />
            </div>

          </div>
        </motion.div>

        {/* Preferences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#111827] border border-white/10 rounded-3xl p-6 shadow-xl"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Preferences
          </h2>

          <div className="space-y-5">

            <div className="flex items-center justify-between bg-white/5 rounded-2xl p-4 border border-white/5">
              <div className="flex items-center gap-4">
                <Bell className="text-yellow-400" />

                <div>
                  <h3 className="text-white font-medium">
                    Notifications
                  </h3>

                  <p className="text-sm text-gray-400 mt-1">
                    Receive expense reminders
                  </p>
                </div>
              </div>

              <button className="w-14 h-8 bg-emerald-500 rounded-full relative">
                <span className="absolute right-1 top-1 h-6 w-6 bg-white rounded-full" />
              </button>
            </div>

            <div className="flex items-center justify-between bg-white/5 rounded-2xl p-4 border border-white/5">
              <div className="flex items-center gap-4">
                <Moon className="text-cyan-400" />

                <div>
                  <h3 className="text-white font-medium">
                    Dark Mode
                  </h3>

                  <p className="text-sm text-gray-400 mt-1">
                    Enable dark appearance
                  </p>
                </div>
              </div>

              <button className="w-14 h-8 bg-emerald-500 rounded-full relative">
                <span className="absolute right-1 top-1 h-6 w-6 bg-white rounded-full" />
              </button>
            </div>

            <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
              <h3 className="text-white font-semibold mb-2">
                App Version
              </h3>

              <p className="text-gray-400 text-sm">
                Fiscal Atelier v1.0.0
              </p>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Danger Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="border border-red-500/20 bg-red-500/10 rounded-3xl p-6"
      >
        <h2 className="text-2xl font-bold text-red-400 mb-3">
          Danger Zone
        </h2>

        <p className="text-gray-300 mb-5 max-w-xl">
          Permanently delete your account and all associated
          financial records.
        </p>

        <button
          className="
            bg-red-500 hover:bg-red-600
            transition px-6 py-3 rounded-2xl
            text-white font-semibold
          "
        >
          Delete Account
        </button>
      </motion.div>
    </motion.div>
  );
}

export default SettingsPage;
