import { motion } from "framer-motion";
import { useState } from "react";
import { WaitlistCTA } from "./waitlist/WaitlistCTA";
import { WaitlistFormModal } from "./waitlist/WaitlistFormModal";
import { AchievementsTicker } from "./achievements/AchievementsTicker";
import { GridBackground } from "./ui/glowing-card";
import { Rocket } from "lucide-react";

export const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center py-4 text-center relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 max-w-4xl mx-auto px-4 relative"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-1.5 bg-navy/40 border border-teal/20 backdrop-blur-sm py-1.5 px-3 rounded-full text-sm md:text-base font-light mb-4"
        >
          <Rocket className="w-4 h-4 text-teal" />
          <span className="bg-gradient-to-r from-teal to-teal/70 bg-clip-text text-transparent">
            Built for founders, by founders
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <GridBackground
            title="Entrepreneurship is Tough"
            description="Your Mental Health Doesn't Have to Be"
            className="mb-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-2"
            >
              <AchievementsTicker />
            </motion.div>
          </GridBackground>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-1"
        >
          <WaitlistCTA onOpenModal={() => setShowModal(true)} />
        </motion.div>
      </motion.div>
      
      <WaitlistFormModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};