"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";

import { projects } from "@/constants"
import { useGSAP } from "@gsap/react";

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".title",{
      scrollTrigger: {
        trigger: ".title",
        start: "top center",
        end: "botton top",
        toggleActions: "play none none restart"
      },
      x: 0,
      opacity: 1,
      duration: 1
    });
  })

  return (
    <section className="py-20">
      <h2 className="title opacity-0 -translate-x-40">P R</h2>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 text-secondaryGrayLight">
        {projects.map((project) => (
          <div key={project.id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
            <div className="">
              {project.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects