import Navbar from "@/components/NavBar";
import Hero from "@/components/landing/Hero";
import WhatWeDo from "@/components/landing/WhatWeDo";
import Products from "@/components/landing/Products";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas-white selection:bg-deep-graphite selection:text-canvas-white">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Products />
      <Footer />
    </main>
  );
}
