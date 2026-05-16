"use client";

import React from 'react';
import VerticalCutReveal from '../fancy/text/vertical-cut-reveal';
import { ImageTrail } from '../ui/image-trail';
import { ANIME_IMAGES } from '@/lib/anime-images';

export default function Hero() {
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-16 overflow-hidden bg-canvas-white">
      {/* Image Trail Background - Only on Desktop */}
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
        {/* Top Header Section */}
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

        {/* Main Display Typography */}
        <div className="relative mb-16 md:mb-32">
          <h1 className="flex flex-col animate-reveal delay-4 -mt-4 md:-mt-10">
            <span className="text-[52px] xs:text-[64px] sm:text-[100px] md:text-[140px] lg:text-display font-aftenscreen leading-[0.8] tracking-tight md:tracking-display text-deep-graphite">
              <VerticalCutReveal
                splitBy="characters"
                staggerDuration={0.025}
                staggerFrom="first"
                wordLevelClassName="py-4 md:py-12"
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 21,
                }}
              >
                Design
              </VerticalCutReveal>
            </span>
            <div className="flex items-baseline gap-2 md:gap-30 lg:gap-82 -mt-2 md:-mt-10 lg:-mt-20">
              <span className="text-[52px] xs:text-[64px] sm:text-[100px] md:text-[140px] lg:text-display font-aftenscreen leading-[0.8] tracking-tight md:tracking-display text-soft-gray-highlight">
                &
              </span>
              <span className="text-[52px] xs:text-[64px] sm:text-[100px] md:text-[140px] lg:text-display font-aftenscreen leading-[0.8] tracking-tight md:tracking-display text-deep-graphite">
                <VerticalCutReveal
                  splitBy="characters"
                  staggerDuration={0.025}
                  staggerFrom="first"
                  wordLevelClassName="py-4 md:py-12 px-1 md:px-2"
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

        {/* Bottom Section */}
        <div className="mt-8 md:mt-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-10 md:gap-12">
          <div className="max-w-[500px] animate-reveal delay-5">
            <p className="text-[18px] md:text-[20px] lg:text-heading-sm mb-6 md:mb-8 leading-tight text-deep-graphite font-aftenscreen">
              BASED IN DUBAI, WORKING GLOBALLY. WE HELP STARTUPS AND ENTERPRISES BUILD PRODUCTS THAT PEOPLE LOVE.
            </p>
          </div>

          <div className="animate-reveal delay-5 w-full md:w-auto">
            <div className="flex flex-wrap gap-8 md:gap-12 text-caption uppercase tracking-widest text-medium-gray-highlight">
              <div className="flex-1 min-w-[100px] md:min-w-[80px]">
                <p className="text-deep-graphite mb-1 md:mb-2">01</p>
                <p>Deep Work</p>
              </div>
              <div className="flex-1 min-w-[100px] md:min-w-[80px]">
                <p className="text-deep-graphite mb-1 md:mb-2">02</p>
                <p>Visual Flow</p>
              </div>
              <div className="flex-1 min-w-[100px] md:min-w-[80px]">
                <p className="text-deep-graphite mb-1 md:mb-2">03</p>
                <p>Discipline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
