type Stage = {
  num: string;
  days: string;
  title: string;
  body: string;
  outputs: string[];
};

const stages: Stage[] = [
  {
    num: "01",
    days: "Days 1–3",
    title: "Listen",
    body: "Two long conversations. Customers, competitors, the things you can't say out loud about your category. We leave with a written diagnosis, not a mood board.",
    outputs: ["Diagnosis memo", "Strategic brief"],
  },
  {
    num: "02",
    days: "Days 4–8",
    title: "Direct",
    body: "Two divergent territories — written before they're drawn. We argue for the one that sharpens your business, not the one that wins on Dribbble.",
    outputs: ["Two written directions", "Verbal identity sketch"],
  },
  {
    num: "03",
    days: "Days 9–14",
    title: "Design",
    body: "The identity system gets built in public — wordmark, palette, type, motion, the unglamorous components nobody else shows. You see it daily.",
    outputs: ["Full visual system", "Component library"],
  },
  {
    num: "04",
    days: "Days 15–18",
    title: "Apply",
    body: "Site, deck, packaging, social — every surface your brand actually lives on. Built in Figma + handed off as code, not as JPGs.",
    outputs: ["Live site", "Hand-off kit"],
  },
  {
    num: "05",
    days: "Days 19–21",
    title: "Ship",
    body: "Launch week. We sit alongside your team for go-live, write the announcement post, and stay on for thirty days to tune anything that creaks.",
    outputs: ["Launch + 30-day support"],
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-5">§ 03 — How it works</div>
            <h2 className="font-display">
              Five stages.
              <br />
              <span className="display-italic text-ink-muted">Twenty-one days.</span>
            </h2>
          </div>
          <div className="hidden md:block md:col-span-4 md:col-start-9 text-[0.875rem] text-ink-muted">
            <div className="flex items-center justify-between border-b border-rule pb-3 mb-3">
              <span className="eyebrow">Engagement</span>
              <span>Fixed scope · Fixed fee</span>
            </div>
            <div className="flex items-center justify-between border-b border-rule pb-3 mb-3">
              <span className="eyebrow">Team</span>
              <span>Two senior partners</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="eyebrow">Cadence</span>
              <span>Daily 15-min check-in</span>
            </div>
          </div>
        </div>

        <ol className="space-y-0">
          {stages.map((stage, i) => (
            <li
              key={stage.num}
              className={`grid grid-cols-12 gap-6 md:gap-10 py-8 md:py-10 ${
                i === 0 ? "border-t" : ""
              } border-b border-rule group hover:bg-cream-soft transition-colors`}
            >
              <div className="col-span-3 md:col-span-1 flex items-start">
                <span className="font-mono text-[0.875rem] text-orange">{stage.num}</span>
              </div>
              <div className="col-span-9 md:col-span-2 eyebrow pt-1">{stage.days}</div>
              <div className="col-span-12 md:col-span-4">
                <h3 className="font-display text-[2rem] md:text-[2.75rem] leading-none tracking-[-0.025em]">
                  {stage.title}
                  <span className="text-orange">.</span>
                </h3>
              </div>
              <div className="col-span-12 md:col-span-3 text-[0.9375rem] text-ink-muted leading-[1.55]">
                {stage.body}
              </div>
              <div className="col-span-12 md:col-span-2">
                <div className="eyebrow mb-2">Outputs</div>
                <ul className="space-y-1 text-[0.875rem]">
                  {stage.outputs.map((o) => (
                    <li key={o} className="flex items-start gap-2">
                      <span className="text-orange mt-1">›</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
