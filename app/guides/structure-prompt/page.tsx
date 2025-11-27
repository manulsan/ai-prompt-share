import Link from "next/link";
import { ArrowLeft, Layout, Package, FileCode } from "lucide-react";

export default function StructurePromptGuide() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <span className="text-6xl mb-4 inline-block">📝</span>
          <h1 className="text-5xl font-bold mb-4 gradient-heading">
            Structure Your Prompt
          </h1>
          <p className="text-xl text-gray-400">
            Well-organized prompts lead to well-organized responses
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Structure Matters</h2>
          <div className="bg-gradient-to-br from-red-900/20 to-pink-900/20 border border-red-800/30 rounded-lg p-6">
            <p className="text-gray-300 mb-4">
              Imagine giving someone directions while jumping between topics:
              "Turn left... oh by the way, don't speed... so after the left
              turn... actually, bring your wallet for tolls..." Confusing,
              right?
            </p>
            <p className="text-gray-300">
              Structured prompts organize information logically, making it
              easier for AI to understand your needs and respond appropriately.
              Think of structure as the scaffolding that supports your prompt.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Layout className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold">The CTFC Framework</h2>
          </div>
          <p className="text-gray-400 mb-6">
            A universal structure that works for almost any prompt:
          </p>

          <div className="space-y-6">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                C = Context
              </h3>
              <p className="text-gray-400 mb-3">
                Background information, situation, your role, audience
              </p>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-green-300 text-sm">
                  "I'm a product manager at a SaaS startup with 50 employees.
                  We're preparing our Q4 roadmap presentation for stakeholders
                  who are non-technical executives focused on ROI."
                </p>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">
                T = Task
              </h3>
              <p className="text-gray-400 mb-3">
                Specific action you want AI to perform
              </p>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-green-300 text-sm">
                  "Create a slide outline for a 15-minute presentation that
                  explains our roadmap priorities and justifies each feature in
                  terms of business impact."
                </p>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-green-400">
                F = Format
              </h3>
              <p className="text-gray-400 mb-3">
                How you want the output structured
              </p>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-green-300 text-sm">
                  "Format as: Slide number, slide title, 3-4 bullet points per
                  slide, suggested visual (chart/diagram/screenshot)."
                </p>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-pink-400">
                C = Constraints
              </h3>
              <p className="text-gray-400 mb-3">
                Limitations, requirements, things to avoid
              </p>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-green-300 text-sm">
                  "Keep technical jargon to a minimum. Focus on business
                  outcomes (revenue, retention, efficiency). Maximum 8 slides."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Complete CTFC Example</h2>
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-lg p-6">
            <div className="bg-[#161b22] border border-[#30363d] rounded p-6 space-y-4">
              <div>
                <p className="text-blue-400 font-semibold mb-2">CONTEXT:</p>
                <p className="text-gray-300 text-sm">
                  I'm a freelance web developer creating a portfolio website to
                  attract small business clients. My specialty is building
                  WordPress sites for local businesses (restaurants, shops,
                  services). I have 3 years of experience and 12 completed
                  projects.
                </p>
              </div>
              <div>
                <p className="text-purple-400 font-semibold mb-2">TASK:</p>
                <p className="text-gray-300 text-sm">
                  Write copy for my portfolio homepage that positions me as the
                  go-to developer for small businesses and encourages visitors
                  to book a free consultation.
                </p>
              </div>
              <div>
                <p className="text-green-400 font-semibold mb-2">FORMAT:</p>
                <p className="text-gray-300 text-sm">
                  Include: 1) Hero headline and subheadline, 2) "Why Choose Me"
                  section with 4 benefits, 3) Social proof snippet, 4) Clear CTA
                  button text.
                </p>
              </div>
              <div>
                <p className="text-pink-400 font-semibold mb-2">CONSTRAINTS:</p>
                <p className="text-gray-300 text-sm">
                  Keep it conversational and approachable—no corporate jargon.
                  Focus on solving pain points (website stress, technical
                  confusion, wasted money on bad sites). Under 250 words total.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Package className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl font-bold">Alternative Structures</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">
                Problem-Solution-Outcome (PSO)
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 space-y-3 text-sm">
                <div>
                  <p className="text-gray-400">Problem:</p>
                  <p className="text-gray-300">
                    "Our mobile app has a 60% drop-off rate during onboarding"
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Solution Needed:</p>
                  <p className="text-gray-300">
                    "Redesign the onboarding flow to be more engaging and reduce
                    steps"
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Desired Outcome:</p>
                  <p className="text-gray-300">
                    "Reduce drop-off to under 30% and increase user completion"
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                Role-Task-Format (RTF)
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 space-y-3 text-sm">
                <div>
                  <p className="text-gray-400">Role:</p>
                  <p className="text-gray-300">
                    "Act as a senior UX writer at a fintech company"
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Task:</p>
                  <p className="text-gray-300">
                    "Write error messages for failed payment transactions"
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Format:</p>
                  <p className="text-gray-300">
                    "Provide 5 scenarios with user-friendly error copy for each"
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-400">
                Input-Process-Output (IPO)
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 space-y-3 text-sm">
                <div>
                  <p className="text-gray-400">Input:</p>
                  <p className="text-gray-300">
                    "Here's my rough draft of a cover letter [paste text]"
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Process:</p>
                  <p className="text-gray-300">
                    "Review for clarity, fix grammar, strengthen achievements,
                    match tone to job description"
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Output:</p>
                  <p className="text-gray-300">
                    "Provide revised version with a brief explanation of major
                    changes"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FileCode className="w-8 h-8 text-orange-400" />
            <h2 className="text-3xl font-bold">Structuring Complex Prompts</h2>
          </div>

          <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              Use Markdown for Clarity
            </h3>
            <div className="bg-[#161b22] border border-[#30363d] rounded p-4 font-mono text-xs">
              <p className="text-green-300">## Context</p>
              <p className="text-gray-400">I'm launching an online course...</p>
              <p className="text-green-300 mt-3">## Task</p>
              <p className="text-gray-400">
                Create a marketing email sequence...
              </p>
              <p className="text-green-300 mt-3">## Requirements</p>
              <p className="text-gray-400">- 3 emails spaced 2 days apart</p>
              <p className="text-gray-400">- Each under 200 words</p>
              <p className="text-gray-400">- Progressive disclosure strategy</p>
              <p className="text-green-300 mt-3">## Constraints</p>
              <p className="text-gray-400">- No aggressive sales language</p>
              <p className="text-gray-400">- Include social proof</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Before & After Examples</h2>

          <div className="space-y-6">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-red-400">
                ❌ Unstructured (Confusing)
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-red-300 text-sm">
                  "Write me a blog post about productivity and make it SEO
                  optimized, I want it to be around 1000 words but keep it
                  engaging and use examples, my audience is entrepreneurs but
                  also talk about tools like Notion and Asana, oh and make sure
                  to include actionable tips."
                </p>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-green-400">
                ✅ Structured (Clear)
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 space-y-3 text-sm">
                <p className="text-green-300">
                  **CONTEXT:** Writing for solopreneurs and small business
                  owners (non-technical) who struggle with productivity
                </p>
                <p className="text-green-300">
                  **TASK:** Write an SEO-optimized blog post about productivity
                  systems
                </p>
                <p className="text-green-300">
                  **FORMAT:** 1000 words | Introduction, 3 main sections,
                  conclusion | Include 2 tool recommendations per section
                </p>
                <p className="text-green-300">
                  **CONSTRAINTS:** Keep language simple | Focus on Notion and
                  Asana | Include 5 actionable tips total | Engaging tone with
                  real examples
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Structure Checklist</h2>
          <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
            <p className="text-gray-400 mb-4">
              Before sending your prompt, verify:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">□</span>
                <span className="text-gray-300">
                  Clear sections with labels or headers
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">□</span>
                <span className="text-gray-300">
                  Logical flow (context → task → specifics)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">□</span>
                <span className="text-gray-300">
                  All key information is included
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">□</span>
                <span className="text-gray-300">
                  No contradictions or unclear instructions
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">□</span>
                <span className="text-gray-300">
                  Easy to scan and understand quickly
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practice Exercise</h2>
          <div className="bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-800/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              Restructure This Messy Prompt
            </h3>
            <div className="bg-[#161b22] border border-[#30363d] rounded p-4 mb-4">
              <p className="text-red-300 text-sm">
                "I need help with my resume, I'm applying for software jobs and
                have 5 years experience mostly in JavaScript and React, make it
                look professional and include my GitHub projects, keep it to one
                page, I also know Python and SQL and I worked at 3 companies,
                focus on achievements not just duties."
              </p>
            </div>
            <p className="text-gray-400 text-sm">
              Try restructuring this using the CTFC framework!
            </p>
          </div>
        </section>

        <div className="bg-gradient-to-r from-red-900/20 to-pink-900/20 rounded-xl p-8 border border-red-800/30 text-center">
          <h3 className="text-2xl font-bold mb-4">
            See Well-Structured Prompts
          </h3>
          <p className="text-gray-400 mb-6">
            Learn from prompts with excellent organization
          </p>
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition"
          >
            Browse Prompts
          </Link>
        </div>
      </div>
    </div>
  );
}
