"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FlipCardProps {
  children: React.ReactNode;
  backContent?: React.ReactNode;
  className?: string;
}

export default function FlipCard({ children, backContent, className = "" }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`relative h-full ${className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 rounded-2xl p-6 backface-hidden"
          style={{ 
            background: "linear-gradient(160deg, #1a1a1a 0%, #0f0f0f 40%, #151515 100%)",
            backfaceVisibility: "hidden",
          }}
        >
          {children}
        </div>
        
        {/* Back */}
        {backContent && (
          <div 
            className="absolute inset-0 rounded-2xl p-6 backface-hidden flex items-center justify-center"
            style={{ 
              background: "linear-gradient(160deg, #1a1a1a 0%, #0f0f0f 40%, #151515 100%)",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {backContent}
          </div>
        )}
      </motion.div>
    </div>
  );
}
