import {
  FaAndroid,
  FaCode,
  FaNodeJs,
  FaReact,
  FaShieldHalved,
} from 'react-icons/fa6';

import { skillGroups } from '../data/portfolioData';
import SkillBadge from '../components/SkillBadge';

import './styles/SkillsSection.css';

export default function SkillsSection() {
  const [frontend, backend, mobile, security, tooling] = skillGroups;

  return (
    <section id="skills" className="section-block tech-section">
      <div className="section-heading">
        <p className="eyebrow">Kompetenser</p>

        <h2>Teknik jag använder för att skapa fungerande lösningar.</h2>
      </div>

      <div className="tech-bento">
        <article className="tech-card tech-card-large tech-card-feature" data-glow>
          <div className="skill-icon">
            <FaReact />
          </div>

          <p className="eyebrow">fokus</p>



          <p>
            Responsiva gränssnitt, tydliga API-flöden och säker datahantering.
          </p>

          <div className="tag-list">
            {frontend.skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </article>

        <article className="tech-card tech-card-mobile" data-glow>
          <div className="skill-icon skill-icon-mobile">
            <FaAndroid />
          </div>

          <p className="eyebrow">{mobile.title}</p>

          <h3>Android, Kotlin &amp; nära integration</h3>

          <p>
            Android-appar med Kotlin, Jetpack Compose och API-integration.
          </p>

          <div className="tag-list">
            {mobile.skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </article>

        <article className="tech-card tech-card-third" data-glow>
          <div className="skill-icon">
            <FaNodeJs />
          </div>

          <p className="eyebrow">{backend.title}</p>

          <h3>API &amp; data</h3>

          <div className="tag-list">
            {backend.skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </article>

        <article className="tech-card tech-card-third" data-glow>
          <div className="skill-icon">
            <FaShieldHalved />
          </div>

          <p className="eyebrow">{security.title}</p>

          <h3>Hot i webblagret</h3>

          <div className="tag-list">
            {security.skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </article>

        <article className="tech-card tech-card-third" data-glow>
          <div className="skill-icon">
            <FaCode />
          </div>

          <p className="eyebrow">{tooling.title}</p>

          <h3>Verktyg &amp; arbetssätt</h3>

          <div className="tag-list">
            {tooling.skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
