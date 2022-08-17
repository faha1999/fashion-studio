import React from 'react';

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
  return (
    <section className="NewArrivalSection">
      <div className="Overlay"></div>
      <h1
        className="Title"
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        New Arrivals
      </h1>

      <div className="Container">
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
