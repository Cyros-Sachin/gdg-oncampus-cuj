import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { BuildShowcase } from "@/components/BuildShowcase";

export const metadata: Metadata = {
  title: "Build — GDG on Campus CUJ",
  description:
    "Projects shipped by GDG on Campus members at Central University of Jammu.",
};

export default function BuildPage() {
  return (
    <PageShell>
      <BuildShowcase full />
    </PageShell>
  );
}
