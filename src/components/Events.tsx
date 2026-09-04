"use client";

import React, { useState, useEffect } from "react";
import { NEXT_EVENT, PAST_EVENTS, ChapterEvent } from "@/content/events";
import { ChevronDown, Calendar, MapPin, Users, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Events() {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  // Live countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!NEXT_EVENT) return;

    const targetDate = new Date(NEXT_EVENT.dateISO).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = Math.max(targetDate - now, 0);

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleRow = (slug: string) => {
    setExpandedSlug(expandedSlug === slug ? null : slug);
  };

  return (
    <section id="events" className="w-full py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-h2 text-[var(--ink)] mb-3">Chapter Events</h2>
          <p className="font-body text-[var(--ink-muted)]">
            Every session is designed to turn attendees into active builders.
          </p>
        </div>

        {/* 1. Next Event Full-Bleed Panel (40px radius, Red Accent) */}
        {NEXT_EVENT && NEXT_EVENT.isUpcoming ? (
          <div className="mb-20 p-8 sm:p-12 rounded-[40px] border border-[var(--hairline)] bg-[var(--surface)] shadow-lg relative overflow-hidden">
            {/* Red Accent Top Border Highlight */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-[var(--red)]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[rgba(234,67,53,0.1)] text-[var(--red)] text-xs font-semibold uppercase tracking-wider mb-6">
                  <span className="w-2 h-2 rounded-full bg-[var(--red)] animate-pulse" />
                  Live Upcoming Session
                </div>

                <h3 className="font-display text-[var(--ink)] mb-4">
                  {NEXT_EVENT.title}
                </h3>

                <p className="font-body-lg text-[var(--ink-muted)] mb-6">
                  {NEXT_EVENT.outcome}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--ink-muted)] mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-[var(--red)]" />
                    <span>{NEXT_EVENT.dateString}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[var(--red)]" />
                    <span>{NEXT_EVENT.venue}</span>
                  </div>
                </div>

                <a
                  href="#join"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[var(--red)] text-white font-medium text-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Register for next event
                </a>
              </div>

              {/* Countdown Display in Mono Font */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-3xl bg-[var(--canvas)] border border-[var(--hairline)]">
                <div className="text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wider mb-6">
                  Session Countdown
                </div>
                <div className="grid grid-cols-4 gap-4 text-center font-code">
                  <div className="flex flex-col">
                    <span className="text-3xl sm:text-4xl font-bold text-[var(--ink)]">
                      {String(timeLeft.days).padStart(2, "0")}
                    </span>
                    <span className="text-xs text-[var(--ink-muted)] mt-1">Days</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl sm:text-4xl font-bold text-[var(--ink)]">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </span>
                    <span className="text-xs text-[var(--ink-muted)] mt-1">Hours</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl sm:text-4xl font-bold text-[var(--ink)]">
                      {String(timeLeft.minutes).padStart(2, "0")}
                    </span>
                    <span className="text-xs text-[var(--ink-muted)] mt-1">Mins</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl sm:text-4xl font-bold text-[var(--ink)]">
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </span>
                    <span className="text-xs text-[var(--ink-muted)] mt-1">Secs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Honest Empty State if no upcoming event is scheduled */
          <div className="mb-20 p-12 rounded-[40px] border border-[var(--hairline)] bg-[var(--surface)] text-center">
            <h3 className="font-h3 text-[var(--ink)] mb-2">No active event scheduled today</h3>
            <p className="font-body text-[var(--ink-muted)] mb-6">
              We are finalizing our next hands-on jam schedule. Follow the chapter to be notified immediately on announcement.
            </p>
            <a href="#join" className="inline-flex px-6 py-2.5 rounded-full bg-[var(--blue)] text-white font-medium text-sm">
              Get notified for next event
            </a>
          </div>
        )}

        {/* 2. Past Events Archive List (Not a card grid) */}
        <div>
          <h3 className="font-h3 text-[var(--ink)] mb-6">Past Sessions & Archive</h3>
          <div className="border-t border-[var(--hairline)] flex flex-col divide-y divide-[var(--hairline)]">
            {PAST_EVENTS.map((event) => {
              const isExpanded = expandedSlug === event.slug;
              return (
                <div key={event.slug} className="py-5 transition-colors hover:bg-[var(--canvas)]/50 rounded-lg px-3">
                  {/* Summary Row */}
                  <div
                    onClick={() => toggleRow(event.slug)}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                      <span className="font-code text-xs text-[var(--ink-muted)] w-28 shrink-0">
                        {event.dateString}
                      </span>
                      <span className="font-medium text-base text-[var(--ink)] hover:text-[var(--blue)] transition-colors">
                        {event.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-[var(--ink-muted)] shrink-0">
                      {event.attendance && (
                        <div className="flex items-center gap-1.5 text-xs">
                          <Users size={14} />
                          <span>{event.attendance} attended</span>
                        </div>
                      )}
                      <span className="hidden lg:inline text-xs">{event.speaker}</span>
                      <div className={`p-1 rounded-full text-[var(--ink-muted)] transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
                        <ChevronDown size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Accordion Expanded Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                        className="overflow-hidden mt-4 pt-4 border-t border-[var(--hairline)]"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                          {event.photoUrl && (
                            <div className="md:col-span-4 rounded-xl overflow-hidden border border-[var(--hairline)] aspect-video">
                              <img
                                src={event.photoUrl}
                                alt={event.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className={`${event.photoUrl ? "md:col-span-8" : "md:col-span-12"} flex flex-col justify-between`}>
                            <p className="font-body text-[var(--ink-muted)] mb-4 leading-relaxed">
                              {event.recap}
                            </p>
                            <div className="flex flex-wrap items-center gap-2 mb-4">
                              {event.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2.5 py-1 rounded-md bg-[var(--canvas)] border border-[var(--hairline)] text-xs text-[var(--ink-muted)] font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center gap-4 text-xs font-medium">
                              <a
                                href={`/events/${event.slug}`}
                                className="text-[var(--blue)] hover:underline inline-flex items-center gap-1"
                              >
                                View full recap page
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
