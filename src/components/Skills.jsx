import { primarySkillTags, skillCategories } from '../data/portfolioData.js';
import SectionHeader from './SectionHeader.jsx';
import SkillCard from './SkillCard.jsx';

function Skills() {
  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        <SectionHeader
          eyebrow="Skills"
          title="A recruiter-friendly skill map for DevOps and platform engineering roles."
          description="The strongest section of the portfolio: categorized, scannable, and weighted toward OpenShift, Kubernetes, CI/CD, cloud modernization, and secure backend delivery."
        />

        <div className="featured-skills" aria-label="Primary skills">
          {primarySkillTags.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <div className="skill-grid">
          {skillCategories.map((category, index) => (
            <SkillCard category={category} index={index} key={category.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
