import { ArrowUpRight } from "lucide-react";
import { projects, ui, type Project } from "@/content/portfolio";
import { useLang } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Work() {
  const { t } = useLang();
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8">
      <SectionHeading number="01" title={t(ui.workTitle)} />
      <div className="space-y-24">
        {projects.map((p, i) => (
          <Reveal key={p.id}>
            <ProjectCase project={p} flip={i % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCase({ project: p, flip }: { project: Project; flip: boolean }) {
  const { t } = useLang();
  return (
    <article className="grid items-start gap-8 md:grid-cols-12 md:gap-12">
      <a
        href={p.links[0]?.href ?? "#work"}
        target="_blank"
        rel="noopener noreferrer"
        className={`group block overflow-hidden rounded-md border border-rule bg-card md:col-span-7 ${flip ? "md:order-2" : ""}`}
      >
        <img
          src={p.image.src}
          alt={t(p.image.alt)}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </a>

      <div className="md:col-span-5">
        <p className="label">{t(p.context)}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight">{t(p.title)}</h3>
        <p className="mt-4 leading-relaxed text-ink-soft">{t(p.summary)}</p>

        <ul className="mt-5 space-y-2 text-sm">
          {p.points.map((pt) => (
            <li key={pt.en} className="flex gap-3">
              <span className="mt-2 h-px w-3 shrink-0 bg-pine" aria-hidden />
              {t(pt)}
            </li>
          ))}
        </ul>

        <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
          <dt className="label leading-6">{t(ui.role_label)}</dt>
          <dd>{t(p.role)}</dd>
          <dt className="label leading-6">{t(ui.stack)}</dt>
          <dd className="font-mono text-xs leading-6">{p.stack.join(" · ")}</dd>
        </dl>

        <div className="mt-6 flex flex-wrap gap-5 text-sm font-medium">
          {p.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-line inline-flex items-center gap-1 text-pine"
            >
              {t(l.label)} <ArrowUpRight className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
