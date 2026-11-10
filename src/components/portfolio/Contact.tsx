import { ArrowUpRight, Mail } from "lucide-react";
import { person, ui } from "@/content/portfolio";
import { useLang } from "@/lib/i18n";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function Contact() {
  const { t } = useLang();
  const links = [
    { label: "LinkedIn", href: person.linkedin },
    { label: "GitHub", href: person.github },
    { label: t(ui.downloadCv), href: person.cv },
  ];

  return (
    <section id="contact" className="scroll-mt-14 border-t border-rule bg-accent/60">
      <Reveal className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <p className="label text-pine">04 — {t(ui.nav.contact)}</p>
        <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {t(ui.contactTitle)}
        </h2>
        <p className="mt-5 max-w-xl text-lg text-ink-soft">{t(ui.contactText)}</p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a className={buttonVariants({ size: "lg" })} href={`mailto:${person.email}`}>
              <Mail /> {person.email}
            </a>
          <a href={person.phoneHref} className="link-line font-mono text-sm">
            {person.phone}
          </a>
        </div>

        <ul className="mt-12 flex flex-wrap gap-6 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="link-line inline-flex items-center gap-1">
                {l.label} <ArrowUpRight className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
