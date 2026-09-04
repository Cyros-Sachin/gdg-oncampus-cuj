"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface DomainItem {
  id: string;
  name: string;
  color: string;
  bgAlphaColor: string;
  description: string;
  exampleTitle: string;
  exampleDetail: string;
}

const DOMAINS: DomainItem[] = [
  {
    id: "web",
    name: "Web Development",
    color: "#4285F4",
    bgAlphaColor: "rgba(66, 133, 244, 0.06)",
    description: "Building fast, accessible web applications using modern server components, Tailwind design systems, and performant APIs.",
    exampleTitle: "Campus Navigator & Shuttle Tracker",
    exampleDetail: "Shipped a real-time campus route planner built with Next.js App Router and Google Maps Platform."
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    color: "#EA4335",
    bgAlphaColor: "rgba(234, 67, 53, 0.06)",
    description: "Training neural networks, fine-tuning LLM pipelines, and building practical AI agents with Python and Google Colab.",
    exampleTitle: "Placement AI Mock Interviewer",
    exampleDetail: "Built a voice-driven technical interview practice tool powered by the Gemini 1.5 API."
  },
  {
    id: "android",
    name: "Android Development",
    color: "#F9AB00",
    bgAlphaColor: "rgba(249, 171, 0, 0.06)",
    description: "Crafting modern native Android apps with Kotlin, Jetpack Compose declarative UI, and Coroutines asynchronous state.",
    exampleTitle: "Android 15 Compose Masterclass",
    exampleDetail: "Hosted a 4-hour hands-on jam where 120+ attendees built live weather dashboard apps."
  },
  {
    id: "cloud",
    name: "Cloud & Open Source",
    color: "#34A853",
    bgAlphaColor: "rgba(52, 168, 83, 0.06)",
    description: "Deploying microservices on Google Cloud Platform, learning Kubernetes containers, and contributing to open-source software.",
    exampleTitle: "IoT Telemetry System",
    exampleDetail: "Constructed real-time health telemetry dashboards."
  }
];

export function WhatWeDo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    if (isMobile) return;
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const idx = Math.min(Math.floor(latest * DOMAINS.length), DOMAINS.length - 1);
      setActiveIdx(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress, isMobile]);

  const activeDomain = DOMAINS[activeIdx] || DOMAINS[0];

  return (
    <section id="what-we-do" className="w-full relative py-20">
      {/* Desktop Sticky Scroll Set Piece (4 viewport heights) */}
      {!isMobile ? (
        <div ref={containerRef} className="relative h-full">
          <div className="sticky top-24 max-w-[1200px] mx-auto px-6">
            <div
              className="p-10 md:p-14 rounded-[28px] border border-[var(--hairline)] transition-colors duration-500 glass-panel shadow-lg"
              style={{ backgroundColor: activeDomain.bgAlphaColor }}
            >
              <div className="grid grid-cols-12 gap-12 items-center">
                {/* Left Column: Fixed Heading + 4-Segment Progress Indicator */}
                <div className="col-span-5 flex flex-col justify-between">
                  <div>
                    <h2 className="font-h2 text-[var(--ink)] mb-4">
                      What we do on campus
                    </h2>
                    <p className="text-[17px] text-[var(--ink-muted)] leading-relaxed">
                      We focus on four core tech domains through hands-on jams, peer mentorship, and real campus builds.
                    </p>
                  </div>

                  {/* 4-Segment Arc Progress Indicator */}
                  <div className="mt-12 flex items-center gap-3">
                    {DOMAINS.map((domain, i) => (
                      <button
                        key={domain.id}
                        onClick={() => setActiveIdx(i)}
                        className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                          i === activeIdx
                            ? "opacity-100 scale-y-125"
                            : "opacity-30 hover:opacity-60"
                        }`}
                        style={{ backgroundColor: domain.color }}
                        aria-label={`Jump to ${domain.name}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Right Column: Active Domain Card */}
                <div className="col-span-7 pl-6 border-l border-[var(--hairline)]">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: activeDomain.color }}
                    />
                    <span
                      className="text-sm font-semibold tracking-wide uppercase"
                      style={{ color: activeDomain.color }}
                    >
                      {activeDomain.name}
                    </span>
                  </div>

                  <h3 className="font-h3 text-[var(--ink)] mb-4">
                    {activeDomain.description}
                  </h3>

                  {/* Named real campus example */}
                  <div className="mt-8 p-6 rounded-2xl bg-[var(--surface)] border border-[var(--hairline)] shadow-sm">
                    <div className="text-xs font-semibold text-[var(--ink-muted)] mb-1 uppercase tracking-wider">
                      Real Campus Build / Event
                    </div>
                    <div className="font-medium text-base text-[var(--ink)] mb-2">
                      {activeDomain.exampleTitle}
                    </div>
                    <div className="text-sm text-[var(--ink-muted)] leading-relaxed">
                      {activeDomain.exampleDetail}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Mobile Stacked Layout (< 900px) */
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-h2 text-[var(--ink)] mb-8">What we do on campus</h2>
          <div className="flex flex-col gap-6">
            {DOMAINS.map((domain) => (
              <div
                key={domain.id}
                className="p-8 rounded-[28px] border border-[var(--hairline)] bg-[var(--surface)] shadow-sm"
                style={{ borderLeftColor: domain.color, borderLeftWidth: "6px" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: domain.color }}
                  >
                    {domain.name}
                  </span>
                </div>
                <h3 className="font-h3 text-[var(--ink)] mb-4">{domain.description}</h3>
                <div className="p-4 rounded-xl bg-[var(--canvas)] border border-[var(--hairline)]">
                  <div className="text-xs font-semibold text-[var(--ink-muted)] mb-1 uppercase tracking-wider">
                    Campus Impact
                  </div>
                  <div className="font-medium text-sm text-[var(--ink)] mb-1">
                    {domain.exampleTitle}
                  </div>
                  <div className="text-xs text-[var(--ink-muted)]">
                    {domain.exampleDetail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
