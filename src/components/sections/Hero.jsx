import './Hero.css';

import ActionLink from '../ui/ActionLink';

import pfp from '../../assets/profile-pic.jpg';
import etown from '../../assets/icons/etown.png';
import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';
import dribbble from '../../assets/icons/dribbble.svg';
import envelope from '../../assets/icons/envelope.svg';

import resume from '../../assets/Resume - Kaiden Miller.pdf';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-eyebrow">Aspiring Software Engineer</p>
          
          <h1 className="hero-heading">
            Hello, I am <br />
            <span className="hero-name">Kaiden Miller</span>
          </h1>

          <div className="hero-details">
            <p>Computer Science Major</p>
            <p>Web and App Design Concentration</p>
            <p>Graphic Design Minor</p>
          </div>

          <ActionLink href="https://www.etown.edu" text="Elizabethtown College, PA" image={etown} />

          <div className="hero-links">
            <ActionLink href="https://linkedin.com/in/kaiden-miller" image={linkedin} />
            <ActionLink href="https://github.com/kaidenmiller06" image={github} />
            <ActionLink href="https://dribbble.com/kaiden-miller-06" image={dribbble} />
            <ActionLink href={resume} text="Resume" variant="accent" />
          </div>
        </div>

        <div className="hero-image">
          <img src={pfp} alt="Kaiden Miller" />
          <ActionLink href="mailto:kaiden.miller.06@gmail.com" text="kaiden.miller.06@gmail.com" image={envelope} />
        </div>
      </div>
    </section>
  );
}

export default Hero;