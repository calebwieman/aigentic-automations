"use client";

import { useRef, useMemo, useEffect, useState, ReactElement } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TiltCard from "@/components/TiltCard";

const steps = [
  {
    id: 1,
    title: "Connect Your Tools",
    description: "Link the software you use every day — WooCommerce, Slack, Gmail, QuickBooks, and 100+ more.",
    icon: "connect",
    interactive: "See supported apps",
    logos: ["slack", "gmail", "notion", "hubspot", "shopify", "zapier"],
  },
  {
    id: 2,
    title: "Tell Us What You Need",
    description: "Share your business processes and pain points. We'll help you identify what can be automated.",
    icon: "message",
    interactive: "Example workflows",
  },
  {
    id: 3,
    title: "We Design It",
    description: "Our team maps out every step of your custom automation workflow.",
    icon: "design",
    interactive: "View sample designs",
  },
  {
    id: 4,
    title: "We Build It",
    description: "Your automation is built, tested, and refined until it works perfectly.",
    icon: "build",
    interactive: "See our process",
  },
  {
    id: 5,
    title: "Watch It Run",
    description: "Your automation starts working immediately. Save hours every week.",
    icon: "rocket",
    interactive: "Case studies",
  },
];

// SVG Icons for each integration
function IntegrationIcon({ name }: { name: string }) {
  const icons: Record<string, ReactElement> = {
    slack: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
      </svg>
    ),
    gmail: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
      </svg>
    ),
    notion: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.886l-15.177.887c-.56.047-.747.327-.747.934zm14.337.745c.093.42 0 .84-.42.888l-.7.14v9.636c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.222.186c-.094-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933zM2.1 1.155l13.123-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.921c0-.84.374-1.54 1.634-1.766z"/>
      </svg>
    ),
    hubspot: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M18.164 7.93V5.396a2.246 2.246 0 001.267-2.012 2.265 2.265 0 00-2.263-2.265 2.265 2.265 0 00-2.263 2.265c0 .935.569 1.738 1.362 2.012v2.533a5.314 5.314 0 00-2.663 1.363l-7.1-5.314a2.62 2.62 0 00.094-.607A2.66 2.66 0 003.56.094 2.66 2.66 0 00.9 2.754a2.66 2.66 0 002.66 2.66c.556 0 1.082-.17 1.524-.467l7.028 5.219a5.345 5.345 0 00-.234 1.4 5.352 5.352 0 005.346 5.346 5.352 5.352 0 005.346-5.346 5.33 5.33 0 00-1.906-4.03zm-1.215 7.391a2.578 2.578 0 01-2.578-2.578 2.578 2.578 0 012.578-2.578 2.578 2.578 0 012.578 2.578 2.578 2.578 0 01-2.578 2.578z"/>
      </svg>
    ),
    shopify: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.022-.116-2.031-1.19-2.031-1.19s.022-.12.044-.188c.065-.191.153-.303.187-.338l-.053-.055-3.816-3.965s-.177-.175-.338-.175h-.046l-1.827.387-6.45 1.37s-.339.073-.339.18v.037l-.577 6.586 9.529 10.461 2.756 2.984 2.898-7.306zM8.432 5.05l-.337 3.878 3.878-.774-.129-1.643-3.412-1.461zm3.722 3.705l-2.274.454-.129 1.477 2.274-.454.129-1.477zm1.103-2.378l-2.003.402-.22 2.523 2.274-.585.22-2.128-.271-.212z"/>
      </svg>
    ),
    zapier: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6a8.4 8.4 0 110 16.8 8.4 8.4 0 010-16.8zm0 2.4a6 6 0 100 12 6 6 0 000-12zm0 1.2a4.8 4.8 0 110 9.6 4.8 4.8 0 010-9.6z"/>
      </svg>
    ),
  };
  
  return icons[name] || null;
}

// Path starts at center (y=50), goes DOWN to bottom (y=100)
const generatePath = () => {
  let path = `M 50 50`;
  
  const positions = [55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
  
  positions.forEach((yPos, i) => {
    const isLeft = i % 2 === 0;
    const xSide = isLeft ? 15 : 85;
    const xInner = isLeft ? 30 : 70;
    
    path += ` L 50 ${yPos}`;
    path += ` L ${xSide} ${yPos}`;
    path += ` L ${xSide} ${yPos + 3}`;
    path += ` L ${xInner} ${yPos + 3}`;
    path += ` L ${xInner} ${yPos + 6}`;
    path += ` L 50 ${yPos + 6}`;
  });
  
  path += ` L 50 100`;
  
  return path;
};

export default function Integrate() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const path = useMemo(() => generatePath(), []);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
    }
  }, [path]);

  const strokeDashoffset = useTransform(scrollYProgress, [0, 1], [pathLength, 0]);

  return (
    <div ref={containerRef} className="bg-black text-white" style={{ height: '700vh' }}>

      {/* Back button */}
      <a 
        href="/" 
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </a>

      <section className="h-screen flex items-center py-2 relative z-10">
        <div className="w-full text-center px-6 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-center"
          >
            How It <span className="text-blue-500">Works</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Scroll down to see how we transform your business
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <span className="text-gray-500 animate-bounce block">↓</span>
          </motion.div>
        </div>
      </section>

      {steps.map((step, i) => (
        <StepCard 
          key={step.id} 
          step={step} 
          index={i} 
          isLeft={i % 2 === 0}
        />
      ))}

      <section className="h-screen flex items-center py-2 relative z-10">
        <div className="w-full text-center px-6 mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
          >
            Ready to <span className="text-blue-500">start</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-8"
          >
            Let&apos;s build your custom automation
          </motion.p>
          <a 
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-lg transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}

function StepCard({ step, index, isLeft }: { 
  step: typeof steps[0], 
  index: number, 
  isLeft: boolean,
}) {
  return (
    <section className="h-screen flex items-center justify-center px-6 relative z-10">
      {/* Connecting line segment */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent -translate-x-1/2" />
      
      {/* Center dot */}
      <div className="absolute left-1/2 top-1/2 w-3 h-3 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 z-20 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
      
      {/* Workflow animation on opposite side */}
      <WorkflowAnimation stepId={step.id} isLeft={isLeft} />
      
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
        viewport={{ once: false, margin: "-30%" }}
        className={`max-w-md w-full ${isLeft ? 'mr-[50%] pr-12 text-right' : 'ml-[50%] pl-12 text-left'}`}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="group"
        >
          <div 
            className="rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 bg-gradient-to-br from-gray-900 to-black"
            style={{ 
              background: "linear-gradient(160deg, #1a1a1a 0%, #0f0f0f 40%, #151515 100%)",
              boxShadow: "0 0 30px rgba(59,130,246,0.1)"
            }}
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                {step.icon === 'connect' && (
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                )}
                {step.icon === 'message' && (
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                )}
                {step.icon === 'design' && (
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                )}
                {step.icon === 'build' && (
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
                {step.icon === 'rocket' && (
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )}
              </div>
              <span className="text-2xl font-bold text-blue-500">{String(step.id).padStart(2, '0')}</span>
            </motion.div>
            
            <h2 className="text-3xl font-bold mb-4 text-center group-hover:text-blue-400 transition-colors">{step.title}</h2>
            <p className="text-gray-400 text-lg mb-6 text-center">{step.description}</p>
            
            {/* App logos for first step */}
            {step.logos && (
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {step.logos.map((logo) => (
                  <div
                    key={logo}
                    className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 border border-white/10"
                    title={logo}
                  >
                    <IntegrationIcon name={logo} />
                  </div>
                ))}
              </div>
            )}
            
            <div className="flex justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl border border-blue-500/50 text-blue-400 hover:bg-blue-500/20 transition-all"
            >
              {step.interactive} →
            </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Mini workflow animations for each step
function WorkflowAnimation({ stepId, isLeft }: { stepId: number; isLeft: boolean }) {
  const size = "w-64 h-64";
  const position = isLeft ? "right-[20%]" : "left-[20%]";
  const animations = {
    1: ( // Connect - apps connecting
      <svg viewBox="0 0 100 100" className={`${size} opacity-70`}>
        <circle cx="30" cy="50" r="12" fill="#3b82f6" className="animate-pulse" />
        <circle cx="70" cy="50" r="12" fill="#f59e0b" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <line x1="42" y1="50" x2="58" y2="50" stroke="#3b82f6" strokeWidth="2" className="animate-pulse" />
        <circle cx="30" cy="30" r="8" fill="#3b82f6" opacity="0.5" />
        <circle cx="70" cy="70" r="8" fill="#f59e0b" opacity="0.5" />
      </svg>
    ),
    2: ( // Tell Us - chat bubbles
      <svg viewBox="0 0 100 100" className={`${size} opacity-70`}>
        <rect x="15" y="30" width="50" height="30" rx="8" fill="#3b82f6" opacity="0.6" className="animate-pulse" />
        <polygon points="25,60 35,60 30,70" fill="#3b82f6" opacity="0.6" />
        <rect x="35" y="45" width="40" height="25" rx="8" fill="#f59e0b" opacity="0.6" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
        <polygon points="65,70 75,70 70,80" fill="#f59e0b" opacity="0.6" />
      </svg>
    ),
    3: ( // Design - blueprint grid
      <svg viewBox="0 0 100 100" className={`${size} opacity-70`}>
        <rect x="10" y="10" width="80" height="80" rx="4" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.5" />
        <line x1="10" y1="30" x2="90" y2="30" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
        <line x1="10" y1="50" x2="90" y2="50" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
        <line x1="10" y1="70" x2="90" y2="70" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
        <line x1="30" y1="10" x2="30" y2="90" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
        <line x1="50" y1="10" x2="50" y2="90" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
        <line x1="70" y1="10" x2="70" y2="90" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
        <rect x="35" y="35" width="30" height="30" rx="2" fill="none" stroke="#f59e0b" strokeWidth="2" className="animate-pulse" />
        <circle cx="50" cy="50" r="5" fill="#f59e0b" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
      </svg>
    ),
    4: ( // Build - gears
      <svg viewBox="0 0 100 100" className={`${size} opacity-70`}>
        <circle cx="35" cy="50" r="15" fill="none" stroke="#3b82f6" strokeWidth="3" className="animate-spin" style={{ animationDuration: '4s' }} />
        <circle cx="35" cy="50" r="6" fill="#3b82f6" />
        <circle cx="70" cy="35" r="12" fill="none" stroke="#f59e0b" strokeWidth="2.5" className="animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
        <circle cx="70" cy="35" r="5" fill="#f59e0b" />
        <circle cx="70" cy="70" r="10" fill="none" stroke="#3b82f6" strokeWidth="2" className="animate-spin" style={{ animationDuration: '5s' }} />
        <circle cx="70" cy="70" r="4" fill="#3b82f6" />
      </svg>
    ),
    5: ( // Watch It Run - play/running
      <svg viewBox="0 0 100 100" className={`${size} opacity-70`}>
        <circle cx="50" cy="50" r="25" fill="none" stroke="#3b82f6" strokeWidth="2" className="animate-ping" style={{ animationDuration: '2s' }} />
        <circle cx="50" cy="50" r="20" fill="none" stroke="#f59e0b" strokeWidth="2" className="animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
        <polygon points="45,35 45,65 70,50" fill="#f59e0b" className="animate-pulse" />
        <line x1="20" y1="50" x2="30" y2="50" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 2" className="animate-pulse" />
        <line x1="70" y1="50" x2="80" y2="50" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 2" className="animate-pulse" />
      </svg>
    ),
  };
  
  return (
    <div className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 ${position} items-center justify-center`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false }}
      >
        {animations[stepId as keyof typeof animations]}
      </motion.div>
    </div>
  );
}
