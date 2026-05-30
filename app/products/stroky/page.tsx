"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/NavBar";
import Footer from "@/components/landing/Footer";

// Animation variant for clean slide-ups
const slideUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const }
  }
};

// Animation variant for slide-in from left
const slideLeftVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const }
  }
};

// Animation variant for slide-in from right
const slideRightVariant = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const }
  }
};

export default function StrokyProductPage() {
  return (
    <div className="min-h-screen bg-canvas-white text-deep-graphite flex flex-col selection:bg-deep-graphite selection:text-canvas-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow pt-24 md:pt-30 flex flex-col overflow-hidden">

        {/* 1. HERO SECTION */}
        <section className="w-full max-w-[1440px] mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left: Text Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideLeftVariant}
              className="lg:col-span-5 flex flex-col items-start"
            >
              <div className="border border-deep-graphite/20 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest font-bold uppercase text-deep-graphite/60 inline-block mb-6">
                TYPING PLATFORM
              </div>
              <h1 className="text-[56px] sm:text-[72px] md:text-[88px] font-aftenscreen font-black leading-none text-deep-graphite uppercase tracking-tight">
                STROKY
              </h1>
              <p className="text-[16px] md:text-[18px] text-deep-graphite/70 font-medium leading-relaxed mt-6 max-w-md">
                Improve speed, accuracy, and focus through an immersive typing experience. Designed for those who seek technical mastery and aesthetic purity.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-8 md:mt-12 w-full sm:w-auto">
                <Link
                  href="https://stroky.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-8 py-4 text-[13px] font-mono font-bold tracking-widest uppercase hover:bg-black/85 transition-all text-center border border-black shadow-sm flex-1 sm:flex-none"
                >
                  VISIT PRODUCT
                </Link>
                <Link
                  href="#"
                  className="border border-deep-graphite/20 bg-white text-deep-graphite px-8 py-4 text-[13px] font-mono font-bold tracking-widest uppercase hover:bg-canvas-white transition-all text-center flex-1 sm:flex-none shadow-sm"
                >
                  VIEW SOURCE
                </Link>
              </div>
            </motion.div>

            {/* Right: Product Hero Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideRightVariant}
              className="lg:col-span-7"
            >
              <div className="relative aspect-[16/10] w-full rounded-[24px] overflow-hidden border border-deep-graphite/10 bg-white/50 backdrop-blur-sm shadow-sm">
                <Image
                  src="/images/products/stroky/strokyDp.png"
                  alt="Stroky Typing Experience Mockup"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  priority
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full max-w-[1440px] mx-auto px-6">
          <div className="border-t border-deep-graphite/10 w-full my-6 md:my-10" />
        </div>

        {/* 2. FEATURES LIST SECTION ("01") */}
        <section className="w-full max-w-[1440px] mx-auto px-6 py-12 md:py-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-start">

            {/* Left Column: Big "01" indicator */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideUpVariant}
              className="lg:w-1/4 shrink-0"
            >
              <span className="text-[120px] md:text-[160px] font-aftenscreen font-black leading-none text-deep-graphite/10 select-none">
                01
              </span>
            </motion.div>

            {/* Right Column: Digital Rhythm intro + 2x2 grid */}
            <div className="flex-grow flex flex-col items-start w-full">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideUpVariant}
                className="w-full"
              >
                <h2 className="text-[12px] font-mono font-semibold tracking-[0.25em] text-deep-graphite/60 uppercase mb-4">
                  DIGITAL RHYTHM
                </h2>
                <p className="text-[20px] md:text-[24px] text-deep-graphite font-medium leading-relaxed max-w-3xl mb-16">
                  Stroky focuses on speed, rhythm, and consistency while keeping distractions away. Every element is refined to ensure your flow remains unbroken.
                </p>
              </motion.div>

              {/* 2x2 Grid of features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 w-full">

                {/* Feature 1 */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideUpVariant}
                  className="border-l-2 border-deep-graphite/20 pl-6 flex flex-col items-start"
                >
                  <h3 className="font-mono font-bold text-[16px] md:text-[17px] text-deep-graphite tracking-wide mb-2">
                    Typing Tests
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-deep-graphite/70 leading-relaxed font-medium">
                    Precision-engineered challenges designed to push your boundaries.
                  </p>
                </motion.div>

                {/* Feature 2 */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideUpVariant}
                  className="border-l-2 border-deep-graphite/20 pl-6 flex flex-col items-start"
                >
                  <h3 className="font-mono font-bold text-[16px] md:text-[17px] text-deep-graphite tracking-wide mb-2">
                    Minimal Interface
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-deep-graphite/70 leading-relaxed font-medium">
                    A distraction-free canvas where only you and the text exist.
                  </p>
                </motion.div>

                {/* Feature 3 */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideUpVariant}
                  className="border-l-2 border-deep-graphite/20 pl-6 flex flex-col items-start"
                >
                  <h3 className="font-mono font-bold text-[16px] md:text-[17px] text-deep-graphite tracking-wide mb-2">
                    Real-time Metrics
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-deep-graphite/70 leading-relaxed font-medium">
                    Instant feedback on WPM, accuracy, and rhythmic consistency.
                  </p>
                </motion.div>

                {/* Feature 4 */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={slideUpVariant}
                  className="border-l-2 border-deep-graphite/20 pl-6 flex flex-col items-start"
                >
                  <h3 className="font-mono font-bold text-[16px] md:text-[17px] text-deep-graphite tracking-wide mb-2">
                    Progress Tracking
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-deep-graphite/70 leading-relaxed font-medium">
                    Historical data visualized through elegant monochrome charts.
                  </p>
                </motion.div>

              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full max-w-[1440px] mx-auto px-6">
          <div className="border-t border-deep-graphite/10 w-full my-6 md:my-10" />
        </div>

        {/* 3. TYPING INTERFACE SECTION */}
        <section className="w-full max-w-[1440px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left: Typing Interface Mockup */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideLeftVariant}
              className="lg:col-span-7"
            >
              <div className="relative aspect-[16/10] w-full rounded-[24px] overflow-hidden border border-deep-graphite/10 bg-white/50 backdrop-blur-sm shadow-sm">
                <Image
                  src="/images/products/stroky/strokyFeature1.png"
                  alt="Stroky Typing Interface Detail"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Right: Info Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideRightVariant}
              className="lg:col-span-5 flex flex-col items-start"
            >
              <h2 className="text-[12px] font-mono font-semibold tracking-wider text-deep-graphite/60 uppercase mb-4">
                Typing Interface
              </h2>
              <p className="text-[16px] md:text-[18px] text-deep-graphite/70 font-medium leading-relaxed max-w-md">
                Crafted with a focus on editorial typography, ensuring every keystroke feels intentional and every word has breathing room.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full max-w-[1440px] mx-auto px-6">
          <div className="border-t border-deep-graphite/10 w-full my-6 md:my-10" />
        </div>

        {/* 4. STATISTICS DASHBOARD SECTION */}
        <section className="w-full max-w-[1440px] mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left: Info Text (Desktop first, mobile last order) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideLeftVariant}
              className="lg:col-span-5 order-last lg:order-first flex flex-col items-start"
            >
              <h2 className="text-[12px] font-mono font-semibold tracking-wider text-deep-graphite/60 uppercase mb-4">
                Statistics Dashboard
              </h2>
              <p className="text-[16px] md:text-[18px] text-deep-graphite/70 font-medium leading-relaxed max-w-md">
                Comprehensive post-session analytics that break down your performance into actionable insights, visualized with brutalist precision.
              </p>
            </motion.div>

            {/* Right: Statistics Dashboard Mockup */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideRightVariant}
              className="lg:col-span-7 order-first lg:order-last"
            >
              <div className="relative aspect-[16/10] w-full rounded-[24px] overflow-hidden border border-deep-graphite/10 bg-white/50 backdrop-blur-sm shadow-sm">
                <Image
                  src="/images/products/stroky/strokyFeature2.png"
                  alt="Stroky Statistics Dashboard Detail"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5. TECH STACK BANNER */}
        <section className="w-full max-w-[1440px] mx-auto px-6 py-12 md:py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideUpVariant}
            className="bg-black text-white p-8 md:p-16 rounded-[32px] overflow-hidden flex flex-col justify-start"
          >
            <div className="text-[11px] md:text-[12px] font-mono tracking-[0.25em] text-white/50 mb-8 font-bold">
              BUILT WITH
            </div>
            <div className="flex flex-wrap items-center gap-8 md:gap-16">
              {["Next.js", "TypeScript", "TailwindCSS", "Vercel"].map((tech) => (
                <span
                  key={tech}
                  className="text-[20px] md:text-[28px] font-medium tracking-tight pb-2 border-b border-white/20 hover:border-white transition-colors duration-300 select-none"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
