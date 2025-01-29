import { motion } from "framer-motion";
import { FeaturesSectionWithHoverEffects } from "./ui/feature-section-with-hover-effects";

const PainPoints = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Common Challenges, <span className="text-teal">Solved</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We understand the hurdles founders face because we've been there too.
          </p>
        </motion.div>

        <FeaturesSectionWithHoverEffects />
      </div>
    </section>
  );
};

export default PainPoints;