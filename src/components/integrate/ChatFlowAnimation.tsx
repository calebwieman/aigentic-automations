"use client";

import { useEffect, useState } from "react";

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
  { id: "q2", x: 15, y: 38, width: 30, height: 10, type: "question" },
  { id: "a2", x: 52, y: 42, width: 32, height: 14, type: "answer" },
  { id: "process", x: 25, y: 68, width: 50, height: 18, type: "process" },
];

const connections = [
  ["q1", "a1"],
  ["a1", "q2"],
  ["q2", "a2"],
  ["a2", "process"],
];

export default function ChatFlowAnimation() {
  const [mounted, setMounted] = useState(false);
  const [visibleBubbles, setVisibleBubbles] = useState<Set<string>>(new Set());
  const [visibleConnections, setVisibleConnections] = useState<Set<string>>(new Set());
  const [pulseBubble, setPulseBubble] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    
    const bubbleSequence = async () => {
      for (let i = 0; i < chatBubbles.length; i++) {
        await new Promise(r => setTimeout(r, 700));
        setVisibleBubbles(prev => new Set([...prev, chatBubbles[i].id]));
        setPulseBubble(chatBubbles[i].id);
        setTimeout(() => setPulseBubble(null), 1200);
      }
    };
    
    const connectionSequence = async () => {
      await new Promise(r => setTimeout(r, chatBubbles.length * 700 + 1000));
      for (let i = 0; i < connections.length; i++) {
        await new Promise(r => setTimeout(r, 500));
        setVisibleConnections(prev => new Set([...prev, `${connections[i][0]}-${connections[i][1]}`]));
      }
    };

    bubbleSequence();
    connectionSequence();
    
    const pulseInterval = setInterval(() => {
      if (visibleBubbles.size === chatBubbles.length) {
        const randomBubble = chatBubbles[Math.floor(Math.random() * chatBubbles.length)].id;
        setPulseBubble(randomBubble);
        setTimeout(() => setPulseBubble(null), 1500);
      }
    }, 5000);
    
    return () => clearInterval(pulseInterval);
  }, []);

  const getBubblePosition = (id: string) => {
    const bubble = chatBubbles.find(b => b.id === id);
    return bubble ? { x: bubble.x + bubble.width / 2, y: bubble.y + bubble.height / 2, width: bubble.width, height: bubble.height } : { x: 0, y: 0, width: 0, height: 0 };
  };

  return (
    <div className="relative w-full h-full min-h-[400px]">
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
            
            return (
              <line
                key={`${from}-${to}`}
                x1={fromPos.x}
                y1={fromPos.y + fromPos.height/2}
                x2={toPos.x}
                y2={toPos.y - toPos.height/2}
                stroke="url(#chatLineGradient)"
                strokeWidth="0.5"
                strokeLinecap="round"
                style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.5s ease-out" }}
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
              <g key={bubble.id} style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.4s ease-out" }}>
                {bubble.type === "process" ? (
                  <g>
                    <rect
                      x={bubble.x} y={bubble.y}
                      width={bubble.width} height={bubble.height}
                      rx="3" fill="url(#processGradient)"
                      stroke={isPulsing ? "#f97316" : "#3b82f6"}
                      strokeWidth="0.5"
                      style={{ filter: isPulsing ? "url(#glowChat)" : "none", transition: "all 0.3s ease-out" }}
                    />
                    <g transform={`translate(${bubble.x + bubble.width/2}, ${bubble.y + bubble.height/2})`}>
                      <circle r="4" fill="transparent" stroke="#3b82f6" strokeWidth="0.3" />
                      <circle r="2" fill="#3b82f6" />
                    </g>
                    <text x={bubble.x + bubble.width/2} y={bubble.y + bubble.height + 5} textAnchor="middle" fill="#94a3b8" fontSize="3.5" fontFamily="system-ui">Process</text>
                  </g>
                ) : (
                  <g>
                    <rect
                      x={bubble.x} y={bubble.y}
                      width={bubble.width} height={bubble.height}
                      rx="2" fill={bubble.type === "question" ? "#1e3a5f" : "#0f172a"}
                      stroke={isPulsing ? "#f97316" : (bubble.type === "question" ? "#60a5fa" : "#3b82f6")}
                      strokeWidth="0.3"
                      style={{ filter: isPulsing ? "url(#glowChat)" : "none", transition: "all 0.3s ease-out" }}
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
