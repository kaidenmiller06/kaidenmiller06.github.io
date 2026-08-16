import SkillPill from './SkillPill';

import './ExperienceCard.css';

/**
 * A component for displaying an experience card.
 * @param {Object} props - The properties for the experience card.
 * @param {string} props.image - The image of the experience.
 * @param {string} props.title - The title of the experience.
 * @param {string} props.subtitle - The subtitle of the experience.
 * @param {Array} props.bullets - The list of bullets for the experience.
 * @param {Array} props.skills - The list of skills for the experience.
 */
function ExperienceCard({ image, title, subtitle, bullets, skills }) {
  return (
    <div className="experience-card">
      <img src={image} alt={title} className="experience-image" />

      <div className="experience-info">
        <p className="experience-title heading">{title}</p>
        <p className="experience-subtitle subheading">{subtitle}</p>
        <ul>
          {bullets.map((bullet, index) => (
            <li key={index} className="experience-bullet body-bullet">{bullet}</li>
          ))}
        </ul>
      </div>

      <div className="experience-footer">
        {skills.map((text, i) => (
          <SkillPill key={i} text={text.skill} image={text.src} variant="outline" />
        ))}
      </div>
    </div>
  );
}

export default ExperienceCard;