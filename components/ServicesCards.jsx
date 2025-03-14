import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

import { services } from "@/constants";

const ServicesCards = () => {
  const serviceRefs = useRef([]);
  const arrowRef = useRef(null);
  const descriptionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    serviceRefs.current.forEach((service) => {
      const item1 = service.querySelector(".services-card_item1");
      const item2 = service.querySelector(".services-card_item2");
      const icon = service.querySelector(".service-card_icon");
      const container = service.querySelector(".service-card");

      const descriptionWidth = descriptionRef.current.offsetWidth + 50;

      if (window.innerWidth > 1200) {
        gsap.set(item2, { translateX: descriptionWidth });
      }

      service.addEventListener("mouseenter", () => {
        if (window.innerWidth > 1200) {
          gsap.to(item2, {
            translateX: 0,
            ease: "sine.inOut",
          });
        }

        gsap.to(item1, {
          translateX: 0,
          ease: "sine.inOut",
        });

        gsap.to(container, {
          background: "#353535",
          color: "#FAFAFF",
        });

        gsap.to(icon, {
          fill: "#FAFAFA",
        });
      });

      service.addEventListener("mouseleave", () => {
        if (window.innerWidth > 1200) { 
          gsap.to(item2, {
            // translateY: "64px",
            translateX: descriptionWidth
          });
        }

        gsap.to(item1, {
          translateX: "-80px",
        });

        gsap.to(container, {
          background: "#FAFAFF",
          color: "#353535",
        });

        gsap.to(icon, {
          fill: "#353535",
        });
      });
    });
  }, []);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".service-card_wrapper",
        start: "top center",
        end: "bottom center",
        // markers: true,
        toggleActions: "play reverse play reverse",
      }
    })

    tl.fromTo(".service-card", {
      opacity: 0,
      translateY: 20,
    }, {
      opacity: 1,
      translateY: 0,
      stagger: 0.1,
      ease: "power4.inOut",
    })
  }, []);

  return (
    <div className="service-card_wrapper flex flex-row w-full h-full justify-between items-center paddingX">
      <div className="grid grid-cols-4 grid-rows-1 w-full h-screen py-48 max-sm:py-24 justify-center items-end gap-6 max-[1300px]:grid-cols-2 max-[1300px]:grid-rows-2 max-sm:grid-cols-1 max-sm:grid-rows-4 max-sm:gap-5">
        {services.map((service, i) => (
          <div
            key={i}
            className={`service-card h-full w-full border-black border-2 rounded-md flex overflow-hidden cursor-pointer ${service.customStyles}`}
            ref={(el) => (serviceRefs.current[i] = el)}
          >
            <div className="service-card flex flex-col justify-between h-full w-full p-6 gap-3">
              <div className="services-card_item1 flex flex-row gap-6 -translate-x-20 items-center">
                <svg
                  ref={arrowRef}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-12 h-12 max-sm:hidden"
                  fill="#FAFAFF"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 600 600"
                  className="h-full w-12 max-sm:w-9 service-card_icon"
                  fill="#353535"
                >
                  {service.icon}
                </svg>
              </div>

              <div className="services-card_item2 flex flex-col gap-2">
                <h3 ref={titleRef} className="font-bold text-2xl max-sm:text-xl">{service.title}</h3>
                <p ref={descriptionRef} className="font-thin text-sm max-[1200px]:hidden">{service.des}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default ServicesCards;