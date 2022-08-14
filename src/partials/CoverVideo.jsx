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

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      delayChildren: 5, // 2
      staggerChildren: 0.3,
    },
  },
};

export const CoverVideo = () => {
  return (
    <section className="VideoContainer">
      <div className="DarkOverlay"></div>

      <motion.div
        className="Title"
        variants={container}
        initial="hidden"
        animate="show"
      >
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

        <motion.h2
          variants={item}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
        >
          Inspire. Create. Belive
        </motion.h2>
      </motion.div>
      <video src={Video} type="video/mp4" autoPlay muted loop />
    </section>
  );
};
