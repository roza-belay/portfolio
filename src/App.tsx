import {
  FaAndroid,
  FaArrowUpRightFromSquare,
  FaCode,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaMobileScreen,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaShieldHalved,
} from 'react-icons/fa6';
import { SiExpress, SiJavascript, SiKotlin, SiMongodb, SiTypescript } from 'react-icons/si';

type Project = {
  title: string;
  eyebrow: string;
  description: string;
  impact: string;
  stack: string[];
  links: Array<{ label: string; href: string }>;
};

type TimelineItem = {
  title: string;
  place: string;
  period: string;
  detail: string;
};

const contactLinks = [
  { label: '+46-722746101', href: 'tel:+46722746101', icon: <FaPhone /> },
  { label: 'rozaybeyn.belay@gmail.com', href: 'mailto:rozaybeyn.belay@gmail.com', icon: <FaEnvelope /> },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/roza-ybeyn-belay-3b9054256', icon: <FaLinkedin /> },
  { label: 'GitHub', href: 'https://github.com/Rozabelay339', icon: <FaGithub /> },
];

const skillGroups = [
  { title: 'Frontend', skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'], icon: <FaReact /> },
  { title: 'Backend', skills: ['Node.js', 'Express.js', 'REST API', 'MongoDB', 'SQL'], icon: <FaNodeJs /> },
  { title: 'Mobilutveckling', skills: ['Kotlin', 'Android Studio', 'Jetpack Compose'], icon: <FaAndroid /> },
  { title: 'Webbsäkerhet', skills: ['CORS', 'CSRF', 'XSS', 'SQL Injection', 'JWT'], icon: <FaShieldHalved /> },
  { title: 'Verktyg', skills: ['Git', 'GitHub', 'VS Code', 'Agilt arbete'], icon: <FaCode /> },
];

const projectHighlights: Project[] = [
  {
    title: 'POS-system med betalterminalintegration',
    eyebrow: 'Examensarbete / LiA',
    description:
      'Teknisk jämförelsestudie och praktisk implementation av POS-flöden med Payment SDK, on-device/off-device arkitektur och verklighetsnära betalmiljö.',
    impact:
      'Fokus på split payments, kortbetalningar, refunds, produktvarianter, kvittoflöden och integrationslager.',
    stack: ['Kotlin', 'Android', 'PSDK', 'Architecture', 'Payments'],
    links: [
      { label: 'GitHub', href: 'https://github.com/roza-belay/pos-psdk-integration-demo' },
      { label: 'Docs', href: 'https://docs-pos-app.netlify.app/' },
    ],
  },
  {
    title: 'React Chat App',
    eyebrow: 'Frontend / Säker kommunikation',
    description:
      'React/Vite-applikation med API-kommunikation, autentiseringstänk och skydd mot osäker rendering genom DOMPurify.',
    impact:
      'Visar frontendstruktur, formulärflöden, säkerhetsmedvetenhet och integration mot backend-tjänster.',
    stack: ['React', 'Vite', 'Axios', 'DOMPurify', 'JWT'],
    links: [{ label: 'GitHub', href: 'https://github.com/roza-belay/react-chat-app' }],
  },
  {
    title: 'Webbshop med React och backend',
    eyebrow: 'Fullstack case',
    description:
      'E-handel med produktlista, produktdetaljer, login, kundvagn och orderflöden via backend-API.',
    impact:
      'Binder ihop React-komponenter, REST API, datamodeller och användarresa i ett portfolio-vänligt projekt.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    links: [{ label: 'GitHub', href: 'https://github.com/roza-belay/webbshop-react-s-kerhet-backend' }],
  },
];

const education: TimelineItem[] = [
  {
    title: 'Frontendutveckling med inriktning webbsäkerhet',
    place: 'Jensen yrkeshögskola',
    period: 'Aug 2024 - Juni 2026',
    detail: 'Examen 5 juni 2026. Fokus på React, modern frontend, backendgrunder och webbsäkerhet.',
  },
  {
    title: 'Civilingenjör - Geoteknisk ingenjör',
    place: 'Adama Science and Technology University, Etiopien',
    period: '2009 - 2014',
    detail: 'Teknisk bakgrund med stark problemlösningsförmåga, analys och struktur.',
  },
];

const strengths = ['Analytisk och problemlösande', 'Strukturerad och noggrann', 'Samarbetsvillig', 'Snabb inlärning', 'Teknisk anpassningsförmåga'];
function App() {
  return (
    <div className="site-shell">
      <header className="top-nav">
        <a className="brand" href="#home" aria-label="Roza Belay portfolio home">
          <span>RB</span>
          <strong>Roza Belay</strong>
        </a>
        <nav aria-label="Huvudnavigation">
          <a href="#projects">Projekt</a>
          <a href="#skills">Kompetenser</a>
          <a href="#education">Utbildning</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section hero-section-clean">
          <div className="hero-copy">
            <p className="eyebrow">Fullstack Utvecklare - frontend-fokus</p>
            <h1>Roza Belay</h1>
            <p className="hero-statement">Fullstack Developer crafting secure, scalable and modern web experiences</p>
            <p className="hero-lead">
              Frontend-fokuserad fullstackutvecklare med fokus på React, Node.js och säker webbutveckling.
              Bygger moderna och skalbara webbapplikationer samt POS-lösningar med betalterminalintegration
              och komplexa betalflöden. Praktisk erfarenhet av Android/Kotlin, API-integrationer och utveckling
              i verkliga produktionsnära miljöer.
            </p>
            <div className="hero-focus-grid" aria-label="Tekniska fokusområden">
              <span><FaReact /> React Frontend</span>
              <span><FaNodeJs /> Node.js Backend</span>
              <span><FaShieldHalved /> Secure Web</span>
              <span><FaMobileScreen /> POS Integration</span>
            </div>
            <div className="hero-actions">
              <a className="primary-button" href="#contact">
                <FaEnvelope /> Kontakt
              </a>
              <a className="ghost-button" href="#projects">
                <FaArrowUpRightFromSquare /> Se projekt
              </a>
            </div>
          </div>
        </section>

        <section className="metrics-band" aria-label="Profil i korthet">
          <article>
            <strong>2026</strong>
            <span>Frontendexamen</span>
          </article>
          <article>
            <strong>POS</strong>
            <span>Betalterminalintegration</span>
          </article>
          <article>
            <strong>Security</strong>
            <span>Webbsäkerhet i fokus</span>
          </article>
          <article>
            <strong>Fullstack</strong>
            <span>React + Node.js</span>
          </article>
        </section>

        <section id="projects" className="section-block">
          <div className="section-heading">
            <p className="eyebrow">Utvalda projekt</p>
            <h2>Projekt som visar både UI-känsla och teknisk arkitektur.</h2>
          </div>
          <div className="project-stack">
            {projectHighlights.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-index">0{index + 1}</div>
                <div className="project-content">
                  <p className="eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="impact">{project.impact}</p>
                  <div className="tag-list">
                    {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                        {link.label} <FaArrowUpRightFromSquare />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-block split-section">
          <div className="section-heading sticky-heading skills-heading-clean">
            <p className="eyebrow">Kompetenser</p>
            <p>
              Jag kombinerar UI-utveckling med backendförståelse, Android-erfarenhet och ett tydligt säkerhetstänk.
            </p>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-icon">{group.icon}</div>
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block profile-section">
          <div className="profile-panel">
            <p className="eyebrow">Profil</p>
            <h2>Strukturerad problemlösare med stark teknisk grund.</h2>
            <p>
              Van att arbeta i agila team och att bygga skalbara och säkra system. Min bakgrund som civilingenjör
              stärker min analytiska förmåga, medan utbildningen inom webbsäkerhet ger en modern grund för säkra
              webbapplikationer.
            </p>
          </div>
          <div className="strength-panel">
            {strengths.map((strength) => <span key={strength}>{strength}</span>)}
          </div>
        </section>

        <section id="education" className="section-block education-section">
          <div className="section-heading">
            <p className="eyebrow">Utbildning</p>
            <h2>Teknisk utbildning från civilingenjör till modern frontend.</h2>
          </div>
          <div className="timeline">
            {education.map((item) => (
              <article className="timeline-item" key={item.title}>
                <FaGraduationCap />
                <div>
                  <span>{item.period}</span>
                  <h3>{item.title}</h3>
                  <p className="place">{item.place}</p>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block thesis-section">
          <div>
            <p className="eyebrow">Examensarbete</p>
            <h2>POS-system med Payment SDK och betalterminalintegration.</h2>
          </div>
          <div className="thesis-grid">
            <article><FaMobileScreen /><span>On-device och off-device arkitekturer</span></article>
            <article><SiKotlin /><span>Android/Kotlin i verklig betalmiljö</span></article>
            <article><FaDatabase /><span>Produktvarianter, kvittoflöden och orderdata</span></article>
            <article><FaShieldHalved /><span>Analys av funktionella skillnader och utvecklingskomplexitet</span></article>
          </div>
        </section>

        <section id="contact" className="contact-section contact-section-profile">
          <div className="contact-copy">
            <p className="eyebrow">Kontakt</p>
            <h2>Vill du prata frontend, fullstack eller POS-integration?</h2>
            <p>Referenser lämnas på begäran.</p>
          </div>
          <aside className="contact-profile-card" aria-label="Kontaktkort för Roza Belay">
            <div className="avatar-frame">
              <img src="https://avatars.githubusercontent.com/u/180546490?v=4" alt="Roza Belay" />
            </div>
            <div>
              <p className="availability">Tillgänglig för frontend/fullstack roller</p>
              <h2>Roza Belay</h2>
              <p>React, Node.js, webbsäkerhet och POS-integration.</p>
            </div>
            <div className="contact-grid">
              {contactLinks.map((link) => (
                <a key={link.href} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </aside>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <span>Roza Belay</span>
          <p>Fullstack Developer crafting secure, scalable and modern web experiences.</p>
        </div>
        <div className="footer-icons" aria-hidden="true">
          <SiTypescript />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
        </div>
      </footer>
    </div>
  );
}

export default App;
