"use client";

import React from 'react';
import VerticalCutReveal from '../fancy/text/vertical-cut-reveal';
import { ImageTrail } from '../ui/image-trail';
import { ANIME_IMAGES } from '@/lib/anime-images';

const fire = "/images/animate_images/fire.png";

const TICKER_TAGS = [
  { emoji: "🚀", text: "Products" },
  { emoji: "💻", text: "Web Apps" },
  { emoji: "🤖", text: "AI Tools" },
  { emoji: "📦", text: "SaaS" },
  { emoji: "⚡", text: "Ship Fast" },
  { emoji: "🌍", text: "Global" },
  { emoji: "🔧", text: "Dev Tools" },
  { emoji: "📈", text: "Launch" },
  { emoji: "🧠", text: "Ideas" },
  { emoji: "✨", text: "Build" },
];

export default function Hero() {
  const [isDesktop, setIsDesktop] = React.useState(false);
  const doubledTags = [...TICKER_TAGS, ...TICKER_TAGS];

  React.useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center px-6 pt-24 md:pt-32 pb-16 overflow-hidden bg-canvas-white">

      {/* Image trail — desktop only */}
      {isDesktop && (
        <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
          <ImageTrail
            images={ANIME_IMAGES}
            imageWidth={200}
            imageHeight={250}
            threshold={60}
            duration={1.2}
          />
        </div>
      )}

      <div className="relative z-10 max-w-[1440px] mx-auto w-full">

        {/* ══════════════════════════════════════
            MOBILE HERO  (block md:hidden)
        ══════════════════════════════════════ */}
        <div className="block md:hidden">

          {/* Badge */}
          <p className="text-[11px] uppercase tracking-[0.22em] text-medium-gray-highlight mb-8 animate-reveal">
            Independent Product Studio
          </p>

          {/* Headline */}
          <h1 className="mb-8">
            <span className="text-[62px] sm:text-[76px] font-semibold font-aftenscreen leading-[0.88] tracking-tight text-deep-graphite block">
              <VerticalCutReveal
                splitBy="characters"
                staggerDuration={0.02}
                staggerFrom="first"
                wordLevelClassName="pb-2"
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
              >
                Build
              </VerticalCutReveal>
            </span>

            <div className="flex items-center gap-2 -mt-1">
              <span className="text-[62px] sm:text-[76px] font-aftenscreen leading-[0.88] tracking-tight text-soft-gray-highlight">
                &
              </span>
              <img
                src={fire}
                alt=""
                className="w-[52px] h-[52px] sm:w-[62px] sm:h-[62px] object-contain"
              />
              <span className="text-[62px] sm:text-[76px] font-semibold font-aftenscreen leading-[0.88] tracking-tight text-deep-graphite">
                <VerticalCutReveal
                  splitBy="characters"
                  staggerDuration={0.02}
                  staggerFrom="first"
                  wordLevelClassName="pb-2"
                  transition={{ type: "spring", stiffness: 220, damping: 22, delay: 0.12 }}
                >
                  Launch
                </VerticalCutReveal>
              </span>
            </div>
          </h1>

          {/* Supporting text */}
          <p className="text-[15px] sm:text-[16px] text-deep-graphite/60 leading-relaxed max-w-[300px] mb-12 animate-reveal delay-3">
            We build useful software, AI tools, and digital products for real-world problems.
          </p>

          {/* Three-step flow */}
          <div className="border-t border-deep-graphite/15 pt-6 animate-reveal delay-4">
            <div className="flex items-start gap-8 text-[11px] uppercase tracking-[0.15em] text-medium-gray-highlight">
              <div className="min-w-max">
                <p className="text-deep-graphite font-semibold mb-1.5">01 BUILD</p>
                <p>PRODUCTS</p>
              </div>
              <div className="min-w-max">
                <p className="text-deep-graphite font-semibold mb-1.5">02 LAUNCH</p>
                <p>FAST</p>
              </div>
              <div className="min-w-max">
                <p className="text-deep-graphite font-semibold mb-1.5">03 GROW</p>
                <p>ECOSYSTEM</p>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            DESKTOP HERO  (hidden md:block)
        ══════════════════════════════════════ */}
        <div className="hidden md:block">

          {/* Top row: description right */}
          <div className="flex flex-row items-start justify-between mb-20">
            <div />
            <div className="max-w-[600px] text-right flex flex-col items-end">
              <p className="text-caption uppercase tracking-wider text-medium-gray-highlight mb-4 animate-reveal delay-1">
                Independent Product Studio
              </p>
              <p className="text-body text-soft-gray-highlight max-w-[400px] animate-reveal delay-2 leading-tight uppercase">
                We build useful software, AI tools, and digital products for real-world problems.
              </p>
              <div className="mt-2">
                <div className="w-[400px] h-[1px] bg-deep-graphite mt-4 animate-reveal delay-3" />
              </div>
            </div>
          </div>

          {/* Floating Vertical Ticker */}
          <div className="absolute right-0 top-[110px] hidden lg:block h-[240px] w-[180px] overflow-hidden pointer-events-auto z-20">
            <div className="flex flex-col items-end gap-3 py-4 animate-infinite-scroll-y hover:[animation-play-state:paused] cursor-pointer">
              {doubledTags.map((tag, idx) => (
                <div
                  key={idx}
                  className="text-center px-3 py-1.5 rounded-[10px] border border-deep-graphite/10 bg-white/60 text-[11px] font-medium tracking-wider text-deep-graphite transition-all duration-300 hover:bg-deep-graphite hover:text-[#f2f2f2] hover:border-deep-graphite flex items-center gap-1.5 justify-center"
                >
                  <span className="text-[16px] leading-none">{tag.emoji}</span>
                  <span>{tag.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Headline */}
          <div className="relative mb-32">
            <h1 className="flex flex-col animate-reveal delay-4 -mt-10">
              <span className="text-[90px] lg:text-[120px] xl:text-[160px] 2xl:text-[180px] font-semibold font-aftenscreen leading-[0.95] tracking-tight md:tracking-display text-deep-graphite">
                <VerticalCutReveal
                  splitBy="characters"
                  staggerDuration={0.025}
                  staggerFrom="first"
                  wordLevelClassName="py-8 lg:py-10"
                  transition={{ type: "spring", stiffness: 200, damping: 21 }}
                >
                  Build
                </VerticalCutReveal>
              </span>
              <div className="flex items-center gap-3 lg:gap-8 -mt-8 lg:-mt-12">
                <span className="text-[90px] lg:text-[120px] xl:text-[160px] 2xl:text-[180px] font-aftenscreen leading-[0.95] tracking-tight md:tracking-display text-soft-gray-highlight">
                  &
                </span>
                <img
                  src={fire}
                  alt="fire"
                  className="w-20 lg:w-28 xl:w-[140px] 2xl:w-[160px] object-contain self-center"
                  style={{ height: "auto" }}
                />
                <span className="text-[90px] lg:text-[120px] xl:text-[160px] 2xl:text-[180px] font-semibold font-aftenscreen leading-[0.95] tracking-tight md:tracking-display text-deep-graphite">
                  <VerticalCutReveal
                    splitBy="characters"
                    staggerDuration={0.025}
                    staggerFrom="first"
                    wordLevelClassName="py-8 lg:py-10 px-1"
                    transition={{ type: "spring", stiffness: 200, damping: 21, delay: 0.3 }}
                  >
                    Launch
                  </VerticalCutReveal>
                </span>
              </div>
            </h1>
          </div>

          {/* Bottom section */}
          <div className="mt-20 flex flex-row items-stretch justify-between border-t border-deep-graphite/20 pt-12">
            <div className="max-w-[500px] animate-reveal delay-5 flex flex-col justify-start">
              <p className="text-[20px] lg:text-heading-sm leading-tight text-deep-graphite font-aftenscreen">
                BUILDING, LAUNCHING,
                AND GROWING PRODUCTS
                UNDER THE BEPEL
                ECOSYSTEM.
              </p>
            </div>
            <div className="animate-reveal delay-5 flex flex-col justify-end border-l border-deep-graphite/20 pl-10 lg:pl-16">
              <div className="flex items-center flex-nowrap gap-16 lg:gap-24 text-caption uppercase tracking-widest text-medium-gray-highlight mb-1">
                <div className="min-w-max">
                  <p className="text-deep-graphite mb-2">01 BUILD</p>
                  <p>PRODUCTS</p>
                </div>
                <div className="min-w-max">
                  <p className="text-deep-graphite mb-2">02 LAUNCH</p>
                  <p>FAST</p>
                </div>
                <div className="min-w-max">
                  <p className="text-deep-graphite mb-2">03 GROW</p>
                  <p>ECOSYSTEM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
