"use client";

import gsap from "gsap";
import React, { useState, useEffect, useRef } from "react";

const Preloader = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const startLoader = () => {
      let currentValue = 0;

      const updateCounter = () => {
        if (currentValue === 100) return;

        currentValue += Math.floor(Math.random() * 10) + 1;

        if (currentValue > 100) currentValue = 100;

        setCounter(currentValue);

        let delay = Math.floor(Math.random() * 200) + 50;

        setTimeout(updateCounter, delay);
      };

      updateCounter();
    };

    startLoader();

    gsap.to('.counter', 0.25, {
      delay: 3.5,
      opacity: 0,
    });

    gsap.to('.bar', 1.5, {
      delay: 3.5,
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
      onComplete: () => {
        document.querySelector('.preloader').style.display = 'none';
      }
    });
  }, []);

  useEffect(() => {
    if (counter < 100) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [counter]);

  const bars = new Array(10).fill(null);

  return (
    <div className="preloader block">
      <h1 className="counter fixed w-full h-full flex z-50 text-primaryWhite items-center justify-center text-[8vw] font-bold">
        {counter}
      </h1>

      <div className="overlay fixed w-[100vw] h-[100vh] z-40 flex">
        {bars.map((_, i) => (
          <div key={i} className="bar w-[10vw] h-[105vh] bg-secondaryDark" />
        ))}
      </div>
    </div>
  )
}

export default Preloader