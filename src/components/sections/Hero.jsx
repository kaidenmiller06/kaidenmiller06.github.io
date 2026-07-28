import useSlideUpOnVisible from '../../hooks/useSlideUpOnVisible';

import ActionLink from '../ui/ActionLink';

import pfp from '../../assets/profile-pic.jpg';
import etown from '../../assets/icons/etown.png';
import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';
import dribbble from '../../assets/icons/dribbble.svg';
import envelope from '../../assets/icons/envelope.svg';

import './Hero.css';

/**
 * A component that displays the hero section of the website.
 */
function Hero() {
  const [ref, isVisible] = useSlideUpOnVisible(1);

  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        {/* Hero Content */}
        <div className="hero-text">
          <p className="hero-eyebrow subheading">Aspiring Software Engineer</p>
          
          <h1 ref={ref} className="hero-heading title">
            <span className={`slide-up ${isVisible ? 'is-visible' : ''}`}>Hello, I am</span> <br />
            <span className={`hero-blue slide-up ${isVisible ? 'is-visible' : ''} delay-1`}>Kaiden Miller</span>
          </h1>

          <div className="hero-details subheading">
            <p>Computer Science Major</p>
            <p>Web and App Design Concentration</p>
            <p>Graphic Design Minor</p>
          </div>

          <ActionLink href="https://www.etown.edu" text="Elizabethtown College, PA" image={etown} />

          <div className="hero-links">
            <ActionLink href="https://linkedin.com/in/kaiden-miller" image={linkedin} />
            <ActionLink href="https://github.com/kaidenmiller06" image={github} />
            <ActionLink href="https://dribbble.com/kaiden-miller-06" image={dribbble} />
            <ActionLink href={'/Resume - Kaiden Miller.pdf'} text="Resume" variant="accent" />
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-profile">
          {/* Animated Profile Picture */}
          <div className="hero-profile-wrapper">
            <img className="hero-profile-image" src={pfp} alt="Kaiden Miller" />
            <svg
              className="hero-ring"
              viewBox="0 0 320 320"
            >
              <circle
                cx="160"
                cy="160"
                r="155"
                fill="none"
                stroke="#004B98"
                strokeWidth="4"
                strokeDasharray="65 30 10 25"
              />
            </svg>
            <span className="hero-tooltip body-base">
              console.log("Hello World!");
            </span>
          </div>

          <ActionLink href="mailto:kaiden.miller.06@gmail.com" text="kaiden.miller.06@gmail.com" image={envelope} />
        </div>
      </div>
    </section>
  );
}

export default Hero;