import Link from "next/link";
import {
  Sparkles,
  BookOpen,
  Zap,
  ArrowRight,
  Bot,
  Lightbulb,
  Target,
} from "lucide-react";

export default function Home() {
  const aiServices = [
    {
      name: "ChatGPT",
      description: "Advanced conversational AI for natural language tasks",
      url: "https://chat.openai.com",
      icon: "💬",
      features: ["Writing", "Coding", "Analysis", "Creative Content"],
    },
    {
      name: "Claude",
      description: "Anthropic's AI assistant for thoughtful conversations",
      url: "https://claude.ai",
      icon: "🤖",
      features: ["Document Analysis", "Coding", "Research", "Writing"],
    },
    {
      name: "Gemini",
      description: "Google's multimodal AI for diverse tasks",
      url: "https://gemini.google.com",
      icon: "✨",
      features: ["Multimodal", "Research", "Coding", "Creative Tasks"],
    },
    {
      name: "Midjourney",
      description: "AI-powered image generation from text prompts",
      url: "https://www.midjourney.com",
      icon: "🎨",
      features: ["Image Generation", "Art", "Design", "Visualization"],
    },
    {
      name: "Copilot",
      description: "Microsoft's AI assistant integrated across platforms",
      url: "https://copilot.microsoft.com",
      icon: "🚀",
      features: ["Productivity", "Research", "Coding", "Integration"],
    },
    {
      name: "antigravity",
      description:
        "Open-source AI search and knowledge engine. Fast, privacy-first, and extensible for developers.",
      url: "https://antigravity.dev",
      icon: "🪐",
      features: [
        "Open Source",
        "Search",
        "Knowledge Graph",
        "Privacy",
        "Developer Tools",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-heading">
            Welcome to AI Prompt Share
          </h1>
          <p className="text-xl md:text-2xl text-amber-400 mb-8 max-w-3xl mx-auto">
            Discover great prompts. Share your ideas. Grow together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/explore"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition flex items-center gap-2"
            >
              Explore Prompts <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/posts/new"
              className="px-8 py-3 border-2 border-blue-600 hover:bg-blue-600/10 text-blue-400 rounded-lg font-semibold text-lg transition"
            >
              Share Your Prompt
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <Link
            href="/explore"
            className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 rounded-lg border border-blue-800/30 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/10 transition-all group"
          >
            <Sparkles className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition">
              Discover Prompts
            </h3>
            <p className="text-gray-400">
              Browse a curated collection of effective AI prompts shared by the
              community
            </p>
          </Link>
          <Link
            href="/guides"
            className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-lg border border-purple-800/30 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-600/10 transition-all group"
          >
            <BookOpen className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition">
              Learn Techniques
            </h3>
            <p className="text-gray-400">
              Master prompting strategies and best practices from experienced
              users
            </p>
          </Link>
          <Link
            href="/community"
            className="bg-gradient-to-br from-pink-900/20 to-red-900/20 p-6 rounded-lg border border-pink-800/30 hover:border-pink-600 hover:shadow-lg hover:shadow-pink-600/10 transition-all group"
          >
            <Zap className="w-12 h-12 text-pink-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2 group-hover:text-pink-400 transition">
              Share & Connect
            </h3>
            <p className="text-gray-400">
              Contribute your own prompts and connect with fellow AI enthusiasts
            </p>
          </Link>
        </div>
      </section>

      {/* How to Use AI Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-heading">
            How to Use AI Effectively
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Follow these guidelines to get the best results from AI assistants
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/guides/be-specific"
            className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/10 transition-all group"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold group-hover:text-blue-400 transition">
                Be Specific
              </h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              Vague prompts lead to vague results. Provide clear, detailed
              instructions about what you want.
            </p>
            <div className="bg-[#161b22] border border-[#30363d] rounded p-3 text-xs">
              <p className="text-red-400 mb-2">❌ "Write about dogs"</p>
              <p className="text-green-400">
                ✅ "Write a 500-word article about golden retriever training
                tips for puppies under 6 months old"
              </p>
            </div>
          </Link>

          <Link
            href="/guides/provide-context"
            className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-600/10 transition-all group"
          >
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold group-hover:text-purple-400 transition">
                Provide Context
              </h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              Give background information and explain your goals. Context helps
              AI understand your needs better.
            </p>
            <div className="bg-[#161b22] border border-[#30363d] rounded p-3 text-xs">
              <p className="text-blue-300">
                ✅ "I'm a high school teacher preparing a lesson on
                photosynthesis. Create a 10-question quiz for 9th graders."
              </p>
            </div>
          </Link>

          <Link
            href="/guides/iterate-refine"
            className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-green-600 hover:shadow-lg hover:shadow-green-600/10 transition-all group"
          >
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold group-hover:text-green-400 transition">
                Iterate & Refine
              </h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              Don't settle for the first response. Build on it with follow-up
              questions and refinements.
            </p>
            <div className="bg-[#161b22] border border-[#30363d] rounded p-3 text-xs">
              <p className="text-blue-300 mb-1">
                1st: "Write a tagline for a fitness app"
              </p>
              <p className="text-gray-500 mb-1">→ Response received</p>
              <p className="text-blue-300">
                2nd: "Make it more energetic and target young adults"
              </p>
            </div>
          </Link>

          <Link
            href="/guides/role-playing"
            className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-yellow-600 hover:shadow-lg hover:shadow-yellow-600/10 transition-all group"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl group-hover:scale-110 transition-transform inline-block">
                🎭
              </span>
              <h3 className="text-lg font-semibold group-hover:text-yellow-400 transition">
                Use Role-Playing
              </h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              Ask AI to adopt a specific role or expertise for more specialized
              responses.
            </p>
            <div className="bg-[#161b22] border border-[#30363d] rounded p-3 text-xs">
              <p className="text-blue-300">
                "Act as an experienced software architect. Review this database
                schema and suggest improvements..."
              </p>
            </div>
          </Link>

          <Link
            href="/guides/structure-prompt"
            className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/10 transition-all group"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl group-hover:scale-110 transition-transform inline-block">
                📝
              </span>
              <h3 className="text-lg font-semibold group-hover:text-red-400 transition">
                Structure Your Prompt
              </h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              Break complex requests into clear sections. Organized prompts get
              better results.
            </p>
            <div className="bg-[#161b22] border border-[#30363d] rounded p-3 text-xs">
              <p className="text-purple-300">Context: [Background]</p>
              <p className="text-purple-300">Task: [What you need]</p>
              <p className="text-purple-300">Format: [How to output]</p>
              <p className="text-purple-300">Constraints: [Limitations]</p>
            </div>
          </Link>

          <Link
            href="/guides/output-format"
            className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-pink-600 hover:shadow-lg hover:shadow-pink-600/10 transition-all group"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl group-hover:scale-110 transition-transform inline-block">
                ✅
              </span>
              <h3 className="text-lg font-semibold group-hover:text-pink-400 transition">
                Define Output Format
              </h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              Specify exactly how you want the response structured for
              consistent results.
            </p>
            <div className="bg-[#161b22] border border-[#30363d] rounded p-3 text-xs">
              <p className="text-blue-300">
                "List 5 breakfast ideas. Format as: Name | Prep Time | Calories
                | Key Ingredients"
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-heading">
            Popular AI Services
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore leading AI platforms and discover what each one excels at
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiServices.map((service) => (
            <a
              key={service.name}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-[#0d1117] to-[#161b22] border border-[#30363d] rounded-lg p-6 hover:border-blue-600/50 hover:shadow-lg hover:shadow-blue-600/10 transition group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">{service.icon}</span>
                <div>
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition">
                    {service.name}
                  </h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2 py-1 bg-blue-900/30 text-blue-400 text-xs rounded-md border border-blue-800/30"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-12 border border-blue-800/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our community and start sharing your best AI prompts today
          </p>
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition"
          >
            Explore Prompts <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
