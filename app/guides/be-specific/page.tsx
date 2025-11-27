import Link from "next/link";
import {
  Target,
  ArrowLeft,
  CheckCircle,
  XCircle,
  Lightbulb,
  BookOpen,
} from "lucide-react";

export default function BeSpecificGuide() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <Target className="w-16 h-16 text-blue-400 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4 gradient-heading">
            Be Specific
          </h1>
          <p className="text-xl text-gray-400">
            Learn how clarity and specificity transform AI responses from vague
            to valuable
          </p>
        </div>

        {/* Why Specificity Matters */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Specificity Matters</h2>
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-lg p-6">
            <p className="text-gray-300 mb-4">
              AI models work by predicting the most likely response based on
              your input. When you're vague, the AI has to make assumptions
              about what you want, leading to generic or irrelevant results.
              Specific prompts eliminate guesswork and guide the AI toward
              exactly what you need.
            </p>
            <p className="text-gray-300">
              Think of it like ordering at a restaurant: "I want food" vs. "I'd
              like a medium-rare ribeye steak with garlic mashed potatoes and
              steamed broccoli." Which order gets you what you actually want?
            </p>
          </div>
        </section>

        {/* The Problem with Vague Prompts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <XCircle className="w-8 h-8 text-red-400" />
            The Problem with Vague Prompts
          </h2>

          <div className="space-y-6">
            <div className="bg-[#0d1117] border border-red-800/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-400">
                Example 1: Too General
              </h3>
              <div className="space-y-4">
                <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                  <p className="text-sm text-gray-400 mb-2">❌ Vague Prompt:</p>
                  <p className="text-red-300 mb-4">"Write about marketing"</p>
                  <p className="text-sm text-gray-400 mb-2">What's wrong:</p>
                  <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
                    <li>
                      What aspect of marketing? (Digital, content, email, social
                      media?)
                    </li>
                    <li>What format? (Article, guide, tips, case study?)</li>
                    <li>For whom? (Beginners, experts, business owners?)</li>
                    <li>How long? (100 words or 10,000 words?)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-red-800/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-400">
                Example 2: Missing Context
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-sm text-gray-400 mb-2">❌ Vague Prompt:</p>
                <p className="text-red-300 mb-4">"Create a workout plan"</p>
                <p className="text-sm text-gray-400 mb-2">What's missing:</p>
                <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
                  <li>Fitness level (beginner, intermediate, advanced?)</li>
                  <li>Goals (weight loss, muscle gain, endurance?)</li>
                  <li>Available equipment (gym, home, none?)</li>
                  <li>Time constraints (30 min/day, 3x/week?)</li>
                  <li>Any limitations (injuries, health conditions?)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Power of Specific Prompts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CheckCircle className="w-8 h-8 text-green-400" />
            The Power of Specific Prompts
          </h2>

          <div className="space-y-6">
            <div className="bg-[#0d1117] border border-green-800/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-400">
                Example 1: Marketing (Improved)
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-sm text-gray-400 mb-2">
                  ✅ Specific Prompt:
                </p>
                <p className="text-green-300 mb-4">
                  "Write a 1,000-word beginner's guide to email marketing for
                  small e-commerce businesses. Include sections on building an
                  email list, creating effective subject lines, segmentation
                  strategies, and measuring success. Use a friendly, encouraging
                  tone and include 3-5 actionable tips in each section."
                </p>
                <p className="text-sm text-gray-400 mb-2">Why it works:</p>
                <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
                  <li>✓ Specific topic: email marketing</li>
                  <li>✓ Target audience: beginners, small e-commerce</li>
                  <li>✓ Length requirement: 1,000 words</li>
                  <li>✓ Structure: 4 defined sections</li>
                  <li>✓ Tone: friendly and encouraging</li>
                  <li>✓ Content depth: 3-5 tips per section</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-green-800/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-400">
                Example 2: Workout Plan (Improved)
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-sm text-gray-400 mb-2">
                  ✅ Specific Prompt:
                </p>
                <p className="text-green-300 mb-4">
                  "Create a 4-week beginner workout plan for a 30-year-old
                  office worker who wants to lose 10 pounds. They have access to
                  a basic home gym (dumbbells, resistance bands, yoga mat) and
                  can exercise 30 minutes per day, 4 days per week. Include
                  warm-up, main workout, and cool-down for each session. Focus
                  on full-body strength training and moderate cardio. Avoid
                  exercises that strain the lower back."
                </p>
                <p className="text-sm text-gray-400 mb-2">Why it works:</p>
                <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
                  <li>✓ Duration: 4 weeks</li>
                  <li>✓ Level: beginner</li>
                  <li>✓ Goal: lose 10 pounds</li>
                  <li>✓ Equipment: specific list</li>
                  <li>✓ Time: 30 min/day, 4 days/week</li>
                  <li>✓ Focus: full-body + cardio</li>
                  <li>✓ Constraint: avoid lower back strain</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Specificity Framework */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl font-bold">The Specificity Framework</h2>
          </div>

          <p className="text-gray-400 mb-6">
            Use this framework to make any prompt more specific. Answer as many
            of these questions as relevant:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-blue-400">
                📏 Scope & Length
              </h3>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• How long should it be?</li>
                <li>• How many items/examples?</li>
                <li>• How deep should it go?</li>
              </ul>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-purple-400">
                👥 Audience
              </h3>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Who is this for?</li>
                <li>• What's their knowledge level?</li>
                <li>• What are their needs/goals?</li>
              </ul>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-green-400">
                🎨 Format & Style
              </h3>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• What format? (list, article, table)</li>
                <li>• What tone? (formal, casual, technical)</li>
                <li>• Any style preferences?</li>
              </ul>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-pink-400">
                🎯 Content Details
              </h3>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• What specific topics/aspects?</li>
                <li>• What to include/exclude?</li>
                <li>• Any examples or references?</li>
              </ul>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-yellow-400">
                ⚙️ Requirements
              </h3>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Any constraints or limitations?</li>
                <li>• Must-have elements?</li>
                <li>• Things to avoid?</li>
              </ul>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-red-400">🌍 Context</h3>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• What's the use case?</li>
                <li>• Why do you need this?</li>
                <li>• Any relevant background?</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Exercise */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-orange-400" />
            <h2 className="text-3xl font-bold">Practice Exercise</h2>
          </div>

          <div className="bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-800/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">
              Transform These Vague Prompts
            </h3>
            <p className="text-gray-400 mb-6">
              Try improving these vague prompts using the specificity framework:
            </p>

            <div className="space-y-4">
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-red-400 mb-2">1. "Write about Python"</p>
                <details className="text-sm">
                  <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
                    Show improved version
                  </summary>
                  <p className="text-green-400 mt-2">
                    "Write a 800-word beginner-friendly tutorial on Python list
                    comprehensions. Include 5 practical examples progressing
                    from simple to complex, explain when to use them vs. regular
                    loops, and highlight common mistakes to avoid. Use code
                    comments to explain each example."
                  </p>
                </details>
              </div>

              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-red-400 mb-2">2. "Create a recipe"</p>
                <details className="text-sm">
                  <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
                    Show improved version
                  </summary>
                  <p className="text-green-400 mt-2">
                    "Create a healthy dinner recipe for 4 people that takes
                    under 30 minutes to prepare. Make it vegetarian, high in
                    protein, and under 500 calories per serving. Include a
                    complete ingredient list with measurements, step-by-step
                    instructions, and nutritional information per serving."
                  </p>
                </details>
              </div>

              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-red-400 mb-2">3. "Help me with my resume"</p>
                <details className="text-sm">
                  <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
                    Show improved version
                  </summary>
                  <p className="text-green-400 mt-2">
                    "Review my software engineer resume and suggest improvements
                    for applying to senior positions at tech companies. Focus on
                    strengthening my work experience descriptions using action
                    verbs and quantifiable achievements. The resume should
                    highlight my 5 years of full-stack development experience,
                    leadership skills, and cloud architecture expertise."
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Quick Tips</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4">
              <p className="text-green-400 font-semibold mb-2">✓ Do</p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Specify exact numbers (word count, items, examples)</li>
                <li>• Define your target audience clearly</li>
                <li>• State your desired format and structure</li>
                <li>• Include relevant constraints or requirements</li>
                <li>• Provide context about your goals</li>
              </ul>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4">
              <p className="text-red-400 font-semibold mb-2">✗ Don't</p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Use vague terms like "some", "a few", "many"</li>
                <li>• Assume the AI knows your context</li>
                <li>• Leave format or style undefined</li>
                <li>• Omit important constraints</li>
                <li>• Expect mind-reading</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-blue-800/30 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Practice?</h3>
          <p className="text-gray-400 mb-6">
            Browse real prompts from the community and see specificity in action
          </p>
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
          >
            Explore Prompts
          </Link>
        </div>
      </div>
    </div>
  );
}
