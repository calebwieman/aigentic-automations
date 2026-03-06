"use client";

import { useEffect, useRef } from "react";

interface BackgroundCursor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

export default function BackgroundCursors() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorsRef = useRef<BackgroundCursor[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Create 3 background cursors: 2 blue, 1 orange
    const colors = ["#3b82f6", "#3b82f6", "#f59e0b"];
    
    const initCursors = () => {
      const cursors: BackgroundCursor[] = [];
      for (let i = 0; i < 3; i++) {
        cursors.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: 30 + Math.random() * 20,
          color: colors[i],
        });
      }
      return cursors;
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawCursor = (cursor: BackgroundCursor, opacity: number) => {
      // Outer ring
      ctx.beginPath();
      ctx.arc(cursor.x, cursor.y, cursor.size / 2, 0, Math.PI * 2);
      ctx.strokeStyle = cursor.color;
      ctx.globalAlpha = opacity * 0.3;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Inner glow
      ctx.beginPath();
      ctx.arc(cursor.x, cursor.y, cursor.size / 4, 0, Math.PI * 2);
      ctx.fillStyle = cursor.color;
      ctx.globalAlpha = opacity * 0.15;
      ctx.fill();
      
      ctx.globalAlpha = 1;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      cursorsRef.current.forEach((cursor) => {
        // Move cursor
        cursor.x += cursor.vx;
        cursor.y += cursor.vy;
        
        // Bounce off edges
        if (cursor.x < 0 || cursor.x > canvas.width) cursor.vx *= -1;
        if (cursor.y < 0 || cursor.y > canvas.height) cursor.vy *= -1;
        
        // Draw cursor (faded)
        drawCursor(cursor, 0.6);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    cursorsRef.current = initCursors();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
