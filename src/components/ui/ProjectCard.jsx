import './ProjectCard.css';

import ActionLink from './ActionLink';

function ProjectCard({ title, subtitle, description, url, image, techIcons, githubLink, otherLink, otherIcon, otherTitle }) {
  return (
    <div className="project-card">
      <div className="project-graphic">
      {url ? (
        <>
          <div className="browser-bar">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="browser-url">{url}</span>
          </div>
          <img src={image} alt={title} className="project-screenshot" />
        </>
      ) : (
        <>
          <div className="phone-bar">
            <span className="dot"></span>
          </div>
          <img src={image} alt={title} className="project-screenshot phone" />
        </>
      )}
      </div>

      <div className="project-info">
        <p className="project-title">{title}</p>
        <p className="project-subtitle">{subtitle}</p>
        <p className="project-description">{description}</p>

        <div className="project-footer">
          <div className="tech-icons">
            {techIcons.map((icon, i) => (
              <div key={i} className="tech-icon-wrapper">
                <img key={i} src={icon.src} alt="" />
                <span className="tech-icon-tooltip">{icon.name}</span>
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