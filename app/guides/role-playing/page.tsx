import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Briefcase,
  GraduationCap,
  Code,
  Sparkles,
} from "lucide-react";

export default function RolePlayingGuide() {
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
          <span className="text-6xl mb-4 inline-block">🎭</span>
          <h1 className="text-5xl font-bold mb-4 gradient-heading">
            Use Role-Playing
          </h1>
          <p className="text-xl text-gray-400">
            Transform generic responses into expert-level content by assigning
            AI specific roles
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Power of Roles</h2>
          <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-800/30 rounded-lg p-6">
            <p className="text-gray-300 mb-4">
              When you assign AI a specific role, you tap into the patterns and
              expertise associated with that role in its training data. An
              "expert software architect" thinks differently than a "friendly
              teacher" or a "critical reviewer."
            </p>
            <p className="text-gray-300">
              Role-playing prompts tell the AI not just what to do, but how to
              think, what perspective to take, and what style to use. It's like
              hiring a specialist instead of a generalist.
            </p>
          </div>
        </section>

        {/* Role Formula */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Role-Playing Formula</h2>
          <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
            <div className="space-y-4 font-mono text-sm">
              <p className="text-purple-300">
                "Act as <span className="text-yellow-300">[specific role]</span>{" "}
                with{" "}
                <span className="text-yellow-300">
                  [years of experience/expertise]
                </span>
                ."
              </p>
              <p className="text-purple-300">
                "You specialize in{" "}
                <span className="text-yellow-300">[specific area]</span>."
              </p>
              <p className="text-purple-300">
                "Your approach is{" "}
                <span className="text-yellow-300">[methodology/style]</span>."
              </p>
              <p className="text-purple-300">
                Now, <span className="text-yellow-300">[specific task]</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Roles */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold">Professional Roles</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Software Architect
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 mb-4">
                <p className="text-green-300 text-sm leading-relaxed">
                  "Act as a senior software architect with 15 years of
                  experience in distributed systems. You specialize in
                  microservices, event-driven architecture, and scalable cloud
                  solutions. Your approach is pragmatic—you balance ideal
                  architecture with real-world constraints like budget,
                  timeline, and team skill level. Review this system design for
                  an e-commerce platform handling 100k daily users and suggest
                  improvements."
                </p>
              </div>
              <p className="text-gray-400 text-sm">
                <strong className="text-white">Why it works:</strong> Gets
                technical depth, considers trade-offs, focuses on scalability
              </p>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                Marketing Strategist
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 mb-4">
                <p className="text-green-300 text-sm leading-relaxed">
                  "Act as a B2B marketing strategist with expertise in SaaS
                  growth. You've helped 50+ startups achieve product-market fit
                  and scale from $0 to $10M ARR. Your approach combines
                  data-driven decision making with creative storytelling. You're
                  known for identifying underutilized channels and creating
                  content that converts. Create a 90-day marketing plan for a
                  new project management tool targeting remote teams."
                </p>
              </div>
              <p className="text-gray-400 text-sm">
                <strong className="text-white">Why it works:</strong> Gets
                strategic thinking, channel expertise, growth focus
              </p>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-400">
                Financial Advisor
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 mb-4">
                <p className="text-green-300 text-sm leading-relaxed">
                  "Act as a certified financial advisor (CFP) with 20 years of
                  experience helping young professionals build wealth. You
                  specialize in tax-efficient investing, retirement planning,
                  and balancing aggressive growth with risk management. Your
                  communication style breaks down complex financial concepts
                  into simple, actionable advice. Create a personalized
                  investment strategy for a 30-year-old software engineer
                  earning $120k/year with $50k in savings."
                </p>
              </div>
              <p className="text-gray-400 text-sm">
                <strong className="text-white">Why it works:</strong> Gets
                certified expertise, age-appropriate advice, clear communication
              </p>
            </div>
          </div>
        </section>

        {/* Educational Roles */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-8 h-8 text-pink-400" />
            <h2 className="text-3xl font-bold">Educational Roles</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-pink-400">
                Patient Teacher
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 mb-4">
                <p className="text-green-300 text-sm leading-relaxed">
                  "Act as a patient, encouraging teacher who specializes in
                  making complex topics accessible to beginners. You use
                  everyday analogies, break concepts into bite-sized pieces, and
                  always check for understanding before moving forward. You
                  never make students feel dumb for not knowing something.
                  Explain quantum computing to someone with a high school
                  education and no physics background."
                </p>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">
                Socratic Tutor
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 mb-4">
                <p className="text-green-300 text-sm leading-relaxed">
                  "Act as a Socratic tutor. Instead of giving direct answers,
                  guide students to discover solutions through thoughtful
                  questions. When they're stuck, provide hints that lead them to
                  the 'aha' moment. Your goal is deep understanding, not just
                  correct answers. Help me work through this calculus problem:
                  Find the derivative of f(x) = x³ + 2x² - 5x + 1"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Roles */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl font-bold">Creative Roles</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                Copywriter Specialist
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-green-300 text-sm leading-relaxed">
                  "Act as a direct response copywriter trained in classical
                  techniques (Eugene Schwartz, Gary Halbert, David Ogilvy). You
                  understand that great copy speaks to desires, not features.
                  You lead with big ideas, use power words, create curiosity
                  gaps, and always end with clear CTAs. Write a landing page
                  headline and subheadline for a sleep tracking app."
                </p>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">
                Brand Strategist
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-green-300 text-sm leading-relaxed">
                  "Act as a brand strategist who helps companies define their
                  unique positioning. You ask probing questions about target
                  audience, competitors, values, and personality before making
                  recommendations. Your frameworks include brand archetypes,
                  positioning statements, and messaging hierarchies. Help me
                  define the brand voice for an eco-friendly fashion startup
                  targeting Gen Z."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Roles */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-8 h-8 text-green-400" />
            <h2 className="text-3xl font-bold">Technical Roles</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-400">
                Code Reviewer
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-green-300 text-sm leading-relaxed">
                  "Act as a senior code reviewer at a top tech company. You
                  focus on: performance implications, security vulnerabilities,
                  maintainability, adherence to SOLID principles, and potential
                  edge cases. Your feedback is constructive and educational—you
                  explain why something is problematic and suggest specific
                  improvements. Review this Python function for calculating user
                  engagement scores."
                </p>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                DevOps Engineer
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-green-300 text-sm leading-relaxed">
                  "Act as a DevOps engineer with expertise in Kubernetes, CI/CD
                  pipelines, and infrastructure as code. You prioritize
                  automation, monitoring, and reliability. When solving
                  problems, you consider scalability, cost, and team workflows.
                  Help me set up a deployment pipeline for a Node.js application
                  that needs to handle traffic spikes."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Advisory Roles */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold">Advisory & Critique Roles</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                Devil's Advocate
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-green-300 text-sm leading-relaxed">
                  "Act as a devil's advocate who challenges assumptions and
                  identifies potential flaws. Your job is to stress-test ideas
                  by pointing out weaknesses, alternative perspectives, and
                  unintended consequences. Be rigorous but not mean—your goal is
                  to strengthen the idea, not destroy it. Challenge my business
                  idea: A subscription service for curated book
                  recommendations."
                </p>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-400">
                Critical Editor
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-green-300 text-sm leading-relaxed">
                  "Act as a critical editor for a major publication. You have
                  high standards for clarity, accuracy, and impact. You cut
                  unnecessary words, question weak arguments, and demand
                  stronger evidence. Your edits are tough but fair—you explain
                  why something doesn't work and how to fix it. Edit this blog
                  post draft for maximum impact."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Role Combinations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Advanced: Role Combinations
          </h2>
          <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-800/30 rounded-lg p-6">
            <p className="text-gray-300 mb-4">
              Combine multiple perspectives for richer responses:
            </p>
            <div className="space-y-4">
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-blue-300 text-sm mb-2">
                  Multi-Perspective Analysis:
                </p>
                <p className="text-gray-300 text-sm">
                  "Analyze this product idea from three perspectives: 1) A
                  venture capitalist evaluating investment potential, 2) An
                  engineer assessing technical feasibility, 3) A UX designer
                  considering user experience. Provide each perspective's take
                  and then synthesize a balanced recommendation."
                </p>
              </div>

              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-blue-300 text-sm mb-2">Expert Panel:</p>
                <p className="text-gray-300 text-sm">
                  "Simulate a panel discussion between a data scientist, a
                  product manager, and a business analyst about whether to build
                  or buy an analytics solution. Have them debate the pros and
                  cons from their unique viewpoints."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Role-Playing Best Practices
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#0d1117] border border-green-800/30 rounded-lg p-4">
              <h3 className="text-green-400 font-semibold mb-2">✓ Do</h3>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Be specific about expertise level</li>
                <li>• Define the role's methodology/approach</li>
                <li>• Mention relevant experience or specializations</li>
                <li>• Align role with the type of output you need</li>
              </ul>
            </div>
            <div className="bg-[#0d1117] border border-red-800/30 rounded-lg p-4">
              <h3 className="text-red-400 font-semibold mb-2">✗ Don't</h3>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Use vague roles like "expert" without details</li>
                <li>• Mix conflicting role characteristics</li>
                <li>• Choose roles that don't match the task</li>
                <li>• Over-complicate with too many roles at once</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practice Exercise</h2>
          <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-800/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              Create Role-Playing Prompts
            </h3>
            <p className="text-gray-400 mb-4">
              For each scenario, create a detailed role-playing prompt:
            </p>
            <div className="space-y-3 text-sm">
              <p className="text-gray-300">
                1. You need to explain blockchain to your grandmother
              </p>
              <p className="text-gray-300">
                2. You want feedback on your portfolio website design
              </p>
              <p className="text-gray-300">
                3. You need help debugging a performance issue in your app
              </p>
              <p className="text-gray-300">
                4. You want to improve your public speaking skills
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-xl p-8 border border-yellow-800/30 text-center">
          <h3 className="text-2xl font-bold mb-4">
            See Role-Playing in Action
          </h3>
          <p className="text-gray-400 mb-6">
            Explore prompts that use expert roles effectively
          </p>
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg font-semibold transition"
          >
            Browse Prompts
          </Link>
        </div>
      </div>
    </div>
  );
}
