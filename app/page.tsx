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
      name: "Perplexity",
      description: "AI-powered search and research assistant",
      url: "https://www.perplexity.ai",
      icon: "🔍",
      features: ["Research", "Citations", "Search", "Analysis"],
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
            Discover, share, and master the art of AI prompting. Connect with a
            community of AI enthusiasts and learn effective prompting
            techniques.
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
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 rounded-lg border border-blue-800/30">
            <Sparkles className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Discover Prompts</h3>
            <p className="text-gray-400">
              Browse a curated collection of effective AI prompts shared by the
              community
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-lg border border-purple-800/30">
            <BookOpen className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Learn Techniques</h3>
            <p className="text-gray-400">
              Master prompting strategies and best practices from experienced
              users
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-900/20 to-red-900/20 p-6 rounded-lg border border-pink-800/30">
            <Zap className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Share & Connect</h3>
            <p className="text-gray-400">
              Contribute your own prompts and connect with fellow AI enthusiasts
            </p>
          </div>
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
          <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-blue-600/50 transition">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-blue-400" />
              <h3 className="text-lg font-semibold">Be Specific</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Provide clear, detailed instructions. Instead of "write about
              dogs," try "write a 500-word article about golden retriever
              training tips for puppies."
            </p>
          </div>

          <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-purple-600/50 transition">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-8 h-8 text-purple-400" />
              <h3 className="text-lg font-semibold">Provide Context</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Give background information and explain your goals. This helps the
              AI understand your needs and provide more relevant responses.
            </p>
          </div>

          <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-green-600/50 transition">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-8 h-8 text-green-400" />
              <h3 className="text-lg font-semibold">Iterate & Refine</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Don't settle for the first response. Ask follow-up questions,
              request modifications, and refine the output until it meets your
              needs.
            </p>
          </div>

          <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-yellow-600/50 transition">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🎭</span>
              <h3 className="text-lg font-semibold">Use Role-Playing</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Ask the AI to adopt a specific role: "Act as a professional
              editor" or "You are an expert developer" to get specialized
              responses.
            </p>
          </div>

          <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-red-600/50 transition">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">📝</span>
              <h3 className="text-lg font-semibold">Structure Your Prompt</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Break complex requests into sections: Context, Task, Format,
              Constraints. This makes your intent crystal clear.
            </p>
          </div>

          <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 hover:border-pink-600/50 transition">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">✅</span>
              <h3 className="text-lg font-semibold">Define Output Format</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Specify how you want the response: bullet points, JSON, markdown,
              table format, or step-by-step instructions.
            </p>
          </div>
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
