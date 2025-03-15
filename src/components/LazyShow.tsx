import React, { RefObject, useEffect, useRef, useState } from 'react';

import { motion, useAnimation } from 'framer-motion';

// Custom hook to detect whether the element is in view
function useOnScreen(
  ref: RefObject<HTMLDivElement | null>,
  rootMargin = '0px'
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    let currentRef: any = null;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIntersecting(entry?.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref && ref?.current) {
      currentRef = ref.current;
      observer.observe(currentRef);
    }
    return () => {
      observer.unobserve(currentRef);
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}

// LazyShow Component with motion.div
const LazyShow = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const rootRef = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(rootRef);

  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: 'easeOut',
        },
      });
    }
  }, [onScreen, controls]);

  return (
    <motion.div
      className="lazy-div"
      ref={rootRef}
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default LazyShow;
