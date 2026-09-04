"use client";

import React from "react";
import { ROW_1_LEADERSHIP, ROW_2_ORGANIZER, CORE_LEADS } from "@/content/team";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { Mail } from "lucide-react";

export function Team() {
  return (
    <section id="team" className="w-full py-20 bg-[var(--canvas)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-h2 text-[var(--ink)] mb-3">Chapter Leadership & Team</h2>
        <p className="font-body text-[var(--ink-muted)] mb-12">
          Faculty mentors, student organizers, and technical domain leads guiding GDG on Campus CUJ.
        </p>

        {/* ========================================================================= */}
        {/* ROW 1: 2 BLOCKS (1. Founder/Mentor HOD of CSE | 2. Faculty Coordinator)   */}
        {/* ========================================================================= */}
        <div className="mb-10">
          <div className="text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wider mb-4">
            Faculty Mentorship & Guidance
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ROW_1_LEADERSHIP.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-[28px] bg-[var(--surface)] border border-[var(--hairline)] shadow-sm flex flex-col sm:flex-row gap-6 items-center hover:border-[var(--blue)] transition-colors"
              >
                <div className="w-full sm:w-44 h-48 rounded-2xl overflow-hidden shrink-0 border border-[var(--hairline)] relative group">
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[rgba(66,133,244,0.1)] text-[var(--blue)] text-xs font-semibold uppercase tracking-wider mb-3">
                      {item.badge}
                    </span>
                    <h3 className="font-h3 text-[var(--ink)] mb-1">{item.name}</h3>
                    <p className="text-sm font-medium text-[var(--ink-muted)] mb-2">
                      {item.role}
                    </p>
                    <p className="text-xs text-[var(--ink-muted)] mb-3 font-mono">
                      {item.department}
                    </p>
                    <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-4">
                      {item.bio}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-[var(--ink-muted)] pt-3 border-t border-[var(--hairline)]">
                    {item.socials.linkedin && (
                      <a
                        href={item.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.name} LinkedIn`}
                        className="hover:text-[var(--ink)] transition-colors"
                      >
                        <LinkedinIcon size={18} />
                      </a>
                    )}
                    {item.socials.email && (
                      <a
                        href={`mailto:${item.socials.email}`}
                        aria-label={`Email ${item.name}`}
                        className="hover:text-[var(--blue)] transition-colors inline-flex items-center gap-1.5 text-xs text-[var(--ink-muted)]"
                      >
                        <Mail size={16} />
                        <span>{item.socials.email}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ROW 2: SINGLE BLOCK (The Lead & Organizer)                                */}
        {/* ========================================================================= */}
        <div className="mb-16">
          <div className="text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wider mb-4">
            Student Chapter Organizer
          </div>

          <div className="p-8 sm:p-10 rounded-[28px] bg-[var(--surface)] border border-[var(--hairline)] shadow-md flex flex-col md:flex-row gap-8 items-center border-l-4 border-l-[var(--blue)]">
            <div className="w-full md:w-56 h-60 rounded-2xl overflow-hidden shrink-0 border border-[var(--hairline)] relative group">
              <img
                src={ROW_2_ORGANIZER.avatarUrl}
                alt={ROW_2_ORGANIZER.name}
                className="w-full h-full object-cover "
              />
            </div>

            <div className="flex flex-col justify-between h-full w-full">
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full bg-[var(--blue)] text-white text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
                  {ROW_2_ORGANIZER.badge}
                </span>
                <h3 className="font-display text-[var(--ink)] mb-1">
                  {ROW_2_ORGANIZER.name}
                </h3>
                <p className="text-base font-semibold text-[var(--blue)] mb-2">
                  {ROW_2_ORGANIZER.role}
                </p>
                <p className="text-xs text-[var(--ink-muted)] mb-4 font-mono">
                  {ROW_2_ORGANIZER.department}
                </p>
                <p className="text-base text-[var(--ink-muted)] leading-relaxed max-w-[720px] mb-6">
                  {ROW_2_ORGANIZER.bio}
                </p>
              </div>

              <div className="flex items-center gap-4 text-[var(--ink-muted)] pt-4 border-t border-[var(--hairline)]">
                {ROW_2_ORGANIZER.socials.github && (
                  <a
                    href={ROW_2_ORGANIZER.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${ROW_2_ORGANIZER.name} GitHub`}
                    className="hover:text-[var(--ink)] transition-colors"
                  >
                    <GithubIcon size={20} />
                  </a>
                )}
                {ROW_2_ORGANIZER.socials.linkedin && (
                  <a
                    href={ROW_2_ORGANIZER.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${ROW_2_ORGANIZER.name} LinkedIn`}
                    className="hover:text-[var(--ink)] transition-colors"
                  >
                    <LinkedinIcon size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DOMAIN LEADS (Web, AI/ML, Cloud, Design)                                  */}
        {/* ========================================================================= */}
        {/* <div>
          <div className="text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wider mb-6">
            Technical Domain Leads
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_LEADS.map((member) => (
              <div
                key={member.id}
                className="p-6 rounded-[28px] bg-[var(--surface)] border border-[var(--hairline)] shadow-sm flex flex-col justify-between"
              >
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-5 border border-[var(--hairline)] relative group">
                  <img
                    src={member.avatarUrl}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-[240ms] ease-out"
                  />
                </div>

                <div>
                  <h4 className="font-medium text-base text-[var(--ink)] mb-0.5">
                    {member.name}
                  </h4>
                  <p className="text-xs text-[var(--ink-muted)] mb-4 font-medium">
                    {member.role}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--hairline)] flex items-center gap-3 text-[var(--ink-muted)]">
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} GitHub`}
                      className="hover:text-[var(--ink)] transition-colors"
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                      className="hover:text-[var(--ink)] transition-colors"
                    >
                      <LinkedinIcon size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
