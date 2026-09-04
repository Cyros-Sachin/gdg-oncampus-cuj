"use client";

import React, { useState } from "react";
import { CHAPTER_JOIN_URL } from "@/content/links";
import { CheckCircle2, Send, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Faq } from "./Faq";

export function JoinSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    year: "1st Year",
    branch: "Computer Science & Engineering",
    interest: "Web Development",
    message: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const validateField = (name: string, value: string) => {
    if (name === "name" && !value.trim()) return "Full name is required";
    if (name === "email") {
      if (!value.trim()) return "Email address is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email address";
    }
    if (name === "message" && !value.trim()) return "Please write a short message";
    return "";
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = validateField(field, formData[field as keyof typeof formData]);
    setErrors((prev) => ({ ...prev, [field]: err }));
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const err = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: err }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nameErr = validateField("name", formData.name);
    const emailErr = validateField("email", formData.email);
    const messageErr = validateField("message", formData.message);

    setTouched({ name: true, email: true, message: true });
    setErrors({ name: nameErr, email: emailErr, message: messageErr });

    if (nameErr || emailErr || messageErr) return;

    setSending(true);
    setSendError(null);

    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (data?.fieldErrors && typeof data.fieldErrors === "object") {
          setErrors((prev) => ({ ...prev, ...data.fieldErrors }));
        }
        setSendError(data?.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
      try {
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
      } catch {
        // Fallback if canvas-confetti is suppressed
      }
    } catch {
      setSendError("Network error — please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="join" className="w-full py-20 bg-[var(--surface)] border-t border-[var(--hairline)]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Pitch & Form Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-[var(--blue)]" />
                <span className="text-xs font-semibold text-[var(--blue)] uppercase tracking-wider">
                  Member Recruitment
                </span>
              </div>

              <h2 className="font-h2 text-[var(--ink)] mb-4">
                Join GDG on Campus CUJ
              </h2>

              <p className="font-body-lg text-[var(--ink-muted)] mb-8 leading-relaxed">
                Send us a message using the form and we&apos;ll get back to you. What we ask of a
                member: show up to jams, contribute code, and share what you learn.
              </p>

              <div className="p-6 rounded-2xl bg-[var(--canvas)] border border-[var(--hairline)] flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[var(--blue)] shrink-0 mt-1" />
                  <div className="text-sm text-[var(--ink-muted)]">
                    <strong className="text-[var(--ink)]">Hands-on Workshops:</strong> Direct access to study jams, GCP credits, and peer mentorship.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[var(--blue)] shrink-0 mt-1" />
                  <div className="text-sm text-[var(--ink-muted)]">
                    <strong className="text-[var(--ink)]">Portfolio Builds:</strong> Ship real projects with credit on chapter repositories.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[var(--blue)] shrink-0 mt-1" />
                  <div className="text-sm text-[var(--ink-muted)]">
                    <strong className="text-[var(--ink)]">Community & Network:</strong> Connect with Google Developer Groups and student leads across India.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Message Form Panel */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-[28px] bg-[var(--canvas)] border border-[var(--hairline)] shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="join-name" className="text-xs font-semibold text-[var(--ink)] uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      id="join-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onBlur={() => handleBlur("name")}
                      placeholder="e.g. Shubham Kumar"
                      className={`h-12 px-4 rounded-xl bg-[var(--surface)] border text-sm text-[var(--ink)] transition-colors focus:ring-2 focus:ring-[var(--blue)] ${
                        errors.name && touched.name ? "border-[var(--red)]" : "border-[var(--hairline)]"
                      }`}
                    />
                    {errors.name && touched.name && (
                      <span className="text-xs text-[var(--red)] font-medium">{errors.name}</span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="join-email" className="text-xs font-semibold text-[var(--ink)] uppercase tracking-wider">
                      Campus Email *
                    </label>
                    <input
                      id="join-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      placeholder="name@cuj.ac.in"
                      className={`h-12 px-4 rounded-xl bg-[var(--surface)] border text-sm text-[var(--ink)] transition-colors focus:ring-2 focus:ring-[var(--blue)] ${
                        errors.email && touched.email ? "border-[var(--red)]" : "border-[var(--hairline)]"
                      }`}
                    />
                    {errors.email && touched.email && (
                      <span className="text-xs text-[var(--red)] font-medium">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Year Select */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="join-year" className="text-xs font-semibold text-[var(--ink)] uppercase tracking-wider">
                      Academic Year
                    </label>
                    <select
                      id="join-year"
                      value={formData.year}
                      onChange={(e) => handleChange("year", e.target.value)}
                      className="h-12 px-3 rounded-xl bg-[var(--surface)] border border-[var(--hairline)] text-sm text-[var(--ink)]"
                    >
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                    </select>
                  </div>

                  {/* Branch Input / Select */}
                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <label htmlFor="join-branch" className="text-xs font-semibold text-[var(--ink)] uppercase tracking-wider">
                      Branch / Department
                    </label>
                    <select
                      id="join-branch"
                      value={formData.branch}
                      onChange={(e) => handleChange("branch", e.target.value)}
                      className="h-12 px-3 rounded-xl bg-[var(--surface)] border border-[var(--hairline)] text-sm text-[var(--ink)]"
                    >
                      <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                      <option value="Electrical Engineering">Electronics and Communication Engineering</option>
                      <option value="Other Department">Other Department</option>
                    </select>
                  </div>
                </div>

                {/* Primary Interest Area */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="join-interest" className="text-xs font-semibold text-[var(--ink)] uppercase tracking-wider">
                    Primary Interest Area
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["Web Development", "AI & ML", "Android", "Cloud & DevOps"].map((domain) => (
                      <button
                        key={domain}
                        type="button"
                        onClick={() => handleChange("interest", domain)}
                        className={`h-11 px-3 rounded-xl text-xs font-medium border transition-all ${
                          formData.interest === domain
                            ? "bg-[var(--blue)] text-white border-[var(--blue)] shadow-xs"
                            : "bg-[var(--surface)] text-[var(--ink-muted)] border-[var(--hairline)] hover:border-[var(--ink)]"
                        }`}
                      >
                        {domain}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="join-message" className="text-xs font-semibold text-[var(--ink)] uppercase tracking-wider">
                    Your message *
                  </label>
                  <textarea
                    id="join-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                    placeholder="Tell us why you want to join, what you'd like to build this semester, or ask us anything..."
                    className={`p-4 rounded-xl bg-[var(--surface)] border text-sm text-[var(--ink)] transition-colors focus:ring-2 focus:ring-[var(--blue)] resize-none ${
                      errors.message && touched.message ? "border-[var(--red)]" : "border-[var(--hairline)]"
                    }`}
                  />
                  {errors.message && touched.message && (
                    <span className="text-xs text-[var(--red)] font-medium">{errors.message}</span>
                  )}
                </div>

                {sendError && (
                  <p className="text-sm text-[var(--red)] font-medium -mt-2">{sendError}</p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full h-13 rounded-2xl bg-[var(--blue)] text-white font-medium text-base shadow-sm hover:scale-[1.01] active:scale-[0.99] transition-transform inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span>{sending ? "Sending…" : "Send Message"}</span>
                  {!sending && <Send size={16} />}
                </button>

                <a
                  href={CHAPTER_JOIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-[var(--ink-muted)] hover:text-[var(--blue)] transition-colors"
                >
                  <span>Prefer the community platform? Join the chapter there</span>
                  <ArrowUpRight size={14} />
                </a>
              </form>
            ) : (
              /* Spring Success State */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", damping: 20 }}
                className="py-12 px-6 text-center flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-[rgba(66,133,244,0.1)] text-[var(--blue)] flex items-center justify-center mb-6">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-h3 text-[var(--ink)] mb-3">Message sent!</h3>
                <p className="font-body text-[var(--ink-muted)] max-w-[440px] mb-8 leading-relaxed">
                  Thanks for reaching out, <strong className="text-[var(--ink)]">{formData.name}</strong>. Your message is on its way — we&apos;ll reply to <span className="font-code text-[var(--ink)]">{formData.email}</span> soon.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData((prev) => ({ ...prev, message: "" }));
                    setTouched({});
                    setErrors({});
                  }}
                  className="px-6 py-2.5 rounded-full border border-[var(--hairline)] text-sm font-medium text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </div>
        </div>

        {/* FAQ Accordions Section */}
        <Faq />
      </div>
    </section>
  );
}
