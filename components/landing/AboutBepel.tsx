"use client";

import { motion } from "framer-motion";

const PRINCIPLES = [
  "Build useful things.",
  "Launch them.",
  "Improve them.",
  "Repeat.",
];

export default function AboutBepel() {
  return (
    <section
      id="about-section"
      className="px-6 py-24 md:py-32 w-full max-w-[1440px] mx-auto bg-canvas-white relative z-10"
    >
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="mb-16 md:mb-20"
      >
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-deep-graphite/20 bg-white">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[12px] font-semibold tracking-widest uppercase text-deep-graphite">
            ABOUT BEPEL
          </span>
        </div>
      </motion.div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-20 items-start">

        {/* Left: Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="md:col-span-2"
        >
          <h2 className="text-[40px] sm:text-[48px] md:text-[52px] lg:text-[60px] font-aftenscreen font-semibold leading-[0.95] tracking-tight text-deep-graphite">
            Independent<br />Product<br />Studio.
          </h2>
        </motion.div>

        {/* Right: Body + Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
          className="md:col-span-3 flex flex-col gap-6 md:gap-8 md:pt-2"
        >
          <p className="text-[17px] md:text-[18px] text-deep-graphite font-medium leading-relaxed">
            Bepel is an independent product studio focused on building useful software.
          </p>
          <p className="text-[15px] md:text-[16px] text-deep-graphite/65 leading-relaxed">
            We create SaaS products, AI tools, web applications, developer utilities,
            and experiments that solve real-world problems.
          </p>
          <p className="text-[15px] md:text-[16px] text-deep-graphite/65 leading-relaxed">
            Each product starts small, improves through feedback, and becomes part
            of the growing Bepel ecosystem.
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-deep-graphite/10 my-2" />

          {/* Principles — hover to animate */}
          <div className="flex flex-col gap-1">
            {PRINCIPLES.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4 py-2 cursor-default"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                {/* Number brightens on hover */}
                <motion.span
                  className="text-[11px] font-mono tabular-nums w-5 shrink-0"
                  variants={{
                    rest:  { opacity: 0.3 },
                    hover: { opacity: 1 },
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>

                {/* Text slides right on hover */}
                <motion.span
                  className="text-[15px] md:text-[16px] font-medium text-deep-graphite tracking-tight"
                  variants={{
                    rest:  { x: 0 },
                    hover: { x: 10 },
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                >
                  {item}
                </motion.span>
              </motion.div>
            ))}
          </div>

          {/* Location */}
          <p className="text-[11px] font-mono tracking-widest uppercase text-deep-graphite/35 mt-2">
            Based in Madurai. Building globally.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
