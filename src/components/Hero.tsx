"use client";

import React from "react";
import { ArcLogoMark } from "./ArcLogoMark";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { NEXT_EVENT } from "@/content/events";
import { CHAPTER_JOIN_URL } from "@/content/links";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Left-aligned Display Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left z-10"
        >
          {/* Official Chapter Title */}
          <h1 className="font-display-xl tracking-tight text-[var(--ink)] mb-4">
            GDG on Campus
          </h1>
          <p className="text-[20px] font-medium text-[var(--ink-muted)] mb-8 tracking-tight">
            Central University of Jammu
          </p>

          {/* Subheadline (Left-aligned, strict capped 68ch max width) */}
          <p className="font-body-lg text-[var(--ink-muted)] mb-10 leading-relaxed max-w-[620px]">
            We meet on campus to build things with Google&apos;s tools, and to teach each other how.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={CHAPTER_JOIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[var(--blue)] text-white font-medium text-base shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              Join the chapter
            </a>

            {/* Next event deep-link with arrow (Only place arrow is allowed) */}
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors group"
            >
              <span>Next event: {NEXT_EVENT.title}</span>
              <span className="text-[var(--red)] font-semibold transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Floating chapter mark */}
        <div className="lg:col-span-5 relative h-[380px] sm:h-[460px] w-full flex items-center justify-center">
          {/* Soft colour glow behind the mark */}
          <div
            aria-hidden
            className="absolute w-[78%] h-[78%] rounded-full blur-3xl opacity-70 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 45%, rgba(66,133,244,0.30), rgba(52,168,83,0.20) 40%, rgba(234,67,53,0.14) 65%, transparent 78%)",
            }}
          />

          <motion.div
            className="relative"
            style={{ perspective: 1000, filter: "drop-shadow(0 26px 38px rgba(0,0,0,0.22))" }}
            initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 1,
                    scale: 1,
                    y: [0, -18, 0],
                    rotateZ: [-2.5, 2.5, -2.5],
                    rotateY: [-9, 9, -9],
                  }
            }
            transition={{
              opacity: { duration: 0.6 },
              scale: { duration: 0.6 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotateZ: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <ArcLogoMark
              size={320}
              animate
              className="h-auto w-[240px] sm:w-[320px] max-w-[80vw]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
