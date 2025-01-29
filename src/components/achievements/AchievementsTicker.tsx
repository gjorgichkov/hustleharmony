import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const achievements = [
  "Save 2-3 hours daily with smart automation",
  "Reduce decision fatigue by 80%",
  "Achieve 3x more daily goals",
  "Seamless collaboration tools built for remote teams",
  "Smart task distribution prevents burnout",
  "AI-powered scheduling optimizes your day automatically",
  "Smart decision frameworks reduce cognitive load",
  "Data-driven insights for better resource management",
];

export const AchievementsTicker = () => {
  const [currentAchievement, setCurrentAchievement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAchievement((prev) => (prev + 1) % achievements.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="h-12 relative z-10 mt-4"
    >
      <motion.p
        key={achievements[currentAchievement]}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-xl md:text-2xl text-orange font-light"
      >
        {achievements[currentAchievement]}
      </motion.p>
    </motion.div>
  );
};