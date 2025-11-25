import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#010409] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left side - Copyright */}
          <div className="text-sm text-white/60">
            © {new Date().getFullYear()} Share AI Prompts. All rights reserved.
          </div>

          {/* Right side - Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-white/60 hover:text-white transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-white/60 hover:text-white transition"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
