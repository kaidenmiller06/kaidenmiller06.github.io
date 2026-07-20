import './Projects.css';

import ProjectCard from '../ui/ProjectCard';
import { PROJECTS } from '../../data/projects';

function Projects() {
    return (
        <section className="projects">
            <div className="projects-inner">
                <h1 className="projects-heading">
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