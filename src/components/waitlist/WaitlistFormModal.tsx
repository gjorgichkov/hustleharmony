import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WaitlistSuccess } from "./WaitlistSuccess";
import { WaitlistError } from "./WaitlistError";
import { WaitlistForm } from "./WaitlistForm";
import { checkEmailExists, addToWaitlist, WaitlistEntry } from "./waitlist-service";

interface WaitlistFormModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

export const WaitlistFormModal = ({
  showModal,
  setShowModal,
}: WaitlistFormModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);

  const handleSubmit = async (data: WaitlistEntry) => {
    setIsSubmitting(true);
    setIsCheckingEmail(true);
    
    try {
      // First check if email exists
      const emailExists = await checkEmailExists(data.email);
      
      if (emailExists) {
        setShowError(true);
        setShowSuccess(false);
        setTimeout(() => {
          setShowError(false);
        }, 2000);
        return;
      }

      // If email doesn't exist, try to add to waitlist
      const success = await addToWaitlist(data);
      
      if (success) {
        setShowSuccess(true);
        setShowError(false);
        setTimeout(() => {
          setShowSuccess(false);
          setShowModal(false);
        }, 2000);
      } else {
        // Handle general error case
        setShowError(true);
        setShowSuccess(false);
        setTimeout(() => {
          setShowError(false);
        }, 2000);
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error("Error in form submission:", error);
      setShowError(true);
      setShowSuccess(false);
      setTimeout(() => {
        setShowError(false);
      }, 2000);
    } finally {
      setIsSubmitting(false);
      setIsCheckingEmail(false);
    }
  };

  return (
    <AnimatePresence>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="relative z-50 w-full max-w-md mx-4"
          >
            <div className="bg-gradient-to-br from-navy/90 to-teal/20 p-8 rounded-2xl border border-teal/20 shadow-xl">
              {showSuccess ? (
                <WaitlistSuccess />
              ) : showError ? (
                <WaitlistError />
              ) : (
                <>
                  <h3 className="text-2xl font-display font-bold text-white mb-6 text-center">
                    Join the Exclusive Waitlist
                  </h3>
                  <WaitlistForm
                    onSubmit={handleSubmit}
                    isSubmitting={isSubmitting}
                    isCheckingEmail={isCheckingEmail}
                  />
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};