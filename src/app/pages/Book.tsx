import { Link } from "react-router";
import { useState } from "react";

const slots = [
  { day: "Tue", date: "13 May", times: ["10:00", "14:00"] },
  { day: "Wed", date: "14 May", times: ["11:30"] },
  { day: "Thu", date: "15 May", times: ["09:30", "15:00", "16:30"] },
  { day: "Tue", date: "20 May", times: ["10:00", "13:30"] },
  { day: "Thu", date: "22 May", times: ["11:00", "15:30"] },
];

export function BookPage() {
  return (
    <>
      <BookHero />
      <Pair />
      <Expect />
      <Timeline />
      <Pullquote />
      <NotReady />
      <Footnote />
    </>
  );
}

function BookHero() {
  return (
    <section className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 max-w-[1440px] mx-auto px-6 md:px-10 opacity-[0.3]"
      >
        <div className="grid-columns h-full w-full" />
      </div>
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-24 md:pt-36 pb-12 md:pb-20">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-10 md:mb-14">
          <span className="eyebrow text-orange">§ Strategy call</span>
          <span className="eyebrow">30 minutes</span>
          <span className="eyebrow">Free</span>
          <span className="eyebrow">No pitch</span>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-2">
            <div className="eyebrow">↓ The promise</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h1 className="text-ink leading-[0.92]">
              <span className="block font-display tracking-[-0.035em] text-[clamp(3rem,8.5vw,8rem)]">
                Thirty minutes
              </span>
              <span className="block font-display italic text-ink-muted tracking-[-0.025em] text-[clamp(2.5rem,6.5vw,6rem)] mt-2">
                with
                <span className="text-orange"> Fliss</span>.
              </span>
            </h1>
          </div>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-12 gap-6 md:gap-10">
          <div className="hidden md:block md:col-span-2 eyebrow">↳ Plain English</div>
          <p className="col-span-12 md:col-span-7 text-[1.0625rem] md:text-[1.1875rem] leading-[1.55] max-w-[52ch]">
            Not a pitch. A strategic conversation about your practice, what
            you're trying to build, and whether the 321 Method is the right
            route to get there. You'll leave with a clearer picture either way.
          </p>
          <div className="col-span-12 md:col-span-3 flex md:justify-end items-start">
            <a
              href="#picker"
              className="inline-flex items-center justify-between gap-3 h-12 px-6 rounded-full bg-ink text-cream font-medium hover:bg-orange transition-colors"
            >
              Pick a slot
              <span aria-hidden>↓</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="border-t border-rule grid grid-cols-12 gap-6 md:gap-10 py-5">
          <div className="col-span-6 md:col-span-3 eyebrow">Booked direct · no funnel</div>
          <div className="hidden md:block md:col-span-3 eyebrow">Tue / Wed / Thu</div>
          <div className="hidden md:block md:col-span-3 eyebrow">Google Meet or Zoom</div>
          <div className="col-span-6 md:col-span-3 eyebrow md:text-right">
            2 slots left this fortnight
          </div>
        </div>
      </div>
    </section>
  );
}

function Pair() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <div className="border border-rule rounded-md p-6 md:p-8 bg-cream-soft">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-ink text-cream flex items-center justify-center font-display text-[1.5rem] tracking-[-0.02em]">
                  F
                  <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-orange text-cream text-[0.625rem] font-mono uppercase tracking-[0.15em] flex items-center justify-center">
                    Host
                  </span>
                </div>
                <div>
                  <div className="font-display text-[1.5rem] md:text-[1.75rem] leading-[1.05] tracking-[-0.02em]">
                    Fliss Park
                  </div>
                  <div className="eyebrow mt-1">
                    Strategy partner · PPE, Oxford
                  </div>
                </div>
              </div>

              <p className="mt-6 text-[1rem] leading-[1.65] text-ink max-w-[44ch]">
                I'll be on the call. Greg won't — he joins later in the process,
                if there is one. I read PPE at Oxford, spent a decade in the
                charity sector and a McKinsey-incubated consultancy, and I'm
                the strategy half of Whisk Digital.
              </p>

              <div className="mt-7 grid grid-cols-3 gap-4 pt-6 border-t border-rule">
                <Stat k="120+" v="Strategy calls" />
                <Stat k="3 in 4" v="Decline gracefully" />
                <Stat k="0" v="Sales tactics" />
              </div>

              <p className="mt-7 font-display italic text-ink-muted text-[1.0625rem] leading-[1.35] max-w-[26ch]">
                "I read the room before I write the brief."
              </p>
            </div>
          </div>

          <div id="picker" className="col-span-12 md:col-span-6 lg:col-span-7">
            <div className="grid grid-cols-12 gap-6 items-end mb-6">
              <div className="col-span-12">
                <div className="eyebrow mb-3">§ Pick a time</div>
                <h2 className="font-display text-[1.75rem] md:text-[2.5rem] leading-[1.05] tracking-[-0.025em] max-w-[18ch]">
                  Next two weeks, GMT.
                  <span className="display-italic text-ink-muted"> Pick what suits.</span>
                </h2>
              </div>
            </div>

            <div className="border border-rule rounded-md overflow-hidden">
              <div className="grid grid-cols-12 bg-cream-soft border-b border-rule">
                <div className="col-span-3 md:col-span-2 px-5 py-3 eyebrow">Day</div>
                <div className="col-span-3 md:col-span-3 px-5 py-3 eyebrow">Date</div>
                <div className="col-span-6 md:col-span-7 px-5 py-3 eyebrow">Available</div>
              </div>
              {slots.map((s) => (
                <div
                  key={s.date}
                  className="grid grid-cols-12 items-center border-b border-rule last:border-b-0 hover:bg-cream-soft/60 transition-colors"
                >
                  <div className="col-span-3 md:col-span-2 px-5 py-4 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-ink-muted">
                    {s.day}
                  </div>
                  <div className="col-span-3 md:col-span-3 px-5 py-4 font-display text-[1.0625rem] md:text-[1.25rem] tracking-[-0.015em]">
                    {s.date}
                  </div>
                  <div className="col-span-6 md:col-span-7 px-5 py-4 flex flex-wrap gap-2">
                    {s.times.map((t) => (
                      <a
                        key={t}
                        href={`#confirm?d=${encodeURIComponent(s.date)}&t=${t}`}
                        className="inline-flex items-center h-8 px-3 rounded-full bg-cream border border-rule text-[0.8125rem] hover:bg-ink hover:text-cream hover:border-ink transition-colors"
                      >
                        {t}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <div className="px-5 py-4 bg-cream-soft flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="eyebrow">Nothing fits? → email Fliss directly</p>
                <a
                  href="mailto:hello@whisk.digital?subject=Strategy%20call"
                  className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-orange text-cream text-[0.8125rem] font-medium hover:bg-orange-press transition-colors"
                >
                  Email Fliss instead <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-display text-[1.5rem] md:text-[1.75rem] leading-none tracking-[-0.02em]">
        {k}
      </div>
      <div className="eyebrow mt-1">{v}</div>
    </div>
  );
}

function Expect() {
  return (
    <section className="bg-cream-soft py-20 md:py-28 relative">
      <div aria-hidden className="absolute inset-0 grid-dots opacity-[0.22]" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-10 md:mb-14">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-3">§ What to expect</div>
            <h2 className="font-display">
              Three things this call
              <span className="display-italic text-ink-muted"> always is</span>.
            </h2>
          </div>
        </div>

        <ul className="grid grid-cols-12 gap-6 md:gap-10">
          {[
            {
              k: "30 min",
              t: "Thirty minutes, over video.",
              d: "Google Meet or Zoom — your choice on the booking form. We use video so we can share screens if your site comes up.",
            },
            {
              k: "Strategic",
              t: "A strategic conversation.",
              d: "We'll talk about where you want your practice to be in three years, what's currently in the way, and whether the 321 Method could help you there.",
            },
            {
              k: "No pitch",
              t: "Genuinely not a pitch.",
              d: "If it's a fit, I'll say so on the call and point you somewhere better. I won't follow up with a proposal you don't want.",
            },
          ].map((e, i) => (
            <li
              key={e.t}
              className={`col-span-12 md:col-span-4 ${i === 1 ? "md:mt-10" : ""}`}
            >
              <div className="bg-cream rounded-md border border-rule p-6 md:p-8 h-full">
                <span className="font-mono text-[0.6875rem] tracking-[0.18em] uppercase text-orange">
                  ↳ {e.k}
                </span>
                <h3 className="mt-4 font-display text-[1.375rem] md:text-[1.625rem] leading-[1.1] tracking-[-0.02em] max-w-[22ch]">
                  {e.t}
                </h3>
                <p className="mt-3 text-[0.9375rem] text-ink-muted leading-[1.6] max-w-[44ch]">
                  {e.d}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Timeline() {
  const stages = [
    {
      label: "Before",
      sub: "T-2 days",
      title: "A short list of questions, by email.",
      body: "Five minutes to read, nothing to prepare. They help me make the most of our thirty minutes, and they usually surface something useful that you'd think about beforehand.",
    },
    {
      label: "During",
      sub: "30 minutes",
      title: "Fifteen mine, fifteen yours.",
      body: "The first ten minutes are mine to listen. The next fifteen are for us to strategise together. The last five are next steps — or no next steps, if that's the honest outcome.",
    },
    {
      label: "After",
      sub: "Within 24 hours",
      title: "A short summary, by email.",
      body: "You'll have an email summary from me. If we're a fit, it'll include a draft proposal and timeline. If not, it'll say so clearly, and I'll suggest where to look instead.",
    },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-10">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-3">§ The shape of it</div>
            <h2 className="font-display">
              Three stages.
              <span className="display-italic text-ink-muted"> No surprises.</span>
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 md:col-start-9 text-[0.9375rem] text-ink-muted max-w-[36ch]">
            From the day you book to the day you decide — usually inside a
            single working week.
          </p>
        </div>

        <ol className="border-t border-ink">
          {stages.map((s, i) => (
            <li
              key={s.label}
              className="grid grid-cols-12 gap-4 md:gap-10 py-7 md:py-9 border-b border-rule items-start"
            >
              <div className="col-span-2 md:col-span-1">
                <span className="font-mono text-[0.8125rem] text-orange">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="col-span-10 md:col-span-3">
                <div className="font-mono text-[0.6875rem] tracking-[0.18em] uppercase text-ink">
                  {s.label}
                </div>
                <div className="eyebrow mt-1">{s.sub}</div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <h3 className="font-display text-[1.375rem] md:text-[1.75rem] leading-[1.1] tracking-[-0.02em] max-w-[22ch]">
                  {s.title}
                </h3>
              </div>
              <p className="col-span-12 md:col-span-4 text-[0.9375rem] md:text-[1rem] text-ink-muted leading-[1.6] max-w-[48ch]">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Pullquote() {
  return (
    <section className="bg-ink text-cream py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
          <div className="col-span-12 md:col-span-2">
            <div className="eyebrow text-cream/55">↳ Receipts</div>
          </div>
          <figure className="col-span-12 md:col-span-9">
            <blockquote className="font-display italic text-cream leading-[1.1] tracking-[-0.02em] text-[1.875rem] md:text-[3.5rem] max-w-[24ch]">
              "I came off our first call with more clarity than I'd had in six
              months.
              <span className="text-orange"> And I hadn't spent a penny</span>{" "}
              yet."
            </blockquote>
            <figcaption className="mt-7 flex flex-wrap items-center gap-3 text-cream/65">
              <span className="w-8 h-8 rounded-full bg-cream/15 text-cream font-mono text-[0.6875rem] flex items-center justify-center">
                MS
              </span>
              <span className="text-[0.9375rem]">Melissa Simpson</span>
              <span className="eyebrow text-cream/45">·</span>
              <span className="eyebrow text-cream/55">Journalist · Founder, Sour Magazine</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function NotReady() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="col-span-12 md:col-span-5">
            <div className="eyebrow mb-3">§ Not ready to book?</div>
            <h2 className="font-display leading-[0.98] tracking-[-0.025em] text-[2rem] md:text-[3rem] max-w-[14ch]">
              Perfectly fine.
              <span className="display-italic text-orange"> Two other ways</span>{" "}
              in.
            </h2>
            <p className="mt-5 text-[0.9375rem] text-ink-muted leading-[1.6] max-w-[36ch]">
              If the strategy call feels like too big a first step, here are
              two doors with no calendar attached.
            </p>
          </div>

          <ul className="col-span-12 md:col-span-7 grid grid-cols-1 gap-4">
            <AltCard
              tag="Long-form"
              title="Send a written brief."
              detail="If you'd rather write a long one. Read between meetings, replied to after them."
              cta="hello@whisk.digital"
              href="mailto:hello@whisk.digital"
            />
            <AltCard
              tag="In person"
              title="Coffee in Hastings."
              detail="Ninety minutes from London Bridge. Bring the brief or just the headache. The coffee at Goat is on us."
              cta="Suggest a date"
              href="mailto:hello@whisk.digital?subject=Coffee%20in%20Hastings"
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

function AltCard({
  tag,
  title,
  detail,
  cta,
  href,
}: {
  tag: string;
  title: string;
  detail: string;
  cta: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 border border-rule rounded-md p-5 md:p-7 hover:bg-cream-soft transition-colors"
      >
        <div className="md:w-32 shrink-0">
          <div className="eyebrow text-orange">{tag}</div>
        </div>
        <div className="flex-1">
          <h3 className="font-display text-[1.25rem] md:text-[1.5rem] leading-[1.1] tracking-[-0.02em]">
            {title}
          </h3>
          <p className="mt-1 text-[0.9375rem] text-ink-muted leading-[1.55] max-w-[52ch]">
            {detail}
          </p>
        </div>
        <span className="inline-flex items-center gap-2 text-[0.9375rem] text-orange group-hover:gap-3 transition-all md:self-center">
          {cta} <span aria-hidden>→</span>
        </span>
      </a>
    </li>
  );
}

function Footnote() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    {
      q: "Is it actually free?",
      a: "Yes, no card, no upsell on the call. We do it because a thirty-minute conversation tells us — and you — far more than ten emails ever could.",
    },
    {
      q: "What happens if I don't book a project after?",
      a: "Nothing. You get a short follow-up email with a couple of pointers and you never hear from us again unless you write back. No drip campaign, no nurture sequence, no LinkedIn add.",
    },
    {
      q: "Can my business partner join?",
      a: "Yes — up to three people on the call is fine, more than that and we'll suggest a proper workshop instead.",
    },
    {
      q: "Will Greg be on the call?",
      a: "Usually not. Fliss takes every first call so you get the strategy mind first. If we get to proposal, Greg joins from week one.",
    },
  ];
  return (
    <section className="bg-cream-soft py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow mb-3">§ Last questions</div>
            <h2 className="font-display leading-[0.98] tracking-[-0.025em] text-[2rem] md:text-[3rem] max-w-[12ch]">
              The honest
              <span className="display-italic text-orange"> small print</span>.
            </h2>
            <Link
              to="/method"
              className="mt-6 inline-flex items-center gap-2 text-[0.9375rem] hover:text-orange transition-colors"
            >
              Read the 321 Method <span aria-hidden>→</span>
            </Link>
          </div>

          <ul className="col-span-12 md:col-span-8 border-t border-ink">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-b border-rule">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-5 md:py-6 text-left group"
                  >
                    <span className="font-display text-[1.125rem] md:text-[1.375rem] leading-[1.15] tracking-[-0.02em] max-w-[40ch]">
                      {f.q}
                    </span>
                    <span
                      aria-hidden
                      className={`w-9 h-9 shrink-0 rounded-full border border-rule flex items-center justify-center text-ink-muted transition-all ${
                        isOpen ? "rotate-45 bg-ink text-cream border-ink" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <p className="pb-6 md:pb-7 pr-12 text-[0.9375rem] md:text-[1rem] text-ink-muted leading-[1.65] max-w-[60ch]">
                      {f.a}
                    </p>
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
