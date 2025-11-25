"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Sparkles,
  Menu,
  X,
  Youtube,
  FileText,
  LayoutDashboard,
} from "lucide-react";

const Nav = () => {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="flex justify-between items-center w-full mb-0 py-3 px-6 bg-[#010409] border-b border-[#010409]">
        {/* Left side: Logo and PromptSharing */}
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="w-7 h-7 text-white" />
          <p className="text-base font-semibold text-white">PromptSharing</p>
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/youtube-search"
            className="text-sm font-semibold text-white hover:text-white/80 transition px-2"
          >
            @Youtube
          </Link>

          {session ? (
            <Link
              href="/posts"
              className="text-sm font-semibold text-white hover:text-white/80 transition px-2"
            >
              Posts
            </Link>
          ) : (
            <span className="text-sm font-semibold text-white/50 cursor-not-allowed px-2">
              Posts
            </span>
          )}
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

        {/* Mobile Hamburger Menu - Visible only on mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-md transition"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Side Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0d1117] border-l border-[#30363d] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#30363d]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-white" />
              <span className="text-sm font-semibold text-white">Menu</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/60 hover:text-white p-1 hover:bg-white/10 rounded transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* User Info */}
          {session && (
            <div className="p-4 border-b border-[#30363d]">
              <div className="flex items-center gap-3">
                {session.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    width={40}
                    height={40}
                    className="rounded-full object-cover border-2 border-white/20"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center text-base font-semibold border-2 border-white/20">
                    {session.user?.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white truncate">
                    {session.user?.name || "User"}
                  </p>
                  <p className="text-xs text-white/60 truncate">
                    {session.user?.email}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-2">
            <Link
              href="/youtube-search"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 text-white hover:bg-white/10 rounded-md transition mb-1"
            >
              <Youtube className="w-5 h-5" />
              <span className="text-sm font-medium">YouTube Search</span>
            </Link>

            {session ? (
              <Link
                href="/posts"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 text-white hover:bg-white/10 rounded-md transition mb-1"
              >
                <FileText className="w-5 h-5" />
                <span className="text-sm font-medium">Posts</span>
              </Link>
            ) : (
              <div className="flex items-center gap-3 px-3 py-2.5 text-white/40 cursor-not-allowed mb-1">
                <FileText className="w-5 h-5" />
                <span className="text-sm font-medium">Posts</span>
              </div>
            )}

            {session ? (
              <Link
                href="/dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 text-white hover:bg-white/10 rounded-md transition mb-1"
              >
                <LayoutDashboard className="w-5 h-5" />
                <span className="text-sm font-medium">Dashboard</span>
              </Link>
            ) : (
              <div className="flex items-center gap-3 px-3 py-2.5 text-white/40 cursor-not-allowed mb-1">
                <LayoutDashboard className="w-5 h-5" />
                <span className="text-sm font-medium">Dashboard</span>
              </div>
            )}
          </nav>

          {/* Footer - Sign In/Out Button */}
          <div className="p-4 border-t border-[#30363d]">
            {isLoading ? (
              <div className="text-center text-sm text-white/60 py-2">
                Loading...
              </div>
            ) : session ? (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  signOut();
                }}
                className="w-full px-4 py-2.5 text-sm font-semibold text-[#cf222e] bg-[#cf222e]/10 hover:bg-[#cf222e]/20 rounded-md transition border border-[#cf222e]/30"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  signIn("google");
                }}
                className="w-full px-4 py-2.5 text-sm font-semibold text-white bg-transparent hover:bg-white/10 rounded-md border border-white/30 hover:border-white/50 transition"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
