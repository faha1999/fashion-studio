import React, { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { Home } from './Components/Home';
import { AnimatePresence } from 'framer-motion';
import { About } from './Components/About';
import { Shop } from './Components/Shop';

function App() {
  const containerRef = useRef(null);

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
      <AnimatePresence>
        <main data-scroll-container ref={containerRef}>
          <Home />
          <About />
          <Shop />
        </main>
      </AnimatePresence>
    </LocomotiveScrollProvider>
  );
}

export default App;
