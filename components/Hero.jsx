"use client"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top center',
        end: 'bottom center',
        // markers: true,
        toggleActions: "play reverse play reverse",
      }
    });

    tl.fromTo(".hero-title", {
      opacity: 0,
      translateY: 20,
      clipPath: "inset(0% 0% 100% 0%)",
    }, {
      opacity: 1,
      translateY: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "power4.inOut",
      delay: 0.5,
      stagger: 0.1,
    })
    .fromTo(".hero-subtitle", {
      opacity: 0,
      translateY: 20,
      clipPath: "inset(0% 0% 100% 0%)",
    }, {
      ease: "sine.inOut",
      delay: 0,
      opacity: 1,
      translateY: 0,
      clipPath: "inset(0% 0% 0% 0%)",
    })
  }, []); 

  return (
    <section id="hero" className="w-screen h-svh bg-radial-black">
      <div className="paddingX w-full h-full flex flex-col justify-end items-center pb-20 max-sm:pb-40 gap-24">
        <div className="hero-wrapper flex flex-col justify-end items-end">
          <p className="hero-title uppercase font-montserrat font-black leading-[.8] text-[15vw]">
            Sergio
          </p> 
          <div className="font-birthstone text-[96px] max-sm:text-[50px] leading-[.8] flex flex-row">
            <p className="hero-title">G</p>
            <p className="hero-title">u</p>
            <p className="hero-title">z</p>
            <p className="hero-title">m</p>
            <p className="hero-title">a</p>
            <p className="hero-title">n</p>
          </div>

          <div className="flex items-center justify-center w-full pt-8">  
            <p className="hero-subtitle font-montserrat text-[15px] max-sm:text-[13px] text-center">
              Desarrollador Full Stack & <br /> Diseñador Grafico
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;
