"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/NavBar";
import Footer from "@/components/landing/Footer";

// ─── Animation constants ──────────────────────────────────────────────────────

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

const slideRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const childFade = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROCESS = [
  { n: "01", label: "Idea", desc: "Start with a real problem worth solving." },
  { n: "02", label: "Build", desc: "Move fast. Ship a working version early." },
  { n: "03", label: "Launch", desc: "Put it in front of real people." },
  { n: "04", label: "Learn", desc: "Watch how it gets used. Listen." },
  { n: "05", label: "Improve", desc: "Keep making it better. Indefinitely." },
];

const CATEGORIES = [
  { n: "01", label: "SaaS Products", desc: "Software with recurring value, designed to last." },
  { n: "02", label: "AI Tools", desc: "Practical applications of AI for everyday problems." },
  { n: "03", label: "Web Applications", desc: "Fast, focused apps built for real workflows." },
  { n: "04", label: "Developer Utilities", desc: "Tools that remove friction from the build process." },
  { n: "05", label: "Experiments", desc: "Smaller ideas worth exploring and shipping." },
];

const PRODUCTS = [
  { name: "Stroky", status: "LIVE", category: "Typing Platform", href: "/products/stroky" },
  { name: "AI Resume Builder", status: "SOON", category: "AI Tool", href: null },
  { name: "Invoice Generator", status: "SOON", category: "Utility", href: null },
];

const PRINCIPLES = [
  "Build useful things.",
  "Launch them.",
  "Improve them.",
  "Repeat.",
];

// ─── Divider ──────────────────────────────────────────────────────────────────

function Divider() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-6">
      <div className="border-t border-deep-graphite/10 w-full" />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-canvas-white text-deep-graphite flex flex-col selection:bg-deep-graphite selection:text-canvas-white">
      <Navbar />

      <main className="flex-grow pt-24 md:pt-30">

        {/* ══════════════════════════════════════════════════════════════════
            1 — HERO
        ══════════════════════════════════════════════════════════════════ */}
        <section className="w-full max-w-[1440px] mx-auto px-6 pt-12 pb-20 md:pt-16 md:pb-28">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-deep-graphite/20 bg-white">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="6" cy="6" r="2" fill="currentColor" />
              </svg>
              <span className="text-[12px] font-semibold tracking-widest uppercase text-deep-graphite">
                ABOUT BEPEL
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.06 }}
            className="text-[38px] sm:text-[52px] md:text-[68px] lg:text-[84px] xl:text-[96px] font-aftenscreen font-black leading-[0.92] tracking-tighter text-deep-graphite max-w-5xl"
          >
            Building Useful Software,<br />
            One Product at a Time.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.16 }}
            className="mt-8 md:mt-10 text-[16px] md:text-[18px] text-deep-graphite/60 leading-relaxed max-w-2xl"
          >
            Bepel is an independent product studio focused on building software products,
            AI tools, and digital experiences that solve real-world problems.
          </motion.p>

        </section>

        <Divider />

        {/* ══════════════════════════════════════════════════════════════════
            2 — WHY BEPEL EXISTS
        ══════════════════════════════════════════════════════════════════ */}
        <section className="w-full max-w-[1440px] mx-auto px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">

            {/* Left */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideLeft}
              className="md:col-span-4"
            >
              <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-deep-graphite/40 mb-6">
                WHY IT EXISTS
              </p>
              <h2 className="text-[28px] md:text-[34px] font-aftenscreen font-bold leading-[1.05] tracking-tight text-deep-graphite">
                Great software doesn&rsquo;t require a large team.
              </h2>
            </motion.div>

            {/* Right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideRight}
              className="md:col-span-8 flex flex-col gap-6"
            >
              <p className="text-[17px] md:text-[18px] text-deep-graphite font-medium leading-relaxed">
                The best products often start with a single person, a clear problem, and enough
                discipline to keep improving.
              </p>
              <p className="text-[15px] md:text-[16px] text-deep-graphite/60 leading-relaxed">
                Useful products can start with a simple idea, evolve through real feedback, and grow
                into something meaningful over time. Large teams, big budgets, and complex processes
                are not prerequisites for great software.
              </p>
              <p className="text-[15px] md:text-[16px] text-deep-graphite/60 leading-relaxed">
                That belief is what drives Bepel. Build things that are genuinely useful.
                Keep them simple. Improve them continuously.
              </p>
            </motion.div>

          </div>
        </section>

        <Divider />

        {/* ══════════════════════════════════════════════════════════════════
            3 — HOW WE BUILD
        ══════════════════════════════════════════════════════════════════ */}
        <section className="w-full max-w-[1440px] mx-auto px-6 py-20 md:py-28">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideUp}
            className="mb-14 md:mb-16"
          >
            <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-deep-graphite/40 mb-4">
              HOW WE BUILD
            </p>
            <p className="text-[16px] md:text-[18px] text-deep-graphite/60 leading-relaxed max-w-xl">
              Each product is launched early, improved continuously, and shaped by real usage.
            </p>
          </motion.div>

          {/* Process grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-5 gap-0"
          >
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.n}
                variants={childFade}
                className={[
                  "flex flex-col gap-5 py-8 sm:py-10",
                  "border-t-2 border-deep-graphite/15",
                  // Desktop: vertical separator between columns (not before first)
                  i > 0 ? "sm:border-l sm:border-l-deep-graphite/10 sm:pl-7" : "sm:pr-7",
                ].join(" ")}
              >
                <span className="text-[11px] font-mono tabular-nums text-deep-graphite/25">
                  {step.n}
                </span>
                <h3 className="text-[22px] md:text-[26px] font-aftenscreen font-bold tracking-tight text-deep-graphite leading-none">
                  {step.label}
                </h3>
                <p className="text-[13px] md:text-[14px] text-deep-graphite/50 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </section>

        <Divider />

        {/* ══════════════════════════════════════════════════════════════════
            4 — WHAT WE BUILD
        ══════════════════════════════════════════════════════════════════ */}
        <section className="w-full max-w-[1440px] mx-auto px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">

            {/* Left — sticky on desktop */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideLeft}
              className="md:col-span-4 md:sticky md:top-32"
            >
              <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-deep-graphite/40 mb-6">
                WHAT WE BUILD
              </p>
              <h2 className="text-[28px] md:text-[34px] font-aftenscreen font-bold leading-[1.05] tracking-tight text-deep-graphite mb-5">
                Different ideas.<br />Same focus.
              </h2>
              <p className="text-[14px] md:text-[15px] text-deep-graphite/55 leading-relaxed">
                Bepel explores different product categories, but every idea is tested against
                the same two questions: is it useful, and is it simple?
              </p>
            </motion.div>

            {/* Right — category list */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="md:col-span-8"
            >
              {CATEGORIES.map((item, i) => (
                <motion.div
                  key={item.n}
                  variants={childFade}
                  className="group flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-8 py-6 border-t border-deep-graphite/10 cursor-default"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <motion.span
                    className="text-[11px] font-mono tabular-nums text-deep-graphite shrink-0"
                    variants={{ rest: { opacity: 0.2 }, hover: { opacity: 1 } }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.n}
                  </motion.span>

                  <motion.h3
                    className="text-[19px] md:text-[21px] font-aftenscreen font-bold tracking-tight text-deep-graphite shrink-0"
                    variants={{ rest: { x: 0 }, hover: { x: 6 } }}
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  >
                    {item.label}
                  </motion.h3>

                  <p className="text-[14px] md:text-[15px] text-deep-graphite/50 leading-relaxed sm:pt-0.5">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
              <div className="border-t border-deep-graphite/10" />
            </motion.div>

          </div>
        </section>

        <Divider />

        {/* ══════════════════════════════════════════════════════════════════
            5 — THE ECOSYSTEM
        ══════════════════════════════════════════════════════════════════ */}
        <section className="w-full max-w-[1440px] mx-auto px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* Left */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideLeft}
              className="lg:col-span-5"
            >
              <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-deep-graphite/40 mb-6">
                THE ECOSYSTEM
              </p>
              <h2 className="text-[40px] sm:text-[48px] md:text-[56px] font-aftenscreen font-black leading-[0.9] tracking-tighter text-deep-graphite mb-6">
                One Brand.<br />Many Products.
              </h2>
              <p className="text-[15px] md:text-[16px] text-deep-graphite/60 leading-relaxed">
                Every product built under Bepel shares the same foundation — useful,
                minimal, and built to improve over time. They operate independently
                but grow together.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 mt-8 pb-0.5 border-b border-deep-graphite/25 text-[13px] font-mono font-bold tracking-wider uppercase text-deep-graphite hover:border-deep-graphite transition-colors duration-200"
              >
                View all products <span>→</span>
              </Link>
            </motion.div>

            {/* Right — products */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="lg:col-span-7"
            >
              {PRODUCTS.map((product, i) => (
                <motion.div
                  key={product.name}
                  variants={childFade}
                  className={`flex items-center justify-between gap-6 py-6 border-t border-deep-graphite/10 ${i === PRODUCTS.length - 1 ? "border-b" : ""
                    }`}
                >
                  <div className="flex items-center gap-5">
                    <span
                      className={`text-[10px] font-mono font-bold tracking-widest leading-none px-2 py-0.5 shrink-0 ${product.status === "LIVE"
                          ? "bg-red-600 text-white"
                          : "bg-deep-graphite/8 text-deep-graphite/45"
                        }`}
                    >
                      {product.status}
                    </span>

                    {product.href ? (
                      <Link
                        href={product.href}
                        className="text-[19px] md:text-[21px] font-aftenscreen font-bold tracking-tight text-deep-graphite hover:text-deep-graphite/60 transition-colors duration-200"
                      >
                        {product.name}
                      </Link>
                    ) : (
                      <span className="text-[19px] md:text-[21px] font-aftenscreen font-bold tracking-tight text-deep-graphite/40">
                        {product.name}
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] font-mono tracking-widest uppercase text-deep-graphite/30 shrink-0">
                    {product.category}
                  </span>
                </motion.div>
              ))}

              <motion.p
                variants={childFade}
                className="mt-6 text-[12px] font-mono text-deep-graphite/30 tracking-wide"
              >
                More products and experiments in the pipeline.
              </motion.p>
            </motion.div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            6 — LOOKING AHEAD
        ══════════════════════════════════════════════════════════════════ */}
        <section className="w-full max-w-[1440px] mx-auto px-6 pb-20 md:pb-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={slideUp}
            className="bg-deep-graphite rounded-[32px] px-8 md:px-16 py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
          >
            {/* Left: label + description */}
            <div className="flex flex-col gap-5">
              <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-canvas-white/35">
                LOOKING AHEAD
              </p>
              <p className="text-[15px] md:text-[16px] text-canvas-white/55 leading-relaxed">
                The plan is simple. Keep building useful software. Every product launched
                teaches something that makes the next one better.
              </p>
              <p className="text-[15px] md:text-[16px] text-canvas-white/55 leading-relaxed">
                The ecosystem grows with every launch, every iteration, and every piece
                of feedback that shapes what comes next.
              </p>
            </div>

            {/* Right: principles */}
            <div className="flex flex-col gap-1">
              {PRINCIPLES.map((item, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease, delay: i * 0.09 }}
                  className="text-[30px] sm:text-[36px] md:text-[40px] font-aftenscreen font-black tracking-tight text-canvas-white leading-[1.1]"
                >
                  {item}
                </motion.p>
              ))}
            </div>

          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
