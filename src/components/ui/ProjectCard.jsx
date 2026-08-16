import { useNavigate } from 'react-router-dom';

import ActionLink from './ActionLink';

import './ProjectCard.css';

/**
 * A component for displaying a project card.
 * @param {Object} props - The properties for the project card.
 * @param {Object} props.project - The project object.
 */
function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleClick = (project) => {
    navigate('/portfolio', { state: { selectedProject: project } });
  };
  
  return (
    <button className="project-card" onClick={() => handleClick(project)}>
      <div className="project-graphic">
        {project.url ? (
          // Web view if URL is provided
          <>
            <div className="browser-bar">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="browser-url body-base">{project.url}</span>
            </div>
            <img src={project.image} alt={project.title} className="project-screenshot" />
          </>
        ) : (
          // Phone view if no URL is provided
          <>
            <div className="phone-bar">
              <span className="dot"></span>
            </div>
            <img src={project.image} alt={project.title} className="project-screenshot phone" />
          </>
        )}
      </div>

      <div className="project-info">
        <p className="project-title heading">{project.title}</p>
        <p className="project-subtitle subheading">{project.subtitle}</p>
        <p className="project-description body-base">{project.description}</p>

        <div className="project-footer">
          <div className="tech-icons">
            {project.techIcons.slice(0, 5).map((icon, i) => (
              <div key={i} className="tech-icon-wrapper">
                <img src={icon.src} alt="" />
                <span className="tech-icon-tooltip body-base">{icon.name}</span>
              </div>
            ))}
          </div>

          <div className="project-links">
            <ActionLink href={project.githubLink} text="GitHub" variant="outline" />
            <ActionLink href={project.otherLink} image={project.otherIcon} title={project.otherTitle} variant="outline" />
          </div>
        </div>
        
      </div>
    </button>
  );
}

export default ProjectCard;