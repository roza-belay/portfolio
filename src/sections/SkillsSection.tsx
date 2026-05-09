import { FaAndroid, FaNodeJs, FaReact, FaShieldHalved } from 'react-icons/fa6';
import { skillGroups } from '../data/portfolioData';
import SkillBadge from '../components/SkillBadge';

export default function SkillsSection() {
  return (
    <section id="skills" className="section-block tech-section">
      <div className="tech-bento">
        <article className="tech-card tech-card-large" data-glow>
          <div className="skill-icon">
            <FaReact />
          </div>

          <p className="eyebrow">Current Focus</p>

          <h3>React, TypeScript & modern frontend</h3>

          <p>
            Jag kombinerar UI-utveckling med backendförståelse,
            Android-erfarenhet och ett tydligt säkerhetstänk.
          </p>

          <div className="tag-list">
            {skillGroups[0].skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </article>

        <article className="tech-card tech-card-dark" data-glow>
          <div className="skill-icon">
            <FaAndroid />
          </div>

          <p className="eyebrow">POS & Payment Platform</p>

          <h3>
            Android POS-system med Payment SDK och avancerade betalflöden
          </h3>

          <p>
            Utvecklat under LIA där vi byggde ett komplett POS-system från
            grunden med on-device och off-device betalningar,
            repository-baserad arkitektur, split payments, refunds och
            stabil terminalintegration.
          </p>

          <div className="tag-list">
            <span>Kotlin</span>
            <span>Android Studio</span>
            <span>Room Database</span>
            <span>Payment SDK</span>
            <span>Split Payments</span>
            <span>Refunds</span>
            <span>Epson ePOS</span>
            <span>Barcode Scanning</span>
          </div>
        </article>

        <article className="tech-card" data-glow>
          <div className="skill-icon">
            <FaNodeJs />
          </div>

          <h3>Backend</h3>

          <div className="tag-list">
            {skillGroups[1].skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </article>

        <article className="tech-card" data-glow>
          <div className="skill-icon">
            <FaShieldHalved />
          </div>

          <h3>Webbsäkerhet</h3>

          <div className="tag-list">
            {skillGroups[3].skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </article>

        <article className="tech-card tech-card-wide" data-glow>
          <div className="tag-list tech-strip">
            {[...skillGroups[2].skills, ...skillGroups[4].skills].map(
              (skill) => (
                <SkillBadge key={skill} skill={skill} />
              )
            )}
          </div>
        </article>
      </div>
    </section>
  );
}