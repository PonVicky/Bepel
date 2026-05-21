"use client";

import React from 'react';
import VerticalCutReveal from '../fancy/text/vertical-cut-reveal';
import { ImageTrail } from '../ui/image-trail';
import { ANIME_IMAGES } from '@/lib/anime-images';

const fire = "/images/animate_images/fire.png";

const TICKER_TAGS = [
  { emoji: "🧠", text: "Ideas", },
  { emoji: "💻", text: "Web Apps", },
  { emoji: "⚡", text: "Build Better", },
  { emoji: "🤖", text: "AI", },
  { emoji: "🎨", text: "Create", },
  { emoji: "🚀", text: "Ship Fast", },
  { emoji: "🌍", text: "Think Big", },
  { emoji: "📦", text: "SaaS", },
  { emoji: "📈", text: "Launch", },
  { emoji: "✏️", text: "Design", },
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
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-16 overflow-hidden bg-canvas-white">
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
        <div className="flex flex-col-reverse md:flex-row items-start justify-between mb-12 md:mb-20">
          <div></div>
          <div className="max-w-[600px] mb-8 md:mb-0 md:text-right flex flex-col md:items-end">
            <p className="text-caption uppercase tracking-wider text-medium-gray-highlight mb-4 animate-reveal delay-1">
              Creative Agency
            </p>
            <p className="text-[14px] md:text-body text-soft-gray-highlight max-w-[320px] md:max-w-[400px] animate-reveal delay-2 leading-tight uppercase">
              WE DESIGN AND BUILD LOVABLE DIGITAL PRODUCTS, BRANDS, AND EXPERIENCES.
            </p>
            <div className="hidden md:block mt-2">
              <div className="w-[400px] h-[1px] bg-deep-graphite mt-4 animate-reveal delay-3"></div>
            </div>
          </div>
        </div>

        {/* Floating Vertical Infinite Scroll Ticker */}
        <div className="absolute right-0 top-[110px] hidden lg:block h-[240px] w-[180px] overflow-hidden pointer-events-auto z-20">
          <div className="flex flex-col items-end gap-3 py-4 animate-infinite-scroll-y hover:[animation-play-state:paused] cursor-pointer">

            {doubledTags.map((tag, idx) => (
              <div
                key={idx}
                className="
                    text-center
                    px-3 py-1.5
                    rounded-[10px]
                    border border-deep-graphite/10
                    bg-white/60
                    text-[11px]
                    font-medium
                    tracking-wider
                    text-deep-graphite
                    transition-all duration-300
                    hover:bg-deep-graphite
                    hover:text-[#f2f2f2]
                    hover:border-deep-graphite
                    flex items-center gap-1.5 justify-center
                  "
              >
                <span className="text-[16px] leading-none">
                  {tag.emoji}
                </span>

                <span>
                  {tag.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mb-16 md:mb-32">
          <h1 className="flex flex-col animate-reveal delay-4 -mt-4 md:-mt-10">
            <span className="text-[42px] xs:text-[48px] sm:text-[64px] md:text-[90px] lg:text-[120px] xl:text-[160px] 2xl:text-[180px] font-semibold font-aftenscreen leading-[0.95] tracking-tight md:tracking-display text-deep-graphite">
              <VerticalCutReveal
                splitBy="characters"
                staggerDuration={0.025}
                staggerFrom="first"
                wordLevelClassName="py-2 md:py-8 lg:py-10"
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 21,
                }}
              >
                Design
              </VerticalCutReveal>
            </span>
            <div className="flex items-center flex-wrap md:flex-nowrap gap-2 md:gap-3 lg:gap-8 -mt-2 md:-mt-8 lg:-mt-12">
              <span className="text-[42px] xs:text-[48px] sm:text-[64px] md:text-[90px] lg:text-[120px] xl:text-[160px] 2xl:text-[180px] font-aftenscreen leading-[0.95] tracking-tight md:tracking-display text-soft-gray-highlight">
                &
              </span>
              <img
                src={fire}
                alt="fire"
                className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 xl:w-[140px] xl:h-[140px] 2xl:w-[160px] 2xl:h-[160px] object-contain self-center"
              />
              <span className="text-[42px] xs:text-[48px] sm:text-[64px] md:text-[90px] lg:text-[120px] xl:text-[160px] 2xl:text-[180px] font-semibold font-aftenscreen leading-[0.95] tracking-tight md:tracking-display text-deep-graphite">
                <VerticalCutReveal
                  splitBy="characters"
                  staggerDuration={0.025}
                  staggerFrom="first"
                  wordLevelClassName="py-2 md:py-8 lg:py-10 px-1"
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 21,
                    delay: 0.3,
                  }}
                >
                  Technology
                </VerticalCutReveal>
              </span>
            </div>
          </h1>
        </div>

        <div className="mt-8 md:mt-20 flex flex-col md:flex-row items-stretch justify-between border-t border-deep-graphite/20 pt-8 md:pt-12 gap-8 md:gap-0">
          <div className="max-w-[500px] animate-reveal delay-5 flex flex-col justify-start">
            <p className="text-[18px] md:text-[20px] lg:text-heading-sm leading-tight text-deep-graphite font-aftenscreen">
              BUILDING DIGITAL PRODUCTS,
              WEB EXPERIENCES,
              AND BIG IDEAS
              THAT DESERVE TO EXIST.            </p>
          </div>

          <div className="animate-reveal delay-5 w-full md:w-[60%] lg:w-auto flex flex-col justify-end md:border-l md:border-deep-graphite/20 md:pl-10 lg:pl-16 pt-8 md:pt-0 border-t border-deep-graphite/20 md:border-t-0">
            <div className="flex items-center flex-nowrap gap-10 md:gap-16 lg:gap-24 text-caption uppercase tracking-widest text-medium-gray-highlight mb-1">
              <div className="min-w-max">
                <p className="text-deep-graphite mb-1 md:mb-2">01 CREATE</p>
                <p>IDEAS FIRST</p>
              </div>
              <div className="min-w-max">
                <p className="text-deep-graphite mb-1 md:mb-2">02 BUILD</p>
                <p>WITH INTENTION</p>
              </div>
              <div className="min-w-max">
                <p className="text-deep-graphite mb-1 md:mb-2">03 SHIP</p>
                <p>WITHOUT FEAR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
