import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";

import ServicesCards from "./ServicesCards";
import Link from "next/link";

const Services = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#services",
        start: "top center",
        end: "bottom center",
        // markers: true,
        toggleActions: "play reverse play reverse",
      }
    })

    tl.fromTo(".services-title", {
      opacity: 0,
      translateY: 20,
      clipPath: "inset(0% 0% 100% 0%)",
    }, {
      opacity: 1,
      translateY: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "power4.inOut",
    })

    tl.fromTo(".services-subtitle", {
      opacity: 0,
      translateX: 20,
      clipPath: "inset(0% 0% 100% 0%)",
    }, {
      opacity: 1,
      translateX: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "power4.inOut",
    })

    tl.fromTo(".services-btn", {
      opacity: 0,
      translateX: -20,
    }, {
      opacity: 1,
      translateX: 0,
      ease: "power4.inOut",
    })
  }, []);

  return (
    <section id="services" className="w-full h-auto">
      <div className="w-full paddingX flex flex-row max-sm:flex-col justify-between items-center gap-5">
        <div className="w-full mt-16 flex flex-col">
          <h2 className="services-title text-[8vw] max-sm:text-[10vw] font-extrabold">SERVICIOS</h2>
          <p className="services-subtitle text-wrap text-[2vw] max-sm:text-[4vw]">
            Encontraremos soluciones creativas para todos los desafíos de tu negocio.
          </p>
        </div>

        {/* <div className="services-btn w-full flex items-center justify-end">
          <Link href="/servicios" className="flex flex-row gap-5 bg-white text-black py-3 px-5 rounded-xl text-xl hover:text-white hover:bg-black transition-colors duration-500 fill-black hover:fill-white">
            <span>Explora Todos</span>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6"><path d="M493.7 .9L299.4 75.6l2.3-29.3c1-12.8-12.8-21.5-24-15.1L101.3 133.4C38.6 169.7 0 236.6 0 309C0 421.1 90.9 512 203 512c72.4 0 139.4-38.6 175.7-101.3L480.8 234.3c6.5-11.1-2.2-25-15.1-24l-29.3 2.3L511.1 18.3c.6-1.5 .9-3.2 .9-4.8C512 6 506 0 498.5 0c-1.7 0-3.3 .3-4.8 .9zM192 192a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm16 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"/></svg>
          </Link>
        </div> */}
      </div>

      <ServicesCards />
    </section>
  );
};

export default Services;