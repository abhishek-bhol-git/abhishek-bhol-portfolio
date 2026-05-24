import { motion } from 'framer-motion';

function SkillCard({ category, index }) {
  const Icon = category.icon;

  return (
    <motion.article
      className="skill-card glass-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.04 }}
    >
      <div className="skill-card-header">
        <div className="icon-badge">
          <Icon size={24} />
        </div>
        <div>
          <h3>{category.title}</h3>
          <p>{category.summary}</p>
        </div>
      </div>

      <div className="skill-pill-grid">
        {category.skills.map((skill) => (
          <span className="skill-pill" key={skill}>{skill}</span>
        ))}
      </div>
    </motion.article>
  );
}

export default SkillCard;
