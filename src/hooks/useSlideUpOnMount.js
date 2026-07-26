import { useEffect, useState } from 'react';

/**
 * A custom hook that returns a boolean indicating if the element is visible.
 * @returns {boolean} A boolean indicating if the element is visible.
 */
export default function useSlideUpOnMount() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);
  return isVisible;
}