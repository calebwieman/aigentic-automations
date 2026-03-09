"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    // Create cursor elements
    const cursor = document.createElement("div");
    const dot = document.createElement("div");
    const trails: HTMLDivElement[] = [];
    
    // Create trail elements
    for (let i = 0; i < 8; i++) {
      const trail = document.createElement("div");
      const size = 24 - i * 2;
      trail.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        pointer-events: none;
        z-index: 99998;
        left: 0;
        top: 0;
        transform: translate(-100px, -100px);
        background: radial-gradient(circle, rgba(59, 130, 246, ${0.4 - i * 0.04}) 0%, transparent 70%);
        transition: opacity 0.15s ease-out;
      `;
      trails.push(trail);
      document.body.appendChild(trail);
    }
    
    // Style the cursor ring
    cursor.style.cssText = `
      position: fixed;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 2px solid #3b82f6;
      box-shadow: 0 0 25px rgba(59, 130, 246, 0.6), 0 0 50px rgba(59, 130, 246, 0.3);
      pointer-events: none;
      z-index: 99999;
      transition: transform 0.1s ease-out, border-color 0.2s ease, box-shadow 0.2s ease;
      left: 0;
      top: 0;
      transform: translate(-100px, -100px);
      background: transparent;
    `;
    
    // Style the dot
    dot.style.cssText = `
      position: fixed;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
      box-shadow: 0 0 15px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 0.5);
      pointer-events: none;
      z-index: 99999;
      left: 0;
      top: 0;
      transform: translate(-100px, -100px);
    `;
    
    document.body.appendChild(cursor);
    document.body.appendChild(dot);
    
    // Hide default cursor everywhere
    const style = document.createElement("style");
    style.textContent = `
      * { cursor: none !important; }
      button { cursor: none !important; }
      a { cursor: none !important; }
      input { cursor: none !important; }
      textarea { cursor: none !important; }
      select { cursor: none !important; }
    `;
    document.head.appendChild(style);

    let currentX = -100;
    let currentY = -100;
    let isHovering = false;

    const updateCursor = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      currentX = x;
      currentY = y;
      
      cursor.style.transform = `translate(${x - 16}px, ${y - 16}px)`;
      dot.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      
      // Update trails with delay
      trails.forEach((trail, i) => {
        const delay = i * 0.03;
        setTimeout(() => {
          trail.style.transform = `translate(${x - (24 - i * 2) / 2}px, ${y - (24 - i * 2) / 2}px)`;
        }, delay * 1000);
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button";
      
      isHovering = !!isInteractive;
      
      if (isHovering) {
        cursor.style.borderColor = "#f59e0b";
        cursor.style.boxShadow = "0 0 30px rgba(245, 158, 11, 0.7), 0 0 60px rgba(245, 158, 11, 0.4)";
        cursor.style.transform = `translate(${currentX - 16}px, ${currentY - 16}px) scale(1.4)`;
        
        // Update trails to orange
        trails.forEach((trail, i) => {
          trail.style.background = `radial-gradient(circle, rgba(245, 158, 11, ${0.4 - i * 0.04}) 0%, transparent 70%)`;
        });
      } else {
        cursor.style.borderColor = "#3b82f6";
        cursor.style.boxShadow = "0 0 25px rgba(59, 130, 246, 0.6), 0 0 50px rgba(59, 130, 246, 0.3)";
        cursor.style.transform = `translate(${currentX - 16}px, ${currentY - 16}px) scale(1)`;
        
        // Update trails back to blue
        trails.forEach((trail, i) => {
          trail.style.background = `radial-gradient(circle, rgba(59, 130, 246, ${0.4 - i * 0.04}) 0%, transparent 70%)`;
        });
      }
    };

    document.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      trails.forEach(t => document.body.removeChild(t));
      document.body.removeChild(cursor);
      document.body.removeChild(dot);
      document.head.removeChild(style);
      document.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return null;
}
