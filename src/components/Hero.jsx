import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons.jsx';
import { heroBadges, primarySkillTags, profile } from '../data/portfolioData.js';

function Hero() {
  return (
    <section id="top" className="hero section-padding">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="availability-pill">
            <span className="pulse-dot" />
            Open to DevOps / Platform Engineering roles
          </div>

          <p className="hero-kicker">{profile.title} · {profile.location}</p>
          <h1>{profile.headline}</h1>
          <p className="hero-subheadline">{profile.subheadline}</p>

          <div className="hero-meta" aria-label="Profile metadata">
            <span><MapPin size={18} /> {profile.location}</span>
            <span><ShieldCheck size={18} /> Production-first engineering</span>
          </div>

          <div className="hero-actions">
            <a className="button button-primary" href={`mailto:${profile.email}`}>
              <Mail size={18} /> Email Me
            </a>
            <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon size={18} /> LinkedIn
            </a>
            <a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer">
              <GitHubIcon size={18} /> GitHub
            </a>
            <button className="button button-disabled" type="button" disabled aria-label="Resume coming soon">
              Resume Coming Soon
            </button>
          </div>

          <div className="hero-badges" aria-label="Career highlights">
            {heroBadges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="profile-card glass-card">
            <div className="profile-image-shell">
              <img
                src={profile.image}
                alt="Professional profile of Abhishek Bhol"
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                  event.currentTarget.nextElementSibling.style.display = 'grid';
                }}
              />
              <div className="profile-fallback" aria-hidden="true">AB</div>
            </div>

            <div className="profile-card-content">
              <span className="terminal-label">platform/status</span>
              <h2>{profile.name}</h2>
              <p>{profile.title}</p>
              <div className="terminal-card" aria-label="Engineering focus summary">
                <div className="terminal-topbar">
                  <span />
                  <span />
                  <span />
                </div>
                <code>
                  <span>$ deploy --target openshift</span>
                  <span>✓ container workflow ready</span>
                  <span>✓ ci/cd pipeline stable</span>
                  <span>✓ release risk reduced</span>
                </code>
              </div>
            </div>
          </div>

          <div className="floating-stack-card glass-card">
            <span>Core stack</span>
            <strong>OpenShift · Kubernetes · Node.js</strong>
          </div>
        </motion.div>
      </div>

      <div className="container skill-marquee" aria-label="Primary recruiter-facing skills">
        <div className="skill-track">
          {[...primarySkillTags, ...primarySkillTags].map((skill, index) => (
            <span key={`${skill}-${index}`}>{skill}</span>
          ))}
        </div>
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
        Explore profile <ArrowRight size={16} />
      </a>
    </section>
  );
}

export default Hero;
