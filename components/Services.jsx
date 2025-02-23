import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#services',
        start: 'top top',
        end: 'bottom center',
        // markers: true,
        toggleActions: "play reverse play reverse",
        scrub: 1,
        pin: true,
      },
    })

    // tl.fromTo('.sevices-title', {
    //   opacity: 0,
    //   translateY: -20,
    //   clipPath: "inset(0% 0% 100% 0%)",
    // }, {
    //   opacity: 1,
    //   translateY: 0,
    //   translateX: 0,
    //   duration: 2,
    //   stagger: 0.8,
    //   clipPath: "inset(0% 0% 0% 0%)",
    // })

    // tl.fromTo(".about-description", {
    //   translateX: -50,
    //   opacity: 0
    // }, {
    //   translateX: 0,
    //   opacity: 1,
    //   stagger: 0.5,
    //   duration: 2
    // })

    tl.fromTo('.services-vertical-line', { height: 0 }, {
      height: '100%',
      duration: 8,
      ease: "sine.out",
    });
  }, []);

  return (
    <section id='services' className='relative h-screen w-full bg-white z-20'>
      <div className='services-vertical-line w-1 h-full bg-radial-black absolute left-[10%] top-0' />

      <div className='h-full w-full flex py-32 paddingX about-wrapper flex-col items-end justify-center text-black text-end text-wrap'>
        {/* Cards for every service that I offer */}
      </div>
    </section>
  )
}

export default Services