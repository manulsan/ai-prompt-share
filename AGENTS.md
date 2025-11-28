# AI Prompt Share - Agent Instructions

## Project Context
This is an AI prompt sharing platform where users can discover, share, and learn effective prompting techniques. Built with Next.js 15, MongoDB, NextAuth, and Tailwind CSS.

## Project Purpose
- **Primary Goal**: Help users master AI prompting through community-shared examples
- **Key Features**: Prompt browsing, search/filter, user authentication, like system, educational guides
- **Target Audience**: AI enthusiasts, developers, content creators, anyone learning prompt engineering

## Tech Stack
- **Framework**: Next.js 15.1.6 (App Router)
- **React**: 19.2.0
- **Authentication**: NextAuth.js 4.24.13 (Google OAuth)
- **Database**: MongoDB with Mongoose
- **Styling**: Tailwind CSS 4.1.17
- **Language**: TypeScript 5
- **Icons**: lucide-react

## Architecture Guidelines

### File Organization
```
app/
├── api/              # API routes (posts, users, auth)
├── components/       # Reusable React components
├── posts/           # Post-related pages (view, edit, new)
├── users/           # User profile pages
├── guides/          # Educational guide pages
├── explore/         # Main post browsing page
├── dashboard/       # User dashboard
└── community/       # Community info page

lib/                 # Utilities (mongodb.ts)
models/              # Mongoose schemas (User.ts, Post.ts)
types/               # TypeScript type definitions
public/assets/       # Static assets
scripts/             # Migration and utility scripts
```

### Component Patterns
- **Server Components by default** - Use for data fetching, static content
- **Client Components** - Only when using hooks, browser APIs, interactivity
- Mark client components with `'use client'` directive
- Keep components focused and single-responsibility

### Data Flow
1. **Server Components** fetch data directly from MongoDB
2. **API Routes** (`/api/posts`, `/api/users`) handle mutations
3. **Client Components** use fetch with revalidation
4. **Forms** submit to API routes, then redirect or revalidate

## Coding Standards

### TypeScript
- Always use TypeScript for all files
- Define interfaces for props and data structures
- Use `type` for unions, `interface` for objects
- Avoid `any` - use `unknown` or proper types

### React Components
```typescript
// Server Component (default)
export default async function PostsPage() {
  const posts = await fetchPosts();
  return <PostList posts={posts} />;
}

// Client Component (when needed)
'use client';
import { useState } from 'react';

export default function LikeButton({ postId }: { postId: string }) {
  const [liked, setLiked] = useState(false);
  // ...
}
```

### Naming Conventions
- **Components**: PascalCase (`PostCard.tsx`, `UserSidebar.tsx`)
- **Utilities**: camelCase (`connectDB`, `formatDate`)
- **API routes**: lowercase with hyphens (`route.ts` in folders like `posts/[id]/`)
- **CSS classes**: Tailwind utility classes, custom classes in kebab-case

### Styling with Tailwind
- Use Tailwind utility classes directly in JSX
- Dark theme colors: `#0d1117` (background), `#161b22` (cards), `#30363d` (borders)
- Custom classes in `globals.css` for reusable patterns
- Responsive design: mobile-first approach (`sm:`, `md:`, `lg:`)

## Database Patterns

### MongoDB Connection
```typescript
import connectDB from '@/lib/mongodb';

// In Server Components or API routes
await connectDB();
const posts = await Post.find().populate('author');
```

### Mongoose Models
- Define in `models/` directory
- Use TypeScript interfaces for schema types
- Include timestamps: `{ timestamps: true }`
- Reference other models: `ref: 'User'`

### Post Schema
```typescript
{
  title: string (required)
  prompt: string (required)
  tag: string (optional)
  author: ObjectId -> User (required)
  status: 'draft' | 'published'
  likes: number (default: 0)
  likedBy: ObjectId[] -> User
  createdAt: Date
  updatedAt: Date
}
```

### User Schema
```typescript
{
  email: string (unique, required)
  name: string (required)
  image: string (optional)
  createdAt: Date
  updatedAt: Date
}
```

## API Route Patterns

### Standard Structure
```typescript
// app/api/posts/route.ts
export async function GET(request: Request) {
  try {
    await connectDB();
    const posts = await Post.find();
    return Response.json(posts);
  } catch (error) {
    return Response.json({ error: 'Failed' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return Response.json({ error: 'Unauthorized' }, { status: 401 });
  // ...
}
```

### Authentication Check
```typescript
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const session = await getServerSession(authOptions);
if (!session) {
  return Response.json({ error: 'Unauthorized' }, { status: 401 });
}
```

## Common Tasks

### Adding a New Page
1. Create file in `app/[page-name]/page.tsx`
2. Export default component
3. Use Server Component unless interactivity needed
4. Add navigation link in `Nav.tsx` if needed

### Creating a New Component
1. File in `app/components/ComponentName.tsx`
2. Use `'use client'` if interactive
3. Define prop types with TypeScript interface
4. Import icons from `lucide-react`

### Adding a New API Route
1. Create folder: `app/api/[resource]/`
2. Add `route.ts` with GET, POST, PUT, DELETE handlers
3. Connect to DB with `connectDB()`
4. Add authentication checks for protected routes
5. Return proper status codes (200, 201, 400, 401, 404, 500)

### Database Schema Changes
1. Update model in `models/` directory
2. Consider migration script in `scripts/` if needed
3. Update TypeScript interfaces
4. Test with sample data

## UI/UX Guidelines

### Design System
- **Colors**:
  - Background: `#0d1117`
  - Cards: `#161b22`
  - Borders: `#30363d`
  - Text: `white`, `gray-300`, `gray-400`
  - Accents: `blue-400`, `green-400`, `red-400`, `yellow-400`

- **Spacing**: Consistent use of Tailwind spacing scale
- **Typography**: Clear hierarchy with `text-5xl`, `text-3xl`, `text-xl`
- **Borders**: Rounded corners `rounded-lg`, `rounded-xl`
- **Shadows**: Subtle shadows on hover `hover:shadow-lg`

### Interactive Elements
- **Buttons**: Clear hover states, transition effects
- **Links**: Use Next.js `<Link>` component
- **Forms**: Validate input, show loading states, handle errors
- **Cards**: Hover effects with `group-hover:` for child elements

### Accessibility
- Semantic HTML elements
- Alt text for images
- ARIA labels where needed
- Keyboard navigation support
- Focus states visible

## Content Guidelines

### Educational Pages (`/guides/*`)
- **Structure**: Hero → Why it matters → Detailed sections → Examples → Practice → CTA
- **Length**: 300-500 lines of comprehensive content
- **Examples**: Color-coded (green for good ✅, red for bad ❌, blue for prompts)
- **Tone**: Professional but approachable, educational
- **Consistency**: All guide pages follow same pattern

### Code Examples
```typescript
// Good: Color-coded example
<div className="bg-[#161b22] border border-[#30363d] rounded p-4">
  <p className="text-green-300">✅ Good example</p>
  <p className="text-red-300">❌ Bad example</p>
  <p className="text-blue-300">💡 Prompt example</p>
</div>
```

## Performance Best Practices

### Next.js Optimization
- Use `loading.tsx` for loading states
- Use `error.tsx` for error boundaries
- Implement pagination for large lists
- Use `next/image` for optimized images
- Add `revalidate` for ISR when appropriate

### Database Queries
- Use `.lean()` for read-only queries
- Populate only needed fields: `.populate('author', 'name email')`
- Add indexes for frequently queried fields
- Limit results with pagination

### Client-Side Performance
- Lazy load heavy components
- Debounce search inputs
- Use optimistic UI updates
- Minimize client-side JavaScript

## Error Handling

### API Routes
```typescript
try {
  // ... operation
  return Response.json({ success: true });
} catch (error) {
  console.error('Error:', error);
  return Response.json(
    { error: 'Failed to process request' },
    { status: 500 }
  );
}
```

### Client Components
```typescript
'use client';
export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold text-red-400">Something went wrong</h2>
      <p className="text-gray-400">{error.message}</p>
    </div>
  );
}
```

## Testing Considerations

### Manual Testing Checklist
- [ ] Authentication flow (sign in/out)
- [ ] Create, read, update, delete operations
- [ ] Search and filter functionality
- [ ] Pagination and navigation
- [ ] Responsive design on mobile/tablet/desktop
- [ ] Error states and edge cases

### Common Edge Cases
- Empty states (no posts, no users)
- Unauthenticated access attempts
- Invalid IDs in URL params
- Network failures
- Large datasets (100+ posts)
- Special characters in search

## Security Guidelines

### Authentication
- Always verify session server-side
- Don't expose user IDs in client code
- Use NextAuth callbacks properly
- Secure cookies in production (`secure: true`)

### Input Validation
- Sanitize user input
- Validate on both client and server
- Prevent XSS and injection attacks
- Limit input lengths

### API Security
- Rate limiting for public endpoints (consider future)
- CORS configuration
- Environment variables for secrets
- No sensitive data in error messages

## Environment Variables

### Required Variables
```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=generate-with-openssl-rand-base64-32

# Google OAuth
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret

# MongoDB
MONGODB_URI=mongodb+srv://...
```

### Best Practices
- Never commit `.env.local` to git
- Use different values for dev/production
- Validate required vars on startup
- Document all variables in README

## Git Workflow

### Commit Messages
- Use conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`
- Be descriptive: "feat: add like functionality to posts"
- Reference issues when applicable

### Branch Strategy
- `main` - production-ready code
- Feature branches: `feature/like-system`
- Bug fixes: `fix/post-deletion-error`

## Debugging Tips

### Common Issues
1. **"redirect_uri_mismatch"** → Check Google OAuth settings
2. **"Module not found"** → Check import paths, restart server
3. **"MongoServerError"** → Check connection string, network access
4. **Tailwind classes not working** → Check `globals.css` imports
5. **Session undefined** → Wrap app in `<Provider>`, check `NEXTAUTH_SECRET`

### Development Tools
- Browser DevTools (Console, Network, React DevTools)
- MongoDB Compass for database inspection
- VS Code debugger for server-side code
- `console.log` strategically placed

## Code Review Checklist

Before committing:
- [ ] TypeScript errors resolved
- [ ] No console errors in browser
- [ ] Responsive design works
- [ ] Authentication checks in place
- [ ] Database queries optimized
- [ ] Error handling implemented
- [ ] Code formatted and cleaned up
- [ ] Comments for complex logic

## Future Considerations

### Scalability
- Consider Redis for session storage
- Implement full-text search with MongoDB Atlas Search
- Add CDN for static assets
- Database connection pooling optimization

### Features to Consider
- Email notifications
- Comment system on posts
- User following system
- AI-powered prompt suggestions
- Analytics dashboard
- Export/import prompts

---

**Last Updated**: November 28, 2025

This document guides AI agents (like GitHub Copilot) to maintain consistency when editing files across this project.
