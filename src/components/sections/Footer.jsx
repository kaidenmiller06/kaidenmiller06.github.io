import { useNavigate } from 'react-router-dom';
import { AWARDS } from '../../data/awards';

import ActionLink from '../ui/ActionLink';
import PortfolioPill from '../ui/PortfolioPill';

import palette from '../../assets/icons/palette.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';
import dribbble from '../../assets/icons/dribbble.svg';

import './Footer.css';

/**
 * A component that displays the footer section of the website.
 */
function Footer() {
  const navigate = useNavigate();

  return (
    <footer id="footer" className="footer">
      <div className="footer-inner">
        <button
          className="footer-button heading"
          onClick={() => navigate('/portfolio')}
        >
          <img src={palette} alt="palette" />
          See my full portfolio
        </button>

        {/* Footer About */}
        <div className="footer-about">
          <div>
            <p className="heading">Kaiden Miller</p>
            <p className="subheading">Aspiring Software Engineer</p>
          </div>

          <div className="footer-links">
            <ActionLink href="https://linkedin.com/in/kaiden-miller" image={linkedin} variant="outline" />
            <ActionLink href="https://github.com/kaidenmiller06" image={github} variant="outline" />
            <ActionLink href="https://dribbble.com/kaiden-miller-06" image={dribbble} variant="outline" />
          </div>
        </div>

        {/* Footer Honors */}
        <div className="footer-honors">
          {AWARDS.map((award, i) => (
            <ActionLink key={i} {...award} variant="outline" />
          ))}
        </div>

        {/* Footer Copyright */}
        <div className="footer-legal">
          <p className="subheading">© 2026 kaiden.miller.06</p>
          <p className="subheading">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;