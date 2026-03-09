import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sample Designs | Aigentic Automations",
  description: "See sample automation designs and workflows we've created for clients.",
};

const designs = [
  {
    title: "E-commerce Order Flow",
    description: "Complete order processing automation from purchase to delivery.",
    steps: [
      "Order received from Shopify",
      "Send confirmation email",
      "Check inventory availability",
      "Forward to fulfillment team",
      "Update inventory in real-time",
      "Send shipping notification",
    ],
  },
  {
    title: "Lead Qualification Pipeline",
    description: "Automatically qualify and route leads to the right sales rep.",
    steps: [
      "Lead enters from website form",
      "Enrich data with company info",
      "Score based on criteria",
      "Route to regional sales rep",
      "Create deal in CRM",
      "Schedule follow-up task",
    ],
  },
  {
    title: "Support Ticket Lifecycle",
    description: "Intelligent ticket handling with automatic escalation.",
    steps: [
      "Ticket created in Zendesk",
      "Categorize by topic",
      "Check knowledge base for answer",
      "Send auto-response if match found",
      "Escalate if no response in 24h",
      "Close resolved tickets weekly",
    ],
  },
  {
    title: "Content Publishing Workflow",
    description: "Streamline your content calendar from creation to publish.",
    steps: [
      "Content drafted in Notion",
      "Send for team review",
      "Incorporate feedback",
      "Schedule for optimal posting time",
      "Publish across platforms",
      "Track engagement metrics",
    ],
  },
];

export default function DesignsPage() {
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
          Sample <span className="text-blue-500">Designs</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Before we build, we design. Here&apos;s what our planning process looks like.
        </p>

        <div className="space-y-8">
          {designs.map((design) => (
            <div
              key={design.title}
              className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900 to-black"
            >
              <h3 className="text-2xl font-bold mb-3">{design.title}</h3>
              <p className="text-gray-400 mb-6">{design.description}</p>
              
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-blue-500/30" />
                <div className="space-y-4">
                  {design.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-4 pl-10 relative">
                      <div className="absolute left-2 w-4 h-4 rounded-full bg-blue-500/20 border-2 border-blue-500" />
                      <span className="text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">Ready to design your automation?</p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
}
