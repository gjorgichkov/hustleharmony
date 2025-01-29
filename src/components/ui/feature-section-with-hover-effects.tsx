import { cn } from "@/lib/utils";
import {
  IconClock,
  IconUsers,
  IconCurrencyDollar,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Time Management",
      description: "AI-powered scheduling optimizes your day automatically",
      icon: <IconClock size={24} />,
    },
    {
      title: "Resource Allocation",
      description: "Data-driven insights for better resource management",
      icon: <IconCurrencyDollar size={24} />,
    },
    {
      title: "Team Coordination",
      description: "Seamless collaboration tools built for remote teams",
      icon: <IconUsers size={24} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        index === 0 && "lg:border-l dark:border-neutral-800"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-teal/20 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10 text-teal">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-teal/20 group-hover/feature:bg-teal transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};