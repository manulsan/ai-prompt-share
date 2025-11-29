# AGENTS.md User Guide

> Purpose: Guide users and AI developers on how to effectively use AGENTS.md to assign roles and responsibilities to AI agents in the Blog Service project.

---

## 1) Overview
AGENTS.md defines **who does what** in the Blog Service NextJS project. It complements PROMPTS.md by specifying agent responsibilities, ensuring tasks are organized and delegated efficiently.

Key Points:
- Each agent has a clearly defined role and responsibilities.
- Agents follow PROMPTS.md for instructions when performing tasks.
- Helps coordinate multiple AI agents working on frontend, backend, SEO, testing, and documentation.

---

## 2) How to Use AGENTS.md

### Step 1: Review Agents
Open AGENTS.md and review the defined agents:
- **Frontend Developer Agent:** Creates pages/components, applies GUI styles, ensures accessibility.
- **Backend Developer Agent:** Implements CRUD APIs, integrates with Prisma/MongoDB, handles Zod validation.
- **SEO Agent:** Generates SEO meta-data, Open Graph/Twitter Card, structured data.
- **Test/QA Agent:** Writes unit and API tests, guides debugging.
- **Documentation Agent:** Creates project and feature documentation, examples, and instructions.

### Step 2: Assign Tasks to AI Agents
- Identify the feature or task you want to implement.
- Reference PROMPTS.md for the specific instructions.
- Assign the task to the appropriate agent.
  - Example: "Frontend Developer Agent, create the '/blog' page using PROMPTS.md Section E."

### Step 3: Collaboration
- Agents collaborate by sharing outputs and dependencies:
  - Backend APIs implemented by Backend Agent will be consumed by Frontend Agent.
  - SEO Agent ensures new pages include metadata before Frontend Agent finalizes components.
  - Test/QA Agent validates outputs from other agents.
- AGENTS.md ensures each agent knows its scope and avoids overlap.

### Step 4: Updating AGENTS.md
- Add new agents if new roles are introduced.
- Update responsibilities when project features expand.
- Keep references to PROMPTS.md sections for clarity.
- Maintain versioning and changelog for transparency.

---

## 3) Example Commands Using AGENTS.md
```
# Assign task to Frontend Agent
AI, Frontend Developer Agent, create a new NextJS page '/about' using PROMPTS.md Section E.

# Assign task to Backend Agent
AI, Backend Developer Agent, implement CRUD API for blog posts using PROMPTS.md Sections A-D.

# Assign task to SEO Agent
AI, SEO Agent, generate meta-data and Open Graph/Twitter Card for '/blog' page using PROMPTS.md Section F.

# Assign task to Test/QA Agent
AI, Test/QA Agent, write unit and API tests for the '/blog' page and API endpoints using PROMPTS.md Testing Sections.
```

---

## 4) Best Practices
- Always ensure agents follow **PROMPTS.md instructions** when performing tasks.
- Regularly review AGENTS.md for updates in roles or responsibilities.
- Use AGENTS.md together with PROMPTS.md for maximum efficiency and consistency.
- Clearly define tasks and reference PROMPTS.md sections in your AI commands.

---

## 5) Publishing Guide
1. Convert AGENTS_GUIDE.md to HTML or Markdown for web publication.
2. Link to PROMPTS.md for comprehensive instructions.
3. Provide example AI commands with agent assignments.
4. Host on documentation site, GitHub Pages, or internal Wiki for project collaborators.

