"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Groups", href: "#groups" },
  { label: "Events", href: "#events" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Donate", href: "#donate" },
];

function GNCLogo({ dark }: { dark: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative w-10 h-10 flex-shrink-0">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <circle cx="20" cy="20" r="20" fill="#006B3F" />
          <path
            d="M20 7L22.9 16.6H33L24.5 22.4L27.4 32L20 26.2L12.6 32L15.5 22.4L7 16.6H17.1L20 7Z"
            fill="#FCD116"
          />
        </svg>
      </div>
      <div className="flex flex-col leading-tight">
        <span
          className={`font-serif font-bold text-lg leading-none transition-colors ${
            dark ? "text-gray-900" : "text-white"
          }`}
        >
          GNC
        </span>
        <span
          className={`text-[10px] font-medium tracking-wide transition-colors ${
            dark ? "text-gray-500" : "text-gray-300"
          }`}
        >
          Ghana National Council
        </span>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <GNCLogo dark={scrolled} />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors hover:bg-white/10 ${
                  scrolled
                    ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#join"
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 ${
                scrolled
                  ? "bg-ghana-red text-white hover:bg-red-700 shadow-md hover:shadow-lg"
                  : "bg-ghana-red text-white hover:bg-red-700 shadow-lg"
              }`}
            >
              Join GNC
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className={`md:hidden p-2.5 rounded-lg transition-colors ${
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3.5 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 mt-2 border-t border-gray-100">
                <Link
                  href="#join"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center px-4 py-3.5 bg-ghana-red text-white font-semibold rounded-xl text-sm hover:bg-red-700 transition-colors"
                >
                  Join GNC
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
