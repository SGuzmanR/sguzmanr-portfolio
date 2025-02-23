"use client"

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';


const AboutMe = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top top',
        end: 'bottom center',
        // markers: true,
        toggleActions: "play reverse play reverse",
        scrub: 1,
        pin: true,
      },
    })

    tl.fromTo('.about-title', {
      opacity: 0,
      translateY: -20,
      clipPath: "inset(0% 0% 100% 0%)",
    }, {
      opacity: 1,
      translateY: 0,
      translateX: 0,
      duration: 1,
      stagger: 0.4,
      clipPath: "inset(0% 0% 0% 0%)",
    })

    tl.fromTo(".about-description", {
      translateX: -50,
      opacity: 0
    }, {
      translateX: 0,
      opacity: 1,
      stagger: 0.3,
      duration: 1
    })

    tl.fromTo('.vertical-line', { height: 0 }, {
      height: '100%',
      duration: 5,
      ease: "sine.out",
    });
  }, []);

  return (
    <section id='about' className='relative h-svh bg-white z-20'>
      <div className='vertical-line w-1 h-full bg-radial-black absolute left-[10%] top-0' />

      <div className='h-full w-full flex py-32 paddingX about-wrapper flex-col items-end justify-center text-black text-end text-wrap'>
        <div className='font-bold text-[8vw] flex flex-row'>
          <p className='about-title'>S</p>
          <p className='about-title'>o</p>
          <p className='about-title'>b</p>
          <p className='about-title'>r</p>
          <p className='about-title'>e</p>
          <p className='about-title'> * </p>
          <p className='about-title'>M</p>
          <p className='about-title'>i</p>
        </div>
        <p className='about-description w-[80%] max-sm:w-[90%] max-sm:text-base text-xl'>
          Soy un desarrollador Full Stack, diseñador grafico, 3D y soporte tecnico de Bogotá, Colombia, donde actualmente trabajo como independiente.
        </p>
        <p className='about-description w-[80%] max-sm:w-[90%] max-sm:text-base text-xl'>
          Aprovechando mi experiencia en varios sectores industriales y numerosos proyectos, mi objetivo es crear experiencias web de alta gama que eleven a personas y marcas excepcionales.
        </p>
      </div>
    </section>
  )
};

export default AboutMe;