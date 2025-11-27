import Link from "next/link";
import { ArrowLeft, FileJson, Table, List, Code } from "lucide-react";

export default function OutputFormatGuide() {
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
          <span className="text-6xl mb-4 inline-block">🎯</span>
          <h1 className="text-5xl font-bold mb-4 gradient-heading">
            Define Output Format
          </h1>
          <p className="text-xl text-gray-400">
            Get exactly the structure you need by specifying format upfront
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Format Matters</h2>
          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-800/30 rounded-lg p-6">
            <p className="text-gray-300 mb-4">
              Without format guidance, AI might give you a 500-word essay when
              you needed a bullet list. Or a paragraph when you needed JSON.
              Specifying format saves time and eliminates back-and-forth.
            </p>
            <p className="text-gray-300">
              Think of format as the "container" for information. The same
              content can be organized as a table, list, JSON object, or
              prose—each suited for different purposes.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <List className="w-8 h-8 text-green-400" />
            <h2 className="text-3xl font-bold">Lists & Bullet Points</h2>
          </div>
          <p className="text-gray-400 mb-6">
            Perfect for: Steps, features, recommendations, pros/cons
          </p>

          <div className="space-y-6">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">
                Simple List
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 mb-3">
                <p className="text-green-300 text-sm">
                  "List 5 time management techniques for remote workers. Format:
                  one sentence per technique."
                </p>
              </div>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-gray-300 text-sm font-semibold mb-2">
                  Output:
                </p>
                <ul className="space-y-1 text-gray-400 text-sm">
                  <li>
                    • Time-blocking: Schedule specific tasks in calendar blocks
                  </li>
                  <li>• Pomodoro: Work 25-min focused, 5-min break cycles</li>
                  <li>• Task batching: Group similar tasks together</li>
                  <li>• Priority matrix: Sort by urgent/important quadrants</li>
                  <li>• Deep work blocks: 2-hour distraction-free sessions</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-purple-400">
                Structured List
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 mb-3">
                <p className="text-green-300 text-sm">
                  "List 3 email marketing best practices. Format: Title +
                  2-sentence explanation + example."
                </p>
              </div>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-gray-300 text-sm font-semibold mb-2">
                  Output:
                </p>
                <div className="space-y-3 text-sm text-gray-400">
                  <div>
                    <p className="text-green-400 font-semibold">
                      1. Personalize Subject Lines
                    </p>
                    <p>
                      Include recipient's name or reference their recent action.
                      Personalized subject lines increase open rates by 26%.
                    </p>
                    <p className="text-blue-300 text-xs mt-1">
                      Example: "John, here's your guide to SEO"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Table className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl font-bold">Tables & Comparisons</h2>
          </div>
          <p className="text-gray-400 mb-6">
            Perfect for: Comparing options, feature matrices, schedules
          </p>

          <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-yellow-400">
              Comparison Table
            </h3>
            <div className="bg-[#161b22] border border-[#30363d] rounded p-4 mb-3">
              <p className="text-green-300 text-sm">
                "Compare Notion, Asana, and Monday.com for project management.
                Format as table: Feature | Notion | Asana | Monday.com"
              </p>
            </div>
            <div className="bg-[#161b22] border border-[#30363d] rounded p-4 overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-[#30363d]">
                    <th className="text-left text-gray-400 py-2">Feature</th>
                    <th className="text-left text-gray-400 py-2">Notion</th>
                    <th className="text-left text-gray-400 py-2">Asana</th>
                    <th className="text-left text-gray-400 py-2">Monday.com</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-[#30363d]">
                    <td className="py-2">Pricing</td>
                    <td>Free-$10/user</td>
                    <td>Free-$24/user</td>
                    <td>$9-$19/user</td>
                  </tr>
                  <tr className="border-b border-[#30363d]">
                    <td className="py-2">Best For</td>
                    <td>Docs + tasks</td>
                    <td>Task workflows</td>
                    <td>Visual boards</td>
                  </tr>
                  <tr>
                    <td className="py-2">Learning Curve</td>
                    <td>Steep</td>
                    <td>Moderate</td>
                    <td>Easy</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FileJson className="w-8 h-8 text-orange-400" />
            <h2 className="text-3xl font-bold">JSON & Structured Data</h2>
          </div>
          <p className="text-gray-400 mb-6">
            Perfect for: API responses, data processing, programmatic use
          </p>

          <div className="space-y-6">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-orange-400">
                JSON Object
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 mb-3">
                <p className="text-green-300 text-sm">
                  "Create a user profile for a fictional character. Output as
                  JSON with fields: name, age, occupation, skills (array), bio
                  (string)."
                </p>
              </div>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 font-mono text-xs">
                <pre className="text-gray-300">{`{
  "name": "Sarah Chen",
  "age": 29,
  "occupation": "UX Designer",
  "skills": ["Figma", "User Research", "Prototyping"],
  "bio": "Passionate about creating accessible digital experiences"
}`}</pre>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-cyan-400">
                Array of Objects
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 mb-3">
                <p className="text-green-300 text-sm">
                  "Generate 3 blog post ideas for a fitness blog. Format as JSON
                  array with: title, description, target_audience."
                </p>
              </div>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 font-mono text-xs">
                <pre className="text-gray-300">{`[
  {
    "title": "5 Morning Stretches for Desk Workers",
    "description": "Combat stiffness from sitting all day",
    "target_audience": "office workers"
  },
  {
    "title": "Meal Prep for Busy Parents",
    "description": "Healthy recipes under 30 minutes",
    "target_audience": "parents"
  }
]`}</pre>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-8 h-8 text-pink-400" />
            <h2 className="text-3xl font-bold">Code Formats</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-pink-400">
                Function Output
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 mb-3">
                <p className="text-green-300 text-sm">
                  "Write a Python function to validate email addresses. Format:
                  function with docstring and type hints."
                </p>
              </div>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 font-mono text-xs">
                <pre className="text-gray-300">{`def validate_email(email: str) -> bool:
    """
    Validate email format using regex.
    
    Args:
        email: Email address to validate
    Returns:
        True if valid, False otherwise
    """
    import re
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
    return bool(re.match(pattern, email))`}</pre>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-green-400">
                SQL Query
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 mb-3">
                <p className="text-green-300 text-sm">
                  "Write a SQL query to find top 5 customers by total purchases.
                  Format: commented SQL with explanation."
                </p>
              </div>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 font-mono text-xs">
                <pre className="text-gray-300">{`-- Get top 5 customers ranked by total purchase amount
SELECT 
  c.customer_id,
  c.customer_name,
  SUM(o.total_amount) AS total_spent
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.customer_name
ORDER BY total_spent DESC
LIMIT 5;`}</pre>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Template Formats</h2>
          <p className="text-gray-400 mb-6">
            Create reusable formats for consistent outputs
          </p>

          <div className="space-y-6">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">
                Email Template
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 mb-3">
                <p className="text-green-300 text-sm">
                  "Write a cold outreach email to potential clients. Format:
                  Subject line | Greeting | Body (3 paragraphs: hook, value,
                  CTA) | Sign-off"
                </p>
              </div>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 text-sm">
                <p className="text-gray-400 font-semibold">Subject:</p>
                <p className="text-gray-300 mb-3">
                  Quick question about your SEO strategy
                </p>
                <p className="text-gray-400 font-semibold">Greeting:</p>
                <p className="text-gray-300 mb-3">Hi [Name],</p>
                <p className="text-gray-400 font-semibold">Hook:</p>
                <p className="text-gray-300 mb-3">
                  I noticed your site ranks well for [keyword]...
                </p>
                <p className="text-gray-400 font-semibold">Value:</p>
                <p className="text-gray-300 mb-3">
                  We've helped companies like [example] increase organic
                  traffic...
                </p>
                <p className="text-gray-400 font-semibold">CTA:</p>
                <p className="text-gray-300 mb-3">
                  Would you be open to a 15-minute call next week?
                </p>
                <p className="text-gray-400 font-semibold">Sign-off:</p>
                <p className="text-gray-300">Best, [Your Name]</p>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-purple-400">
                Meeting Notes
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4 mb-3">
                <p className="text-green-300 text-sm">
                  "Summarize this meeting transcript. Format: Date/Attendees |
                  Key Decisions (bullet points) | Action Items (who/what/when) |
                  Next Steps"
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Format Specification Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-5">
              <h3 className="text-green-400 font-semibold mb-2">✅ Do</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Specify exact structure upfront</li>
                <li>• Provide example format when needed</li>
                <li>• Use familiar formats (JSON, Markdown)</li>
                <li>• State field names and types</li>
                <li>• Indicate optional vs required parts</li>
              </ul>
            </div>
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-5">
              <h3 className="text-red-400 font-semibold mb-2">❌ Don't</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Assume AI will guess format</li>
                <li>• Mix multiple formats in one output</li>
                <li>• Use vague terms like "organize nicely"</li>
                <li>• Forget to specify delimiters</li>
                <li>• Over-complicate simple requests</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Real-World Format Examples
          </h2>

          <div className="space-y-6">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">
                Social Media Post Series
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-green-300 text-sm">
                  "Create 5 LinkedIn posts about remote work productivity.
                  Format each as: Hook (1 line) | Body (3 bullets) | CTA
                  question | Hashtags (3 max). Separate posts with '---'"
                </p>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Product Comparison</h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-green-300 text-sm">
                  "Compare iPhone 15 vs Samsung S24. Format: Feature name |
                  iPhone 15 specs | Samsung S24 specs | Winner (with reason).
                  Include: camera, battery, price, performance, design."
                </p>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">API Documentation</h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-green-300 text-sm">
                  "Document a user authentication API endpoint. Format: Endpoint
                  URL | Method | Request body (JSON example) | Response (JSON
                  example) | Error codes (table)."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practice Exercise</h2>
          <div className="bg-gradient-to-br from-green-900/20 to-teal-900/20 border border-green-800/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              Challenge: Design a Format
            </h3>
            <p className="text-gray-300 mb-4">
              You need to create a weekly meal plan for a busy professional.
              Design a format that includes breakfast, lunch, dinner, prep time,
              and ingredient list.
            </p>
            <p className="text-gray-400 text-sm">
              Hint: Consider using a table or structured JSON. Think about what
              would be easiest to scan and use in a real kitchen!
            </p>
          </div>
        </section>

        <div className="bg-gradient-to-r from-orange-900/20 to-yellow-900/20 rounded-xl p-8 border border-orange-800/30 text-center">
          <h3 className="text-2xl font-bold mb-4">
            See Prompts with Great Formatting
          </h3>
          <p className="text-gray-400 mb-6">
            Discover prompts that get perfect structured outputs
          </p>
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition"
          >
            Browse Prompts
          </Link>
        </div>
      </div>
    </div>
  );
}
