
import { ArrowDown, Download } from "lucide-react";
import { person, ui } from "@/content/portfolio";
import { useLang } from "@/lib/i18n";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  const { t } = useLang();

  return (
    <section
      id="top"
      className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 sm:px-8 md:grid-cols-[1fr_280px] md:pt-24"
    >
      <div>
        <p className="label">
          {t(ui.role)} — {t(ui.location)}
        </p>

        <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          {t(ui.heroTitle)}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {t(ui.heroText)}
        </p>

        <p className="mt-8 inline-flex items-center gap-2 text-sm">
          <span className="size-2 rounded-full bg-pine" aria-hidden />
          {t(ui.availability)}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a className={buttonVariants({ size: "lg" })} href="#work">
            {t(ui.seeWork)} <ArrowDown />
          </a>

          <a
            className={buttonVariants({ size: "lg", variant: "outline" })}
            href={person.cv}
            download="CV-Roza-Belay.pdf"
            title={t(ui.cvNote)}
          >
            <Download /> {t(ui.downloadCv)}
          </a>
        </div>
      </div>

      <figure className="order-first aspect-square w-32 overflow-hidden rounded-full border border-rule md:order-none md:w-full">
        <img
          src="/roza-belay.png"
          alt={person.name}
          width={280}
          height={280}
          className="size-full scale-[1.14] object-cover"
        />
      </figure>
    </section>
  );
}
