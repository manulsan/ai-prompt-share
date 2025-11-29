# PROMPTS.md User Guide

> Purpose: Guide users and AI developers on how to effectively use PROMPTS.md for generating Blog Service NextJS project components, pages, APIs, and tests.

---

## 1) Overview
PROMPTS.md defines **how AI should generate code, pages, APIs, tests, and documentation** for the Blog Service project. It contains:
- **General Prompt:** Global rules and coding standards.
- **Feature-Specific Prompts:** Detailed instructions for each feature.
- **Style/Formatting Prompts:** Documentation and code style guidelines.
- **Testing Prompts:** Unit and API testing guidance.

All AI agents should reference PROMPTS.md when performing tasks to maintain consistency.

---

## 2) How to Use PROMPTS.md

### Step 1: Preparation
1. Open your project folder in VSCode.
2. Ensure PROMPTS.md is present in the root of your project.
3. Optional: Create AGENTS.md to define agent roles.

### Step 2: Generating New Pages or Components
1. Identify the feature to implement.
2. Locate the corresponding **Feature-Specific Prompt** section in PROMPTS.md.
3. Use the instructions and variables (`{{variableName}}`) to command the AI.
   - Example: `Create a new page with routePath='/blog' using PROMPTS.md Section E.`
4. AI will generate TypeScript code, NextJS pages, API routes, and include SEO meta-data if specified.

### Step 3: Applying Styles
- GUI Style: Apple Look
- Libraries: Headless UI, Radix UI, Shadcn/ui components
- Tailwind CSS for styling
- ARIA accessibility applied
- Follow coding style (PascalCase for types/classes, camelCase for variables/functions)

### Step 4: CRUD API Implementation
- Reference **Feature-Specific Prompts A-D** for Create/Read/Update/Delete logic.
- Backend Developer Agent should implement using Prisma and Zod validation.

### Step 5: SEO and Social Media Integration
- Reference **Feature-Specific Prompt F**.
- Include Open Graph, Twitter Card, and JSON-LD structured data.
- Ensure each new page automatically includes SEO meta-data.

### Step 6: Debugging Guidance
- Reference **Feature-Specific Prompt G**.
- Follow instructions for common NextJS, API, and Prisma errors.
- Use console.log, network request inspection, and error boundaries to identify issues.

### Step 7: Testing
- Reference **Testing Prompts** for unit tests and Postman API tests.
- Ensure all new pages, APIs, SEO features, and debugging scenarios are covered.

---

## 3) Best Practices
- Always check the **General Prompt** section first to understand coding standards and global notes.
- Keep PROMPTS.md updated as new features, agents, or libraries are added.
- Use AGENTS.md in parallel to assign tasks and responsibilities to AI agents.
- Maintain clear versioning and changelog for PROMPTS.md.

---

## 4) Publishing Guide
1. Convert PROMPTS_GUIDE.md to HTML or Markdown for web publishing.
2. Include links to PROMPTS.md and AGENTS.md.
3. Provide example AI commands with references to Feature-Specific Prompts.
4. Host on project documentation site, GitHub Pages, or internal Wiki.

---

## 5) Example Commands
```
# Generate a new blog page
AI, create a NextJS page '/blog' with CRUD APIs using PROMPTS.md Section E.

# Apply SEO metadata
AI, add SEO meta tags and Open Graph/Twitter Card data using PROMPTS.md Section F.

# Debug a failed API call
AI, follow PROMPTS.md Section G to identify and fix the error.
```

