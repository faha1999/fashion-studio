import React, { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

function App() {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        hello
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
