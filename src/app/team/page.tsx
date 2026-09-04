import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Team } from "@/components/Team";

export const metadata: Metadata = {
  title: "Team — GDG on Campus CUJ",
  description:
    "Faculty mentors, student organizers, and technical leads of GDG on Campus at Central University of Jammu.",
};

export default function TeamPage() {
  return (
    <PageShell>
      <Team />
    </PageShell>
  );
}
