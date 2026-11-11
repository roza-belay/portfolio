import { thesis, ui } from "@/content/portfolio";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Thesis() {
  const { t } = useLang();
  return (
    <section id="thesis" className="scroll-mt-14 border-y border-rule bg-card py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading number="02" title={t(ui.thesisTitle)} />
        <Reveal>
          <h3 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {t(thesis.title)}
          </h3>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-soft">{t(thesis.intro)}</p>
        </Reveal>

        <Reveal className="mt-14">
          <p className="label mb-6">{t(ui.findings)}</p>
          <dl className="grid gap-8 border-t border-rule pt-8 sm:grid-cols-3">
            {thesis.results.map((r) => (
              <div key={r.value}>
                <dt className="sr-only">{t(r.label)}</dt>
                <dd>
                  <span className="block text-5xl font-semibold tracking-tight text-pine">{r.value}</span>
                  <span className="mt-2 block text-sm text-ink-soft">{t(r.label)}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal className="mt-14 max-w-3xl border-l-2 border-pine pl-6">
          <p className="label mb-2">{t(ui.conclusion)}</p>
          <p className="leading-relaxed">{t(thesis.conclusion)}</p>
        </Reveal>
      </div>
    </section>
  );
}
