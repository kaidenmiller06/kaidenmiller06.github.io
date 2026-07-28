import { useEffect, useRef, useState } from 'react';

import useSlideUpOnVisible from '../../hooks/useSlideUpOnVisible';

import ExperienceCarousel from '../ui/ExperienceCarousel';

import emergentImg from '../../assets/images/emergent.jpg';
import banquetImg from '../../assets/images/banquetGroup.jpg';
import ccImg from '../../assets/images/codingChallenge.jpg';
import ncurImg from '../../assets/images/ncurPresentation.jpg';
import ncurImg2 from '../../assets/images/ncurGroup.jpg';
import nyltImg from '../../assets/images/nyltPresentation.jpg';

import './Experience.css';

/**
 * A component for displaying the experience section.
 */
function Experience() {
  // References for the section, images container, and the slide-up animation
  const sectionRef = useRef(null);
  const imagesRef = useRef(null);
  const [slideRef, isSlideVisible] = useSlideUpOnVisible(1);

  const [progress, setProgress] = useState(0);
  const [maxSlide, setMaxSlide] = useState(0);

  // Update the progress and maxSlide values on scroll and resize
  useEffect(() => {
    const update = () => {
      if (!sectionRef.current || !imagesRef.current) return;

      setMaxSlide(
        imagesRef.current.scrollWidth - sectionRef.current.clientWidth
      );

      const rect = sectionRef.current.getBoundingClientRect();

      // Calculate the progress of the section's visibility in the viewport
      const p = Math.min(
        Math.max(
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
          0
        ),
        1
      );

      setProgress(p);
    };

    update();

    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="experience-outer" ref={sectionRef}>
      <div className="experience-dark"></div>
        <div className="experience">
        {/* Scrolling images */}
        <div
          ref={imagesRef}
          className="experience-images"
          style={{
            transform: `translateX(-${progress * maxSlide}px)`
          }}
        >
          <img src={ncurImg2} alt="" />
          <img src={banquetImg} alt="" />
          <img src={ccImg} alt="" />
          <img src={ncurImg} alt="" />
          <img src={nyltImg} alt="" />
          <img src={emergentImg} alt="" />
        </div>

        {/* Experience content */}
        <div id="experience" className="experience-inner">
          <h1 ref={slideRef} className={`experience-heading title slide-up ${isSlideVisible ? 'is-visible' : ''}`}>
            Real-world <span className="experience-blue">experience</span>
          </h1>

          <ExperienceCarousel />
        </div>
      </div>
    </section>
  );
}

export default Experience;