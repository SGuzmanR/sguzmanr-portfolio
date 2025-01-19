"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";

import { projects } from "@/constants"
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".title",{
      scrollTrigger: {
        trigger: ".title",
        start: "top 600px",
        toggleActions: "play none none none",
      },
      y: 0,
      opacity: 1,
      duration: 1
    });
  })

  return (
    <section id="portfolio" className="paddingX">
      <h2 className="title pt-24 text-7xl md:text-5xl lg:text-6xl sm:text-4xl max-sm:text-3xl font-bold text-secondaryGrayDark dark:text-primaryWhite opacity-0 translate-y-20">
        PROYECTOS
      </h2>

      <div className="pt-5">
        Filter (Diseño paginas web, Publicidad, Brading, )
      </div>

      <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 items-center justify-center py-4 gap-10 mt-3 text-primaryWhite w-full">
        {projects.map((project) => (
          <div key={project.id} className="flex items-center justify-center bg-secondaryGrayLight/50 rounded-xl w-full">
            <div className="">
              <img
                src="/p4.svg"
                alt="Project Image"
                className="object-contain w-auto bg-cover"
              />
              {project.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects