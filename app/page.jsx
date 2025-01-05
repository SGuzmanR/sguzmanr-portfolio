"use client"

import { FloatingDock } from "@/components/ui/floating-dock";
import { floatingDockLinks } from "@/constants";
import Hero from "@/components/Hero";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
  useGSAP(() => {
    gsap.to('#floatingDock', {
      opacity: 1,
      delay: 2.5,
      duration: 1.5,
    });
  });

  return (
    <main className="oveflow-hidden">
      <div id="floatingDock" className="w-full flex justify-center items-center opacity-0">
        <FloatingDock
          desktopClassName="fixed bottom-6"
          mobileClassName="fixed bottom-6 right-6"
          items={floatingDockLinks}
        />
      </div>

      <Hero />
    </main>
  );
}
