import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

import { ContactForm } from "./ContactForm";

const Contact = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top center',
        end: 'bottom center',
        // markers: true,
        toggleActions: "play reverse play reverse",
      }
    });

    tl.fromTo(".contact-title", {
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
    .fromTo(".contact-subtitle", {
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
    .fromTo(".contact-form", {
      opacity: 0,
      translateX: 20,
      clipPath: "inset(0% 0% 100% 0%)",
    }, {
      opacity: 1,
      translateX: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "power4.inOut",
      stagger: 0.1,
    });
  }, []); 

  return (
    <section id="contact" className="w-full h-[80vh] flex justify-center items-center paddingX flex-col pt-24">
      <div className="flex text-[8vw] max-sm:text-[12vw] font-extrabold -z-10">
        <p className="contact-title">C</p>
        <p className="contact-title">O</p>
        <p className="contact-title">N</p>
        <p className="contact-title">T</p>
        <p className="contact-title">A</p>
        <p className="contact-title">C</p>
        <p className="contact-title">T</p>
        <p className="contact-title">O</p>
      </div>
      
      <ContactForm />
    </section>
  )
};

export default Contact;