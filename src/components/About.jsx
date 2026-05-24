import { motion } from 'framer-motion';
import { Cloud, Code2, Rocket, ShieldCheck } from 'lucide-react';
import { profile } from '../data/portfolioData.js';
import SectionHeader from './SectionHeader.jsx';

const highlights = [
  { label: 'Enterprise backend depth', icon: Code2 },
  { label: 'Cloud-native modernization', icon: Cloud },
  { label: 'OpenShift migration focus', icon: Rocket },
  { label: 'Reliable production delivery', icon: ShieldCheck },
];

function About() {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container two-column">
        <SectionHeader
          eyebrow="About"
          title="Backend discipline with a platform engineering mindset."
          description="A concise profile for teams hiring engineers who can stabilize delivery, modernize workloads, and keep enterprise systems production-ready."
        />

        <motion.div
          className="about-content glass-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p>{profile.summary}</p>
          <div className="about-highlight-grid">
            {highlights.map(({ label, icon: Icon }) => (
              <div className="about-highlight" key={label}>
                <Icon size={20} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
