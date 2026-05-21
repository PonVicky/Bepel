"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import LetterSwapForward from "./fancy/text/letter-swap-forward-anim";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPercent, setScrollPercent] = useState(0);
    const { scrollYProgress } = useScroll();

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setScrollPercent(Math.round(latest * 100));
    });

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] px-3 py-3 md:px-8 md:py-6 flex items-start justify-between pointer-events-none">
            {/* Left: Logo */}
            <div className="pointer-events-auto">
                <Link href="/">
                    <Image
                        src="/bepelLogo.svg"
                        alt="Bepel Logo"
                        width={36}
                        height={36}
                        className="w-[34px] h-[34px] md:w-[48px] md:h-[48px]"
                        style={{ height: "auto" }}
                    />
                </Link>
            </div>

            {/* Center/Right: Action Pill & Expandable Menu */}
            <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 pointer-events-auto">
                <div
                    className={`
            relative transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden
            ${isOpen ? "w-[256px] h-[540px] rounded-[32px] bg-[#D6D6D6] shadow-2xl py-4 px-1 flex flex-col" : "w-[188px] md:w-[240px] h-[40px] md:h-[48px] rounded-[20px] md:rounded-[24px] bg-black shadow-lg p-1"}
          `}
                >
                    {/* Internal Pill Bar (Always at top) */}
                    <div
                        className={`
              flex items-center justify-between shrink-0
              ${isOpen ? "bg-black rounded-full py-1 mx-3 h-[48px] w-auto" : "h-full px-1 md:px-2 w-full"}
            `}
                    >
                        {/* Menu/Close Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center hover:cursor-pointer gap-1 md:gap-2 px-1.5 md:px-3 py-1 rounded-full hover:bg-white/10 transition-colors group"
                        >
                            {isOpen ? (
                                <>
                                    <div className="relative w-4 ml-1 md:ml-2 h-4 flex items-center justify-center">
                                        <X size={20} color="white" className="md:w-6 md:h-6" />
                                    </div>
                                    <span className="text-white text-xs font-medium">
                                        <LetterSwapForward label="Close" staggerDuration={0.02} />
                                    </span>
                                </>
                            ) : (
                                <>
                                    <div className="flex flex-col gap-0.5 ml-1">
                                        <span className="w-3 h-0.5 bg-white"></span>
                                        <span className="w-3 h-0.5 bg-white"></span>
                                    </div>
                                    <span className="text-white text-[10px] md:text-xs font-medium">
                                        <LetterSwapForward label="Menu" staggerDuration={0.02} />
                                    </span>
                                </>
                            )}
                        </button>

                        {/* Icons Section */}
                        <div className="flex items-center gap-1.5 md:gap-4 px-1 md:px-2">

                            <div className="bg-[#333333] px-1.5 md:px-3 py-0.5 md:py-1 rounded-full min-w-[34px] md:min-w-[46px] flex justify-center items-center">
                                <span className="text-white text-[9px] md:text-[11px] font-bold tracking-wide">{scrollPercent}%</span>
                            </div>
                        </div>
                    </div>

                    {/* Expanded Content */}
                    <div
                        className={`
              mt-8 transition-opacity duration-300 px-4 flex-1 flex flex-col pb-4
              ${isOpen ? "opacity-100 delay-200" : "opacity-0 pointer-events-none hidden"}
            `}
                    >
                        {/* Main Menu Section */}
                        <div className="space-y-2">
                            <p className="text-[10px] text-black/70 uppercase tracking-widest">Menu</p>
                            <ul className="space-y-1">
                                {["PDP's", "Products", "Videos", "Our features"].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-xl font-medium text-black inline-block">
                                            <LetterSwapForward label={item} staggerFrom="center" reverse={false} />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="my-6 border-t border-black/10"></div>

                        {/* Other Section */}
                        <div className="space-y-2">
                            <p className="text-[10px] text-black/70 uppercase tracking-widest">Other</p>
                            <ul className="space-y-1">
                                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-xs font-medium text-black inline-block">
                                            <LetterSwapForward label={item} staggerDuration={0.01} />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Media pushed to bottom */}
                        <div className="mt-auto space-y-1">
                            <p className="text-[10px] text-black/70 uppercase tracking-widest">Social media</p>
                            <Link href="#" className="text-xs font-medium text-black inline-block">
                                <LetterSwapForward label="Instagram" staggerDuration={0.01} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Actions */}
            <div className="hidden md:flex items-center gap-4 pointer-events-auto">
                <button className="bg-black hover:cursor-pointer text-white px-5 py-2.5 rounded-full text-xs font-bold hover:opacity-80 transition-opacity flex items-center justify-center min-w-[100px]">
                    <LetterSwapForward label="Contact us" staggerDuration={0.02} />
                </button>
            </div>
        </nav>
    );
}
