import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { projectHighlights } from '../data/portfolioData';

import './styles/ProjectsSection.css';

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-block">
      <div className="section-heading">
        <p className="eyebrow">Utvalda projekt</p>
        <h2>Projekt som visar både UI-känsla och teknisk arkitektur.</h2>
      </div>

      <div className="project-stack">
        {projectHighlights.map((project) => (
          <article
            className="project-card"
            key={project.title}
            data-glow
          >
            <div className="project-visual">
              <img src={project.image.src} alt={project.image.alt} />
            </div>

            <div className="project-content">
              <p className="eyebrow">{project.eyebrow}</p>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <p className="impact">{project.impact}</p>

              <div className="tag-list">
                {project.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                    <FaArrowUpRightFromSquare />
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
