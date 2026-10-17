
import {
  FaArrowDown,
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaReact,
  FaShieldHalved,
} from 'react-icons/fa6';

import profilePic from '../assets/profile.png';

import './styles/HeroSection.css';

export default function HeroSection() {
  return (
    <section id="home" className="hero-modern">
      <div className="hero-left" data-glow>
        <p className="hero-badge">
          <span className="hero-status-dot" />
          Frontend- &amp; Fullstackutvecklare
        </p>

        <h1>
          Roza Belay
    
        </h1>

        <p className="hero-text">
          Jag utvecklar moderna webbapplikationer med React
          och TypeScript, med fokus på användarupplevelse,
          säkerhet och genomtänkt kod. Jag arbetar också
          med backend och Android.
        </p>

        <div className="hero-skills">
          <span><FaReact /> React &amp; TypeScript</span>
          <span><FaShieldHalved /> Webbsäkerhet</span>
          <span><FaArrowUpRightFromSquare /> Fullstack</span>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            Se mina projekt
            <FaArrowDown aria-hidden="true" />
          </a>

          <a href="#contact" className="ghost-button">
            <FaEnvelope aria-hidden="true" />
            Kontakta mig
          </a>
        </div>

        <p className="hero-availability">
          Öppen för nya möjligheter och intressanta projekt.
        </p>
      </div>

      <div className="hero-right" data-glow>
        <div className="hero-image-card">
          
          <div className="hero-overlay">
            <span className="hero-project-label">
              UTVECKLING · DESIGN · SÄKERHET
            </span>
            <h3>Roza Belay</h3>
            <p>Från idé till fungerande digitala lösningar.</p>
          </div>
        </div>

    
      </div>
    </section>
  );
}
