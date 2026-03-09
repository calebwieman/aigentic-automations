"use client";

import { useEffect, useState, useMemo } from "react";
import { usePathname } from "next/navigation";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export default function StarsAndComets() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [showStars, setShowStars] = useState(false);
  
  // Generate stars once on mount
  const stars = useMemo<Star[]>(() => {
    const newStars: Star[] = [];
    for (let i = 0; i < 80; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 3,
      });
    }
    return newStars;
  }, []);

  useEffect(() => {
    setMounted(true);
    // Check pathname after mount
    if (pathname === '/integrate' || pathname.startsWith('/integrate/')) {
      setShowStars(true);
    }
  }, [pathname]);

  // On server/initial render, show nothing to avoid hydration mismatch
  // After mount, show if on integrate page
  if (!mounted || !showStars) return null;

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9999 }}>
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            boxShadow: "0 0 4px 1px rgba(255,255,255,0.8)",
          }}
        />
      ))}

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
