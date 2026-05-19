"use client";

import React from 'react';
import Navbar from '@/components/NavBar';
import Hero from '@/components/landing/Hero';
import WhatWeDo from '@/components/landing/WhatWeDo';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-canvas-white selection:bg-deep-graphite selection:text-canvas-white">
      <Navbar />
      <Hero />
      <WhatWeDo />
    </main>
  );
}
