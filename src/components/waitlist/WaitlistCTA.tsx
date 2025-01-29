import { motion } from "framer-motion";
import { Sparkles, Timer } from "lucide-react";

interface WaitlistCTAProps {
  onOpenModal: () => void;
}

export const WaitlistCTA = ({ onOpenModal }: WaitlistCTAProps) => {
  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col items-center gap-3 px-6 md:px-8 py-4 bg-gradient-to-r from-[#9b87f5]/20 to-[#7E69AB]/20 rounded-2xl border border-[#9b87f5]/30 backdrop-blur-sm"
      >
        <div className="flex items-center gap-2">
          <Timer className="text-[#9b87f5] w-5 h-5 animate-pulse" />
          <p className="text-sm md:text-base font-bold bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] bg-clip-text text-transparent">
            Limited Time Offer
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm md:text-base text-white/90">
            Join now and get a <span className="font-bold text-[#9b87f5]">30% lifetime discount</span>
          </p>
          <p className="text-xs md:text-sm text-white/70 mt-1">
            Only 20 spots remaining
          </p>
        </div>
      </motion.div>
      
      <motion.button
        onClick={onOpenModal}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, delay: 0.7 }}
        className="group relative overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] shadow-lg hover:shadow-[#9b87f5]/25 transition-all duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#9b87f5] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative flex items-center gap-3 z-10">
          <span className="text-white font-bold text-lg">
            Join Founders Waitlist
          </span>
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div className="absolute inset-0 bg-gradient-radial from-[#E5DEFF]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-sm text-white/60 text-center max-w-sm"
      >
        Join our exclusive community of founders and get early access to our platform
      </motion.p>
    </div>
  );
};