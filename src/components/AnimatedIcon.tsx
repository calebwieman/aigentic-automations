"use client";

import { motion } from "framer-motion";

interface AnimatedIconProps {
  icon: string;
  color?: "blue" | "orange";
  className?: string;
}

// Different animations for different icon types
const iconAnimations: Record<string, { animate: any; transition: any }> = {
  // Clock-like (24/7)
  clock: {
    animate: { 
      rotate: [0, 360],
    },
    transition: { 
      duration: 20, 
      repeat: Infinity, 
      ease: "linear" 
    },
  },
  // Lightning (Easy Setup, Fast Setup)
  bolt: {
    animate: { 
      scale: [1, 1.1, 1],
    },
    transition: { 
      duration: 2, 
      repeat: Infinity, 
      ease: "easeInOut" 
    },
  },
  // Shield (Security)
  shield: {
    animate: { 
      scale: [1, 1.05, 1],
    },
    transition: { 
      duration: 3, 
      repeat: Infinity, 
      ease: "easeInOut" 
    },
  },
  // Chart (Analytics)
  chart: {
    animate: { 
      pathLength: [0.8, 1, 0.8],
    },
    transition: { 
      duration: 3, 
      repeat: Infinity, 
      ease: "easeInOut" 
    },
  },
  // Grid/Integration
  grid: {
    animate: { 
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
    },
    transition: { 
      duration: 2.5, 
      repeat: Infinity, 
      ease: "easeInOut" 
    },
  },
  // Dollar (Affordable)
  dollar: {
    animate: { 
      scale: [1, 1.05, 1],
    },
    transition: { 
      duration: 2, 
      repeat: Infinity, 
      ease: "easeInOut",
      repeatDelay: 0.5,
    },
  },
  // People (Personal Support)
  people: {
    animate: { 
      scale: [1, 1.03, 1],
    },
    transition: { 
      duration: 2.5, 
      repeat: Infinity, 
      ease: "easeInOut" 
    },
  },
  // Check/Results
  check: {
    animate: { 
      scale: [1, 1.1, 1],
    },
    transition: { 
      duration: 2, 
      repeat: Infinity, 
      ease: "easeInOut" 
    },
  },
  // Default pulse
  default: {
    animate: { 
      scale: [1, 1.05, 1],
    },
    transition: { 
      duration: 2, 
      repeat: Infinity, 
      ease: "easeInOut" 
    },
  },
};

// Determine which animation based on icon path
function getAnimationType(icon: string): string {
  const iconLower = icon.toLowerCase();
  
  if (iconLower.includes("m12 8v4l3 3") || iconLower.includes("clock")) return "clock";
  if (iconLower.includes("m13 10v3") || iconLower.includes("bolt")) return "bolt";
  if (iconLower.includes("m9 12l2 2 4") || iconLower.includes("shield")) return "shield";
  if (iconLower.includes("m9 19v-6") || iconLower.includes("chart")) return "chart";
  if (iconLower.includes("m11 4a2 2") || iconLower.includes("grid")) return "grid";
  if (iconLower.includes("m12 8c-1.657") || iconLower.includes("dollar")) return "dollar";
  if (iconLower.includes("m17 20h5") || iconLower.includes("people")) return "people";
  if (iconLower.includes("m9 12l2 2 4-4") || iconLower.includes("check")) return "check";
  
  return "default";
}

export default function AnimatedIcon({ icon, color = "blue", className = "" }: AnimatedIconProps) {
  const animationType = getAnimationType(icon);
  const animation = iconAnimations[animationType] || iconAnimations.default;
  
  const colorClass = color === "orange" ? "text-orange-400" : "text-blue-400";

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      className={`w-6 h-6 ${colorClass} ${className}`}
      {...animation}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
    </motion.svg>
  );
}
