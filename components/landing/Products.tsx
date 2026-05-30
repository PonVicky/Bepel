"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const slideLeft = {
  hidden: { opacity: 0, x: -35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function Products() {
  return (
    <section
      id="products-section"
      className="px-6 py-24 md:py-32 w-full max-w-[1440px] mx-auto bg-canvas-white relative z-10"
    >
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideUp}
        className="mb-16 md:mb-28 flex flex-col items-start"
      >
        <div className="text-[12px] font-mono font-medium tracking-[0.25em] uppercase text-deep-graphite/60 mb-3">
          BEPEL ECOSYSTEM
        </div>
        <h2 className="text-[56px] sm:text-[80px] md:text-[90px] lg:text-[110px] font-aftenscreen font-black leading-[0.8] tracking-tighter text-deep-graphite uppercase">
          PRODUCTS
        </h2>
        <p className="text-[16px] md:text-[18px] text-deep-graphite/70 font-medium leading-relaxed max-w-[540px] mt-6">
          Software we build and grow. Each product starts small and improves
          through real-world use.
        </p>
      </motion.div>

      {/* Product List */}
      <div className="flex flex-col gap-20 md:gap-32">

        {/* ── PRODUCT 1 — STROKY ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Image — Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideLeft}
            className="lg:col-span-7"
          >
            <div className="relative aspect-[16/11] w-full rounded-[24px] overflow-hidden border border-deep-graphite/10 bg-white/50 backdrop-blur-sm shadow-sm">
              <Image
                src="/images/products/stroky/strokyDp.png"
                alt="Stroky Typing Platform Mockup"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Info — Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideRight}
            className="lg:col-span-5 flex flex-col items-start gap-4 lg:gap-6"
          >
            <div className="flex items-center gap-3">
              <span className="bg-red-600 text-white px-2 py-0.5 text-[11px] font-mono font-bold tracking-widest leading-none">
                LIVE
              </span>
              <span className="text-[12px] font-mono font-semibold tracking-wider text-deep-graphite/60 uppercase">
                Typing Platform
              </span>
            </div>

            <h3 className="text-[40px] md:text-[52px] font-bold text-deep-graphite tracking-tight leading-none font-aftenscreen">
              Stroky
            </h3>

            <p className="text-[16px] md:text-[18px] text-deep-graphite/70 leading-relaxed font-medium max-w-lg">
              A typing platform inspired by Monkeytype and Typings.gg focused on
              speed, rhythm, and consistency. Built for those who treat every
              keystroke as a performance.
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-2">
              <Link
                href="https://stroky.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 pb-1 border-b border-deep-graphite text-[14px] font-mono tracking-wider font-bold text-deep-graphite hover:text-deep-graphite/70 hover:border-deep-graphite/70 transition-all duration-200"
              >
                Visit Website <span className="text-[16px]">→</span>
              </Link>
              <Link
                href="/products/stroky"
                className="inline-flex items-center gap-2 pb-1 border-b border-deep-graphite text-[14px] font-mono tracking-wider font-bold text-deep-graphite hover:text-deep-graphite/70 hover:border-deep-graphite/70 transition-all duration-200"
              >
                Know More <span className="text-[16px]">→</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Thin Divider */}
        <div className="border-t border-deep-graphite/10 w-full -my-4" />

        {/* ── IN DEVELOPMENT PIPELINE ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideUp}
          className="flex flex-col gap-0"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="text-[12px] font-mono font-medium tracking-[0.25em] uppercase text-deep-graphite/50">
                IN DEVELOPMENT
              </div>
            </div>
          </div>

          {/* Pipeline list — easy to add/remove products */}
          {[
            {
              name: "AI Resume Builder",
              description: "Build and export professional AI-powered resumes tailored to any role.",
              category: "AI Tool",
            },
            {
              name: "Invoice Generator",
              description: "Create, customize, and send professional invoices in seconds.",
              category: "Utility",
            },
          ].map((product, i) => (
            <div
              key={product.name}
              className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-t border-deep-graphite/10 ${i === 1 ? "border-b" : ""}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <span className="bg-deep-graphite/8 text-deep-graphite/50 px-2 py-0.5 text-[10px] font-mono font-bold tracking-widest leading-none w-fit">
                  SOON
                </span>
                <div>
                  <span className="text-[18px] md:text-[20px] font-semibold text-deep-graphite tracking-tight font-aftenscreen">
                    {product.name}
                  </span>
                  <span className="hidden sm:inline text-deep-graphite/30 mx-4">·</span>
                  <span className="block sm:inline text-[14px] md:text-[15px] text-deep-graphite/55 mt-1 sm:mt-0">
                    {product.description}
                  </span>
                </div>
              </div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-deep-graphite/35 shrink-0">
                {product.category}
              </span>
            </div>
          ))}
        </motion.div>

      </div>

      {/* ── STAY IN THE LOOP ── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideUp}
        className="mt-20 md:mt-28"
      >
        <div className="bg-deep-graphite rounded-xl px-8 md:px-18 py-10 md:py-22 flex flex-col md:flex-row items-start md:items-center mt-10 justify-between gap-8">
          {/* Left: Text */}
          <div className="flex flex-col items-start gap-2 md:max-w-sm">
            <h3 className="text-[30px] md:text-[40px] font-aftenscreen font-bold text-canvas-white leading-tight tracking-tight">
              Stay in the Loop
            </h3>
            <p className="text-[13px] md:text-[14px] text-canvas-white/50 font-medium leading-relaxed">
              Get notified when we launch new products and ship updates
              to the Bepel ecosystem.
            </p>
          </div>

          {/* Right: Email Input */}
          <form
            className="flex items-end gap-4 w-full md:w-auto md:min-w-[380px]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex-1 border-b border-canvas-white/30 focus-within:border-canvas-white transition-colors duration-200">
              <input
                id="loop-email"
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="w-full bg-transparent text-canvas-white placeholder-canvas-white/30 text-[12px] font-mono tracking-[0.2em] py-2 outline-none"
              />
            </div>
            <button
              type="submit"
              aria-label="Subscribe"
              className="text-canvas-white hover:text-canvas-white/60 transition-colors duration-200 pb-2"
            >
              <span className="text-[22px] leading-none">→</span>
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
