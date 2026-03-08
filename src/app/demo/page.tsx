"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Demo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="w-full px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/logo.png?v=2" alt="Aigentic Automations" className="h-8 w-auto" />
            <span className="text-white font-semibold text-lg">Aigentic Automations</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/#features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a>
            <a href="/integrate" className="text-gray-400 hover:text-white transition-colors text-sm">How It Works</a>
            <a href="/contact" className="px-4 py-2 bg-white text-black rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors">
              Get Started
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="block md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="block md:hidden border-t border-white/10">
            <div className="flex flex-col py-4 gap-4">
              <a href="/#features" className="text-gray-400 hover:text-white transition-colors text-sm px-4" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="/integrate" className="text-gray-400 hover:text-white transition-colors text-sm px-4" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
              <a href="/contact" className="mx-4 px-4 py-3 bg-white text-black rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors text-center" onClick={() => setMobileMenuOpen(false)}>
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      <div className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                See It In <span className="gradient-text-accent">Action</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Watch how our automations streamline business processes in real-time.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-solid rounded-2xl p-2 overflow-hidden">
              <div className="aspect-video bg-black rounded-xl flex items-center justify-center">
                <p className="text-gray-500">Video placeholder - Add your demo video here</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="text-center mt-12">
              <p className="text-gray-400 mb-6">Ready to build your own automation?</p>
              <a href="/contact" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-lg transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105">
                Get Started
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
