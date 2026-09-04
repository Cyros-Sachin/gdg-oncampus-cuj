"use client";

import React from "react";
import Link from "next/link";
import { ArcLogoMark } from "./ArcLogoMark";
import { LinkedinIcon, InstagramIcon, WhatsappIcon } from "./SocialIcons";
import { SOCIAL_LINKS } from "@/content/links";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[var(--canvas)] border-t border-[var(--hairline)] py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[var(--hairline)]">
          {/* Chapter Identity */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <ArcLogoMark size={28} />
              <span className="font-semibold text-base text-[var(--ink)]">
                GDG on Campus CUJ
              </span>
            </div>

            <p className="font-caption text-[var(--ink-muted)] mb-4 max-w-[480px]">
              Official student developer chapter at Central University of Jammu (Rahya Suchani, Jammu, India). We host study jams, build open-source software, and foster peer-to-peer engineering.
            </p>

            <div className="flex items-center gap-2 text-xs text-[var(--ink-muted)]">
              <MapPin size={14} className="shrink-0 text-[var(--blue)]" />
              <span>Central University of Jammu, Rahya Suchani, Jammu 181143</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-[var(--ink)] uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 font-caption text-[var(--ink-muted)]">
              <li>
                <Link href="/what-we-do" className="hover:text-[var(--ink)] transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-[var(--ink)] transition-colors">
                  Events & Archive
                </Link>
              </li>
              <li>
                <Link href="/build" className="hover:text-[var(--ink)] transition-colors">
                  Project Showcase
                </Link>
              </li>
              <li>
                <Link href="/learn" className="hover:text-[var(--ink)] transition-colors">
                  Study Jams
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[var(--ink)] transition-colors">
                  Core Team
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[var(--ink)] transition-colors">
                  Apply & FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-[var(--ink)] uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex items-center gap-4 text-[var(--ink-muted)] mb-6">
              
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GDG CUJ LinkedIn"
                className="hover:text-[var(--ink)] transition-colors"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GDG CUJ Instagram"
                className="hover:text-[var(--ink)] transition-colors"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GDG CUJ WhatsApp group"
                className="hover:text-[var(--ink)] transition-colors"
              >
                <WhatsappIcon size={18} />
              </a>
              
            </div>

            <a
              href="mailto:sachinkc4456@gmail.com"
              className="inline-flex items-center gap-2 text-xs font-caption text-[var(--ink-muted)] hover:text-[var(--blue)] transition-colors"
            >
              <Mail size={14} />
              <span>sachinkc4456@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Bottom social row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <span className="text-xs font-semibold text-[var(--ink)] uppercase tracking-wider">
            Find us on
          </span>
          <div className="flex items-center gap-5 text-sm font-medium text-[var(--ink-muted)]">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[var(--blue)] transition-colors"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[var(--blue)] transition-colors"
            >
              <InstagramIcon size={16} />
              <span>Instagram</span>
            </a>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[var(--blue)] transition-colors"
            >
              <WhatsappIcon size={16} />
              <span>WhatsApp Group</span>
            </a>
          </div>
        </div>

        {/* Legal Disclaimer Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-caption text-[var(--ink-muted)] text-xs">
          <p>
            © {new Date().getFullYear()} GDG on Campus — Central University of Jammu, Rahya Suchani, Jammu, India.
          </p>
          <p className="text-center sm:text-right max-w-[560px]">
            GDG on Campus CUJ is an independent student community supported by Google Developer Groups. Google logos and wordmarks are trademarks of Google LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
