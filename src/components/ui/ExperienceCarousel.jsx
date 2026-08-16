import { useState, useEffect, useRef } from 'react';

import { EXPERIENCES } from '../../data/experiences';

import ExperienceCard from '../ui/ExperienceCard';

import './ExperienceCarousel.css';

/**
 * Displays a carousel of experience cards, allowing users to navigate through experiences with automatic sliding and manual controls.
 */
function ExperienceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const getVisibleRange = () => {
    if (window.innerWidth <= 768) return 0;
    if (window.innerWidth <= 1080) return 1;
    return 2;
  };

  const [visibleRange, setVisibleRange] = useState(getVisibleRange());
  const timerRef = useRef(null);
  const isPausedRef = useRef(false);

  // Automatic slide every 10 seconds (if not paused)
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setActiveIndex((prev) => (prev + 1) % EXPERIENCES.length);
      }
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
      setVisibleRange(getVisibleRange());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // User click sets active index and restarts timer
  const handleCardClick = (index) => {
    setActiveIndex(index);
    startTimer();
  };

  // Go to previous/next card, wrapping around the ends
  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + EXPERIENCES.length) % EXPERIENCES.length);
    startTimer();
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % EXPERIENCES.length);
    startTimer();
  };

  // Pause/resume the auto-slide on hover
  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  return (
    <div className="experience-carousel-wrapper">
      <div className="experience-carousel"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Map all experiences */}
        {EXPERIENCES.map((exp, i) => {
          const total = EXPERIENCES.length;
          let distance = i - activeIndex;
          if (distance > total / 2) distance -= total;
          if (distance < -total / 2) distance += total;

          if (Math.abs(distance) > visibleRange) return null;

          return (
            <div
              key={i}
              className="experience-carousel-slot"
              style={{
                transform: `translateX(${distance * 190}px) scale(${1 - Math.abs(distance) * 0.15})`,
                zIndex: 10 - Math.abs(distance),
              }}
              onClick={() => handleCardClick(i)}
            >
              <ExperienceCard {...exp} />
            </div>
          );
        })}
      </div>

      {/* Navigation arrows when screen is small */}
      {visibleRange < 2 && (
        <div className="experience-carousel-arrows">
          <button
            className="experience-carousel-arrow"
            onClick={goToPrev}
            aria-label="Previous experience"
          >
            ‹
          </button>
          <button
            className="experience-carousel-arrow"
            onClick={goToNext}
            aria-label="Next experience"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}

export default ExperienceCarousel;