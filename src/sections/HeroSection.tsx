import {
  FaArrowUpRightFromSquare,
  FaCode,
  FaEnvelope,
  FaMobileScreen,
  FaNodeJs,
  FaReact,
  FaShieldHalved,
} from 'react-icons/fa6';

import './styles/HeroSection.css';

export default function HeroSection() {
  return (
    <section id="home" className="hero-modern">
      <div className="hero-left" data-glow>
        <p className="hero-badge">
          Frontend- & Fullstackutvecklare
        </p>

        <h1>
          Bygger säkra och moderna
          <span> digitala upplevelser</span>
        </h1>

        <p className="hero-text">
          Fullstackutvecklare med fokus på React, moderna
          webbapplikationer, Android POS-system och säker
          frontendutveckling.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            Visa projekt
          </a>

          <a href="#contact" className="ghost-button">
            Kontakta mig
          </a>
        </div>
      </div>

      <div className="hero-right" data-glow>
        <div className="hero-image-card pos-card">
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop"
            alt="POS Terminal"
          />

          <div className="hero-overlay">
            <h3>POS-betalplattform</h3>
            <p>Android • Verifone • Säkra betalningar</p>
          </div>
        </div>
      </div>
    </section>
  );
}