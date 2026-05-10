import {
  FaAndroid,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaShieldHalved,
} from 'react-icons/fa6';

import {
  SiAndroidstudio,
  SiBootstrap,
  SiCss,
  SiExpress,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJetpackcompose,
  SiJsonwebtokens,
  SiKotlin,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import type { Project, TimelineItem } from '../types';
import chatAppImage from '../assets/projects/project-chat-hero.png';
import posSystemImage from '../assets/projects/project-pos-hero.png';
import webshopImage from '../assets/projects/project-webshop-hero.png';

export const contactLinks = [
  {
    label: '+46-722746101',
    href: 'tel:+46722746101',
    icon: <FaPhone />,
  },
  {
    label: 'rozaybeyn.belay@gmail.com',
    href: 'mailto:rozaybeyn.belay@gmail.com',
    icon: <FaEnvelope />,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/roza-ybeyn-belay-3b9054256',
    icon: <FaLinkedin />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Rozabelay339',
    icon: <FaGithub />,
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      'React.js',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Framer Motion',
      'Bootstrap',
    ],
    icon: <FaReact />,
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST API', 'MongoDB', 'SQL'],
    icon: <FaNodeJs />,
  },
  {
    title: 'Mobilutveckling',
    skills: ['Kotlin', 'Android Studio', 'Jetpack Compose'],
    icon: <FaAndroid />,
  },
  {
    title: 'Webbsäkerhet',
    skills: ['CORS', 'CSRF', 'XSS', 'SQL Injection', 'JWT'],
    icon: <FaShieldHalved />,
  },
  {
    title: 'Verktyg',
    skills: ['Git', 'GitHub', 'VS Code', 'Agilt arbete'],
    icon: <FaCode />,
  },
];

export const projectHighlights: Project[] = [
  {
    title: 'POS-system',
    eyebrow: 'Examensarbete / LIA',
    description:
      'Teknisk förstudie och implementation av ett Android-baserat kassaflöde med Verifone PSDK, där on-device och off-device jämfördes i praktiken.',
    impact:
      'Analysen fokuserade på arkitektur, uppkoppling, kvittoutskrift, scanner, hårdvaruval och utvecklingskomplexitet.',
    stack: ['Kotlin', 'Android', 'Verifone PSDK', 'Epson ePOS', 'TCP/IP'],
    image: {
      src: posSystemImage,
      alt: 'Android POS och betalterminal i mörk premium miljö med lila och cyan ljus',
    },
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/roza-belay/pos-psdk-integration-demo',
      },
      {
        label: 'Docs',
        href: 'https://docs-pos-app.netlify.app/',
      },
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
    image: {
      src: chatAppImage,
      alt: 'Säker chattapp i mörkt UI med lila och cyan accenter',
    },
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/roza-belay/react-chat-app',
      },
    ],
  },
  {
    title: 'Webbshop med React och backend',
    eyebrow: 'Fullstack case',
    description:
      'E-handel med produktlista, produktdetaljer, login, kundvagn och orderflöden via backend-API.',
    impact:
      'Binder ihop React-komponenter, REST API, datamodeller och användarresa i ett portfolio-vänligt projekt.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    image: {
      src: webshopImage,
      alt: 'Modern dark mode webbshop med glaskort och produktgrid',
    },
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/roza-belay/webbshop-react-s-kerhet-backend',
      },
    ],
  },
];

export const education: TimelineItem[] = [
  {
    title: 'Frontendutveckling med inriktning webbsäkerhet',
    place: 'Jensen yrkeshögskola',
    period: 'Aug 2024 - Juni 2026',
    detail:
      'Examen 5 juni 2026. Fokus på React, modern frontend, backendgrunder och webbsäkerhet.',
  },
  {
    title: 'Civilingenjör - Geoteknisk ingenjör',
    place: 'Adama Science and Technology University, Etiopien',
    period: '2009 - 2014',
    detail:
      'Teknisk bakgrund med stark problemlösningsförmåga, analys och struktur.',
  },
];

export const strengths = [
  'Analytisk och problemlösande',
  'Strukturerad och noggrann',
  'Samarbetsvillig',
  'Snabb inlärning',
  'Teknisk anpassningsförmåga',
];

export const skillIcons = {
  'React.js': SiReact,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  HTML: SiHtml5,
  CSS: SiCss,
  'Tailwind CSS': SiTailwindcss,
  'Framer Motion': SiFramer,
  Bootstrap: SiBootstrap,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  MongoDB: SiMongodb,
  SQL: SiPostgresql,
  Kotlin: SiKotlin,
  'Android Studio': SiAndroidstudio,
  'Jetpack Compose': SiJetpackcompose,
  Git: SiGit,
  GitHub: SiGithub,
  JWT: SiJsonwebtokens,
  SQLite: SiSqlite,
} as const;
