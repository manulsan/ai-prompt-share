import Link from "next/link";
import {
  BookOpen,
  Target,
  Lightbulb,
  Zap,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

export default function GuidesPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 gradient-heading">
            AI Prompting Guides
          </h1>
          <p className="text-xl text-gray-400">
            Master the art of crafting effective AI prompts with our
            comprehensive guides
          </p>
        </div>

        {/* Best Practices Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold">Best Practices</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-green-400">
                    Be Specific and Clear
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Vague prompts lead to vague results. Provide clear, detailed
                    instructions about what you want.
                  </p>
                  <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                    <p className="text-sm text-gray-500 mb-2">
                      ❌ Bad Example:
                    </p>
                    <p className="text-red-400 mb-4">"Write about dogs"</p>
                    <p className="text-sm text-gray-500 mb-2">
                      ✅ Good Example:
                    </p>
                    <p className="text-green-400">
                      "Write a 500-word article about golden retriever training
                      tips for puppies under 6 months old, focusing on basic
                      commands and socialization"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-green-400">
                    Provide Context
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Help the AI understand your goal, audience, and constraints.
                    Context leads to better results.
                  </p>
                  <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                    <p className="text-sm text-gray-500 mb-2">
                      Example with Context:
                    </p>
                    <p className="text-blue-300">
                      "I'm a high school teacher preparing a lesson on
                      photosynthesis. Create a 10-question quiz for 9th graders
                      with multiple choice answers. Include 3 easy, 4 medium,
                      and 3 hard questions."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-green-400">
                    Use Role-Playing
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Ask the AI to adopt a specific role or persona for more
                    specialized responses.
                  </p>
                  <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                    <p className="text-blue-300">
                      "Act as an experienced software architect. Review this
                      database schema and suggest improvements for scalability
                      and performance..."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-green-400">
                    Define Output Format
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Specify how you want the response structured: bullet points,
                    table, JSON, step-by-step, etc.
                  </p>
                  <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                    <p className="text-blue-300">
                      "List 5 healthy breakfast ideas. Format as: Name | Prep
                      Time | Calories | Key Ingredients"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-8 h-8 text-red-400" />
            <h2 className="text-3xl font-bold">Common Mistakes to Avoid</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-red-900/10 border border-red-800/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-red-400">
                ❌ Being Too Vague
              </h3>
              <p className="text-gray-400">
                "Tell me about marketing" → Too broad. Specify what aspect:
                digital marketing, content marketing, email marketing?
              </p>
            </div>

            <div className="bg-red-900/10 border border-red-800/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-red-400">
                ❌ Ignoring Iteration
              </h3>
              <p className="text-gray-400">
                Don't accept the first response. Ask follow-up questions,
                request refinements, or clarify specific parts.
              </p>
            </div>

            <div className="bg-red-900/10 border border-red-800/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-red-400">
                ❌ No Constraints
              </h3>
              <p className="text-gray-400">
                Specify length, tone, complexity level, target audience. Without
                constraints, results can be unpredictable.
              </p>
            </div>

            <div className="bg-red-900/10 border border-red-800/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-red-400">
                ❌ Assuming AI Knows Everything
              </h3>
              <p className="text-gray-400">
                Provide necessary background information. AI doesn't have
                context about your specific project, company, or situation.
              </p>
            </div>
          </div>
        </section>

        {/* Prompt Templates Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl font-bold">Prompt Templates</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                Content Creation Template
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 font-mono text-sm">
                <p className="text-gray-300">
                  <span className="text-purple-400">[ROLE]</span>: Act as a{" "}
                  <span className="text-yellow-300">[professional role]</span>
                </p>
                <p className="text-gray-300 mt-2">
                  <span className="text-purple-400">[TASK]</span>: Create{" "}
                  <span className="text-yellow-300">[type of content]</span>{" "}
                  about <span className="text-yellow-300">[topic]</span>
                </p>
                <p className="text-gray-300 mt-2">
                  <span className="text-purple-400">[AUDIENCE]</span>: Target
                  audience is{" "}
                  <span className="text-yellow-300">[describe audience]</span>
                </p>
                <p className="text-gray-300 mt-2">
                  <span className="text-purple-400">[FORMAT]</span>: Format as{" "}
                  <span className="text-yellow-300">[structure/style]</span>
                </p>
                <p className="text-gray-300 mt-2">
                  <span className="text-purple-400">[CONSTRAINTS]</span>: Keep
                  it{" "}
                  <span className="text-yellow-300">[length, tone, style]</span>
                </p>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                Problem-Solving Template
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 font-mono text-sm">
                <p className="text-gray-300">
                  <span className="text-purple-400">[CONTEXT]</span>: I'm
                  working on{" "}
                  <span className="text-yellow-300">[describe situation]</span>
                </p>
                <p className="text-gray-300 mt-2">
                  <span className="text-purple-400">[PROBLEM]</span>: The
                  challenge is{" "}
                  <span className="text-yellow-300">[describe problem]</span>
                </p>
                <p className="text-gray-300 mt-2">
                  <span className="text-purple-400">[GOAL]</span>: I want to
                  achieve{" "}
                  <span className="text-yellow-300">[desired outcome]</span>
                </p>
                <p className="text-gray-300 mt-2">
                  <span className="text-purple-400">[CONSTRAINTS]</span>:
                  Consider{" "}
                  <span className="text-yellow-300">
                    [limitations/requirements]
                  </span>
                </p>
                <p className="text-gray-300 mt-2">
                  <span className="text-purple-400">[REQUEST]</span>: Provide{" "}
                  <span className="text-yellow-300">
                    [type of solution needed]
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">
                Code Generation Template
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 font-mono text-sm">
                <p className="text-gray-300">
                  <span className="text-purple-400">[LANGUAGE]</span>: Using{" "}
                  <span className="text-yellow-300">
                    [programming language/framework]
                  </span>
                </p>
                <p className="text-gray-300 mt-2">
                  <span className="text-purple-400">[TASK]</span>: Create{" "}
                  <span className="text-yellow-300">
                    [function/component/class]
                  </span>{" "}
                  that{" "}
                  <span className="text-yellow-300">
                    [describes functionality]
                  </span>
                </p>
                <p className="text-gray-300 mt-2">
                  <span className="text-purple-400">[REQUIREMENTS]</span>: It
                  should{" "}
                  <span className="text-yellow-300">[list requirements]</span>
                </p>
                <p className="text-gray-300 mt-2">
                  <span className="text-purple-400">[STYLE]</span>: Follow{" "}
                  <span className="text-yellow-300">
                    [coding standards/patterns]
                  </span>
                </p>
                <p className="text-gray-300 mt-2">
                  <span className="text-purple-400">[OUTPUT]</span>: Include{" "}
                  <span className="text-yellow-300">
                    [comments, tests, documentation]
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Techniques Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold">Advanced Techniques</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-800/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">
                Chain of Thought (CoT)
              </h3>
              <p className="text-gray-400 mb-4">
                Ask the AI to "think step by step" or "explain your reasoning"
                for more accurate complex problem-solving.
              </p>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 text-sm">
                <p className="text-blue-300">
                  "Solve this math problem step by step, explaining each
                  calculation: If a train travels 120 miles in 2 hours..."
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-800/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Few-Shot Learning</h3>
              <p className="text-gray-400 mb-4">
                Provide examples of the desired output format to guide the AI's
                response style.
              </p>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 text-sm">
                <p className="text-blue-300 mb-2">
                  "Convert these sentences to questions:
                </p>
                <p className="text-gray-400">
                  Example 1: 'The sky is blue' → 'What color is the sky?'
                </p>
                <p className="text-gray-400">
                  Example 2: 'Dogs bark' → 'What do dogs do?'
                </p>
                <p className="text-blue-300 mt-2">
                  Now convert: 'Paris is in France'"
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-900/20 to-red-900/20 border border-pink-800/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">
                Constraint-Based Prompting
              </h3>
              <p className="text-gray-400 mb-4">
                Use constraints to guide the AI toward specific types of
                responses.
              </p>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 text-sm">
                <p className="text-blue-300">
                  "Write a product description using exactly 100 words,
                  including the words 'innovative', 'sustainable', and
                  'affordable'. Use a professional but friendly tone."
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-800/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">
                Iterative Refinement
              </h3>
              <p className="text-gray-400 mb-4">
                Build on previous responses to refine and improve output through
                conversation.
              </p>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 text-sm">
                <p className="text-blue-300">
                  1st prompt: "Write a tagline for a fitness app"
                </p>
                <p className="text-gray-400 mt-2">
                  Response: "Get Fit, Stay Strong"
                </p>
                <p className="text-blue-300 mt-2">
                  2nd prompt: "Make it more energetic and target young adults"
                </p>
                <p className="text-gray-400 mt-2">
                  Response: "Level Up Your Fitness Game"
                </p>
                <p className="text-blue-300 mt-2">
                  3rd prompt: "Include a call to action"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-800/30 text-center">
          <BookOpen className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Ready to Practice?</h2>
          <p className="text-gray-400 mb-6">
            Browse real prompts from the community and see these techniques in
            action
          </p>
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
          >
            Explore Prompts <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </div>
    </div>
  );
}
