import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process | Aigentic Automations",
  description: "See how we build your custom automations from start to finish.",
};

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We hop on a call to understand your business, pain points, and goals. We ask the right questions to uncover opportunities.",
    duration: "30 minutes",
  },
  {
    number: "02",
    title: "Analysis & Planning",
    description: "We map out your current processes and identify the best automation opportunities. You'll receive a detailed proposal.",
    duration: "1-2 days",
  },
  {
    number: "03",
    title: "Design Approval",
    description: "We present a visual flowchart of how your automation will work. You review and approve before we build anything.",
    duration: "1 day",
  },
  {
    number: "04",
    title: "Development",
    description: "Our team builds your custom automation, testing thoroughly at each step to ensure everything works smoothly.",
    duration: "5-10 days",
  },
  {
    number: "05",
    title: "Testing & Refinement",
    description: "We run the automation in a test environment with you, making adjustments until it's perfect.",
    duration: "2-3 days",
  },
  {
    number: "06",
    title: "Launch & Support",
    description: "Go live! We monitor everything closely and provide ongoing support. Changes are included in your monthly fee.",
    duration: "Ongoing",
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        <a
          href="/integrate"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to How It Works
        </a>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our <span className="text-blue-500">Process</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          From idea to execution, here&apos;s how we bring your automations to life.
        </p>

        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors bg-gradient-to-br from-gray-900 to-black"
            >
              <div className="flex-shrink-0">
                <span className="text-4xl font-bold text-blue-500">{step.number}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 mb-3">{step.description}</p>
                <span className="inline-block px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400">
                  {step.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-900/30 to-orange-900/30 border border-blue-500/30 text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to get started?</h3>
          <p className="text-gray-400 mb-6">
            Most projects go from idea to live in under 2 weeks.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-colors"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </div>
  );
}
