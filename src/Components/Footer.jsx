import React from 'react';

import Logo from '../assets/Svgs/star_white_48dp.svg';

export const Footer = () => {
  return (
    <section className="FooterContainer">
      <div className="LogoContainer">
        <img data-scroll data-scroll-speed="2" src={Logo} alt="Wibe Studio" />
        <h3 data-scroll data-scroll-speed="-1">
          Wibe Studio
        </h3>
      </div>

      <footer>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>shop</li>
          <li>new arrival</li>
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
          <span>
            {' '}
            &copy; {new Date().getFullYear()}. All Rights Reserved. Made with
            &hearts; by &nbsp;{' '}
            <a
              href="https://github.com/faha1999"
              target="_blank"
              rel="noreferrer"
            >
              faha1999
            </a>
          </span>
        </div>
      </footer>
    </section>
  );
};
