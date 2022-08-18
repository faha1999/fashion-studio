import React, { useEffect, useRef, useState } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { Home } from './Components/Home';
import { AnimatePresence } from 'framer-motion';
import { About } from './Components/About';
import { Shop } from './Components/Shop';
import { ScrollTriggerProxy } from './partials/ScrollTriggerProxy';
import { Banner } from './Components/Banner';
import { NewArrival } from './Components/NewArrival';
import { Footer } from './Components/Footer';
import { Loader } from './Components/Loader';

function App() {
  const containerRef = useRef(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <AnimatePresence>{loaded ? null : <Loader />}</AnimatePresence>
      <ScrollTriggerProxy />
      <AnimatePresence>
        <main className="App" data-scroll-container ref={containerRef}>
          <Home />
          <About />
          <Shop />
          <Banner />
          <NewArrival />
          <Footer />
        </main>
      </AnimatePresence>
    </LocomotiveScrollProvider>
  );
}

export default App;
