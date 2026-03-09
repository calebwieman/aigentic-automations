"use client";

import { useEffect, useState, useRef } from "react";

const buildItems = [
  { id: "code", label: "Code", x: 20, y: 50 },
  { id: "build", label: "Build", x: 45, y: 50 },
  { id: "test", label: "Test", x: 70, y: 50 },
];

const connections = [
  ["code", "build"],
  ["build", "test"],
];

export default function BuildAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visibleNodes, setVisibleNodes] = useState<Set<string>>(new Set());
  const [visibleConnections, setVisibleConnections] = useState<Set<string>>(new Set());
  const [drawingConnections, setDrawingConnections] = useState<Set<string>>(new Set());
  const [pulseNode, setPulseNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          
          // Show first node
          setTimeout(() => {
            setVisibleNodes(prev => new Set([...prev, "code"]));
            setPulseNode("code");
            setTimeout(() => setPulseNode(null), 400);
          }, 200);
          
          // Sequential: node → connection → node
          let delay = 500;
          
          for (let i = 0; i < connections.length; i++) {
            const [from, to] = connections[i];
            
            // Start drawing connection
            delay += 250;
            setTimeout(() => {
              setDrawingConnections(prev => new Set([...prev, `${from}-${to}`]));
            }, delay);
            
            // Complete connection, show next node
            delay += 200;
            setTimeout(() => {
              setVisibleConnections(prev => new Set([...prev, `${from}-${to}`]));
              setDrawingConnections(prev => {
                const next = new Set(prev);
                next.delete(`${from}-${to}`);
                return next;
              });
              setVisibleNodes(prev => new Set([...prev, to]));
              setPulseNode(to);
              setTimeout(() => setPulseNode(null), 400);
            }, delay);
          }
          
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const getNodePosition = (id: string) => {
    const node = buildItems.find(n => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[400px]">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <filter id="glowBuild" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="cblur"/>
            <feMerge><feMergeNode in="cblur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          
          <linearGradient id="buildLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3"/>
          </linearGradient>
        </defs>

        {/* Connection lines */}
        <g>
          {connections.map(([from, to]) => {
            const fromPos = getNodePosition(from);
            const toPos = getNodePosition(to);
            const isVisible = visibleConnections.has(`${from}-${to}`);
            const isDrawing = drawingConnections.has(`${from}-${to}`);
            
            return (
              <line
                key={`${from}-${to}`}
                x1={fromPos.x + 8}
                y1={fromPos.y}
                x2={toPos.x - 8}
                y2={toPos.y}
                stroke="url(#buildLine)"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeDasharray={isDrawing ? "100" : "0"}
                style={{
                  opacity: isVisible || isDrawing ? 1 : 0,
                  transition: isDrawing ? "stroke-dashoffset 0.2s linear" : "opacity 0.3s ease-out",
                  strokeDashoffset: isDrawing ? 0 : 100,
                }}
              />
            );
          })}
        </g>

        {/* Build nodes */}
        <g>
          {buildItems.map((node) => {
            const isVisible = visibleNodes.has(node.id);
            const isPulsing = pulseNode === node.id;
            const isHovered = hoveredNode === node.id;
            const glowActive = isPulsing || isHovered;
            
            return (
              <g 
                key={node.id}
                style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.3s ease-out", cursor: "pointer" }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Outer ring */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="8"
                  fill="#0f172a"
                  stroke={glowActive ? "#f97316" : "#3b82f6"}
                  strokeWidth="0.8"
                  style={{ filter: glowActive ? "url(#glowBuild)" : "none", transition: "all 0.2s ease-out" }}
                />
                
                {/* Inner circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="5"
                  fill={glowActive ? "#f9731633" : "#3b82f633"}
                  stroke={glowActive ? "#f97316" : "#3b82f6"}
                  strokeWidth="0.5"
                />
                
                {/* Spinning gear */}
                <g transform={`translate(${node.x}, ${node.y})`}>
                  <circle r="2.5" fill="none" stroke={glowActive ? "#f97316" : "#60a5fa"} strokeWidth="0.4">
                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  {[0,45,90,135,180,225,270,315].map(angle => (
                    <line key={angle} x1="0" y1="-2.5" x2="0" y2="-3.5" stroke={glowActive ? "#f97316" : "#60a5fa"} strokeWidth="0.4" transform={`rotate(${angle})`}>
                      <animateTransform attributeName="transform" type="rotate" from={`0`} to={`${angle + 360}`} dur="3s" repeatCount="indefinite"/>
                    </line>
                  ))}
                  <circle r="1" fill={glowActive ? "#f97316" : "#60a5fa"}/>
                </g>
                
                {/* Label */}
                <text
                  x={node.x}
                  y={node.y + 16}
                  textAnchor="middle"
                  fill="#94a3b8"
                  fontSize="3.5"
                  fontFamily="system-ui"
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
