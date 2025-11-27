import Link from "next/link";
import {
  Users,
  Heart,
  Shield,
  Sparkles,
  MessageCircle,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function CommunityPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Users className="w-16 h-16 text-blue-400 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4 gradient-heading">
            Join Our Community
          </h1>
          <p className="text-xl text-gray-400">
            Connect with AI enthusiasts, share your knowledge, and grow together
          </p>
        </div>

        {/* What is AI Prompt Share */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">What is AI Prompt Share?</h2>
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-lg p-8">
            <p className="text-lg text-gray-300 mb-4">
              AI Prompt Share is a community-driven platform where people share,
              discover, and learn effective AI prompting techniques. Whether
              you're a beginner exploring AI or an expert crafting complex
              prompts, this is your space to connect and collaborate.
            </p>
            <p className="text-lg text-gray-300">
              Our mission is to democratize AI prompting knowledge and help
              everyone unlock the full potential of AI tools through better
              prompts.
            </p>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl font-bold">Getting Started</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Create Your Account
                  </h3>
                  <p className="text-gray-400">
                    Sign in with Google to join the community. It's quick,
                    secure, and gets you started in seconds.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Explore Prompts
                  </h3>
                  <p className="text-gray-400">
                    Browse through community prompts, filter by tags, and
                    discover what works. Like prompts that you find helpful and
                    learn from others' techniques.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Share Your Prompts
                  </h3>
                  <p className="text-gray-400">
                    Create your first post! Share prompts that worked well for
                    you. You can write in Markdown or JSON format, add tags, and
                    save as draft or publish immediately.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Engage & Learn</h3>
                  <p className="text-gray-400">
                    Comment on posts, reply to questions, and participate in
                    discussions. The community grows stronger when we learn from
                    each other.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Values */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-pink-400" />
            <h2 className="text-3xl font-bold">Our Community Values</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-pink-900/20 to-red-900/20 border border-pink-800/30 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-pink-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Be Helpful</h3>
              <p className="text-gray-400">
                Share knowledge generously. Help others learn and improve their
                prompting skills.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-800/30 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Be Respectful</h3>
              <p className="text-gray-400">
                Treat everyone with respect. No harassment, discrimination, or
                toxic behavior.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-800/30 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Be Original</h3>
              <p className="text-gray-400">
                Share your own work and experiences. Give credit when building
                on others' ideas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-800/30 rounded-lg p-6">
              <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Be Constructive</h3>
              <p className="text-gray-400">
                Provide helpful feedback. Focus on improving ideas rather than
                criticizing people.
              </p>
            </div>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-green-400" />
            <h2 className="text-3xl font-bold">Community Guidelines</h2>
          </div>

          <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-green-400">
                ✓ Do's
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>
                  Share practical, working prompts with clear explanations
                </li>
                <li>Add relevant tags to help others discover your content</li>
                <li>
                  Include context about what AI tool the prompt works best with
                </li>
                <li>Edit and improve your posts based on community feedback</li>
                <li>Ask questions when you need help or clarification</li>
                <li>Acknowledge and thank helpful contributors</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#30363d]">
              <h3 className="text-lg font-semibold mb-2 text-red-400">
                ✗ Don'ts
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Don't post spam, advertisements, or promotional content</li>
                <li>
                  Don't share prompts that encourage harmful, illegal, or
                  unethical outputs
                </li>
                <li>Don't plagiarize or claim others' work as your own</li>
                <li>Don't engage in personal attacks or harassment</li>
                <li>Don't post off-topic content unrelated to AI prompting</li>
                <li>Don't share private or sensitive information</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Platform Features</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <MessageCircle className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">
                Comments & Discussions
              </h3>
              <p className="text-gray-400">
                Engage with posts through comments. Ask questions, share
                improvements, and learn from discussions.
              </p>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <Heart className="w-8 h-8 text-pink-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Likes & Favorites</h3>
              <p className="text-gray-400">
                Like prompts you find helpful. Your likes help highlight quality
                content for the community.
              </p>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <TrendingUp className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Search & Filter</h3>
              <p className="text-gray-400">
                Find exactly what you need with powerful search and tag
                filtering. Filter by author, topic, or AI tool.
              </p>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <Sparkles className="w-8 h-8 text-yellow-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Notifications</h3>
              <p className="text-gray-400">
                Stay updated when someone comments on your posts or replies to
                your comments.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-800/30 text-center">
          <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-gray-400 mb-6">
            Start sharing your prompts and learning from the community today
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
            >
              Explore Prompts <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/posts/new"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 hover:bg-blue-600/10 text-blue-400 rounded-lg font-semibold transition"
            >
              Share Your First Prompt
            </Link>
          </div>
        </section>

        {/* Contact Info */}
        <section className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Questions or concerns? Contact us at{" "}
            <a
              href="mailto:support@aipromptshare.com"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              support@aipromptshare.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
