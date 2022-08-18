import React from 'react';
import { CoverVideo } from '../partials/CoverVideo';
import { Logo } from '../partials/Logo';
import { Navbar } from '../partials/Navbar';

export const Home = () => {
  return (
    <section className="home">
      <CoverVideo />
      <Logo />
      <Navbar />
    </section>
  );
};
