"use client";
import { useEffect, useRef, useState } from "react";

const marqueeAnimation = (element, elementWidth, windowWidth) => {
  element.animate(
    [
      { transform: "translateX(0)" },
      { transform: `translateX(${windowWidth - elementWidth}px)` },
    ],
    {
      duration: 20000,
      easing: "linear",
      direction: "alternate",
      iterations: Infinity,
    }
  );
};

const MarqueeWrapper = ({ children, className = "" }) => {
  const elementRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);

    if (elementRef.current) {
      const elementWidth = elementRef.current.getBoundingClientRect().width;
      marqueeAnimation(elementRef.current, elementWidth, window.innerWidth);
    }

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!mounted || !elementRef.current || windowWidth === 0) return;

    const elementWidth = elementRef.current.getBoundingClientRect().width;
    marqueeAnimation(elementRef.current, elementWidth, windowWidth);
  }, [mounted, windowWidth]);

  return (
    <div className={`relative overflow-x-hidden ${className}`}>
      <div
        className="inter w-max whitespace-nowrap p-5 lg:p-7"
        ref={elementRef}
      >
        {children}
      </div>
    </div>
  );
};

export default MarqueeWrapper;
