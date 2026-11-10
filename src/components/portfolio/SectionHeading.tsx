/** Numbered section heading, e.g. "01  Selected work". */
export function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-12 flex items-baseline gap-4 border-t border-ink pt-4">
      <span className="label text-pine">{number}</span>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
    </div>
  );
}
