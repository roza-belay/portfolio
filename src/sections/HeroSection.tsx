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
    <p className="hero-badge">Frontend & Fullstack Developer</p>

    <h1>
      Building secure and modern
      <span> digital experiences</span>
    </h1>

    <p className="hero-text">
      Fullstack developer med fokus på React, moderna webbapplikationer,
      Android POS-system och säker frontend-utveckling.
    </p>

    <div className="hero-buttons">
      <a href="#projects" className="primary-button">
        View Projects
      </a>

      <a href="#contact" className="ghost-button">
        Contact Me
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
        <h3>POS Payment Platform</h3>
        <p>Android • Verifone • Secure Payments</p>
      </div>
    </div>
  </div>
</section>
  );
}
