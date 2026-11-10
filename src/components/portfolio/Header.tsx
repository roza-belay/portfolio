import { person, ui, type Lang } from "@/content/portfolio";
import { useLang } from "@/lib/i18n";

const links = [
  { href: "#work", text: ui.nav.work },
  { href: "#thesis", text: ui.nav.thesis },
  { href: "#about", text: ui.nav.about },
  { href: "#contact", text: ui.nav.contact },
];

export function Header() {
  const { lang, setLang, t } = useLang();

  return (
    <header className="sticky top-0 z-20 border-b border-rule bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-semibold tracking-tight">
          {person.name}
        </a>

        <nav aria-label="Main" className="flex items-center gap-5 text-sm">
          <ul className="hidden gap-6 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="link-line text-ink-soft hover:text-ink">
                  {t(l.text)}
                </a>
              </li>
            ))}
          </ul>

          <div role="group" aria-label="Language" className="flex rounded-md border border-rule p-0.5 font-mono text-xs">
            {(["en", "sv"] as Lang[]).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`rounded-sm px-2 py-1 uppercase transition-colors ${
                  lang === l ? "bg-ink text-paper" : "text-ink-soft hover:text-ink"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
