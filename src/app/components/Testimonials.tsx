type Quote = {
  text: string;
  name: string;
  role: string;
};

const quotes: Quote[] = [
  {
    text: "They reframed our positioning in a single afternoon. The identity work was almost a by-product of how clear the thinking became.",
    name: "Marcus Lee",
    role: "Founder, Field Notes Wine",
  },
  {
    text: "Twenty-one days felt impossible until day twenty-two, when we'd shipped. The constraint isn't a gimmick — it's the product.",
    name: "Rae Okonkwo",
    role: "CEO, Laika Press",
  },
  {
    text: "Working with two senior partners is the difference. Every conversation moved the brief forward. Nothing got lost in translation.",
    name: "Jonas Wirth",
    role: "Principal, Hoist Studio",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">§ 05 — What clients say</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display max-w-[16ch]">
              The work
              <span className="display-italic"> earns </span>
              the next one.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {quotes.map((q, i) => (
            <figure
              key={q.name}
              className={`col-span-12 md:col-span-4 ${
                i === 1 ? "md:mt-16" : i === 2 ? "md:mt-32" : ""
              }`}
            >
              <div className="font-display text-orange text-[3rem] leading-none mb-4">"</div>
              <blockquote className="font-display italic text-[1.5rem] md:text-[1.625rem] leading-[1.25] tracking-[-0.015em] max-w-[28ch]">
                {q.text}
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-rule">
                <div className="font-display text-[1.0625rem]">{q.name}</div>
                <div className="eyebrow mt-1">{q.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
