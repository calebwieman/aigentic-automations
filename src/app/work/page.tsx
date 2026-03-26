import { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Work | Aigentic Automations",
  description: "Websites and automation systems we've built for real clients.",
};

const projects = [
  {
    name: "Stillwater Turf and Power",
    category: "Local Service",
    url: "https://stillwater-turf-and-power.vercel.app",
    description: "Lawn care and landscaping services website for Stillwater, OK",
    screenshot: "/work-screenshots/stillwater-turf.png",
    color: "green",
  },
  {
    name: "Plasma Bionics",
    category: "Automation",
    url: "https://plasma-bionics.vercel.app",
    description: "AI-powered shipping automation for e-commerce business",
    screenshot: "/work-screenshots/plasma-bionics.png",
    color: "blue",
  },
  {
    name: "Arvin's Detail Shop",
    category: "Local Service",
    url: "https://arvins-detail-shop.vercel.app",
    description: "Professional auto detailing in Stillwater, OK",
    screenshot: "/work-screenshots/arvins-detail.png",
    color: "orange",
  },
  {
    name: "Outrun Games",
    category: "Client",
    url: "https://outrun-games-gray.vercel.app",
    description: "Gaming community and esports organization",
    screenshot: "/work-screenshots/outrun-games.png",
    color: "pink",
  },
  {
    name: "Asian Massage Spa",
    category: "Local Service",
    url: "https://asian-massage-spa.vercel.app",
    description: "Relaxation and massage therapy services",
    screenshot: "/work-screenshots/asian-massage-spa.png",
    color: "purple",
  },
  {
    name: "GardenGrid",
    category: "Product",
    url: "https://gardengrid-ai.vercel.app",
    description: "AI-powered vertical farming system",
    screenshot: "/work-screenshots/gardengrid.png",
    color: "emerald",
  },
];

const colorMap: Record<string, { border: string; hover: string; badge: string }> = {
  green: {
    border: "hover:border-green-500/60",
    hover: "group-hover:text-green-400",
    badge: "bg-green-500/20 text-green-400 border-green-500/30",
  },
  blue: {
    border: "hover:border-blue-500/60",
    hover: "group-hover:text-blue-400",
    badge: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  orange: {
    border: "hover:border-orange-500/60",
    hover: "group-hover:text-orange-400",
    badge: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  },
  pink: {
    border: "hover:border-pink-500/60",
    hover: "group-hover:text-pink-400",
    badge: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  },
  cyan: {
    border: "hover:border-cyan-500/60",
    hover: "group-hover:text-cyan-400",
    badge: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  },
  purple: {
    border: "hover:border-purple-500/60",
    hover: "group-hover:text-purple-400",
    badge: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  },
  emerald: {
    border: "hover:border-emerald-500/60",
    hover: "group-hover:text-emerald-400",
    badge: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  },
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="w-full px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/logo.png?v=2" alt="Aigentic Automations" className="h-8 w-auto" />
            <span className="text-white font-semibold text-lg">Aigentic Automations</span>
          </a>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="/#features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a>
            <a href="/integrate" className="text-gray-400 hover:text-white transition-colors text-sm">How It Works</a>
            <a href="/work" className="text-white hover:text-white transition-colors text-sm font-medium">Our Work</a>
            <a href="/contact" className="px-4 py-2 bg-white text-black rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text-accent">Work</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Websites and automation systems we've built for real clients. 
            Each project represents a business solving real problems.
          </p>
        </div>

        {/* Projects Grid with Screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => {
            const colors = colorMap[project.color];
            return (
              <ScrollReveal key={project.name} delay={i * 0.1}>
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  {/* Screenshot */}
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gray-900 mb-4">
                    <div className="aspect-[16/9] relative">
                      <img 
                        src={project.screenshot} 
                        alt={project.name}
                        className="w-full h-full object-cover object-top"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                          <span className="text-white font-medium">View Live Site</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full border ${colors.badge} uppercase tracking-wider mb-2 inline-block`}>
                        {project.category}
                      </span>
                      <h3 className={`text-xl font-semibold mb-1 text-white ${colors.hover} transition-colors`}>
                        {project.name}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {project.description}
                      </p>
                    </div>
                    <div className={`flex-shrink-0 ${colors.hover} transition-colors mt-6`}>
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="rounded-3xl p-12 border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Want to be on this list?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              We build websites and automation systems for local businesses. 
              Let's talk about what we can build for you.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold text-lg transition-all hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
