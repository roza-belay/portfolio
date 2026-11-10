import { createFileRoute } from "@tanstack/react-router";
import { LangProvider, useLang } from "@/lib/i18n";
import { person, ui } from "@/content/portfolio";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { Work } from "@/components/portfolio/Work";
import { Thesis } from "@/components/portfolio/Thesis";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";

const title = "Roza Belay — Frontend Developer";
const description =
  "Roza Belay, frontend developer in Sweden specialising in web security. React, TypeScript and Android POS integration with Verifone PSDK.";

// Structured data: tells Google and AI assistants who this page is about.
// Built from the content file so it stays in sync with the visible page.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: ui.role.en,
  email: `mailto:${person.email}`,
  address: { "@type": "PostalAddress", addressCountry: "SE" },
  sameAs: [person.linkedin, person.github],
  knowsAbout: ["Frontend development", "React", "TypeScript", "Web security", "Kotlin", "Android", "Verifone PSDK"],
  knowsLanguage: ["sv", "en", "ti", "am"],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: person.name },
      { property: "og:locale", content: "en_GB" },
      { property: "og:locale:alternate", content: "sv_SE" },
      { property: "profile:first_name", content: "Roza" },
      { property: "profile:last_name", content: "Belay" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(personSchema) }],
  }),
  component: Index,
});

function Index() {
  return (
    <LangProvider>
      <Header />
      <main>
        <Hero />
        <Work />
        <Thesis />
        <About />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-5 py-8 text-sm text-ink-soft sm:px-8">
      <span>© {new Date().getFullYear()} Roza Belay</span>
      <span>{t(ui.footer)}</span>
    </footer>
  );
}
