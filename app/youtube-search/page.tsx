"use client";
import React, { useState, useEffect } from "react";
import { Search, Youtube, ExternalLink } from "lucide-react";
import { useResponsiveContainer } from "@/app/hooks/useResponsiveContainer";

interface VideoResult {
  id: string;
  title: string;
  thumbnail: string;
  channelTitle: string;
  publishedAt: string;
  description: string;
}

const YoutubePage = () => {
  const fourMonthsAgo = new Date();
  fourMonthsAgo.setMonth(fourMonthsAgo.getMonth() - 4);

  // Format for date input: YYYY-MM-DD
  const formatForDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [searchQuery, setSearchQuery] = useState("AI Prompts");
  const [videos, setVideos] = useState<VideoResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [maxResults, setMaxResults] = useState("12");
  const [publishedAfter, setPublishedAfter] = useState(
    fourMonthsAgo.toISOString()
  );
  const [publishedAfterDisplay, setPublishedAfterDisplay] = useState(
    formatForDate(fourMonthsAgo)
  );
  const [videoDuration, setVideoDuration] = useState("");
  const { getContainerClass } = useResponsiveContainer();

  const maxResultsOptions = ["6", "12", "24", "50"];
  const durationOptions = [
    { value: "", label: "Any duration" },
    { value: "short", label: "Short (< 4 min)" },
    { value: "medium", label: "Medium (4-20 min)" },
    { value: "long", label: "Long (> 20 min)" },
  ];

  const performSearch = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError("");

    try {
      let url = `/api/youtube/search?q=${encodeURIComponent(searchQuery)}`;

      if (maxResults) url += `&maxResults=${maxResults}`;
      if (publishedAfter) url += `&publishedAfter=${publishedAfter}`;
      if (videoDuration) url += `&videoDuration=${videoDuration}`;

      const response = await fetch(url);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch videos");
      }

      const data = await response.json();
      setVideos(data.items || []);
    } catch (err: any) {
      setError(err.message || "Failed to search videos. Please try again.");
      console.error("YouTube search error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch on page load
  useEffect(() => {
    performSearch();
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    performSearch();
  };

  return (
    <div className={getContainerClass()}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="h1_title">
            <Youtube className="w-10 h-10" />
            YouTube Video Search
          </h1>
          {/* <p className="text-white/60">Search and discover YouTube videos</p> */}
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-3 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for videos..."
                className="w-full pl-12 pr-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#58a6ff] transition"
              />
            </div>
            <button
              type="submit"
              disabled={loading || !searchQuery.trim()}
              className="btn_v1 px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Search YouTube videos"
            >
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <label className="text_label whitespace-nowrap">
                Max Results
              </label>
              <select
                value={maxResults}
                onChange={(e) => setMaxResults(e.target.value)}
                className="input_box flex-1"
              >
                {maxResultsOptions.map((num) => (
                  <option key={num} value={num}>
                    {num} videos
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <label className="text_label whitespace-nowrap">
                Published After
              </label>
              <input
                type="date"
                value={publishedAfterDisplay}
                onChange={(e) => {
                  setPublishedAfterDisplay(e.target.value);
                  setPublishedAfter(
                    e.target.value ? new Date(e.target.value).toISOString() : ""
                  );
                }}
                className="input_box flex-1 relative z-50"
                style={{ colorScheme: "dark" }}
              />
            </div>

            <div className="flex items-center gap-2">
              <label className="text_label whitespace-nowrap">
                Video Duration
              </label>
              <select
                value={videoDuration}
                onChange={(e) => setVideoDuration(e.target.value)}
                className="input_box flex-1"
              >
                {durationOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
            <p className="mt-4 text-white/60">Searching videos...</p>
          </div>
        )}

        {/* Video Results */}
        {!loading && videos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="gradient-post-panel rounded-lg overflow-hidden group"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-[#0d1117] overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-white mb-2 line-clamp-2 group-hover:text-[#58a6ff] transition">
                    {video.title}
                  </h3>

                  <p className="text-sm text-white/60 mb-2">
                    {video.channelTitle}
                  </p>

                  <p className="text-xs text-white/40 mb-3">
                    {new Date(video.publishedAt).toLocaleDateString()}
                  </p>

                  <p className="text-sm text-white/70 line-clamp-2 mb-4">
                    {video.description}
                  </p>

                  {/* Watch Button */}
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn_v1 w-full justify-center text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Watch on YouTube
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {!loading && videos.length === 0 && !error && (
          <div className="text-center py-12">
            <Youtube className="w-16 h-16 text-white/20 mx-auto mb-4" />
            <p className="text-white/60">
              No videos found. Try a different search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default YoutubePage;
