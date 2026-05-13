import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

/* ───────────────────────────── Project data ─────────────────────────────
   Designed as a template — to spin up a new case study, duplicate this
   object and the page renders without further edits. */

const project = {
  num: "01",
  client: "Melissa White",
  shortName: "Melissa",
  tagline: "Paint to pixel to print.",
  title: "A hand-painted decorative world, brought to life with code.",
  year: "2025",
  sector: "Decorative arts · DTC",
  location: "East Sussex, UK",
  duration: "21 working days",
  services: ["Brand strategy", "Visual identity", "Website", "Motion direction"],
  team: [
    { role: "Strategy & verbal", name: "Iris Halvorsen" },
    { role: "Design & build", name: "Theo Park" },
  ],
  hero:
    "https://images.unsplash.com/photo-1772364588883-45721ecbae53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=2000&q=85",

  intro:
    "Melissa White is a decorative artist who hand-paints magical worlds onto walls, paper, and furniture — drawing English heritage into the present. After fifteen years quietly building a cult following among interior designers, she came to us to unify a sprawling practice into a single, sellable studio identity — without losing the hand that built it.",

  challenge:
    "Twenty-five projects in a portfolio. Three product lines. A commissioning practice, a wallpaper imprint, an editorial side, and a residential workshop. All world-class. None connected. The work was being shared on Pinterest with no link back to Melissa.",

  approach:
    "We treated the brand the way a good editor treats a manuscript — cutting until the through-line was visible. One name, one type voice, one decorative grammar borrowed from her own hand, and a website built to behave like an editioned print — slow, considered, with weight on every page.",

  /* Brand showcase data — the client's identity, displayed inside our chrome */
  palette: [
    { name: "Vellum", hex: "#f3eadb", role: "Primary surface", on: "ink" },
    { name: "Parchment", hex: "#e8dcc6", role: "Secondary surface", on: "ink" },
    { name: "Patina", hex: "#7a6f5a", role: "Quiet accent", on: "cream" },
    { name: "Hare", hex: "#a8a395", role: "Mid neutral", on: "ink" },
    { name: "Burgundy", hex: "#6b1e26", role: "Editorial accent", on: "cream" },
    { name: "Forest", hex: "#283725", role: "Editorial accent", on: "cream" },
    { name: "Ink", hex: "#1a1612", role: "Type", on: "cream" },
  ],

  type: {
    displayName: "Source Serif 4",
    displayFamily: "'Source Serif 4', Georgia, serif",
    bodyName: "Inter",
    bodyFamily: "'Inter', system-ui, sans-serif",
    sample:
      "Drawing history into the present, one room at a time.",
    italicSample: "Magical decorative worlds.",
  },

  /* Gallery imagery for the identity / website / motion */
  identityGallery: [
    {
      src: "https://images.unsplash.com/photo-1770983438714-625dbd64c08a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1400&q=80",
      caption: "Wordmark, applied at print scale",
      span: "md:col-span-8",
      height: "h-[420px] md:h-[640px]",
    },
    {
      src: "https://images.unsplash.com/photo-1760270049613-4b670a965673?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1200",
      caption: "The studio kit — paint, brush, hand",
      span: "md:col-span-4",
      height: "h-[420px] md:h-[640px]",
    },
    {
      src: "https://images.unsplash.com/photo-1577381838108-0d096c9db20a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1400&q=80",
      caption: "Editioned print packaging",
      span: "md:col-span-5",
      height: "h-[360px] md:h-[480px]",
    },
    {
      src: "https://images.unsplash.com/photo-1763909130854-77e90c8acd6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1400&q=80",
      caption: "Hand-painted source artwork, scanned at 600 dpi",
      span: "md:col-span-7",
      height: "h-[360px] md:h-[480px]",
    },
  ],

  webShots: [
    {
      src: "https://images.unsplash.com/photo-1772364588883-45721ecbae53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1800&q=85",
      caption: "Homepage — a mural that loads as you scroll",
    },
    {
      src: "https://images.unsplash.com/photo-1685568212425-d2151634f98b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1800&q=85",
      caption: "Project index — twenty-five rooms, one grid",
    },
    {
      src: "https://images.unsplash.com/photo-1770983438714-625dbd64c08a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1800&q=85",
      caption: "Shop — print, wallpaper, and commissioned works",
    },
  ],

  motionNote:
    "The site's hero is a hand-painted mural that draws itself in pure CSS — no video, no JavaScript, no client-side weight. It loads in 180ms on a cold cache and animates only when the user has scrolled to it.",

  metrics: [
    { k: "+184%", v: "Booked commissions", note: "Year-on-year, first 90 days post-launch" },
    { k: "21", v: "Working days", note: "Strategy session through launch" },
    { k: "0.42s", v: "Largest contentful paint", note: "Mobile · 3G simulated" },
    { k: "100", v: "Lighthouse, all four", note: "Performance / SEO / a11y / best-practice" },
  ],

  quote:
    "I'd been told for years that I needed to 'professionalise'. Iris and Theo did the opposite — they made it more personal, more handmade, and somehow more saleable. The phone hasn't stopped ringing since.",
  quoteAuthor: "Melissa White",
  quoteRole: "Decorative artist & founder",

  credits: [
    { role: "Strategy & verbal identity", name: "Iris Halvorsen" },
    { role: "Visual identity & build", name: "Theo Park" },
    { role: "Original artwork", name: "Melissa White" },
    { role: "Photography", name: "Otis Carey" },
    { role: "Typography", name: "Frank Grießhammer (Source Serif 4)" },
    { role: "Print partner", name: "Generation Press, Sussex" },
  ],

  press: [
    { outlet: "Brand New", note: "Featured rebrand — May 2025" },
    { outlet: "It's Nice That", note: "Studio of the week" },
    { outlet: "House & Garden", note: "Artist to watch, 2025" },
  ],
};

const next = {
  num: "02",
  client: "Laika Press",
  title: "An identity system that scales from one title to a hundred.",
  image:
    "https://images.unsplash.com/photo-1561291349-2f23e640ac9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1800&q=80",
};

export function CaseStudyPage() {
  return (
    <>
      <Hero />
      <MetaStrip />
      <Brief />
      <MethodApplied />
      <BrandShowcase />
      <IdentityGallery />
      <WebsiteShowcase />
      <MotionNote />
      <Results />
      <Pullquote />
      <Credits />
      <NextProject />
    </>
  );
}

/* ───────────────────────────── Hero ───────────────────────────── */

function Hero() {
  return (
    <section className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-0 max-w-[1440px] mx-auto px-6 md:px-10 opacity-[0.3]">
        <div className="grid-columns h-full w-full" />
      </div>
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-10 md:pb-14">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-10">
          <Link to="/work" className="col-span-12 md:col-span-3 eyebrow hover:text-orange transition-colors">
            ← All work
          </Link>
          <div className="hidden md:block md:col-span-3 eyebrow">
            Case study · {project.num}
          </div>
          <div className="hidden md:block md:col-span-3 eyebrow">{project.year}</div>
          <div className="hidden md:block md:col-span-3 eyebrow md:text-right">
            {project.sector}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-2 eyebrow">The client</div>
          <h1 className="col-span-12 md:col-span-10 text-ink leading-[0.92]">
            <span className="block font-display tracking-[-0.035em] text-[clamp(3.5rem,11vw,10rem)]">
              {project.client}
              <span className="text-orange">.</span>
            </span>
            <span className="block font-display italic text-ink-muted tracking-[-0.02em] text-[clamp(1.5rem,3.4vw,3rem)] mt-4 max-w-[28ch]">
              {project.tagline}
            </span>
          </h1>
        </div>

        <div className="mt-12 md:mt-20 grid grid-cols-12 gap-6 md:gap-10">
          <div className="hidden md:block md:col-span-2 eyebrow">↓ The brief</div>
          <p className="col-span-12 md:col-span-7 font-display text-[1.5rem] md:text-[2.25rem] leading-[1.15] tracking-[-0.02em] max-w-[28ch]">
            {project.title}
          </p>
          <div className="col-span-12 md:col-span-3 text-[0.875rem] text-ink-muted leading-[1.55]">
            <div className="eyebrow mb-2">In four services</div>
            <ul className="space-y-1">
              {project.services.map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <span className="text-orange mt-1">›</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="relative overflow-hidden rounded-md bg-cream-deep h-[480px] md:h-[760px]">
          <ImageWithFallback
            src={project.hero}
            alt={project.client}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Meta strip ───────────────────────────── */

function MetaStrip() {
  const items = [
    { label: "Client", value: project.client },
    { label: "Year", value: project.year },
    { label: "Sector", value: project.sector },
    { label: "Location", value: project.location },
    { label: "Duration", value: project.duration },
    { label: "Services", value: project.services.length + " · 321 + Motion" },
  ];
  return (
    <section className="border-y border-rule py-6 md:py-8 mt-12 md:mt-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-x-6 gap-y-5">
          {items.map((i) => (
            <div key={i.label}>
              <div className="eyebrow mb-1">{i.label}</div>
              <div className="font-display text-[1rem] md:text-[1.125rem] tracking-[-0.01em]">
                {i.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 01 Brief ───────────────────────────── */

function Brief() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-6">
            <div className="eyebrow mb-5">§ 01 — Who they are</div>
            <h2 className="font-display">
              {project.shortName} hand-paints
              <span className="display-italic"> worlds</span>.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-2 eyebrow">Intro</div>
          <p className="col-span-12 md:col-span-7 text-[1.0625rem] md:text-[1.1875rem] leading-[1.55] max-w-[58ch]">
            {project.intro}
          </p>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-12 gap-6 md:gap-10 border-t border-rule pt-10 md:pt-14">
          <div className="col-span-12 md:col-span-6">
            <div className="eyebrow mb-3 text-orange">The problem</div>
            <h3 className="font-display text-[1.5rem] md:text-[2rem] leading-[1.1] tracking-[-0.02em] mb-5 max-w-[24ch]">
              A world-class hand,
              <span className="display-italic text-ink-muted"> a scattered brand</span>.
            </h3>
            <p className="text-[0.9375rem] md:text-[1rem] text-ink-muted leading-[1.65] max-w-[44ch]">
              {project.challenge}
            </p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="eyebrow mb-3">The approach</div>
            <h3 className="font-display text-[1.5rem] md:text-[2rem] leading-[1.1] tracking-[-0.02em] mb-5 max-w-[24ch]">
              Cut, until the
              <span className="display-italic"> through-line </span>
              shows.
            </h3>
            <p className="text-[0.9375rem] md:text-[1rem] text-ink-muted leading-[1.65] max-w-[44ch]">
              {project.approach}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 02 Method applied ───────────────────────────── */

function MethodApplied() {
  const stages = [
    {
      n: "Day 1",
      title: "Strategy session",
      body: "Six hours on positioning. Who buys, who doesn't, and why the right buyer pays five times more.",
    },
    {
      n: "Days 2 – 8",
      title: "Verbal & visual direction",
      body: "Two written directions, one chosen. The decorative grammar lifted directly from Melissa's source paintings.",
    },
    {
      n: "Days 9 – 14",
      title: "Identity system",
      body: "Wordmark, type voice, palette, the editioned print packaging, the commission proposal template.",
    },
    {
      n: "Days 15 – 18",
      title: "Site build",
      body: "Twenty-five projects re-indexed. Custom mural-loader. Shop, commission, and editorial flows.",
    },
    {
      n: "Days 19 – 21",
      title: "Launch",
      body: "Live by Friday. Announcement post drafted. 30 days of free support to follow.",
    },
  ];
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
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16">
          <div className="col-span-12 md:col-span-3 eyebrow text-cream/60">
            § 02 — The 321 Method, applied
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display text-cream max-w-[22ch]">
              Three years ahead.
              <br />
              <span className="display-italic text-orange">Twenty-one days </span>
              of execution.
            </h2>
          </div>
        </div>

        <ol className="border-t border-cream/15">
          {stages.map((s, i) => (
            <li
              key={s.n}
              className="grid grid-cols-12 gap-6 md:gap-10 py-7 md:py-8 border-b border-cream/15"
            >
              <div className="col-span-3 md:col-span-1 font-mono text-[0.875rem] text-orange">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="col-span-9 md:col-span-2 eyebrow text-cream/60 pt-1">{s.n}</div>
              <div className="col-span-12 md:col-span-4">
                <h3 className="font-display text-cream text-[1.5rem] md:text-[2.25rem] leading-[1.05] tracking-[-0.025em]">
                  {s.title}<span className="text-orange">.</span>
                </h3>
              </div>
              <p className="col-span-12 md:col-span-5 text-[0.9375rem] text-cream/70 leading-[1.6]">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ───────────────────────────── 03 Brand showcase ───────────────────────────── */

function BrandShowcase() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16">
          <div className="col-span-12 md:col-span-3 eyebrow">§ 03 — The system, in brief</div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-display">
              One hand,
              <span className="display-italic"> one voice</span>,
              <br />
              one decorative grammar.
            </h2>
          </div>
        </div>

        {/* Wordmark hero */}
        <div className="bg-[#f3eadb] rounded-md p-10 md:p-20 border border-rule mb-6 md:mb-8">
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
            <div className="col-span-12 md:col-span-8">
              <div
                className="leading-[0.85] tracking-[-0.03em] text-[clamp(4rem,12vw,11rem)] text-[#1a1612]"
                style={{ fontFamily: project.type.displayFamily, fontWeight: 400 }}
              >
                Melissa
                <br />
                <em style={{ fontStyle: "italic" }}>White</em>
                <span className="text-[#6b1e26]">.</span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <div className="font-mono text-[0.6875rem] tracking-[0.18em] uppercase text-[#7a6f5a]">
                Primary wordmark
              </div>
              <div
                className="mt-3 text-[#1a1612] italic text-[1.125rem] md:text-[1.25rem]"
                style={{ fontFamily: project.type.displayFamily }}
              >
                Set in Source Serif 4 — drawn for screens, balanced for print.
              </div>
            </div>
          </div>
        </div>

        {/* Palette */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-baseline justify-between mb-5">
            <h3 className="font-display text-[1.75rem] md:text-[2.25rem] tracking-[-0.025em]">
              Palette<span className="text-orange">.</span>
            </h3>
            <div className="eyebrow">Seven values · two accents</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-7 gap-2 md:gap-3">
            {project.palette.map((c) => (
              <div key={c.hex} className="rounded-md overflow-hidden border border-rule">
                <div
                  className="h-32 md:h-40 flex items-end p-3"
                  style={{ background: c.hex, color: c.on === "cream" ? "#fbf3ec" : "#1c1b1a" }}
                >
                  <span className="font-mono text-[0.625rem] tracking-[0.18em] uppercase opacity-80">
                    {c.hex.toUpperCase()}
                  </span>
                </div>
                <div className="p-3 bg-cream">
                  <div className="font-display text-[0.9375rem]">{c.name}</div>
                  <div className="eyebrow mt-0.5">{c.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Type */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-12 md:col-span-7 bg-cream-soft rounded-md border border-rule p-8 md:p-12">
            <div className="eyebrow mb-4">Display · {project.type.displayName}</div>
            <div
              className="text-[#1a1612] text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] tracking-[-0.02em]"
              style={{ fontFamily: project.type.displayFamily, fontWeight: 400 }}
            >
              {project.type.sample}
            </div>
            <div
              className="mt-4 text-[#6b1e26] text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.05] tracking-[-0.01em]"
              style={{ fontFamily: project.type.displayFamily, fontWeight: 400, fontStyle: "italic" }}
            >
              {project.type.italicSample}
            </div>
            <div className="mt-8 pt-6 border-t border-rule grid grid-cols-3 gap-4 text-[#1a1612]">
              {["Aa", "Bb", "Cc"].map((g) => (
                <div
                  key={g}
                  className="text-[3.5rem] leading-none"
                  style={{ fontFamily: project.type.displayFamily }}
                >
                  {g}
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 bg-cream-soft rounded-md border border-rule p-8 md:p-12">
            <div className="eyebrow mb-4">Body · {project.type.bodyName}</div>
            <p
              className="text-[#1a1612] text-[1rem] leading-[1.6] mb-6"
              style={{ fontFamily: project.type.bodyFamily }}
            >
              Drawing history into the present, one room at a time. Bespoke
              hand-painted murals, wallpapers, and editioned prints for
              interiors that have something to say. Studio established 2009.
            </p>
            <div className="border-t border-rule pt-6">
              <div className="eyebrow mb-3">Scale</div>
              <ul
                className="space-y-2 text-[#1a1612]"
                style={{ fontFamily: project.type.bodyFamily }}
              >
                <li className="flex items-baseline justify-between">
                  <span className="text-[1.125rem]">Body 18 / 28</span>
                  <span className="font-mono text-[0.6875rem] tracking-[0.18em] uppercase text-[#7a6f5a]">Default</span>
                </li>
                <li className="flex items-baseline justify-between">
                  <span className="text-[0.9375rem]">Caption 15 / 24</span>
                  <span className="font-mono text-[0.6875rem] tracking-[0.18em] uppercase text-[#7a6f5a]">Meta</span>
                </li>
                <li className="flex items-baseline justify-between">
                  <span className="text-[0.8125rem]">Eyebrow 13 / 1.5em</span>
                  <span className="font-mono text-[0.6875rem] tracking-[0.18em] uppercase text-[#7a6f5a]">Label</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 04 Identity gallery ───────────────────────────── */

function IdentityGallery() {
  return (
    <section className="relative py-20 md:py-28 bg-cream-soft">
      <div aria-hidden className="absolute inset-0 grid-dots opacity-[0.25]" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-16 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-5">§ 04 — Identity, in use</div>
            <h2 className="font-display">
              The system,
              <span className="display-italic"> in the hand</span>.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 md:col-start-9 text-[0.9375rem] text-ink-muted max-w-[36ch]">
            Print, paper, and packaging. Every surface the studio touches —
            unified for the first time in fifteen years.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {project.identityGallery.map((img) => (
            <figure
              key={img.src}
              className={`col-span-12 ${img.span ?? "md:col-span-6"}`}
            >
              <div
                className={`relative overflow-hidden rounded-md bg-cream-deep ${img.height ?? "h-[420px] md:h-[520px]"}`}
              >
                <ImageWithFallback
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="eyebrow mt-3">{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 05 Website ───────────────────────────── */

function WebsiteShowcase() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-16 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-5">§ 05 — The website</div>
            <h2 className="font-display">
              A site that loads like a
              <span className="display-italic"> hand-printed book</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 grid grid-cols-2 gap-4 text-ink">
            {[
              { k: "0.42s", v: "LCP, 3G mobile" },
              { k: "98kb", v: "Page weight, gz" },
            ].map((m) => (
              <div key={m.v} className="border-t border-ink pt-3">
                <div className="font-display text-[1.75rem] leading-none tracking-[-0.02em]">
                  {m.k}
                </div>
                <div className="eyebrow mt-1">{m.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero shot */}
        <div className="relative rounded-md overflow-hidden bg-cream-deep h-[420px] md:h-[640px] mb-4 md:mb-6">
          <ImageWithFallback
            src={project.webShots[0].src}
            alt={project.webShots[0].caption}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {project.webShots.slice(1).map((shot) => (
            <figure key={shot.src} className="col-span-12 md:col-span-6">
              <div className="relative rounded-md overflow-hidden bg-cream-deep h-[320px] md:h-[440px]">
                <ImageWithFallback
                  src={shot.src}
                  alt={shot.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="eyebrow mt-3">{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 06 Motion / craft note ───────────────────────────── */

function MotionNote() {
  return (
    <section className="relative py-20 md:py-28 border-y border-rule bg-cream-soft">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="col-span-12 md:col-span-3 eyebrow">§ 06 — A craft note</div>
          <div className="col-span-12 md:col-span-9">
            <p className="font-display italic text-[1.5rem] md:text-[2.5rem] leading-[1.2] tracking-[-0.02em] max-w-[36ch]">
              "{project.motionNote}"
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-[42rem]">
              {[
                { k: "0", v: "JS frameworks" },
                { k: "1", v: "SVG mural" },
                { k: "180ms", v: "First paint" },
              ].map((m) => (
                <div key={m.v} className="border-t border-ink pt-3">
                  <div className="font-display text-[1.875rem] md:text-[2.25rem] leading-none tracking-[-0.02em]">
                    {m.k}
                  </div>
                  <div className="eyebrow mt-1">{m.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 07 Results ───────────────────────────── */

function Results() {
  return (
    <section className="relative py-24 md:py-32 bg-ink text-cream overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-20 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow text-cream/60 mb-5">§ 07 — The outcome</div>
            <h2 className="font-display text-cream">
              What
              <span className="display-italic text-orange"> shipped</span>.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 md:col-start-9 text-[0.9375rem] text-cream/65 max-w-[36ch]">
            Numbers Melissa's accountant cared about, and a couple our developers did too.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 gap-y-12 md:gap-y-0">
          {project.metrics.map((m, i) => (
            <div
              key={m.v}
              className={`col-span-6 md:col-span-3 ${i > 0 ? "md:border-l md:border-cream/15 md:pl-10" : ""}`}
            >
              <div className="font-display text-cream leading-none text-[5rem] md:text-[8rem] tracking-[-0.04em]">
                {m.k}
              </div>
              <div className="mt-3 eyebrow text-cream/60">{m.v}</div>
              <p className="mt-3 text-[0.875rem] text-cream/65 leading-[1.55] max-w-[26ch]">
                {m.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 08 Pull-quote ───────────────────────────── */

function Pullquote() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-2 eyebrow">§ In her words</div>
          <figure className="col-span-12 md:col-span-9">
            <div className="font-display text-orange text-[4rem] md:text-[5rem] leading-none mb-2">"</div>
            <blockquote className="font-display italic text-[1.75rem] md:text-[3rem] leading-[1.2] tracking-[-0.02em] max-w-[28ch]">
              {project.quote}
            </blockquote>
            <figcaption className="mt-8 pt-5 border-t border-ink flex items-baseline justify-between max-w-[42rem]">
              <div>
                <div className="font-display text-[1.125rem]">{project.quoteAuthor}</div>
                <div className="eyebrow mt-1">{project.quoteRole}</div>
              </div>
              <span className="eyebrow">{project.year}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 09 Credits ───────────────────────────── */

function Credits() {
  return (
    <section className="py-20 md:py-24 border-t border-rule bg-cream-soft">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-10">
          <div className="col-span-12 md:col-span-3 eyebrow">§ Colophon</div>
          <h3 className="col-span-12 md:col-span-9 font-display text-[1.75rem] md:text-[2.25rem] tracking-[-0.025em]">
            Credits & press<span className="text-orange">.</span>
          </h3>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-6">
            <div className="eyebrow mb-3">Made by</div>
            <ul className="border-t border-ink">
              {project.credits.map((c) => (
                <li
                  key={c.role}
                  className="flex items-baseline justify-between gap-6 py-3 border-b border-rule"
                >
                  <span className="font-display italic text-ink-muted text-[0.9375rem]">{c.role}</span>
                  <span className="font-display text-[0.9375rem] md:text-[1rem]">{c.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="eyebrow mb-3">As seen in</div>
            <ul className="border-t border-ink">
              {project.press.map((p) => (
                <li
                  key={p.outlet}
                  className="flex items-baseline justify-between gap-6 py-3 border-b border-rule"
                >
                  <span className="font-display text-[0.9375rem] md:text-[1rem]">{p.outlet}</span>
                  <span className="eyebrow">{p.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 10 Next ───────────────────────────── */

function NextProject() {
  return (
    <section className="bg-ink text-cream py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-10">
          <div className="col-span-12 md:col-span-6 eyebrow text-cream/60">
            Next case study — {next.num}
          </div>
          <div className="hidden md:block md:col-span-6 md:text-right eyebrow text-cream/60">
            Back to the archive →
          </div>
        </div>

        <a href="#" className="group block">
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
            <div className="col-span-12 md:col-span-8 relative overflow-hidden rounded-md h-[320px] md:h-[440px]">
              <ImageWithFallback
                src={next.image}
                alt={next.client}
                className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]"
              />
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="font-display italic text-cream/70 text-[1.125rem] mb-3">
                {next.client}
              </div>
              <h3 className="font-display text-cream text-[1.75rem] md:text-[2.5rem] leading-[1.05] tracking-[-0.025em]">
                {next.title}
              </h3>
              <span className="mt-6 inline-flex items-center gap-3 h-12 px-6 rounded-full bg-orange text-cream font-medium group-hover:bg-orange-press transition-colors">
                Read the next →
              </span>
            </div>
          </div>
        </a>

        <div className="mt-16 md:mt-20 pt-8 border-t border-cream/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <Link to="/work" className="eyebrow text-cream/60 hover:text-orange transition-colors">
            ← Back to all work
          </Link>
          <Link to="/#contact" className="eyebrow text-cream/60 hover:text-orange transition-colors">
            Start a project →
          </Link>
        </div>
      </div>
    </section>
  );
}
