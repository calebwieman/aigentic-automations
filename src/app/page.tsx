"use client";

import { motion } from "framer-motion";
import TiltCard from "@/components/TiltCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-white font-semibold text-lg">Aigentic</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">
              How it Works
            </a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm">
              Pricing
            </a>
          </div>
          
          <button className="px-4 py-2 bg-white text-black rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-gray-300">Now available for small businesses</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Automations</span> that work<br />
              while you <span className="gradient-text-accent">sleep</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
            >
              Build powerful automations that save time and create value. 
              Your digital workforce never stops, so you can focus on what matters.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-lg transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                Start Building Free
              </button>
              <button className="px-8 py-4 glass text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all">
                Watch Demo
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Bar */}
      <ScrollReveal>
        <section className="py-12 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-500 text-sm mb-8">Trusted by forward-thinking businesses</p>
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
              <div className="text-gray-400 font-semibold text-xl">ACME Inc</div>
              <div className="text-gray-400 font-semibold text-xl">TechCorp</div>
              <div className="text-gray-400 font-semibold text-xl">StartupXYZ</div>
              <div className="text-gray-400 font-semibold text-xl">LocalBiz</div>
              <div className="text-gray-400 font-semibold text-xl">FoundersCo</div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Features Preview */}
      <ScrollReveal>
        <section id="features" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Everything you need to <span className="gradient-text-accent">automate</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Powerful features designed for small businesses and founders who want to scale without adding headcount.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Large card - Instant Automation */}
              <TiltCard className="md:col-span-2">
                <div className="glass rounded-2xl p-8 hover:bg-white/5 transition-all cursor-pointer group h-full">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    Instant Automation
                  </h3>
                  <p className="text-gray-400">
                    Build complex workflows in minutes with our visual builder. No coding required.
                  </p>
                </div>
              </TiltCard>

              {/* Small card - 24/7 */}
              <TiltCard>
                <div className="glass rounded-2xl p-8 hover:bg-white/5 transition-all cursor-pointer group h-full">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-orange-400 transition-colors">
                    24/7 Running
                  </h3>
                  <p className="text-gray-400">
                    Your automations work around the clock.
                  </p>
                </div>
              </TiltCard>

              {/* Small card - Secure */}
              <TiltCard>
                <div className="glass rounded-2xl p-8 hover:bg-white/5 transition-all cursor-pointer group h-full">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-green-400 transition-colors">
                    Reliable & Secure
                  </h3>
                  <p className="text-gray-400">
                    Enterprise-grade security for your data.
                  </p>
                </div>
              </TiltCard>

              {/* Large card - Integrations */}
              <TiltCard className="md:col-span-2">
                <div className="glass rounded-2xl p-8 hover:bg-white/5 transition-all cursor-pointer group h-full">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                    100+ Integrations
                  </h3>
                  <p className="text-gray-400">
                    Connect with the tools you already use - Slack, Gmail, Notion, HubSpot, and more.
                  </p>
                </div>
              </TiltCard>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <ScrollReveal>
        <footer className="py-12 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs">A</span>
              </div>
              <span className="text-gray-400 text-sm">© 2026 Aigentic Automations</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                Terms
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </ScrollReveal>
    </div>
  );
}
