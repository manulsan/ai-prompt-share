import Link from "next/link";
import {
  Lightbulb,
  ArrowLeft,
  Layers,
  Users,
  Target,
  Clock,
} from "lucide-react";

export default function ProvideContextGuide() {
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
          <Lightbulb className="w-16 h-16 text-purple-400 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4 gradient-heading">
            Provide Context
          </h1>
          <p className="text-xl text-gray-400">
            Context is the secret ingredient that transforms good prompts into
            great results
          </p>
        </div>

        {/* Why Context Matters */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Context Matters</h2>
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-800/30 rounded-lg p-6">
            <p className="text-gray-300 mb-4">
              AI doesn't know anything about your specific situation, your
              audience, your goals, or your constraints unless you tell it.
              Without context, AI can only provide generic answers that may not
              fit your needs.
            </p>
            <p className="text-gray-300">
              Think of context as giving the AI a lens through which to view
              your request. The same task—like "write an email"—could mean
              completely different things for a CEO addressing investors vs. a
              teacher writing to parents vs. a developer reporting a bug.
            </p>
          </div>
        </section>

        {/* The 5 Types of Context */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The 5 Types of Context</h2>

          <div className="space-y-6">
            {/* Situational Context */}
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-semibold text-blue-400">
                  1. Situational Context
                </h3>
              </div>
              <p className="text-gray-400 mb-4">
                What's happening? Where are you in the process? What led to this
                need?
              </p>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-sm text-gray-400 mb-2">
                  ❌ Without Context:
                </p>
                <p className="text-red-300 mb-4">
                  "Write a project status update"
                </p>
                <p className="text-sm text-gray-400 mb-2">✅ With Context:</p>
                <p className="text-green-300">
                  "Write a project status update for our mobile app redesign
                  project. We're in week 6 of an 8-week sprint, currently in the
                  user testing phase. The project was delayed by 2 weeks due to
                  technical issues, but we're back on track. This update is for
                  our executive stakeholders who check progress weekly."
                </p>
              </div>
            </div>

            {/* Audience Context */}
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-semibold text-purple-400">
                  2. Audience Context
                </h3>
              </div>
              <p className="text-gray-400 mb-4">
                Who will read/use this? What's their knowledge level? What do
                they care about?
              </p>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-sm text-gray-400 mb-2">
                  ❌ Without Context:
                </p>
                <p className="text-red-300 mb-4">"Explain blockchain"</p>
                <p className="text-sm text-gray-400 mb-2">✅ With Context:</p>
                <p className="text-green-300">
                  "Explain blockchain technology to a 60-year-old small business
                  owner who has basic computer skills but no technical
                  background. They want to understand if blockchain could help
                  their retail business with inventory management. Keep it under
                  200 words and avoid technical jargon—use everyday analogies
                  instead."
                </p>
              </div>
            </div>

            {/* Goal Context */}
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-green-400" />
                <h3 className="text-xl font-semibold text-green-400">
                  3. Goal Context
                </h3>
              </div>
              <p className="text-gray-400 mb-4">
                What are you trying to achieve? What success looks like? What's
                the desired outcome?
              </p>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-sm text-gray-400 mb-2">
                  ❌ Without Context:
                </p>
                <p className="text-red-300 mb-4">"Write social media posts"</p>
                <p className="text-sm text-gray-400 mb-2">✅ With Context:</p>
                <p className="text-green-300">
                  "Write 5 LinkedIn posts to promote our new cybersecurity
                  service to mid-size companies. Goal: generate leads and
                  position us as thought leaders. Each post should educate
                  readers about a specific security risk (ransomware, phishing,
                  data breaches, insider threats, cloud vulnerabilities) and
                  subtly suggest our service as a solution. We want to increase
                  our LinkedIn followers by 20% and get at least 50 engagement
                  actions per post."
                </p>
              </div>
            </div>

            {/* Constraint Context */}
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-8 h-8 text-yellow-400" />
                <h3 className="text-xl font-semibold text-yellow-400">
                  4. Constraint Context
                </h3>
              </div>
              <p className="text-gray-400 mb-4">
                What limitations exist? What must you avoid? What resources do
                you have?
              </p>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-sm text-gray-400 mb-2">
                  ❌ Without Context:
                </p>
                <p className="text-red-300 mb-4">
                  "Plan a team building event"
                </p>
                <p className="text-sm text-gray-400 mb-2">✅ With Context:</p>
                <p className="text-green-300">
                  "Plan a team building event for our remote team of 15 software
                  developers across 3 time zones (EST, PST, GMT). Budget: $500.
                  Must be virtual since we're fully remote. Duration: 2 hours
                  max. Constraints: avoid anything requiring physical items to
                  be shipped (no time), and half the team is introverted so
                  avoid activities that feel too 'forced fun'. Goal is genuine
                  connection and stress relief."
                </p>
              </div>
            </div>

            {/* Historical Context */}
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📚</span>
                <h3 className="text-xl font-semibold text-pink-400">
                  5. Historical Context
                </h3>
              </div>
              <p className="text-gray-400 mb-4">
                What's happened before? What have you tried? What's the
                background story?
              </p>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-sm text-gray-400 mb-2">
                  ❌ Without Context:
                </p>
                <p className="text-red-300 mb-4">
                  "Help me improve email open rates"
                </p>
                <p className="text-sm text-gray-400 mb-2">✅ With Context:</p>
                <p className="text-green-300">
                  "Help me improve email open rates for our SaaS product
                  newsletter. Context: We send weekly emails to 10,000
                  subscribers (B2B tech professionals). Current open rate is
                  12%, down from 18% six months ago. We've already tried: A/B
                  testing subject lines (marginal improvement), sending at
                  different times (Tuesday 10am works best), and segmenting by
                  industry (no significant change). Our competitor has 25% open
                  rates. What else can we try?"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Context Formula */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">The Context Formula</h2>
          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-800/30 rounded-lg p-6">
            <p className="text-gray-300 mb-6">
              Use this template to structure your contextual prompts:
            </p>
            <div className="bg-[#161b22] border border-[#30363d] rounded p-6 space-y-3 font-mono text-sm">
              <p className="text-purple-300">
                <span className="text-gray-500">[ROLE/SITUATION]</span> I am/We
                are{" "}
                <span className="text-yellow-300">[your role/situation]</span>
              </p>
              <p className="text-purple-300">
                <span className="text-gray-500">[BACKGROUND]</span>{" "}
                Currently/Recently{" "}
                <span className="text-yellow-300">[relevant background]</span>
              </p>
              <p className="text-purple-300">
                <span className="text-gray-500">[AUDIENCE]</span> This is for{" "}
                <span className="text-yellow-300">
                  [target audience + their characteristics]
                </span>
              </p>
              <p className="text-purple-300">
                <span className="text-gray-500">[GOAL]</span> I want to achieve{" "}
                <span className="text-yellow-300">[desired outcome]</span>
              </p>
              <p className="text-purple-300">
                <span className="text-gray-500">[CONSTRAINTS]</span> Important
                constraints:{" "}
                <span className="text-yellow-300">[limitations]</span>
              </p>
              <p className="text-purple-300">
                <span className="text-gray-500">[TASK]</span> Please{" "}
                <span className="text-yellow-300">[specific request]</span>
              </p>
            </div>
          </div>
        </section>

        {/* Real-World Examples */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Real-World Examples</h2>

          <div className="space-y-6">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Example 1: Job Interview Preparation
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-green-300 leading-relaxed">
                  "I'm a mid-level frontend developer with 4 years of React
                  experience, interviewing for a senior position at a fintech
                  startup next week. The company is building a B2B payment
                  platform and emphasized during the screening that they value
                  system design thinking and mentorship abilities. I'm strong
                  technically but have limited experience explaining
                  architectural decisions and have never officially mentored
                  anyone. Please create 10 behavioral interview questions I
                  should prepare for, focusing on leadership, system design
                  communication, and working in a regulated industry. For each
                  question, provide a framework for structuring my answer."
                </p>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                Example 2: Content Strategy
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-green-300 leading-relaxed">
                  "I run a YouTube channel about home gardening with 5,000
                  subscribers. My audience is mainly urban millennials (25-35)
                  living in apartments who want to grow herbs and vegetables
                  indoors. My most popular videos are 'beginner mistakes' and
                  'quick tips' formats (5-7 minutes). I post weekly but my view
                  counts have plateaued at around 2,000 views per video for the
                  past 3 months. Competitors with similar content are getting
                  10-20k views. I have basic video editing skills and film with
                  my smartphone. Create a 30-day content strategy to break
                  through this plateau, including specific video topics, SEO
                  tactics, and engagement strategies that don't require
                  expensive equipment."
                </p>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-400">
                Example 3: Technical Documentation
              </h3>
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-green-300 leading-relaxed">
                  "I'm a senior developer at a healthcare company writing API
                  documentation for our new patient data API. Audience:
                  third-party developers integrating with our system, varying
                  skill levels (some junior, some senior). Constraint:
                  Healthcare data is highly regulated (HIPAA compliance
                  required), so security and privacy must be emphasized heavily.
                  Our API uses OAuth 2.0, rate limiting (1000 requests/hour),
                  and requires specific headers for audit trails. I need to
                  write the 'Getting Started' section that covers
                  authentication, making your first API call, handling errors,
                  and security best practices. Tone should be professional but
                  friendly—we want developers to feel supported, not overwhelmed
                  by regulations."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Common Context Mistakes</h2>
          <div className="space-y-4">
            <div className="bg-red-900/10 border border-red-800/30 rounded-lg p-4">
              <h3 className="font-semibold text-red-400 mb-2">
                ❌ Assuming AI Knows Your Industry
              </h3>
              <p className="text-gray-400 text-sm">
                "Write a proposal for the CFO" - Which company? What industry?
                What's the proposal for? Never assume context.
              </p>
            </div>

            <div className="bg-red-900/10 border border-red-800/30 rounded-lg p-4">
              <h3 className="font-semibold text-red-400 mb-2">
                ❌ Too Much Irrelevant Context
              </h3>
              <p className="text-gray-400 text-sm">
                Including your company's entire history when you just need a
                tweet written. Balance is key—provide relevant context only.
              </p>
            </div>

            <div className="bg-red-900/10 border border-red-800/30 rounded-lg p-4">
              <h3 className="font-semibold text-red-400 mb-2">
                ❌ Vague Context
              </h3>
              <p className="text-gray-400 text-sm">
                "For business people" vs. "For C-level executives at Fortune 500
                companies in the healthcare sector" - Be specific about context
                too.
              </p>
            </div>
          </div>
        </section>

        {/* Practice Exercise */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Practice Exercise</h2>
          <div className="bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-800/30 rounded-lg p-6">
            <p className="text-gray-400 mb-6">
              Add context to these prompts using the 5 types of context:
            </p>

            <div className="space-y-4">
              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-red-400 mb-2">1. "Write a press release"</p>
                <details className="text-sm mt-2">
                  <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
                    Show one possible answer
                  </summary>
                  <p className="text-green-400 mt-2 leading-relaxed">
                    "I'm the marketing director at GreenTech Solutions, a B2B
                    SaaS company that just secured $10M Series A funding (led by
                    Accel Partners). We're a 3-year-old startup with 50
                    employees, focused on helping manufacturing companies reduce
                    their carbon footprint through AI-powered supply chain
                    optimization. This is our first major funding announcement.
                    Target audience: tech journalists, industry publications
                    (TechCrunch, VentureBeat), and potential enterprise
                    customers. We want to emphasize our growth (300% YoY), the
                    problem we solve (manufacturing accounts for 23% of global
                    emissions), and how we'll use the funding (expand sales
                    team, enhance AI models). Write a 400-word press release in
                    AP Style that's newsworthy and data-driven."
                  </p>
                </details>
              </div>

              <div className="bg-[#161b22] border border-[#30363d] rounded p-4">
                <p className="text-red-400 mb-2">2. "Create a study guide"</p>
                <details className="text-sm mt-2">
                  <summary className="cursor-pointer text-blue-400 hover:text-blue-300">
                    Show one possible answer
                  </summary>
                  <p className="text-green-400 mt-2 leading-relaxed">
                    "I'm a college sophomore taking Organic Chemistry II,
                    struggling with reactions mechanisms (currently averaging
                    C+). My final exam is in 2 weeks covering 8 chapters:
                    aldehydes, ketones, carboxylic acids, amines, aromatic
                    compounds, and their reactions. I learn best through visual
                    diagrams and step-by-step breakdowns rather than
                    memorization. I have about 3 hours per day to study. Create
                    a 14-day study plan that prioritizes the most commonly
                    tested mechanisms, includes practice problem
                    recommendations, breaks down complex mechanisms into
                    memorable steps, and incorporates active recall techniques.
                    Focus heavily on electron pushing mechanisms since that's my
                    weakest area."
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Checklist */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Context Checklist</h2>
          <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
            <p className="text-gray-400 mb-4">
              Before submitting your prompt, ask yourself:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Does the AI know who I am and what I'm doing?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">✓</span>
                <span>
                  Did I explain who the audience is and what they care about?
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Is my goal/desired outcome clear?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Did I mention important constraints or limitations?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">✓</span>
                <span>
                  Is there relevant background or history that would help?
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-8 border border-purple-800/30 text-center">
          <h3 className="text-2xl font-bold mb-4">See Context in Action</h3>
          <p className="text-gray-400 mb-6">
            Explore community prompts with rich context
          </p>
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition"
          >
            Browse Prompts
          </Link>
        </div>
      </div>
    </div>
  );
}
