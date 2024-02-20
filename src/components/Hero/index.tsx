import { useEffect, useRef, useState } from 'react';
import { useScroll } from 'framer-motion';

const MAX_OPACITY = 0.7;
const MIN_OPACITY = 0;

export default function Hero() {
  const [opacity, setOpacity] = useState(MAX_OPACITY);

  const backgroundRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  useEffect(() => {
    if (!backgroundRef.current) return;

    const backgroundHeight = backgroundRef.current.offsetHeight;

    scrollY.on('change', (latestValue) => {
      const opacity = (backgroundHeight - latestValue) / backgroundHeight;
      setOpacity(
        opacity > MAX_OPACITY
          ? MAX_OPACITY
          : opacity < MIN_OPACITY
            ? MIN_OPACITY
            : opacity,
      );
    });
  }, [scrollY]);

  return (
    <section className="bg-black">
      <div className="sticky top-0">
        <div
          className="relative h-[calc(100svh-80px-200px)] bg-hero-1 bg-cover bg-center bg-no-repeat"
          ref={backgroundRef}
          style={{ opacity: opacity }}
        ></div>
        <div className="h-[200px]" />
      </div>
    </section>
  );
}
