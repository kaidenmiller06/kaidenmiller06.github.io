import { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo">
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
        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;