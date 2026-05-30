import Navbar from "@/components/NavBar";
import Hero from "@/components/landing/Hero";
import WhatWeDo from "@/components/landing/WhatWeDo";
import AboutBepel from "@/components/landing/AboutBepel";
import Products from "@/components/landing/Products";
import Footer from "@/components/landing/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas-white selection:bg-deep-graphite selection:text-canvas-white">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <WhatWeDo />
      <AboutBepel />
      <Products />
      <Footer />
    </main>
  );
}
