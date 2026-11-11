
/*
 * All portfolio text lives here, in English and Swedish.
 */

export type Lang = "en" | "sv";
type T = Record<Lang, string>;

export const person = {
  name: "Roza Belay",
  email: "rozaybeyn.belay@gmail.com",
  phone: "+46 72 274 61 01",
  phoneHref: "tel:+46722746101",
  linkedin: "https://www.linkedin.com/in/roza-belay-3b9054256/",
  github: "https://github.com/roza-belay",
  cv: "/CV-Roza-Belay.pdf",
};

export const ui = {
  nav: {
    work: { en: "Work", sv: "Projekt" },
    thesis: { en: "Thesis", sv: "Examensarbete" },
    about: { en: "About", sv: "Om mig" },
    contact: { en: "Contact", sv: "Kontakt" },
  },
  role: { en: "Frontend Developer", sv: "Frontendutvecklare" },
  location: { en: "Based in Sweden", sv: "Baserad i Sverige" },
  heroTitle: {
    en: "I build clear, reliable and secure interfaces for the web.",
    sv: "Jag bygger tydliga, pålitliga och säkra gränssnitt för webben.",
  },
  heroText: {
    en: "Frontend developer specialising in web security, with hands-on experience in React, TypeScript and Android system integration. Previously a civil engineer — I bring the same analytical rigour to code.",
    sv: "Frontendutvecklare med inriktning mot webbsäkerhet och praktisk erfarenhet av React, TypeScript och systemintegration i Android. Tidigare civilingenjör — jag tar med samma analytiska noggrannhet till kod.",
  },
  availability: {
    en: "Graduating June 2026 · Open to roles in Sweden and internationally",
    sv: "Examen juni 2026 · Öppen för roller i Sverige och internationellt",
  },
  seeWork: { en: "See my work", sv: "Se mina projekt" },
  downloadCv: { en: "Download CV", sv: "Ladda ner CV" },
  cvNote: { en: "CV in Swedish (PDF)", sv: "CV på svenska (PDF)" },
  workTitle: { en: "Selected work", sv: "Utvalda projekt" },
  role_label: { en: "Role", sv: "Roll" },
  stack: { en: "Stack", sv: "Teknik" },
  thesisTitle: { en: "Thesis", sv: "Examensarbete" },
  findings: { en: "Measured results", sv: "Uppmätta resultat" },
  conclusion: { en: "Conclusion", sv: "Slutsats" },
  aboutTitle: { en: "About", sv: "Om mig" },
  experience: { en: "Experience", sv: "Erfarenhet" },
  education: { en: "Education", sv: "Utbildning" },
  skills: { en: "Skills", sv: "Kompetenser" },
  languages: { en: "Languages", sv: "Språk" },
  contactTitle: {
    en: "Looking for a frontend developer?",
    sv: "Letar du efter en frontendutvecklare?",
  },
  contactText: {
    en: "I'd be glad to hear about roles, internships or projects. Email is the fastest way to reach me.",
    sv: "Jag hör gärna om tjänster, praktik eller projekt. Mejl är snabbaste vägen att nå mig.",
  },
  footer: {
    en: "Designed and built by Roza Belay.",
    sv: "Designad och byggd av Roza Belay.",
  },
} satisfies Record<string, T | Record<string, T>>;

export type Project = {
  id: string;
  title: T;
  context: T;
  summary: T;
  role: T;
  points: T[];
  stack: string[];
  image: { src: string; alt: T };
  links: { label: T; href: string }[];
};

export const projects: Project[] = [
  {
    id: "pos",
    title: { en: "Android POS with payment terminal", sv: "Android-kassasystem med betalterminal" },
    context: { en: "Internship · Gardeco Affärssystem", sv: "LIA · Gardeco Affärssystem" },
    summary: {
      en: "A checkout flow for Android with Verifone PSDK, built in two variants — on-device and off-device — to compare them in practice.",
      sv: "Ett kassaflöde för Android med Verifone PSDK, byggt i två varianter — on-device och off-device — för att jämföra dem i praktiken.",
    },
    role: { en: "Fullstack developer (intern)", sv: "Fullstackutvecklare (LIA)" },
    points: [
      { en: "Payment flows for purchase, refund, void and split payment", sv: "Betalflöden för köp, återbetalning, makulering och delbetalning" },
      { en: "State and error handling with Coroutines and StateFlow", sv: "Tillstånds- och felhantering med Coroutines och StateFlow" },
      { en: "Receipt printer and scanner integration over TCP/IP", sv: "Integration av kvittoskrivare och skanner via TCP/IP" },
      { en: "Technical documentation site for the project", sv: "Teknisk dokumentationssajt för projektet" },
    ],
    stack: ["Kotlin", "Android", "Verifone PSDK", "Epson ePOS", "TCP/IP", "Room"],
    image: {
      src: "/pos-on-device.png",
      alt: { en: "Android POS device next to a payment terminal", sv: "Android-kassa bredvid en betalterminal" },
    },
    links: [
      { label: { en: "Documentation", sv: "Dokumentation" }, href: "https://docs-pos-app.netlify.app/" },
      { label: { en: "Code", sv: "Kod" }, href: "https://github.com/roza-belay/pos-psdk-integration-demo" },
    ],
  },
  {
    id: "webshop",
    title: { en: "Webshop with React and backend", sv: "Webbshop med React och backend" },
    context: { en: "Fullstack project", sv: "Fullstackprojekt" },
    summary: {
      en: "An e-commerce app with product list, product details, login, cart and order flow against a REST API.",
      sv: "En e-handel med produktlista, produktdetaljer, inloggning, kundvagn och orderflöde mot ett REST API.",
    },
    role: { en: "Design and development", sv: "Design och utveckling" },
    points: [
      { en: "Reusable React components and client-side routing", sv: "Återanvändbara React-komponenter och routing" },
      { en: "REST API with Node.js, Express and MongoDB", sv: "REST API med Node.js, Express och MongoDB" },
      { en: "Authentication and security-minded backend", sv: "Autentisering och säkerhetsmedveten backend" },
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    image: {
      src: "/webshop.png",
      alt: { en: "Screenshot of the webshop product grid", sv: "Skärmbild av webbshoppens produktgrid" },
    },
    links: [
      { label: { en: "Live site", sv: "Live-sajt" }, href: "https://webbshop-react.netlify.app/" },
      { label: { en: "Code", sv: "Kod" }, href: "https://github.com/roza-belay/webbshop-react-s-kerhet-backend" },
    ],
  },
  {
    id: "chat",
    title: { en: "Secure React chat app", sv: "Säker chattapp i React" },
    context: { en: "Frontend · Web security", sv: "Frontend · Webbsäkerhet" },
    summary: {
      en: "A React/Vite chat client that talks to a backend API, with authentication and protection against unsafe rendering.",
      sv: "En chattklient i React/Vite som kommunicerar med ett backend-API, med autentisering och skydd mot osäker rendering.",
    },
    role: { en: "Frontend development", sv: "Frontendutveckling" },
    points: [
      { en: "JWT-based authentication flow", sv: "Autentiseringsflöde med JWT" },
      { en: "User content sanitised with DOMPurify to prevent XSS", sv: "Användarinnehåll saneras med DOMPurify mot XSS" },
      { en: "API communication with Axios and form handling", sv: "API-kommunikation med Axios och formulärhantering" },
    ],
    stack: ["React", "Vite", "Axios", "DOMPurify", "JWT"],
    image: {
      src: "/chat-app.png",
      alt: { en: "Chat app interface", sv: "Chattappens gränssnitt" },
    },
    links: [
      { label: { en: "Code", sv: "Kod" }, href: "https://github.com/roza-belay/react-chat-app" },
    ],
  },
];

export const thesis = {
  title: {
    en: "On-device vs off-device integration with Verifone's Payment SDK",
    sv: "On-device kontra off-device integration med Verifones Payment SDK",
  },
  intro: {
    en: "An exploratory case study of how the choice of integration strategy affects Android-based POS systems — across architecture, network communication, hardware dependencies and development complexity. Both variants were built in Kotlin on the same payment flow.",
    sv: "En explorativ fallstudie av hur valet av integrationsstrategi påverkar Android-baserade kassasystem — utifrån arkitektur, nätverkskommunikation, hårdvaruberoenden och utvecklingskomplexitet. Båda varianterna byggdes i Kotlin på samma betalflöde.",
  },
  results: [
    { value: "5.9%", label: { en: "faster payment initiation on-device", sv: "kortare initieringstid för betalning on-device" } },
    { value: "77.6%", label: { en: "faster scanning with external hand scanner", sv: "snabbare skanning med extern handskanner" } },
    { value: "55.1%", label: { en: "faster printing with external receipt printer", sv: "snabbare utskrift med extern kvittoskrivare" } },
  ],
  conclusion: {
    en: "The differences lie mainly in architecture, network dependencies and peripherals — not in the payment logic. A shared API layer allowed high code reuse between both strategies. On-device is more self-contained; off-device offers more flexibility.",
    sv: "Skillnaderna ligger främst i arkitektur, nätverksberoenden och kringutrustning — inte i betalningslogiken. Ett gemensamt API-lager gav hög kodåteranvändning mellan strategierna. On-device är mer självständigt; off-device ger större flexibilitet.",
  },
};

export const about = {
  text: {
    en: "I came to frontend development from civil engineering. Five years of geotechnical studies taught me to analyse problems carefully and build things that hold. Today I apply that to the web: interfaces that are easy to use, accessible and secure by default. I enjoy the space where UI meets systems — APIs, data and hardware.",
    sv: "Jag kom till frontendutveckling från civilingenjörsyrket. Fem års studier i geoteknik lärde mig att analysera problem noggrant och bygga saker som håller. Idag använder jag det på webben: gränssnitt som är lätta att använda, tillgängliga och säkra från start. Jag trivs där UI möter system — API:er, data och hårdvara.",
  },
  experience: [
    {
      title: { en: "Fullstack Developer (internship)", sv: "Fullstackutvecklare (LIA)" },
      place: "Gardeco Affärssystem",
      period: { en: "Nov 2025 – May 2026", sv: "Nov 2025 – Maj 2026" },
    },
  ],
  education: [
    {
      title: { en: "Frontend Development, specialising in Web Security (400 YH credits)", sv: "Frontendutveckling med inriktning webbsäkerhet (400 YH-poäng)" },
      place: "Jensen yrkeshögskola",
      period: { en: "Aug 2024 – Jun 2026", sv: "Aug 2024 – Jun 2026" },
    },
    {
      title: { en: "Engineering degree, Geotechnical Engineering (assessed by UHR)", sv: "Högskoleingenjörsexamen, Geoteknik (bedömd av UHR)" },
      place: "Adama Science and Technology University",
      period: { en: "2009 – 2014", sv: "2009 – 2014" },
    },
  ],
  skills: [
    { group: { en: "Frontend", sv: "Frontend" }, items: "React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Bootstrap, Vue" },
    { group: { en: "Backend & APIs", sv: "Backend & API:er" }, items: "Node.js, Express, REST, SQL, MongoDB, Room" },
    { group: { en: "Mobile & integration", sv: "Mobil & integration" }, items: "Kotlin, Android, Jetpack Compose, Verifone PSDK, TCP/IP" },
    { group: { en: "Web security", sv: "Webbsäkerhet" }, items: "XSS, CSRF, CORS, SQL injection, JWT, GDPR basics" },
    { group: { en: "Tools & process", sv: "Verktyg & arbetssätt" }, items: "Git, GitHub, Figma, Storybook, Postman, Kanban" },
  ],
  languages: {
    en: "Swedish, English, Tigrinya, Amharic",
    sv: "Svenska, engelska, tigrinska, amhariska",
  },
};
