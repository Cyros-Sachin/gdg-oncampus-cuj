"use client";

import React from "react";
import { PROJECTS, type ProjectItem } from "@/content/projects";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

function CompactCard({ project }: { project: ProjectItem }) {
  return (
    <div className="p-6 rounded-[28px] bg-[var(--surface)] border border-[var(--hairline)] shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-lg text-[var(--ink)]">{project.title}</h4>
          <div className="flex items-center gap-2 text-[var(--ink-muted)]">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit live app"
                className="hover:text-[var(--ink)] transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-[var(--ink-muted)] mb-4 leading-relaxed">
          {project.summary}
        </p>
      </div>

      <div className="pt-4 border-t border-[var(--hairline)] flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="text-[var(--ink-muted)]">By {project.builders}</span>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 2).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded bg-[var(--canvas)] border border-[var(--hairline)] text-[var(--ink-muted)] font-medium text-[11px]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BuildShowcase({ full = false }: { full?: boolean }) {
  const featured = PROJECTS.find((p) => p.isFeatured) || PROJECTS[0];
  const rest = PROJECTS.filter((p) => p.id !== featured.id);
  const compactList = rest.slice(0, 3);
  const moreList = full ? rest.slice(3) : [];

  return (
    <section id="build" className="w-full py-20 bg-[var(--canvas)]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header with Green Accent */}
        <div className="flex items-center gap-3 mb-3">
          <span className="w-3 h-3 rounded-full bg-[var(--green)]" />
          <span className="text-xs font-semibold text-[var(--green)] uppercase tracking-wider">
            Building & Impact
          </span>
        </div>

        <h2 className="font-h2 text-[var(--ink)] mb-4">
          Shipped by CUJ Students
        </h2>
        <p className="font-body text-[var(--ink-muted)] mb-12">
          Projects built by chapter members to solve real problems on campus and beyond.
        </p>

        {/* Asymmetric Grid: 7-Col Featured Project + 5-Col Compact List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Project (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col p-8 rounded-[28px] bg-[var(--surface)] border border-[var(--hairline)] shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            {featured.imageUrl && (
              <div className="w-full h-[260px] rounded-2xl overflow-hidden mb-6 border border-[var(--hairline)]">
                <img
                  src={featured.imageUrl}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full bg-[rgba(52,168,83,0.1)] text-[var(--green)] text-xs font-semibold uppercase tracking-wider">
                Featured Build
              </span>
              <div className="flex items-center gap-3 text-[var(--ink-muted)]">
                {featured.githubUrl && (
                  <a
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View source code on GitHub"
                    className="hover:text-[var(--ink)] transition-colors"
                  >
                    <GithubIcon size={18} />
                  </a>
                )}
                {featured.liveUrl && (
                  <a
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit live project site"
                    className="hover:text-[var(--ink)] transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="font-h3 text-[var(--ink)] mb-3">{featured.title}</h3>
            <p className="font-body text-[var(--ink-muted)] mb-6 leading-relaxed">
              {featured.summary}
            </p>

            <div className="mt-auto pt-6 border-t border-[var(--hairline)] flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-[var(--ink-muted)]">
                Built by: <span className="font-medium text-[var(--ink)]">{featured.builders}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {featured.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-md bg-[var(--canvas)] border border-[var(--hairline)] text-xs text-[var(--ink-muted)] font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Compact List (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {compactList.map((project) => (
              <CompactCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Full project list — only on the /build page */}
        {full && moreList.length > 0 && (
          <div className="mt-8">
            <h3 className="font-h3 text-[var(--ink)] mb-6">More Builds</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {moreList.map((project) => (
                <CompactCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
