# Like Feature Implementation

## Changes Made

### 1. Updated Post Model (`models/Post.ts`)
Added two new fields:
- `likes`: Number (default: 0) - tracks total like count
- `likedBy`: Array of email strings - tracks who liked the post

### 2. Created LikeBadge Component (`app/components/LikeBadge.tsx`)
- Heart icon that changes color when liked
- Shows like count
- Handles optimistic updates
- Requires sign-in to like
- Toggle like/unlike functionality

### 3. Updated Home Page (`app/page.tsx`)
- Added `likes` and `likedBy` to Post interface
- Imported and added LikeBadge component
- Positioned next to date and status badge

### 4. Updated API Endpoint (`app/api/posts/route.ts`)
- **POST method**: Explicitly sets `likes: 0` and `likedBy: []` when creating posts
- **GET method**: Ensures all returned posts have likes/likedBy fields (even old posts)
- **PATCH method**: Handles like/unlike toggle logic

## Important: Default Values in MongoDB

**Why explicit initialization matters:**
Mongoose schema defaults don't always persist to MongoDB. To ensure consistency:
1. New posts explicitly set `likes: 0` and `likedBy: []`
2. GET endpoint adds defaults for old posts missing these fields
3. This ensures the frontend always receives these fields

## Usage

The LikeBadge appears on each post card in the home page. Users must be signed in to like posts. Clicking toggles between liked (red heart) and unliked (gray heart) states.

## Testing

1. Sign in with Google
2. Click the heart icon on any post
3. Check that the count increments/decrements
4. Refresh page to verify persistence
5. Try liking from different accounts

## Migration for Existing Posts

Old posts without `likes`/`likedBy` fields will automatically get default values when fetched. When someone likes an old post, the fields will be added to MongoDB.

## Future Enhancements

- Add like button to individual post detail pages
- Show who liked the post (list of users)
- Sort posts by most liked
- Add animation on like
