"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltIntensity?: number;
  scaleOnHover?: number;
}

export default function TiltCard({
  children,
  className = "",
  tiltIntensity = 10,
  scaleOnHover = 1.02,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${tiltIntensity}deg`, `-${tiltIntensity}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${tiltIntensity}deg`, `${tiltIntensity}deg`]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    setGlowPos({ x: mouseX, y: mouseY });
    
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setGlowPos({ x: 0, y: 0 });
  };

  // All cards use blue glow
  const getColor = () => {
    return 220; // Blue
  };

  const hue = getColor();

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        background: "linear-gradient(160deg, #1a1a1a 0%, #0f0f0f 40%, #151515 100%)",
      }}
      whileHover={{ scale: scaleOnHover }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`relative group rounded-2xl ${className}`}
    >
      {/* Inner card highlight - lighter around cursor */}
      {glowPos.x > 0 && (
        <div 
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glowPos.x}px ${glowPos.y}px, rgba(255,255,255,0.15) 0%, transparent 60%)`,
          }}
        />
      )}

      {/* Glow layers - only render when hovering */}
      {glowPos.x > 0 && (
        <>
          {/* Outer hazy glow */}
          <div 
            className="absolute rounded-2xl pointer-events-none transition-all duration-150"
            style={{
              inset: -16,
              background: `radial-gradient(circle at ${glowPos.x}px ${glowPos.y}px, hsl(${hue}, 100%, 50%, 0.4) 0%, hsl(${hue}, 100%, 40%, 0.15) 40%, transparent 70%)`,
              filter: 'blur(20px)',
            }}
          />
          {/* Inner brighter glow */}
          <div 
            className="absolute rounded-2xl pointer-events-none transition-all duration-150"
            style={{
              inset: -8,
              background: `radial-gradient(circle at ${glowPos.x}px ${glowPos.y}px, hsl(${hue}, 100%, 55%, 0.5) 0%, hsl(${hue}, 100%, 45%, 0.2) 35%, transparent 60%)`,
              filter: 'blur(12px)',
            }}
          />
          {/* Bright core */}
          <div 
            className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-150"
            style={{
              background: `radial-gradient(circle at ${glowPos.x}px ${glowPos.y}px, hsl(${hue}, 80%, 60%, 0.15) 0%, transparent 50%)`,
              filter: 'blur(6px)',
            }}
          />
        </>
      )}

      <div className="relative">
        {children}
      </div>
    </motion.div>
  );
}
