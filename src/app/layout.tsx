import type { Metadata } from "next";
import { Roboto_Flex, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-code-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GDG on Campus — Central University of Jammu",
  description: "Official chapter website of GDG on Campus at Central University of Jammu, Rahya Suchani, Jammu. Building open source projects, hosting developer workshops, and fostering tech talent.",
  keywords: [
    "GDG on Campus",
    "GDG CUJ",
    "Central University of Jammu",
    "Jammu",
    "Google Developer Groups",
    "Developer Student Club",
    "CUJ Tech",
  ],
  authors: [{ name: "GDG on Campus CUJ Team" }],
  openGraph: {
    title: "GDG on Campus — Central University of Jammu",
    description: "We meet on campus to build things with Google's tools, and to teach each other how.",
    siteName: "GDG on Campus CUJ",
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GDG on Campus — Central University of Jammu, Rahya Suchani, Jammu",
  "alternateName": ["GDGoC CUJ", "GDG on Campus CUJ"],
  "url": "https://gdgoc-cuj.vercel.app",
  "description": "Official student developer community supported by Google Developer Groups at Central University of Jammu.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rahya Suchani",
    "addressRegion": "Jammu and Kashmir",
    "addressCountry": "India"
  },
  "sameAs": [
    "https://github.com/gdgoc-cuj",
    "https://linkedin.com/company/gdgoc-cuj",
    "https://twitter.com/gdgoc_cuj"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${robotoFlex.variable} ${spaceMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <SmoothScroll>{children}</SmoothScroll>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
