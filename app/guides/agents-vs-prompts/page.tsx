"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileCode,
  FileText,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function AgentsVsPromptsGuidePage() {
  const [activeTab, setActiveTab] = useState<"overview" | "agents" | "prompts">(
    "overview"
  );
  const [language, setLanguage] = useState<"ko" | "en">("en");

  // Translation object
  const t = {
    hero: {
      subtitle: {
        ko: "프로젝트 문서화의 두 가지 접근법을 이해하고, 각각의 목적과 사용법을 배워보세요",
        en: "Understand two approaches to project documentation and learn the purpose and usage of each",
      },
    },
    quickComparison: {
      title: {
        ko: "빠른 비교",
        en: "Quick Comparison",
      },
    },
    agents: {
      subtitle: {
        ko: "AI 코딩 어시스턴트를 위한 프로젝트 규칙서",
        en: "Project guidelines for AI coding assistants",
      },
      audience: {
        ko: "독자: GitHub Copilot, AI 어시스턴트",
        en: "Audience: GitHub Copilot, AI Assistants",
      },
      purpose: {
        ko: "목적: 일관된 코드 생성 가이드",
        en: "Purpose: Consistent code generation guide",
      },
      content: {
        ko: "내용: 코딩 규칙, 패턴, 아키텍처",
        en: "Content: Coding rules, patterns, architecture",
      },
      detailButton: {
        ko: "자세히 보기",
        en: "Learn More",
      },
    },
    prompts: {
      subtitle: {
        ko: "개발자를 위한 프로젝트 전체 문서",
        en: "Complete project documentation for developers",
      },
      audience: {
        ko: "독자: 개발자 (사람)",
        en: "Audience: Developers (Humans)",
      },
      purpose: {
        ko: "목적: 프로젝트 설정 및 실행 가이드",
        en: "Purpose: Project setup and execution guide",
      },
      content: {
        ko: "내용: 설치, 설정, 문제 해결",
        en: "Content: Installation, configuration, troubleshooting",
      },
      detailButton: {
        ko: "자세히 보기",
        en: "Learn More",
      },
    },
    tabs: {
      overview: {
        ko: "개요",
        en: "Overview",
      },
    },
    overview: {
      title: {
        ko: "왜 두 가지 문서가 필요할까요?",
        en: "Why do we need two types of documentation?",
      },
      forAI: {
        title: {
          ko: "AI를 위한 문서",
          en: "Documentation for AI",
        },
        description: {
          ko: 'GitHub Copilot 같은 AI 도구는 당신의 프로젝트 스타일을 모릅니다. AGENTS.md는 AI에게 "우리 팀은 이렇게 코딩해"라고 알려주는 교과서입니다.',
          en: "AI tools like GitHub Copilot don't know your project's style. AGENTS.md is a textbook that tells the AI \"This is how our team codes.\"",
        },
        example: {
          ko: '💡 예: "컴포넌트는 PascalCase로 작성하고, Server Component가 기본이야"',
          en: '💡 Example: "Components are written in PascalCase, and Server Components are the default"',
        },
      },
      forDevelopers: {
        title: {
          ko: "개발자를 위한 문서",
          en: "Documentation for Developers",
        },
        description: {
          ko: '새로운 팀원이나 미래의 당신은 프로젝트 설정 방법을 모를 수 있습니다. PROMPTS.md는 "이렇게 설정하고 실행해"라고 알려주는 사용 설명서입니다.',
          en: 'New team members or future you may not know how to set up the project. PROMPTS.md is a user manual that tells you "Set up and run it this way."',
        },
        example: {
          ko: '💡 예: "Google OAuth 설정은 이 3단계를 따라하세요"',
          en: '💡 Example: "Follow these 3 steps to set up Google OAuth"',
        },
      },
      analogyTitle: {
        ko: "비유로 이해하기",
        en: "Understanding through Analogy",
      },
      agentsAnalogy: {
        title: {
          ko: "AGENTS.md = 공장 제조 매뉴얼",
          en: "AGENTS.md = Factory Manufacturing Manual",
        },
        points: {
          ko: [
            "• 로봇(AI)이 제품(코드)을 만들 때 참조",
            '• "나사는 3mm, 각도는 90도"',
            "• 정확한 규격과 방법",
          ],
          en: [
            "• Referenced when robots (AI) make products (code)",
            '• "Screw is 3mm, angle is 90 degrees"',
            "• Precise specifications and methods",
          ],
        },
      },
      promptsAnalogy: {
        title: {
          ko: "PROMPTS.md = 제품 사용 설명서",
          en: "PROMPTS.md = Product User Manual",
        },
        points: {
          ko: [
            "• 사용자(개발자)가 제품(프로젝트)을 쓸 때 참조",
            '• "전원 버튼 여기, 설정은 이렇게"',
            "• 친절한 단계별 가이드",
          ],
          en: [
            "• Referenced when users (developers) use the product (project)",
            '• "Power button here, settings like this"',
            "• Friendly step-by-step guide",
          ],
        },
      },
      scenariosTitle: {
        ko: "실제 사용 시나리오",
        en: "Real-world Usage Scenarios",
      },
      scenario1: {
        title: {
          ko: "시나리오 1: AI가 코드 생성",
          en: "Scenario 1: AI Generates Code",
        },
        description: {
          ko: '개발자: "새 페이지 만들어줘"',
          en: 'Developer: "Create a new page"',
        },
        result: {
          ko: "→ AI가 AGENTS.md를 읽고 프로젝트 패턴을 따라 코드 생성",
          en: "→ AI reads AGENTS.md and generates code following project patterns",
        },
      },
      scenario2: {
        title: {
          ko: "시나리오 2: 새 팀원 합류",
          en: "Scenario 2: New Team Member Joins",
        },
        description: {
          ko: '새 개발자: "프로젝트 어떻게 시작하지?"',
          en: 'New developer: "How do I start the project?"',
        },
        result: {
          ko: "→ PROMPTS.md를 보고 설정, 실행, 개발 방법 학습",
          en: "→ Reads PROMPTS.md to learn setup, execution, and development methods",
        },
      },
      scenario3: {
        title: {
          ko: "시나리오 3: 에러 발생",
          en: "Scenario 3: Error Occurs",
        },
        description: {
          ko: '개발자: "redirect_uri_mismatch 에러가 나요"',
          en: 'Developer: "I\'m getting a redirect_uri_mismatch error"',
        },
        result: {
          ko: "→ PROMPTS.md의 문제 해결 섹션에서 해결책 찾기",
          en: "→ Find solution in PROMPTS.md troubleshooting section",
        },
      },
    },
    cta: {
      title: {
        ko: "프로젝트 문서를 만들어보세요!",
        en: "Create Your Project Documentation!",
      },
      description: {
        ko: "AI Assistant를 사용하여 당신의 프로젝트에 맞는 AGENTS.md와 PROMPTS.md를 빠르게 생성할 수 있습니다.",
        en: "Use AI Assistant to quickly generate AGENTS.md and PROMPTS.md tailored to your project.",
      },
      button: {
        ko: "지금 시작하기",
        en: "Get Started Now",
      },
    },
    aiTools: {
      title: {
        ko: "AI 도구별 사용 가이드",
        en: "AI Tool-Specific Usage Guides",
      },
      subtitle: {
        ko: "각 AI 도구에서 AGENTS.md와 PROMPTS.md를 효과적으로 사용하는 방법을 배워보세요",
        en: "Learn how to effectively use AGENTS.md and PROMPTS.md with each AI tool",
      },
      tools: [
        {
          name: "GitHub Copilot",
          icon: "💻",
          agentsLink: {
            ko: "https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot",
            en: "https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot",
          },
          promptsLink: {
            ko: "https://github.blog/developer-skills/github/how-to-write-better-prompts-for-github-copilot/",
            en: "https://github.blog/developer-skills/github/how-to-write-better-prompts-for-github-copilot/",
          },
          agentsTitle: {
            ko: "Copilot에 프로젝트 규칙 알려주기",
            en: "Teaching Project Rules to Copilot",
          },
          promptsTitle: {
            ko: "프로젝트 설정 문서화",
            en: "Documenting Project Setup",
          },
        },
        {
          name: "Cursor AI",
          icon: "🎯",
          agentsLink: {
            ko: "https://docs.cursor.com/context/rules-for-ai",
            en: "https://docs.cursor.com/context/rules-for-ai",
          },
          promptsLink: {
            ko: "https://docs.cursor.com/get-started/migrate-from-vscode",
            en: "https://docs.cursor.com/get-started/migrate-from-vscode",
          },
          agentsTitle: {
            ko: "Cursor에서 AI 규칙 설정",
            en: "Setting AI Rules in Cursor",
          },
          promptsTitle: {
            ko: "프로젝트 마이그레이션 가이드",
            en: "Project Migration Guide",
          },
        },
        {
          name: "Claude (Anthropic)",
          icon: "🤖",
          agentsLink: {
            ko: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
            en: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
          },
          promptsLink: {
            ko: "https://docs.anthropic.com/en/docs/about-claude/use-case-guides",
            en: "https://docs.anthropic.com/en/docs/about-claude/use-case-guides",
          },
          agentsTitle: {
            ko: "Claude 프롬프트 엔지니어링",
            en: "Claude Prompt Engineering",
          },
          promptsTitle: {
            ko: "사용 사례 가이드",
            en: "Use Case Guides",
          },
        },
        {
          name: "ChatGPT (OpenAI)",
          icon: "🧠",
          agentsLink: {
            ko: "https://platform.openai.com/docs/guides/prompt-engineering",
            en: "https://platform.openai.com/docs/guides/prompt-engineering",
          },
          promptsLink: {
            ko: "https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api",
            en: "https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api",
          },
          agentsTitle: {
            ko: "GPT 프롬프트 엔지니어링 가이드",
            en: "GPT Prompt Engineering Guide",
          },
          promptsTitle: {
            ko: "API 사용 모범 사례",
            en: "API Best Practices",
          },
        },
      ],
    },
    viewFullDoc: {
      ko: "전체 문서 보기",
      en: "View Full Document",
    },
  };

  return (
    <div className="min-w-full bg-[#0d1117] text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#161b22] to-[#0d1117] border-b border-[#30363d]">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AGENTS.md vs PROMPTS.md
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {t.hero.subtitle[language]}
            </p>

            {/* Language Toggle */}
            <div className="flex justify-center gap-2 mb-8">
              <button
                onClick={() => setLanguage("ko")}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  language === "ko"
                    ? "bg-purple-600 text-white"
                    : "bg-[#161b22] text-gray-400 hover:text-white"
                }`}
              >
                한국어
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  language === "en"
                    ? "bg-purple-600 text-white"
                    : "bg-[#161b22] text-gray-400 hover:text-white"
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Comparison Cards */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          {t.quickComparison.title[language]}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* AGENTS.md Card */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 hover:border-blue-500 transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-600/20 rounded-lg">
                <FileCode className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold">AGENTS.md</h3>
            </div>
            <p className="text-gray-400 mb-4">{t.agents.subtitle[language]}</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  {t.agents.audience[language]}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  {t.agents.purpose[language]}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  {t.agents.content[language]}
                </span>
              </li>
            </ul>
            <button
              onClick={() => setActiveTab("agents")}
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              {t.agents.detailButton[language]}{" "}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* PROMPTS.md Card */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 hover:border-purple-500 transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-600/20 rounded-lg">
                <FileText className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold">PROMPTS.md</h3>
            </div>
            <p className="text-gray-400 mb-4">{t.prompts.subtitle[language]}</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  {t.prompts.audience[language]}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  {t.prompts.purpose[language]}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  {t.prompts.content[language]}
                </span>
              </li>
            </ul>
            <button
              onClick={() => setActiveTab("prompts")}
              className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              {t.prompts.detailButton[language]}{" "}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition ${
              activeTab === "overview"
                ? "bg-green-600 text-white"
                : "bg-[#161b22] text-gray-400 hover:text-white"
            }`}
          >
            {t.tabs.overview[language]}
          </button>
          <button
            onClick={() => setActiveTab("agents")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition ${
              activeTab === "agents"
                ? "bg-blue-600 text-white"
                : "bg-[#161b22] text-gray-400 hover:text-white"
            }`}
          >
            <FileCode className="w-4 h-4" />
            AGENTS.md
          </button>
          <button
            onClick={() => setActiveTab("prompts")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition ${
              activeTab === "prompts"
                ? "bg-purple-600 text-white"
                : "bg-[#161b22] text-gray-400 hover:text-white"
            }`}
          >
            <FileText className="w-4 h-4" />
            PROMPTS.md
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8">
          {activeTab === "overview" && (
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">
                {t.overview.title[language]}
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-400">
                    {t.overview.forAI.title[language]}
                  </h3>
                  <p className="text-gray-300 mb-3">
                    {t.overview.forAI.description[language]}
                  </p>
                  <div className="bg-blue-600/10 border border-blue-600/30 rounded p-3">
                    <p className="text-sm text-blue-300">
                      {t.overview.forAI.example[language]}
                    </p>
                  </div>
                </div>

                <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-purple-400">
                    {t.overview.forDevelopers.title[language]}
                  </h3>
                  <p className="text-gray-300 mb-3">
                    {t.overview.forDevelopers.description[language]}
                  </p>
                  <div className="bg-purple-600/10 border border-purple-600/30 rounded p-3">
                    <p className="text-sm text-purple-300">
                      {t.overview.forDevelopers.example[language]}
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {t.overview.analogyTitle[language]}
              </h3>
              <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2 text-blue-400">
                      {t.overview.agentsAnalogy.title[language]}
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      {t.overview.agentsAnalogy.points[language].map(
                        (point, i) => (
                          <li key={i}>{point}</li>
                        )
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-purple-400">
                      {t.overview.promptsAnalogy.title[language]}
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      {t.overview.promptsAnalogy.points[language].map(
                        (point, i) => (
                          <li key={i}>{point}</li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {t.overview.scenariosTitle[language]}
              </h3>
              <div className="space-y-4">
                <div className="bg-green-600/10 border border-green-600/30 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-green-400">
                    {t.overview.scenario1.title[language]}
                  </h4>
                  <p className="text-gray-300">
                    {t.overview.scenario1.description[language]} <br />
                    {t.overview.scenario1.result[language]}
                  </p>
                </div>

                <div className="bg-green-600/10 border border-green-600/30 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-green-400">
                    {t.overview.scenario2.title[language]}
                  </h4>
                  <p className="text-gray-300">
                    {t.overview.scenario2.description[language]} <br />
                    {t.overview.scenario2.result[language]}
                  </p>
                </div>

                <div className="bg-green-600/10 border border-green-600/30 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-green-400">
                    {t.overview.scenario3.title[language]}
                  </h4>
                  <p className="text-gray-300">
                    {t.overview.scenario3.description[language]} <br />
                    {t.overview.scenario3.result[language]}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "agents" && (
            <div className="prose prose-invert max-w-none">
              <iframe
                src={`/guides/agents-content?lang=${language}`}
                className="w-full h-[800px] border-0 rounded-lg"
                title="AGENTS.md Guide"
              />
            </div>
          )}

          {activeTab === "prompts" && (
            <div className="prose prose-invert max-w-none">
              <iframe
                src={`/guides/prompts-content?lang=${language}`}
                className="w-full h-[800px] border-0 rounded-lg"
                title="PROMPTS.md Guide"
              />
            </div>
          )}
        </div>

        {/* AI Tools Usage Guide Section */}
        <div className="mt-16 mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">
              {t.aiTools.title[language]}
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {t.aiTools.subtitle[language]}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.aiTools.tools.map((tool, index) => (
              <div
                key={index}
                className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 hover:border-purple-500 transition"
              >
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">{tool.icon}</div>
                  <h3 className="text-xl font-bold">{tool.name}</h3>
                </div>

                <div className="space-y-3">
                  {/* AGENTS.md Link */}
                  <a
                    href={tool.agentsLink[language]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-blue-600/10 hover:bg-blue-600/20 border border-blue-600/30 hover:border-blue-600/50 rounded-lg p-3 transition group"
                  >
                    <div className="flex items-start gap-2">
                      <FileCode className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-blue-400 text-sm mb-1">
                          AGENTS.md
                        </div>
                        <div className="text-xs text-gray-300 group-hover:text-white transition">
                          {tool.agentsTitle[language]}
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* PROMPTS.md Link */}
                  <a
                    href={tool.promptsLink[language]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-purple-600/10 hover:bg-purple-600/20 border border-purple-600/30 hover:border-purple-600/50 rounded-lg p-3 transition group"
                  >
                    <div className="flex items-start gap-2">
                      <FileText className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-purple-400 text-sm mb-1">
                          PROMPTS.md
                        </div>
                        <div className="text-xs text-gray-300 group-hover:text-white transition">
                          {tool.promptsTitle[language]}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-linear-to-r from-purple-600/20 to-blue-600/20 border border-purple-600/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">{t.cta.title[language]}</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            {t.cta.description[language]}
          </p>
          <Link
            href="/posts/new"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg font-bold text-lg transition"
          >
            <Users className="w-5 h-5" />
            {t.cta.button[language]}
          </Link>
        </div>
      </div>
    </div>
  );
}
