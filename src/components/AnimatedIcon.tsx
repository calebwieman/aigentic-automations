"use client";

import { motion } from "framer-motion";

interface AnimatedIconProps {
  icon: string;
  color?: string;
  className?: string;
}

export default function AnimatedIcon({ icon, color = "blue", className = "" }: AnimatedIconProps) {
  const colorClass = color === "orange" ? "text-orange-400" : "text-blue-400";

  // Parse the icon to determine animation type
  const iconKey = icon.substring(0, 30);
  
  // Clock - animate the clock hands (the "m" path moves)
  if (icon.includes("M12 8v4l3 3")) {
    return (
      <div className={`relative ${className}`}>
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
        {/* Animated clock hand overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: [0, 30, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className={`w-0.5 h-2 ${colorClass} opacity-60 rounded-full`} style={{ transformOrigin: 'bottom center' }} />
        </motion.div>
      </div>
    );
  }
  
  // Lightning bolt - subtle pulse
  if (icon.includes("M13 10V3")) {
    return (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        className={`w-6 h-6 ${colorClass} ${className}`}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
      </motion.svg>
    );
  }
  
  // Shield - subtle scale
  if (icon.includes("M9 12l2 2 4-4")) {
    return (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        className={`w-6 h-6 ${colorClass} ${className}`}
        animate={{ 
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
      </motion.svg>
    );
  }
  
  // Default - subtle pulse
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      className={`w-6 h-6 ${colorClass} ${className}`}
      animate={{ 
        scale: [1, 1.05, 1],
        opacity: [0.9, 1, 0.9]
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
    </motion.svg>
  );
}
