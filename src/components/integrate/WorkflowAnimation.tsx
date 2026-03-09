"use client";

import { useEffect, useState, useRef } from "react";

interface WorkflowNode {
  id: string;
  x: number;
  y: number;
  label: string;
  type: "start" | "process" | "decision" | "end";
  labelAbove?: boolean;
}

const workflowNodes: WorkflowNode[] = [
  { id: "start", x: 15, y: 50, label: "Start", type: "start", labelAbove: false },
  { id: "step1", x: 35, y: 50, label: "Analyze", type: "process", labelAbove: false },
  { id: "step2", x: 55, y: 30, label: "Design", type: "process", labelAbove: true },
  { id: "step3", x: 55, y: 70, label: "Review", type: "process", labelAbove: false },
  { id: "step4", x: 75, y: 50, label: "Build", type: "process", labelAbove: false },
  { id: "end", x: 92, y: 50, label: "Done", type: "end", labelAbove: false },
];

const connections = [
  ["start", "step1"],
  ["step1", "step2"],
  ["step2", "step3"],
  ["step3", "step4"],
  ["step4", "end"],
];

export default function WorkflowAnimation() {
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
            setVisibleNodes(prev => new Set([...prev, "start"]));
            setPulseNode("start");
            setTimeout(() => setPulseNode(null), 400);
          }, 200);
          
          // Sequential: node → connection → node → connection...
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
          <filter id="glowWorkflow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <linearGradient id="workflowLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
          </linearGradient>
          
          {/* Arrow marker */}
          <marker id="arrowhead" markerWidth="3" markerHeight="3" refX="2" refY="1.5" orient="auto">
            <polygon points="0 0, 3 1.5, 0 3" fill="#60a5fa" />
          </marker>
        </defs>
        
        {/* Connection lines */}
        <g className="connections">
          {connections.map(([from, to]) => {
            const fromPos = getNodePosition(from);
            const toPos = getNodePosition(to);
            const isVisible = visibleConnections.has(`${from}-${to}`) || visibleConnections.has(`${to}-${from}`);
            const isDrawing = drawingConnections.has(`${from}-${to}`) || drawingConnections.has(`${to}-${from}`);
            
            return (
              <line
                key={`${from}-${to}`}
                x1={fromPos.x}
                y1={fromPos.y}
                x2={toPos.x}
                y2={toPos.y}
                stroke="#60a5fa"
                strokeWidth="0.6"
                strokeLinecap="round"
                strokeDasharray="2,2"
                markerEnd="url(#arrowhead)"
                style={{
                  opacity: isVisible ? 0.8 : 0,
                  animation: isVisible ? "dash 1s linear infinite" : "none",
                  transition: isDrawing ? "opacity 0.3s ease-out" : "opacity 0.3s ease-out",
                }}
              />
            );
          })}
        </g>
        
        {/* Workflow nodes */}
        <g className="nodes">
          {workflowNodes.map((node) => {
            const isVisible = visibleNodes.has(node.id);
            const isPulsing = pulseNode === node.id;
            const isHovered = hoveredNode === node.id;
            const glowColor = isPulsing || isHovered ? "#f97316" : null;
            
            return (
              <g 
                key={node.id} 
                style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.3s ease-out", cursor: "pointer" }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Start node - play button */}
                {node.type === "start" && (
                  <g>
                    <circle
                      cx={node.x} cy={node.y} r="6"
                      fill="#0f172a"
                      stroke={glowColor || "#3b82f6"}
                      strokeWidth="0.5"
                      style={{ filter: isPulsing || hoveredNode === node.id ? "url(#glowWorkflow)" : "none" }}
                    />
                    <polygon
                      points={`${node.x-1},${node.y-2.5} ${node.x-1},${node.y+2.5} ${node.x+1.5},${node.y}`}
                      fill={glowColor || "#3b82f6"}
                    />
                  </g>
                )}
                
                {/* End node - checkmark */}
                {node.type === "end" && (
                  <g>
                    <circle
                      cx={node.x} cy={node.y} r="6"
                      fill="#0f172a"
                      stroke={glowColor || "#22c55e"}
                      strokeWidth="0.5"
                      style={{ filter: glowColor ? "url(#glowWorkflow)" : "none" }}
                    />
                    <polyline
                      points={`${node.x-3},${node.y} ${node.x-1},${node.y+2.5} ${node.x+3},${node.y-2}`}
                      fill="none"
                      stroke={glowColor || "#22c55e"}
                      strokeWidth="0.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                )}
                
                {/* Process node - rounded rectangle */}
                {node.type === "process" && (
                  <g>
                    <rect
                      x={node.x - 7} y={node.y - 4}
                      width="14" height="8"
                      rx="2" fill="#0f172a"
                      stroke={glowColor || "#3b82f6"}
                      strokeWidth="0.5"
                      style={{ filter: glowColor ? "url(#glowWorkflow)" : "none" }}
                    />
                    {/* Inner detail */}
                    <rect
                      x={node.x - 5} y={node.y - 2}
                      width="10" height="4"
                      rx="1"
                      fill={glowColor ? "#f9731666" : "#3b82f633"}
                    />
                  </g>
                )}
                
                {/* Label - above or below based on node config */}
                <text
                  x={node.x}
                  y={node.labelAbove ? node.y - 8 : node.y + 10}
                  textAnchor="middle"
                  fill="#94a3b8"
                  fontSize="3"
                  fontFamily="system-ui, sans-serif"
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
      
      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -8;
          }
        }
      `}</style>
    </div>
  );
}
