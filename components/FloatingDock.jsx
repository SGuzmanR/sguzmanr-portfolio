"use client"

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FloatingDockUI } from "./ui/floating-dock";
import { floatingDockLinks } from "@/constants";

const FloatingDock = () => {
  useGSAP(() => {
    gsap.to('#floatingDock', {
      opacity: 1,
      delay: 2.5,
      duration: 1.5,
    });
  });

  return (
    <div id="floatingDock" className="w-full flex justify-center items-center opacity-0">
      <FloatingDockUI
        desktopClassName="fixed bottom-6"
        mobileClassName="fixed bottom-6 right-6"
        items={floatingDockLinks}
      />
    </div>
  )
}

export default FloatingDock