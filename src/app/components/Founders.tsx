import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Founders() {
  return (
    <section id="studio" className="py-24 md:py-32 bg-cream-soft">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">§ 06 — The studio</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display">
              Two people.
              <br />
              <span className="display-italic text-ink-muted">The whole studio.</span>
            </h2>
            <p className="mt-8 text-[1.0625rem] text-ink-muted max-w-[52ch] leading-[1.55]">
              No producers, no juniors, no offshore team. Just the two senior partners
              who sold you the work — building it, every day, for twenty-one days.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <article className="col-span-12 md:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-cream-deep mb-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758600433517-00f851e2a12b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80"
                alt="Iris Halvorsen"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-5 left-5 font-mono text-[0.6875rem] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full bg-cream/90 text-ink">
                01 / Strategy + verbal
              </span>
            </div>
            <div className="flex items-baseline justify-between mb-3">
              <h3 className="font-display text-[2rem]">Iris Halvorsen</h3>
              <span className="eyebrow">Partner</span>
            </div>
            <p className="text-[0.9375rem] text-ink-muted leading-[1.6] max-w-[42ch]">
              Twelve years in strategy at Wolff Olins and Pentagram. Writes the
              diagnosis, picks the fight worth picking, owns the verbal system.
            </p>
          </article>

          <article className="col-span-12 md:col-span-6 md:mt-20">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-cream-deep mb-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1599824701954-d1d141704de9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80"
                alt="Theo Park"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-5 left-5 font-mono text-[0.6875rem] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full bg-cream/90 text-ink">
                02 / Design + build
              </span>
            </div>
            <div className="flex items-baseline justify-between mb-3">
              <h3 className="font-display text-[2rem]">Theo Park</h3>
              <span className="eyebrow">Partner</span>
            </div>
            <p className="text-[0.9375rem] text-ink-muted leading-[1.6] max-w-[42ch]">
              Ex-Apple, ex-Mother. Draws the system, builds the site, hands you a
              codebase your engineers will actually want to maintain.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
