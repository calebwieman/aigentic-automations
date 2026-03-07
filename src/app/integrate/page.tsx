"use client";

import { useRef, useMemo, useEffect, useState, ReactElement } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TiltCard from "@/components/TiltCard";

const steps = [
  {
    id: 1,
    title: "Connect Your Tools",
    description: "Link the software you use every day — WooCommerce, Slack, Gmail, QuickBooks, and 100+ more.",
    icon: "🔗",
    interactive: "See supported apps",
    logos: ["slack", "gmail", "notion", "hubspot", "shopify", "zapier"],
  },
  {
    id: 2,
    title: "Tell Us What You Need",
    description: "Share your business processes and pain points. We'll help you identify what can be automated.",
    icon: "💬",
    interactive: "Example workflows",
  },
  {
    id: 3,
    title: "We Design It",
    description: "Our team maps out every step of your custom automation workflow.",
    icon: "🎨",
    interactive: "View sample designs",
  },
  {
    id: 4,
    title: "We Build It",
    description: "Your automation is built, tested, and refined until it works perfectly.",
    icon: "⚙️",
    interactive: "See our process",
  },
  {
    id: 5,
    title: "Watch It Run",
    description: "Your automation starts working immediately. Save hours every week.",
    icon: "🚀",
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

      <section className="h-screen flex items-center justify-center relative z-10">
        <div className="text-center px-6 max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
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

      <section className="h-screen flex items-center justify-center relative z-10">
        <div className="text-center px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, margin: "-20%" }}
        className={`max-w-md w-full ${isLeft ? 'mr-[50%] pr-12 text-right' : 'ml-[50%] pl-12 text-left'}`}
      >
        <TiltCard>
          <div 
            className="rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
            style={{ background: "linear-gradient(160deg, #1a1a1a 0%, #0f0f0f 40%, #151515 100%)" }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">{step.icon}</span>
              <span className="text-4xl font-bold text-blue-500">{String(step.id).padStart(2, '0')}</span>
            </div>
            
            <h2 className="text-3xl font-bold mb-4">{step.title}</h2>
            <p className="text-gray-400 text-lg mb-6">{step.description}</p>
            
            {/* App logos for first step */}
            {step.logos && (
              <div className="flex flex-wrap gap-2 mb-6 justify-end">
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
            
            <button className="px-6 py-3 rounded-xl border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 transition-all hover:scale-105">
              {step.interactive} →
            </button>
          </div>
        </TiltCard>
      </motion.div>
    </section>
  );
}
