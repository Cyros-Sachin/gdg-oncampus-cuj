import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { Events } from "@/components/Events";

export const metadata: Metadata = {
  title: "Events — GDG on Campus CUJ",
  description:
    "Upcoming and past events from GDG on Campus at Central University of Jammu — study jams, workshops, and build days.",
};

export default function EventsPage() {
  return (
    <PageShell>
      <Events />
    </PageShell>
  );
}
