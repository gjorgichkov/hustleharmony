import { motion } from "framer-motion";
import { Check, Star, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { buttonVariants } from "@/components/ui/button";

interface PricingFeature {
  text: string;
  icon: LucideIcon;
}

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: PricingFeature[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
  icon: LucideIcon;
}

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
  isMonthly: boolean;
  isDesktop: boolean;
  onButtonClick: () => void;
}

export const PricingCard = ({
  plan,
  index,
  isMonthly,
  isDesktop,
  onButtonClick,
}: PricingCardProps) => {
  const PlanIcon = plan.icon;

  return (
    <motion.div
      initial={{ y: 50, opacity: 1 }}
      whileInView={
        isDesktop
          ? {
              y: plan.isPopular ? -20 : 0,
              opacity: 1,
              x: index === 2 ? -30 : index === 0 ? 30 : 0,
              scale: index === 0 || index === 2 ? 0.94 : 1.0,
            }
          : {}
      }
      viewport={{ once: true }}
      transition={{
        duration: 1.6,
        type: "spring",
        stiffness: 100,
        damping: 30,
        delay: 0.4,
        opacity: { duration: 0.5 },
      }}
      className={cn(
        `rounded-2xl border-[1px] p-6 bg-navy/50 text-center lg:flex lg:flex-col lg:justify-between relative h-full`,
        plan.isPopular ? "border-teal border-2" : "border-teal/20",
        "flex flex-col backdrop-blur-sm",
        !plan.isPopular && "mt-5",
        index === 0 || index === 2
          ? "z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg]"
          : "z-10",
        index === 0 && "origin-right",
        index === 2 && "origin-left"
      )}
    >
      {plan.isPopular && (
        <div className="absolute top-0 right-0 bg-teal py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center">
          <Star className="text-white h-4 w-4 fill-current" />
          <span className="text-white ml-1 font-sans font-semibold">
            Popular
          </span>
        </div>
      )}

      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-center gap-2 mb-4">
          <PlanIcon className="h-6 w-6 text-teal" />
          <p className="text-base font-semibold text-gray-300">{plan.name}</p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-x-2">
          <span className="text-5xl font-bold tracking-tight text-white">
            <NumberFlow
              value={isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)}
              format={{
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }}
              transformTiming={{
                duration: 500,
                easing: "ease-out",
              }}
              willChange
              className="font-variant-numeric: tabular-nums"
            />
          </span>
          <span className="text-sm font-semibold leading-6 tracking-wide text-gray-300">
            / {plan.period}
          </span>
        </div>

        <p className="text-xs leading-5 text-gray-400">
          {isMonthly ? "billed monthly" : "billed annually"}
        </p>

        <ul className="mt-5 gap-2 flex flex-col">
          {plan.features.map((feature, idx) => {
            const FeatureIcon = feature.icon;
            return (
              <li key={idx} className="flex items-start gap-2">
                <FeatureIcon className="h-4 w-4 text-teal mt-1 flex-shrink-0" />
                <span className="text-left text-gray-300">{feature.text}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <button
          onClick={onButtonClick}
          className={cn(
            "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter px-4 py-2 rounded-md",
            "transform-gpu transition-all duration-300 ease-out hover:ring-2 hover:ring-teal hover:ring-offset-1",
            plan.isPopular
              ? "bg-teal text-white hover:bg-teal/90"
              : "bg-navy/50 text-white border border-teal/20 hover:bg-teal/10"
          )}
        >
          {plan.buttonText}
        </button>
        <p className="text-xs leading-5 text-gray-400">{plan.description}</p>
      </div>
    </motion.div>
  );
};
