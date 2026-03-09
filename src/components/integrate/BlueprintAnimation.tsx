"use client";

import { useEffect, useState, useRef } from "react";

interface WorkflowNode {
  id: string;
  x: number;
  y: number;
  label: string;
  type: "start" | "process" | "decision" | "end";
}

const workflowNodes: WorkflowNode[] = [
  { id: "start", x: 10, y: 50, label: "Trigger", type: "start" },
  { id: "step1", x: 30, y: 50, label: "Process 1", type: "process" },
  { id: "step2", x: 50, y: 30, label: "Decision", type: "decision" },
  { id: "step3", x: 50, y: 70, label: "Process 2", type: "process" },
  { id: "step4", x: 70, y: 50, label: "Process 3", type: "process" },
  { id: "end", x: 90, y: 50, label: "Complete", type: "end" },
];

const connections = [
  ["start", "step1"],
  ["step1", "step2"],
  ["step2", "step3"],
  ["step3", "step4"],
  ["step4", "end"],
];

export default function BlueprintAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visibleNodes, setVisibleNodes] = useState<Set<string>>(new Set());
  const [visibleConnections, setVisibleConnections] = useState<Set<string>>(new Set());
  const [pulseNode, setPulseNode] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          
          const nodeSequence = async () => {
            for (let i = 0; i < workflowNodes.length; i++) {
              await new Promise(r => setTimeout(r, 400));
              setVisibleNodes(prev => new Set([...prev, workflowNodes[i].id]));
              setPulseNode(workflowNodes[i].id);
              setTimeout(() => setPulseNode(null), 600);
            }
          };
          
          const connectionSequence = async () => {
            await new Promise(r => setTimeout(r, workflowNodes.length * 400 + 600));
            for (let i = 0; i < connections.length; i++) {
              await new Promise(r => setTimeout(r, 300));
              setVisibleConnections(prev => new Set([...prev, `${connections[i][0]}-${connections[i][1]}`]));
            }
          };

          nodeSequence();
          connectionSequence();
          
          const pulseInterval = setInterval(() => {
            if (visibleNodes.size === workflowNodes.length) {
              const randomNode = workflowNodes[Math.floor(Math.random() * workflowNodes.length)].id;
              setPulseNode(randomNode);
              setTimeout(() => setPulseNode(null), 1000);
            }
          }, 3000);
          
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

  const getNodePosition = (id: string) => {
    const node = workflowNodes.find(n => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[400px]">
      <svg viewBox="0 0 100 100" className="w-full h-full" style={{ overflow: "visible" }}>
        <defs>
          <filter id="glowBlueprint" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <linearGradient id="blueprintLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
          </linearGradient>
          
          <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
            <path d="M 5 0 L 0 0 0 5" fill="none" stroke="#1e3a5f" strokeWidth="0.2" opacity="0.5"/>
          </pattern>
        </defs>
        
        {/* Grid background */}
        <rect x="0" y="0" width="100" height="100" fill="url(#grid)" />
        
        {/* Connection lines */}
        <g className="connections">
          {connections.map(([from, to]) => {
            const fromPos = getNodePosition(from);
            const toPos = getNodePosition(to);
            const isVisible = visibleConnections.has(`${from}-${to}`) || visibleConnections.has(`${to}-${from}`);
            
            return (
              <line
                key={`${from}-${to}`}
                x1={fromPos.x}
                y1={fromPos.y}
                x2={toPos.x}
                y2={toPos.y}
                stroke="url(#blueprintLine)"
                strokeWidth="0.5"
                strokeDasharray="2,1"
                strokeLinecap="round"
                style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.4s ease-out" }}
              />
            );
          })}
        </g>
        
        {/* Workflow nodes */}
        <g className="nodes">
          {workflowNodes.map((node) => {
            const isVisible = visibleNodes.has(node.id);
            const isPulsing = pulseNode === node.id;
            
            return (
              <g key={node.id} style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.3s ease-out" }}>
                {node.type === "start" && (
                  <g>
                    <circle
                      cx={node.x} cy={node.y} r="5"
                      fill="#0f172a"
                      stroke={isPulsing ? "#f97316" : "#3b82f6"}
                      strokeWidth="0.5"
                      style={{ filter: isPulsing ? "url(#glowBlueprint)" : "none" }}
                    />
                    <polygon
                      points={`${node.x},${node.y-3} ${node.x+2.5},${node.y+1.5} ${node.x-2.5},${node.y+1.5}`}
                      fill={isPulsing ? "#f97316" : "#3b82f6"}
                    />
                  </g>
                )}
                {node.type === "end" && (
                  <g>
                    <circle
                      cx={node.x} cy={node.y} r="5"
                      fill="#0f172a"
                      stroke={isPulsing ? "#f97316" : "#22c55e"}
                      strokeWidth="0.5"
                      style={{ filter: isPulsing ? "url(#glowBlueprint)" : "none" }}
                    />
                    <circle cx={node.x} cy={node.y} r="2" fill={isPulsing ? "#f97316" : "#22c55e"} />
                  </g>
                )}
                {node.type === "decision" && (
                  <g>
                    <polygon
                      points={`${node.x},${node.y-5} ${node.x+5},${node.y} ${node.x},${node.y+5} ${node.x-5},${node.y}`}
                      fill="#0f172a"
                      stroke={isPulsing ? "#f97316" : "#f59e0b"}
                      strokeWidth="0.5"
                      style={{ filter: isPulsing ? "url(#glowBlueprint)" : "none" }}
                    />
                    <text x={node.x} y={node.y + 9} textAnchor="middle" fill="#94a3b8" fontSize="2.5" fontFamily="system-ui">?</text>
                  </g>
                )}
                {node.type === "process" && (
                  <g>
                    <rect
                      x={node.x - 5} y={node.y - 3}
                      width="10" height="6"
                      rx="1" fill="#0f172a"
                      stroke={isPulsing ? "#f97316" : "#3b82f6"}
                      strokeWidth="0.5"
                      style={{ filter: isPulsing ? "url(#glowBlueprint)" : "none" }}
                    />
                  </g>
                )}
                {/* Label */}
                <text
                  x={node.x}
                  y={node.y + (node.type === "process" ? 5 : 12)}
                  textAnchor="middle"
                  fill="#64748b"
                  fontSize="3"
                  fontFamily="system-ui, monospace"
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
