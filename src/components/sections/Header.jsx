import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

/**
 * A component that displays the header section of the website.
 */
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo heading">
          <a href="#hero">Kaiden Miller</a>
        </div>

        {/* Hamburger button - only visible on mobile via CSS */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Nav - gets a class toggled based on menuOpen state */}
        <nav className={`header-nav subheading ${menuOpen ? 'open' : ''}`}>
          <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#footer" onClick={() => setMenuOpen(false)}>About</a>
          <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;