"use client"

import useLenis from "@/hooks/useLenis";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Projects from "@/components/Projects";

export default function Home() {
  useLenis();

  return (
    <main className="overflow-hidden">
      <Hero />
      {/* <AboutMe /> */}
      <Services />
      <Projects />
    </main>
  );
}