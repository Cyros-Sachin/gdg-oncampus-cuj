"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArcLogoMark } from "./ArcLogoMark";
import { useTheme } from "./ThemeProvider";
import { CHAPTER_JOIN_URL, NAV_LINKS } from "@/content/links";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = NAV_LINKS;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "h-14 glass-panel shadow-sm" : "h-18 bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo & Chapter Name */}
          <Link
            href="/"
            className="flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-[#4285F4] rounded-lg p-1"
          >
            <div className="transition-transform duration-300 transform scale-100">
              <ArcLogoMark size={scrolled ? 26 : 32} />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-[15px] tracking-tight leading-tight text-[var(--ink)]">
                GDG on Campus
              </span>
              <span className="text-[12px] text-[var(--ink-muted)] font-medium leading-none">
                CU Jammu
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14px] font-medium text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action Group */}
          <div className="flex items-center gap-3">
            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2 rounded-full text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--hairline)] transition-colors"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Filled Blue Pill CTA (Only filled button in header) */}
            <a
              href={CHAPTER_JOIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full bg-[var(--blue)] text-white text-[14px] font-medium transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Join the chapter
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              className="md:hidden p-2 text-[var(--ink)] hover:bg-[var(--hairline)] rounded-lg"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Sheet Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs md:hidden"
            />

            {/* Bottom Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--surface)] border-t border-[var(--hairline)] rounded-t-[28px] p-6 shadow-lg md:hidden glass-panel"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--hairline)]">
                <div className="flex items-center gap-3">
                  <ArcLogoMark size={28} />
                  <span className="font-semibold text-base text-[var(--ink)]">GDG on Campus CUJ</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-full hover:bg-[var(--hairline)] text-[var(--ink-muted)]"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="h-[56px] flex items-center px-4 rounded-xl text-base font-medium text-[var(--ink)] hover:bg-[var(--canvas)] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--hairline)]">
                <a
                  href={CHAPTER_JOIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="w-full h-[52px] flex items-center justify-center rounded-2xl bg-[var(--blue)] text-white font-medium text-base shadow-sm"
                >
                  Join the chapter
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
