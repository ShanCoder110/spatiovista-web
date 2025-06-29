"use client";

import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

const SpinningGlobe = () => {
  const globeRef = useRef();
  const [globeHeight, setGlobeHeight] = useState(700);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setGlobeHeight(width < 768 ? 500 : 700); // Mobile <768px gets 500px height
    };

    handleResize(); // initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!globeRef.current) return;

    const globe = globeRef.current;
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;
    globe.controls().enableZoom = false;
  }, []);

  return (
    <div>
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        backgroundColor="rgba(0,0,0,0)"
        width={500}
        height={globeHeight}
      />
    </div>
  );
};

export default SpinningGlobe;
