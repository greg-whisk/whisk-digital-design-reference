import { Link } from "react-router";
import { useState } from "react";

export function MethodPage() {
  return (
    <>
      <MethodHero />
      <ChapterWhy />
      <ChapterThreeTwoOne />
      <ChapterClient />
      <ChapterGetDontGet />
      <ChapterAddOns />
      <ChapterFAQ />
      <ChapterCTA />
    </>
  );
}

/* ───────────────────────────── Hero ───────────────────────────── */

function MethodHero() {
  return (
    <section className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-0 max-w-[1440px] mx-auto px-6 md:px-10 opacity-[0.35]">
        <div className="grid-columns h-full w-full" />
      </div>
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-24 md:pt-40 pb-20 md:pb-28">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-2">
            <div className="eyebrow">The Method</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h1 className="text-ink leading-[0.92]">
              <span className="block font-display tracking-[-0.035em] text-[clamp(3rem,8.5vw,8rem)]">
                Three years ahead.
              </span>
              <span className="block font-display italic text-orange tracking-[-0.025em] text-[clamp(2.25rem,6vw,5.5rem)] mt-2">
                Two people.
              </span>
              <span className="block font-body font-bold tracking-[-0.04em] text-[clamp(3rem,8.5vw,8rem)] mt-3">
                Twenty-one days<span className="text-orange">.</span>
              </span>
            </h1>
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-12 gap-6 md:gap-10">
          <div className="hidden md:block md:col-span-2 eyebrow">↓ The thesis</div>
          <p className="col-span-12 md:col-span-7 text-[1.0625rem] md:text-[1.1875rem] leading-[1.55] max-w-[52ch]">
            The 321 Method compresses a three-year brand strategy into a
            twenty-one day sprint, run by the two senior partners who sold you
            the work. No producers, no juniors, no quarter-long discovery
            phases. Just a fixed window, a fixed fee, and the same craft a
            Pentagram associate would recognise.
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
          <div className="col-span-6 md:col-span-3 eyebrow">§ 01 — Why 21 days</div>
          <div className="col-span-6 md:col-span-3 eyebrow">§ 02 — Three. Two. One.</div>
          <div className="hidden md:block md:col-span-3 eyebrow">§ 03 — What you'll do</div>
          <div className="hidden md:block md:col-span-3 eyebrow md:text-right">§ 04 — Cost & extras</div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 01 Why ───────────────────────────── */

function ChapterWhy() {
  return (
    <section className="relative py-24 md:py-32">
      <div aria-hidden className="absolute top-0 left-0 right-0 h-10 grid-dots-soft opacity-70" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-12 md:mb-20">
          <div className="col-span-12 md:col-span-6">
            <div className="eyebrow mb-5">§ 01 — Why 21 days</div>
            <h2 className="font-display">
              Slow agencies
              <span className="display-italic"> stall</span>.
              <br />
              Fast ones
              <span className="display-italic text-orange"> ship</span>.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 md:col-start-9 text-[0.9375rem] text-ink-muted max-w-[36ch]">
            We've been the people running the nine-month rebrand. It rarely
            makes the work better. It nearly always makes it harder to ship.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {[
            {
              n: "01",
              h: "Constraint sharpens taste",
              p: "When you can't fit eight directions, you fight for the one that's right. The constraint isn't a limitation. It's the brief.",
            },
            {
              n: "02",
              h: "Momentum beats consensus",
              p: "Long projects die by committee. Three weeks is short enough that the founder stays in the room and the work stays whole.",
            },
            {
              n: "03",
              h: "Predictability is the product",
              p: "You know the date. You know the fee. You can plan the launch, brief the PR firm, and tell your investors what's coming.",
            },
          ].map((item) => (
            <article key={item.n} className="col-span-12 md:col-span-4 border-t border-ink pt-5">
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-mono text-[0.875rem] text-orange">{item.n}</span>
                <span className="eyebrow">Principle</span>
              </div>
              <h3 className="font-display text-[1.5rem] md:text-[1.875rem] tracking-[-0.02em] leading-[1.1] mb-3">
                {item.h}
              </h3>
              <p className="text-[0.9375rem] text-ink-muted leading-[1.6]">{item.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 02 Three. Two. One. ───────────────────────────── */

function ChapterThreeTwoOne() {
  return (
    <section className="bg-ink text-cream py-24 md:py-40 relative overflow-hidden">
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
            <div className="eyebrow text-cream/60">§ 02 — Three. Two. One.</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-cream max-w-[20ch]">
              One strategy session.
              <br />
              <span className="display-italic text-orange">Twenty-one days </span>
              to ship it.
            </h2>
          </div>
        </div>

        {/* The 3 — three-year strategy session */}
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 gap-y-6 mb-20 md:mb-28 items-start">
          <div className="col-span-12 md:col-span-5">
            <div className="font-display text-cream leading-[0.85] text-[14rem] md:text-[22rem] tracking-[-0.06em]">
              3
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 md:pt-12">
            <div className="eyebrow text-cream/60 mb-4">Day 1 · The session</div>
            <h3 className="font-display text-cream text-[2rem] md:text-[3rem] leading-[1.05] tracking-[-0.025em] mb-6 max-w-[20ch]">
              A three-year brand strategy,
              <span className="display-italic text-orange"> written in one day</span>.
            </h3>
            <p className="text-[1rem] md:text-[1.0625rem] text-cream/75 leading-[1.6] max-w-[52ch] mb-6">
              Day one is a six-hour working session with both founders, both
              partners, and a whiteboard. We leave with a written three-year
              strategy: positioning, audience, the proof points your brand has
              to earn, and the moves you'll make in years one, two, and three.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-[0.9375rem] text-cream/85 max-w-[44ch]">
              {[
                "Positioning statement",
                "Audience definition",
                "Three-year roadmap",
                "Verbal identity sketch",
                "Proof points to earn",
                "Decision filter",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-orange mt-1">›</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* The 21 — twenty-one days execution */}
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 gap-y-6 items-start border-t border-cream/15 pt-16 md:pt-24">
          <div className="col-span-12 md:col-span-5 md:order-2 md:pl-10 md:pt-12">
            <div className="eyebrow text-cream/60 mb-4">Days 2 — 21 · The build</div>
            <h3 className="font-display text-cream text-[2rem] md:text-[3rem] leading-[1.05] tracking-[-0.025em] mb-6 max-w-[18ch]">
              Twenty days to
              <span className="display-italic text-orange"> ship the system</span>.
            </h3>
            <p className="text-[1rem] md:text-[1.0625rem] text-cream/75 leading-[1.6] max-w-[52ch] mb-6">
              The remaining twenty working days are execution. Identity system,
              applied identity, site build, hand-off. Both partners in the
              tools, daily check-ins with you, weekly milestones you can show
              the board.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-[0.9375rem] text-cream/85 max-w-[44ch]">
              {[
                "Logo + wordmark",
                "Type & colour system",
                "Component library",
                "Photography direction",
                "Website (designed + built)",
                "Hand-off documentation",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-orange mt-1">›</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-7 md:order-1">
            <div className="font-display text-cream leading-[0.85] text-[14rem] md:text-[26rem] tracking-[-0.07em]">
              21
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-28 border-t border-cream/15 pt-8 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3 eyebrow text-cream/60">The maths</div>
          <p className="col-span-12 md:col-span-9 font-display italic text-cream/85 text-[1.5rem] md:text-[2rem] leading-[1.25] max-w-[40ch]">
            One day to think three years ahead.
            <br />
            Twenty days to make them visible.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 03 Client-side journey ───────────────────────────── */

function ChapterClient() {
  const week1 = [
    { day: "Day 1", you: "Show up for a six-hour working session", we: "Diagnose the brand, write the three-year strategy" },
    { day: "Day 2", you: "Review the strategy doc with us over a 30-min call", we: "Lock the strategic brief, brief the design sprint" },
    { day: "Day 3 – 5", you: "Read one document. Send three voice notes if you have them.", we: "Two divergent visual + verbal directions, written before drawn" },
  ];
  const week2 = [
    { day: "Day 6", you: "Pick a direction in a 60-min walkthrough call", we: "Defend our recommendation. You decide." },
    { day: "Day 7 – 12", you: "One 20-min check-in each weekday morning", we: "Build the full identity system in public — you see it daily" },
  ];
  const week3 = [
    { day: "Day 13 – 17", you: "Review applied work async — site, packaging, social", we: "Apply the system to every surface that matters" },
    { day: "Day 18", you: "Sign-off call", we: "Final pass. Bug fixes. Production hand-off." },
    { day: "Day 19 – 21", you: "Launch with us in the room (virtually)", we: "Go-live, announcement post, 30 days of free support" },
  ];

  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow mb-5">§ 03 — Your three weeks</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display">
              What you'll do.
              <br />
              <span className="display-italic text-ink-muted">What we'll hand you.</span>
            </h2>
            <p className="mt-8 text-[1.0625rem] text-ink-muted max-w-[56ch] leading-[1.55]">
              Most rebrands ask you to clear your calendar for three months. We
              ask for one day, six calls, and roughly four hours a week of your
              attention. Here's what your three weeks look like from your side
              of the table.
            </p>
          </div>
        </div>

        {/* Client commitments summary card */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-20">
          {[
            { num: "1", label: "Working day", body: "Day-one strategy session. Both founders in the room." },
            { num: "6", label: "Hours / week", body: "Across short check-ins, async reviews, and one walkthrough." },
            { num: "0", label: "Decks to read", body: "Strategy lives in one document. Design lives in Figma. No theatre." },
          ].map((s) => (
            <div key={s.num} className="col-span-12 md:col-span-4 border-t border-ink pt-5">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-display text-[4.5rem] md:text-[6rem] leading-none tracking-[-0.04em]">
                  {s.num}
                </span>
                <span className="eyebrow">{s.label}</span>
              </div>
              <p className="text-[0.9375rem] text-ink-muted leading-[1.6] max-w-[34ch]">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Weekly journey */}
        {[
          { title: "Week one", subtitle: "Strategy & direction", rows: week1 },
          { title: "Week two", subtitle: "Build the system", rows: week2 },
          { title: "Week three", subtitle: "Apply, polish, ship", rows: week3 },
        ].map((wk, idx) => (
          <div key={wk.title} className={`grid grid-cols-12 gap-6 md:gap-10 ${idx > 0 ? "mt-12 md:mt-16" : ""}`}>
            <div className="col-span-12 md:col-span-3 md:sticky md:top-24 md:self-start">
              <div className="eyebrow mb-2">Phase {String(idx + 1).padStart(2, "0")}</div>
              <div className="font-display text-[2rem] md:text-[2.5rem] leading-[1.05] tracking-[-0.025em]">
                {wk.title}<span className="text-orange">.</span>
              </div>
              <div className="mt-2 font-display italic text-ink-muted text-[1.125rem]">{wk.subtitle}</div>
            </div>
            <div className="col-span-12 md:col-span-9 border-t border-ink">
              {wk.rows.map((r) => (
                <div
                  key={r.day}
                  className="grid grid-cols-12 gap-4 md:gap-6 py-6 border-b border-rule"
                >
                  <div className="col-span-12 md:col-span-2 eyebrow pt-1">{r.day}</div>
                  <div className="col-span-12 md:col-span-5">
                    <div className="eyebrow text-orange mb-2">Your part</div>
                    <p className="text-[0.9375rem] leading-[1.55]">{r.you}</p>
                  </div>
                  <div className="col-span-12 md:col-span-5">
                    <div className="eyebrow mb-2">Our part</div>
                    <p className="text-[0.9375rem] text-ink-muted leading-[1.55]">{r.we}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* What you walk away with */}
        <div className="mt-20 md:mt-28 border-t border-ink pt-10">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-10">
            <div className="col-span-12 md:col-span-3 eyebrow">What you'll walk away with</div>
            <h3 className="col-span-12 md:col-span-9 font-display text-[2rem] md:text-[3rem] leading-[1.05] tracking-[-0.025em] max-w-[20ch]">
              A brand that's
              <span className="display-italic text-orange"> already shipped</span> —
              not a deck about one.
            </h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-3 text-[0.9375rem]">
            {[
              "A three-year written strategy",
              "A full identity system",
              "A live, production website",
              "Component & token library",
              "Photography art-direction kit",
              "Launch announcement copy",
              "Press one-pager",
              "30 days of post-launch support",
              "Your team trained on the system",
            ].map((i) => (
              <li key={i} className="flex items-start gap-2 border-t border-rule pt-3">
                <span className="text-orange mt-1">›</span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 04 What you get / don't ───────────────────────────── */

function ChapterGetDontGet() {
  const get = [
    "Both senior partners, every day, for 21 days",
    "A written three-year strategy",
    "A complete visual + verbal identity",
    "A live, production-ready website",
    "30 days of post-launch support",
    "Fixed scope. Fixed fee. Fixed date.",
  ];
  const dont = [
    "An account manager. A producer. A junior.",
    "A 120-slide strategy deck nobody will read",
    "Six rounds of stakeholder feedback",
    "Long-term retainer fees",
    "Animated brand films or 3D mascots (unless extras)",
    "An ongoing relationship — we ship and hand back",
  ];

  return (
    <section className="relative py-24 md:py-32 bg-cream-soft overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-dots opacity-[0.35]" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">§ 04 — Scope</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display">
              What you get.
              <br />
              <span className="display-italic text-ink-muted">What you don't.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-6 border-t border-ink pt-6">
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-display text-[2.5rem] leading-none">Included</span>
              <span className="eyebrow">In the 321 fee</span>
            </div>
            <ul className="space-y-4">
              {get.map((y) => (
                <li key={y} className="flex items-start gap-3 text-[1rem] leading-[1.55]">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange shrink-0" />
                  <span>{y}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 border-t border-rule pt-6">
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-display text-[2.5rem] leading-none text-ink-muted">Not included</span>
              <span className="eyebrow">By design</span>
            </div>
            <ul className="space-y-4">
              {dont.map((n) => (
                <li key={n} className="flex items-start gap-3 text-[1rem] leading-[1.55] text-ink-muted">
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

/* ───────────────────────────── 05 Add-ons / shopping list ───────────────────────────── */

type AddOn = {
  name: string;
  blurb: string;
  price: string;
  unit?: string;
  tag?: string;
};

const addOnGroups: { title: string; eyebrow: string; items: AddOn[] }[] = [
  {
    eyebrow: "Strategy",
    title: "Sharper thinking",
    items: [
      { name: "Naming sprint", blurb: "A new name for a product, sub-brand, or category play. Five candidates, legally vetted.", price: "£4,500", unit: "fixed" },
      { name: "Verbal identity book", blurb: "Tone of voice, key messaging, and a written style guide your copywriters can actually use.", price: "£3,800", unit: "fixed" },
      { name: "Audience research add-on", blurb: "Ten one-hour interviews with current or target customers, synthesised.", price: "£6,000", unit: "fixed" },
    ],
  },
  {
    eyebrow: "Identity craft",
    title: "Deeper craft",
    items: [
      { name: "Custom wordmark drawing", blurb: "A drawn-from-scratch wordmark rather than a typeset one. Two weeks of letterform work.", price: "£5,500", unit: "fixed" },
      { name: "Motion identity", blurb: "Logo motion, transitions, and a short toolkit of branded motion principles.", price: "£3,200", unit: "fixed" },
      { name: "Sound identity", blurb: "Sonic logo + UI sounds, produced with a composer we trust.", price: "£4,800", unit: "from" },
      { name: "Photography art direction", blurb: "Brief, shot list, and on-set direction for a single campaign or library shoot.", price: "£3,500", unit: "from" },
    ],
  },
  {
    eyebrow: "Build & launch",
    title: "More to ship",
    items: [
      { name: "Additional site templates", blurb: "Beyond the four core templates included in the 321 build.", price: "£950", unit: "per template" },
      { name: "Headless CMS setup", blurb: "Sanity or Contentful, wired up with your content model and editor schemas.", price: "£2,400", unit: "fixed" },
      { name: "Packaging system", blurb: "Primary + secondary packaging, dielines, and print-ready artwork.", price: "£6,500", unit: "from" },
      { name: "Pitch deck", blurb: "A 20-slide investor or sales deck applying your new identity system.", price: "£2,800", unit: "fixed" },
    ],
  },
  {
    eyebrow: "Aftercare",
    title: "Keep us close",
    items: [
      { name: "Quarterly check-in", blurb: "Half-day strategy review every quarter — keep the three-year plan honest.", price: "£1,400", unit: "per quarter" },
      { name: "On-call design retainer", blurb: "Eight hours a month of senior design time. Cancel any time.", price: "£3,200", unit: "/ month" },
      { name: "Brand training workshop", blurb: "Half-day session for your in-house team to own the system after we leave.", price: "£1,800", unit: "fixed" },
    ],
  },
];

function ChapterAddOns() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-16">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-5">§ 05 — Beyond the 321</div>
            <h2 className="font-display">
              The shopping list.
              <br />
              <span className="display-italic text-orange">Bespoke on request.</span>
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 md:col-start-9 text-[0.9375rem] text-ink-muted max-w-[40ch]">
            The 321 is our core offer. These are the things founders ask for
            alongside it — bookable as standalone sprints, or stacked into a
            bespoke engagement. Prices below are typical; we'll quote properly
            after a call.
          </p>
        </div>

        {addOnGroups.map((group, gi) => (
          <div key={group.title} className={`grid grid-cols-12 gap-6 md:gap-10 ${gi > 0 ? "mt-12 md:mt-16" : ""}`}>
            <div className="col-span-12 md:col-span-3 md:sticky md:top-24 md:self-start">
              <div className="eyebrow mb-2">{group.eyebrow}</div>
              <h3 className="font-display text-[1.75rem] md:text-[2.25rem] leading-[1.05] tracking-[-0.025em]">
                {group.title}<span className="text-orange">.</span>
              </h3>
            </div>
            <div className="col-span-12 md:col-span-9 border-t border-ink">
              {group.items.map((item) => (
                <article
                  key={item.name}
                  className="grid grid-cols-12 gap-4 md:gap-6 py-7 border-b border-rule items-baseline group"
                >
                  <div className="col-span-12 md:col-span-5">
                    <h4 className="font-display text-[1.25rem] md:text-[1.5rem] tracking-[-0.02em] leading-[1.15]">
                      {item.name}
                    </h4>
                  </div>
                  <p className="col-span-12 md:col-span-5 text-[0.9375rem] text-ink-muted leading-[1.55]">
                    {item.blurb}
                  </p>
                  <div className="col-span-12 md:col-span-2 md:text-right">
                    <div className="font-display text-[1.5rem] md:text-[1.75rem] leading-none tracking-[-0.02em]">
                      {item.price}
                    </div>
                    {item.unit && (
                      <div className="eyebrow mt-1 md:text-right">{item.unit}</div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}

        {/* Bespoke callout */}
        <div className="mt-20 md:mt-28 bg-ink text-cream rounded-lg p-8 md:p-14 grid grid-cols-12 gap-6 md:gap-10 items-end relative overflow-hidden">
          <div aria-hidden className="absolute -right-10 -bottom-20 font-display text-cream/[0.04] text-[18rem] leading-none select-none">
            ⌘
          </div>
          <div className="col-span-12 md:col-span-7 relative">
            <div className="eyebrow text-cream/60 mb-4">Bespoke</div>
            <h3 className="font-display text-cream text-[2rem] md:text-[3rem] leading-[1.05] tracking-[-0.025em] max-w-[22ch]">
              Something not on the list?
              <span className="display-italic text-orange"> Tell us.</span>
            </h3>
            <p className="mt-6 text-[1rem] text-cream/75 leading-[1.6] max-w-[52ch]">
              We've shaped engagements around product launches, IPOs, M&A
              re-architecture, and "we have six weeks before the trade show."
              If you have a deadline and a problem, send us the brief.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 md:text-right relative">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-3 h-14 px-6 rounded-full bg-orange text-cream font-medium hover:bg-orange-press transition-colors"
            >
              Brief us
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 06 FAQ ───────────────────────────── */

const faqs = [
  {
    q: "What if 21 days isn't enough for our category?",
    a: "It's the right question. We've turned down work in categories where 21 days genuinely isn't enough — heavily regulated finance, multi-stakeholder healthcare, anything that needs legal review at every step. If yours is one of those, we'll say so on the first call and recommend a longer bespoke engagement.",
  },
  {
    q: "Who actually does the work?",
    a: "The two of us — Iris and Theo. No producers, no juniors, no offshore team. The people who sold you the work are the people who make it, every day.",
  },
  {
    q: "What does the £5,000 — wait, what is the fee?",
    a: "£28,000 + VAT for the full 321 engagement. Add-ons are quoted on top. Fixed fee, paid 50% on signing and 50% on launch.",
  },
  {
    q: "Can we extend if we need more time?",
    a: "Rarely. The constraint is the product. If on day 14 we agree the scope has grown, we'll quote a separate sprint rather than stretching the original window — keeps the work honest.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, before the first strategy session.",
  },
  {
    q: "Where are you based?",
    a: "London. Most engagements run remote with one in-person day for the strategy session — usually at our studio in Hackney, sometimes at yours.",
  },
];

function ChapterFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32 border-t border-rule">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">§ 06 — Frequently asked</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display">
              Things founders
              <span className="display-italic"> ask </span>
              before signing.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <ul className="col-span-12 md:col-span-9 md:col-start-4 border-t border-ink">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-b border-rule">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full py-6 md:py-7 flex items-start gap-6 text-left group"
                  >
                    <span className="font-mono text-[0.875rem] text-orange shrink-0 pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-display text-[1.25rem] md:text-[1.625rem] tracking-[-0.02em] leading-[1.2] pr-6">
                      {f.q}
                    </span>
                    <span
                      aria-hidden
                      className={`font-display text-[2rem] leading-none transition-transform text-ink-muted ${
                        isOpen ? "rotate-45 text-orange" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-7 pl-[3.25rem] pr-12 text-[0.9375rem] md:text-[1rem] text-ink-muted leading-[1.65] max-w-[64ch]">
                      {f.a}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 07 CTA ───────────────────────────── */

function ChapterCTA() {
  return (
    <section className="bg-ink text-cream pt-24 md:pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="eyebrow text-cream/60 mb-6">§ 07 — Start a project</div>
            <h2 className="font-display text-cream leading-[0.95] tracking-[-0.035em] text-[3rem] md:text-[7rem]">
              Twenty-one days
              <span className="display-italic text-orange"> from now</span>.
            </h2>
            <p className="mt-8 text-[1.0625rem] text-cream/70 max-w-[48ch]">
              Two Q3 slots remain. Thirty-minute call, no deck, no pitch — we'll
              both know inside the half hour whether we're a fit.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col gap-3">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-between gap-3 h-14 px-6 rounded-full bg-orange text-cream font-medium hover:bg-orange-press transition-colors"
            >
              Book an intro call
              <span aria-hidden>→</span>
            </Link>
            <a
              href="mailto:hello@whisk.digital"
              className="inline-flex items-center justify-between gap-3 h-14 px-6 rounded-full border border-cream/25 text-cream font-medium hover:bg-cream hover:text-ink transition-colors"
            >
              hello@whisk.digital
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
