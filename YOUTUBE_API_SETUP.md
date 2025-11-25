# YouTube API Setup Instructions

## How to Get a YouTube Data API v3 Key

Follow these steps to enable YouTube video search functionality:

### Step 1: Go to Google Cloud Console
Visit [https://console.cloud.google.com/](https://console.cloud.google.com/)

### Step 2: Create or Select a Project
1. Click the project dropdown at the top
2. Click "NEW PROJECT" or select an existing one
3. Give it a name (e.g., "AI Prompt Share")

### Step 3: Enable YouTube Data API v3
1. Go to [APIs & Services > Library](https://console.cloud.google.com/apis/library)
2. Search for "YouTube Data API v3"
3. Click on it and press "ENABLE"

### Step 4: Create API Credentials
1. Go to [APIs & Services > Credentials](https://console.cloud.google.com/apis/credentials)
2. Click "CREATE CREDENTIALS"
3. Select "API key"
4. Copy the generated API key

### Step 5: Restrict Your API Key (Recommended)
1. Click on the created API key to edit it
2. Under "API restrictions", select "Restrict key"
3. Check "YouTube Data API v3"
4. Under "Application restrictions", you can add:
   - HTTP referrers: `http://localhost:3000/*` (for development)
   - Or keep it unrestricted for testing
5. Click "SAVE"

### Step 6: Add to Your .env File
1. Open your `.env` file in the project root
2. Replace `your-youtube-api-key-here` with your actual API key:
   ```
   YOUTUBE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   ```
3. Save the file
4. Restart your development server

### Step 7: Test the Feature
1. Navigate to `/youtube-search` on your website
2. Try searching for videos
3. You should now see YouTube video results!

## API Quota Information

- YouTube Data API v3 has a free quota of **10,000 units per day**
- A search request costs **100 units**
- This means you can perform **100 searches per day** for free
- Monitor your usage at: [Google Cloud Console - Quotas](https://console.cloud.google.com/apis/api/youtube.googleapis.com/quotas)

## Troubleshooting

### "YouTube API key not configured"
- Make sure you've added `YOUTUBE_API_KEY` to your `.env` file
- Restart your development server after adding the key

### "YouTube API quota exceeded"
- You've hit the daily limit of 10,000 units
- Wait until the quota resets (midnight Pacific Time)
- Or request a quota increase in Google Cloud Console

### "Invalid API key"
- Double-check your API key is copied correctly
- Make sure the YouTube Data API v3 is enabled for your project
- Check that your API key restrictions allow localhost

## Security Best Practices

1. **Never commit your API key to version control**
   - The `.env` file is in `.gitignore` by default
   
2. **Use environment variables in production**
   - Add `YOUTUBE_API_KEY` to your hosting platform's environment variables
   
3. **Restrict your API key**
   - Add HTTP referrer restrictions for production domain
   - Restrict to only YouTube Data API v3

4. **Monitor usage**
   - Check your quota usage regularly
   - Set up billing alerts if needed

## Additional Resources

- [YouTube Data API Documentation](https://developers.google.com/youtube/v3)
- [API Key Best Practices](https://cloud.google.com/docs/authentication/api-keys)
- [Quota Calculator](https://developers.google.com/youtube/v3/determine_quota_cost)
