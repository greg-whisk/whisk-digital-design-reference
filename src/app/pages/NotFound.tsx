import { Link } from "react-router";
import { useEffect, useState } from "react";

type Phrase = { text: string; className: string };

const phrases: Phrase[] = [
  { text: "whisked", className: "font-display italic" },
  { text: "Whisk", className: "font-display tracking-[-0.03em]" },
  { text: "anywhere", className: "font-body font-bold tracking-[-0.035em] uppercase" },
  { text: "in the index", className: "font-display italic" },
  { text: "on the map", className: "font-display tracking-[-0.025em]" },
  { text: "saved", className: "font-display italic" },
  { text: "printed yet", className: "font-body font-bold tracking-[-0.035em]" },
  { text: "even drafted", className: "font-display italic tracking-[-0.02em]" },
];

const reasons = [
  "The URL you followed went somewhere we've since rearranged.",
  "A draft that didn't make it past Friday show-and-tell.",
  "A link from a 2023 newsletter we should probably retire.",
  "Or a typo — it happens to all of us.",
];

const rescue = [
  {
    num: "01",
    eyebrow: "↳ The work",
    title: "See the case studies.",
    body: "Three clients, three rebrands, three Monday mornings where something new went live. Start here if you want the evidence.",
    cta: { label: "Case studies", to: "/work" },
  },
  {
    num: "02",
    eyebrow: "↳ The method",
    title: "Read the 321 Method.",
    body: "Three years ahead. Two people. Delivered in 21 days. The operating principle behind everything above.",
    cta: { label: "The 321 Method", to: "/method" },
  },
  {
    num: "03",
    eyebrow: "↳ The call",
    title: "Book a strategy call.",
    body: "Thirty minutes with Fliss, free, no pitch. The single fastest way to find out if we're a fit.",
    cta: { label: "Book a time", to: "/book" },
    accent: true,
  },
];

export function NotFoundPage() {
  return (
    <>
      <NotFoundHero />
      <Rescue />
      <BackToHome />
    </>
  );
}

function NotFoundHero() {
  return (
    <section className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 max-w-[1440px] mx-auto px-6 md:px-10 opacity-[0.4]"
      >
        <div className="grid-columns h-full w-full" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-24 md:pt-36 pb-12 md:pb-20">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-10 md:mb-14">
          <span className="font-mono text-[0.6875rem] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full bg-ink text-cream">
            HTTP 404
          </span>
          <span className="eyebrow">A page not found</span>
          <span className="eyebrow text-ink-muted">·</span>
          <span className="eyebrow">Status: gracefully missing</span>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-2">
            <div className="eyebrow">↓ Plain English</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h1 className="text-ink leading-[0.92]">
              <span className="block font-display tracking-[-0.035em] text-[clamp(3rem,9vw,8.5rem)]">
                That page
              </span>
              <span className="block font-body font-bold tracking-[-0.04em] text-[clamp(3rem,9vw,8.5rem)] mt-2">
                isn't{" "}
                <RotatingPhrase phrases={phrases} />
                <span className="text-orange">.</span>
              </span>
            </h1>
          </div>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-12 gap-6 md:gap-10">
          <div className="hidden md:block md:col-span-2 eyebrow">↳ The reason</div>
          <div className="col-span-12 md:col-span-7">
            <p className="font-display italic text-[1.375rem] md:text-[1.75rem] leading-[1.25] tracking-[-0.015em] text-ink max-w-[36ch]">
              Don't take it personally — we break links more often than we break
              the site. There are usually four good reasons a page goes quiet.
            </p>
            <ul className="mt-7 space-y-2.5">
              {reasons.map((r, i) => (
                <li
                  key={r}
                  className="relative pl-9 text-[0.9375rem] md:text-[1rem] text-ink-muted leading-[1.6] max-w-[56ch]"
                >
                  <span className="absolute left-0 top-0 font-mono text-[0.6875rem] tracking-[0.18em] uppercase text-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-3 flex md:justify-end items-start">
            <Link
              to="/"
              className="inline-flex items-center justify-between gap-3 h-12 px-6 rounded-full bg-ink text-cream font-medium hover:bg-orange transition-colors"
            >
              Back to the start
              <span aria-hidden>↺</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="border-t border-rule grid grid-cols-12 gap-6 md:gap-10 py-5">
          <div className="col-span-6 md:col-span-3 eyebrow">Error · 404</div>
          <div className="hidden md:block md:col-span-3 eyebrow">No bots harmed</div>
          <div className="hidden md:block md:col-span-3 eyebrow">No data logged</div>
          <div className="col-span-6 md:col-span-3 eyebrow md:text-right">
            Three rescue routes ↓
          </div>
        </div>
      </div>
    </section>
  );
}

function Rescue() {
  return (
    <section className="relative py-16 md:py-24 bg-cream-soft">
      <div aria-hidden className="absolute inset-0 grid-dots opacity-[0.22]" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-10 md:mb-14">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-3">§ Three good places to go instead</div>
            <h2 className="font-display">
              Pick a door.
              <span className="display-italic text-ink-muted"> We left them open.</span>
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 md:col-start-9 text-[0.9375rem] text-ink-muted max-w-[36ch]">
            One for the curious, one for the methodical, one for the in a hurry.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {rescue.map((r, i) => {
            const isAccent = r.accent;
            return (
              <article
                key={r.num}
                className={`col-span-12 md:col-span-4 ${
                  i === 1 ? "md:mt-10" : i === 2 ? "md:mt-6" : ""
                } rounded-md border ${
                  isAccent ? "bg-ink text-cream border-ink" : "bg-cream border-rule"
                } p-6 md:p-8 flex flex-col min-h-[300px]`}
              >
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`font-mono text-[0.6875rem] tracking-[0.18em] uppercase ${
                      isAccent ? "text-cream/60" : "text-ink-muted"
                    }`}
                  >
                    № {r.num}
                  </span>
                  <span className="eyebrow text-orange">{r.eyebrow}</span>
                </div>
                <h3
                  className={`font-display text-[1.5rem] md:text-[1.875rem] leading-[1.05] tracking-[-0.025em] max-w-[14ch] ${
                    isAccent ? "text-cream" : "text-ink"
                  }`}
                >
                  {r.title}
                </h3>
                <p
                  className={`mt-4 text-[0.9375rem] leading-[1.6] max-w-[42ch] ${
                    isAccent ? "text-cream/70" : "text-ink-muted"
                  }`}
                >
                  {r.body}
                </p>
                <div className="mt-auto pt-7">
                  <Link
                    to={r.cta.to}
                    className={`inline-flex items-center gap-2 text-[0.9375rem] font-medium transition-colors ${
                      isAccent
                        ? "text-orange hover:text-cream"
                        : "text-ink hover:text-orange"
                    }`}
                  >
                    {r.cta.label} <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BackToHome() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="text-center">
          <p className="font-display italic text-[1.125rem] md:text-[1.375rem] text-ink-muted">
            Or just go back to the beginning.
          </p>
          <div className="mt-6 inline-flex">
            <Link
              to="/"
              className="inline-flex items-center gap-3 h-12 px-6 rounded-full border border-ink text-ink font-medium hover:bg-ink hover:text-cream transition-colors"
            >
              <span aria-hidden>←</span>
              Back to whisk.digital
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function RotatingPhrase({ phrases }: { phrases: Phrase[] }) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");

  const current = phrases[index];

  useEffect(() => {
    if (phase === "typing") {
      if (display.length < current.text.length) {
        const t = setTimeout(
          () => setDisplay(current.text.slice(0, display.length + 1)),
          70
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("holding"), 1400);
      return () => clearTimeout(t);
    }
    if (phase === "holding") {
      const t = setTimeout(() => setPhase("deleting"), 900);
      return () => clearTimeout(t);
    }
    if (phase === "deleting") {
      if (display.length > 0) {
        const t = setTimeout(
          () => setDisplay(display.slice(0, -1)),
          40
        );
        return () => clearTimeout(t);
      }
      setIndex((i) => (i + 1) % phrases.length);
      setPhase("typing");
    }
  }, [display, phase, current, phrases.length]);

  return (
    <span className={`text-orange ${current.className}`}>
      {display}
      <span
        aria-hidden
        className="inline-block w-[0.06em] h-[0.85em] bg-orange align-[-0.08em] ml-1 animate-pulse"
      />
    </span>
  );
}
