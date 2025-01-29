import { motion } from "framer-motion";
import { Brain, Heart, Sparkles } from "lucide-react";

export const Background = () => {
  return (
    <div className="fixed inset-0 opacity-30">
      {/* Animated background icons */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        {/* Top section icons */}
        <Brain className="absolute top-[5%] left-[15%] w-8 h-8 text-teal animate-float" />
        <Heart className="absolute top-[15%] right-[20%] w-6 h-6 text-orange animate-float" style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute top-[30%] left-[25%] w-7 h-7 text-yellow animate-float" style={{ animationDelay: '1.5s' }} />
        
        {/* Middle section icons */}
        <Brain className="absolute top-[45%] right-[15%] w-9 h-9 text-teal animate-float" style={{ animationDelay: '2s' }} />
        <Heart className="absolute top-[55%] left-[10%] w-7 h-7 text-orange animate-float" style={{ animationDelay: '2.5s' }} />
        <Sparkles className="absolute top-[65%] right-[25%] w-8 h-8 text-yellow animate-float" style={{ animationDelay: '3s' }} />
        
        {/* Bottom section icons */}
        <Brain className="absolute bottom-[20%] left-[20%] w-8 h-8 text-teal animate-float" style={{ animationDelay: '3.5s' }} />
        <Heart className="absolute bottom-[15%] right-[15%] w-6 h-6 text-orange animate-float" style={{ animationDelay: '4s' }} />
        <Sparkles className="absolute bottom-[5%] left-[30%] w-7 h-7 text-yellow animate-float" style={{ animationDelay: '4.5s' }} />
      </motion.div>

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.4">
              <animate
                attributeName="stopOpacity"
                values="0.4;0.6;0.4"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#F97316" stopOpacity="0.2">
              <animate
                attributeName="stopOpacity"
                values="0.2;0.4;0.2"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background pattern */}
        <rect
          width="100%"
          height="100%"
          fill="url(#techGradient)"
          opacity="0.1"
        />

        <g filter="url(#glow)">
          {/* Wavy gradient lines using map */}
          {[
            { y: 100, opacity: 0.6, duration: "10s" },
            { y: 300, opacity: 0.4, duration: "12s" },
            { y: 500, opacity: 0.3, duration: "15s" },
          ].map(({ y, opacity, duration }, index) => (
            <path
              key={index}
              d={`M0,${y} Q180,${y - 50} 360,${y} T720,${y} T1080,${y} T1440,${y}`}
              stroke="url(#techGradient)"
              strokeWidth="2"
              fill="none"
              opacity={opacity}
            >
              <animate
                attributeName="d"
                values={`
                  M0,${y} Q180,${y - 50} 360,${y} T720,${y} T1080,${y} T1440,${y};
                  M0,${y + 20} Q180,${y - 30} 360,${y + 20} T720,${y + 20} T1080,${y + 20} T1440,${y + 20};
                  M0,${y} Q180,${y - 50} 360,${y} T720,${y} T1080,${y} T1440,${y}
                `}
                dur={duration}
                repeatCount="indefinite"
              />
            </path>
          ))}

          {/* Floating circles with simplified animations */}
          <circle cx="20%" cy="30%" r="80" fill="url(#techGradient)">
            <animate
              attributeName="r"
              values="80;100;80"
              dur="8s"
              repeatCount="indefinite"
            />
            <animateMotion
              path="M 0,0 Q 30,-30 60,0"
              dur="15s"
              repeatCount="indefinite"
            />
          </circle>

          <circle cx="75%" cy="60%" r="120" fill="url(#techGradient)">
            <animate
              attributeName="r"
              values="120;140;120"
              dur="10s"
              repeatCount="indefinite"
            />
            <animateMotion
              path="M 0,0 Q -30,30 0,60"
              dur="20s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
};
