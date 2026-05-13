type Stat = {
  num: string;
  label: string;
  body: string;
};

const stats: Stat[] = [
  {
    num: "3",
    label: "Founders in the room",
    body: "Every engagement runs with both of us and you. No account managers, no juniors learning on your time.",
  },
  {
    num: "2",
    label: "Concept directions",
    body: "Two fully-developed routes — not seven thumbnails. We pick the strongest, kill the rest, defend our choice.",
  },
  {
    num: "1",
    label: "Twenty-one day sprint",
    body: "One contained window from kickoff to launch. Predictable for your team, accountable for us.",
  },
];

export function Method() {
  return (
    <section id="method" className="bg-ink text-cream py-24 md:py-40 relative overflow-hidden">
      {/* faint orange column rules — anchors the ink slab to a grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 max-w-[1440px] mx-auto px-6 md:px-10 opacity-[0.08]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, transparent 0, transparent calc((100% / 12) - 1px), var(--orange) calc((100% / 12) - 1px), var(--orange) calc(100% / 12))",
          }}
        />
      </div>
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow text-cream/60">§ 02 — The 321 Method</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-cream max-w-[18ch]">
              A rebrand,
              <span className="display-italic text-orange"> reduced </span>
              to three numbers.
            </h2>
            <p className="mt-8 text-[1.0625rem] text-cream/70 max-w-[52ch]">
              Most agencies sell process. We sell constraint. The 321 Method is the
              shape that lets us deliver Pentagram-grade work in three weeks instead
              of nine months — without cutting corners on the craft.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 gap-y-12 md:gap-y-0">
          {stats.map((s, i) => (
            <div
              key={s.num}
              className={`col-span-12 md:col-span-4 relative ${
                i > 0 ? "md:border-l md:border-cream/15 md:pl-10" : ""
              }`}
            >
              <div className="font-display text-cream leading-none text-[12rem] md:text-[16rem] tracking-[-0.05em]">
                {s.num}
              </div>
              <div className="mt-4 eyebrow text-cream/60">{s.label}</div>
              <p className="mt-4 text-[0.9375rem] text-cream/70 max-w-[32ch] leading-[1.6]">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-28 border-t border-cream/15 pt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <p className="font-display italic text-cream/80 text-[1.5rem] md:text-[2rem] max-w-[28ch] leading-[1.2]">
            "It was the calmest rebrand we've ever run."
          </p>
          <div className="text-right">
            <div className="font-display">Elsa Bergström</div>
            <div className="eyebrow text-cream/60 mt-1">CEO, Maren & Co.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
