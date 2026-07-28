import { useEffect, useRef, useState } from 'react';

/**
 * A custom hook that returns a ref and a boolean indicating if the element is visible.
 * @param {number} threshold - The threshold for the IntersectionObserver (default is 0.1).
 * @returns {Array} An array containing the ref and the visibility state.
 */
export default function useSlideUpOnVisible(threshold = 0.1) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Set up an IntersectionObserver to detect when the element is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}