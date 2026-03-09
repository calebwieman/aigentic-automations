"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface GradientBorderCardProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export default function GradientBorderCard({ 
  children, 
  color = "blue",
  className = "" 
}: GradientBorderCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  useEffect(() => {
    // Disable on touch devices
    setIsTouchDevice(
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches
    );
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice) return;
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const borderGradient = color === "orange" 
    ? "linear-gradient(135deg, #f59e0b, #ef4444)"
    : "linear-gradient(135deg, #3b82f6, #8b5cf6)";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...(isTouchDevice ? { rotateX: 0, rotateY: 0 } : { rotateX, rotateY }),
        transformStyle: "preserve-3d",
      }}
      whileHover={isTouchDevice ? {} : { scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`relative group rounded-2xl ${className}`}
    >
      {/* Gradient border on hover */}
      <div 
        className={`absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-300 ${isTouchDevice ? '' : 'group-hover:opacity-100'}`}
        style={{
          background: borderGradient,
          zIndex: -1,
        }}
      />
      
      {/* Inner card with glow */}
      <div 
        className="rounded-2xl p-6 relative overflow-hidden"
        style={{ 
          background: "linear-gradient(160deg, #1a1a1a 0%, #0f0f0f 40%, #151515 100%)",
        }}
      >
        {/* Subtle inner glow on hover */}
        <div 
          className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${isTouchDevice ? 'opacity-0' : 'group-hover:opacity-100'}`}
          style={{
            background: `radial-gradient(circle at center, ${color === 'orange' ? 'rgba(249,115,22,0.1)' : 'rgba(59,130,246,0.1)'} 0%, transparent 70%)`,
          }}
        />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
