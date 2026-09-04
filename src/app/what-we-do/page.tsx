import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { WhatWeDo } from "@/components/WhatWeDo";

export const metadata: Metadata = {
  title: "What We Do — GDG on Campus CUJ",
  description:
    "The domains GDG on Campus at Central University of Jammu works in: web, AI & ML, Android, and cloud.",
};

export default function WhatWeDoPage() {
  return (
    <PageShell>
      <WhatWeDo />
    </PageShell>
  );
}
