import { about, ui } from "@/content/portfolio";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8">
      <SectionHeading number="03" title={t(ui.aboutTitle)} />

      <div className="grid gap-14 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="text-lg leading-relaxed">{t(about.text)}</p>
          <p className="label mt-10">{t(ui.languages)}</p>
          <p className="mt-2">{t(about.languages)}</p>
        </Reveal>

        <Reveal className="space-y-10 md:col-span-7">
          <Timeline title={t(ui.experience)} items={about.experience} />
          <Timeline title={t(ui.education)} items={about.education} />

          <div>
            <p className="label mb-4">{t(ui.skills)}</p>
            <dl className="divide-y divide-rule border-y border-rule">
              {about.skills.map((s) => (
                <div key={s.group.en} className="grid gap-1 py-3 sm:grid-cols-[180px_1fr]">
                  <dt className="font-medium">{t(s.group)}</dt>
                  <dd className="text-ink-soft">{s.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type Item = { title: Record<"en" | "sv", string>; place: string; period: Record<"en" | "sv", string> };

function Timeline({ title, items }: { title: string; items: Item[] }) {
  const { t } = useLang();
  return (
    <div>
      <p className="label mb-4">{title}</p>
      <ul className="space-y-4">
        {items.map((it) => (
          <li key={it.place} className="grid gap-1 sm:grid-cols-[180px_1fr]">
            <span className="font-mono text-xs leading-6 text-ink-soft">{t(it.period)}</span>
            <span>
              <span className="font-medium">{t(it.title)}</span>
              <span className="block text-ink-soft">{it.place}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
