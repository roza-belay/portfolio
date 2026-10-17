import type { PointerEvent } from 'react';

import {
  FaArrowDown,
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaReact,
  FaShieldHalved,
} from 'react-icons/fa6';

import './styles/HeroSection.css';

export default function HeroSection() {
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === 'touch') return;

    const rect = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty(
      '--pointer-x',
      `${event.clientX - rect.left}px`
    );

    event.currentTarget.style.setProperty(
      '--pointer-y',
      `${event.clientY - rect.top}px`
    );
  };

  return (
    <section
      id="home"
      className="hero-modern"
      onPointerMove={handlePointerMove}
    >
      <div className="hero-left">
        <p className="hero-badge">
          <span className="hero-status-dot" />
          Frontend- &amp; Fullstackutvecklare
        </p>
        <h1>
          Roza Belay
          <span>Jag bygger digitala upplevelser.</span>
        </h1>

      

        <div className="hero-skills">
          <span>
            <FaReact aria-hidden="true" />
            React &amp; TypeScript
          </span>

          <span>
            <FaShieldHalved aria-hidden="true" />
            Webbsäkerhet
          </span>

          <span>
            <FaArrowUpRightFromSquare aria-hidden="true" />
            Mobilutveckling
          </span>
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
    </section>
  );
}