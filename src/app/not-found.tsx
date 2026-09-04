import React from "react";
import { ArcLogoMark } from "@/components/ArcLogoMark";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--canvas)] text-[var(--ink)] flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-6 animate-pulse">
        <ArcLogoMark size={64} />
      </div>

      <h1 className="font-display text-[var(--ink)] mb-3">404 — Page Not Found</h1>
      <p className="font-body text-[var(--ink-muted)] max-w-[480px] mb-8 leading-relaxed">
        The route you requested does not exist on the GDG on Campus CUJ website.
      </p>

      <Link
        href="/"
        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[var(--blue)] text-white font-medium text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform"
      >
        Return to Chapter Home
      </Link>
    </main>
  );
}
