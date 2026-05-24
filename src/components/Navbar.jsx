import { Menu, X } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons.jsx';
import { useState } from 'react';
import { navLinks, profile } from '../data/portfolioData.js';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar-wrap">
      <nav className="navbar container" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Abhishek Bhol home">
          <span className="brand-mark">AB</span>
          <span>{profile.name}</span>
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-links ${isOpen ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions" aria-label="Social profile links">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="Open GitHub profile">
            <GitHubIcon size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Open LinkedIn profile">
            <LinkedInIcon size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
