import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("q");
    const maxResults = searchParams.get("maxResults") || "12";
    const publishedAfter = searchParams.get("publishedAfter");
    const videoDuration = searchParams.get("videoDuration");

    if (!query) {
      return NextResponse.json(
        { error: "Search query is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.YOUTUBE_API_KEY;

    if (!apiKey || apiKey === "your-youtube-api-key-here") {
      console.error("YouTube API key not configured properly");
      return NextResponse.json(
        {
          error:
            "YouTube API key not configured. Please add a valid YOUTUBE_API_KEY to your .env file. Get your API key from: https://console.cloud.google.com/apis/credentials",
        },
        { status: 500 }
      );
    }

    // YouTube Data API v3 search endpoint
    let youtubeUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
      query
    )}&type=video&maxResults=${maxResults}&key=${apiKey}`;

    // Add optional filters
    if (publishedAfter) {
      youtubeUrl += `&publishedAfter=${publishedAfter}`;
    }
    if (videoDuration) {
      youtubeUrl += `&videoDuration=${videoDuration}`;
    }

    console.log("Fetching YouTube videos for query:", query);
    const response = await fetch(youtubeUrl);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("YouTube API error:", errorData);

      // Provide more specific error messages
      if (response.status === 400) {
        return NextResponse.json(
          { error: "Invalid API key or request parameters" },
          { status: 400 }
        );
      }
      if (response.status === 403) {
        return NextResponse.json(
          {
            error:
              "YouTube API quota exceeded or API key invalid. Please check your API key and quota.",
          },
          { status: 403 }
        );
      }

      throw new Error(
        `YouTube API error: ${response.status} - ${
          errorData.error?.message || "Unknown error"
        }`
      );
    }

    const data = await response.json();

    // Transform the response to a simpler format
    const items =
      data.items?.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
        channelTitle: item.snippet.channelTitle,
        publishedAt: item.snippet.publishedAt,
        description: item.snippet.description,
      })) || [];

    console.log(`Found ${items.length} videos`);
    return NextResponse.json({ items });
  } catch (error: any) {
    console.error("YouTube search error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to search YouTube videos" },
      { status: 500 }
    );
  }
}
