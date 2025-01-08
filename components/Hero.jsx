"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Link from "next/link";

import { BackgroundBeams } from "./ui/background-beams";

const Hero = () => {
  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1,
      delay: 0.5,
      duration: 1,
      ease: "power1.in",
    });
    
    gsap.to('.subtitle', {
      opacity: 1,
      delay: 1,
      duration: 1,
      translateY: 0,
      ease: "power1.out",
    });
  });

  return (
    <section className='w-full py-36 paddingX flex flex-col justify-center items-center text-wrap h-[100vh]'>
      <div className='text-sm font-normal text-center'>
        <h1 id="title" className="text-secondaryGrayLight opacity-0">
          Hola! Soy <span>Sergio Guzman</span> <br /> Desarrollador Full Stack - Diseñador Grafico - Tecnico Computadores
        </h1>
      </div>

      <div>
        <p className="mt-4 text-7xl md:text-5xl lg:text-6xl sm:text-4xl max-sm:text-3xl font-bold text-center text-secondaryGrayDark dark:text-primaryWhite subtitle opacity-0 translate-y-20">
          Transformando Conceptos en <br /> Experiencias Fluidas
        </p>
      </div>

      <div className="mt-14">
        <Link href="https://www.linkedin.com/in/sergio-g-308737295/" className="rounded-3xl text-base bg-secondaryGrayDark hover:bg-transparent hover:border-secondaryGrayDark border-secondaryGrayDark border-2 text-primaryWhite hover:text-secondaryGrayLight px-6 py-4 transition-all duration-300 subtitle opacity-0">Trabaja Conmigo</Link>
      </div>

      <BackgroundBeams />
    </section>
  )
}

export default Hero