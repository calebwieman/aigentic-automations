"use client";

import { useEffect, useState, useRef } from "react";

interface DesignElement {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  type: "box" | "arrow" | "text" | "grid";
}

const designElements: DesignElement[] = [
  // Grid lines
  { id: "grid1", x: 10, y: 10, width: 80, height: 0.3, type: "grid" },
  { id: "grid2", x: 10, y: 30, width: 80, height: 0.3, type: "grid" },
  { id: "grid3", x: 10, y: 50, width: 80, height: 0.3, type: "grid" },
  { id: "grid4", x: 10, y: 70, width: 80, height: 0.3, type: "grid" },
  { id: "grid5", x: 10, y: 90, width: 80, height: 0.3, type: "grid" },
  // Vertical grid
  { id: "gridv1", x: 10, y: 10, width: 0.3, height: 80, type: "grid" },
  { id: "gridv2", x: 30, y: 10, width: 0.3, height: 80, type: "grid" },
  { id: "gridv3", x: 50, y: 10, width: 0.3, height: 80, type: "grid" },
  { id: "gridv4", x: 70, y: 10, width: 0.3, height: 80, type: "grid" },
  { id: "gridv5", x: 90, y: 10, width: 0.3, height: 80, type: "grid" },
  // Design boxes appearing
  { id: "box1", x: 15, y: 25, width: 20, height: 15, type: "box" },
  { id: "box2", x: 40, y: 25, width: 20, height: 15, type: "box" },
  { id: "box3", x: 65, y: 25, width: 20, height: 15, type: "box" },
  // Arrows
  { id: "arrow1", x: 35, y: 32, width: 5, height: 1, type: "arrow" },
  { id: "arrow2", x: 60, y: 32, width: 5, height: 1, type: "arrow" },
  // Text labels
  { id: "text1", x: 25, y: 45, width: 0, height: 0, type: "text" },
  { id: "text2", x: 50, y: 45, width: 0, height: 0, type: "text" },
  { id: "text3", x: 75, y: 45, width: 0, height: 0, type: "text" },
  // More boxes below
  { id: "box4", x: 60, y: 65, width: 50, height: 20, type: "box" },
];

export default function DesignAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const [drawingElements, setDrawingElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          
          // Sequence: grid first, then boxes, then arrows, then text
          let delay = 0;
          
          // Grid lines draw in
          const gridElements = designElements.filter(e => e.type === "grid");
          gridElements.forEach((el, i) => {
            delay += 80;
            setTimeout(() => {
              setDrawingElements(prev => new Set([...prev, el.id]));
              setTimeout(() => setVisibleElements(prev => new Set([...prev, el.id])), 300);
            }, delay);
          });
          
          // Boxes appear one by one
          const boxElements = designElements.filter(e => e.type === "box");
          boxElements.forEach((el) => {
            delay += 200;
            setTimeout(() => {
              setVisibleElements(prev => new Set([...prev, el.id]));
            }, delay);
          });
          
          // Arrows draw in
          const arrowElements = designElements.filter(e => e.type === "arrow");
          arrowElements.forEach((el) => {
            delay += 150;
            setTimeout(() => {
              setDrawingElements(prev => new Set([...prev, el.id]));
              setTimeout(() => setVisibleElements(prev => new Set([...prev, el.id])), 250);
            }, delay);
          });
          
          // Text fades in
          const textElements = designElements.filter(e => e.type === "text");
          textElements.forEach((el) => {
            delay += 150;
            setTimeout(() => {
              setVisibleElements(prev => new Set([...prev, el.id]));
            }, delay);
          });
          
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[400px]">
      <svg viewBox="0 0 100 100" className="w-full h-full" style={{ overflow: "visible" }}>
        <defs>
          <filter id="glowDesign" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Dashed pattern for drawing effect */}
          <pattern id="drawPattern" x="0" y="0" width="4" height="2" patternUnits="userSpaceOnUse">
            <line x1="0" y1="1" x2="2" y2="1" stroke="#3b82f6" strokeWidth="0.5" />
          </pattern>
        </defs>
        
        {/* Design elements */}
        {designElements.map((el) => {
          const isVisible = visibleElements.has(el.id);
          const isDrawing = drawingElements.has(el.id);
          
          if (el.type === "grid") {
            return (
              <line
                key={el.id}
                x1={el.x}
                y1={el.y}
                x2={el.x + el.width}
                y2={el.y + el.height}
                stroke="#1e3a5f"
                strokeWidth="0.2"
                strokeDasharray={isDrawing ? "100" : "0"}
                style={{
                  opacity: isVisible ? 0.6 : 0,
                  transition: isDrawing ? "stroke-dashoffset 0.3s ease-out" : "opacity 0.3s ease-out",
                  strokeDashoffset: isDrawing ? 0 : 100,
                }}
              />
            );
          }
          
          if (el.type === "box") {
            return (
              <g key={el.id} style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.4s ease-out" }}>
                <rect
                  x={el.x} y={el.y}
                  width={el.width} height={el.height}
                  rx="1"
                  fill="transparent"
                  stroke="#3b82f6"
                  strokeWidth="0.4"
                  strokeDasharray="2,1"
                />
                {/* Corner markers */}
                <path d={`M ${el.x+2} ${el.y} L ${el.x} ${el.y} L ${el.x} ${el.y+2}`} fill="none" stroke="#60a5fa" strokeWidth="0.3" />
                <path d={`M ${el.x+el.width-2} ${el.y} L ${el.x+el.width} ${el.y} L ${el.x+el.width} ${el.y+2}`} fill="none" stroke="#60a5fa" strokeWidth="0.3" />
                <path d={`M ${el.x+2} ${el.y+el.height} L ${el.x} ${el.y+el.height} L ${el.x} ${el.y+el.height-2}`} fill="none" stroke="#60a5fa" strokeWidth="0.3" />
                <path d={`M ${el.x+el.width-2} ${el.y+el.height} L ${el.x+el.width} ${el.y+el.height} L ${el.x+el.width} ${el.y+el.height-2}`} fill="none" stroke="#60a5fa" strokeWidth="0.3" />
              </g>
            );
          }
          
          if (el.type === "arrow") {
            return (
              <g key={el.id} style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.3s ease-out" }}>
                <line
                  x1={el.x} y1={el.y}
                  x2={el.x + el.width} y2={el.y + el.height}
                  stroke="#f97316"
                  strokeWidth="0.4"
                  strokeDasharray={isDrawing ? "100" : "0"}
                  style={{
                    transition: isDrawing ? "stroke-dashoffset 0.25s ease-out" : "opacity 0.3s ease-out",
                    strokeDashoffset: isDrawing ? 0 : 100,
                  }}
                />
                {/* Arrowhead */}
                <polygon
                  points={`${el.x+el.width},${el.y+el.height} ${el.x+el.width-1.5},${el.y+el.height-1} ${el.x+el.width-1.5},${el.y+el.height+1}`}
                  fill="#f97316"
                />
              </g>
            );
          }
          
          if (el.type === "text") {
            const labels = ["Step 1", "Step 2", "Step 3"];
            const labelIndex = el.id === "text1" ? 0 : el.id === "text2" ? 1 : 2;
            return (
              <text
                key={el.id}
                x={el.x}
                y={el.y}
                fill="#64748b"
                fontSize="3"
                fontFamily="monospace"
                style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.3s ease-out" }}
              >
                {labels[labelIndex]}
              </text>
            );
          }
          
          return null;
        })}
      </svg>
    </div>
  );
}
