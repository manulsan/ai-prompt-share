import Link from "next/link";
import {
  Bot,
  ArrowLeft,
  RefreshCw,
  TrendingUp,
  MessageCircle,
} from "lucide-react";

export default function IterateRefineGuide() {
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
          <Bot className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4 gradient-heading">
            Iterate & Refine
          </h1>
          <p className="text-xl text-gray-400">
            The first response is just the beginning—learn to guide AI toward
            perfection
          </p>
        </div>

        {/* Why Iteration Matters */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Iteration Matters</h2>
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-800/30 rounded-lg p-6">
            <p className="text-gray-300 mb-4">
              The best AI-generated content rarely comes from a single prompt.
              Think of AI as a collaborative partner in a conversation, not a
              vending machine where you press a button and get exactly what you
              want.
            </p>
            <p className="text-gray-300">
              Professional writers don't nail their first draft. Artists sketch
              and refine. Developers iterate on code. The same principle applies
              to AI prompting—the magic happens in the refinement process.
            </p>
          </div>
        </section>

        {/* The Iteration Mindset */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <RefreshCw className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold">The Iteration Mindset</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0d1117] border border-green-800/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-green-400">
                ✓ Effective Approach
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Start with a good baseline prompt</li>
                <li>• Review the response critically</li>
                <li>• Identify what works and what doesn't</li>
                <li>• Request specific improvements</li>
                <li>• Build on what's good, fix what isn't</li>
                <li>• Repeat until satisfied</li>
              </ul>
            </div>

            <div className="bg-[#0d1117] border border-red-800/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-red-400">
                ✗ Ineffective Approach
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Expect perfection on first try</li>
                <li>• Accept mediocre results</li>
                <li>• Give up after one attempt</li>
                <li>• Start completely over each time</li>
                <li>• Make vague improvement requests</li>
                <li>• Don't provide feedback</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Iteration Strategies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            5 Powerful Iteration Strategies
          </h2>

          <div className="space-y-6">
            {/* Strategy 1 */}
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                1. The Refinement Chain
              </h3>
              <p className="text-gray-400 mb-4">
                Build on the previous response by requesting specific
                improvements or changes.
              </p>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 space-y-3 text-sm">
                <div>
                  <p className="text-gray-400">→ Initial prompt:</p>
                  <p className="text-blue-300">
                    "Write a product description for wireless earbuds"
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">→ Refine tone:</p>
                  <p className="text-blue-300">
                    "Make it more exciting and use active verbs"
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">→ Add specifics:</p>
                  <p className="text-blue-300">
                    "Include technical specs: 30-hour battery, ANC, IPX7
                    waterproof"
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">→ Adjust length:</p>
                  <p className="text-blue-300">
                    "Condense to 100 words without losing key features"
                  </p>
                </div>
              </div>
            </div>

            {/* Strategy 2 */}
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                2. The Expansion Method
              </h3>
              <p className="text-gray-400 mb-4">
                Start with a brief response, then ask to expand specific parts
                that need more detail.
              </p>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 space-y-3 text-sm">
                <div>
                  <p className="text-gray-400">→ Start broad:</p>
                  <p className="text-blue-300">
                    "Outline a blog post about remote work productivity"
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">→ Expand section:</p>
                  <p className="text-blue-300">
                    "Expand the 'Time Management' section with 5 specific
                    techniques"
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">→ Add examples:</p>
                  <p className="text-blue-300">
                    "For each technique, add a real-world example"
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">→ Enhance depth:</p>
                  <p className="text-blue-300">
                    "Include potential challenges and how to overcome them"
                  </p>
                </div>
              </div>
            </div>

            {/* Strategy 3 */}
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-400">
                3. The Comparative Refinement
              </h3>
              <p className="text-gray-400 mb-4">
                Ask for multiple versions, then cherry-pick and combine the best
                parts.
              </p>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 space-y-3 text-sm">
                <div>
                  <p className="text-gray-400">→ Get variations:</p>
                  <p className="text-blue-300">
                    "Write 3 different email subject lines for this campaign"
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">→ Analyze:</p>
                  <p className="text-blue-300">
                    "I like the urgency in #1 and the curiosity in #3. Combine
                    them"
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">→ Refine further:</p>
                  <p className="text-blue-300">
                    "Make it shorter and add an emoji"
                  </p>
                </div>
              </div>
            </div>

            {/* Strategy 4 */}
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">
                4. The Critique-and-Fix Method
              </h3>
              <p className="text-gray-400 mb-4">
                Point out specific issues and ask for targeted fixes.
              </p>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 space-y-3 text-sm">
                <div>
                  <p className="text-gray-400">→ Identify issues:</p>
                  <p className="text-blue-300">
                    "This code works but it's not efficient. The nested loops
                    cause O(n²) complexity"
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">→ Request fix:</p>
                  <p className="text-blue-300">
                    "Rewrite using a hash map to achieve O(n) complexity"
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">→ Verify:</p>
                  <p className="text-blue-300">
                    "Explain why this is more efficient and add time complexity
                    comments"
                  </p>
                </div>
              </div>
            </div>

            {/* Strategy 5 */}
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-pink-400">
                5. The Perspective Shift
              </h3>
              <p className="text-gray-400 mb-4">
                Ask the AI to approach the same content from a different angle
                or viewpoint.
              </p>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 space-y-3 text-sm">
                <div>
                  <p className="text-gray-400">→ Original angle:</p>
                  <p className="text-blue-300">
                    "Explain benefits of meditation"
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">→ Shift perspective:</p>
                  <p className="text-blue-300">
                    "Rewrite from the perspective of a skeptical scientist
                    citing research"
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">→ Another shift:</p>
                  <p className="text-blue-300">
                    "Now explain it to a busy executive who thinks they don't
                    have time"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Iteration Example */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl font-bold">Real Iteration in Action</h2>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-800/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              Example: Creating a Landing Page Headline
            </h3>

            <div className="space-y-4">
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-gray-400 text-sm mb-2">Prompt 1:</p>
                <p className="text-blue-300 text-sm mb-3">
                  "Write a headline for a project management SaaS"
                </p>
                <p className="text-gray-400 text-sm mb-2">Response:</p>
                <p className="text-gray-300 text-sm">
                  "Manage Your Projects Efficiently"
                </p>
                <p className="text-yellow-400 text-xs mt-2">
                  💭 Too generic, not compelling
                </p>
              </div>

              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-gray-400 text-sm mb-2">Prompt 2:</p>
                <p className="text-blue-300 text-sm mb-3">
                  "Make it more specific to remote teams and emphasize the
                  collaboration aspect"
                </p>
                <p className="text-gray-400 text-sm mb-2">Response:</p>
                <p className="text-gray-300 text-sm">
                  "The Collaboration Hub for Remote Teams"
                </p>
                <p className="text-yellow-400 text-xs mt-2">
                  💭 Better, but still not unique
                </p>
              </div>

              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-gray-400 text-sm mb-2">Prompt 3:</p>
                <p className="text-blue-300 text-sm mb-3">
                  "Focus on the pain point: too many tools causing chaos. Make
                  it benefit-driven"
                </p>
                <p className="text-gray-400 text-sm mb-2">Response:</p>
                <p className="text-gray-300 text-sm">
                  "Replace 10 Tools With One. Keep Your Remote Team in Sync"
                </p>
                <p className="text-yellow-400 text-xs mt-2">
                  💭 Much better! Has a clear benefit
                </p>
              </div>

              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-gray-400 text-sm mb-2">Prompt 4:</p>
                <p className="text-blue-300 text-sm mb-3">
                  "Make the first part punchier and add emotional appeal"
                </p>
                <p className="text-gray-400 text-sm mb-2">Response:</p>
                <p className="text-green-300 text-sm font-semibold">
                  "Stop the Tool Chaos. Finally, One Platform Your Team Will
                  Actually Use"
                </p>
                <p className="text-green-400 text-xs mt-2">
                  ✓ Perfect! Clear pain point, emotional resonance, and benefit
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When to Stop Iterating */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">When to Stop Iterating</h2>
          <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
            <p className="text-gray-400 mb-4">You've iterated enough when:</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>The output meets your core requirements and goals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>You've addressed all major issues and concerns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Further changes would be minor tweaks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>You're starting to go in circles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>The result is "good enough" for your use case</span>
              </li>
            </ul>
            <p className="text-yellow-400 text-sm mt-4">
              💡 Remember: Perfection is the enemy of progress. Iterate until
              it's useful, not until it's perfect.
            </p>
          </div>
        </section>

        {/* Pro Tips */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-orange-400" />
            <h2 className="text-3xl font-bold">
              Pro Tips for Effective Iteration
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-800/30 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-blue-400">
                1. Be Specific in Feedback
              </h3>
              <p className="text-gray-400 text-sm">
                Instead of "make it better," say "make the tone more
                professional" or "add 3 concrete examples"
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-800/30 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-purple-400">
                2. Reference What Works
              </h3>
              <p className="text-gray-400 text-sm">
                "Keep the structure from version 2, but use the tone from
                version 3" helps maintain good elements
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-800/30 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-green-400">
                3. One Change at a Time
              </h3>
              <p className="text-gray-400 text-sm">
                Making multiple changes at once makes it hard to know what
                worked. Iterate systematically
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-800/30 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-yellow-400">
                4. Save Good Versions
              </h3>
              <p className="text-gray-400 text-sm">
                If a version is pretty good, save it before iterating further.
                You might want to go back to it
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-900/20 to-pink-900/20 border border-red-800/30 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-red-400">
                5. Know When to Restart
              </h3>
              <p className="text-gray-400 text-sm">
                If you're 5+ iterations in and still unhappy, consider starting
                fresh with a better initial prompt
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-800/30 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-pink-400">
                6. Use Comparison Prompts
              </h3>
              <p className="text-gray-400 text-sm">
                "Give me 3 versions" lets you see different approaches and pick
                the best direction
              </p>
            </div>
          </div>
        </section>

        {/* Practice Exercise */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practice Exercise</h2>
          <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-800/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              Challenge: Iterate on This Response
            </h3>
            <div className="bg-[#161b22] border border-[#30363d] rounded p-4 mb-4">
              <p className="text-gray-400 text-sm mb-2">
                Initial Prompt: "Write an About Us page for a coffee shop"
              </p>
              <p className="text-gray-300 text-sm mb-4">
                Response: "Welcome to our coffee shop! We serve great coffee and
                pastries in a cozy atmosphere. Come visit us today!"
              </p>
              <p className="text-yellow-400 text-sm">
                🎯 Your Task: Create 5 iteration prompts to improve this,
                addressing: 1) Unique story/origin, 2) Specific offerings, 3)
                Target audience, 4) Brand personality, 5) Call to action
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-8 border border-green-800/30 text-center">
          <h3 className="text-2xl font-bold mb-4">Practice Iteration Skills</h3>
          <p className="text-gray-400 mb-6">
            See how others refine their prompts in the community
          </p>
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
          >
            Browse Prompts
          </Link>
        </div>
      </div>
    </div>
  );
}
