"use client"

import gsap from 'gsap';
import { useState, useEffect, useRef } from 'react';

import { projects } from '@/constants';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollAllowed, setScrollAllowed] = useState(true);
  const lastScrollTime = useRef(0);

  const totalSlides = projects.length;

  const sliderRef = useRef(null);
  const mainImageContainerRef = useRef(null);
  const titleContainerRef = useRef(null);
  const descriptionContainerRef = useRef(null);
  const counterContainerRef = useRef(null);

  const createSlide = (slideNumber, direction) => {
    const slide = document.createElement('div');
    slide.className = 'slide';

    const slideBgImg = document.createElement('div');
    slideBgImg.className = 'slide-bg-img';

    const img = document.createElement('img');
    img.src = `${projects[slideNumber].imgAlt}`;
    img.alt = `${projects[slideNumber].title}`;

    slideBgImg.appendChild(img);
    slide.appendChild(slideBgImg);

    if (direction === 'down') {
      slideBgImg.style.clipPath = 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)';
    } else {
      slideBgImg.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)';
    }

    return slide;
  };

  const createMainImageWrapper = (slideNumber, direction) => {
    const wrapper = document.createElement('a');
    wrapper.className = 'slide-main-img-wrapper';
    wrapper.href = `${projects[slideNumber].link}`;
    wrapper.target = "_blank"

    const img = document.createElement('img');
    img.src = `${projects[slideNumber].img}`;
    img.alt = `${projects[slideNumber].title}`;

    wrapper.appendChild(img);

    if (direction === 'down') {
      wrapper.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)';
    } else {
      wrapper.style.clipPath = 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)';
    }

    return wrapper;
  };

  const createTextElements = (slideNumber, direction) => {
    const newTitle = document.createElement('h3');
    newTitle.textContent = projects[slideNumber].title;
    gsap.set(newTitle, {
      y: direction === 'down' ? 50 : -50,
    });

    const newDescription = document.createElement('p');
    newDescription.textContent = projects[slideNumber].des;
    gsap.set(newDescription, {
      y: direction === 'down' ? 20 : -20,
    });

    const newCounter = document.createElement('p');
    newCounter.textContent = slideNumber + 1;
    gsap.set(newCounter, {
      y: direction === 'down' ? 18 : -18,
    });

    return { newTitle, newDescription, newCounter };
  };

  const animateSlide = (direction) => {
    if (isAnimating || !scrollAllowed) return;

    setIsAnimating(true);
    setScrollAllowed(false);

    const slider = sliderRef.current;
    const currentSlideElement = document.querySelector('.slide');
    const mainImageContainer = mainImageContainerRef.current;
    const currentMainWrapper = mainImageContainer.querySelector('.slide-main-img-wrapper');

    const titleContainer = titleContainerRef.current;
    const descriptionContainer = descriptionContainerRef.current;
    const counterContainer = counterContainerRef.current;

    const currentTitle = titleContainer.querySelector('h3');
    const currentDescription = descriptionContainer.querySelector('p');
    const currentCounter = counterContainer.querySelector('p');

    const newSlide = createSlide(currentSlide, direction);
    const newMainWrapper = createMainImageWrapper(currentSlide, direction);
    const { newTitle, newDescription, newCounter } = createTextElements(currentSlide, direction);

    slider.appendChild(newSlide);
    mainImageContainer.appendChild(newMainWrapper);
    titleContainer.appendChild(newTitle);
    descriptionContainer.appendChild(newDescription);
    counterContainer.appendChild(newCounter);

    gsap.set(newMainWrapper.querySelector('img'), {
      y: direction === 'down' ? '-50%' : '50%',
    });

    const tl = gsap.timeline({
      onComplete: () => {
        [currentSlideElement, currentMainWrapper, currentTitle, currentDescription, currentCounter].forEach((e) =>
          e?.remove()
        );

        setIsAnimating(false);

        setTimeout(() => {
          setScrollAllowed(true);
          lastScrollTime.current = Date.now();
        }, 100);

        setCurrentSlide((prevSlide) => {
          if (direction === 'down') {
            return prevSlide === totalSlides - 1 ? 0 : prevSlide + 1;
          } else {
            return prevSlide === 0 ? totalSlides - 1 : prevSlide - 1;
          }
        });
      },
    });

    tl.to(newSlide.querySelector('.slide-bg-img'), {
      clipPath:
        direction === 'down'
          ? 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)'
          : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration: 1.25,
      ease: 'power2.inOut',
    }, 0)
      .to(currentSlideElement.querySelector('img'), {
        scale: 1.5,
        duration: 1.25,
        ease: 'power2.inOut',
      }, 0)
      .to(newMainWrapper, {
        clipPath:
          direction === 'down'
            ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
            : 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        duration: 1.25,
        ease: 'power2.inOut',
      }, 0)
      .to(currentMainWrapper.querySelector('img'), {
        y: direction === 'down' ? '50%' : '-50%',
        duration: 1.25,
        ease: 'power2.inOut',
      }, 0)
      .to(newMainWrapper.querySelector('img'), {
        y: '0%',
        duration: 1.25,
        ease: 'power2.inOut',
      }, 0)
      .to(currentTitle, {
        y: direction === 'down' ? -50 : 50,
        duration: 1.25,
        ease: 'power2.inOut',
      }, 0)
      .to(newTitle, {
        y: 0,
        duration: 1.25,
        ease: 'power2.inOut',
      }, 0)
      .to(currentDescription, {
        y: direction === 'down' ? -20 : 20,
        duration: 1.25,
        ease: 'power2.inOut',
      }, 0)
      .to(newDescription, {
        y: 0,
        duration: 1.25,
        ease: 'power2.inOut',
      }, 0)
      .to(currentCounter, {
        y: direction === 'down' ? -18 : 18,
        duration: 1.25,
        ease: 'power2.inOut',
      }, 0)
      .to(newCounter, {
        y: 0,
        duration: 1.25,
        ease: 'power2.inOut',
      }, 0);
  };

  const handlePrevSlide = () => {
    animateSlide('up');
  };

  const handleNextSlide = () => {
    animateSlide('down');
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.slider',
        start: 'top center',
        end: 'bottom bottom',
        // markers: true,
        toggleActions: "play reverse play reverse",
        scrub: 1,
      },
    })

    tl.fromTo(".slider", {
      opacity: 0,
      translateX: "-100%"
    }, {
      opacity: 1,
      translateX: 0,
      ease: "sine.inOut",
      duration: 2
    })

    tl.fromTo(".slide-main-img", {
      opacity: 0,
      translateY: "100%"
    }, {
      opacity: 1,
      translateY: 0,
      ease: "sine.inOut",
      duration: 2
    })

    tl.fromTo(".slide-copy", {
      opacity: 0,
    }, {
      opacity: 1,
      ease: "sine.inOut",
      duration: 2
    })
  }, []);
  
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#slide',
        start: 'top top',
        end: 'bottom center',
        // markers: true,
        toggleActions: "play reverse play reverse",
        scrub: 1,
        pin: true,
      },
    })
  }, []);

  return (
    <section id='portfolio' className='w-full h-auto'>
      <div id='slide' className='relative text-white w-full h-auto'>
        <div className='slide-footer'>
          <button type='button' onClick={handlePrevSlide}>&lt;</button>          
          <div className="slide-counter">
            <div className="count" ref={counterContainerRef}>
              <p>1</p>
            </div>
            <p>/</p>
            <p>{projects.length}</p>
          </div>

          <button type='button' onClick={handleNextSlide}>&gt;</button>
        </div>

        <div className="slider" ref={sliderRef}>
          <div className="slide">
            <div className="slide-bg-img">
              <img src={projects[0].img} alt={projects[0].title} />
            </div>
          </div>

          <div className="slide-main-img" ref={mainImageContainerRef}>
            <a className="slide-main-img-wrapper" href={projects[0].link}>
              <img src={projects[0].imgAlt} alt={projects[0].title} />
            </a>
          </div>

          <div className="slide-copy">
            <div className="slide-title" ref={titleContainerRef}>
              <h3>{projects[0].title}</h3>
            </div>
            <div className="slide-description" ref={descriptionContainerRef}>
              <p>{projects[0].des}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;