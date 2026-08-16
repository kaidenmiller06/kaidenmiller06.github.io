import { useState, useEffect } from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';

import { PORTFOLIO } from '../../data/portfolio';
import { PROJECTS } from '../../data/projects';

import ActionLink from '../ui/ActionLink';
import ProjectButton from '../ui/ProjectButton';
import PortfolioPill from '../ui/PortfolioPill';
import SkillPill from '../ui/SkillPill';

import build from '../../assets/icons/build.svg';
import home from '../../assets/icons/home.svg';
import palette from '../../assets/icons/palette.svg';
import project from '../../assets/icons/project.svg';
import communication from '../../assets/icons/communication.svg';
import problemSolving from '../../assets/icons/problem-solving.svg';
import teamwork from '../../assets/icons/teamwork.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';
import dribbble from '../../assets/icons/dribbble.svg';
import envelope from '../../assets/icons/envelope.svg';

import pfp from '../../assets/profile-pic.jpg';
import collage from '../../assets/portfolio/miller-etown-collage.png';
import scad from '../../assets/portfolio/miller-scad-poster.png';
import comboMark from '../../assets/portfolio/miller-comboMark.png';
import madMax from '../../assets/portfolio/miller-madMax-poster.png';
import mandoS3 from '../../assets/portfolio/theMandalorianS3.png';
import squidGame from '../../assets/portfolio/miller-squidGame.png';
import card1 from '../../assets/portfolio/miller-stationarySet-card1.png';
import card2 from '../../assets/portfolio/miller-stationarySet-card2.png';
import letter from '../../assets/portfolio/miller-stationarySet-letter.png';

import './Portfolio.css';

/**
 * A component that displays the portfolio section of the website.
 * Uses a responsive grid layout that changes based on the window width and user interactions.
 */
function Portfolio() {
  const location = useLocation();
  const navigate = useNavigate();
  const [sandboxOpen, setSandboxOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effect to handle window resize events and update the window width state.
  // If the window width exceeds 900px, the sandbox is automatically closed.
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      if (newWidth > 900) {
        setSandboxOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Effect to handle navigation to the portfolio page with a selected project.
  // If a project is passed in the location state, it opens the project details view.
  useEffect(() => {
    if (location.state?.selectedProject) {
      handleProjectClick(location.state.selectedProject);
    }
  }, [location.state]);

  /**
   * Chunks an array of images into a specified number of columns.
   * @param {Array<{src: string, alt: string}>} images 
   * @param {number} columns 
   * @returns An array of arrays, where each inner array represents a column of images.
   */
  function chunkIntoColumns(images, columns) {
    const result = Array.from({ length: columns }, () => []);
    images.forEach((image, i) => {
      result[i % columns].push(image);
    });
    return result;
  }

  const handleMainToggle = () => {
    setProjectOpen(false);
    setSandboxOpen(false);
  }

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setProjectOpen(true);
  };

  const handleSandboxToggle = () => {
    setSandboxOpen(!sandboxOpen);
    setProjectOpen(false);
  }

  return (
    <section id="portfolio" className="portfolio">
      <div className={
        `portfolio-grid
        ${sandboxOpen ? 'sandbox-open' : ''}
        ${projectOpen ? 'project-open' : ''}`
      }>
        {/* Header Tile */}
        <div className="portfolio-header tile">
          <PortfolioPill
            text={windowWidth > 375 ? "Home" : null}
            image={home}
            onClick={() => navigate('/')}
          />
          
          <div className="header-buttons">
            <PortfolioPill text="Portfolio" image={palette} onClick={handleMainToggle} />
            {windowWidth <= 900 && (
              <PortfolioPill
                text={sandboxOpen ? 'Close Sandbox' : 'Open Sandbox'}
                image={build}
                onClick={handleSandboxToggle}
              />
            )}
          </div>
        </div>

        {/* Project Details Tile */}
        <div className={
          `portfolio-project-details tile
          ${sandboxOpen ? 'is-hidden-mobile' : ''}
          ${projectOpen ? '' : 'is-hidden'}`
        }>
          {selectedProject && (
            <>
              <h1 className="heading">{selectedProject.title}</h1>
              <h2 className="subheading">{selectedProject.subtitle}</h2>
              <ul className="project-detail-bullets body-bullet">
                {selectedProject.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Project Tech Tile */}
        <div className={
          `portfolio-project-tech tile
          ${sandboxOpen ? 'is-hidden-mobile' : ''}
          ${projectOpen ? '' : 'is-hidden'}`
        }>
          {selectedProject && (
            selectedProject.techIcons.map((tech, i) => (
              <PortfolioPill key={i} text={tech.name} image={tech.src} />
            ))
          )}
        </div>

        {/* Projects Tile */}
        <div className={
          `portfolio-projects tile
          ${sandboxOpen ? 'is-hidden-mobile' : ''}
          ${projectOpen ? 'is-hidden' : ''}`
        }>
          {PORTFOLIO.map((project, index) => (
            <ProjectButton
              key={index}
              project={project}
              onClick={() => handleProjectClick(project)}
              isPinned={true}
            />
          ))}

          {PROJECTS.map((project, index) => (
            <ProjectButton
              key={index}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>

        {/* About Tile */}
        <div className={
          `portfolio-about tile
          ${sandboxOpen ? 'is-hidden-mobile' : ''}
          ${projectOpen ? 'is-hidden' : ''}`
        }>
          <div className="about-content">
            <p className="body-base">
              Hello World! I'm a Computer Science student at Elizabethtown College with interests in software engineering, full-stack web development, and user-centered design.
              I enjoy building applications that solve real problems and creating intuitive user experiences.
            </p>
          </div>

          <div className="about-profile">
            <img src={pfp} alt="Kaiden Miller" className="about-profile-image" />
            <div className="about-profile-info">
              <SkillPill text="Communication" image={communication} />
              <SkillPill text="Problem-Solving" image={problemSolving} />
              <SkillPill text="Teamwork" image={teamwork} />
            </div>
          </div>
        </div>
        
        {/* Footer Tile */}
        <div className={
          `portfolio-footer tile
          ${sandboxOpen ? 'is-hidden-mobile' : ''}
          ${projectOpen ? 'is-hidden-mobile' : ''}`
        }>
          <div className="footer-links">
            <ActionLink href="https://linkedin.com/in/kaiden-miller" image={linkedin} variant="hover-only" />
            <ActionLink href="https://github.com/kaidenmiller06" image={github} variant="hover-only" />
            <ActionLink href="https://dribbble.com/kaiden-miller-06" image={dribbble} variant="hover-only" />
          </div>

          <ActionLink href="mailto:kaiden.miller.06@gmail.com" text="Contact" image={envelope} variant="hover-only" />
        </div>

        {/* Sandbox Tile */}
        <div className={
          `portfolio-sandbox tile
          ${sandboxOpen ? '' : 'is-hidden-mobile'}
          ${projectOpen ? 'is-hidden' : ''}`
        }>
          {windowWidth > 900 && (
            <PortfolioPill text="Sandbox" image={build} />
          )}
            <div className="portfolio-content">
              <div className="portfolio-row">
                <div className="portfolio-column">
                  <img src={collage} alt="Etown 125th Anniversary Collage" className="sandbox-collage" />
                  <img src={card1} alt="Stationary Card" className="sandbox-card" />
                  <img src={squidGame} alt="Squid Game Poster" className="sandbox-squidGame" />
                </div>

                <div className="portfolio-column">
                  <img src={comboMark} alt="Combination Mark" className="sandbox-comboMark" />
                  <img src={madMax} alt="Mad Max Poster" className="sandbox-madMax" />
                  <img src={scad} alt="SCAD Poster" className="sandbox-scad" />
                </div>

                <div className="portfolio-column">
                  <img src={mandoS3} alt="The Mandalorian S3" className="sandbox-mandoS3" />
                  <img src={card2} alt="Stationary Card" className="sandbox-card" />
                  <img src={letter} alt="Stationary Letter" className="sandbox-letter" />
                </div>
              </div>
            </div>
        </div>

        {/* Project Media Tile */}
        <div className={
          `portfolio-project-media tile
          ${sandboxOpen ? 'is-hidden-mobile' : ''}
          ${projectOpen ? '' : 'is-hidden'}`
        }>
          {windowWidth > 900 && (
            <PortfolioPill text={selectedProject ? selectedProject.title : "Project Media"} image={project} />
          )}
            <div className="portfolio-content">
              <div className="portfolio-row">
                {selectedProject && (
                  <>
                    {chunkIntoColumns(selectedProject.images, selectedProject.columns).map((column, colIndex) => (
                      <div className="portfolio-column" key={colIndex}>
                        {column.map((image, i) => (
                          <img key={i} src={image.src} alt={image.alt} className={image.className} />
                        ))}
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;