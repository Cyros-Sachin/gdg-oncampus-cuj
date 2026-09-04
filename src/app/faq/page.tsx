import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "FAQ — GDG on Campus CUJ",
  description:
    "Answers to common questions about joining GDG on Campus at Central University of Jammu.",
};

export default function FaqPage() {
  return (
    <PageShell>
      <section className="w-full py-20 bg-[var(--surface)] border-t border-[var(--hairline)]">
        <div className="max-w-[860px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-3 h-3 rounded-full bg-[var(--blue)]" />
            <span className="text-xs font-semibold text-[var(--blue)] uppercase tracking-wider">
              Prospective Members
            </span>
          </div>
          <h1 className="font-h2 text-[var(--ink)] mb-4">Questions & Answers</h1>
          <p className="font-body-lg text-[var(--ink-muted)] mb-4 leading-relaxed">
            Everything first-year students and prospective members ask before joining.
          </p>

          <Faq className="mt-8" />

          <div className="mt-12 pt-8 border-t border-[var(--hairline)]">
            <Link
              href="/#join"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--blue)] hover:underline"
            >
              <span>Still have a question? Send us a message</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
