import { Link, useParams } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

type Block =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "lead"; text: string }
  | { kind: "pullquote"; text: string; attribution?: string }
  | { kind: "list"; items: string[] }
  | { kind: "image"; src: string; alt: string; caption?: string }
  | { kind: "note"; label: string; text: string };

type Article = {
  slug: string;
  num: string;
  category: string;
  title: string;
  dek: string;
  author: "Greg" | "Fliss" | "Greg & Fliss";
  role: string;
  readTime: string;
  date: string;
  cover: string;
  tags: string[];
  body: Block[];
  related: { slug: string; title: string; category: string; image: string }[];
};

const articles: Record<string, Article> = {
  "rebranding-as-a-solo-creator": {
    slug: "rebranding-as-a-solo-creator",
    num: "01",
    category: "Method",
    title: "Rebranding as a solo creator: the complete guide.",
    dek: "Most rebrand advice is written for marketing teams. Here's what the process looks like when the company is you, the kitchen table, and a deadline.",
    author: "Fliss",
    role: "Strategy partner",
    readTime: "12 min",
    date: "2026-04-30",
    cover:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1800&q=85",
    tags: ["Brand strategy", "Solo founders", "Voice", "Pricing"],
    body: [
      {
        kind: "lead",
        text: "When the company is you, every rebrand decision is also a decision about how you want to spend your Tuesdays. That's the honest part nobody puts in the proposal.",
      },
      {
        kind: "p",
        text: "We've worked with founders who run everything from the kitchen table — ceramicists, coaches, a documentary editor, two architects who hate each other in a productive way — and the pattern is the same every time. The brand they walked in with was a costume they put on to look credible. The brand they walked out with was a thinner one, closer to their own clothes, that they could wear for the next ten years without losing their voice.",
      },
      { kind: "h2", text: "Start with what you stop saying." },
      {
        kind: "p",
        text: "Most solo creators do not have a positioning problem. They have an attention problem. They are saying eleven things on the homepage because they're afraid that the twelfth thing is the one the next client wanted. The rebrand begins the moment you write down the three sentences you'll stop saying out loud.",
      },
      {
        kind: "pullquote",
        text: "The rebrand begins the moment you write down the three sentences you'll stop saying out loud.",
      },
      { kind: "h2", text: "Find the room you keep talking to." },
      {
        kind: "p",
        text: "Don't write a buyer persona. Find one person. Real, named, with a Tuesday morning calendar. Write to them. Their objections are the only objections that matter, and their language is the only language that should survive into the final copy.",
      },
      {
        kind: "image",
        src: "https://images.unsplash.com/photo-1542435503-956c469947f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600&q=85",
        alt: "Studio wall covered in pinned printouts",
        caption: "Week one of any rebrand: the wall does a lot of the thinking.",
      },
      {
        kind: "h2",
        text: "Decide what the brand has to do — once you can list those jobs, the rest gets cheap.",
      },
      {
        kind: "p",
        text: "Brand is operational. It books calls, raises prices, filters out the wrong enquiries, and gets you out of a room. Once you list the jobs, the design questions get easier — because every choice has to pass through that list before it goes live.",
      },
      {
        kind: "list",
        items: [
          "Book the right enquiries (and politely repel the wrong ones).",
          "Make a higher price feel inevitable, not cheeky.",
          "Survive a three-second glance from a new visitor.",
          "Work just as well in a DM as it does on the homepage.",
        ],
      },
      {
        kind: "note",
        label: "Field note",
        text: "If you can't picture the brand working inside an iMessage thread to a friend, it probably doesn't work anywhere else either.",
      },
      { kind: "h2", text: "Pick the smallest identity that still feels like you." },
      {
        kind: "p",
        text: "Solo creators almost always over-design the rebrand. A wordmark, two type families, a primary, an accent, a paper colour, and a single illustration approach is enough to run a business on for five years. Anything more becomes inventory you have to maintain.",
      },
      {
        kind: "h2",
        text: "Ship the website on the same day you ship the brand.",
      },
      {
        kind: "p",
        text: "Brand decks are where good identities go to die. The site is the proving ground, and the constraints of real layout, real copy, and real images will sharpen the system in ways no PDF ever does. If the brand only works in the brand guidelines, you've made a brand for the brand guidelines.",
      },
      {
        kind: "pullquote",
        text: "If the brand only works in the brand guidelines, you've made a brand for the brand guidelines.",
        attribution: "Greg, mostly correctly",
      },
      { kind: "h2", text: "Plan the relaunch as a Tuesday, not a parade." },
      {
        kind: "p",
        text: "Most relaunches are a non-event for everyone except the founder. Send three personal emails, post once, update the footer year, and get on with the work. The brand earns its keep over the next ninety days, not the next ninety minutes.",
      },
    ],
    related: [
      {
        slug: "how-to-write-a-website-brief",
        title: "How to write a website brief that gets you what you want.",
        category: "Method",
        image:
          "https://images.unsplash.com/photo-1455390582262-044cdead277a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
      },
      {
        slug: "twenty-one-day-rhythm",
        title: "Inside the twenty-one day rhythm.",
        category: "Method",
        image:
          "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
      },
      {
        slug: "three-questions-that-told-me",
        title: "The three questions that told me this project wouldn't work.",
        category: "Studio diary",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
      },
    ],
  },
};

const fallback: Article = articles["rebranding-as-a-solo-creator"];

export function InsightPage() {
  const { slug } = useParams();
  const article = (slug && articles[slug]) || fallback;

  return (
    <>
      <ArticleHero article={article} />
      <MetaStrip article={article} />
      <Body blocks={article.body} />
      <AuthorCard article={article} />
      <Related items={article.related} />
      <BottomCTA />
    </>
  );
}

function ArticleHero({ article }: { article: Article }) {
  return (
    <section className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 max-w-[1440px] mx-auto px-6 md:px-10 opacity-[0.3]"
      >
        <div className="grid-columns h-full w-full" />
      </div>
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-20 md:pt-32 pb-10 md:pb-16">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-2">
            <Link
              to="/insights"
              className="eyebrow inline-flex items-center gap-2 hover:text-orange transition-colors"
            >
              <span aria-hidden>←</span> All insights
            </Link>
          </div>
          <div className="col-span-12 md:col-span-10">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-mono text-[0.6875rem] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full bg-cream-deep text-ink">
                {article.category}
              </span>
              <span className="eyebrow">№ {article.num}</span>
              <span className="eyebrow">·</span>
              <span className="eyebrow">{article.readTime} read</span>
            </div>
            <h1 className="font-display text-ink leading-[0.96] tracking-[-0.03em] text-[clamp(2.25rem,6vw,5.5rem)] max-w-[22ch]">
              {article.title}
            </h1>
            <p className="mt-6 md:mt-8 text-[1.0625rem] md:text-[1.25rem] leading-[1.5] text-ink-muted max-w-[52ch]">
              {article.dek}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="relative overflow-hidden rounded-md bg-cream-deep h-[280px] md:h-[520px]">
          <ImageWithFallback
            src={article.cover}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function MetaStrip({ article }: { article: Article }) {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-8 md:py-10">
      <div className="border-y border-rule grid grid-cols-12 gap-6 md:gap-10 py-5">
        <div className="col-span-6 md:col-span-3">
          <div className="eyebrow mb-1">Written by</div>
          <div className="text-[0.9375rem]">{article.author}</div>
          <div className="eyebrow mt-1">{article.role}</div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="eyebrow mb-1">Published</div>
          <div className="text-[0.9375rem]">{formatDate(article.date)}</div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="eyebrow mb-1">Filed under</div>
          <div className="text-[0.9375rem]">{article.category}</div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="eyebrow mb-1">Tags</div>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {article.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="font-mono text-[0.6875rem] tracking-[0.1em] uppercase text-ink-muted border border-rule rounded-full px-2 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Body({ blocks }: { blocks: Block[] }) {
  return (
    <section className="py-10 md:py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="hidden md:block md:col-span-2">
            <div className="sticky top-24 eyebrow">↓ The piece</div>
          </div>
          <article className="col-span-12 md:col-span-8 md:col-start-3 max-w-[64ch]">
            {blocks.map((b, i) => (
              <BlockView key={i} block={b} />
            ))}
          </article>
        </div>
      </div>
    </section>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "lead":
      return (
        <p className="font-display italic text-[1.5rem] md:text-[2rem] leading-[1.25] tracking-[-0.015em] text-ink mt-2 mb-10 max-w-[28ch]">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2 className="font-display text-[1.75rem] md:text-[2.25rem] leading-[1.1] tracking-[-0.025em] mt-12 mb-5 max-w-[24ch]">
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p className="text-[1.0625rem] md:text-[1.125rem] leading-[1.65] text-ink mb-5">
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul className="mb-7 space-y-2.5">
          {block.items.map((it, i) => (
            <li
              key={i}
              className="relative pl-7 text-[1.0625rem] md:text-[1.125rem] leading-[1.6] text-ink"
            >
              <span
                aria-hidden
                className="absolute left-0 top-[0.7rem] w-3 h-px bg-orange"
              />
              {it}
            </li>
          ))}
        </ul>
      );
    case "pullquote":
      return (
        <figure className="my-12 border-l-2 border-orange pl-6 md:pl-8">
          <blockquote className="font-display italic text-[1.625rem] md:text-[2.125rem] leading-[1.2] tracking-[-0.015em] text-ink max-w-[28ch]">
            "{block.text}"
          </blockquote>
          {block.attribution && (
            <figcaption className="eyebrow mt-4">— {block.attribution}</figcaption>
          )}
        </figure>
      );
    case "image":
      return (
        <figure className="my-10 -mx-2 md:-mx-12">
          <div className="relative overflow-hidden rounded-md bg-cream-deep h-[240px] md:h-[420px]">
            <ImageWithFallback
              src={block.src}
              alt={block.alt}
              className="w-full h-full object-cover"
            />
          </div>
          {block.caption && (
            <figcaption className="eyebrow mt-3 px-2 md:px-12">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "note":
      return (
        <aside className="my-8 bg-cream-soft border border-rule rounded-md p-5 md:p-6">
          <div className="eyebrow text-orange mb-2">{block.label}</div>
          <p className="text-[1rem] leading-[1.55] text-ink">{block.text}</p>
        </aside>
      );
  }
}

function AuthorCard({ article }: { article: Article }) {
  const initials =
    article.author === "Greg" ? "G" : article.author === "Fliss" ? "F" : "G·F";
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <div className="border border-rule rounded-md p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-ink text-cream flex items-center justify-center font-mono text-[1rem] shrink-0">
                {initials}
              </div>
              <div className="flex-1">
                <div className="eyebrow mb-2">Written by</div>
                <div className="font-display text-[1.5rem] md:text-[1.875rem] leading-[1.1] tracking-[-0.02em]">
                  {article.author}
                </div>
                <div className="eyebrow mt-1">{article.role}</div>
                <p className="mt-4 text-[0.9375rem] text-ink-muted leading-[1.6] max-w-[52ch]">
                  One half of Whisk Digital. Writes most of what ends up on this
                  page, usually on a Sunday, usually with the dog on the desk.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    to="/studio"
                    className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-rule text-[0.8125rem] hover:border-ink transition-colors"
                  >
                    More about the studio <span aria-hidden>→</span>
                  </Link>
                  <Link
                    to="/#contact"
                    className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-ink text-cream text-[0.8125rem] hover:bg-orange transition-colors"
                  >
                    Start a project <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Related({ items }: { items: Article["related"] }) {
  return (
    <section className="bg-cream-soft py-20 md:py-28">
      <div aria-hidden className="absolute inset-x-0 grid-dots-soft opacity-[0.2]" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-10">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-3">§ Keep reading</div>
            <h2 className="font-display">
              Three more.
              <span className="display-italic text-ink-muted"> Same vein.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 flex md:justify-end items-end">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-[0.9375rem] hover:text-orange transition-colors"
            >
              All insights <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <ul className="grid grid-cols-12 gap-6 md:gap-10">
          {items.map((it) => (
            <li key={it.slug} className="col-span-12 md:col-span-4">
              <Link
                to={`/insights/${it.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-md bg-cream-deep h-[200px] md:h-[260px]">
                  <ImageWithFallback
                    src={it.image}
                    alt={it.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="eyebrow mt-4">{it.category}</div>
                <h3 className="mt-2 font-display text-[1.25rem] md:text-[1.5rem] leading-[1.1] tracking-[-0.02em] max-w-[24ch]">
                  {it.title}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section className="bg-ink text-cream py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
          <div className="col-span-12 md:col-span-8">
            <div className="eyebrow text-cream/60 mb-5">§ Enjoyed this?</div>
            <h2 className="font-display text-cream leading-[0.95] tracking-[-0.03em] text-[2.5rem] md:text-[5rem] max-w-[16ch]">
              Get the next one
              <span className="display-italic text-orange"> in your</span> inbox.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col gap-3">
            <Link
              to="/insights#newsletter"
              className="inline-flex items-center justify-between gap-3 h-14 px-6 rounded-full bg-orange text-cream font-medium hover:bg-orange-press transition-colors"
            >
              Subscribe by email
              <span aria-hidden>→</span>
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-between gap-3 h-14 px-6 rounded-full border border-cream/25 text-cream font-medium hover:bg-cream hover:text-ink transition-colors"
            >
              Book a strategy call
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
