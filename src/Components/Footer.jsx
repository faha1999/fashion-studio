import React from 'react';
import { motion } from 'framer-motion';

import Logo from '../assets/Svgs/star_white_48dp.svg';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

export const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);

    scroll.scrollTo(elem, {
      offset: '-100',
      duration: '2000',
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <section className="FooterContainer">
      <div className="LogoContainer">
        <img data-scroll data-scroll-speed="2" src={Logo} alt="Wibe Studio" />
        <h3 data-scroll data-scroll-speed="-1">
          Wibe Studio
        </h3>
      </div>

      <motion.footer
        initial={{ y: '-400px' }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li onClick={() => handleScroll('#home')}>home</li>
          <li onClick={() => handleScroll('.about')}>about</li>
          <li onClick={() => handleScroll('#shop')}>shop</li>
          <li onClick={() => handleScroll('#new-arrival')}>new arrival</li>
          <li>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              look book
            </a>
          </li>
          <li>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              reviews
            </a>
          </li>
        </ul>

        <div className="Bottom">
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; {new Date().getFullYear()}. All Rights Reserved.
          </span>
          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Made with &hearts; by &nbsp;{' '}
            <a
              href="https://github.com/faha1999"
              target="_blank"
              rel="noreferrer"
            >
              faha1999
            </a>
          </span>
        </div>
      </motion.footer>
    </section>
  );
};
