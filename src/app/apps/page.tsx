import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supported Apps | Aigentic Automations",
  description: "Connect your favorite apps and tools with Aigentic Automations.",
};

const apps = [
  { name: "Slack", description: "Team messaging and collaboration" },
  { name: "Gmail", description: "Email client and scheduling" },
  { name: "Notion", description: "Notes and knowledge management" },
  { name: "HubSpot", description: "CRM and marketing automation" },
  { name: "Shopify", description: "E-commerce platform" },
  { name: "Zapier", description: "Workflow automation" },
  { name: "Google", description: "Google Workspace apps" },
  { name: "Salesforce", description: "Enterprise CRM" },
];

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </a>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Supported <span className="text-blue-500">Apps</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Connect your favorite tools and automate your workflow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {apps.map((app) => (
            <div
              key={app.name}
              className="p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors bg-gradient-to-br from-gray-900 to-black"
            >
              <h3 className="text-xl font-bold mb-2">{app.name}</h3>
              <p className="text-gray-400">{app.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Don't see your app?</p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
