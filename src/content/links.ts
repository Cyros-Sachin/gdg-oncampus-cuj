// Central place for outbound links used across the site.

/**
 * GDG on Campus chapter page on the community platform.
 * Every "Join the chapter" CTA points here.
 */
export const CHAPTER_JOIN_URL =
  "https://gdg.community.dev/gdg-on-campus-central-university-of-jammu-jammu-india/";

/**
 * Social + community links shown in the footer.
 * TODO: replace the placeholder URLs below with the chapter's real profiles.
 */
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/gdg-cuj",
  instagram: "https://www.instagram.com/gdg_cuj",
  whatsapp: "https://chat.whatsapp.com/FKkNvfNYojEHahyk8GyauN",
} as const;

/**
 * Primary navigation. Each entry has its own route under `src/app/<path>`.
 * Used by the header and the footer so the two stay in sync.
 */
export const NAV_LINKS = [
  { label: "What We Do", href: "/what-we-do" },
  { label: "Events", href: "/events" },
  { label: "Build", href: "/build" },
  { label: "Learn", href: "/learn" },
  { label: "Team", href: "/team" },
  { label: "FAQ", href: "/faq" },
] as const;
