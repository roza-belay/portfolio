import { lazy, Suspense, useEffect, useState } from 'react';

import { FaMoon, FaSun } from 'react-icons/fa6';
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiTypescript,
} from 'react-icons/si';

import CursorRing from './components/CursorRing';

const SmokeBackground = lazy(
  () => import('./components/SmokeBackground')
);

import HeroSection from './sections/HeroSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import ThesisSection from './sections/ThesisSection';

import './styles/App.css';

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
      <Suspense fallback={null}>
        <SmokeBackground theme={theme} />
      </Suspense>

      <CursorRing />

      <div className="cursor-glow" aria-hidden="true" />

      <div className="site-shell">
        <button
          className="theme-toggle"
          type="button"
          data-glow
          onClick={() =>
            setTheme(theme === 'dark' ? 'light' : 'dark')
          }
          aria-label={
            theme === 'dark'
              ? 'Byt till ljust läge'
              : 'Byt till mörkt läge'
          }
        >
          <span className="theme-toggle-icons">
            <FaSun
              aria-hidden
              className={
                theme === 'light'
                  ? 'theme-icon-active'
                  : 'theme-icon-idle'
              }
            />
            <FaMoon
              aria-hidden
              className={
                theme === 'dark'
                  ? 'theme-icon-active'
                  : 'theme-icon-idle'
              }
            />
          </span>
        </button>

        <main>
          <HeroSection />

          <SkillsSection />

          <ProjectsSection />

          <ThesisSection />

          <ContactSection />
        </main>

        <footer className="site-footer" data-glow>
          <div>
            <span>Roza Belay</span>

            <p>
              Fullstack Developer crafting secure, scalable and modern web
              experiences.
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
