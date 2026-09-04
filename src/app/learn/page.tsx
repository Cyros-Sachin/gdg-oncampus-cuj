import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Learn } from "@/components/Learn";

export const metadata: Metadata = {
  title: "Learn — GDG on Campus CUJ",
  description:
    "Study jams, roadmaps, and open learning resources from GDG on Campus at Central University of Jammu.",
};

export default function LearnPage() {
  return (
    <PageShell>
      <Learn />
    </PageShell>
  );
}
