import { Link } from "react-router";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

/* ─────────────────────────── Founder data ─────────────────────────── */

const partners = [
  {
    first: "Greg",
    last: "Halverson",
    role: "Design partner",
    portrait:
      "https://images.unsplash.com/photo-1611811445526-88f3e2ffd299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1400&q=85",
    pull: "Twenty years drawing the thing other people will copy.",
    bio: "Twenty years on the design side of the table — ex-Pentagram, ex-Wolff Olins, then a decade as a freelancer working with the studios you'd expect. I draw the system, sweat the components, write the code, and stay until the launch is clean.",
    stats: [
      { k: "20 yrs", v: "On the design side" },
      { k: "300+", v: "Projects shipped" },
      { k: "1", v: "Pentagram colophon" },
    ],
    elsewhere: [
      { name: "Are.na", to: "#" },
      { name: "Read.cv", to: "#" },
      { name: "Instagram", to: "#" },
    ],
  },
  {
    first: "Fliss",
    last: "Park",
    role: "Strategy partner",
    portrait:
      "https://images.unsplash.com/photo-1773394184353-b5f9922829f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1400&q=85",
    pull: "I read the room before I write the brief.",
    bio: "Oxbridge-educated, formerly in strategy at a holding-company giant before walking out to do it properly. I run the day-one strategy session, write the verbal identity, and sit alongside founders when the hard decisions land. I'm the one you'll text at 11pm.",
    stats: [
      { k: "Oxbridge", v: "PPE, First" },
      { k: "60+", v: "Strategy days run" },
      { k: "9pm", v: "Latest text I'll reply to" },
    ],
    elsewhere: [
      { name: "Substack", to: "#" },
      { name: "LinkedIn", to: "#" },
      { name: "Email", to: "mailto:fliss@whisk.digital" },
    ],
  },
];

const channels = [
  {
    label: "In person",
    detail: "Hastings studio · Or yours, on the train route",
    note: "We come to you within 90 mins of London. Coffee on us.",
    icon: "◐",
  },
  {
    label: "WhatsApp",
    detail: "+44 7700 900 123",
    note: "Voice notes welcome. Faster than email, less ceremony than a call.",
    icon: "△",
  },
  {
    label: "Phone",
    detail: "Same number, dial-and-talk",
    note: "Sometimes the fastest way is just a phone. We pick up.",
    icon: "◑",
  },
  {
    label: "Email",
    detail: "hello@whisk.digital",
    note: "For the long stuff. Replies within a working day, always.",
    icon: "✦",
  },
  {
    label: "Video",
    detail: "Zoom, Meet, Loom — whatever you use",
    note: "Async Looms for walkthroughs. Live calls for the calls that matter.",
    icon: "◧",
  },
  {
    label: "Letter",
    detail: "The Studio, Hastings, TN34",
    note: "Yes really. We've signed two contracts this way.",
    icon: "✉",
  },
];

const principles = [
  {
    n: "01",
    h: "Two seniors. Always.",
    p: "The people who sold you the work are the people who do it. No producers, no juniors, no offshore studio you didn't agree to.",
  },
  {
    n: "02",
    h: "AI-amplified, not AI-led.",
    p: "We use Claude, Cursor, Midjourney, and a dozen smaller tools every day. They make a two-person studio behave like ten — but the taste, the strategy, and the hand stay human.",
  },
  {
    n: "03",
    h: "Meet you where you are.",
    p: "WhatsApp, phone, train, plane, Loom, letter. You don't have to come to us, and you don't have to learn our tools.",
  },
  {
    n: "04",
    h: "Fixed scope, fixed fee, fixed date.",
    p: "Predictability is the product. You know the date, the price, and the shape before we start.",
  },
  {
    n: "05",
    h: "Ship and hand back.",
    p: "We're not a retainer agency. We finish, train your team, and go. The work is yours.",
  },
];

const week = [
  { day: "Mon", you: "Strategy session starts", us: "Both partners, six hours, one whiteboard" },
  { day: "Tue", us: "Direction writing", you: "Voice notes welcome" },
  { day: "Wed", us: "Design system day", you: "Optional walkthrough" },
  { day: "Thu", us: "Build day", you: "" },
  { day: "Fri", us: "Friday show & tell", you: "60-min walkthrough call" },
  { day: "Sat / Sun", us: "Off — we have lives", you: "So do you" },
];

const testimonials = [
  {
    quote:
      "I texted Fliss at 10pm on a Sunday with a panic. She replied with the actual answer at 10:04pm. That's the studio in one screenshot.",
    name: "Marcus Lee",
    role: "Founder, Field Notes Wine",
  },
  {
    quote:
      "Greg drew the wordmark in front of me, on an iPad, in twenty minutes. That's twenty years of hand showing up in real time.",
    name: "Rae Okonkwo",
    role: "CEO, Laika Press",
  },
  {
    quote:
      "We've worked with three big agencies. Whisk delivered more in 21 days than the others did in a year. It's not even close.",
    name: "Jonas Wirth",
    role: "Principal, Hoist Studio",
  },
  {
    quote:
      "I never felt like a client. I felt like a third partner — except they did all the work.",
    name: "Melissa White",
    role: "Decorative artist",
  },
];

const noTo = [
  "Retainers — we finish and hand back.",
  "Committees — one decision-maker per project, please.",
  "Rebrands without strategy — the strategy is the brand.",
  "AI-generated finished art — we use the tools; we don't ship their first draft.",
  "Annual reports, slide decks for boards, internal comms.",
  "Anything we wouldn't put in our own colophon.",
];

/* ─────────────────────────── Page ─────────────────────────── */

export function StudioPage() {
  return (
    <>
      <StudioHero />
      <ThePair />
      <Principles />
      <Channels />
      <AWeek />
      <Testimonials />
      <TheSpace />
      <NoTo />
      <CTA />
    </>
  );
}

/* ─────────────────────────── Hero ─────────────────────────── */

function StudioHero() {
  return (
    <section className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-0 max-w-[1440px] mx-auto px-6 md:px-10 opacity-[0.3]">
        <div className="grid-columns h-full w-full" />
      </div>
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-24 md:pt-40 pb-20 md:pb-28">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-2 eyebrow">The Studio</div>
          <h1 className="col-span-12 md:col-span-10 text-ink leading-[0.92]">
            <span className="block font-display tracking-[-0.035em] text-[clamp(3rem,8.5vw,8rem)]">
              Two people.
            </span>
            <span className="block font-display italic text-ink-muted tracking-[-0.025em] text-[clamp(2.25rem,6vw,5.5rem)] mt-2">
              One studio in Hastings.
            </span>
            <span className="block font-body font-bold tracking-[-0.04em] text-[clamp(3rem,8.5vw,8rem)] mt-3">
              Different
              <span className="text-orange"> on purpose</span>.
            </span>
          </h1>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-12 gap-6 md:gap-10">
          <div className="hidden md:block md:col-span-2 eyebrow">↓ Why two</div>
          <p className="col-span-12 md:col-span-7 text-[1.0625rem] md:text-[1.1875rem] leading-[1.55] max-w-[54ch]">
            Whisk is the two of us — Greg, who's been on the design side for
            twenty years, and Fliss, Oxbridge-trained, who runs the strategy.
            We work the way an old-fashioned studio worked, sped up by every
            useful tool that's been invented since. We reply to texts. We meet
            on trains. We finish on time. We're proud of all three.
          </p>
          <div className="col-span-12 md:col-span-3 flex md:justify-end items-start">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-between gap-3 h-12 px-6 rounded-full bg-ink text-cream font-medium hover:bg-orange transition-colors"
            >
              Say hello
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="border-t border-rule grid grid-cols-12 gap-6 md:gap-10 py-5">
          <div className="col-span-6 md:col-span-3 eyebrow">Two senior partners</div>
          <div className="hidden md:block md:col-span-3 eyebrow">Hastings · Remote</div>
          <div className="hidden md:block md:col-span-3 eyebrow">28 projects since 2021</div>
          <div className="col-span-6 md:col-span-3 eyebrow md:text-right">
            Booking Q3 — 2 slots remaining
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── The pair ─────────────────────────── */

function ThePair() {
  return (
    <section className="relative pt-20 md:pt-28 pb-24 md:pb-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-3 eyebrow">§ 01 — The pair</div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display">
              Senior hands.
              <span className="display-italic"> Both of them</span>.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {partners.map((p, i) => (
            <article
              key={p.first}
              className={`col-span-12 md:col-span-6 ${i === 1 ? "md:mt-24" : ""}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-cream-deep mb-6">
                <ImageWithFallback
                  src={p.portrait}
                  alt={`${p.first} ${p.last}`}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-5 left-5 font-mono text-[0.6875rem] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full bg-cream/90 text-ink">
                  {String(i + 1).padStart(2, "0")} / {p.role}
                </span>
              </div>

              <h3 className="font-display text-[2.25rem] md:text-[3rem] leading-[1.02] tracking-[-0.03em]">
                {p.first}
                <span className="display-italic text-ink-muted"> {p.last}</span>
                <span className="text-orange">.</span>
              </h3>

              <p className="mt-4 font-display italic text-orange text-[1.125rem] md:text-[1.375rem] leading-[1.25] max-w-[34ch]">
                "{p.pull}"
              </p>

              <p className="mt-5 text-[0.9375rem] md:text-[1rem] text-ink-muted leading-[1.65] max-w-[44ch]">
                {p.bio}
              </p>

              <div className="mt-7 pt-5 border-t border-rule grid grid-cols-3 gap-4">
                {p.stats.map((s) => (
                  <div key={s.v}>
                    <div className="font-display text-[1.75rem] md:text-[2rem] leading-none tracking-[-0.02em]">
                      {s.k}
                    </div>
                    <div className="eyebrow mt-1">{s.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                {p.elsewhere.map((e) => (
                  <a
                    key={e.name}
                    href={e.to}
                    className="font-mono text-[0.6875rem] tracking-[0.12em] uppercase text-ink-muted border border-rule rounded-full px-3 py-1 hover:bg-ink hover:text-cream hover:border-ink transition-colors"
                  >
                    {e.name}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Principles ─────────────────────────── */

function Principles() {
  return (
    <section className="relative bg-ink text-cream py-24 md:py-32 overflow-hidden">
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
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-20">
          <div className="col-span-12 md:col-span-3 eyebrow text-cream/60">
            § 02 — How we work
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-cream max-w-[20ch]">
              A two-person studio,
              <span className="display-italic text-orange"> super-powered</span>.
            </h2>
            <p className="mt-8 text-[1.0625rem] text-cream/70 max-w-[56ch] leading-[1.6]">
              We're small on purpose, agile by design, and amplified by every
              good tool that's been built in the last three years. That's why
              we can do in three weeks what a fifty-person agency does in nine
              months — and why working with us feels more like phoning a friend
              than briefing a vendor.
            </p>
          </div>
        </div>

        <ol className="border-t border-cream/15">
          {principles.map((p) => (
            <li
              key={p.n}
              className="grid grid-cols-12 gap-6 md:gap-10 py-7 md:py-9 border-b border-cream/15 hover:bg-cream/[0.03] transition-colors"
            >
              <div className="col-span-3 md:col-span-1 font-mono text-[0.875rem] text-orange pt-1">
                {p.n}
              </div>
              <div className="col-span-12 md:col-span-5">
                <h3 className="font-display text-cream text-[1.75rem] md:text-[2.5rem] leading-[1.05] tracking-[-0.025em]">
                  {p.h}
                </h3>
              </div>
              <p className="col-span-12 md:col-span-6 text-[0.9375rem] md:text-[1rem] text-cream/70 leading-[1.65] max-w-[52ch]">
                {p.p}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─────────────────────────── Channels ─────────────────────────── */

function Channels() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-5">§ 03 — Where to find us</div>
            <h2 className="font-display">
              We'll meet you
              <br />
              <span className="display-italic text-orange">where you are</span>.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 md:col-start-9 text-[0.9375rem] text-ink-muted max-w-[36ch]">
            Six channels. Pick whichever feels easy. We'll match your pace, your
            tone, and your hours — within reason.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 gap-y-10">
          {channels.map((c, i) => (
            <article
              key={c.label}
              className={`col-span-12 md:col-span-4 ${
                i % 3 !== 0 ? "md:border-l md:border-rule md:pl-10" : ""
              }`}
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-display text-orange text-[1.75rem] leading-none">
                  {c.icon}
                </span>
                <span className="eyebrow">{c.label}</span>
              </div>
              <div className="font-display text-[1.5rem] md:text-[1.75rem] leading-[1.1] tracking-[-0.02em] mb-3">
                {c.detail}
              </div>
              <p className="text-[0.9375rem] text-ink-muted leading-[1.55] max-w-[36ch]">
                {c.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── A week at Whisk ─────────────────────────── */

function AWeek() {
  return (
    <section className="relative py-24 md:py-32 bg-cream-soft overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-dots opacity-[0.25]" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-16 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-5">§ 04 — A week at Whisk</div>
            <h2 className="font-display">
              Mondays start.
              <span className="display-italic text-ink-muted"> Fridays show</span>.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 md:col-start-9 text-[0.9375rem] text-ink-muted max-w-[36ch]">
            We work in weekly beats — Monday strategy, Friday show-and-tell. You
            always know what's happening, and when you'll see it.
          </p>
        </div>

        <ul className="border-t border-ink">
          {week.map((d) => (
            <li
              key={d.day}
              className="grid grid-cols-12 gap-4 md:gap-10 py-5 md:py-6 border-b border-rule items-center"
            >
              <div className="col-span-3 md:col-span-2 eyebrow">{d.day}</div>
              <div className="col-span-9 md:col-span-5 font-display text-[1.125rem] md:text-[1.375rem] tracking-[-0.015em] leading-[1.2]">
                {d.us}
              </div>
              <div className="col-span-12 md:col-span-5 text-[0.875rem] text-ink-muted">
                {d.you && (
                  <>
                    <span className="eyebrow text-orange mr-2">You</span>
                    <span>{d.you}</span>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─────────────────────────── Testimonials carousel ─────────────────────────── */

function Testimonials() {
  const [active, setActive] = useState(0);
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-16 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-5">§ 05 — Said about us</div>
            <h2 className="font-display">
              Founders who've
              <span className="display-italic"> done both</span>.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 md:col-start-9 text-[0.9375rem] text-ink-muted max-w-[36ch]">
            What clients say after they've also worked with a bigger agency.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="col-span-12 md:col-span-8">
            <div className="font-display text-orange text-[4rem] md:text-[5rem] leading-none mb-2">"</div>
            <blockquote
              key={active}
              className="font-display italic text-[1.75rem] md:text-[3rem] leading-[1.2] tracking-[-0.02em] max-w-[34ch]"
            >
              {testimonials[active].quote}
            </blockquote>
            <div className="mt-8 pt-5 border-t border-ink flex items-baseline justify-between max-w-[42rem]">
              <div>
                <div className="font-display text-[1.125rem]">
                  {testimonials[active].name}
                </div>
                <div className="eyebrow mt-1">{testimonials[active].role}</div>
              </div>
              <div className="font-mono text-[0.6875rem] tracking-[0.18em] uppercase text-ink-muted">
                {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 md:pl-6">
            <div className="eyebrow mb-4">Pick a voice</div>
            <ul className="space-y-2">
              {testimonials.map((t, i) => (
                <li key={t.name}>
                  <button
                    onClick={() => setActive(i)}
                    className={`w-full text-left py-3 px-4 rounded-md border transition-all ${
                      active === i
                        ? "bg-ink text-cream border-ink"
                        : "border-rule hover:border-ink"
                    }`}
                  >
                    <div className="font-display text-[1rem]">{t.name}</div>
                    <div
                      className={`eyebrow mt-1 ${
                        active === i ? "text-cream/60" : ""
                      }`}
                    >
                      {t.role}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── The space ─────────────────────────── */

function TheSpace() {
  return (
    <section className="relative py-24 md:py-32 bg-cream-soft">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-5">§ 06 — The studio</div>
            <h2 className="font-display">
              A room above
              <br />
              <span className="display-italic">the fishing nets</span>.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 md:col-start-9 text-[0.9375rem] text-ink-muted max-w-[36ch]">
            Hastings Old Town, top floor, three windows on the sea. The kettle
            is on. London is 90 minutes door-to-door.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-8 relative overflow-hidden rounded-md bg-cream-deep h-[420px] md:h-[600px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1598016677484-ad34c3fd766e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1800&q=85"
              alt="The Whisk studio in Hastings"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-12 md:col-span-4 relative overflow-hidden rounded-md bg-cream-deep h-[420px] md:h-[600px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1595701425303-d741899dc0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1400&q=85"
              alt="Hastings"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { k: "TN34", v: "Postcode" },
            { k: "90 min", v: "From London Bridge" },
            { k: "3", v: "Windows on the sea" },
            { k: "1", v: "Studio dog (Marlow)" },
          ].map((s) => (
            <div key={s.v} className="border-t border-ink pt-4">
              <div className="font-display text-[2rem] md:text-[2.5rem] leading-none tracking-[-0.02em]">
                {s.k}
              </div>
              <div className="eyebrow mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── What we say no to ─────────────────────────── */

function NoTo() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-3 eyebrow">§ 07 — Things we say no to</div>
          <h2 className="col-span-12 md:col-span-9 font-display">
            What we
            <span className="display-italic text-ink-muted"> won't do</span>.
          </h2>
        </div>
        <ul className="grid grid-cols-12 gap-6 md:gap-10">
          {noTo.map((t, i) => (
            <li
              key={t}
              className="col-span-12 md:col-span-6 border-t border-ink pt-4 flex items-start gap-4"
            >
              <span className="font-mono text-[0.8125rem] text-orange pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[1.25rem] md:text-[1.5rem] tracking-[-0.02em] leading-[1.2]">
                {t}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─────────────────────────── CTA ─────────────────────────── */

function CTA() {
  return (
    <section className="bg-ink text-cream py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="eyebrow text-cream/60 mb-6">§ Come say hello</div>
            <h2 className="font-display text-cream leading-[0.95] tracking-[-0.035em] text-[3rem] md:text-[7rem] max-w-[16ch]">
              Phone, text,
              <span className="display-italic text-orange"> letter</span>.
              <br />
              Whichever's easiest.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col gap-3">
            <a
              href="https://wa.me/447700900123"
              className="inline-flex items-center justify-between gap-3 h-14 px-6 rounded-full bg-orange text-cream font-medium hover:bg-orange-press transition-colors"
            >
              WhatsApp us now
              <span aria-hidden>→</span>
            </a>
            <a
              href="mailto:hello@whisk.digital"
              className="inline-flex items-center justify-between gap-3 h-14 px-6 rounded-full border border-cream/25 text-cream font-medium hover:bg-cream hover:text-ink transition-colors"
            >
              hello@whisk.digital
              <span aria-hidden>→</span>
            </a>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-between gap-3 h-14 px-6 rounded-full border border-cream/25 text-cream font-medium hover:bg-cream hover:text-ink transition-colors"
            >
              Book an intro call
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
