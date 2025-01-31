import { useState, useRef } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { PricingCard } from "./pricing/PricingCard";
import { PricingHeader } from "./pricing/PricingHeader";
import { BillingToggle } from "./pricing/BillingToggle";
import { Rocket, Users, Timer } from "lucide-react";
import { WaitlistFormModal } from "./waitlist/WaitlistFormModal";

const plans = [
  {
    name: "STARTER",
    price: "0",
    yearlyPrice: "0",
    period: "per month",
    icon: Timer,
    features: [
      { text: "Basic goal tracking", icon: Timer },
      { text: "Daily task management", icon: Timer },
      { text: "Progress analytics", icon: Timer },
      { text: "Email support", icon: Timer },
      { text: "Mobile app access", icon: Timer },
    ],
    description: "Perfect for individuals starting their productivity journey",
    buttonText: "Join Waitlist - 30% Off",
    href: "#",
    isPopular: false,
  },
  {
    name: "ACCELERATOR",
    price: "15.99",
    yearlyPrice: "12.99",
    period: "per month",
    icon: Rocket,
    features: [
      { text: "Advanced goal tracking", icon: Rocket },
      { text: "Unlimited projects", icon: Rocket },
      { text: "Priority support", icon: Rocket },
      { text: "Advanced analytics", icon: Rocket },
      { text: "Team collaboration", icon: Rocket },
      { text: "Custom integrations", icon: Rocket },
      { text: "AI-powered insights", icon: Rocket },
    ],
    description: "Ideal for business professionals and entrepreneurs",
    buttonText: "Join Waitlist - 30% Off",
    href: "#",
    isPopular: true,
  },
  {
    name: "TEAM CATALYST",
    price: "29.99",
    yearlyPrice: "23.99",
    period: "per month",
    icon: Users,
    features: [
      { text: "Everything in Accelerator", icon: Users },
      { text: "Team goal alignment", icon: Users },
      { text: "Dedicated success manager", icon: Users },
      { text: "1-hour support response", icon: Users },
      { text: "SSO Authentication", icon: Users },
      { text: "Advanced security", icon: Users },
      { text: "Custom workflows", icon: Users },
      { text: "Team performance analytics", icon: Users },
    ],
    description: "For founders and their teams aiming for excellence",
    buttonText: "Join Waitlist - 30% Off",
    href: "#",
    isPopular: false,
  },
];

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="container py-10">
      <PricingHeader
        title="Invest in Your Peace of Mind"
        description="Choose a plan that supports your journey. Because when you're at your best, your business thrives."
      />

      <BillingToggle
        isMonthly={isMonthly}
        onToggle={(checked) => setIsMonthly(!checked)}
        switchRef={switchRef}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 sm:2 gap-4">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            plan={plan}
            index={index}
            isMonthly={isMonthly}
            isDesktop={isDesktop}
            onButtonClick={() => setShowModal(true)}
          />
        ))}
      </div>

      <WaitlistFormModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Pricing;
