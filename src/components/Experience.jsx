import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData.js';
import SectionHeader from './SectionHeader.jsx';

function Experience() {
  return (
    <section id="experience" className="section-padding experience-section">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title="Concise enterprise delivery experience."
          description="Short LinkedIn-style role summaries focused on impact, leadership, platform modernization, and backend delivery."
        />

        <div className="timeline" aria-label="Professional experience timeline">
          {experience.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                className="timeline-item glass-card"
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
              >
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-header">
                  <div className="icon-badge">
                    <Icon size={23} />
                  </div>
                  <div>
                    <h3>{item.company}</h3>
                    <p>{item.role}</p>
                  </div>
                  <span>{item.duration}</span>
                </div>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
