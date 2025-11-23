"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

const Nav = () => {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center w-full mb-8 pt-3 px-4">
      {/* Left side: Logo and PromptSharing */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/assets/images/logo.svg"
          alt="Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="text-lg font-semibold text-gray-900">PromptSharing</p>
      </Link>

      {/* Right side: Posts, Blog, Sign In */}
      <div className="flex items-center gap-8">
        <Link
          href="/posts"
          className="text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          Post
        </Link>
        {session ? (
          <Link
            href="/dashboard"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Dashboard
          </Link>
        ) : (
          <span className="text-sm font-medium text-gray-400 cursor-not-allowed">
            Dashboard
          </span>
        )}
        {isLoading ? (
          <div className="px-4 py-2 text-sm font-semibold text-gray-400">
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
                  width={40}
                  height={40}
                  className="rounded-full object-cover border-2 border-gray-300 hover:border-gray-400 transition"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm font-semibold hover:bg-gray-700 transition">
                  {session.user?.name?.charAt(0).toUpperCase() || "U"}
                </div>
              )}
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                <div className="px-4 py-2 border-b border-gray-200">
                  <p className="text-sm font-semibold text-gray-900">
                    {session.user?.name || "User"}
                  </p>
                  <p className="text-xs text-gray-500">{session.user?.email}</p>
                </div>
                <button
                  onClick={() => {
                    setIsDropdownOpen(false);
                    signOut();
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="px-4 py-2 text-sm font-semibold text-white bg-black rounded-lg hover:bg-gray-800"
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
