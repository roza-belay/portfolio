import {
  FaArrowUpRightFromSquare,
  FaCode,
  FaEnvelope,
  FaMobileScreen,
  FaNodeJs,
  FaReact,
  FaShieldHalved,
} from 'react-icons/fa6';

export default function HeroSection() {
  return (
    <section id="home" className="hero-section hero-section-clean">
      <div className="hero-copy" data-glow>
        <p className="eyebrow">
          Fullstack Utvecklare - frontend-fokus
        </p>

        <h1>Roza Belay</h1>

        <p className="hero-statement">
          Fullstack Developer crafting secure, scalable and modern web
          experiences
        </p>

        <p className="hero-lead">
          Van att arbeta i agila team och att bygga skalbara och säkra
          system. Min bakgrund som civilingenjör stärker min analytiska
          förmåga, medan utbildningen inom webbsäkerhet ger en modern
          grund för säkra webbapplikationer.
        </p>

        <div
          className="hero-focus-grid"
          aria-label="Tekniska fokusområden"
        >
          <span>
            <FaReact /> React Frontend
          </span>

          <span>
            <FaNodeJs /> Node.js Backend
          </span>

          <span>
            <FaShieldHalved /> Secure Web
          </span>

          <span>
            <FaMobileScreen /> POS Integration
          </span>
        </div>

        <div className="hero-actions">
          <a className="primary-button" href="#contact">
            <FaEnvelope /> Kontakt
          </a>

          <a className="ghost-button" href="#projects">
            <FaArrowUpRightFromSquare /> Se projekt
          </a>

          <a className="ghost-button" href="#skills">
            <FaCode /> Kompetenser
          </a>
        </div>
      </div>
    </section>
  );
}