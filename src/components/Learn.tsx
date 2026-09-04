"use client";

import React from "react";
import { LEARN_TRACKS } from "@/content/learn";
import { ExternalLink, BookOpen } from "lucide-react";

export function Learn() {
  return (
    <section id="learn" className="w-full py-20 bg-[var(--surface)]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header with Yellow Accent */}
        <div className="flex items-center gap-3 mb-3">
          <span className="w-3 h-3 rounded-full bg-[var(--yellow)]" />
          <span className="text-xs font-semibold text-[var(--yellow)] uppercase tracking-wider">
            Learning & Resources
          </span>
        </div>

        <h2 className="font-h2 text-[var(--ink)] mb-3">
          Study Jams & Roadmaps
        </h2>
        <p className="font-body text-[var(--ink-muted)] mb-12">
          Curated learning tracks, open syllabus materials, and hands-on skill badge pathways.
        </p>

        {/* Quiet Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LEARN_TRACKS.map((track) => (
            <div
              key={track.id}
              className="p-8 rounded-[28px] bg-[var(--canvas)] border border-[var(--hairline)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[rgba(249,171,0,0.12)] text-[var(--ink)] border border-[rgba(249,171,0,0.3)]">
                    {track.domain}
                  </span>
                  <span className="font-code text-xs text-[var(--ink-muted)]">
                    {track.status}
                  </span>
                </div>

                <h3 className="font-h3 text-[var(--ink)] mb-3">{track.title}</h3>
                <p className="font-body text-[var(--ink-muted)] mb-6 text-sm leading-relaxed">
                  {track.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--hairline)] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-[var(--ink-muted)]">
                  <BookOpen size={14} />
                  <span>{track.modulesCount}</span>
                </div>

                <a
                  href={track.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--ink)] hover:text-[var(--yellow)] transition-colors"
                >
                  <span>Open syllabus</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
