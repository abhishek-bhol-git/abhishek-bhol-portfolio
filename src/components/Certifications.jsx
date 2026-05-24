import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { certifications, education } from '../data/portfolioData.js';
import SectionHeader from './SectionHeader.jsx';

function Certifications() {
  const EducationIcon = education.icon;

  return (
    <section id="certifications" className="section-padding certifications-section">
      <div className="container">
        <SectionHeader
          eyebrow="Certifications & Education"
          title="Validated learning across OpenShift, backend engineering, and software fundamentals."
          description="Includes personal certifications only. Organization-level partner certificates are intentionally excluded."
        />

        <div className="certification-layout">
          <div className="certification-list">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.article
                  className="cert-card glass-card"
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.06 }}
                >
                  <div className="icon-badge">
                    <Icon size={23} />
                  </div>
                  <div>
                    <h3>{cert.title}</h3>
                    <p>{cert.issuer} · {cert.date}{cert.creditHours ? ` · ${cert.creditHours}` : ''}</p>
                    {cert.link ? (
                      <a href={cert.link} target="_blank" rel="noreferrer">
                        Verify credential <ExternalLink size={15} />
                      </a>
                    ) : null}
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.article
            className="education-card glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.12 }}
          >
            <div className="icon-badge">
              <EducationIcon size={25} />
            </div>
            <span>Education</span>
            <h3>{education.degree}</h3>
            <p>{education.school}</p>
            <div className="education-meta">
              <span>{education.duration}</span>
              <span>GPA: {education.gpa}</span>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
