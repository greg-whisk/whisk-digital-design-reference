const logos = [
  "Maren & Co.",
  "Laika Press",
  "Field Notes",
  "Hoist",
  "Aperture Wine",
  "North Lab",
  "Studio Plié",
  "Halverson",
];

const press = [
  { name: "It's Nice That", note: "Studio of the week" },
  { name: "Brand New", note: "Featured rebrand · 2025" },
  { name: "Creative Review", note: "Annual 2025" },
];

export function Logos() {
  return (
    <section className="py-16 md:py-20 border-y border-rule">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between mb-10">
          <div className="eyebrow">Trusted by founders at</div>
          <div className="eyebrow hidden md:block">28 brands · 2021 — 2026</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-y-8 gap-x-6 items-center">
          {logos.map((l) => (
            <div
              key={l}
              className="font-display text-[1.125rem] md:text-[1.25rem] text-ink/75 hover:text-ink transition-colors"
            >
              {l}
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-rule grid grid-cols-1 md:grid-cols-3 gap-4">
          {press.map((p) => (
            <div key={p.name} className="flex items-baseline gap-3">
              <span className="font-display italic text-[1.125rem]">{p.name}</span>
              <span className="eyebrow">— {p.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
