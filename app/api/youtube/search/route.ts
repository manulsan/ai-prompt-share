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

    if (!apiKey) {
      return NextResponse.json(
        { error: "YouTube API key not configured" },
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

    const response = await fetch(youtubeUrl);

    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`);
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

    return NextResponse.json({ items });
  } catch (error) {
    console.error("YouTube search error:", error);
    return NextResponse.json(
      { error: "Failed to search YouTube videos" },
      { status: 500 }
    );
  }
}
