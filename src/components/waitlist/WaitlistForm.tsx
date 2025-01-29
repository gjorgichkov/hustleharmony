import { useState } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { WaitlistEntry } from "./waitlist-service";

interface WaitlistFormProps {
  onSubmit: (data: WaitlistEntry) => Promise<void>;
  isSubmitting: boolean;
  isCheckingEmail: boolean;
}

export const WaitlistForm = ({ onSubmit, isSubmitting, isCheckingEmail }: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit({ name, email });
  };

  if (isSubmitting) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-12 w-full bg-white/10" />
        <Skeleton className="h-12 w-full bg-white/10" />
        <Skeleton className="h-12 w-full bg-white/10" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-teal/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-teal transition-all duration-300"
          required
        />
      </div>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-teal/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-teal transition-all duration-300"
          required
        />
        {isCheckingEmail && (
          <p className="text-sm text-white/60 mt-1">
            Checking email...
          </p>
        )}
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 bg-gradient-to-r from-orange to-yellow text-navy font-semibold rounded-lg transition-all duration-300 disabled:opacity-50"
        type="submit"
        disabled={isSubmitting || isCheckingEmail}
      >
        {isSubmitting ? "Joining..." : "Join Now"}
      </motion.button>
    </form>
  );
};