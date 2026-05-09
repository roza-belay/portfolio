import profilePic from '../assets/profile.png';

import {
  FaEnvelope,
  FaGithub,
  FaShieldHalved,
} from 'react-icons/fa6';

import {
  SiBootstrap,
  SiJetpackcompose,
  SiJavascript,
  SiKotlin,
  SiNodedotjs,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import { contactLinks } from '../data/portfolioData';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section-modern">
      <div className="contact-intro" data-glow>
        <p className="eyebrow">Kontakt</p>

        <h3>
          Säkerhet, modern teknik och hållbarhet i varje lösning
        </h3>

        <p className="contact-description">
          Frontend-fokuserad fullstackutvecklare med erfarenhet av
          moderna betalningslösningar och användarvänliga
          webbupplevelser.
        </p>

        <div className="contact-tags">
          <span><SiReact /></span>
          <span><SiJavascript /></span>
          <span><SiTypescript /></span>
          <span><SiNodedotjs /></span>
          <span><SiTailwindcss /></span>
          <span><SiBootstrap /></span>
          <span><SiKotlin /></span>
          <span><SiJetpackcompose /></span>
          <span><SiSqlite /></span>
          <span><FaShieldHalved /></span>
        </div>
      </div>

      <aside className="contact-card-modern" data-glow>
        <div className="contact-profile-top">
          <div className="avatar-frame large">
            <img src={profilePic} alt="Roza Belay" />
          </div>

          <div>
            <p className="availability">Kontakta</p>

            <h3>Roza Belay</h3>

            <p className="contact-role">
              Frontend- & Fullstackutvecklare
            </p>
          </div>
        </div>

        <div className="contact-links-modern">
          {contactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={
                link.href.startsWith('http')
                  ? '_blank'
                  : undefined
              }
              rel={
                link.href.startsWith('http')
                  ? 'noreferrer'
                  : undefined
              }
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        <div className="contact-actions">
          <a
            className="primary-button"
            href="mailto:rozaybeyn.belay@gmail.com"
          >
            <FaEnvelope />
            Kontakta mig
          </a>

          <a
            className="ghost-button"
            href="https://github.com/Rozabelay339"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            Se GitHub
          </a>
        </div>
      </aside>
    </section>
  );
}