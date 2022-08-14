import React from 'react';
import Video from '../assets/Walking Girl.mp4';
import { motion } from 'framer-motion';

const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

export const CoverVideo = () => {
  return (
    <section className="VideoContainer">
      <div className="DarkOverlay"></div>

      <div className="Title">
        <div>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            W
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.09"
            data-scroll-speed="4"
          >
            i
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.06"
            data-scroll-speed="4"
          >
            b
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="4"
          >
            e
          </motion.h1>
        </div>

        <h2
          variants={item}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
        >
          Inspire. Create. Belive
        </h2>
      </div>
      <video src={Video} type="video/mp4" autoPlay muted loop />
    </section>
  );
};
