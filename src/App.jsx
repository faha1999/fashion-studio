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
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
        }}
        watch={[]}
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
    </>
  );
}

export default App;
