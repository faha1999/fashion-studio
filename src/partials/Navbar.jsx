import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import styled from 'styled-components';

const NavContainer = styled(motion.div)`
  top: ${(props) => (props.click ? '0' : `-5rem`)};

  @media (max-width: 40em) {
    top: ${(props) => (props.click ? '0' : `calc(-50vh - 4rem)`)};
  }
`;

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    setClick(!click);
    scroll.scrollTo(elem, {
      offset: '-100',
      duration: '2000',
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };
  return (
    <NavContainer
      className="NavContainer"
      click={+click}
      initial={{
        y: '-100%',
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 2,
        delay: 5,
      }}
    >
      <motion.ul
        className="MenuItems"
        drag="y"
        dragConstraints={{
          top: 0,
          bottom: 70,
        }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        <li className="MenuBtn" onClick={() => setClick(!click)}>
          Menu
        </li>
        <motion.li
          className="MenuItem"
          onClick={() => handleScroll('#home')}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, Y: 0 }}
        >
          Home
        </motion.li>
        <motion.li
          className="MenuItem"
          onClick={() => handleScroll('#about')}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, Y: 0 }}
        >
          About
        </motion.li>
        <motion.li
          className="MenuItem"
          onClick={() => handleScroll('#shop')}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, Y: 0 }}
        >
          Shop
        </motion.li>
        <motion.li
          className="MenuItem"
          onClick={() => handleScroll('#new-arrival')}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, Y: 0 }}
        >
          New Arrival
        </motion.li>
      </motion.ul>
    </NavContainer>
  );
};
