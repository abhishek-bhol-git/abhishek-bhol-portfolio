import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData.js';
import SectionHeader from './SectionHeader.jsx';

function Projects() {
  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        <SectionHeader
          eyebrow="Projects / Case Studies"
          title="Generic case studies without exposing confidential client or project names."
          description="Recruiter-facing themes that communicate platform modernization, backend automation, and secure microservices delivery."
        />

        <div className="project-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                className="project-card glass-card"
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.06 }}
              >
                <div className="project-card-top">
                  <div className="icon-badge">
                    <Icon size={24} />
                  </div>
                  <span>{project.type}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <strong>{project.impact}</strong>
                <div className="tech-stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
