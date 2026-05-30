"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TargetCursor from "../ui/TargetCursor";
import MediaBetweenText from "../fancy/blocks/media-between-text";

export default function WhatWeDo() {
  // Guard TargetCursor to client-only to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="what-we-do-section" className="px-6 py-24 md:py-32 w-full max-w-[1440px] mx-auto bg-canvas-white relative z-10">
      {mounted && (
        <TargetCursor
          containerSelector="#what-we-do-section"
          spinDuration={2}
          hideDefaultCursor
          parallaxOn
          hoverDuration={0.2}
        />
      )}
      <div className="mb-16  md:mb-24 flex flex-col items-start gap-8">
        <div className="cursor-target inline-flex items-center gap-3 px-4 py-2 rounded-full border border-deep-graphite/20 bg-white">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 12A4 4 0 1 1 8 12A4 4 0 0 1 16 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[12px] font-semibold tracking-widest uppercase text-deep-graphite">
            WHAT WE BUILD
          </span>
        </div>
        {/* Static Heading for Mobile & Tablet (No animation, optimized performance) */}
        <h2 className="block md:hidden text-[56px] sm:text-[80px] font-aftenscreen font-black leading-[0.8] tracking-tighter text-deep-graphite uppercase">
          WHAT WE DO
        </h2>

        {/* Animated Heading for Desktop & Laptops */}
        <MediaBetweenText
          firstText="WHAT"
          secondText=" WE DO"
          mediaUrl="/images/animate_images/6.png"
          mediaType="image"
          triggerType="hover"
          as="span"
          className="hidden md:flex flex-row items-center whitespace-nowrap flex-nowrap md:text-[90px] lg:text-[130px] xl:text-[170px] 2xl:text-[180px] font-aftenscreen font-black leading-[0.8] tracking-tighter text-deep-graphite uppercase  select-none"
          mediaContainerClassName="overflow-hidden rounded-xl md:rounded-[24px] mx-2 md:mx-4 h-[0.85em] self-center"
          animationVariants={{
            initial: { width: 0, opacity: 0, scale: 0.8 },
            animate: {
              width: "1em",
              opacity: 1,
              scale: 1,
              transition: { duration: 0.4, type: "spring", bounce: 0 },
            },
          }}
        />
      </div>

      {/* ══════════════════════════════════════
          MOBILE: Horizontal swipe cards
      ══════════════════════════════════════ */}
      <div className="md:hidden -mx-6 overflow-x-auto no-scrollbar">
        <div className="flex gap-4 px-6 pb-1 snap-x snap-mandatory">

          {[
            {
              label: "01 / PRODUCT STUDIO",
              title: "Building Software\nThat Solves Problems",
              desc: "We turn ideas into real products — from AI tools and SaaS platforms to developer utilities.",
              tags: ["SaaS", "AI", "Products"],
            },
            {
              label: "02 / WHAT WE BUILD",
              title: "Web\nApplications",
              desc: "Modern web applications designed for speed, usability, and scale.",
              tags: ["React", "Next.js", "Web Apps"],
            },
            {
              label: "03 / BUILDING IN PUBLIC",
              title: "Ship.\nLearn.\nImprove.",
              desc: "We launch quickly, gather feedback, and continuously improve every product.",
              tags: ["Launch", "Feedback", "Growth"],
            },
            {
              label: "04 / THE BEPEL ECOSYSTEM",
              title: "One Brand.\nMany Products.",
              desc: "Every tool we create lives under the Bepel ecosystem — a growing collection of useful software.",
              tags: ["Vision", "Products", "Scale"],
            },
          ].map((card) => (
            <div
              key={card.label}
              className="snap-start flex-none w-[80vw] max-w-[300px] rounded-[24px] border border-deep-graphite/10 bg-white p-6 flex flex-col gap-4 min-h-[340px]"
            >
              <div className="text-[11px] font-mono font-medium tracking-widest uppercase text-deep-graphite/50">
                {card.label}
              </div>
              <h3 className="text-[22px] font-semibold leading-tight text-deep-graphite tracking-tight whitespace-pre-line flex-1">
                {card.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-deep-graphite/60">
                {card.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {card.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-xl border border-deep-graphite/12 text-[12px] font-medium text-deep-graphite"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-[10px] uppercase tracking-[0.2em] text-medium-gray-highlight/50 text-center mt-5 px-6 select-none">
          Swipe to explore →
        </p>
      </div>

      {/* ══════════════════════════════════════
          DESKTOP: Bento Grid
      ══════════════════════════════════════ */}
      <div className="hidden md:grid md:grid-cols-5 gap-6 md:gap-8">

        {/* Card 1: Build Products (Col-span 3) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="md:col-span-3 rounded-[32px] border border-deep-graphite/10 bg-white p-8 md:p-12 relative overflow-hidden flex flex-col justify-between min-h-[500px] md:min-h-[600px] group"
        >
          <div className="absolute top-0 right-0 h-full w-[60%] sm:w-[50%] md:w-[65%] z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 w-1/3"></div>
            <Image
              src="/images/WhatWeDo/buildProducts.png"
              alt="Build Products"
              fill
              draggable={false}
              sizes="(max-width: 768px) 60vw, (max-width: 1024px) 50vw, 40vw"
              className="object-cover object-left-top"
            />
          </div>

          <div className="relative z-20 w-full sm:w-[70%] md:w-[60%] lg:w-[50%] flex flex-col items-start gap-4 h-full">
            <div className="text-[12px] font-mono font-medium tracking-widest uppercase text-deep-graphite/60 mb-2">
              01 / PRODUCT STUDIO
            </div>
            <h3 className="text-[40px] cursor-target md:text-[48px] font-semibold leading-tight text-deep-graphite tracking-tight">
              Building Software That Solves Problems
            </h3>
            <p className="text-[16px] md:text-[18px] leading-relaxed text-deep-graphite/70 mb-12">
              We turn ideas into real products — from AI tools and SaaS platforms to developer utilities and experiments.
            </p>

            <div className="mt-auto flex flex-wrap gap-3">
              <span className="px-3 cursor-target py-1 rounded-xl border border-deep-graphite/15 text-[13px] font-medium text-deep-graphite bg-white/80 backdrop-blur-sm">SaaS</span>
              <span className="px-3 cursor-target py-1 rounded-xl border border-deep-graphite/15 text-[13px] font-medium text-deep-graphite bg-white/80 backdrop-blur-sm">AI</span>
              <span className="px-3 cursor-target py-1 rounded-xl border border-deep-graphite/15 text-[13px] font-medium text-deep-graphite bg-white/80 backdrop-blur-sm">Products</span>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Web Applications (Col-span 2) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.1 }}
          className="md:col-span-2 rounded-[32px] border border-deep-graphite/10 bg-white p-8 md:p-12 relative overflow-hidden flex flex-col min-h-[500px] md:min-h-[600px] group"
        >
          <div className="flex flex-col items-start gap-4 mb-10 z-20 relative">
            <div className="text-[12px] font-mono font-medium tracking-widest uppercase text-deep-graphite/60 mb-2">
              02 / WHAT WE BUILD
            </div>
            <h3 className="text-[32px] cursor-target md:text-[36px] font-semibold leading-tight text-deep-graphite tracking-tight">
              Web Applications
            </h3>
            <p className="text-[16px] md:text-[17px] leading-relaxed text-deep-graphite/70">
              Modern web applications designed for speed, usability, and scale.
            </p>
          </div>

          <div className="relative w-full flex-grow flex items-center justify-center min-h-[200px] mb-8 z-10">
            <Image
              src="/images/WhatWeDo/webApplications.png"
              alt="Web Applications Dashboard"
              fill
              draggable={false}
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-contain transition-transform"
            />
          </div>

          <div className="mt-auto flex flex-wrap gap-3 z-20 relative">
            <span className="px-3 cursor-target py-1 rounded-xl border border-deep-graphite/15 text-[13px] font-medium text-deep-graphite bg-white/80 backdrop-blur-sm">React</span>
            <span className="px-3 cursor-target py-1 rounded-xl border border-deep-graphite/15 text-[13px] font-medium text-deep-graphite bg-white/80 backdrop-blur-sm">Next.js</span>
            <span className="px-3 cursor-target py-1 rounded-xl border border-deep-graphite/15 text-[13px] font-medium text-deep-graphite bg-white/80 backdrop-blur-sm">Web Apps</span>
          </div>

        </motion.div>

        {/* Card 3: Ship Fast (Col-span 2) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
          className="md:col-span-2 rounded-[32px] border border-deep-graphite/10 bg-white p-8 md:p-12 relative overflow-hidden flex flex-col min-h-[500px] md:min-h-[550px] group"
        >
          <div className="flex flex-col items-start gap-4 mb-10 z-20 relative">
            <div className="text-[12px] font-mono font-medium tracking-widest uppercase text-deep-graphite/60 mb-2">
              03 / BUILDING IN PUBLIC
            </div>
            <h3 className="text-[32px] cursor-target md:text-[36px] font-semibold leading-tight text-deep-graphite tracking-tight">
              Ship. Learn. Improve.
            </h3>
            <p className="text-[16px] md:text-[17px] leading-relaxed text-deep-graphite/70">
              We launch quickly, gather feedback, and continuously improve every product.
            </p>
          </div>

          <div className="relative w-full flex-grow flex items-center justify-center min-h-[180px] mb-8 z-10">
            <Image
              src="/images/WhatWeDo/shipFast.png"
              alt="Ship Fast Dashboard"
              fill
              draggable={false}
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-contain object-top transition-transform"
            />
          </div>

          <div className="mt-auto flex flex-wrap gap-3 z-20 relative">
            <span className="px-3 cursor-target py-1 rounded-xl border border-deep-graphite/15 text-[13px] font-medium text-deep-graphite bg-white/80 backdrop-blur-sm">Launch</span>
            <span className="px-3 cursor-target py-1 rounded-xl border border-deep-graphite/15 text-[13px] font-medium text-deep-graphite bg-white/80 backdrop-blur-sm">Feedback</span>
            <span className="px-3 cursor-target py-1 rounded-xl border border-deep-graphite/15 text-[13px] font-medium text-deep-graphite bg-white/80 backdrop-blur-sm">Growth</span>
          </div>
        </motion.div>

        {/* Card 4: Growing Bepel (Col-span 3) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.3 }}
          className="md:col-span-3 rounded-[32px] border border-deep-graphite/10 bg-white relative overflow-hidden flex flex-col min-h-[500px] md:min-h-[550px] group"
        >
          {/* Card 4 uses a full bleed image at the bottom, so padding is structural */}
          <div className="p-8 md:p-12 pb-0 flex flex-col items-start gap-4 z-20 relative w-full sm:w-[60%]">
            <div className="w-full flex justify-between items-start absolute top-8 md:top-12 right-8 md:right-12">
              {/* Compass Icon */}
              <div className="w-10 h-10 rounded-full border border-deep-graphite/20 flex items-center justify-center ml-auto">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.5 9.5L10.5 10.5L9.5 14.5L13.5 13.5L14.5 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div className="text-[12px] font-mono font-medium tracking-widest uppercase text-deep-graphite/60 mb-2">
              04 / THE BEPEL ECOSYSTEM
            </div>
            <h3 className="text-[32px] cursor-target md:text-[36px] font-semibold leading-tight text-deep-graphite tracking-tight">
              One Brand. Many Products.
            </h3>
            <p className="text-[16px] md:text-[17px] leading-relaxed text-deep-graphite/70 mb-6">
              Every tool we create lives under the Bepel ecosystem — a growing collection of useful software.
            </p>
          </div>

          <div className="relative w-full flex-grow min-h-[220px] mt-4 z-10 overflow-hidden">
            <Image
              src="/images/WhatWeDo/growingBepel.png"
              alt="Growing Bepel Abstract"
              fill
              draggable={false}
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-bottom transition-transform"
            />
          </div>

          {/* Tags absolute on bottom left */}
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 flex flex-wrap gap-3 z-20">
            <span className="px-3 cursor-target py-1 rounded-xl border border-deep-graphite/15 text-[13px] font-medium text-deep-graphite bg-white/80 backdrop-blur-sm">Vision</span>
            <span className="px-3 cursor-target py-1 rounded-xl border border-deep-graphite/15 text-[13px] font-medium text-deep-graphite bg-white/80 backdrop-blur-sm">Products</span>
            <span className="px-3 cursor-target py-1 rounded-xl border border-deep-graphite/15 text-[13px] font-medium text-deep-graphite bg-white/80 backdrop-blur-sm">Scale</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
