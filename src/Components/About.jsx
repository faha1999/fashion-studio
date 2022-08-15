import React from 'react';

import img1 from '../assets/Images/1.webp';
import img2 from '../assets/Images/2.webp';
import img3 from '../assets/Images/3.webp';

export const About = () => {
  return (
    <section className="AboutSection" id="fixed-target">
      <h1
        className="title"
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About us
      </h1>

      <div
        className="left"
        data-scroll
        data-scroll-sticky
        data-scroll-target="#fixed-target"
      >
        We're fashion studio based in california. We create unique designs that
        will blow your mind. We also design unique jewellary pieces. Fashion is
        an ART that can not be grasped by everyone.
        <br />
        <br />
        We are very dedicated to making our products. We offer unique and
        creative products to a wide range of people. We have a variety of
        styles, but for most people, all of the options are in the box. We
        specialize in making things that make you happy.
        <br />
        <br />
        We strive to build on our vision. As a fashion label, we do our best to
        create amazing experiences for all people. We are always looking to make
        something that is easy for everyone.
      </div>

      <div className="right">
        <img src={img1} alt="About Us" />
        <img
          data-scroll
          data-scroll-speed="5"
          src={img2}
          className="small-img-1"
          alt="About Us"
        />
        <img
          data-scroll
          data-scroll-speed="-2"
          src={img3}
          alt="About Us"
          className="small-img-2"
        />
      </div>
    </section>
  );
};
