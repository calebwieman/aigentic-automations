import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Example Workflows | Aigentic Automations",
  description: "See examples of automations we've built for businesses.",
};

const workflows = [
  {
    title: "Lead Management",
    description: "Automatically capture leads from multiple sources, enrich with data, and route to the right team member.",
    apps: ["Webforms", "HubSpot", "Slack", "Email"],
    timeSaved: "10+ hours/week",
  },
  {
    title: "Customer Support",
    description: "Auto-respond to common support tickets, categorize by urgency, and escalate when needed.",
    apps: ["Zendesk", "Gmail", "Salesforce", "Slack"],
    timeSaved: "15+ hours/week",
  },
  {
    title: "Social Media Scheduling",
    description: "Queue up content across platforms, auto-post at optimal times, and track engagement.",
    apps: ["Buffer", "Twitter", "LinkedIn", "Notion"],
    timeSaved: "5+ hours/week",
  },
  {
    title: "Invoice Processing",
    description: "Extract data from invoices, match with orders, and trigger payments automatically.",
    apps: ["QuickBooks", "Gmail", "Shopify", "Slack"],
    timeSaved: "8+ hours/week",
  },
  {
    title: "Meeting Notes to Tasks",
    description: "After Zoom calls, automatically create tasks in your project tool and email summaries.",
    apps: ["Zoom", "Notion", "Slack", "Gmail"],
    timeSaved: "3+ hours/week",
  },
  {
    title: "Inventory Alerts",
    description: "Monitor stock levels across platforms and reorder when inventory gets low.",
    apps: ["Shopify", "WooCommerce", "Slack", "Email"],
    timeSaved: "4+ hours/week",
  },
];

export default function WorkflowsPage() {
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
          Example <span className="text-blue-500">Workflows</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Here are some automations we&apos;ve built for our clients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workflows.map((workflow) => (
            <div
              key={workflow.title}
              className="p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors bg-gradient-to-br from-gray-900 to-black"
            >
              <h3 className="text-xl font-bold mb-3">{workflow.title}</h3>
              <p className="text-gray-400 mb-4">{workflow.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {workflow.apps.map((app) => (
                  <span
                    key={app}
                    className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300"
                  >
                    {app}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Saves {workflow.timeSaved}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">Want something similar?</p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-colors"
          >
            Tell Us About Your Needs
          </a>
        </div>
      </div>
    </div>
  );
}
