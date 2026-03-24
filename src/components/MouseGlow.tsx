"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mounted]);

  // Only show on integrate page
  if (!pathname.startsWith('/integrate')) {
    return null;
  }

  if (!mounted) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{
        background: `radial-gradient(
          160px circle at ${position.x}px ${position.y}px,
          rgba(249, 115, 22, 0.08),
          rgba(59, 130, 246, 0.05),
          transparent 60%
        )`,
      }}
    />
  );
}
