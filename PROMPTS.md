# Prompt Sharing App - Development Prompts & Documentation

## Project Overview
A Next.js 16 prompt-sharinglication with Google OAuth authentication and MongoDB integration.

## Tech Stack
- **Framework**: Next.js 16.0.3 (App Router, Turbopack)
- **React**: 19.2.0
- **Authentication**: NextAuth.js 4.24.13 with Google OAuth
- **Database**: MongoDB (Mongoose)
- **Styling**: Tailwind CSS 4.1.17
- **Language**: TypeScript 5
- **Icons**: Lucide React

## Project Structure
```
prompt-sharing/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.ts          # NextAuth configuration & callbacks
│   ├── components/
│   │   ├── Nav.tsx                   # Navigation bar with auth dropdown
│   │   └── Provider.tsx              # SessionProvider wrapper
│   ├── globals.css                   # Tailwind CSS imports & custom styles
│   └── layout.tsx                    # Root layout with Provider
├── lib/
│   └── mongodb.ts                    # MongoDB connection utility
├── models/
│   └── User.ts                       # User schema (email, name, image)
├── types/
│   └── mongoose.d.ts                 # TypeScript global types
├── public/
│   └── assets/
│       └── images/
│           └── logo.svg              # App logo
├── .env.local                        # Environment variables
├── next.config.ts                    # Next.js config with image domains
└── package.json
```

## Environment Variables

### `.env.local`
```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=my-super-secret-key-change-this-in-production-12345

# Google OAuth Credentials
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/prompt-sharing?retryWrites=true&w=majority&appName=Cluster0
```

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Create OAuth 2.0 Client ID
3. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
4. Copy Client ID and Secret to `.env.local`

### 3. Configure MongoDB
1. Create free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create database user
3. Get connection string
4. Add to `.env.local` with database name: `/prompt-sharing`

### 4. Run Development Server
```bash
npm run dev
```

Server runs on `http://localhost:3000`

## Key Features

### Authentication Flow
1. User clicks "Sign In" → Google OAuth popup
2. On success → NextAuth `signIn` callback checks MongoDB
3. If new user → Creates user document in `users` collection
4. If existing → Logs "User already exists"
5. Redirects to home page (`/`)
6. Session stored with user ID from MongoDB

### Navigation Bar (`Nav.tsx`)
- **Left**: Logo + "MyApp" text (links to `/`)
- **Center**: 
  - "Picture" link (always visible)
  - "Blog" link (visible only when authenticated, disabled when not)
- **Right**:
  - Loading state: "Loading..." text
  - Unauthenticated: "Sign In" button
  - Authenticated: Avatar dropdown with:
    - User avatar image (or first letter circle if no image)
    - Dropdown menu shows: Name, Email, Sign Out button

### Database Schema

#### User Model (`models/User.ts`)
```typescript
{
  email: String (unique, required)
  name: String (required)
  image: String (optional)
  createdAt: Date (auto)
  updatedAt: Date (auto)
}
```

## Configuration Details

### Tailwind CSS Setup
- **Version**: 4.1.17 (new syntax)
- **Imports**: `@import "tailwindcss/preflight";`, `@import "tailwindcss/utilities";`, `@import "tailwindcss";`
- **Custom classes**: `.head_text`, `.black_bth`, `.outline_btn`

### NextAuth Configuration
- **Provider**: Google OAuth
- **Secret**: Required for cookie encryption
- **Cookies**: Custom `sessionToken` config with `sameSite: 'lax'`, `secure: false` (for localhost)
- **Callbacks**:
  - `redirect`: Always returns `baseUrl` (home page)
  - `signIn`: Connects to MongoDB, creates/updates user
  - `session`: Adds MongoDB user ID to session

### Next.js Image Configuration
```typescript
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "lh3.googleusercontent.com", // Google profile images
      port: "",
      pathname: "/**",
    },
  ],
}
```

## Common Development Tasks

### Add New Menu Item
1. Edit `app/components/Nav.tsx`
2. Add `<Link>` in the center section
3. Optionally: Add auth check like Blog menu

### Add New OAuth Provider
1. Install provider package (if needed)
2. Add to `providers` array in `app/api/auth/[...nextauth]/route.ts`
3. Add credentials to `.env.local`
4. Configure redirect URI in provider settings

### Modify User Schema
1. Edit `models/User.ts`
2. Add new fields to schema
3. Update `signIn` callback to save new fields
4. Restart server

### Debug Authentication Issues
1. Check terminal logs for "Sign in:" and "New user created:" messages
2. Verify `.env.local` has correct credentials
3. Check Google Cloud Console redirect URIs match exactly
4. Clear browser cookies for localhost
5. Restart dev server after env changes

## Known Issues & Solutions

### "State cookie was missing" Error
- **Cause**: Missing `NEXTAUTH_SECRET` or wrong cookie settings
- **Fix**: Ensure `NEXTAUTH_SECRET` is set and restart server

### "redirect_uri_mismatch" Error
- **Cause**: Google OAuth redirect URI doesn't match
- **Fix**: Add exact URL `http://localhost:3000/api/auth/callback/google` to Google Console

### Image Hostname Not Configured
- **Cause**: External images not allowed in `next.config.ts`
- **Fix**: Add hostname to `remotePatterns` array

### User Not Saved to MongoDB
- **Cause**: Missing database name in `MONGODB_URI`
- **Fix**: Add `/prompt-sharing` (or your DB name) before query parameters

### ERR_CONNECTION_REFUSED
- **Cause**: Dev server not running or wrong port
- **Fix**: Check `NEXTAUTH_URL` matches actual server port

## Development Workflow

### Making Changes
1. Edit files (auto-saves in VS Code)
2. Check terminal for compilation errors
3. Browser auto-refreshes with changes
4. Check browser console for runtime errors

### Testing Authentication
1. Sign out (if signed in)
2. Clear browser cookies
3. Sign in with Google
4. Check terminal for "New user created" or "User already exists"
5. Verify MongoDB has user document
6. Check avatar dropdown works

### Deploying to Production
1. Generate secure `NEXTAUTH_SECRET`: `openssl rand -base64 32`
2. Update `NEXTAUTH_URL` to production domain
3. Add production redirect URI to Google OAuth
4. Update MongoDB connection for production cluster
5. Set `secure: true` in cookies config
6. Build: `npm run build`
7. Start: `npm start`

## API Routes

### NextAuth Endpoints (Auto-generated)
- `GET /api/auth/signin` - Sign in page
- `POST /api/auth/signin/:provider` - Initiate OAuth flow
- `GET /api/auth/callback/:provider` - OAuth callback handler
- `GET /api/auth/session` - Get current session
- `POST /api/auth/signout` - Sign out user
- `GET /api/auth/csrf` - CSRF token

## Useful Commands

```bash
# Development
npm run dev              # Start dev server with Turbopack
npm run build            # Build for production
npm start                # Start production server
npm run lint             # Run ESLint

# Package Management
npm install <package>    # Add new dependency
npm uninstall <package>  # Remove dependency

# MongoDB
# Connect via Compass: Use MONGODB_URI from .env.local
# View users: Database "prompt-sharing" → Collection "users"

# Generate Secret Key
openssl rand -base64 32  # For NEXTAUTH_SECRET
```

## Troubleshooting Checklist

- [ ] `.env.local` exists with all required variables
- [ ] Google OAuth redirect URI matches exactly
- [ ] MongoDB connection string includes database name
- [ ] Dev server restarted after env changes
- [ ] Browser cookies cleared
- [ ] `next.config.ts` includes image hostname
- [ ] No TypeScript errors in terminal
- [ ] Port 3000 is available (or update `NEXTAUTH_URL`)

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Google OAuth Setup](https://console.cloud.google.com/apis/credentials)

## Project History

This project was built step-by-step with the following milestones:
1. Initial Next.js setup with Tailwind CSS v4
2. Fixed Tailwind imports for v4 compatibility
3. Created basic Nav component
4. Added NextAuth with Google OAuth
5. Integrated MongoDB for user storage
6. Added avatar dropdown menu
7. Configured image optimization for Google avatars

---

**Last Updated**: November 23, 2025
