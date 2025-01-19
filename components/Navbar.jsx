"use client"

import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useEffect, useRef } from "react";

import { navLinks, socialLinks } from "@/constants";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const container = useRef();
  const tl = useRef();

  const handleOpenNav = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    };
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  useGSAP(() => {
    gsap.to('.navbar', {
      stagger: {
        amount: 0.5,
      },
      opacity: 1,
      duration: 1.5,
      delay: 4,
      ease: "power4.inOut",
    });
  });

  useEffect(() => {
    if (isScrolled) {
      gsap.to(".navbar", { 
        y: -200, 
        duration: 0.3, 
        ease: 'power4.in' 
      });
    } else {
      gsap.to(".navbar", { 
        y: "0%", 
        duration: 0.3,
        ease: 'power4.out' 
      });
    }
  }, [isScrolled]);

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
      <nav className="fixed top-0 left-0 flex w-full paddingX py-8 z-10 transition-all duration-500">
        <div className="flex flex-row justify-between w-full items-center">
          <Link href="/" className="cursor-pointer uppercase text-[14px] font-medium leading-[100%] no-underline navbar opacity-0">
            <Image 
              src="/logo.svg"
              alt="SGuzmanR Logo"
              width={90}
              height={90}
              className="object-contain"
            />
          </Link>

          <div className="flex flex-row items-center justify-center gap-4 navbar opacity-0">
            <ThemeSwitcher />

            <p className="cursor-pointer uppercase text-[14px] font-medium leading-[100%] no-underline" onClick={handleOpenNav}>
              <Image 
                src="/hm.svg"
                alt="Hamburger Menu Open"
                width={25}
                height={25}
                className="object-contain"
              />
            </p>
          </div>
        </div>
      </nav>

      <div id="navbar-overlay" className="fixed flex top-0 left-0 w-full h-[100vh] p-[2em] pt-20 text-primaryWhite bg-secondaryBlack dark:bg-secondaryDark dark:text-primaryWhite z-30 gap-16 paddingX">
        <div className="fixed flex justify-between items-center top-0 left-0 w-full paddingX py-8 z-10">
          <Link href="/" className="navbar-text">
            <Image 
              src="/logo.svg"
              alt="SGuzmanR Logo"
              width={90}
              height={90}
              className="object-contain"
            />
          </Link>
          
          <div className="navbar-text cursor-pointer" onClick={handleOpenNav}>
            <Image 
              src="/hm_close.svg"
              alt="Hamburger Menu Open"
              width={25}
              height={25}
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex-4 flex flex-col justify-between pt-[2em] w-full">
          <div className="flex flex-col gap-3 w-auto">
            {navLinks.map((link, i) => (
              <div id="navbar-link-item" className="w-max" key={i}>
                <div id="navbar-link-item-holder" className="relative max-[900px]:text-[60px]" onClick={handleOpenNav}>
                  <Link href={link.href} className="flex text-primaryWhite text-[80px] max-sm:text-[40px] font-normal tracking-[-0.02em] leading-[85%] uppercase hover:underline">
                    {link.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-6 max-sm:items-start text-secondaryGrayLight">
            <div className="flex-1 flex flex-col justify-end gap-1">
              {socialLinks.map((link, i) => (
                <Link key={i} href={link.href} className="navbar-text hover:underline" onClick={handleOpenNav}>
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

            <div className="flex-4 flex items-end justify-end">
              <Link href="#contactme" className="navbar-text cursor-pointer hover:font-bold" onClick={handleOpenNav}>
                Contactame
              </Link>
            </div>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Navbar