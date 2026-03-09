"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
}

interface MovingPoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
}

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Check if mobile after mount
    setIsMobile(
      window.matchMedia('(pointer: coarse)').matches || 
      window.innerWidth < 1024
    );
  }, []);

  useEffect(() => {
    // Don't render particles on mobile
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size first
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Store initial dimensions to prevent resize issues on mobile scroll
    let initialWidth = window.innerWidth;
    let initialHeight = window.innerHeight;

    const colors = ["#3b82f6", "#f59e0b", "#60a5fa", "#fb923c"];
    let particles: Particle[] = [];
    let mouseX = -1000;
    let mouseY = -1000;
    let isMouseConnected = false;
    
    // Reduce moving points on mobile
    const movingPointSpeed = isMobile ? 0.15 : 0.3;
    const movingPoints: MovingPoint[] = isMobile ? [
      { x: 0, y: 0, vx: movingPointSpeed, vy: movingPointSpeed * 0.7, color: "#3b82f6" },
    ] : [
      { x: 0, y: 0, vx: 0.3, vy: 0.2, color: "#3b82f6" },
      { x: 0, y: 0, vx: -0.2, vy: 0.3, color: "#3b82f6" },
      { x: 0, y: 0, vx: 0.25, vy: -0.25, color: "#f59e0b" },
    ];
    
    let animationId: number;

    const resize = () => {
      // On mobile, don't do anything - keep canvas and particles as is
      return;
    };

    const createParticles = () => {
      // More particles on mobile now that teleport is fixed, but fewer colors
      const baseCount = isMobile ? 18000 : 12000;
      const count = Math.floor((window.innerWidth * window.innerHeight) / baseCount);
      // Slower velocity on mobile
      const maxVel = isMobile ? 0.15 : 0.3;
      
      // Colored particles only on mobile
      const mobileColors = isMobile 
        ? ["#3b82f6", "#f59e0b"] // Blue and orange only
        : colors;
      
      particles = [];
      
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * maxVel,
          vy: (Math.random() - 0.5) * maxVel,
          size: Math.random() * 2 + 1,
          color: mobileColors[Math.floor(Math.random() * mobileColors.length)],
          opacity: Math.random() * 0.3 + 0.3,
        });
      }
    };

    const drawParticle = (p: Particle) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.fill();
      ctx.globalAlpha = 1;
    };

    const drawMovingPoint = (point: MovingPoint) => {
      // Less prominent on mobile
      const alpha = isMobile ? 0.25 : 0.48;
      const innerAlpha = isMobile ? 0.4 : 0.72;
      
      // Outer ring
      ctx.beginPath();
      ctx.arc(point.x, point.y, 16, 0, Math.PI * 2);
      ctx.strokeStyle = point.color;
      ctx.globalAlpha = alpha;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Inner dot
      ctx.beginPath();
      ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = point.color;
      ctx.globalAlpha = innerAlpha;
      ctx.fill();
      
      ctx.globalAlpha = 1;
    };

    const drawConnections = () => {
      // Connect to mouse if active
      if (isMouseConnected) {
        particles.forEach((p) => {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = "#60a5fa";
            ctx.globalAlpha = Math.max(0, (150 - dist) / 150) * 0.4;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        });
      }
      
      // Draw moving points first
      movingPoints.forEach(drawMovingPoint);
      
      // Connect to moving points
      movingPoints.forEach((point) => {
        particles.forEach((p) => {
          const dx = point.x - p.x;
          const dy = point.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(point.x, point.y);
            ctx.strokeStyle = point.color;
            ctx.globalAlpha = Math.max(0, (120 - dist) / 120) * 0.25;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        });
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        drawParticle(p);
      });

      // Update moving points
      movingPoints.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;
        
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
      });

      drawConnections();
      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    // On mobile, don't listen for resize at all
    if (!isMobile) {
      window.addEventListener("resize", () => {
        resize();
        createParticles();
      });
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseConnected = true;
    };

    const onMouseLeave = () => {
      isMouseConnected = false;
      mouseX = -1000;
      mouseY = -1000;
    };

    // Only add mouse listeners on desktop
    if (!isMobile) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      if (!isMobile) {
        window.removeEventListener("resize", () => {});
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseleave", onMouseLeave);
      }
      cancelAnimationFrame(animationId);
    };
  }, [isMobile]);

  // Don't render particles on mobile
  if (isMobile) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
