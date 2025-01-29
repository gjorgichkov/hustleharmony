import { motion } from "framer-motion";

interface PricingHeaderProps {
  title: string;
  description: string;
}

export const PricingHeader = ({ title, description }: PricingHeaderProps) => {
  return (
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-white mb-4"
      >
        Invest in Your Peace of Mind
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-gray-300 max-w-2xl mx-auto"
      >
        Choose a plan that supports your journey. Because when you're at your best, your business thrives.
      </motion.p>
    </div>
  );
};