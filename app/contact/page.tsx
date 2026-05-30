"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/NavBar";
import Footer from "@/components/landing/Footer";

// ─── Types ──────────────────────────────────────────────────────────────────

type Status = "idle" | "loading" | "success" | "error";

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string; // honeypot — hidden from real users
}

type FieldErrors = Partial<
  Record<Exclude<keyof FormFields, "website">, string>
>;

// ─── Constants ───────────────────────────────────────────────────────────────

const SUBJECTS = ["General", "Product Feedback", "Collaboration", "Press & Media"];

const OPEN_TO = [
  {
    label: "Product feedback",
    desc: "Tell us what's working and what isn't.",
  },
  {
    label: "Collaboration",
    desc: "Build something useful together.",
  },
  {
    label: "Partnerships",
    desc: "Align on shared goals.",
  },
  {
    label: "Press & media",
    desc: "Write about what we're building.",
  },
];

// ─── Animation Variants ──────────────────────────────────────────────────────

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease },
  },
};

// ─── Shared Input Classes ────────────────────────────────────────────────────

function inputClass(hasError: boolean, extra = "") {
  return [
    "w-full px-4 py-3.5 bg-white border text-[15px] text-deep-graphite",
    "placeholder:text-deep-graphite/25 outline-none transition-colors duration-200",
    "rounded-none disabled:opacity-50 disabled:cursor-not-allowed font-bentonsans",
    hasError
      ? "border-red-400 focus:border-red-500"
      : "border-deep-graphite/15 focus:border-deep-graphite",
    extra,
  ]
    .filter(Boolean)
    .join(" ");
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [form, setForm] = useState<FormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  // ── Validation ─────────────────────────────────────────────────────────────

  function validate(): boolean {
    const errors: FieldErrors = {};

    if (!form.name.trim()) {
      errors.name = "Name is required.";
    } else if (form.name.trim().length > 200) {
      errors.name = "Name is too long.";
    }

    if (!form.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!form.subject) {
      errors.subject = "Please select a subject.";
    }

    if (!form.message.trim()) {
      errors.message = "Message is required.";
    } else if (form.message.length > 5000) {
      errors.message = "Message must be under 5000 characters.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  // ── Handlers ───────────────────────────────────────────────────────────────

  function handleChange(
    field: keyof FormFields,
    value: string
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
    // Clear field error as the user types
    if (field !== "website" && fieldErrors[field as keyof FieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    // Clear global error when user re-engages
    if (status === "error") setStatus("idle");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  function reset() {
    setForm({ name: "", email: "", subject: "", message: "", website: "" });
    setStatus("idle");
    setErrorMessage("");
    setFieldErrors({});
  }

  const isLoading = status === "loading";

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-canvas-white text-deep-graphite flex flex-col selection:bg-deep-graphite selection:text-canvas-white">
      <Navbar />

      <main className="flex-grow pt-24 md:pt-30">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="w-full max-w-[1440px] mx-auto px-6 pt-12 pb-12 md:pt-16 md:pb-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="mb-7"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-deep-graphite/20 bg-white">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="6" cy="6" r="2" fill="currentColor" />
              </svg>
              <span className="text-[12px] font-semibold tracking-widest uppercase text-deep-graphite">
                CONTACT
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="text-[52px] sm:text-[70px] md:text-[88px] lg:text-[108px] font-aftenscreen font-black leading-[0.9] tracking-tighter text-deep-graphite"
          >
            Let&rsquo;s talk.
          </motion.h1>

        </section>

        {/* ── Divider ──────────────────────────────────────────────────────── */}
        <div className="w-full max-w-[1440px] mx-auto px-6">
          <div className="border-t border-deep-graphite/10 w-full" />
        </div>

        {/* ── Main Grid ────────────────────────────────────────────────────── */}
        <section className="w-full max-w-[1440px] mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* ── Left: Contact Info ────────────────────────────────────── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={slideLeft}
              className="lg:col-span-5 flex flex-col gap-10 order-last lg:order-first"
            >

              {/* "Let's Build Something Useful" */}
              <div className="flex flex-col gap-4">
                <h2 className="text-[26px] md:text-[30px] font-aftenscreen font-bold leading-tight tracking-tight text-deep-graphite">
                  Let&rsquo;s Build<br />Something Useful.
                </h2>
                <p className="text-[15px] md:text-[16px] text-deep-graphite/65 leading-relaxed">
                  Whether it&rsquo;s product feedback, collaboration,
                  partnerships, or simply saying hello — I&rsquo;d love to hear
                  from you.
                </p>
              </div>

              <div className="w-full h-px bg-deep-graphite/10" />

              {/* Direct email */}
              <div className="flex flex-col gap-2.5">
                <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-deep-graphite/40">
                  Direct email
                </p>
                <Link
                  href="mailto:hello@bepel.in"
                  className="text-[16px] md:text-[17px] font-medium text-deep-graphite border-b border-deep-graphite/20 pb-0.5 w-fit hover:border-deep-graphite transition-colors duration-200"
                >
                  hello@bepel.in
                </Link>
              </div>

              <div className="w-full h-px bg-deep-graphite/10" />

              {/* Open to */}
              <div className="flex flex-col gap-5">
                <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-deep-graphite/40">
                  Open to
                </p>
                <div className="flex flex-col gap-0">
                  {OPEN_TO.map((item, i) => (
                    <motion.div
                      key={item.label}
                      className="flex items-start gap-4 py-3 cursor-default"
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                    >
                      <motion.span
                        className="text-[11px] font-mono tabular-nums w-5 shrink-0 mt-0.5 text-deep-graphite"
                        variants={{
                          rest: { opacity: 0.3 },
                          hover: { opacity: 1 },
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </motion.span>
                      <motion.div
                        variants={{ rest: { x: 0 }, hover: { x: 8 } }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 28,
                        }}
                      >
                        <p className="text-[14px] md:text-[15px] font-semibold text-deep-graphite leading-snug">
                          {item.label}
                        </p>
                        <p className="text-[13px] text-deep-graphite/50 mt-0.5">
                          {item.desc}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>

            {/* ── Right: Form ───────────────────────────────────────────── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={slideRight}
              className="lg:col-span-7 order-first lg:order-last"
            >
              <AnimatePresence mode="wait">

                {/* ── Success State ─────────────────────────────────────── */}
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.5, ease }}
                    className="flex flex-col items-start gap-6 py-12 md:py-16"
                  >
                    {/* Check icon */}
                    <div className="w-12 h-12 rounded-full bg-deep-graphite flex items-center justify-center shrink-0">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 12L10 17L19 8"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div>
                      <h3 className="text-[28px] md:text-[36px] font-aftenscreen font-bold tracking-tight text-deep-graphite leading-tight">
                        Message received.
                      </h3>
                      <p className="text-[15px] md:text-[16px] text-deep-graphite/60 mt-3 leading-relaxed max-w-sm">
                        Thanks for reaching out. I&rsquo;ll get back to you as
                        soon as possible.
                      </p>
                    </div>

                    <button
                      onClick={reset}
                      className="text-[13px] font-mono tracking-wider uppercase text-deep-graphite/45 hover:text-deep-graphite border-b border-transparent hover:border-deep-graphite/30 transition-all duration-200 pb-0.5"
                    >
                      Send another message →
                    </button>
                  </motion.div>

                ) : (

                  /* ── Form ─────────────────────────────────────────────── */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Contact form"
                    className="flex flex-col gap-7"
                  >

                    {/* Honeypot — visually hidden, never filled by real users */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        left: "-9999px",
                        width: "1px",
                        height: "1px",
                        overflow: "hidden",
                      }}
                    >
                      <label htmlFor="hp-website">Website</label>
                      <input
                        id="hp-website"
                        type="text"
                        name="website"
                        value={form.website}
                        onChange={(e) => handleChange("website", e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="contact-name"
                          className="text-[11px] font-mono tracking-[0.18em] uppercase text-deep-graphite/50"
                        >
                          Name <span aria-hidden="true" className="text-deep-graphite/40">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Your name"
                          autoComplete="name"
                          aria-required="true"
                          aria-invalid={!!fieldErrors.name}
                          aria-describedby={
                            fieldErrors.name ? "error-name" : undefined
                          }
                          disabled={isLoading}
                          className={inputClass(!!fieldErrors.name)}
                        />
                        {fieldErrors.name && (
                          <p
                            id="error-name"
                            role="alert"
                            className="text-[12px] text-red-500 font-medium"
                          >
                            {fieldErrors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="contact-email"
                          className="text-[11px] font-mono tracking-[0.18em] uppercase text-deep-graphite/50"
                        >
                          Email <span aria-hidden="true" className="text-deep-graphite/40">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={form.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="your@email.com"
                          autoComplete="email"
                          aria-required="true"
                          aria-invalid={!!fieldErrors.email}
                          aria-describedby={
                            fieldErrors.email ? "error-email" : undefined
                          }
                          disabled={isLoading}
                          className={inputClass(!!fieldErrors.email)}
                        />
                        {fieldErrors.email && (
                          <p
                            id="error-email"
                            role="alert"
                            className="text-[12px] text-red-500 font-medium"
                          >
                            {fieldErrors.email}
                          </p>
                        )}
                      </div>

                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-subject"
                        className="text-[11px] font-mono tracking-[0.18em] uppercase text-deep-graphite/50"
                      >
                        Subject <span aria-hidden="true" className="text-deep-graphite/40">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="contact-subject"
                          value={form.subject}
                          onChange={(e) =>
                            handleChange("subject", e.target.value)
                          }
                          aria-required="true"
                          aria-invalid={!!fieldErrors.subject}
                          aria-describedby={
                            fieldErrors.subject ? "error-subject" : undefined
                          }
                          disabled={isLoading}
                          className={inputClass(
                            !!fieldErrors.subject,
                            `appearance-none cursor-pointer pr-10 ${form.subject === ""
                              ? "text-deep-graphite/25"
                              : "text-deep-graphite"
                            }`
                          )}
                        >
                          <option value="" disabled>
                            Select a subject
                          </option>
                          {SUBJECTS.map((s) => (
                            <option
                              key={s}
                              value={s}
                              className="text-deep-graphite"
                            >
                              {s}
                            </option>
                          ))}
                        </select>

                        {/* Custom chevron */}
                        <div
                          className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-deep-graphite/40"
                          aria-hidden="true"
                        >
                          <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                            <path
                              d="M1 1L7 7L13 1"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      {fieldErrors.subject && (
                        <p
                          id="error-subject"
                          role="alert"
                          className="text-[12px] text-red-500 font-medium"
                        >
                          {fieldErrors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="contact-message"
                          className="text-[11px] font-mono tracking-[0.18em] uppercase text-deep-graphite/50"
                        >
                          Message <span aria-hidden="true" className="text-deep-graphite/40">*</span>
                        </label>
                        <span
                          className={`text-[11px] font-mono tabular-nums ${form.message.length > 4500
                              ? "text-red-400"
                              : "text-deep-graphite/25"
                            }`}
                          aria-live="polite"
                          aria-label={`${form.message.length} of 5000 characters`}
                        >
                          {form.message.length}/5000
                        </span>
                      </div>
                      <textarea
                        id="contact-message"
                        value={form.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        placeholder="What's on your mind?"
                        rows={6}
                        aria-required="true"
                        aria-invalid={!!fieldErrors.message}
                        aria-describedby={
                          fieldErrors.message ? "error-message" : undefined
                        }
                        disabled={isLoading}
                        className={inputClass(!!fieldErrors.message, "resize-none")}
                      />
                      {fieldErrors.message && (
                        <p
                          id="error-message"
                          role="alert"
                          className="text-[12px] text-red-500 font-medium"
                        >
                          {fieldErrors.message}
                        </p>
                      )}
                    </div>

                    {/* Error banner */}
                    <AnimatePresence>
                      {status === "error" && errorMessage && (
                        <motion.div
                          key="error-banner"
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.25, ease }}
                          role="alert"
                          aria-live="assertive"
                          className="flex items-start gap-3 px-4 py-3 border border-red-200 bg-red-50"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                            className="shrink-0 mt-0.5 text-red-500"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M12 8v4M12 16h.01"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                          <p className="text-[13px] text-red-600 font-medium leading-relaxed">
                            {errorMessage}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit row */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-1">
                      <button
                        type="submit"
                        disabled={isLoading}
                        aria-busy={isLoading}
                        className="bg-deep-graphite text-canvas-white px-8 py-4 text-[12px] hover:cursor-pointer font-mono font-bold tracking-[0.2em] uppercase hover:bg-deep-graphite/85 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 w-full sm:w-auto"
                      >
                        {isLoading ? (
                          <>
                            {/* Spinner */}
                            <svg
                              className="animate-spin w-4 h-4 shrink-0"
                              viewBox="0 0 24 24"
                              fill="none"
                              aria-hidden="true"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="opacity-20"
                              />
                              <path
                                d="M22 12a10 10 0 00-10-10"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                className="opacity-80"
                              />
                            </svg>
                            Sending…
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </button>

                      <p className="text-[11px] font-mono text-deep-graphite/30 tracking-wide">
                        I&rsquo;ll reply within 48 hours.
                      </p>
                    </div>

                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
