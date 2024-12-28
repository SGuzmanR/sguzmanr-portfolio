"use client"

import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useEffect, useRef } from "react";

import { navLinks, socialLinks } from "@/constants";

const Navbar = () => {
  const container = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const tl = useRef();

  const handleOpenNav = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(() => {
    gsap.set("#navbar-link-item-holder", { y: 75 });

    tl.current = gsap.timeline({ paused: true })
      .to("#navbar-overlay", {
        duration: .50,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut"
      })
      .to("#navbar-link-item-holder", {
        y: 0,
        duration: .70,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: -0.50,
      })
  }, []);

  useEffect(() => {
    if (isOpen) {
      tl.current.play();
      document.body.style.overflow = 'hidden';
    } else {
      tl.current.reverse();
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <header ref={container}>
      <nav className={`fixed flex justify-between items-center top-0 left-0 w-[100vw] px-[2em] py-8 z-10 transition-all duration-500`}>
        <div>
          <Link href="/" className="text-white cursor-pointer uppercase text-[14px] font-medium leading-[100%] no-underline">
            SGuzmanR
          </Link>
        </div>

        <div onClick={handleOpenNav}>
          <p className="text-white cursor-pointer uppercase text-[14px] font-medium leading-[100%] no-underline">
            Menu
          </p>
        </div>
      </nav>

      <div id="navbar-overlay" className="fixed flex top-0 left-0 w-[100vw] h-[100vh] p-[2em] pt-16 bg-neutral-900 z-20 gap-16">
        <div className="fixed flex justify-between items-center top-0 left-0 w-[100vw] p-[2em] z-10">
          <div>
            <Link href="/" className="navbar-text">SGuzmanR</Link>
          </div>
          <div className="menu-close" onClick={handleOpenNav}>
            <p className="navbar-text cursor-pointer">Close</p>
          </div>
        </div>

        <div className="flex-2 flex items-end cursor-pointer max-[900px]:hidden" onClick={handleOpenNav}>
          <p className="text-[100px] leading-[70%] text-white hover:scale-105 transition-all duration-500">&#x2715;</p>
        </div>

        <div className="flex-4 flex flex-col justify-between pt-[2em] w-full">
          <div className="flex flex-col gap-3 w-auto">
            {navLinks.map((link, i) => (
              <div id="navbar-link-item" className="w-max" key={i}>
                <div id="navbar-link-item-holder" className="relative max-[900px]:text-[60px]" onClick={handleOpenNav}>
                  <Link href={link.href} className="flex text-white text-[80px] max-sm:text-[40px] font-normal tracking-[-0.02em] leading-[85%] uppercase hover:underline">
                    {link.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-6 max-sm:items-start">
            <div className="flex-1 flex flex-col justify-end gap-1">
              {socialLinks.map((link, i) => (
                <Link key={i} href={link.href} className="navbar-text hover:underline">
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex-1 flex flex-col justify-end gap-2">
              <p className="navbar-text">
                <Link href="mailto:sguzmanr2@gmail.com" className="hover:underline">
                sguzmanr2@gmail.com
                </Link>
              </p>
            </div>

            {/* <div className="flex-4 flex items-end justify-end">
              <p className="navbar-text cursor-pointer hover:font-bold">View Showreel</p>
            </div> */}
          </div>
        </div>

      </div>
    </header>
  )
}

export default Navbar