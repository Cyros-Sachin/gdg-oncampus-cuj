import React from "react";
import { Hero } from "@/components/Hero";
import { PulseStrip } from "@/components/PulseStrip";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Events } from "@/components/Events";
import { BuildShowcase } from "@/components/BuildShowcase";
import { Learn } from "@/components/Learn";
import { Team } from "@/components/Team";
import { JoinSection } from "@/components/JoinSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--canvas)] text-[var(--ink)] overflow-x-hidden selection:bg-[rgba(66,133,244,0.2)]">
      <Hero />
      <PulseStrip />
      <WhatWeDo />
      <Events />
      <BuildShowcase />
      <Learn />
      <Team />
      <JoinSection />
    </main>
  );
}
