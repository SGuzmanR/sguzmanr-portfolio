"use client"

import useLenis from "@/hooks/useLenis";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  useLenis();

  return (
    <main className="overflow-hidden">
      <Hero />
      {/* <AboutUs /> */}
      <Services />
      <Projects />
      <Contact />
    </main>
  );
};