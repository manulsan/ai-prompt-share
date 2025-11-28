"use client";

import { useState } from "react";
import { Wand2, MessageSquare, List, Edit3 } from "lucide-react";

type BuilderMode = "template" | "wizard" | "ai-chat" | "manual";

interface PromptBuilderProps {
  onApply: (prompt: string, title: string, tags: string[]) => void;
  initialPrompt?: string;
}

// Import React for KeyboardEvent type
import React from "react";

export default function PromptBuilder({
  onApply,
  initialPrompt = "",
}: PromptBuilderProps) {
  const [mode, setMode] = useState<BuilderMode>("template");
  const [generatedPrompt, setGeneratedPrompt] = useState(initialPrompt);
  const [generatedTitle, setGeneratedTitle] = useState("");
  const [generatedTags, setGeneratedTags] = useState<string[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const builderTopRef = React.useRef<HTMLDivElement>(null);

  const handleApply = () => {
    onApply(generatedPrompt, generatedTitle, generatedTags);
  };

  const handleTemplateSelect = (template: any) => {
    setSelectedTemplate(template);
    setGeneratedPrompt(template.prompt);
    setGeneratedTitle(template.title);
    setGeneratedTags(template.tags);
    // Automatically switch to AI Assistant mode to help customize
    setMode("ai-chat");

    // Scroll to top of builder to show AI Assistant message
    setTimeout(() => {
      builderTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <div
      className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-6"
      ref={builderTopRef}
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <Wand2 className="w-6 h-6 text-purple-400" />
          Prompt Builder
        </h2>
        <p className="text-gray-400 text-sm">
          Create your prompt interactively with templates, wizard, or AI
          assistance
        </p>
      </div>

      {/* Mode Tabs */}
      <div className="flex gap-2 mb-6 border-b border-[#30363d] pb-2">
        <button
          onClick={() => setMode("template")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
            mode === "template"
              ? "bg-purple-600 text-white"
              : "bg-[#0d1117] text-gray-400 hover:text-white hover:bg-[#21262d]"
          }`}
        >
          <List className="w-4 h-4" />
          Templates
        </button>
        <button
          onClick={() => setMode("wizard")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
            mode === "wizard"
              ? "bg-blue-600 text-white"
              : "bg-[#0d1117] text-gray-400 hover:text-white hover:bg-[#21262d]"
          }`}
        >
          <List className="w-4 h-4" />
          Step Wizard
        </button>
        <button
          onClick={() => setMode("ai-chat")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
            mode === "ai-chat"
              ? "bg-green-600 text-white"
              : "bg-[#0d1117] text-gray-400 hover:text-white hover:bg-[#21262d]"
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          AI Assistant
        </button>
        <button
          onClick={() => setMode("manual")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
            mode === "manual"
              ? "bg-orange-600 text-white"
              : "bg-[#0d1117] text-gray-400 hover:text-white hover:bg-[#21262d]"
          }`}
        >
          <Edit3 className="w-4 h-4" />
          Manual Edit
        </button>
      </div>

      {/* Mode Content */}
      <div className="min-h-[400px]">
        {mode === "template" && (
          <TemplateMode onSelect={handleTemplateSelect} />
        )}
        {mode === "wizard" && (
          <WizardMode
            initialTemplate={selectedTemplate}
            onGenerate={(prompt, title, tags) => {
              setGeneratedPrompt(prompt);
              setGeneratedTitle(title);
              setGeneratedTags(tags);
            }}
          />
        )}
        {mode === "ai-chat" && (
          <AIChatMode
            initialTemplate={selectedTemplate}
            onGenerate={(prompt, title, tags) => {
              setGeneratedPrompt(prompt);
              setGeneratedTitle(title);
              setGeneratedTags(tags);
            }}
            setMode={setMode}
            builderTopRef={builderTopRef}
          />
        )}
        {mode === "manual" && (
          <ManualMode
            value={generatedPrompt}
            title={generatedTitle}
            tags={generatedTags}
            onChange={(prompt, title, tags) => {
              setGeneratedPrompt(prompt);
              setGeneratedTitle(title);
              setGeneratedTags(tags);
            }}
          />
        )}
      </div>

      {/* Preview & Apply - Only show when NOT in AI chat mode */}
      {generatedPrompt && mode !== "ai-chat" && (
        <div
          id="prompt-preview"
          className="mt-6 pt-6 border-t border-[#30363d]"
        >
          <h3 className="text-lg font-semibold mb-3">
            Generated Prompt Preview
          </h3>
          <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 mb-4">
            {generatedTitle && (
              <div className="mb-3">
                <span className="text-gray-400 text-sm">Title:</span>
                <p className="text-white font-semibold">{generatedTitle}</p>
              </div>
            )}
            <div className="mb-3">
              <span className="text-gray-400 text-sm">Prompt:</span>
              <p className="text-gray-300 whitespace-pre-wrap">
                {generatedPrompt}
              </p>
            </div>
            {generatedTags.length > 0 && (
              <div>
                <span className="text-gray-400 text-sm">Tags:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {generatedTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button
            id="apply-to-form-btn"
            onClick={handleApply}
            className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition"
          >
            Apply to Form
          </button>
        </div>
      )}
    </div>
  );
}

// Template Mode Component
function TemplateMode({ onSelect }: { onSelect: (template: any) => void }) {
  const templates = [
    {
      id: "software-project",
      category: "Software Development",
      title: "Software Project Documentation",
      description:
        "Complete project setup guide with prompts, stack, and workflow",
      prompt: `# [PROJECT_NAME] - Development Prompts & Documentation

## Project Overview
[PROJECT_DESCRIPTION]

## Tech Stack
[TECH_STACK_LIST]

## Project Structure
\`\`\`
[PROJECT_STRUCTURE]
\`\`\`

## Environment Variables

### \`.env.local\`
\`\`\`env
[ENVIRONMENT_VARIABLES]
\`\`\`

## Setup Instructions

### 1. Install Dependencies
\`\`\`bash
[INSTALL_COMMANDS]
\`\`\`

### 2. Configuration Steps
[CONFIGURATION_STEPS]

### 3. Run Development Server
\`\`\`bash
[RUN_COMMANDS]
\`\`\`

## Key Features
[KEY_FEATURES_LIST]

## API Routes
[API_ROUTES_LIST]

## Common Development Tasks
[DEVELOPMENT_TASKS]

## Troubleshooting Checklist
[TROUBLESHOOTING_ITEMS]

## Useful Commands
\`\`\`bash
[USEFUL_COMMANDS]
\`\`\`

---

**Last Updated**: [DATE]
`,
      tags: ["Documentation", "Setup", "Development"],
    },
    {
      id: "marketing-email",
      category: "Marketing",
      title: "Marketing Email Campaign",
      description: "Generate persuasive email copy for marketing campaigns",
      prompt: `Write a marketing email for [PRODUCT/SERVICE].

Target Audience: [DESCRIBE YOUR AUDIENCE]
Key Benefits: [LIST 3-5 BENEFITS]
Call-to-Action: [WHAT ACTION DO YOU WANT?]
Tone: [PROFESSIONAL/CASUAL/FRIENDLY]

Requirements:
- Subject line that grabs attention
- Opening hook
- Clear value proposition
- Strong CTA
- Keep under 200 words`,
      tags: ["Marketing", "Email", "Business"],
    },
    {
      id: "code-review",
      category: "Coding",
      title: "Code Review Assistant",
      description: "Get detailed code review feedback",
      prompt: `Review the following code and provide feedback:

\`\`\`[LANGUAGE]
[PASTE YOUR CODE HERE]
\`\`\`

Please analyze:
1. Code quality and best practices
2. Potential bugs or issues
3. Performance optimization opportunities
4. Security considerations
5. Suggestions for improvement

Focus on: [SPECIFIC AREAS OF CONCERN]`,
      tags: ["Coding", "Review", "Best Practices"],
    },
    {
      id: "lesson-plan",
      category: "Education",
      title: "Lesson Plan Creator",
      description: "Design comprehensive lesson plans",
      prompt: `Create a lesson plan for teaching [TOPIC].

Grade Level: [SPECIFY GRADE/AGE]
Duration: [TIME LENGTH]
Learning Objectives: [WHAT SHOULD STUDENTS LEARN?]
Prior Knowledge: [WHAT DO THEY ALREADY KNOW?]

Include:
- Introduction/Hook (5 min)
- Main Content (detailed explanation)
- Activities/Exercises
- Assessment methods
- Materials needed
- Homework/Follow-up`,
      tags: ["Education", "Teaching", "Lesson Plan"],
    },
    {
      id: "business-strategy",
      category: "Business",
      title: "Business Strategy Analysis",
      description: "Analyze business strategies and opportunities",
      prompt: `Analyze the business strategy for [COMPANY/PRODUCT].

Context:
- Industry: [SPECIFY]
- Target Market: [DESCRIBE]
- Current Position: [MARKET LEADER/CHALLENGER/STARTUP]
- Key Competitors: [LIST]

Provide analysis on:
1. SWOT Analysis (Strengths, Weaknesses, Opportunities, Threats)
2. Market positioning
3. Competitive advantages
4. Growth opportunities
5. Risk factors
6. Strategic recommendations`,
      tags: ["Business", "Strategy", "Analysis"],
    },
    {
      id: "creative-story",
      category: "Creative",
      title: "Creative Story Generator",
      description: "Generate creative stories and narratives",
      prompt: `Write a creative story with these elements:

Genre: [FANTASY/SCI-FI/MYSTERY/ROMANCE/etc.]
Setting: [TIME & PLACE]
Main Character: [DESCRIBE]
Conflict/Challenge: [WHAT PROBLEM DO THEY FACE?]
Tone: [DARK/LIGHTHEARTED/SUSPENSEFUL/etc.]
Length: [SHORT/MEDIUM/LONG]

Style preferences:
- [FIRST-PERSON/THIRD-PERSON]
- [ANY SPECIFIC WRITING STYLE?]

Additional elements to include:
[PLOT TWISTS, THEMES, SPECIFIC SCENES, etc.]`,
      tags: ["Creative", "Writing", "Story"],
    },
  ];

  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const handleUseTemplate = (template: (typeof templates)[0]) => {
    setSelectedTemplate(template.id);
    onSelect(template);
  };

  return (
    <div>
      <p className="text-gray-400 mb-4">
        Choose a template to get started. After selection, AI Assistant will
        help you customize it.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`bg-[#0d1117] border rounded-lg p-4 cursor-pointer transition ${
              selectedTemplate === template.id
                ? "border-purple-500 shadow-lg shadow-purple-500/20"
                : "border-[#30363d] hover:border-purple-500/50"
            }`}
            onClick={() => handleUseTemplate(template)}
          >
            <div className="flex items-start justify-between mb-2">
              <span className="text-xs px-2 py-1 bg-blue-600/20 text-blue-400 rounded">
                {template.category}
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{template.title}</h3>
            <p className="text-gray-400 text-sm mb-3">{template.description}</p>
            <div className="flex flex-wrap gap-1">
              {template.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 bg-gray-700 text-gray-300 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Wizard Mode Component (Placeholder)
function WizardMode({
  initialTemplate,
  onGenerate,
}: {
  initialTemplate?: any;
  onGenerate: (prompt: string, title: string, tags: string[]) => void;
}) {
  return (
    <div className="text-center py-12">
      <List className="w-16 h-16 text-blue-400 mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">Step-by-Step Wizard</h3>
      {initialTemplate ? (
        <p className="text-gray-400">
          Coming soon - Wizard mode for customizing{" "}
          <strong>{initialTemplate.title}</strong>
        </p>
      ) : (
        <p className="text-gray-400">
          Coming soon - Guided prompt creation in 4 easy steps
        </p>
      )}
    </div>
  );
}

// AI Chat Mode Component
function AIChatMode({
  initialTemplate,
  onGenerate,
  setMode,
  builderTopRef,
}: {
  initialTemplate?: any;
  onGenerate: (prompt: string, title: string, tags: string[]) => void;
  setMode: (mode: BuilderMode) => void;
  builderTopRef: React.RefObject<HTMLDivElement | null>;
}) {
  const getInitialMessage = () => {
    if (initialTemplate) {
      const templateId = initialTemplate.id;

      // Customize first question based on template
      if (templateId === "software-project") {
        return `Great choice! You've selected the **${initialTemplate.title}** template.\n\nI'll help you create a comprehensive PROMPTS.md file for your new project. Let's start!\n\n**Question 1 of 6:** What is your project name?\n\nExamples: 'Prompt Sharing App', 'E-commerce Platform', 'Task Manager', 'Social Media Dashboard', etc.`;
      }

      if (templateId === "code-review") {
        return `Great choice! You've selected the **${initialTemplate.title}** template.\n\nI'll help you customize this prompt for your code review needs. Let's start!\n\n**Question 1 of 3:** What programming language is your code written in?\n\nExamples: 'Python', 'JavaScript', 'TypeScript', 'Java', 'C++', etc.`;
      }

      if (templateId === "lesson-plan") {
        return `Great choice! You've selected the **${initialTemplate.title}** template.\n\nI'll help you create a comprehensive lesson plan. Let's start!\n\n**Question 1 of 6:** What topic or subject will you be teaching?\n\nFor example: 'Photosynthesis', 'World War II', 'Algebra basics', 'Python programming', etc.`;
      }

      // Default for other templates
      return `Great choice! You've selected the **${
        initialTemplate.title
      }** template.\n\nI'll help you customize this prompt. Let's start with filling in the details.\n\n**What specific ${initialTemplate.category.toLowerCase()} goal do you have?**\n\nFor example: If it's marketing - "Launch email for new SaaS product", if it's coding - "Review React component code", etc.`;
    }
    return "Hi! I'm here to help you create the perfect prompt. Let's start with a simple question:\n\n**What do you want to create or accomplish with this prompt?**\n\nFor example: 'Write marketing copy', 'Generate code', 'Plan a lesson', 'Analyze data', etc.";
  };

  const [messages, setMessages] = useState<
    Array<{ role: "assistant" | "user"; content: string }>
  >([
    {
      role: "assistant",
      content: getInitialMessage(),
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [conversationStep, setConversationStep] = useState(1);
  const [finalGeneratedPrompt, setFinalGeneratedPrompt] = useState("");
  const [promptData, setPromptData] = useState({
    purpose: "",
    audience: "",
    context: "",
    format: "",
    constraints: "",
    tone: "",
  });
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  // Reset conversation when initialTemplate changes
  React.useEffect(() => {
    setMessages([
      {
        role: "assistant",
        content: getInitialMessage(),
      },
    ]);
    setConversationStep(1);
    setFinalGeneratedPrompt("");
    setPromptData({
      purpose: "",
      audience: "",
      context: "",
      format: "",
      constraints: "",
      tone: "",
    });
  }, [initialTemplate]);

  // Auto scroll to bottom when messages change (within chat container only)
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest", // Don't scroll the whole page
      inline: "nearest",
    });
  }, [messages, isGenerating]);

  const getNextQuestion = (step: number): string => {
    // Customize questions based on template
    if (initialTemplate) {
      const templateId = initialTemplate.id;

      if (templateId === "software-project") {
        const softwareQuestions: Record<number, string> = {
          2: `**Question 2 of 6:** What's your tech stack?\n\nList the main technologies, frameworks, and tools.\n\nExamples: 'Next.js 15, React 19, MongoDB, Tailwind CSS, TypeScript' or 'Django, PostgreSQL, Redis, Docker'`,
          3: `**Question 3 of 6:** Describe your project.\n\nWhat does it do? What problem does it solve?\n\nExamples: 'A blog platform with OAuth authentication and MongoDB storage' or 'E-commerce site with Stripe payments and admin dashboard'`,
          4: `**Question 4 of 6:** What are the key features?\n\nList 3-5 main features or functionalities.\n\nExamples: 'User authentication, CRUD operations, Image upload, Search' or 'Shopping cart, Payment processing, Order tracking'`,
          5: `**Question 5 of 6:** What environment variables are needed?\n\nList the required env vars (one per line or comma-separated).\n\nExamples: 'DATABASE_URL, API_KEY, NEXTAUTH_SECRET, GOOGLE_CLIENT_ID' or 'STRIPE_KEY, AWS_BUCKET, JWT_SECRET'`,
          6: `**Question 6 of 6:** What commands to run the project?\n\nInstall, setup, and start commands.\n\nExamples: 'npm install, npm run dev' or 'pip install -r requirements.txt, python manage.py runserver'`,
        };
        return softwareQuestions[step] || "";
      }

      if (templateId === "code-review") {
        const codeReviewQuestions: Record<number, string> = {
          2: `**Question 2 of 3:** Please paste your code here.\n\nYou can paste the actual code you want reviewed.`,
          3: `**Question 3 of 3:** What specific areas should I focus on?\n\nExamples: 'Performance optimization', 'Security vulnerabilities', 'Code readability', 'Best practices', 'Bug detection', etc.`,
        };
        return codeReviewQuestions[step] || "";
      }

      if (templateId === "lesson-plan") {
        const lessonQuestions: Record<number, string> = {
          2: `What grade level or age group is this for?\n\nExamples: 'Elementary school (grades 1-5)', 'High school seniors', 'College students', 'Adult learners', etc.`,
          3: `What prior knowledge do students have?\n\nWhat concepts or skills should they already know before this lesson?`,
          4: `How long should the lesson be?\n\nExamples: '45 minutes', '1 hour', '90 minutes', 'Full day workshop', etc.`,
          5: `What are the specific learning objectives?\n\nWhat should students be able to do or understand by the end?`,
          6: `What teaching style or tone should it have?\n\nExamples: 'Interactive and hands-on', 'Lecture-based', 'Discussion-oriented', 'Project-based', etc.`,
        };
        return lessonQuestions[step] || "";
      }
    }

    // Default questions for non-template or other templates
    const questions: Record<number, string> = {
      2: `Great! Now, **who is your target audience?**\n\nWho will use the output or who is it intended for?\n\nExamples: 'Software developers', 'Marketing team', 'Students', 'Business executives', 'General public', etc.`,
      3: `Perfect! Let me understand the context better.\n\n**Can you provide some background or context?**\n\nWhat's the situation, setting, or important details I should know?\n\nExamples: 'For a startup launching a new product', 'Working with React and TypeScript', 'Teaching high school students', etc.`,
      4: `Excellent! Now for the output format:\n\n**How would you like the output formatted?**\n\nExamples: 'Bullet points', 'Step-by-step guide', 'JSON format', 'Formal essay', 'Email format', 'Code with comments', etc.`,
      5: `Almost there! **Are there any specific constraints or requirements?**\n\nThings like word count, style preferences, things to avoid, specific elements to include, etc.\n\nExamples: 'Keep it under 200 words', 'Use simple language', 'Include examples', 'Avoid technical jargon', or type 'none' if no constraints.`,
      6: `Last question! **What tone or style should it have?**\n\nExamples: 'Professional', 'Casual and friendly', 'Technical and precise', 'Persuasive', 'Educational', etc.`,
    };

    return questions[step] || "";
  };

  const generateFinalPrompt = (data: typeof promptData) => {
    // If there's a template, merge it with user answers
    if (initialTemplate) {
      let customizedPrompt = initialTemplate.prompt;

      // Replace placeholders with actual values
      if (data.purpose) {
        customizedPrompt = customizedPrompt.replace(
          /\[PROJECT_NAME\]/gi,
          data.purpose
        );
        customizedPrompt = customizedPrompt.replace(
          /\[PRODUCT\/SERVICE\]/gi,
          data.purpose
        );
        customizedPrompt = customizedPrompt.replace(
          /\[TOPIC\]/gi,
          data.purpose
        );
        customizedPrompt = customizedPrompt.replace(
          /\[COMPANY\/PRODUCT\]/gi,
          data.purpose
        );
        customizedPrompt = customizedPrompt.replace(
          /\[LANGUAGE\]/gi,
          data.purpose
        );
      }
      if (data.audience) {
        customizedPrompt = customizedPrompt.replace(
          /\[TECH_STACK_LIST\]/gi,
          data.audience
        );
        customizedPrompt = customizedPrompt.replace(
          /\[DESCRIBE YOUR AUDIENCE\]/gi,
          data.audience
        );
        customizedPrompt = customizedPrompt.replace(
          /\[SPECIFY GRADE\/AGE\]/gi,
          data.audience
        );
      }
      if (data.context) {
        customizedPrompt = customizedPrompt.replace(
          /\[PROJECT_DESCRIPTION\]/gi,
          data.context
        );
        customizedPrompt = customizedPrompt.replace(
          /\[DESCRIBE\]/gi,
          data.context
        );
        customizedPrompt = customizedPrompt.replace(/\[LIST\]/gi, data.context);
        customizedPrompt = customizedPrompt.replace(
          /\[PASTE YOUR CODE HERE\]/gi,
          data.context
        );
      }
      if (data.format) {
        customizedPrompt = customizedPrompt.replace(
          /\[KEY_FEATURES_LIST\]/gi,
          data.format
        );
        customizedPrompt = customizedPrompt.replace(
          /\[TIME LENGTH\]/gi,
          data.format
        );
      }
      if (data.constraints) {
        customizedPrompt = customizedPrompt.replace(
          /\[ENVIRONMENT_VARIABLES\]/gi,
          data.constraints
        );
        customizedPrompt = customizedPrompt.replace(
          /\[SPECIFIC AREAS OF CONCERN\]/gi,
          data.constraints
        );
        customizedPrompt = customizedPrompt.replace(
          /\[WHAT SHOULD STUDENTS LEARN\?\]/gi,
          data.constraints
        );
        customizedPrompt = customizedPrompt.replace(
          /\[WHAT DO THEY ALREADY KNOW\?\]/gi,
          data.constraints
        );
      }
      if (data.tone) {
        customizedPrompt = customizedPrompt.replace(
          /\[INSTALL_COMMANDS\]/gi,
          data.tone.split(",")[0]?.trim() || data.tone
        );
        customizedPrompt = customizedPrompt.replace(
          /\[RUN_COMMANDS\]/gi,
          data.tone.split(",")[1]?.trim() || data.tone
        );
        customizedPrompt = customizedPrompt.replace(
          /\[PROFESSIONAL\/CASUAL\/FRIENDLY\]/gi,
          data.tone
        );
        customizedPrompt = customizedPrompt.replace(
          /\[DARK\/LIGHTHEARTED\/SUSPENSEFUL\/etc\.\]/gi,
          data.tone
        );
      }

      // Add date
      const today = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      customizedPrompt = customizedPrompt.replace(/\[DATE\]/gi, today);

      console.log(
        "generateFinalPrompt - Final customized prompt:",
        customizedPrompt
      );

      return {
        prompt: customizedPrompt,
        title: initialTemplate.title,
        tags: initialTemplate.tags,
      };
    }

    // Original prompt generation logic
    const sections = [];

    if (data.purpose) {
      sections.push(`**Objective:** ${data.purpose}`);
    }

    if (data.audience) {
      sections.push(`**Target Audience:** ${data.audience}`);
    }

    if (data.context) {
      sections.push(`**Context:**\n${data.context}`);
    }

    if (data.format) {
      sections.push(`**Format:** ${data.format}`);
    }

    if (data.constraints && data.constraints.toLowerCase() !== "none") {
      sections.push(`**Requirements:**\n${data.constraints}`);
    }

    if (data.tone) {
      sections.push(`**Tone:** ${data.tone}`);
    }

    const finalPrompt = sections.join("\n\n");

    // Generate title from purpose
    const title = data.purpose.split(" ").slice(0, 5).join(" ") + " Prompt";

    // Generate tags
    const tags = [];
    if (data.purpose.toLowerCase().includes("market")) tags.push("Marketing");
    if (
      data.purpose.toLowerCase().includes("code") ||
      data.purpose.toLowerCase().includes("programming")
    )
      tags.push("Coding");
    if (
      data.purpose.toLowerCase().includes("teach") ||
      data.purpose.toLowerCase().includes("lesson")
    )
      tags.push("Education");
    if (
      data.purpose.toLowerCase().includes("business") ||
      data.purpose.toLowerCase().includes("strategy")
    )
      tags.push("Business");
    if (
      data.purpose.toLowerCase().includes("write") ||
      data.purpose.toLowerCase().includes("story")
    )
      tags.push("Creative");
    if (tags.length === 0) tags.push("AI", "General");

    return { prompt: finalPrompt, title, tags };
  };

  const handleSend = () => {
    if (!userInput.trim() || isGenerating) return;

    const currentAnswer = userInput.trim();

    // Add user message
    const newMessages = [
      ...messages,
      { role: "user" as const, content: currentAnswer },
    ];
    setMessages(newMessages);
    setIsGenerating(true);
    setUserInput(""); // Clear input immediately

    // Determine total steps and field mapping based on template
    let totalSteps = 6;
    let fieldMap: Record<number, keyof typeof promptData> = {
      1: "purpose",
      2: "audience",
      3: "context",
      4: "format",
      5: "constraints",
      6: "tone",
    };

    // Code Review template: only 3 questions
    if (initialTemplate?.id === "code-review") {
      totalSteps = 3;
      fieldMap = {
        1: "purpose", // Language
        2: "context", // Code
        3: "constraints", // Focus areas
      };
    }

    // Lesson Plan template: use all 6 questions
    if (initialTemplate?.id === "lesson-plan") {
      totalSteps = 6;
      // Keep default mapping
    }

    const currentField = fieldMap[conversationStep];

    // Update prompt data with current answer
    const updatedPromptData = {
      ...promptData,
      [currentField]: currentAnswer,
    };
    setPromptData(updatedPromptData);

    const nextStep = conversationStep + 1;

    setTimeout(() => {
      if (nextStep <= totalSteps) {
        // Continue conversation
        const nextQuestion = getNextQuestion(nextStep);
        setMessages([
          ...newMessages,
          { role: "assistant", content: nextQuestion },
        ]);
        setConversationStep(nextStep);

        // Generate intermediate preview to show progress
        const { prompt, title, tags } = generateFinalPrompt(updatedPromptData);
        setFinalGeneratedPrompt(prompt);
        onGenerate(prompt, title, tags);
      } else {
        // Final step - generate prompt
        const { prompt, title, tags } = generateFinalPrompt(updatedPromptData);
        setFinalGeneratedPrompt(prompt);

        setMessages([
          ...newMessages,
          {
            role: "assistant",
            content: `Perfect! I've created your prompt based on our conversation. 🎉\n\nYou can review it below and click "Continue to Manual Edit" when you're ready to apply it to your form.`,
          },
        ]);

        // Set conversationStep to 7 to show the completion UI
        setConversationStep(nextStep);
        onGenerate(prompt, title, tags);
      }

      setIsGenerating(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col">
      {/* Chat Messages - Increased height for better visibility */}
      <div className="h-[600px] overflow-y-auto mb-4 space-y-4 pr-2 border border-[#30363d] rounded-lg p-4 bg-[#0d1117]">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-4 ${
                message.role === "user"
                  ? "bg-green-600/20 text-green-100 border border-green-600/30"
                  : "bg-[#0d1117] text-gray-300 border border-[#30363d]"
              }`}
            >
              {message.role === "assistant" && (
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-green-400 font-semibold">
                    AI Assistant
                  </span>
                </div>
              )}
              <div className="whitespace-pre-wrap text-sm">
                {message.content.split("**").map((part, i) =>
                  i % 2 === 0 ? (
                    part
                  ) : (
                    <strong key={i} className="text-white">
                      {part}
                    </strong>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
        {isGenerating && (
          <div className="flex justify-start">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div
                    className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                </div>
                <span className="text-sm text-gray-400">Thinking...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-[#30363d] pt-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your answer here..."
            disabled={
              isGenerating ||
              conversationStep > (initialTemplate?.id === "code-review" ? 3 : 6)
            }
            className="flex-1 px-4 py-2 bg-[#0d1117] border border-[#30363d] rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            onClick={handleSend}
            disabled={
              !userInput.trim() ||
              isGenerating ||
              conversationStep > (initialTemplate?.id === "code-review" ? 3 : 6)
            }
            className="px-6 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition"
          >
            Send
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Press Enter to send •{" "}
          {conversationStep <= (initialTemplate?.id === "code-review" ? 3 : 6)
            ? `Question ${conversationStep} of ${
                initialTemplate?.id === "code-review" ? 3 : 6
              }`
            : "Conversation complete"}
        </p>
      </div>

      {/* Show preview only when conversation is complete */}
      {conversationStep > (initialTemplate?.id === "code-review" ? 3 : 6) && (
        <div
          className="mt-6 pt-6 border-t border-[#30363d]"
          id="ai-chat-complete"
        >
          <h3 className="text-lg font-semibold mb-3 text-green-400">
            ✅ Your Customized Prompt is Ready!
          </h3>
          <div className="bg-[#0d1117] border border-green-600/30 rounded-lg p-4 mb-4">
            <p className="text-gray-400 text-sm mb-2">Preview:</p>
            <p className="text-gray-300 text-sm whitespace-pre-wrap line-clamp-4">
              {finalGeneratedPrompt.slice(0, 200)}...
            </p>
          </div>
          <p className="text-gray-400 text-sm mb-3">
            Click below to switch to Manual Edit mode where you can review the
            full prompt and apply it to your form.
          </p>
          <button
            onClick={() => {
              // Switch to manual mode immediately
              setMode("manual");
              // Scroll to top of builder after mode switch
              requestAnimationFrame(() => {
                builderTopRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              });
            }}
            className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition flex items-center justify-center gap-2"
          >
            <Edit3 className="w-4 h-4" />
            Continue to Manual Edit
          </button>
        </div>
      )}
    </div>
  );
}

// Manual Mode Component
function ManualMode({
  value,
  title,
  tags,
  onChange,
}: {
  value: string;
  title: string;
  tags: string[];
  onChange: (prompt: string, title: string, tags: string[]) => void;
}) {
  console.log("ManualMode - Received props:", { value, title, tags });

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-400">Edit your prompt directly</p>
        <span className="text-xs text-green-400">
          {value
            ? `✓ Prompt loaded (${value.length} characters)`
            : "⚠️ No prompt data"}
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => onChange(value, e.target.value, tags)}
            className="w-full px-4 py-2 bg-[#0d1117] border border-[#30363d] rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter prompt title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Prompt Content
          </label>
          <textarea
            key={`prompt-${value.length}`}
            value={value}
            onChange={(e) => onChange(e.target.value, title, tags)}
            rows={12}
            className="w-full px-4 py-2 bg-[#0d1117] border border-[#30363d] rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm resize-y"
            placeholder="Write your prompt here..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            value={tags.join(", ")}
            onChange={(e) =>
              onChange(
                value,
                title,
                e.target.value
                  .split(",")
                  .map((t) => t.trim())
                  .filter((t) => t)
              )
            }
            className="w-full px-4 py-2 bg-[#0d1117] border border-[#30363d] rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="AI, Marketing, Coding"
          />
        </div>
      </div>
    </div>
  );
}
