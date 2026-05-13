const yes = [
  "You're a founder of an established business — 5 to 50 staff, real revenue.",
  "You've outgrown the identity you built on day one and you know it.",
  "You've worked with an agency before. You don't need to be sold on craft.",
  "You'd rather pay for a sharp three-week sprint than a meandering quarter.",
];

const no = [
  "Pre-revenue, pre-product, looking for a logo on the cheap.",
  "Committee approvals. Six rounds of stakeholder feedback.",
  "Looking for a vendor to execute a brief you've already written.",
  "Need ongoing retainer work — we ship and hand back, by design.",
];

export function WhoFor() {
  return (
    <section className="relative py-24 md:py-32 bg-cream-soft overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-dots opacity-[0.35]" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">§ 04 — Who this is for</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display">
              Established creatives.
              <br />
              <span className="display-italic text-ink-muted">Not first-timers.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-6 border-t border-ink pt-6">
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-display text-[2.5rem] leading-none">Yes</span>
              <span className="eyebrow">A good fit if</span>
            </div>
            <ul className="space-y-4">
              {yes.map((y) => (
                <li key={y} className="flex items-start gap-3 text-[1rem] leading-[1.55]">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange shrink-0" />
                  <span>{y}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-6 border-t border-rule pt-6">
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-display text-[2.5rem] leading-none text-ink-muted">No</span>
              <span className="eyebrow">Probably not if</span>
            </div>
            <ul className="space-y-4">
              {no.map((n) => (
                <li
                  key={n}
                  className="flex items-start gap-3 text-[1rem] leading-[1.55] text-ink-muted"
                >
                  <span className="mt-2 w-3 h-px bg-rule shrink-0 translate-y-1" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
