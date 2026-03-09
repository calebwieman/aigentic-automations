import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Aigentic Automations",
  description: "See how we've helped businesses save time and grow with automation.",
};

const caseStudies = [
  {
    company: "TechStartup Inc",
    industry: "SaaS",
    challenge: "Manual lead processing was taking 20+ hours per week. Leads were falling through the cracks.",
    solution: "Built an automated lead qualification and routing system that captures leads from webforms, enriches data, scores leads, and routes to the right sales rep.",
    results: [
      "Saved 20 hours/week on lead processing",
      "Lead response time reduced from 4 hours to 5 minutes",
      "30% increase in qualified leads",
    ],
    quote: "We save 20+ hours every week thanks to Aigentic. Our team can finally focus on selling instead of data entry.",
    author: "John D.",
    role: "Founder",
  },
  {
    company: "Plasma Bionics",
    industry: "Healthcare",
    challenge: "Patient appointment scheduling was chaos. Lots of no-shows and double-booking.",
    solution: "Created an intelligent scheduling system with automated reminders, waitlist management, and confirmation workflows.",
    results: [
      "Reduced no-shows by 60%",
      "Saved 15 hours/week on scheduling",
      "Patient satisfaction up 40%",
    ],
    quote: "Finally, an automation solution that doesn't require a developer on staff. They just get it.",
    author: "Sarah M.",
    role: "Office Manager",
  },
  {
    company: "GrowthCo",
    industry: "Marketing Agency",
    challenge: "Social media posting was scattered across multiple tools. No consistency or tracking.",
    solution: "Built a unified content calendar that queues posts, auto-posts at optimal times, and tracks engagement across all platforms.",
    results: [
      "Saved 10 hours/week on social",
      "Engagement increased 45%",
      "Never missed a scheduled post",
    ],
    quote: "The personal support is incredible. They actually care about our success.",
    author: "Mike K.",
    role: "CEO",
  },
];

export default function CaseStudiesPage() {
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
          Case <span className="text-blue-500">Studies</span>
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Real results from real businesses we&apos;ve helped.
        </p>

        <div className="space-y-12">
          {caseStudies.map((study) => (
            <div
              key={study.company}
              className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900 to-black"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold">{study.company}</h3>
                  <span className="text-gray-400">{study.industry}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Challenge</h4>
                  <p className="text-gray-300">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-blue-500 uppercase mb-2">Solution</h4>
                  <p className="text-gray-300">{study.solution}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-green-500 uppercase mb-3">Results</h4>
                <ul className="space-y-2">
                  {study.results.map((result, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-lg text-gray-300 italic mb-4">&quot;{study.quote}&quot;</p>
                <p className="text-gray-500">
                  — {study.author}, <span className="text-gray-400">{study.role}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">Want similar results for your business?</p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-colors"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
