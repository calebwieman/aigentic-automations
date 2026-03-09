"use client";

import { useEffect, useState, useRef } from "react";

interface ChatBubble {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  type: "question" | "answer" | "process";
}

const chatBubbles: ChatBubble[] = [
  { id: "q1", x: 20, y: 12, width: 25, height: 10, type: "question" },
  { id: "a1", x: 55, y: 18, width: 28, height: 12, type: "answer" },
  { id: "q2", x: 15, y: 40, width: 30, height: 10, type: "question" },
  { id: "a2", x: 52, y: 45, width: 32, height: 14, type: "answer" },
  { id: "process", x: 25, y: 64, width: 50, height: 32, type: "answer" },
];

const connections = [
  ["q1", "a1"],
  ["a1", "q2"],
  ["q2", "a2"],
  ["a2", "process"],
];

export default function ChatFlowAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visibleBubbles, setVisibleBubbles] = useState<Set<string>>(new Set());
  const [visibleConnections, setVisibleConnections] = useState<Set<string>>(new Set());
  const [drawingConnections, setDrawingConnections] = useState<Set<string>>(new Set());
  const [pulseBubble, setPulseBubble] = useState<string | null>(null);
  const [hoveredBubble, setHoveredBubble] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          
          // Start with first bubble - faster timing
          setTimeout(() => {
            setVisibleBubbles(prev => new Set([...prev, "q1"]));
            setPulseBubble("q1");
            setTimeout(() => setPulseBubble(null), 240);
          }, 120);
          
          // Chain: bubble → connection → bubble → connection → ... (1.25x faster)
          let delay = 320;
          
          for (let i = 0; i < connections.length; i++) {
            const [from, to] = connections[i];
            
            // Show connection after bubble appears
            delay += 240;
            setTimeout(() => {
              setDrawingConnections(prev => new Set([...prev, `${from}-${to}`]));
            }, delay);
            
            // Complete connection, show next bubble
            delay += 160;
            setTimeout(() => {
              setVisibleConnections(prev => new Set([...prev, `${from}-${to}`]));
              setDrawingConnections(prev => {
                const next = new Set(prev);
                next.delete(`${from}-${to}`);
                return next;
              });
              setVisibleBubbles(prev => new Set([...prev, to]));
              setPulseBubble(to);
              setTimeout(() => setPulseBubble(null), 240);
            }, delay);
          }
          
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

  const getBubblePosition = (id: string) => {
    const bubble = chatBubbles.find(b => b.id === id);
    return bubble ? { x: bubble.x + bubble.width / 2, y: bubble.y + bubble.height / 2, width: bubble.width, height: bubble.height } : { x: 0, y: 0, width: 0, height: 0 };
  };

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[400px]">
      <svg viewBox="0 0 100 100" className="w-full h-full" style={{ overflow: "visible" }}>
        <defs>
          <filter id="glowChat" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <linearGradient id="chatLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.3" />
          </linearGradient>
          
          <linearGradient id="processGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>
        
        {/* Connection lines */}
        <g className="connections">
          {connections.map(([from, to]) => {
            const fromPos = getBubblePosition(from);
            const toPos = getBubblePosition(to);
            const isVisible = visibleConnections.has(`${from}-${to}`) || visibleConnections.has(`${to}-${from}`);
            const isDrawing = drawingConnections.has(`${from}-${to}`) || drawingConnections.has(`${to}-${from}`);
            
            // For a1 (2nd item) and a2 (4th item), connect to left side instead of top
            const toBubble = chatBubbles.find(b => b.id === to);
            const connectToLeft = toBubble && (toBubble.id === "a1" || toBubble.id === "a2");
            
            const x1 = fromPos.x;
            const y1 = fromPos.y + fromPos.height/2;
            const x2 = connectToLeft ? toPos.x - toPos.width/2 : toPos.x;
            const y2 = connectToLeft ? toPos.y : toPos.y - toPos.height/2;
            
            return (
              <line
                key={`${from}-${to}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#chatLineGradient)"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeDasharray={isDrawing ? "100" : "0"}
                style={{
                  opacity: isVisible || isDrawing ? 1 : 0,
                  transition: isDrawing ? "stroke-dashoffset 0.4s linear" : "opacity 0.3s ease-out",
                  strokeDashoffset: isDrawing ? 0 : 100,
                }}
              />
            );
          })}
        </g>
        
        {/* Bubbles */}
        <g className="bubbles">
          {chatBubbles.map((bubble) => {
            const isVisible = visibleBubbles.has(bubble.id);
            const isPulsing = pulseBubble === bubble.id;
            
            return (
              <g 
                key={bubble.id} 
                style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.4s ease-out", cursor: "pointer" }}
                onMouseEnter={() => setHoveredBubble(bubble.id)}
                onMouseLeave={() => setHoveredBubble(null)}
              >
                {bubble.id === "process" ? (
                  <g>
                    <rect
                      x={bubble.x} y={bubble.y}
                      width={bubble.width} height={bubble.height}
                      rx="2" fill="#0f172a"
                      stroke={pulseBubble === bubble.id || hoveredBubble === bubble.id ? "#f97316" : "#3b82f6"}
                      strokeWidth="0.3"
                      style={{ filter: pulseBubble === bubble.id || hoveredBubble === bubble.id ? "url(#glowChat)" : "none", transition: "all 0.3s ease-out" }}
                    />
                    <g fill="#3b82f6" opacity="0.8">
                      <rect x={bubble.x + 2} y={bubble.y + 2} width="24" height="1.5" rx="0.5" />
                      <rect x={bubble.x + 2} y={bubble.y + 5} width="20" height="1.5" rx="0.5" />
                      <rect x={bubble.x + 2} y={bubble.y + 8} width="26" height="1.5" rx="0.5" />
                      <rect x={bubble.x + 2} y={bubble.y + 11} width="16" height="1.5" rx="0.5" />
                      <rect x={bubble.x + 2} y={bubble.y + 14} width="22" height="1.5" rx="0.5" />
                      <rect x={bubble.x + 2} y={bubble.y + 17} width="10" height="1.5" rx="0.5" />
                      <rect x={bubble.x + 2} y={bubble.y + 20} width="18" height="1.5" rx="0.5" />
                    </g>
                  </g>
                ) : (
                  <g>
                    <rect
                      x={bubble.x} y={bubble.y}
                      width={bubble.width} height={bubble.height}
                      rx="2" fill={bubble.type === "question" ? "#1e3a5f" : "#0f172a"}
                      stroke={pulseBubble === bubble.id || hoveredBubble === bubble.id ? "#f97316" : (bubble.type === "question" ? "#60a5fa" : "#3b82f6")}
                      strokeWidth="0.3"
                      style={{ filter: pulseBubble === bubble.id || hoveredBubble === bubble.id ? "url(#glowChat)" : "none", transition: "all 0.3s ease-out" }}
                    />
                    {bubble.type === "question" && (
                      <g fill="#60a5fa">
                        <rect x={bubble.x + 2} y={bubble.y + 2.5} width="8" height="1" rx="0.5" />
                        <rect x={bubble.x + 2} y={bubble.y + 4.5} width="12" height="1" rx="0.5" />
                        <rect x={bubble.x + 2} y={bubble.y + 6.5} width="6" height="1" rx="0.5" />
                      </g>
                    )}
                    {bubble.type === "answer" && (
                      <g fill="#3b82f6">
                        <rect x={bubble.x + 2} y={bubble.y + 2.5} width="14" height="1" rx="0.5" />
                        <rect x={bubble.x + 2} y={bubble.y + 4.5} width="10" height="1" rx="0.5" />
                        <rect x={bubble.x + 2} y={bubble.y + 6.5} width="16" height="1" rx="0.5" />
                        <rect x={bubble.x + 2} y={bubble.y + 8.5} width="8" height="1" rx="0.5" />
                      </g>
                    )}
                  </g>
                )}
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
