# AGENTS.md - AI Agent Guidelines

## 📋 Purpose

**AGENTS.md is a guideline document for AI agents (coding assistants) like GitHub Copilot.**

This file helps AI understand your project and generate correct code.

## 🎯 Who is it for?

- **Audience**: GitHub Copilot, Cursor AI, VS Code AI assistants
- **Purpose**: Guide AI to follow project coding style, architecture, and rules
- **Usage**: Automatically referenced when AI generates or edits code

## 📝 What does it contain?

### 1. **Project Structure**

```
app/
├── api/          # API routes
├── components/   # React components
├── posts/        # Post-related pages
```

→ AI knows where to create files

### 2. **Coding Rules**

```typescript
// ✅ Good: PascalCase component
export default function UserProfile() { }

// ❌ Bad: camelCase component
export default function userProfile() { }
```

→ AI follows project style

### 3. **Tech Stack**

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS

→ AI uses correct syntax and APIs

### 4. **Architecture Patterns**

```typescript
// Server Component (default)
export default async function PostsPage() {
  const posts = await fetchPosts();
  return <PostList posts={posts} />;
}

// Client Component (when needed)
'use client';
export default function LikeButton() { }
```

→ AI understands and follows project patterns

### 5. **Common Tasks**

- "How to add a new page"
- "How to create an API route"
- "How to write database queries"

→ AI automates repetitive tasks

## 🔄 AGENTS.md in Current Project

**Location**: `c:\02.Tutorials\ai-prompt-share\AGENTS.md`

**Contents**:

- AI Prompt Share project description
- Next.js 15, MongoDB, NextAuth structure
- Component patterns (Server/Client)
- Database schemas (Post, User)
- API route patterns
- Coding style guide
- Security rules
- Debugging tips

## 💡 Example Scenarios

### Scenario 1: "Create a new page"

```
User: "Create a user profile page"

AI reads AGENTS.md and:
1. Creates app/users/[userId]/page.tsx (project structure reference)
2. Writes as Server Component (architecture pattern reference)
3. Fetches user data from MongoDB (database pattern reference)
4. Styles with Tailwind CSS (tech stack reference)
```

### Scenario 2: "Add an API route"

```
User: "Create a comment creation API"

AI reads AGENTS.md and:
1. Creates app/api/comments/route.ts (API pattern reference)
2. Adds POST method (HTTP method rules reference)
3. Adds session check (security rules reference)
4. Saves to MongoDB (database pattern reference)
```

## 🆚 Difference from PROMPTS.md

| Item | AGENTS.md | PROMPTS.md |
|------|-----------|------------|
| **Audience** | AI coding assistants (Copilot) | Developers (humans) |
| **Purpose** | Guide AI to generate code | Help developers understand project |
| **Content** | Coding rules, patterns, structure | Project overview, setup, troubleshooting |
| **Usage** | Auto-referenced when AI generates code | Read by developers for setup/troubleshooting |
| **Example** | "Use PascalCase for components" | "How to set up Google OAuth" |

## 📚 Summary

**AGENTS.md = Coding textbook for AI**

- AI understands your project style
- AI generates consistent code
- AI follows project structure
- Communicates team coding rules to AI

**Key Point**: "Hey AI, this is how we code in our project"

---

## 🎓 Learning Guide

### Analogy for Beginners

**AGENTS.md**: "Coding style guide" for new developers
- "We use 2 spaces instead of tabs"
- "Component file names should be PascalCase"
- "This is how you call APIs"

**PROMPTS.md**: Project "user manual"
- "Set up environment variables like this"
- "Run the server like this"
- "If you get an error, solve it like this"

---

**Created**: November 28, 2025
