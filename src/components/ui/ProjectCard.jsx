import ActionLink from './ActionLink';

import './ProjectCard.css';

/**
 * A component for displaying a project card.
 * @param {Object} props - The properties for the project card.
 * @param {string} props.title - The title of the project.
 * @param {string} props.subtitle - The subtitle of the project.
 * @param {string} props.description - The description of the project.
 * @param {string} props.url - The URL of the project.
 * @param {string} props.image - The image of the project.
 * @param {Array} props.techIcons - The technology icons for the project.
 * @param {string} props.githubLink - The GitHub link for the project.
 * @param {string} props.otherLink - The other link for the project.
 * @param {string} props.otherIcon - The other icon for the project.
 * @param {string} props.otherTitle - The other title for the project.
 */
function ProjectCard({ title, subtitle, description, url, image, techIcons, githubLink, otherLink, otherIcon, otherTitle }) {
  return (
    <div className="project-card">
      <div className="project-graphic">
        {url ? (
          // Web view if URL is provided
          <>
            <div className="browser-bar">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="browser-url body-base">{url}</span>
            </div>
            <img src={image} alt={title} className="project-screenshot" />
          </>
        ) : (
          // Phone view if no URL is provided
          <>
            <div className="phone-bar">
              <span className="dot"></span>
            </div>
            <img src={image} alt={title} className="project-screenshot phone" />
          </>
        )}
      </div>

      <div className="project-info">
        <p className="project-title heading">{title}</p>
        <p className="project-subtitle subheading">{subtitle}</p>
        <p className="project-description body-base">{description}</p>

        <div className="project-footer">
          <div className="tech-icons">
            {techIcons.map((icon, i) => (
              <div key={i} className="tech-icon-wrapper">
                <img key={i} src={icon.src} alt="" />
                <span className="tech-icon-tooltip body-base">{icon.name}</span>
              </div>
            ))}
          </div>

          <div className="project-links">
            <ActionLink href={githubLink} text="GitHub" variant="outline" />
            <ActionLink href={otherLink} image={otherIcon} title={otherTitle} variant="outline" />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ProjectCard;