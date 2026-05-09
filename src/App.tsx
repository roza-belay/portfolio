import { useEffect, useState } from 'react';

import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiTypescript,
} from 'react-icons/si';

import HeroSection from './sections/HeroSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import ProfileSection from './sections/ProfileSection';
import ThesisSection from './sections/ThesisSection';

import './styles.css';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty(
        '--mouse-x',
        `${event.clientX}px`
      );

      document.documentElement.style.setProperty(
        '--mouse-y',
        `${event.clientY}px`
      );

      const target =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>('[data-glow]')
          : null;

      if (!target) return;

      const rect = target.getBoundingClientRect();

      target.style.setProperty(
        '--local-x',
        `${event.clientX - rect.left}px`
      );

      target.style.setProperty(
        '--local-y',
        `${event.clientY - rect.top}px`
      );
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () =>
      window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <>
      <div className="cursor-glow" aria-hidden="true" />

      <div className="site-shell">
        <button
          className="theme-toggle"
          type="button"
          data-glow
          onClick={() =>
            setTheme(theme === 'dark' ? 'light' : 'dark')
          }
          aria-label="Växla mellan dark mode och light mode"
        >
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </button>

        <main>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <ProfileSection />
         
          <ThesisSection />
          <ContactSection />
        </main>

        <footer className="site-footer" data-glow>
          <div>
            <span>Roza Belay</span>

            <p>
              Fullstack Developer crafting secure, scalable and modern
              web experiences.
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-icons" aria-hidden="true">
            <SiTypescript />
            <SiJavascript />
            <SiMongodb />
            <SiExpress />
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;