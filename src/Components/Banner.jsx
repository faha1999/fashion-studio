import React from 'react';

export const Banner = () => {
  return (
    <section className="BannerSection">
      <div className="container" id="up">
        <h1 className="BannerComponent">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#up"
          >
            Fashion is an armour{' '}
          </span>
        </h1>

        <h1 className="BannerComponent">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#up"
          >
            to survive everyday life
          </span>
        </h1>

        <h1 className="BannerComponent">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
          >
            One is never over-dressed or
          </span>
        </h1>

        <h1 className="BannerComponent">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-4"
            data-scroll-target="#up"
          >
            under-dressed
          </span>
        </h1>

        <h1 className="BannerComponent">
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
          >
            with a Little Black Dress
          </span>
        </h1>
      </div>
    </section>
  );
};
