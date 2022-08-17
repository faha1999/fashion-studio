import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import img1 from '../assets/Images/11.webp';
import img2 from '../assets/Images/12.webp';
import img3 from '../assets/Images/13.webp';
import img4 from '../assets/Images/14.webp';

const Product = ({ img, title = '' }) => {
  return (
    <div className="item">
      <img src={img} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};

export const NewArrival = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = ScrollingRef.current;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: 'bottom+=100% top-=100%',
          scroller: '.App', // locomotive element
          scrub: true,
          pin: true,
          //   markers:true,
        },
        // we have to increase scrolling height of this section same as the scrolling element width
        ease: 'none,',
      });

      // Verticle Scrolling
      t1.fromTo(
        scrollingElement,
        {
          y: '0',
        },

        {
          y: '-100%',
          scrollTrigger: {
            trigger: scrollingElement,
            start: 'top top',
            end: 'bottom top',
            scroller: '.App', // locomotive element
            scrub: true,

            // markers: true,
          },
          // we have to increase scrolling height of this section same as the scrolling element width
        },
      );
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      // Let's clear instances
      //t1.kill();
      //ScrollTrigger.kill();
    };
  }, []);

  return (
    <section className="NewArrivalSection" ref={ref} id="new-arrival">
      <div className="Overlay"></div>
      <h1
        className="Title"
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        New Arrivals
      </h1>

      <div className="Container" ref={ScrollingRef}>
        <Product img={img1} title="Denim" />
        <Product img={img2} title="Cool Dresses" />
        <Product img={img3} title="Jackets" />
        <Product img={img4} title="T-shirts" />
      </div>

      <div className="text" data-scroll data-scroll-speed="-4">
        There is new collection available for cool clothes in all sizes. This
        collection is a great way to find a new look for you. It offers a
        variety of cool apparel styles to fit your taste, while you can also
        find some cool clothes that you can wear everyday.
        <br />
        <br />
        The first line of clothing you will see on this collection is for men.
        The collection also includes three new styles for women.
        <br />
        <br />
        Give it a try and experience a new look.
      </div>
    </section>
  );
};
