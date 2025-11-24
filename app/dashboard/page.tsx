"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Users, FileText } from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPosts: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    } else if (status === "authenticated") {
      fetchStats();
    }
  }, [status, router]);

  const fetchStats = async () => {
    try {
      const [usersResponse, postsResponse] = await Promise.all([
        fetch("/api/users"),
        fetch("/api/posts?limit=1000"),
      ]);

      const usersData = await usersResponse.json();
      const postsData = await postsResponse.json();

      setStats({
        totalUsers: usersData.users?.length || 0,
        totalPosts: postsData.pagination?.total || 0,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (status === "loading" || isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-center text-gray-500">Loading dashboard...</p>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return null;
  }

  return (
    <div className="page_div">
      <div className="mb-8">
        <h1 className="text-4xl font-bold  mb-2">Dashboard</h1>
        <p className="text-gray-300">
          Welcome back, {session?.user?.name || "User"}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Users Count Panel */}
        <div className="bg-linear-to-br from-indigo-50 to-purple-500 rounded-xl shadow-lg p-6 border border-indigo-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <Users className="w-8 h-8 text-indigo-600" />
            </div>
          </div>
          <div>
            <p className="text-indigo-600 text-sm font-medium mb-1">
              Total Users
            </p>
            <p className="text-4xl font-bold text-gray-900">
              {stats.totalUsers}
            </p>
          </div>
        </div>

        {/* Posts Count Panel */}
        <div className="bg-linear-to-br from-pink-50 to-rose-500 rounded-xl shadow-lg p-6 border border-pink-100">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-pink-100 rounded-lg">
              <FileText className="w-8 h-8 text-pink-600" />
            </div>
          </div>
          <div>
            <p className="text-pink-600 text-sm font-medium mb-1">
              Total Posts
            </p>
            <p className="text-4xl font-bold text-gray-900">
              {stats.totalPosts}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-gray-200 rounded-xl shadow-md border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => router.push("/posts/new")}
            className="px-6 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition"
          >
            Create New Post
          </button>
          <button
            onClick={() => router.push("/posts")}
            className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
          >
            Manage Posts
          </button>
        </div>
      </div>
    </div>
  );
}
