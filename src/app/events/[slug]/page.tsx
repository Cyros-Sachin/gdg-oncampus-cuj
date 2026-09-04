import React from "react";
import { NEXT_EVENT, PAST_EVENTS, ChapterEvent } from "@/content/events";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArcLogoMark } from "@/components/ArcLogoMark";
import { Calendar, MapPin, Users, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getEventBySlug(slug: string): ChapterEvent | undefined {
  if (NEXT_EVENT.slug === slug) return NEXT_EVENT;
  return PAST_EVENTS.find((e) => e.slug === slug);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found" };

  return {
    title: `${event.title} — GDG on Campus CUJ`,
    description: event.outcome || event.recap,
    openGraph: {
      title: event.title,
      description: event.outcome || event.recap,
      type: "article",
    },
  };
}

export default async function EventPage({ params }: PageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.title,
    "startDate": event.dateISO,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": event.venue,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rahya Suchani",
        "addressRegion": "Jammu and Kashmir",
        "addressCountry": "India"
      }
    },
    "description": event.outcome || event.recap,
    "organizer": {
      "@type": "Organization",
      "name": "GDG on Campus — Central University of Jammu, Rahya Suchani, Jammu, India"
    }
  };

  return (
    <main className="min-h-screen bg-[var(--canvas)] text-[var(--ink)] py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />

      <div className="max-w-[800px] mx-auto px-6">
        <Link
          href="/#events"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--ink-muted)] hover:text-[var(--ink)] mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to all events</span>
        </Link>

        <div className="p-8 sm:p-12 rounded-[32px] bg-[var(--surface)] border border-[var(--hairline)] shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <ArcLogoMark size={28} />
            <span className="text-xs font-semibold text-[var(--red)] uppercase tracking-wider">
              {event.isUpcoming ? "Upcoming Session" : "Past Event Archive"}
            </span>
          </div>

          <h1 className="font-display text-[var(--ink)] mb-4">{event.title}</h1>

          <div className="flex flex-wrap gap-4 text-sm text-[var(--ink-muted)] mb-8 pb-6 border-b border-[var(--hairline)]">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[var(--red)]" />
              <span>{event.dateString}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[var(--red)]" />
              <span>{event.venue}</span>
            </div>
            {event.attendance && (
              <div className="flex items-center gap-2">
                <Users size={16} className="text-[var(--red)]" />
                <span>{event.attendance} Attendees</span>
              </div>
            )}
          </div>

          {event.photoUrl && (
            <div className="w-full h-[320px] rounded-2xl overflow-hidden mb-8 border border-[var(--hairline)]">
              <img
                src={event.photoUrl}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="space-y-6">
            <div>
              <h2 className="font-h3 text-[var(--ink)] mb-2">Key Outcome</h2>
              <p className="font-body text-[var(--ink-muted)] leading-relaxed">
                {event.outcome}
              </p>
            </div>

            {event.recap && (
              <div>
                <h2 className="font-h3 text-[var(--ink)] mb-2">Session Recap</h2>
                <p className="font-body text-[var(--ink-muted)] leading-relaxed">
                  {event.recap}
                </p>
              </div>
            )}

            <div>
              <h3 className="text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wider mb-2">
                Speaker / Facilitator
              </h3>
              <p className="font-medium text-base text-[var(--ink)]">{event.speaker}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
