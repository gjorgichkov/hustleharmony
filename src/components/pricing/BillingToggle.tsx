import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import confetti from "canvas-confetti";
import { RefObject } from "react";

interface BillingToggleProps {
  isMonthly: boolean;
  onToggle: (checked: boolean) => void;
  switchRef: RefObject<HTMLButtonElement>;
}

export const BillingToggle = ({ isMonthly, onToggle, switchRef }: BillingToggleProps) => {
  const handleToggle = (checked: boolean) => {
    onToggle(checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: ["#0EA5E9", "#F97316", "#FEF7CD"],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <div className="flex justify-center mb-10">
      <label className="relative inline-flex items-center cursor-pointer">
        <Label className="text-white">
          <Switch
            ref={switchRef as any}
            checked={!isMonthly}
            onCheckedChange={handleToggle}
            className="relative"
          />
        </Label>
      </label>
      <span className="ml-2 font-semibold text-white">
        Annual billing <span className="text-teal">(Save 20%)</span>
      </span>
    </div>
  );
};