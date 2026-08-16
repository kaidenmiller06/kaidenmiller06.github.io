import pin from '../../assets/icons/pin-blue.svg';

import './ProjectButton.css';

/**
 * A button component for displaying a project in the portfolio.
 * @param {Object} props - The properties for the ProjectButton component.
 * @param {Object} props.project - The project to display in the button.
 * @param {function} props.onClick - The function to call when the button is clicked.
 * @param {boolean} props.isPinned - Whether the project is pinned.
 */
function ProjectButton({ project, onClick, isPinned = false }) {
  return (
    <button className={`project-button ${isPinned ? 'project-button-pinned' : ''}`} onClick={onClick}>
      {isPinned &&
        <img src={pin} alt="Pin" className="project-button-pin" />
      }
      <img src={project.logo} alt={project.title} className="project-button-icon" />
      <div className="project-button-text">
        <p className="subheading">{project.title}</p>
        <p className="body-bullet">{project.description}</p>
      </div>
    </button>
  );
}

export default ProjectButton;