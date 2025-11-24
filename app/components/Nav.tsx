"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { Sparkles } from "lucide-react";

const Nav = () => {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center w-full mb-0 py-3 px-6 bg-[#010409] border-b border-[#010409]">
      {/* Left side: Logo and PromptSharing */}
      <Link href="/" className="flex items-center gap-2">
        <Sparkles className="w-7 h-7 text-white" />
        <p className="text-base font-semibold text-white">PromptSharing</p>
      </Link>

      {/* Right side: Posts, Dashboard, Sign In */}
      <div className="flex items-center gap-4">
        <Link
          href="/posts"
          className="text-sm font-semibold text-white hover:text-white/80 transition px-2"
        >
          Posts
        </Link>
        {session ? (
          <Link
            href="/dashboard"
            className="text-sm font-semibold text-white hover:text-white/80 transition px-2"
          >
            Dashboard
          </Link>
        ) : (
          <span className="text-sm font-semibold text-white/50 cursor-not-allowed px-2">
            Dashboard
          </span>
        )}
        {isLoading ? (
          <div className="px-3 py-1.5 text-sm font-medium text-white/60">
            Loading...
          </div>
        ) : session ? (
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 focus:outline-none"
            >
              {session.user?.image ? (
                <Image
                  src={session.user.image}
                  alt={session.user.name || "User"}
                  width={32}
                  height={32}
                  className="rounded-full object-cover border-2 border-white/20 hover:border-white/40 transition"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center text-sm font-semibold hover:bg-white/20 transition border-2 border-white/20">
                  {session.user?.name?.charAt(0).toUpperCase() || "U"}
                </div>
              )}
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-[#d0d7de] py-1 z-50">
                <div className="px-4 py-3 border-b border-[#d0d7de]">
                  <p className="text-sm font-semibold text-[#24292f]">
                    {session.user?.name || "User"}
                  </p>
                  <p className="text-xs text-[#57606a]">
                    {session.user?.email}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsDropdownOpen(false);
                    signOut();
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-[#cf222e] hover:bg-[#fff8f8] transition"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="px-4 py-1.5 text-sm font-semibold text-white bg-transparent rounded-md hover:bg-white/10 border border-white/30 hover:border-white/50 transition"
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
