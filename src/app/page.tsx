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
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/logo.png?v=2" alt="Aigentic Automations" className="h-8 w-auto" />
            <span className="text-white font-semibold text-lg">Aigentic Automations</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a>
            <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">How it Works</a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</a>
            <a href="#faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</a>
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
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-lg transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105">
                Start Building Free
              </button>
              <button className="px-8 py-4 glass text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all hover:scale-105">
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
                { title: "Visual Workflow Builder", desc: "Build complex automations with our drag-and-drop visual builder.", color: "blue", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                { title: "24/7 Running", desc: "Your automations work around the clock.", color: "orange", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                { title: "Enterprise Security", desc: "Bank-level encryption keeps your data safe.", color: "green", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                { title: "100+ Integrations", desc: "Connect with Slack, Gmail, Notion, and more.", color: "purple", icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" },
                { title: "Real-time Analytics", desc: "Track performance and see results.", color: "pink", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
                { title: "Easy Setup", desc: "We build everything for you. No coding needed.", color: "cyan", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              ].map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 0.1}>
                  <TiltCard>
                    <div className="glass rounded-2xl p-8 h-56 hover:bg-white/5 transition-all duration-300 group">
                      <div className={`w-12 h-12 rounded-xl bg-${feature.color}-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <svg className={`w-6 h-6 text-${feature.color}-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                      <p className="text-gray-400">{feature.desc}</p>
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
        <section id="how-it-works" className="py-24 px-6 bg-white/[0.02]">
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
                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                      <span className="text-3xl font-bold text-white/80">{step.num}</span>
                    </div>
                    <h3 className={`text-xl font-semibold mb-3 text-white ${step.hover !== 'none' ? `group-hover:text-${step.hover}-400` : ''} transition-colors`}>{step.title}</h3>
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
                { title: "Personal Support", desc: "Direct access. No chatbots.", color: "green", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
                { title: "Proven Results", desc: "Join businesses saving hours.", color: "purple", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <TiltCard>
                    <div className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 group">
                      <div className={`w-12 h-12 rounded-xl bg-${item.color}-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <svg className={`w-6 h-6 text-${item.color}-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                        </svg>
                      </div>
                      <h3 className={`text-lg font-semibold mb-2 text-white group-hover:text-${item.color}-400 transition-colors`}>{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              ))}
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
              {[
                { quote: "We save 20+ hours every week thanks to Aigentic.", name: "John D.", role: "Founder, TechStartup", color: "blue" },
                { quote: "Finally, an automation solution that doesn't require a developer.", name: "Sarah M.", role: "Owner, LocalBiz", color: "orange" },
                { quote: "The personal support is incredible. They actually care.", name: "Mike K.", role: "CEO, GrowthCo", color: "green" },
              ].map((testimonial, i) => (
                <ScrollReveal key={testimonial.name} delay={i * 0.15}>
                  <TiltCard>
                    <div className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 group">
                      <p className="text-gray-300 mb-4 group-hover:text-white transition-colors">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full bg-${testimonial.color}-500/30 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <span className="text-white font-semibold">{testimonial.name.split(" ").map(n => n[0]).join("")}</span>
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
              <h2 className="text-4xl font-bold mb-4">Simple, <span className="gradient-text-accent">transparent</span> pricing</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">One-time setup fee + monthly maintenance.</p>
            </div>

            <ScrollReveal>
              <div className="max-w-2xl mx-auto">
                <TiltCard>
                  <div className="glass rounded-2xl p-8 border-2 border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 group">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Custom Automation Package</h3>
                      <p className="text-gray-400">Tailored to your specific business needs</p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mb-8">
                      <div className="text-center p-4 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                        <p className="text-gray-500 text-sm mb-1">One-time Setup</p>
                        <p className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">$500-2,000</p>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                        <p className="text-gray-500 text-sm mb-1">Monthly Fee</p>
                        <p className="text-3xl font-bold text-white group-hover:text-orange-400 transition-colors">$99-299</p>
                      </div>
                    </div>

                    <div className="text-center">
                      <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-lg transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105">
                        Request a Quote
                      </button>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </ScrollReveal>
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
              {[
                { q: "How long does setup take?", a: "Most automations are up and running within 1-2 weeks." },
                { q: "What tools can you integrate with?", a: "We support 100+ tools including Gmail, Slack, Notion, HubSpot, and more." },
                { q: "What if I need changes later?", a: "Just let us know! The monthly fee includes ongoing adjustments." },
                { q: "Is my data secure?", a: "Absolutely. We use enterprise-grade encryption." },
                { q: "Can I cancel anytime?", a: "Yes, you can cancel with no penalties." },
              ].map((faq, i) => (
                <ScrollReveal key={faq.q} delay={i * 0.1}>
                  <div className="glass rounded-xl p-6 hover:bg-white/5 transition-all duration-300 group cursor-pointer">
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors flex items-center justify-between">
                      {faq.q}
                      <svg className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </h3>
                    <p className="text-gray-400 mt-3">{faq.a}</p>
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
            <div className="glass rounded-3xl p-12 hover:shadow-[0_0_60px_rgba(59,130,246,0.2)] transition-all duration-500 group">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to <span className="gradient-text-accent">save time</span>?</h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">Join hundreds of businesses already benefiting from custom automations.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-lg transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105">
                  Get Free Consultation
                </button>
                <button className="px-8 py-4 glass text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all hover:scale-105">
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
              <img src="/logo.png?v=2" alt="Aigentic Automations" className="h-6 w-auto" />
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
