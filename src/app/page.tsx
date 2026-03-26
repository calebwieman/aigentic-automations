"use client";
import HeroTitle from "@/components/HeroTitle";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TiltCard from "@/components/TiltCard";
import ScrollReveal from "@/components/ScrollReveal";
import DecoderText from "@/components/DecoderText";
import AnimatedIcon from "@/components/AnimatedIcon";
import GradientBorderCard from "@/components/GradientBorderCard";

export default function Home() {
  const [pageKey, setPageKey] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
    setPageKey(prev => prev + 1);
  };

  return (
    <div key={pageKey} className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="w-full px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity" onClick={(e) => { e.preventDefault(); handleLogoClick(); }}>
            <img src="/logo.png?v=2" alt="Aigentic Automations" className="h-8 w-auto" />
            <span className="text-white font-semibold text-lg">Aigentic Automations</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a>
            <a href="/integrate" className="text-gray-400 hover:text-white transition-colors text-sm">How It Works</a>
            <a href="/work" className="text-gray-400 hover:text-white transition-colors text-sm">Our Work</a>
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
        {mounted && mobileMenuOpen && (
          <div className="block md:hidden border-t border-white/10">
            <div className="flex flex-col py-4 gap-4">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm px-4" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="/integrate" className="text-gray-400 hover:text-white transition-colors text-sm px-4" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
              <a href="/apps" className="text-gray-400 hover:text-white transition-colors text-sm px-4" onClick={() => setMobileMenuOpen(false)}>Supported Apps</a>
              <a href="/work" className="text-gray-400 hover:text-white transition-colors text-sm px-4" onClick={() => setMobileMenuOpen(false)}>Our Work</a>
              <a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm px-4" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-56 pb-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-solid mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-sm text-gray-300">Now available for small businesses</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-7xl font-bold mb-6"
            >
              <HeroTitle /> that work<br />
              while you <span className="gradient-text-accent">sleep</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
            >
              Leverage agents that save time and create value. 
              Your digital workforce never stops, so you can focus on what matters.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
            >
              <a href="/integrate" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-500/50 text-white rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-gray-400 transition-all hover:scale-105 text-center">
                How It Works
              </a>
              <a href="/demo" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-500/50 text-white rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-gray-400 transition-all hover:scale-105 text-center">
                Watch Demo
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <ScrollReveal>
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <span className="text-orange-400"><DecoderText text="2,847" /></span>
                </div>
                <div className="text-gray-500 text-sm">Hours Saved This Month</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <span className="text-blue-400"><DecoderText text="24/7" /></span>
                </div>
                <div className="text-gray-500 text-sm">Automation Running</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <span className="text-orange-400"><DecoderText text="100+" /></span>
                </div>
                <div className="text-gray-500 text-sm">Integrations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <span className="text-blue-400"><DecoderText text="&lt;2" /></span>
                </div>
                <div className="text-gray-500 text-sm">Week Setup Time</div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Features */}
      <ScrollReveal>
        <section id="features" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Everything you need to <span className="gradient-text-accent">automate</span></h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">Powerful features designed for small businesses and founders.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "We Build Everything", desc: "Tell us what you need and we build it. No coding required.", color: "blue", icon: "M13 10V3L4 14h7v7l9-11h-7z", bullets: ["Custom workflows for your exact process", "We handle all the technical setup", "Ongoing maintenance included"] },
                { title: "Works While You Sleep", desc: "Your automations run 24/7. No micromanaging.", color: "orange", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", bullets: ["Handles orders, emails, and scheduling", "Instant alerts when action is needed", "Never misses a follow-up"] },
                { title: "Enterprise Security", desc: "Bank-level encryption. Your data stays yours.", color: "blue", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", bullets: ["End-to-end encryption", "SOC 2 compliant infrastructure", "You own your data always"] },
                { title: "100+ Integrations", desc: "Connect with the tools you already use.", color: "orange", icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z", bullets: ["Gmail, Slack, Notion, HubSpot", "Shopify, QuickBooks, Stripe", "Custom API connections available"] },
                { title: "Real-time Analytics", desc: "See exactly what's working and what's not.", color: "blue", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", bullets: ["Dashboard with live metrics", "Weekly performance reports", "See hours saved and ROI"] },
                { title: "Setup in Days, Not Months", desc: "Most clients are up and running within a week.", color: "orange", icon: "M13 10V3L4 14h7v7l9-11h-7z", bullets: ["We build everything for you", "One intro call to get started", "Ongoing support included forever"] },
              ].map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 0.1}>
                  <TiltCard glowColor={feature.color}>
                    <div className="rounded-2xl p-8 min-h-72 z-30 transition-all duration-300 group relative overflow-hidden flex flex-col" style={{ background: 'linear-gradient(160deg, #1a1a1a 0%, #0f0f0f 40%, #151515 100%)' }}>
                      {/* Icon container with glow */}
                      <div className={`w-12 h-12 rounded-xl bg-${feature.color}-500/10 border border-${feature.color}-500/30 flex items-center justify-center mb-4 md:group-hover:scale-110 md:group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300`}>
                        <AnimatedIcon icon={feature.icon} color={feature.color} />
                      </div>
                      <h3 className={`text-xl font-semibold mb-2 text-white md:group-hover:text-${feature.color}-400 transition-colors`}>{feature.title}</h3>
                      <p className="text-gray-400 mb-4">{feature.desc}</p>
                      <ul className="space-y-2 mt-auto">
                        {feature.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2 text-gray-500 text-sm">
                            <svg className={`w-4 h-4 ${feature.color === 'orange' ? 'text-orange-400' : 'text-blue-400'} flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* How It Works */}
      <ScrollReveal>
        <section id="how-it-works" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">How it <span className="gradient-text-accent">works</span></h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">We set everything up for you. Just tell us what you need.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { num: "1", title: "Tell Us What You Need", desc: "Share your business processes and pain points.", hover: "blue" },
                { num: "2", title: "We Build It For You", desc: "Our team creates custom automations tailored to your needs.", hover: "none" },
                { num: "3", title: "Watch It Run", desc: "Your automations start working immediately.", hover: "orange" },
              ].map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 0.15}>
                  <div className="text-center group">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 md:group-hover:scale-110 md:group-hover:border-white/40 md:group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 border border-white/20 bg-transparent">
                      <span className="text-3xl font-bold text-white/80">{step.num}</span>
                    </div>
                    <h3 className={`text-xl font-semibold mb-3 text-white ${step.num === '3' ? 'md:group-hover:text-orange-400' : step.hover !== 'none' ? `md:group-hover:text-${step.hover}-400` : ''} transition-colors`}>{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Why Choose Us */}
      <ScrollReveal>
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why <span className="gradient-text-accent">choose us</span></h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">We're your partner in efficiency.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Affordable", desc: "A fraction of hiring an employee.", color: "blue", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                { title: "Fast Setup", desc: "We build everything for you.", color: "orange", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                { title: "Personal Support", desc: "Direct access. No chatbots.", color: "blue", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
                { title: "Proven Results", desc: "Join businesses saving hours.", color: "orange", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <GradientBorderCard color={item.color}>
                    <div className={`w-12 h-12 rounded-xl bg-${item.color}-500/10 border border-${item.color}-500/30 flex items-center justify-center mb-4 md:group-hover:scale-110 transition-all duration-300`}>
                      <AnimatedIcon icon={item.icon} color={item.color} />
                    </div>
                    <h3 className={`text-lg font-semibold mb-2 text-white md:group-hover:text-${item.color}-400 transition-colors`}>{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </GradientBorderCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials */}
      <ScrollReveal>
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Loved by <span className="gradient-text-accent">businesses</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { quote: "We save 20+ hours every week thanks to Aigentic.", name: "John D.", role: "Founder, TechStartup", color: "blue" },
                { quote: "Finally, an automation solution that doesn't require a developer.", name: "Sarah M.", role: "Owner, Plasma Bionics", color: "orange" },
                { quote: "The personal support is incredible. They actually care.", name: "Mike K.", role: "CEO, GrowthCo", color: "blue" },
              ].map((testimonial, i) => (
                <ScrollReveal key={testimonial.name} delay={i * 0.15}>
                  <TiltCard glowColor={i === 1 ? "orange" : "blue"}>
                    <div className="rounded-2xl p-6 z-30 transition-all duration-300 group relative overflow-hidden">
                      {/* Quote mark decoration */}
                      <div className="absolute top-2 right-4 text-white/10 text-6xl font-serif leading-none opacity-30 md:group-hover:opacity-50 transition-opacity">"</div>
                      {/* Stars on hover - smaller, bottom right */}
                      <div className="absolute bottom-4 right-4 text-xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                        ⭐⭐⭐⭐⭐
                      </div>
                      <p className="text-gray-300 mb-4 md:group-hover:text-white transition-colors relative z-10">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center md:group-hover:scale-110 transition-all duration-300 ${i === 1 ? 'bg-orange-500/10 border border-orange-500/30' : 'bg-blue-500/10 border border-blue-500/30'}`}>
                          <span className="text-white font-semibold text-sm">{testimonial.name.split(" ").map(n => n[0]).join("")}</span>
                        </div>
                        <div>
                          <p className="text-white font-medium">{testimonial.name}</p>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Pricing */}
      <ScrollReveal>
        <section id="pricing" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Simple, transparent <span className="gradient-text-accent">pricing</span></h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">No hidden fees. No surprises. Just results.</p>
            </div>

            {/* Website Pricing */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Websites</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {[
                  {
                    name: "Starter",
                    price: "$2,000",
                    period: "build",
                    monthly: "$75/mo",
                    desc: "Perfect for single-location businesses getting started online.",
                    features: ["Up to 5 pages", "Mobile responsive", "Contact form", "Basic SEO", "1 round of revisions"],
                    highlight: false,
                    color: "blue"
                  },
                  {
                    name: "Standard",
                    price: "$4,000",
                    period: "build",
                    monthly: "$100/mo",
                    desc: "For growing businesses that need more pages and features.",
                    features: ["Up to 12 pages", "Booking / scheduling", "Photo gallery", "Google Maps integration", "2 rounds of revisions"],
                    highlight: true,
                    color: "orange"
                  },
                  {
                    name: "Growth",
                    price: "$7,000",
                    period: "build",
                    monthly: "$175/mo",
                    desc: "Full-featured site with e-commerce and advanced functionality.",
                    features: ["Unlimited pages", "E-commerce ready", "Blog / SEO optimization", "Social media integration", "Unlimited revisions"],
                    highlight: false,
                    color: "blue"
                  },
                ].map((tier, i) => (
                  <ScrollReveal key={tier.name} delay={i * 0.1}>
                    <div className={`rounded-2xl p-8 transition-all duration-300 hover:scale-105 flex flex-col h-full ${tier.highlight ? 'border-2 border-orange-500/50 bg-gradient-to-br from-orange-900/20 to-transparent' : 'border border-white/10 bg-gradient-to-br from-gray-900/50 to-transparent'}`}>
                      {tier.highlight && (
                        <div className="text-center mb-4">
                          <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-semibold rounded-full">MOST POPULAR</span>
                        </div>
                      )}
                      <h3 className={`text-xl font-bold mb-2 ${tier.highlight ? 'text-orange-400' : 'text-white'}`}>{tier.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{tier.desc}</p>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-white">{tier.price}</span>
                        <span className="text-gray-500 text-sm ml-1">{tier.period}</span>
                      </div>
                      <div className="mb-4">
                        <span className="text-gray-400 text-sm">Then </span>
                        <span className="text-white font-semibold">{tier.monthly}</span>
                        <span className="text-gray-500 text-sm"> maintenance</span>
                      </div>
                      <ul className="space-y-3 mb-8 flex-grow">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-gray-300 text-sm">
                            <svg className={`w-5 h-5 ${tier.highlight ? 'text-orange-400' : 'text-blue-400'} flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="/contact"
                        className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all hover:scale-105 mt-auto ${
                          tier.highlight
                            ? 'bg-orange-600 hover:bg-orange-500 text-white'
                            : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                        }`}
                      >
                        Get Started
                      </a>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Agent Pricing */}
            <div>
              <h3 className="text-2xl font-bold text-white text-center mb-8">AI Agents</h3>
              <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
                Custom AI assistants that automate your repetitive tasks. Takes orders, sends emails, books appointments, and more — while you sleep.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {[
                  {
                    name: "Agent Starter",
                    price: "$10,000",
                    period: "build",
                    monthly: "$400/mo",
                    desc: "One automated workflow. Perfect for a single repetitive task.",
                    features: ["1 workflow (e.g. order processing)", "Connects 2-3 apps", "Email & Slack notifications", "Weekly check-in call", "48hr support response"],
                    highlight: false,
                    color: "blue"
                  },
                  {
                    name: "Agent Business",
                    price: "$16,000",
                    period: "build",
                    monthly: "$700/mo",
                    desc: "2-3 workflows covering your main operations.",
                    features: ["2-3 connected workflows", "Up to 8 integrations", "Custom training on your data", "Priority support", "Monthly strategy call"],
                    highlight: true,
                    color: "orange"
                  },
                  {
                    name: "Agent Enterprise",
                    price: "$30,000+",
                    period: "build",
                    monthly: "$1,200/mo+",
                    desc: "Full automation suite. Everything your business needs.",
                    features: ["Unlimited workflows", "Unlimited integrations", "Dedicated support", "On-site training", "Custom SLA"],
                    highlight: false,
                    color: "blue"
                  },
                ].map((tier, i) => (
                  <ScrollReveal key={tier.name} delay={i * 0.1}>
                    <div className={`rounded-2xl p-8 transition-all duration-300 hover:scale-105 flex flex-col h-full ${tier.highlight ? 'border-2 border-orange-500/50 bg-gradient-to-br from-orange-900/20 to-transparent' : 'border border-white/10 bg-gradient-to-br from-gray-900/50 to-transparent'}`}>
                      {tier.highlight && (
                        <div className="text-center mb-4">
                          <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-semibold rounded-full">MOST POPULAR</span>
                        </div>
                      )}
                      <h3 className={`text-xl font-bold mb-2 ${tier.highlight ? 'text-orange-400' : 'text-white'}`}>{tier.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{tier.desc}</p>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-white">{tier.price}</span>
                        <span className="text-gray-500 text-sm ml-1">{tier.period}</span>
                      </div>
                      <div className="mb-4">
                        <span className="text-gray-400 text-sm">Then </span>
                        <span className="text-white font-semibold">{tier.monthly}</span>
                        <span className="text-gray-500 text-sm"> maintenance</span>
                      </div>
                      <ul className="space-y-3 mb-8 flex-grow">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-gray-300 text-sm">
                            <svg className={`w-5 h-5 ${tier.highlight ? 'text-orange-400' : 'text-blue-400'} flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="/contact"
                        className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all hover:scale-105 mt-auto ${
                          tier.highlight
                            ? 'bg-orange-600 hover:bg-orange-500 text-white'
                            : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                        }`}
                      >
                        Get Started
                      </a>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              <p className="text-center text-gray-500 text-sm mt-8">
                All prices include hosting, maintenance, and ongoing support. No contracts required.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal>
        <section id="faq" className="py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Frequently asked <span className="gradient-text-accent">questions</span></h2>
            </div>

            <div className="space-y-4">
              {[
                { q: "How long does setup take?", a: "Most automations are up and running within 1-2 weeks." },
                { q: "What tools can you integrate with?", a: "We support 100+ tools including Gmail, Slack, Notion, HubSpot, and more." },
                { q: "What if I need changes later?", a: "Just let us know! The monthly fee includes ongoing adjustments." },
                { q: "Is my data secure?", a: "Absolutely. We use enterprise-grade encryption." },
                { q: "Can I cancel anytime?", a: "Yes, you can cancel with no penalties." },
              ].map((faq, i) => (
                <ScrollReveal key={faq.q} delay={i * 0.1}>
                  <div className="z-30 rounded-xl p-6 transition-all duration-300 group cursor-pointer relative overflow-hidden border border-transparent hover:border-white/10" style={{ background: 'linear-gradient(160deg, #1a1a1a 0%, #0f0f0f 40%, #151515 100%)' }}>
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500/0 md:group-hover:bg-blue-500/50 transition-all duration-300 rounded-l-xl" />
                    <h3 className="text-lg font-semibold text-white md:group-hover:text-blue-400 transition-colors flex items-center gap-3">
                      <AnimatedIcon icon="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" color={i % 2 === 0 ? "blue" : "orange"} className="w-6 h-6" />
                      {faq.q}
                    </h3>
                    <p className="text-gray-400 mt-3 pl-9">{faq.a}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="z-30 rounded-3xl p-12 hover:shadow-[0_0_60px_rgba(59,130,246,0.2)] transition-all duration-500 group relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #1a1a1a 0%, #0f0f0f 40%, #151515 100%)' }}>
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-orange-500/5 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
              {/* Animated rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to <span className="gradient-text-accent">save time</span>?</h2>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">Join hundreds of businesses already benefiting from custom automations.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="/contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-lg transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 text-center">
                    Get Free Consultation
                  </a>
                  <a href="/integrate" className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-xl font-semibold text-lg hover:bg-gray-200 transition-all hover:scale-105 text-center">
                    How It Works
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <ScrollReveal>
        <footer className="py-12 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img src="/logo.png?v=2" alt="Aigentic Automations" className="h-6 w-auto" />
              <span className="text-white text-sm">© 2026 Aigentic Automations</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="mailto:aigenticautomations@gmail.com" className="text-white hover:text-white/80 transition-colors text-sm">Contact</a>
            </div>
          </div>
        </footer>
      </ScrollReveal>
    </div>
  );
}
