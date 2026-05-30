"use client";

import Image from "next/image";
import Link from "next/link";
import MagnetLines from '@/components/MagnetLines';


export default function Footer() {
  return (
    <footer className=" bg-[#F5F5F5] rounded-t-[32px] p-6 md:p-12 md:pb-0 flex flex-col justify-between overflow-hidden shadow-sm">
      {/* Top Section: Logo & Nav columns */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Left: Logo & Brand Name */}
        <div className="flex items-center gap-4">
          <Image
            src="/bepelLogo.svg"
            alt="Bepel Logo"
            width={56}
            height={56}
            className="w-14 h-14 object-contain"
          />
          <span className="text-5xl pb-2 font-aftenscreen font-black tracking-tight text-deep-graphite">Bepel</span>
        </div>

        {/* Right: Columns */}
        <div className="flex gap-16 md:gap-32 text-[14px]">
          {/* Column 1 */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-deep-graphite">Studio</span>
              <Link href="/about" className="text-deep-graphite/80 hover:text-deep-graphite font-semibold transition-colors">
                About
              </Link>
              <Link href="/products" className="text-deep-graphite/80 hover:text-deep-graphite font-semibold transition-colors">
                Products
              </Link>
            </div>
            <div className="flex flex-col gap-1.5 text-[12px] text-deep-graphite/50 font-medium">
              <Link href="#" className="hover:text-deep-graphite transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-deep-graphite transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-deep-graphite transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-deep-graphite">Connect</span>
              <Link
                href="https://stroky.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-deep-graphite/80 hover:text-deep-graphite font-semibold transition-colors"
              >
                Stroky
              </Link>
            </div>
            <div className="flex flex-col gap-1.5 text-[12px] text-deep-graphite/50 font-medium">
              <Link href="#" className="hover:text-deep-graphite transition-colors">
                Instagram
              </Link>
              <Link href="/contact" className="hover:text-deep-graphite transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Center Section: Meta copyright info */}
      <div className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[12px] text-deep-graphite/50 font-medium pt-8 border-t border-deep-graphite/5">
        <div>© 2026, Bepel. All rights reserved.</div>
        <div>Based in Madurai. Building globally.</div>
      </div>

      <div className="hidden md:block -mx-6 md:-mx-12 mt-12 overflow-hidden w-[calc(100%+3rem)] md:w-[calc(100%+6rem)]">
        <MagnetLines
          rows={7}
          columns={28}
          lineColor="#222222"
          lineWidth="2px"
          lineHeight="20px"
          baseAngle={-10}
          style={{ width: "100%", height: "200px" }}
        />
      </div>
    </footer>
  );
}
