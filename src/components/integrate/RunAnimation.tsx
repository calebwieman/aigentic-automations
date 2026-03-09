"use client";

import { useEffect, useState, useRef } from "react";

const components = [
  { id: "server1", label: "Server", x: 20, y: 25, type: "server" },
  { id: "server2", label: "Server", x: 80, y: 25, type: "server" },
  { id: "db", label: "Database", x: 20, y: 75, type: "db" },
  { id: "api", label: "API", x: 80, y: 75, type: "api" },
];

export default function RunAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<Set<string>>(new Set());
  const [hovered, setHovered] = useState<string | null>(null);
  const [dataFlow, setDataFlow] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Show components
          components.forEach((comp, i) => {
            setTimeout(() => setVisible(v => new Set([...v, comp.id])), i * 300);
          });
          
          // Start data flow after components appear
          setTimeout(() => setDataFlow(["s1-s2"]), 1500);
          setTimeout(() => setDataFlow(prev => [...prev, "s1-db"]), 2000);
          setTimeout(() => setDataFlow(prev => [...prev, "s2-api"]), 2500);
          setTimeout(() => setDataFlow(prev => [...prev, "db-s2"]), 3000);
          
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[400px]">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="cblur"/>
            <feMerge><feMergeNode in="cblur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <linearGradient id="dataLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2"/>
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="1"/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2"/>
          </linearGradient>
        </defs>

        {/* Connection lines */}
        <g>
          {/* Server 1 to Server 2 */}
          <line x1="35" y1="25" x2="65" y2="25" stroke="url(#dataLine)" strokeWidth="0.6" strokeDasharray="2,1">
            {dataFlow.includes("s1-s2") && (
              <animate attributeName="stroke-dashoffset" from="10" to="0" dur="0.5s" repeatCount="indefinite"/>
            )}
          </line>
          {/* Server 1 to DB */}
          <line x1="20" y1="40" x2="20" y2="62" stroke="url(#dataLine)" strokeWidth="0.6" strokeDasharray="2,1">
            {dataFlow.includes("s1-db") && (
              <animate attributeName="stroke-dashoffset" from="10" to="0" dur="0.5s" repeatCount="indefinite"/>
            )}
          </line>
          {/* Server 2 to API */}
          <line x1="80" y1="40" x2="80" y2="62" stroke="url(#dataLine)" strokeWidth="0.6" strokeDasharray="2,1">
            {dataFlow.includes("s2-api") && (
              <animate attributeName="stroke-dashoffset" from="10" to="0" dur="0.5s" repeatCount="indefinite"/>
            )}
          </line>
          {/* DB to Server 2 */}
          <line x1="30" y1="75" x2="60" y2="75" stroke="url(#dataLine)" strokeWidth="0.6" strokeDasharray="2,1">
            {dataFlow.includes("db-s2") && (
              <animate attributeName="stroke-dashoffset" from="10" to="0" dur="0.5s" repeatCount="indefinite"/>
            )}
          </line>
        </g>

        {/* Data packets */}
        <g>
          {dataFlow.includes("s1-s2") && (
            <circle r="1.5" fill="#60a5fa">
              <animateMotion dur="1s" repeatCount="indefinite" path="M 35,25 L 65,25"/>
            </circle>
          )}
          {dataFlow.includes("s1-db") && (
            <circle r="1.5" fill="#60a5fa">
              <animateMotion dur="1.2s" repeatCount="indefinite" path="M 20,40 L 20,62"/>
            </circle>
          )}
          {dataFlow.includes("s2-api") && (
            <circle r="1.5" fill="#60a5fa">
              <animateMotion dur="1s" repeatCount="indefinite" path="M 80,40 L 80,62"/>
            </circle>
          )}
          {dataFlow.includes("db-s2") && (
            <circle r="1.5" fill="#60a5fa">
              <animateMotion dur="1.5s" repeatCount="indefinite" path="M 30,75 L 60,75"/>
            </circle>
          )}
        </g>

        {/* Server 1 */}
        <g style={{ opacity: visible.has("server1") ? 1 : 0, transition: "opacity 0.5s", cursor: "pointer" }}
          onMouseEnter={() => setHovered("server1")} onMouseLeave={() => setHovered(null)}>
          <rect x="8" y="15" width="24" height="20" rx="2" fill="#0f172a" stroke={hovered==="server1"?"#f97316":"#3b82f6"} strokeWidth="0.8" filter={hovered==="server1"?"url(#glow)":"none"}/>
          <rect x="10" y="18" width="20" height="2" rx="1" fill="#3b82f6" opacity="0.6"/>
          <rect x="10" y="22" width="14" height="2" rx="1" fill="#3b82f6" opacity="0.4"/>
          <rect x="10" y="26" width="20" height="2" rx="1" fill="#3b82f6" opacity="0.4"/>
          <circle cx="29" cy="18" r="1.5" fill="#22c55e"/>
          <text x="20" y="45" textAnchor="middle" fill="#94a3b8" fontSize="3">Server</text>
        </g>

        {/* Server 2 */}
        <g style={{ opacity: visible.has("server2") ? 1 : 0, transition: "opacity 0.5s", cursor: "pointer" }}
          onMouseEnter={() => setHovered("server2")} onMouseLeave={() => setHovered(null)}>
          <rect x="68" y="15" width="24" height="20" rx="2" fill="#0f172a" stroke={hovered==="server2"?"#f97316":"#3b82f6"} strokeWidth="0.8" filter={hovered==="server2"?"url(#glow)":"none"}/>
          <rect x="70" y="18" width="20" height="2" rx="1" fill="#3b82f6" opacity="0.6"/>
          <rect x="70" y="22" width="14" height="2" rx="1" fill="#3b82f6" opacity="0.4"/>
          <rect x="70" y="26" width="20" height="2" rx="1" fill="#3b82f6" opacity="0.4"/>
          <circle cx="89" cy="18" r="1.5" fill="#22c55e"/>
          <text x="80" y="45" textAnchor="middle" fill="#94a3b8" fontSize="3">Server</text>
        </g>

        {/* Database */}
        <g style={{ opacity: visible.has("db") ? 1 : 0, transition: "opacity 0.5s", cursor: "pointer" }}
          onMouseEnter={() => setHovered("db")} onMouseLeave={() => setHovered(null)}>
          <ellipse cx="20" cy="72" rx="12" ry="8" fill="#0f172a" stroke={hovered==="db"?"#f97316":"#8b5cf6"} strokeWidth="0.8" filter={hovered==="db"?"url(#glow)":"none"}/>
          <ellipse cx="20" cy="69" rx="12" ry="6" fill="none" stroke="#8b5cf6" strokeWidth="0.4" opacity="0.5"/>
          <ellipse cx="20" cy="75" rx="12" ry="6" fill="none" stroke="#8b5cf6" strokeWidth="0.4" opacity="0.5"/>
          <text x="20" y="90" textAnchor="middle" fill="#94a3b8" fontSize="3">Database</text>
        </g>

        {/* API */}
        <g style={{ opacity: visible.has("api") ? 1 : 0, transition: "opacity 0.5s", cursor: "pointer" }}
          onMouseEnter={() => setHovered("api")} onMouseLeave={() => setHovered(null)}>
          <rect x="68" y="63" width="24" height="20" rx="2" fill="#0f172a" stroke={hovered==="api"?"#f97316":"#f97316"} strokeWidth="0.8" filter={hovered==="api"?"url(#glow)":"none"}/>
          {/* API text */}
          <text x="80" y="77" textAnchor="middle" fill="#f97316" fontSize="5" fontFamily="monospace">API</text>
          <text x="80" y="90" textAnchor="middle" fill="#94a3b8" fontSize="3">Endpoint</text>
        </g>

        {/* Central hub */}
        <g>
          <circle cx="50" cy="50" r="6" fill="#0f172a" stroke="#3b82f6" strokeWidth="0.5" opacity="0.8"/>
          <circle cx="50" cy="50" r="3" fill="#3b82f6">
            <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite"/>
          </circle>
        </g>
      </svg>
    </div>
  );
}
