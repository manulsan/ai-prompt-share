# PROMPTS.md - Project Documentation & Development Guide

## 📋 Purpose

**PROMPTS.md is comprehensive project documentation for developers (humans).**

This file helps new developers quickly understand, set up, and develop the project.

## 🎯 Who is it for?

- **Audience**: Developers (you, team members, future you)
- **Purpose**: Project setup, execution, and troubleshooting guide
- **Usage**: When starting project, configuring, deploying, or troubleshooting

## 📝 What does it contain?

### 1. **Project Overview**

```markdown
## Project Overview
Next.js prompt-sharing with Google OAuth and MongoDB
```

→ Understand "what this project does" at a glance

### 2. **Tech Stack (with detailed versions)**

```markdown
## Tech Stack
- Framework: Next.js 15.1.6 (App Router)
- React: 19.2.0
- Database: MongoDB with Mongoose
- Auth: NextAuth.js 4.24.13
```

→ Prevent compatibility issues with exact versions

### 3. **Environment Variable Setup**

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-here
GOOGLE_CLIENT_ID=your-client-id
MONGODB_URI=mongodb+srv://...
```

→ Copy-paste to set up immediately

### 4. **Installation & Execution**

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local

# 3. Run development server
npm run dev
```

→ Follow step-by-step to run the project

### 5. **Key Features Explanation**

- User authentication flow
- Database schemas
- API endpoints
- Main component descriptions

→ Understand project structure and how it works

### 6. **Troubleshooting Guide**

```markdown
### "redirect_uri_mismatch" error
- Cause: Google OAuth configuration mismatch
- Solution: Add http://localhost:3000/api/auth/callback/google
```

→ Solutions for common errors

### 7. **Development Workflow**

```markdown
## Development Workflow
1. Edit files
2. Check auto-refresh
3. Check browser console
4. Check terminal errors
```

→ Daily development process guide

### 8. **Deployment Guide**

```markdown
## Deploying to Production
1. Generate NEXTAUTH_SECRET
2. Change NEXTAUTH_URL to production domain
3. Add production URI to Google OAuth
```

→ How to deploy to production

## 🔄 PROMPTS.md in Current Project

**Location**: `c:\02.Tutorials\ai-prompt-share\PROMPTS.md`

**Contents**:

- Blog app project overview
- Complete project structure tree
- Full environment variable list
- Google OAuth setup instructions
- MongoDB setup instructions
- Detailed authentication flow
- Database schemas
- Common errors and solutions
- Development workflow
- Deployment checklist
- Useful command collection

## 💡 Example Scenarios

### Scenario 1: New team member starts project

```
New developer: "How do I start this project?"

Reads PROMPTS.md:
1. Run npm install (installation guide)
2. Create .env.local file (environment variables)
3. Set up Google OAuth (setup guide)
4. Connect MongoDB (database setup)
5. Run npm run dev (execution method)
→ Project running successfully in 10 minutes!
```

### Scenario 2: Error occurs

```
Developer: "I'm getting a redirect_uri_mismatch error"

PROMPTS.md troubleshooting section:
- Check cause
- Check solution
- Fix in Google Console
→ Problem solved in 5 minutes!
```

### Scenario 3: Revisiting project after 3 months

```
Developer: "How did I run this again?"

Check PROMPTS.md:
- Where are environment variables
- What command to run
- What were the main features
→ Quickly refresh memory!
```

## 🆚 Difference from AGENTS.md

| Item | PROMPTS.md | AGENTS.md |
|------|------------|-----------|
| **Audience** | Developers (humans) | AI coding assistants |
| **Purpose** | Project understanding & setup | Guide AI to generate code |
| **Language** | Friendly explanations, step-by-step guides | Concise rules, patterns |
| **Content** | Setup methods, troubleshooting, deployment | Coding style, architecture patterns |
| **Structure** | README style (long explanations) | Cheat sheet style (short and clear) |
| **Example** | "3 steps to set up Google OAuth" | "Auth check: use getServerSession" |

## 📊 Comparison: Same content, different expression

### Example: Environment Variables

**PROMPTS.md (for developers)**

```markdown
## Setting up Environment Variables

You need to set up several environment variables to run the project.

### Step 1: Create .env.local file
Create a `.env.local` file in the project root.

### Step 2: Add required variables
Copy and paste these variables:

```env
NEXTAUTH_SECRET=your-secret-here
GOOGLE_CLIENT_ID=your-client-id
```

### Step 3: Replace with actual values
- `your-secret-here`: Generate with this command → `openssl rand -base64 32`
- `your-client-id`: Copy from Google Cloud Console

### Warning
⚠️ Never commit .env.local file to Git!
```

**AGENTS.md (for AI)**

```markdown
## Environment Variables

Required:
- `NEXTAUTH_SECRET` - 32+ char random string
- `GOOGLE_CLIENT_ID` - From Google Console
- `MONGODB_URI` - MongoDB connection string with DB name

Pattern:
```typescript
// Access env vars (server-side only)
process.env.NEXTAUTH_SECRET
process.env.GOOGLE_CLIENT_ID
```

Rules:
- Never commit .env.local to Git
- Validate required vars on startup
- Use different values for dev/production
```

**Differences**:

- PROMPTS.md: Step-by-step, friendly explanations, warnings included
- AGENTS.md: Concise list, code patterns, rules only

## 📚 Summary

**PROMPTS.md = Project manual for developers**

- Quickly start the project
- Detailed setup instructions
- Troubleshooting guide when problems occur
- Deployment and operations guide

**Key Point**: "Hey developer, this is how this project works"

---

## 🎓 Learning Guide

### Analogy for Beginners

**PROMPTS.md**: Appliance "user manual"
- "Power button is here"
- "Set it up like this"
- "If there's a problem, do this"
- "Guide for first-time users"

**AGENTS.md**: Appliance "manufacturing manual"
- "This part must be made like this"
- "Specifications must be exactly this"
- "Assembly order must be this"
- "Technical documentation for manufacturer engineers"

---

## 🔍 Real Usage Examples

### When starting a project

```bash
# 1. Open PROMPTS.md
# 2. Find "Setup Instructions" section
# 3. Follow step-by-step

npm install  # ✅ Done
Create .env.local  # ✅ Done
Set up Google OAuth  # ✅ Done
npm run dev  # ✅ Project running!
```

### When an error occurs

```bash
# Copy error message
# Search "Troubleshooting" section in PROMPTS.md
# Find and apply solution
```

### When adding a new feature

```bash
# Check project structure in PROMPTS.md
# Find similar feature examples
# AGENTS.md is referenced by AI (automatic)
```

---

## 📝 Writing Tips

### Good PROMPTS.md characteristics

✅ Clear step-by-step explanations
✅ Rich screenshots or code examples
✅ Common problems and solutions
✅ Real command and value examples
✅ Language that even beginners can understand
✅ Quick navigation with table of contents

### Bad PROMPTS.md examples

❌ "Set it up" (how?)
❌ Too short and unfriendly
❌ Only technical terms listed
❌ No code examples
❌ No error solutions

---

**Created**: November 28, 2025
