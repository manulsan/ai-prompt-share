# PROMPTS.md — AI Prompt Share Project Prompt Templates

> Purpose: Standardize AI prompts used throughout the AI Prompt Share development to ensure consistent results and improve reusability.
> Variables are denoted as `{{variableName}}`.

---

## 1) Overview

PROMPTS.md defines **how AI should generate code, pages, APIs, tests, and documentation** for the AI Prompt Share project. It contains:
- **General Prompt:** Global rules and coding standards.
- **Feature-Specific Prompts:** Detailed instructions for each feature.
- **Style/Formatting Prompts:** Documentation and code style guidelines.
- **Testing Prompts:** Unit and API testing guidance.
- **Common Patterns:** Reusable code examples and patterns.

All AI agents should reference PROMPTS.md when performing tasks to maintain consistency.

---

## Project Context

**Project Name**: AI Prompt Share
**Tech Stack**:
- **Framework**: Next.js 15.1.6 (App Router)
- **React**: 19.2.0
- **Authentication**: NextAuth.js 4.24.13 with Google OAuth
- **Database**: MongoDB with Mongoose ODM
- **Styling**: Tailwind CSS 4.1.17
- **Language**: TypeScript 5
- **Icons**: lucide-react

---

## 2) General Prompt

```text
You are an AI assistant helping to design and implement the AI Prompt Share platform.

Follow these rules:
- Keep answers clear and concise.
- When writing code, prefer TypeScript.
- Use clean architecture principles.
- Always consider scalability and security.

**Global Implementation Notes:**
- **Framework:** Next.js 15.1.6 with App Router
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** NextAuth.js 4.24.13 with Google OAuth
- **Styling:** Tailwind CSS 4.1.17 with dark theme (#0d1117 background, #161b22 cards, #30363d borders)
- **Validation:** TypeScript interfaces for type safety
- **Icons:** lucide-react
- **Coding Style:**
  - PascalCase for components/types (PostCard, UserProfile)
  - camelCase for variables/functions (fetchPosts, userId)
  - Use Server Components by default, Client Components only when needed
- **API Requirements:**
  - All CRUD operations (Create, Read, Update, Delete) must be implemented with proper request/response validation, error handling, and REST conventions.
  - Use standard HTTP status codes (200, 201, 400, 401, 404, 500)
  - Connect to MongoDB with `connectDB()` before queries
  - Check authentication with `getServerSession()` for protected routes
- **SEO Requirement:**
  - All newly created pages must include proper SEO meta-data (title, description, keywords, Open Graph, Twitter Card, structured data).
```

---
  - All CRUD operations must include proper validation
  - Use standard HTTP status codes (200, 201, 400, 401, 404, 500)
  - Connect to MongoDB with `connectDB()` before queries
  - Check authentication with `getServerSession()` for protected routes
- **SEO Requirement:**
  - All new pages must include meta tags (title, description, keywords)
  - Add Open Graph tags for social sharing
  - Use Next.js Metadata API for dynamic meta generation
```

---

## 3) Feature-Specific Prompts

### **A. Create Post**

```text
Task: Implement the logic to create a post.

Inputs:
- title (string, required, max 200 chars)
- content (string, required, max 10000 chars)
- tags (array of strings, optional)
- authorId (from session, required)

Rules:
- Title must not be empty and should be unique.
- Generate URL-safe slug from title.
- Default status is 'draft', allow 'published'.
- Initialize likes to 0.
- Return errors in a structured format.
- Follow CRUD API conventions for Create operation.

Output: Code + short explanation + API endpoint definition.
```

### **B. Read Post(s)**

```text
Task: Implement the logic to read posts.

Inputs:
- page (number, default 1)
- limit (number, default 12)
- author (string, optional - filter by user ID)
- search (string, optional - search in title/content)
- tag (string, optional - filter by tag)

Rules:
- Return results in paginated format.
- Sort by createdAt descending (newest first).
- Populate author field with name and email only.
- Support search across title and content fields.
- Follow CRUD API conventions for Read operation.

Output: Code + short explanation + API endpoint definition.
```

### **C. Update Post**

```text
Task: Implement the edit-post flow.

Inputs:
- postId (string, required)
- title, content, tags, status (all optional)

Rules:
- Partial updates allowed.
- Verify user owns the post before updating.
- Update slug if title changes.
- Validate only updated fields.
- Follow CRUD API conventions for Update operation.

Output: Code + short explanation + API endpoint definition.
```

### **D. Delete Post**

```text
Task: Implement the delete function.

Inputs:
- postId (string, required)

Rules:
- Soft delete only (mark as deleted, don't remove data).
- Verify user owns the post.
- Follow CRUD API conventions for Delete operation.

Output: Code + short explanation + API endpoint definition.
```

### **E. Create New Page**

```text
Task: Implement a new NextJS page.

Inputs:
- pageName (string, e.g., "Explore", "Dashboard")
- routePath (string, e.g., "/explore", "/dashboard")
- optional API endpoints required for the page

Rules:
- Create NextJS page component under the appropriate folder.
- Define routePath for navigation.
- Fetch required data from backend APIs.
- Validate props using TypeScript interfaces.
- Maintain consistency with global coding style and architecture.
- Ensure all new pages include proper SEO meta-data as specified in General Prompt.

Output: Page component code + route definition + API integration example.
```

### **F. SEO & Social Media Integration**

```text
Task: Implement SEO and social media metadata for pages.

Requirements:
- Add meta tags for title, description, and keywords.
- Implement Open Graph tags for Facebook/LinkedIn sharing.
- Implement Twitter Card metadata for Twitter sharing.
- Ensure structured data (JSON-LD) for articles/posts.
- Allow dynamic generation of metadata per page/post.
- Follow global coding and styling rules.

Output: Code snippets and examples for metadata components + SEO/SNS integration instructions.
```

### **G. Debugging Guide**

```text
Task: Provide debugging guidance for common issues.

Common Errors:
1. "redirect_uri_mismatch" → Check Google OAuth settings
2. "Module not found" → Check import paths, restart server
3. "MongoServerError" → Check connection string, network access
4. Tailwind classes not working → Check globals.css imports
5. Session undefined → Wrap app in <Provider>, check NEXTAUTH_SECRET

Tools:
- Browser DevTools (Console, Network, React DevTools)
- MongoDB Compass for database inspection
- VS Code debugger for server-side code
- console.log strategically placed

Output: Step-by-step debugging instructions with solutions.
```

---

## 4) Style / Formatting Prompts

### **Documentation Style**

```text
When generating documentation:
- Use a simple structure.
- Avoid unnecessary theory.
- Provide example inputs and outputs.
- Include global implementation notes from General Prompt.
```

### **Code Style**

```text
When generating TypeScript code:
- Use async/await (not .then/.catch).
- Separate interface definitions.
- Follow clean architecture principles.
- Avoid inline queries.
- Follow global implementation notes from General Prompt.
- Follow CRUD API conventions.
- Use Server Components by default, Client Components only when needed.
- Apply Tailwind CSS with dark theme colors.
```

### **Component Style**

```text
When creating React components:
- Start with TypeScript interface for props.
- Use functional components only.
- Add 'use client' directive if using hooks.
- Destructure props in function parameters.
- Use meaningful prop names.
- Apply dark theme colors from project palette.
- Add hover effects with transition-colors.
- Ensure mobile-responsive design.
- Use lucide-react for icons.
```

---

## 5) Testing Prompts

### **Unit Test**

```text
Task: Write Jest unit tests (or manual testing checklist).

Rules:
- Test success and failure cases.
- Use mock repositories if needed.
- Follow global implementation notes from General Prompt.
- Cover all CRUD API endpoints.
- Include tests for new page components, route integration, and SEO/SNS metadata.
```

### **API Test (Postman)**

```text
When generating Postman tests or API testing guidance:
- Verify HTTP status codes.
- Extract tokens from responses.
- Save to environment variables.
- Follow global implementation notes from General Prompt.
- Cover all CRUD API endpoints.
- Include tests for APIs used by new pages and SEO/SNS metadata.
```

### **Manual Testing Checklist**

```text
When testing features:
- Test authentication (sign in/out flows)
- Test CRUD operations (create, read, update, delete)
- Test with valid and invalid inputs
- Test edge cases (empty states, missing data)
- Test on multiple screen sizes (mobile, tablet, desktop)
- Test with different user roles (authenticated, unauthenticated)
- Check error messages are user-friendly
- Verify loading states and transitions
- Test pagination and navigation
- Ensure SEO meta tags are present

Output: Detailed checklist with test scenarios
```

---

## 6) How to Use PROMPTS.md

### Step 1: Preparation
1. Open your project folder in VSCode.
2. Ensure PROMPTS.md is present in the root of your project.
3. Reference AGENTS.md to understand agent roles and responsibilities.

### Step 2: Generating New Pages or Components
1. Identify the feature to implement.
2. Locate the corresponding **Feature-Specific Prompt** section in PROMPTS.md.
3. Use the instructions and variables (`{{variableName}}`) to command the AI.
   - Example: `Create a new page with routePath='/explore' using PROMPTS.md Section E.`
4. AI will generate TypeScript code, NextJS pages, API routes, and include SEO meta-data if specified.

### Step 3: Applying Styles
- Use Tailwind CSS 4.1.17 for styling
- Follow dark theme color palette (#0d1117 background, #161b22 cards, #30363d borders)
- Use lucide-react for icons
- ARIA accessibility applied
- Follow coding style (PascalCase for types/classes, camelCase for variables/functions)

### Step 4: CRUD API Implementation
- Reference **Feature-Specific Prompts A-D** for Create/Read/Update/Delete logic.
- Backend Developer Agent should implement using MongoDB and Mongoose.
- Use TypeScript interfaces for validation.

### Step 5: SEO and Social Media Integration
- Reference **Feature-Specific Prompt F**.
- Include Open Graph, Twitter Card, and JSON-LD structured data.
- Ensure each new page automatically includes SEO meta-data.

### Step 6: Debugging Guidance
- Reference **Feature-Specific Prompt G**.
- Follow instructions for common NextJS, API, and MongoDB errors.
- Use console.log, network request inspection, and error boundaries to identify issues.

### Step 7: Testing
- Reference **Testing Prompts** for unit tests and API tests.
- Ensure all new pages, APIs, SEO features, and debugging scenarios are covered.

---

## 7) Best Practices

- Always check the **General Prompt** section first to understand coding standards and global notes.
- Keep PROMPTS.md updated as new features, agents, or libraries are added.
- Use AGENTS.md in parallel to assign tasks and responsibilities to AI agents.
- Maintain clear versioning and changelog for PROMPTS.md.
- Test all generated code thoroughly before committing.

---

## 8) Example Commands

```bash
# Generate a new page
AI, create a NextJS page '/explore' with post listing using PROMPTS.md Section E.

# Apply SEO metadata
AI, add SEO meta tags and Open Graph/Twitter Card data using PROMPTS.md Section F.

# Debug a failed API call
AI, follow PROMPTS.md Section G to identify and fix the authentication error.

# Create a CRUD API
AI, implement Create/Read/Update/Delete for posts using PROMPTS.md Sections A-D.
```

---

**Last Updated**: November 29, 2025

This document provides standardized prompt templates for AI coding assistants working on the AI Prompt Share project.
