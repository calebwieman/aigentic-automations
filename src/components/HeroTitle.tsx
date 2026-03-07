"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface GearWithDustProps {
  delay?: number;
}

function GearWithDust({ delay = 0 }: GearWithDustProps) {
  const [bounceOffset, setBounceOffset] = useState(0);

  // Random bounce effect
  useEffect(() => {
    const triggerBounce = () => {
      setBounceOffset(-3);
      setTimeout(() => setBounceOffset(3), 150);
      setTimeout(() => setBounceOffset(0), 300);
    };

    const scheduleNextBounce = () => {
      const randomDelay = 2500 + Math.random() * 1000;
      setTimeout(() => {
        triggerBounce();
        scheduleNextBounce();
      }, randomDelay);
    };

    const startTimeout = setTimeout(scheduleNextBounce, delay * 1000);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  // Generate more dust particles (10 per gear)
  const dustParticles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    x: Math.random() * 24 - 12,
    y: Math.random() * 12,
    size: 1.5 + Math.random() * 3,
    delay: Math.random() * 3,
    duration: 2.5 + Math.random() * 2.5,
  }));

  return (
    <motion.span
      className="inline-block relative"
      animate={{ y: bounceOffset }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {/* Gear SVG */}
      <motion.svg
        viewBox="0 0 24 24"
        className="w-[0.7em] h-[0.7em] inline-block"
        style={{ color: "white", display: "inline-block" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, delay: delay + 1, ease: "linear" }}
      >
        <path
          fill="currentColor"
          d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z"
        />
      </motion.svg>

      {/* Dust particles */}
      {dustParticles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            width: particle.size,
            height: particle.size,
            opacity: 0.4,
            left: `calc(50% + ${particle.x}px)`,
            top: particle.y,
          }}
          animate={{
            y: [0, -18 - Math.random() * 12],
            opacity: [0, 0.4, 0],
            scale: [0.3, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: delay + particle.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </motion.span>
  );
}

export default function HeroTitle() {
  return (
    <span className="gradient-text">
      Aut
      <GearWithDust delay={0} />
      m
      <GearWithDust delay={1} />
      ti
      ns
    </span>
  );
}
