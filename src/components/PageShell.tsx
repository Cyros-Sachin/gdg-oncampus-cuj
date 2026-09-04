import React from "react";

/**
 * Wrapper for standalone nav pages: clears the fixed header and
 * applies the shared canvas background + selection color.
 */
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[var(--canvas)] text-[var(--ink)] overflow-x-hidden pt-20 pb-8 selection:bg-[rgba(66,133,244,0.2)]">
      {children}
    </main>
  );
}
