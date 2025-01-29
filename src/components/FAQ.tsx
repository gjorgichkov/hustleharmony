import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI-powered scheduling work?",
    answer:
      "Our AI analyzes your daily habits, productivity patterns, and wearable data to suggest optimal schedules. With seamless integration into devices like Apple Watch, Whoop smartbands, and Oura rings, we tailor solutions based on real-time insights, saving you hours of manual planning.",
  },
  {
    question: "Can I integrate with wearable devices?",
    answer:
      "Yes! We offer seamless integration with popular wearable devices, including smartwatches like Apple Watch, smartbands like Whoop, and rings like Oura. This enables you to track your performance and synchronize data effortlessly for a smarter scheduling experience.",
  },
  {
    question: "What makes your solution stand out?",
    answer:
      "Our solution combines advanced AI with deep integration into wearable technology, including Apple Watch, Whoop smartbands, and Oura rings. This personalized approach adapts to your habits, offering unmatched insights and a productivity system that grows with you.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. Whether your data comes from Apple Watch, Whoop, Oura, or other integrations, we encrypt it with enterprise-grade security and follow strict protocols to keep your information private and protected at all times.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="text-teal">Questions</span>
          </h2>
          <p className="text-gray-400">
            Everything you need to know about our platform
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-teal/20"
              >
                <AccordionTrigger className="px-6 text-white hover:text-teal">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;