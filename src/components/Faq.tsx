"use client";

import React, { useState } from "react";
import { JOIN_FAQS } from "@/content/faq";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Faq({
  className = "mt-20 pt-16 border-t border-[var(--hairline)]",
}: {
  className?: string;
}) {
  const [expandedFaq, setExpandedFaq] = useState<string | null>("prior-experience");

  return (
    <div id="faq" className={className}>
      <div className="flex items-center gap-3 mb-3">
        <HelpCircle size={18} className="text-[var(--blue)]" />
        <h3 className="font-h3 text-[var(--ink)]">Frequently Asked Questions</h3>
      </div>
      <p className="font-body text-[var(--ink-muted)] mb-8">
        Answers to common questions from first-year students and prospective members.
      </p>

      <div className="flex flex-col divide-y divide-[var(--hairline)] border-y border-[var(--hairline)]">
        {JOIN_FAQS.map((faq) => {
          const isOpen = expandedFaq === faq.id;
          return (
            <div key={faq.id} className="py-5">
              <button
                onClick={() => setExpandedFaq(isOpen ? null : faq.id)}
                className="w-full text-left flex items-center justify-between gap-4 focus-visible:ring-2 focus-visible:ring-[var(--blue)] rounded-lg p-1"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-lg text-[var(--ink)]">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-[var(--ink-muted)] shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                    className="overflow-hidden mt-3"
                  >
                    <p className="font-body text-[var(--ink-muted)] leading-relaxed pt-1 pb-2">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
