import { ImageWithFallback } from "./figma/ImageWithFallback";

type WorkItem = {
  num: string;
  client: string;
  sector: string;
  title: string;
  image: string;
  span: string;
  height: string;
  bg?: string;
};

const items: WorkItem[] = [
  {
    num: "01",
    client: "Maren & Co.",
    sector: "DTC · Skincare",
    title: "A quiet rebrand for a cult skincare label entering the US.",
    image:
      "https://images.unsplash.com/photo-1543441235-e8c913dea2d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600&q=80",
    span: "md:col-span-7",
    height: "h-[520px] md:h-[640px]",
  },
  {
    num: "02",
    client: "Laika Press",
    sector: "Publishing",
    title: "An identity system that scales from one title to a hundred.",
    image:
      "https://images.unsplash.com/photo-1561291349-2f23e640ac9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80",
    span: "md:col-span-5",
    height: "h-[420px] md:h-[640px]",
    bg: "bg-pink-soft",
  },
  {
    num: "03",
    client: "Field Notes Wine",
    sector: "F&B · Packaging",
    title: "From farmers' market to Selfridges in a single sprint.",
    image:
      "https://images.unsplash.com/photo-1700104494950-b2ca510a3dd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1400&q=80",
    span: "md:col-span-5",
    height: "h-[420px] md:h-[540px]",
    bg: "bg-cream-deep",
  },
  {
    num: "04",
    client: "Hoist Studio",
    sector: "Architecture",
    title: "A wordmark and site for a practice that hates self-promotion.",
    image:
      "https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1400&q=80",
    span: "md:col-span-7",
    height: "h-[420px] md:h-[540px]",
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="relative pt-20 md:pt-28 pb-20 md:pb-32">
      <div aria-hidden className="absolute top-0 left-0 right-0 h-10 grid-dots-soft opacity-70" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-12 md:mb-20">
          <div className="col-span-12 md:col-span-6">
            <div className="eyebrow mb-5">§ 01 — Selected work</div>
            <h2 className="font-display">
              Proof, on
              <span className="display-italic"> schedule</span>.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 md:col-start-9 text-[0.9375rem] text-ink-muted max-w-[36ch]">
            Four recent engagements. Each delivered inside the twenty-one day window —
            strategy, identity system, and live site.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {items.map((item) => (
            <a
              key={item.num}
              href="/work"
              className={`col-span-12 ${item.span} group block`}
            >
              <div className={`relative overflow-hidden rounded-md ${item.bg ?? "bg-cream-deep"} ${item.height}`}>
                <ImageWithFallback
                  src={item.image}
                  alt={item.client}
                  className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                  <span className="font-mono text-[0.6875rem] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full bg-cream/90 text-ink">
                    {item.num} / {item.sector}
                  </span>
                  <span className="w-10 h-10 rounded-full bg-cream/90 text-ink flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-1 group-hover:translate-y-0 duration-300">
                    →
                  </span>
                </div>
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-6">
                <h3 className="font-display max-w-[28ch]">{item.title}</h3>
                <div className="shrink-0 text-right">
                  <div className="font-display text-[1.125rem]">{item.client}</div>
                  <div className="eyebrow mt-1">21 days · 2025</div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 md:mt-20 border-t border-rule pt-8 flex items-center justify-between">
          <p className="eyebrow">Archive · 28 projects since 2021</p>
          <a href="/work" className="inline-flex items-center gap-2 text-[0.9375rem] hover:text-orange transition-colors">
            View the full archive <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
