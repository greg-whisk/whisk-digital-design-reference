export function Contact() {
  return (
    <section id="contact" className="bg-ink text-cream pt-24 md:pt-32 pb-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="eyebrow text-cream/60 mb-6">§ 07 — Start a project</div>
            <h2 className="font-display text-cream leading-[0.95] tracking-[-0.035em] text-[3.5rem] md:text-[8.5rem]">
              Let’s
              <span className="display-italic text-orange"> talk</span>.
            </h2>
            <p className="mt-8 text-[1.0625rem] text-cream/70 max-w-[44ch]">
              Two slots remaining for Q3 2026. A thirty-minute call costs you nothing
              and tells us both whether we're a fit.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col gap-3">
            <a
              href="mailto:hello@whisk.digital"
              className="inline-flex items-center justify-between gap-3 h-14 px-6 rounded-full bg-orange text-cream font-medium hover:bg-orange-press transition-colors"
            >
              hello@whisk.digital
              <span aria-hidden>→</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-between gap-3 h-14 px-6 rounded-full border border-cream/25 text-cream font-medium hover:bg-cream hover:text-ink transition-colors"
            >
              Book a 30-minute intro
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div className="mt-24 md:mt-32 pt-8 border-t border-cream/15 grid grid-cols-12 gap-6 md:gap-10 text-[0.8125rem] text-cream/60">
          <div className="col-span-6 md:col-span-3">
            <div className="eyebrow text-cream/40 mb-3">Studio</div>
            <div>Whisk Digital Ltd.</div>
            <div>22 Hackney Road</div>
            <div>London E2 7DJ</div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="eyebrow text-cream/40 mb-3">Index</div>
            <ul className="space-y-1">
              <li><a className="hover:text-cream" href="#work">Selected work</a></li>
              <li><a className="hover:text-cream" href="#method">The 321 Method</a></li>
              <li><a className="hover:text-cream" href="#process">Process</a></li>
              <li><a className="hover:text-cream" href="#studio">Studio</a></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="eyebrow text-cream/40 mb-3">Elsewhere</div>
            <ul className="space-y-1">
              <li><a className="hover:text-cream" href="#">Instagram</a></li>
              <li><a className="hover:text-cream" href="#">Are.na</a></li>
              <li><a className="hover:text-cream" href="#">LinkedIn</a></li>
              <li><a className="hover:text-cream" href="#">Read.cv</a></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3 md:text-right">
            <div className="eyebrow text-cream/40 mb-3">Colophon</div>
            <div>Set in Fraunces & Poppins.</div>
            <div>© Whisk Digital, 2021—2026.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
