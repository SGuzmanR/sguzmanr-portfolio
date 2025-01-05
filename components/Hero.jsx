"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Hero = () => {
  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1,
      delay: 0.5,
      duration: 1,
      translateX: 0,
      ease: "power1.in",
    });
    
    gsap.to('#subtitle', {
      opacity: 1,
      delay: 1,
      duration: 1,
      translateX: 0,
      ease: "power1.out",
    });
  });

  return (
    <section className='w-full h-full min-h-[100vh] py-[6em] px-[2em] flex flex-col justify-center items-center'>
      <div className='mt-6 text-sm md:text-sm lg:text-sm font-semibold max-w-7xl mx-auto text-center relative py-2 bg-clip-text text-transparent'>
        <h1 id="title" className="text-secondaryGray opacity-0 translate-x-20">
        Hola!, Soy Sergio Guzman, Desarollador Full Stack, Diseñador grafico & Tecnico en Computadores
        </h1>
      </div>

      <div>
        <p id="subtitle" className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative py-3 bg-clip-text text-secondaryGrayDarker opacity-0 -translate-x-20">
          Transformando Conceptos en <br /> Experiencias Fluidas
        </p>
      </div>
    </section>
  )
}

export default Hero