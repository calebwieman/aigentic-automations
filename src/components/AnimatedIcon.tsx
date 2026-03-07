"use client";

import { motion } from "framer-motion";

interface AnimatedIconProps {
  icon: string;
  color?: string;
  className?: string;
}

export default function AnimatedIcon({ icon, color = "blue", className = "" }: AnimatedIconProps) {
  const colorClass = color === "orange" ? "text-orange-400" : "text-blue-400";

  // Clock - animate the clock hands (smaller scale first, then pulse)
  if (icon.includes("M12 8v4l3 3") || icon.includes("clock")) {
    return (
      <motion.div
        className={className}
        animate={{ 
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={1.5}
          className={`w-6 h-6 ${colorClass}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </motion.div>
    );
  }
  
  // Lightning bolt - scale down then pulse up
  if (icon.includes("M13 10V3") || icon.includes("bolt")) {
    return (
      <motion.div
        className={className}
        animate={{ 
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          className={`w-6 h-6 ${colorClass}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </motion.div>
    );
  }
  
  // Shield - scale down then pulse
  if (icon.includes("M9 12l2 2 4-4") || icon.includes("shield")) {
    return (
      <motion.div
        className={className}
        animate={{ 
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          className={`w-6 h-6 ${colorClass}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </motion.div>
    );
  }
  
  // Default - scale down then pulse
  return (
    <motion.div
      className={className}
      animate={{ 
        scale: [1, 0.85, 1.1, 1],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        className={`w-6 h-6 ${colorClass}`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
      </svg>
    </motion.div>
  );
}
