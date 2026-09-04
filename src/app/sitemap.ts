import { MetadataRoute } from "next";
import { PAST_EVENTS, NEXT_EVENT } from "@/content/events";
import { NAV_LINKS } from "@/content/links";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gdgoc-cuj.vercel.app";

  const navUrls = NAV_LINKS.map((link) => ({
    url: `${baseUrl}${link.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const eventUrls = [NEXT_EVENT, ...PAST_EVENTS].map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...navUrls,
    ...eventUrls,
  ];
}
