"use client";

import React, { useEffect, useState, useRef } from "react";
import { CHAPTER_STATS } from "@/content/stats";

export function PulseStrip() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(CHAPTER_STATS.map(() => 0));
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 700; // 700ms count-up
          const startTime = performance.now();

          const animateCounts = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease out cubic
            const ease = 1 - Math.pow(1 - progress, 3);

            const nextCounts = CHAPTER_STATS.map((item) =>
              Math.floor(item.value * ease)
            );
            setCounts(nextCounts);

            if (progress < 1) {
              requestAnimationFrame(animateCounts);
            } else {
              setCounts(CHAPTER_STATS.map((item) => item.value));
            }
          };

          requestAnimationFrame(animateCounts);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={containerRef}
      className="w-full border-y border-[var(--hairline)] bg-[var(--surface)] py-8 my-12"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-y-4 gap-x-8">
          {CHAPTER_STATS.map((stat, idx) => (
            <div key={stat.label} className="flex items-baseline gap-2">
              <span className="font-h3 text-[var(--ink)] font-semibold font-code tracking-tight">
                {counts[idx]}
                {stat.suffix || ""}
              </span>
              <span className="font-h3 font-normal text-[var(--ink-muted)]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
