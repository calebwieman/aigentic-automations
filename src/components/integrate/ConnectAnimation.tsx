"use client";

import { useEffect, useState, ReactElement } from "react";

interface ToolNode {
  id: string;
  label: string;
  icon: "slack" | "gmail" | "notion" | "hubspot" | "shopify" | "zapier" | "google" | "salesforce";
  x: number;
  y: number;
}

const tools: ToolNode[] = [
  { id: "slack", label: "Slack", icon: "slack", x: 20, y: 25 },
  { id: "gmail", label: "Gmail", icon: "gmail", x: 50, y: 15 },
  { id: "notion", label: "Notion", icon: "notion", x: 80, y: 25 },
  { id: "hubspot", label: "HubSpot", icon: "hubspot", x: 15, y: 55 },
  { id: "shopify", label: "Shopify", icon: "shopify", x: 45, y: 50 },
  { id: "zapier", label: "Zapier", icon: "zapier", x: 75, y: 55 },
  { id: "google", label: "Google", icon: "google", x: 30, y: 80 },
  { id: "salesforce", label: "Salesforce", icon: "salesforce", x: 65, y: 82 },
];

// Generate connections between nearby nodes
const connections = [
  ["slack", "gmail"],
  ["slack", "hubspot"],
  ["slack", "notion"],
  ["gmail", "notion"],
  ["gmail", "shopify"],
  ["hubspot", "shopify"],
  ["hubspot", "google"],
  ["notion", "zapier"],
  ["shopify", "zapier"],
  ["google", "salesforce"],
  ["zapier", "salesforce"],
  ["shopify", "google"],
];

function ToolIcon({ type, className }: { type: ToolNode["icon"]; className?: string }) {
  const icons: Record<string, ReactElement> = {
    slack: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
      </svg>
    ),
    gmail: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
      </svg>
    ),
    notion: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.886l-15.177.887c-.56.047-.747.327-.747.934zm14.337.745c.093.42 0 .84-.42.888l-.7.14v9.636c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.222.186c-.094-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933zM2.1 1.155l13.123-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.921c0-.84.374-1.54 1.634-1.766z"/>
      </svg>
    ),
    hubspot: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M18.164 7.93V5.396a2.246 2.246 0 001.267-2.012 2.265 2.265 0 00-2.263-2.265 2.265 2.265 0 00-2.263 2.265c0 .935.569 1.738 1.362 2.012v2.533a5.314 5.314 0 00-2.663 1.363l-7.1-5.314a2.62 2.62 0 00.094-.607A2.66 2.66 0 003.56.094 2.66 2.66 0 00.9 2.754a2.66 2.66 0 002.66 2.66c.556 0 1.082-.17 1.524-.467l7.028 5.219a5.345 5.345 0 00-.234 1.4 5.352 5.352 0 005.346 5.346 5.352 5.352 0 005.346-5.346 5.33 5.33 0 00-1.906-4.03zm-1.215 7.391a2.578 2.578 0 01-2.578-2.578 2.578 2.578 0 012.578-2.578 2.578 2.578 0 012.578 2.578 2.578 2.578 0 01-2.578 2.578z"/>
      </svg>
    ),
    shopify: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.022-.116-2.031-1.19-2.031-1.19s.022-.12.044-.188c.065-.191.153-.303.187-.338l-.053-.055-3.816-3.965s-.177-.175-.338-.175h-.046l-1.827.387-6.45 1.37s-.339.073-.339.18v.037l-.577 6.586 9.529 10.461 2.756 2.984 2.898-7.306zM8.432 5.05l-.337 3.878 3.878-.774-.129-1.643-3.412-1.461zm3.722 3.705l-2.274.454-.129 1.477 2.274-.454.129-1.477zm1.103-2.378l-2.003.402-.22 2.523 2.274-.585.22-2.128-.271-.212z"/>
      </svg>
    ),
    zapier: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6a8.4 8.4 0 110 16.8 8.4 8.4 0 010-16.8zm0 2.4a6 6 0 100 12 6 6 0 000-12zm0 1.2a4.8 4.8 0 110 9.6 4.8 4.8 0 010-9.6z"/>
      </svg>
    ),
    google: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    ),
    salesforce: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M10.667 4.083c-2.909 0-5.271 2.165-5.271 4.833 0 2.667 2.362 4.834 5.27 4.834 2.91 0 5.272-2.167 5.272-4.834 0-2.668-2.362-4.833-5.271-4.833zm0 7.333c-1.389 0-2.51-1.012-2.51-2.5s1.121-2.5 2.51-2.5c1.388 0 2.509 1.012 2.509 2.5s-1.121 2.5-2.509 2.5zm7.617-5.166c-.706-.389-1.686-.666-2.511-.666-2.345 0-4.25 1.905-4.25 4.25s1.905 4.25 4.25 4.25c1.601 0 3.031-.889 3.801-2.205.385.221.641.629.641 1.096 0 .724-.588 1.312-1.312 1.312H3.097c-.725 0-1.313-.588-1.313-1.313V3.097C1.784 2.372 2.372 1.784 3.097 1.784h11.594c3.403 0 6.162 2.66 6.162 5.943 0 1.471-.545 2.817-1.443 3.872-.202-.437-.582-.738-1.036-.738-.389 0-.739.159-1.001.439z"/>
      </svg>
    ),
  };
  return icons[type] || null;
}

export default function ConnectAnimation() {
  const [mounted, setMounted] = useState(false);
  const [visibleNodes, setVisibleNodes] = useState<Set<string>>(new Set());
  const [visibleConnections, setVisibleConnections] = useState<Set<string>>(new Set());
  const [pulseNode, setPulseNode] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    
    // Animate nodes appearing one by one
    const nodeSequence = async () => {
      for (let i = 0; i < tools.length; i++) {
        await new Promise(r => setTimeout(r, 150));
        setVisibleNodes(prev => new Set([...prev, tools[i].id]));
        
        // Pulse the newly visible node
        setPulseNode(tools[i].id);
        setTimeout(() => setPulseNode(null), 400);
      }
    };
    
    // Start connections after nodes appear
    const connectionSequence = async () => {
      await new Promise(r => setTimeout(r, tools.length * 150 + 500));
      
      for (let i = 0; i < connections.length; i++) {
        await new Promise(r => setTimeout(r, 200));
        setVisibleConnections(prev => new Set([...prev, `${connections[i][0]}-${connections[i][1]}`]));
      }
    };

    nodeSequence();
    connectionSequence();
    
    // Continuous subtle pulse on random nodes after initial animation
    const pulseInterval = setInterval(() => {
      if (visibleNodes.size === tools.length) {
        const randomNode = tools[Math.floor(Math.random() * tools.length)].id;
        setPulseNode(randomNode);
        setTimeout(() => setPulseNode(null), 600);
      }
    }, 2000);
    
    return () => clearInterval(pulseInterval);
  }, []);

  const getNodePosition = (id: string) => {
    const node = tools.find(t => t.id === id);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <div className="relative w-full h-full min-h-[400px]">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Glow filter for nodes */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Gradient for connection lines */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.3" />
          </linearGradient>
          
          {/* Radial gradient for node background */}
          <radialGradient id="nodeBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </radialGradient>
        </defs>
        
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
                stroke="url(#lineGradient)"
                strokeWidth="0.4"
                strokeLinecap="round"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: "opacity 0.4s ease-out",
                }}
              />
            );
          })}
        </g>
        
        {/* Tool nodes */}
        <g className="nodes">
          {tools.map((tool) => {
            const isVisible = visibleNodes.has(tool.id);
            const isPulsing = pulseNode === tool.id;
            
            return (
              <g
                key={tool.id}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: `translate(${tool.x}%, ${tool.y}%)`,
                  transformOrigin: "center",
                  transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
                }}
                className={isPulsing ? "animate-pulse" : ""}
              >
                {/* Outer glow ring */}
                <circle
                  r="8"
                  fill="transparent"
                  stroke={isPulsing ? "#f97316" : "#3b82f6"}
                  strokeWidth="0.3"
                  style={{
                    opacity: isVisible ? (isPulsing ? 0.8 : 0.4) : 0,
                    transition: "opacity 0.3s ease-out",
                    filter: isPulsing ? "url(#glow)" : "none",
                  }}
                />
                
                {/* Node background */}
                <circle
                  r="5"
                  fill="url(#nodeBg)"
                  stroke={isPulsing ? "#f97316" : "#3b82f6"}
                  strokeWidth="0.4"
                />
                
                {/* Tool icon */}
                <g transform="scale(0.4) translate(-12, -12)">
                  <ToolIcon type={tool.icon} className="w-5 h-5 text-white" />
                </g>
                
                {/* Label */}
                <text
                  y="9"
                  textAnchor="middle"
                  fill="#94a3b8"
                  fontSize="3.5"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.3s ease-out 0.2s",
                  }}
                >
                  {tool.label}
                </text>
              </g>
            );
          })}
        </g>
        
        {/* Central hub pulse */}
        <circle
          cx="50"
          cy="50"
          r="3"
          fill="#3b82f6"
          style={{
            opacity: mounted ? 0.6 : 0,
            transition: "opacity 1s ease-out 1s",
            filter: "url(#glow)",
          }}
        />
        <circle
          cx="50"
          cy="50"
          r="3"
          fill="transparent"
          stroke="#3b82f6"
          strokeWidth="0.2"
          style={{
            opacity: mounted ? 0.4 : 0,
            animation: mounted ? "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite" : "none",
          }}
        />
      </svg>
      
      {/* CSS animation for ping effect */}
      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
