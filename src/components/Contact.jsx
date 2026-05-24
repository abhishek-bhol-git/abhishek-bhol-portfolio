import { Mail, MapPin } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons.jsx';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolioData.js';
import SectionHeader from './SectionHeader.jsx';

function Contact() {
  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container contact-layout">
        <SectionHeader
          eyebrow="Contact"
          title="Open to DevOps, Platform Engineering, OpenShift, Kubernetes, CI/CD, and cloud-native modernization opportunities."
          description="Best contacted through email, LinkedIn, or GitHub."
        />

        <motion.div
          className="contact-card glass-card"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <a href={`mailto:${profile.email}`} className="contact-row">
            <Mail size={22} />
            <span>{profile.email}</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-row">
            <LinkedInIcon size={22} />
            <span>LinkedIn Profile</span>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="contact-row">
            <GitHubIcon size={22} />
            <span>GitHub Profile</span>
          </a>
          <div className="contact-row contact-row-static">
            <MapPin size={22} />
            <span>{profile.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
