import { useState, useEffect, useRef } from 'react';

import { EXPERIENCES } from '../../data/experiences';

import ExperienceCard from '../ui/ExperienceCard';

import './ExperienceCarousel.css';

function ExperienceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleRange, setVisibleRange] = useState(
    window.innerWidth <= 900 ? 1 : 2
  );
  const timerRef = useRef(null);

  // Automatic slide every 6 seconds
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % EXPERIENCES.length);
    }, 10000);
  };

  // Start the timer on mount and clear it on unmount
  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  // Update visible range on window resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleRange(window.innerWidth <= 900 ? 1 : 2);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Use click sets active index and restarts timer
  const handleCardClick = (index) => {
    setActiveIndex(index);
    startTimer();
  };

  return (
    <div className="experience-carousel">
      {EXPERIENCES.map((exp, i) => {
        // calculate shortest distance, wrapping around the array ends
        const total = EXPERIENCES.length;
        let distance = i - activeIndex;
        if (distance > total / 2) distance -= total;
        if (distance < -total / 2) distance += total;

        // only render cards within the visible range (5 by default)
        if (Math.abs(distance) > visibleRange) return null;

        return (
          <div
            key={i}
            className="experience-carousel-slot"
            style={{
              transform: `translateX(${distance * 200}px) scale(${1 - Math.abs(distance) * 0.15})`,
              zIndex: 10 - Math.abs(distance),
            }}
            onClick={() => handleCardClick(i)}
          >
            <ExperienceCard {...exp} />
          </div>
        );
      })}
    </div>
  );
}

export default ExperienceCarousel;