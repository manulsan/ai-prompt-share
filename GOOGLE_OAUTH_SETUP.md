# Google OAuth Setup Instructions

## Overview

The message you're seeing is Google's standard OAuth consent screen. This is **normal and expected**. To complete the setup professionally, you should add your Privacy Policy and Terms of Service URLs to your Google Cloud Console OAuth configuration.

## Step-by-Step Setup Guide

### Step 1: Access Google Cloud Console
1. Go to [https://console.cloud.google.com/](https://console.cloud.google.com/)
2. Select the project you're using for this application

### Step 2: Configure OAuth Consent Screen
1. Navigate to **APIs & Services > OAuth consent screen**
   - Direct link: [OAuth Consent Screen](https://console.cloud.google.com/apis/credentials/consent)

2. Click **EDIT APP** (if you already have a consent screen) or **CREATE** (if setting up for the first time)

### Step 3: Fill in Basic Information

#### User Type
- Select **External** for public users
- Click **CREATE** or **CONTINUE**

#### App Information
- **App name**: AI Prompt Share (or your preferred name)
- **User support email**: Your email (e.g., alex.damosys@gmail.com)
- **App logo**: (Optional) Upload a logo image

### Step 4: Add Privacy Policy and Terms of Service URLs

This is the **most important step** to address the consent screen message:

1. Scroll to **App domain** section:
   - **Application home page**: `https://ai-prompt-share-pied.vercel.app`
   - **Privacy Policy link**: `https://ai-prompt-share-pied.vercel.app/privacy`
   - **Terms of Service link**: `https://ai-prompt-share-pied.vercel.app/terms`

2. **Developer contact information**:
   - Add your email: alex.damosys@gmail.com

3. Click **SAVE AND CONTINUE**

### Step 5: Configure Scopes (Required Permissions)

1. Click **ADD OR REMOVE SCOPES**

2. Select the following scopes:
   - `userinfo.email` - See your primary Google Account email address
   - `userinfo.profile` - See your personal info, including any personal info you've made publicly available
   - `openid` - Associate you with your personal info on Google

3. Click **UPDATE** then **SAVE AND CONTINUE**

### Step 6: Test Users (For Development/Testing Apps)

If your app is in **Testing** mode (not published):

1. Click **ADD USERS**
2. Add your test user emails:
   - alex.damosys@gmail.com
   - Any other test users
3. Click **SAVE AND CONTINUE**

### Step 7: Review and Submit

1. Review all your settings
2. Click **BACK TO DASHBOARD**

### Step 8: Publishing Status

#### For Testing (Current State)
- Your app is in "Testing" mode
- Only added test users can sign in
- No verification required
- Good for development

#### For Production (Optional)
If you want to make your app public:
1. Click **PUBLISH APP**
2. Google may require verification if you're using sensitive scopes
3. This can take several days to weeks

## What Happens After Setup?

Once you've added the Privacy Policy and Terms of Service URLs:

### Before
```
⚠️ "Review ai-prompt-share-pied.vercel.app's Privacy Policy and Terms of Service"
(Links don't work or show as missing)
```

### After
```
✅ "Review ai-prompt-share-pied.vercel.app's Privacy Policy and Terms of Service"
(Links are clickable and lead to your /privacy and /terms pages)
```

## Verifying Your Setup

### Test the OAuth Flow:
1. Sign out from your application
2. Clear browser cookies for your site
3. Try signing in again
4. You should see:
   - Your app name
   - Privacy Policy link (clickable → `/privacy`)
   - Terms of Service link (clickable → `/terms`)
   - Clear list of permissions being requested

### Check Your Configuration:
1. Go to [OAuth consent screen](https://console.cloud.google.com/apis/credentials/consent)
2. Verify:
   - ✅ App name is set
   - ✅ Privacy Policy URL is `https://ai-prompt-share-pied.vercel.app/privacy`
   - ✅ Terms of Service URL is `https://ai-prompt-share-pied.vercel.app/terms`
   - ✅ Authorized domains include `vercel.app`

## Common Issues and Solutions

### Issue 1: "Invalid Privacy Policy URL"
**Solution**: 
- Ensure the URL is publicly accessible (not localhost)
- URL must start with `https://`
- Test the URL in an incognito window

### Issue 2: "App domain verification required"
**Solution**:
- Go to **APIs & Services > Domain verification**
- Add and verify your domain (`ai-prompt-share-pied.vercel.app`)
- For Vercel domains, this is usually automatic

### Issue 3: "This app isn't verified"
**Solution**:
- This is normal for apps in Testing mode
- Click "Advanced" → "Go to [App Name] (unsafe)" for testing
- For production, submit your app for verification

### Issue 4: Links not appearing on consent screen
**Solution**:
- Wait a few minutes after saving changes
- Clear browser cache
- Try signing in from an incognito window
- Ensure URLs don't return 404 errors

## NextAuth.js Configuration Check

Verify your NextAuth configuration includes the correct callback URLs:

```typescript
// app/api/auth/[...nextauth]/route.ts
providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID || "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
  }),
],
```

And in Google Cloud Console > Credentials > OAuth 2.0 Client:
- **Authorized JavaScript origins**: 
  - `https://ai-prompt-share-pied.vercel.app`
  - `http://localhost:3000` (for development)
  
- **Authorized redirect URIs**:
  - `https://ai-prompt-share-pied.vercel.app/api/auth/callback/google`
  - `http://localhost:3000/api/auth/callback/google` (for development)

## Environment Variables Checklist

Ensure these are set in your `.env` file and Vercel:

```env
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret
NEXTAUTH_URL=https://ai-prompt-share-pied.vercel.app
NEXTAUTH_SECRET=your-secret-key
```

## Security Best Practices

1. **Keep sensitive scopes to minimum**
   - Only request email and profile (basic info)
   - Don't request YouTube, Drive, etc. unless needed

2. **Regular updates**
   - Keep Privacy Policy and Terms up to date
   - Notify users of significant changes

3. **Monitor usage**
   - Check [Google Cloud Console Metrics](https://console.cloud.google.com/apis/dashboard)
   - Set up alerts for unusual activity

4. **Never commit credentials**
   - Keep `.env` in `.gitignore`
   - Use environment variables in production

## Additional Resources

- [Google OAuth 2.0 Documentation](https://developers.google.com/identity/protocols/oauth2)
- [OAuth Consent Screen Help](https://support.google.com/cloud/answer/10311615)
- [NextAuth.js Google Provider](https://next-auth.js.org/providers/google)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)

## Quick Action Checklist

- [ ] Go to Google Cloud Console OAuth consent screen
- [ ] Add Privacy Policy URL: `https://ai-prompt-share-pied.vercel.app/privacy`
- [ ] Add Terms of Service URL: `https://ai-prompt-share-pied.vercel.app/terms`
- [ ] Add your email as developer contact
- [ ] Configure scopes (email, profile, openid)
- [ ] Add test users if in Testing mode
- [ ] Verify authorized redirect URIs match your domain
- [ ] Test sign-in flow in incognito window
- [ ] Confirm Privacy/Terms links are clickable

---

**Note**: The consent screen message you're seeing is **not an error**. It's Google's way of ensuring users understand what permissions they're granting and have access to your app's policies. Once you add the URLs, the links will become clickable and functional.
