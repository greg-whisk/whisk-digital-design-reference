import { useEffect, useState } from "react";

const phrases = [
  { text: "a bigger", className: "italic tracking-[-0.02em]", style: { fontFamily: "'Playfair Display', serif", fontWeight: 900 } },
  { text: "a kinder", className: "tracking-[-0.01em]", style: { fontFamily: "'Caveat', cursive", fontWeight: 700 } },
  { text: "a louder", className: "uppercase tracking-[-0.02em]", style: { fontFamily: "'Poppins', sans-serif", fontWeight: 900, fontStyle: "italic" } },
  { text: "a more profitable", className: "italic tracking-[-0.02em]", style: { fontFamily: "'DM Serif Display', serif" } },
  { text: "a sharper", className: "tracking-[-0.04em]", style: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 } },
  { text: "a braver", className: "italic tracking-[-0.025em]", style: { fontFamily: "'Fraunces', serif", fontWeight: 900 } },
  { text: "a quieter", className: "italic tracking-[-0.01em]", style: { fontFamily: "'Instrument Serif', serif" } },
];

function RotatingPhrase() {
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");

  useEffect(() => {
    const current = phrases[index].text;
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (shown.length < current.length) {
        timer = setTimeout(() => setShown(current.slice(0, shown.length + 1)), 55);
      } else {
        timer = setTimeout(() => setPhase("holding"), 1400);
      }
    } else if (phase === "holding") {
      timer = setTimeout(() => setPhase("deleting"), 900);
    } else {
      if (shown.length > 0) {
        timer = setTimeout(() => setShown(current.slice(0, shown.length - 1)), 28);
      } else {
        setIndex((i) => (i + 1) % phrases.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timer);
  }, [shown, phase, index]);

  return (
    <span
      className={`${phrases[index].className} text-orange whitespace-nowrap`}
      style={phrases[index].style}
    >
      {shown}
      <span
        aria-hidden
        className="inline-block w-[0.06em] h-[0.85em] align-[-0.08em] ml-1 bg-orange animate-pulse"
      />
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative">
      {/* faint column grid behind the hero */}
      <div aria-hidden className="pointer-events-none absolute inset-0 max-w-[1440px] mx-auto px-6 md:px-10 opacity-[0.35]">
        <div className="grid-columns h-full w-full" />
      </div>
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-24 md:pt-40 pb-24 md:pb-32">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-2 flex md:block items-center gap-3">
            <span className="eyebrow">Issue 001 — 2026</span>
          </div>

          <div className="col-span-12 md:col-span-10">
            <h1 className="text-ink leading-[0.92]">
              <span className="block font-body font-bold tracking-[-0.04em] text-[clamp(3.5rem,9.5vw,9rem)]">
                Become
              </span>
              <span className="block min-h-[1.05em] text-[clamp(3.25rem,9vw,8.5rem)] leading-[1] mt-2 md:mt-3">
                <RotatingPhrase />
              </span>
              <span className="block font-body font-bold tracking-[-0.04em] text-[clamp(3.5rem,9.5vw,9rem)] mt-2 md:mt-3">
                brand<span className="text-orange">.</span>
              </span>
              <span className="block font-display italic text-ink-soft tracking-[-0.02em] text-[clamp(1.75rem,3.2vw,3rem)] leading-[1.05] mt-8 md:mt-10">
                In twenty-one days flat.
              </span>
            </h1>
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="hidden md:block md:col-span-2">
            <div className="eyebrow">↓ The pitch</div>
          </div>
          <p className="col-span-12 md:col-span-6 text-[1.0625rem] md:text-[1.1875rem] leading-[1.55] max-w-[44ch]">
            We're a two-person studio that helps established founders rebrand without the
            twelve-month agency theatre. Strategy, identity, and site — shipped in
            twenty-one working days, with the same craft a Pentagram associate would
            recognise.
          </p>
          <div className="col-span-12 md:col-span-4 flex md:justify-end">
            <div className="flex flex-col gap-3 w-full md:w-auto md:items-end">
              <a
                href="#contact"
                className="inline-flex items-center justify-between md:justify-center gap-3 h-12 px-6 rounded-full bg-ink text-cream font-medium hover:bg-orange transition-colors"
              >
                Book an intro call
                <span aria-hidden>→</span>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 text-[0.875rem] text-ink-muted hover:text-ink transition-colors md:pr-3"
              >
                <span className="eyebrow hover:text-ink transition-colors">↓ See selected work</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* baseline rule with marginalia */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="border-t border-rule grid grid-cols-12 gap-6 md:gap-10 py-5">
          <div className="col-span-6 md:col-span-2 eyebrow">Founded 2021</div>
          <div className="hidden md:block md:col-span-2 eyebrow">London · Remote</div>
          <div className="hidden md:block md:col-span-4 eyebrow">For founders 5–50 staff</div>
          <div className="col-span-6 md:col-span-4 eyebrow md:text-right">
            Booking Q3 — 2 slots remaining
          </div>
        </div>
      </div>
    </section>
  );
}
