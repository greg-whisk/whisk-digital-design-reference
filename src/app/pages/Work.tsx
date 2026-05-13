import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const featured = {
  num: "01",
  client: "Maren & Decor",
  sector: "Decorative arts · DTC",
  year: "2025",
  title: "A hand-painted decorative world, brought to life with code.",
  summary:
    "We rebranded a serious figure in decorative arts — and built a CSS-only animated mural that tells her story before a single word is read.",
  tags: [
    "Brand identity",
    "Decorative arts",
    "Website redesign",
    "Motion & illustration",
    "Bespoke commissions",
  ],
  metrics: [
    { k: "21", v: "Working days" },
    { k: "+184%", v: "Booked enquiries" },
    { k: "£0", v: "Spent on JS" },
  ],
  image:
    "https://images.unsplash.com/photo-1739478470062-c0d2bb5fddfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1800&q=85",
};

type WorkItem = {
  num: string;
  client: string;
  sector: string;
  location: string;
  year: string;
  title: string;
  image: string;
};

const more: WorkItem[] = [
  {
    num: "02",
    client: "Laika Press",
    sector: "Publishing",
    location: "London",
    year: "2025",
    title: "An identity system that scales from one title to a hundred.",
    image:
      "https://images.unsplash.com/photo-1561291349-2f23e640ac9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80",
  },
  {
    num: "03",
    client: "Field Notes Wine",
    sector: "F&B · Packaging",
    location: "Sussex",
    year: "2025",
    title: "From farmers' market to Selfridges in a single sprint.",
    image:
      "https://images.unsplash.com/photo-1700104494950-b2ca510a3dd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80",
  },
  {
    num: "04",
    client: "Hoist Studio",
    sector: "Architecture",
    location: "Margate",
    year: "2024",
    title: "A wordmark and site for a practice that hates self-promotion.",
    image:
      "https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80",
  },
  {
    num: "05",
    client: "Caravan & Co.",
    sector: "Hospitality",
    location: "Cornwall",
    year: "2024",
    title: "A trader-turned-brand for a cult Cornish coffee roaster.",
    image:
      "https://images.unsplash.com/photo-1543441235-e8c913dea2d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80",
  },
];

export function WorkPage() {
  return (
    <>
      <WorkHero />
      <Featured />
      <MoreList />
      <BottomCTA />
    </>
  );
}

function WorkHero() {
  return (
    <section className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-0 max-w-[1440px] mx-auto px-6 md:px-10 opacity-[0.35]">
        <div className="grid-columns h-full w-full" />
      </div>
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-24 md:pt-40 pb-16 md:pb-24">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-2">
            <div className="eyebrow">The archive</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h1 className="text-ink leading-[0.92]">
              <span className="block font-display tracking-[-0.035em] text-[clamp(3rem,8.5vw,8rem)]">
                The work,
              </span>
              <span className="block font-display italic text-ink-muted tracking-[-0.025em] text-[clamp(2.5rem,6.5vw,6rem)] mt-2">
                by the people
              </span>
              <span className="block font-body font-bold tracking-[-0.04em] text-[clamp(3rem,8.5vw,8rem)] mt-2">
                who made it
                <span className="text-orange"> possible</span>.
              </span>
            </h1>
          </div>
        </div>

        <div className="mt-12 md:mt-20 grid grid-cols-12 gap-6 md:gap-10">
          <div className="hidden md:block md:col-span-2 eyebrow">↓ Read this first</div>
          <p className="col-span-12 md:col-span-7 text-[1.0625rem] md:text-[1.1875rem] leading-[1.55] max-w-[52ch]">
            Each project below is a rebrand, a website, and in more cases a
            digital system that keeps working long after launch. Each is
            delivered by the two of us — the same two people, every time.
          </p>
          <div className="col-span-12 md:col-span-3 flex md:justify-end items-start">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-between gap-3 h-12 px-6 rounded-full bg-ink text-cream font-medium hover:bg-orange transition-colors"
            >
              Start a project
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="border-t border-rule grid grid-cols-12 gap-6 md:gap-10 py-5">
          <div className="col-span-6 md:col-span-3 eyebrow">28 projects · 2021—2026</div>
          <div className="hidden md:block md:col-span-3 eyebrow">5 sectors</div>
          <div className="hidden md:block md:col-span-3 eyebrow">London · Remote</div>
          <div className="col-span-6 md:col-span-3 eyebrow md:text-right">
            Booking Q3 — 2 slots remaining
          </div>
        </div>
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="relative pt-12 md:pt-16 pb-20 md:pb-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-10 items-end">
          <div className="col-span-12 md:col-span-6 eyebrow">
            § Featured · The most recent one
          </div>
          <div className="hidden md:block md:col-span-6 eyebrow md:text-right">
            Read time — 6 minutes
          </div>
        </div>

        <article className="group">
          <Link to="/work/melissa-white" className="block">
            <div className="relative overflow-hidden rounded-md bg-cream-deep h-[520px] md:h-[760px]">
              <ImageWithFallback
                src={featured.image}
                alt={featured.client}
                className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[0.6875rem] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full bg-cream/90 text-ink">
                    Featured · {featured.num}
                  </span>
                  <span className="font-mono text-[0.6875rem] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full bg-cream/90 text-ink">
                    {featured.sector}
                  </span>
                  <span className="font-mono text-[0.6875rem] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full bg-cream/90 text-ink">
                    {featured.year}
                  </span>
                </div>
                <span className="w-12 h-12 rounded-full bg-orange text-cream flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0 duration-300">
                  →
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-6">
                <div className="font-display italic text-cream text-[1.25rem] md:text-[1.5rem] leading-tight tracking-tight max-w-[26ch] drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]">
                  {featured.client}
                </div>
                <div className="flex gap-8 text-cream drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]">
                  {featured.metrics.map((m) => (
                    <div key={m.v}>
                      <div className="font-display text-[1.5rem] md:text-[1.875rem] leading-none tracking-[-0.02em]">
                        {m.k}
                      </div>
                      <div className="font-mono text-[0.625rem] tracking-[0.18em] uppercase mt-1 text-cream/80">
                        {m.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>

          <div className="mt-8 md:mt-10 grid grid-cols-12 gap-6 md:gap-10 items-start">
            <div className="col-span-12 md:col-span-7">
              <h2 className="font-display text-[2rem] md:text-[3.5rem] leading-[1.02] tracking-[-0.03em] max-w-[22ch]">
                {featured.title}
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-[1rem] text-ink-muted leading-[1.6] max-w-[42ch]">
                {featured.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                {featured.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[0.6875rem] tracking-[0.12em] uppercase text-ink-muted border border-rule rounded-full px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                to="/work/melissa-white"
                className="mt-7 inline-flex items-center gap-3 h-12 px-6 rounded-full bg-orange text-cream font-medium hover:bg-orange-press transition-colors"
              >
                Read the full story
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function MoreList() {
  return (
    <section className="relative py-20 md:py-28 bg-cream-soft">
      <div aria-hidden className="absolute inset-0 grid-dots opacity-[0.25]" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-10 md:mb-14">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-3">§ Archive</div>
            <h2 className="font-display">
              Four more.
              <span className="display-italic text-ink-muted"> Same shape.</span>
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 md:col-start-9 text-[0.9375rem] text-ink-muted max-w-[36ch]">
            Each one delivered inside the twenty-one day window — strategy,
            identity, and live site. Tap through for the full write-up.
          </p>
        </div>

        <ul className="border-t border-ink">
          {more.map((item) => (
            <li key={item.num}>
              <a
                href="#"
                className="group grid grid-cols-12 gap-4 md:gap-10 py-6 md:py-7 border-b border-rule items-center hover:bg-cream transition-colors"
              >
                <div className="col-span-2 md:col-span-1">
                  <span className="font-mono text-[0.8125rem] text-orange">{item.num}</span>
                </div>
                <div className="col-span-10 md:col-span-3">
                  <div className="font-display text-[1.25rem] md:text-[1.625rem] leading-[1.1] tracking-[-0.02em]">
                    {item.client}
                  </div>
                  <div className="eyebrow mt-1">{item.sector}</div>
                </div>
                <div className="hidden md:block md:col-span-4 text-[0.9375rem] text-ink-muted leading-[1.4] max-w-[36ch]">
                  {item.title}
                </div>
                <div className="hidden md:block md:col-span-1 eyebrow">{item.location}</div>
                <div className="hidden md:block md:col-span-1 eyebrow">{item.year}</div>
                <div className="col-span-12 md:col-span-2 flex md:justify-end items-center">
                  <div className="relative w-20 h-14 md:w-24 md:h-16 rounded-md overflow-hidden bg-cream-deep shrink-0">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.client}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <span
                    aria-hidden
                    className="ml-4 w-10 h-10 rounded-full border border-rule flex items-center justify-center text-ink-muted group-hover:bg-ink group-hover:text-cream group-hover:border-ink transition-colors"
                  >
                    →
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="eyebrow">Archive · 28 projects since 2021</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[0.9375rem] hover:text-orange transition-colors self-start md:self-auto"
          >
            Request the full archive <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section className="bg-ink text-cream py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="eyebrow text-cream/60 mb-6">§ Next</div>
            <h2 className="font-display text-cream leading-[0.95] tracking-[-0.035em] text-[3rem] md:text-[6rem] max-w-[18ch]">
              See if the 321 Method
              <span className="display-italic text-orange"> is right </span>
              for your work.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col gap-3">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-between gap-3 h-14 px-6 rounded-full bg-orange text-cream font-medium hover:bg-orange-press transition-colors"
            >
              Book a strategy call
              <span aria-hidden>→</span>
            </Link>
            <Link
              to="/method"
              className="inline-flex items-center justify-between gap-3 h-14 px-6 rounded-full border border-cream/25 text-cream font-medium hover:bg-cream hover:text-ink transition-colors"
            >
              Read the 321 Method
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
