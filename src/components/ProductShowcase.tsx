import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ProductShowcase = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="video" className="relative overflow-hidden mb-[20px]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-teal mb-1 flex items-center gap-2 animate-bounce"
          >
            👇 Click to interact with our live demo!
          </motion.p>

          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: isExpanded ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "relative rounded-[3rem] bg-gradient-to-br from-navy/90 to-teal/20 border-4 border-teal/20 shadow-2xl overflow-hidden cursor-pointer mx-auto",
              "w-[300px] md:w-[400px] aspect-[9/19] my-5",
              "hover:shadow-teal/20 transition-shadow duration-300",
              "max-w-[90%]"
            )}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <iframe
              className="w-full h-full object-cover"
              src="https://mindful-metric-haven.lovable.app/"
              title="Mindful Metric Haven"
              frameBorder="0"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;