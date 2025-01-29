import { motion } from "framer-motion";
import { X } from "lucide-react";

export const WaitlistError = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="text-center py-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center"
      >
        <X className="w-8 h-8 text-white" />
      </motion.div>
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold text-white mb-2"
      >
        Email Already Registered
      </motion.h3>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-white/80"
      >
        This email is already in our waitlist
      </motion.p>
    </motion.div>
  );
};