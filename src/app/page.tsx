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
            <a href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm">
              FAQ
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

            {/* Bento Grid - 6 balanced cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
              
              {/* Card 1: Visual Workflow Builder */}
              <TiltCard className="md:col-span-2">
                <div className="glass rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Visual Workflow Builder
                  </h3>
                  <p className="text-gray-400">
                    Build complex automations with our drag-and-drop visual builder. No coding required.
                  </p>
                </div>
              </TiltCard>

              {/* Card 2: 24/7 Running */}
              <TiltCard>
                <div className="glass rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    24/7 Running
                  </h3>
                  <p className="text-gray-400">
                    Your automations work around the clock, even when you're sleeping.
                  </p>
                </div>
              </TiltCard>

              {/* Card 3: Enterprise Security */}
              <TiltCard>
                <div className="glass rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Enterprise Security
                  </h3>
                  <p className="text-gray-400">
                    Bank-level encryption keeps your data safe and secure.
                  </p>
                </div>
              </TiltCard>

              {/* Card 4: 100+ Integrations */}
              <TiltCard className="md:col-span-2">
                <div className="glass rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    100+ Integrations
                  </h3>
                  <p className="text-gray-400">
                    Connect with Slack, Gmail, Notion, HubSpot, Google Sheets, and more.
                  </p>
                </div>
              </TiltCard>

              {/* Card 5: Smart Triggers */}
              <TiltCard>
                <div className="glass rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Smart Triggers
                  </h3>
                  <p className="text-gray-400">
                    Automations that respond to events, schedules, or conditions you set.
                  </p>
                </div>
              </TiltCard>

              {/* Card 6: Real-time Analytics */}
              <TiltCard className="md:col-span-3">
                <div className="glass rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Real-time Analytics
                  </h3>
                  <p className="text-gray-400">
                    Track performance and see exactly what your automations are accomplishing.
                  </p>
                </div>
              </TiltCard>

            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* How It Works */}
      <ScrollReveal>
        <section id="how-it-works" className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                How it <span className="gradient-text-accent">works</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                We set everything up for you. Just tell us what you need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-400">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Tell Us What You Need</h3>
                <p className="text-gray-400">Share your business processes and pain points. We'll listen and understand your workflow.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-orange-400">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">We Build It For You</h3>
                <p className="text-gray-400">Our team creates custom automations tailored to your specific business needs.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-green-400">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Watch It Run</h3>
                <p className="text-gray-400">Your automations start working immediately. Sit back and enjoy your free time.</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Why Choose Us */}
      <ScrollReveal>
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Why <span className="gradient-text-accent">choose us</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">We're not just another automation tool. We're your partner in efficiency.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Affordable</h3>
                <p className="text-gray-400 text-sm">A fraction of the cost of hiring an employee or using enterprise tools.</p>
              </div>

              <div className="glass rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Fast Setup</h3>
                <p className="text-gray-400 text-sm">We build everything for you. No learning curve, no technical knowledge needed.</p>
              </div>

              <div className="glass rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Personal Support</h3>
                <p className="text-gray-400 text-sm">Direct access to our team. No chatbots, no waiting in queue.</p>
              </div>

              <div className="glass rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Proven Results</h3>
                <p className="text-gray-400 text-sm">Join hundreds of businesses saving hours every week.</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials */}
      <ScrollReveal>
        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Loved by <span className="gradient-text-accent">businesses</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass rounded-2xl p-6">
                <p className="text-gray-300 mb-4">"We save 20+ hours every week thanks to Aigentic. The team set everything up and it just works."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/30 flex items-center justify-center"><span className="text-white font-semibold">JD</span></div>
                  <div><p className="text-white font-medium">John D.</p><p className="text-gray-500 text-sm">Founder, TechStartup</p></div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <p className="text-gray-300 mb-4">"Finally, an automation solution that doesn't require a developer. They built exactly what we needed."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500/30 flex items-center justify-center"><span className="text-white font-semibold">SM</span></div>
                  <div><p className="text-white font-medium">Sarah M.</p><p className="text-gray-500 text-sm">Owner, LocalBiz</p></div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <p className="text-gray-300 mb-4">"The personal support is incredible. They actually care about helping our business succeed."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/30 flex items-center justify-center"><span className="text-white font-semibold">MK</span></div>
                  <div><p className="text-white font-medium">Mike K.</p><p className="text-gray-500 text-sm">CEO, GrowthCo</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Pricing */}
      <ScrollReveal>
        <section id="pricing" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Simple, <span className="gradient-text-accent">transparent</span> pricing</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">One-time setup fee + monthly maintenance. No hidden costs.</p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="glass rounded-2xl p-8 border-2 border-blue-500/30">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Custom Automation Package</h3>
                  <p className="text-gray-400">Tailored to your specific business needs</p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="text-center">
                    <p className="text-gray-500 text-sm mb-1">One-time Setup</p>
                    <p className="text-3xl font-bold text-white">$500-2,000</p>
                    <p className="text-gray-500 text-xs mt-1">Depends on complexity</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-500 text-sm mb-1">Monthly Fee</p>
                    <p className="text-3xl font-bold text-white">$99-299</p>
                    <p className="text-gray-500 text-xs mt-1">Unlimited automations</p>
                  </div>
                </div>

                <div className="text-center">
                  <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-lg transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] mb-4">
                    Request a Quote
                  </button>
                  <p className="text-gray-500 text-sm">Free consultation to discuss your needs</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal>
        <section id="faq" className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Frequently asked <span className="gradient-text-accent">questions</span></h2>
            </div>

            <div className="space-y-4">
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">How long does setup take?</h3>
                <p className="text-gray-400">Most automations are up and running within 1-2 weeks. Complex systems may take 3-4 weeks.</p>
              </div>

              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">What tools can you integrate with?</h3>
                <p className="text-gray-400">We support 100+ tools including Gmail, Slack, Notion, HubSpot, Salesforce, Google Sheets, and many more.</p>
              </div>

              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">What if I need changes later?</h3>
                <p className="text-gray-400">Just let us know! The monthly fee includes ongoing adjustments and new automations.</p>
              </div>

              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Is my data secure?</h3>
                <p className="text-gray-400">Absolutely. We use enterprise-grade encryption and follow best practices for data security.</p>
              </div>

              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Can I cancel anytime?</h3>
                <p className="text-gray-400">Yes, you can cancel your monthly plan at any time with no penalties or hidden fees.</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to <span className="gradient-text-accent">save time</span>?</h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">Join hundreds of businesses already benefiting from custom automations. Get your free consultation today.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-lg transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                  Get Free Consultation
                </button>
                <button className="px-8 py-4 glass text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all">
                  See Examples
                </button>
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
              <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs">A</span>
              </div>
              <span className="text-gray-400 text-sm">© 2026 Aigentic Automations</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Contact</a>
            </div>
          </div>
        </footer>
      </ScrollReveal>
    </div>
  );
}
