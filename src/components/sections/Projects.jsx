import { PROJECTS } from '../../data/projects';
import useSlideUpOnVisible from '../../hooks/useSlideUpOnVisible';

import ProjectCard from '../ui/ProjectCard';

import './Projects.css';

/**
 * A component that displays a list of projects.
 */
function Projects() {
  const [ref, isVisible] = useSlideUpOnVisible(1);

  return (
    <section id="projects" className="projects">
      <div className="projects-inner">
        <h1 ref={ref} className={`projects-heading title slide-up ${isVisible ? 'is-visible' : ''}`}>
          Some of my recent
          <span className="projects-blue"> projects</span>
        </h1>

        <div className="project-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;