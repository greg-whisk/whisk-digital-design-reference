import { Link } from "react-router";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

type Category =
  | "All"
  | "Method"
  | "Craft"
  | "Tools"
  | "Studio diary"
  | "Client stories";

type Post = {
  slug: string;
  num: string;
  category: Exclude<Category, "All">;
  title: string;
  dek: string;
  author: "Greg" | "Fliss" | "Greg & Fliss";
  readTime: string;
  date: string;
  image: string;
  pinned?: boolean;
};

const posts: Post[] = [
  {
    slug: "rebranding-as-a-solo-creator",
    num: "01",
    category: "Method",
    title: "Rebranding as a solo creator: the complete guide.",
    dek: "Most rebrand advice is written for marketing teams. Here's what the process looks like when the company is you, the kitchen table, and a deadline.",
    author: "Fliss",
    readTime: "12 min",
    date: "2026-04-30",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80",
    pinned: true,
  },
  {
    slug: "claude-code-case-study-workflow",
    num: "02",
    category: "Tools",
    title: "A Claude Code workflow that writes case studies in the Whisk voice.",
    dek: "We feed it the brief, the call transcript, and the guidelines. It returns a draft we'd be happy to ship. Here's the exact setup.",
    author: "Greg",
    readTime: "8 min",
    date: "2026-04-22",
    image:
      "https://images.unsplash.com/photo-1542435503-956c469947f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80",
  },
  {
    slug: "three-questions-that-told-me",
    num: "03",
    category: "Studio diary",
    title: "The three questions that told me this project wouldn't work.",
    dek: "Eight weeks of polite warning signs and twelve minutes of listening. Watch for these on your discovery calls.",
    author: "Greg",
    readTime: "6 min",
    date: "2026-04-08",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80",
  },
  {
    slug: "how-to-write-a-website-brief",
    num: "04",
    category: "Method",
    title: "How to write a website brief that actually gets you the website you want.",
    dek: "Because the brief does 80% of the work before a designer opens their laptop.",
    author: "Fliss",
    readTime: "9 min",
    date: "2026-03-21",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80",
  },
  {
    slug: "moved-off-sanity-back-to-mdx",
    num: "05",
    category: "Craft",
    title: "Why we moved off Sanity for case studies — and back to MDX.",
    dek: "Three months of editorial friction and one slow content team meeting later.",
    author: "Greg",
    readTime: "7 min",
    date: "2026-03-04",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80",
  },
  {
    slug: "the-call-where-the-client-talked",
    num: "06",
    category: "Client stories",
    title: "The call where the client talked for 27 of 30 minutes.",
    dek: "When she said what she didn't like, and why we built a proposal anyway. Hands-down, the best diary.",
    author: "Fliss",
    readTime: "5 min",
    date: "2026-02-18",
    image:
      "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80",
  },
  {
    slug: "twenty-one-day-rhythm",
    num: "07",
    category: "Method",
    title: "Inside the twenty-one day rhythm.",
    dek: "What goes on the wall in week one, what gets cut in week two, and why Friday lunch is sacred.",
    author: "Greg & Fliss",
    readTime: "11 min",
    date: "2026-02-02",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80",
  },
  {
    slug: "designers-second-brain",
    num: "08",
    category: "Tools",
    title: "A designer's second brain, four years in.",
    dek: "Obsidian, Raycast, a battered notebook, and one rule about Figma libraries that has saved hundreds of hours.",
    author: "Greg",
    readTime: "10 min",
    date: "2026-01-19",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80",
  },
];

const categories: Category[] = [
  "All",
  "Method",
  "Craft",
  "Tools",
  "Studio diary",
  "Client stories",
];

export function InsightsPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? posts : posts.filter((p) => p.category === active);

  const pinned = filtered.find((p) => p.pinned) ?? filtered[0];
  const rest = filtered.filter((p) => p.slug !== pinned?.slug);

  return (
    <>
      <InsightsHero count={posts.length} />
      <Filters
        active={active}
        onChange={setActive}
        counts={categories.map((c) => ({
          name: c,
          count: c === "All" ? posts.length : posts.filter((p) => p.category === c).length,
        }))}
      />
      {pinned && <Pinned post={pinned} />}
      <Stream posts={rest} />
      <Newsletter />
      <BottomCTA />
    </>
  );
}

function InsightsHero({ count }: { count: number }) {
  return (
    <section className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 max-w-[1440px] mx-auto px-6 md:px-10 opacity-[0.3]"
      >
        <div className="grid-columns h-full w-full" />
      </div>
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-24 md:pt-40 pb-12 md:pb-20">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-2">
            <div className="eyebrow">§ Insights</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h1 className="text-ink leading-[0.92]">
              <span className="block font-display tracking-[-0.035em] text-[clamp(3rem,8.5vw,8rem)]">
                Small studio.
              </span>
              <span className="block font-display italic text-ink-muted tracking-[-0.025em] text-[clamp(2.5rem,6.5vw,6rem)] mt-2">
                Loud
                <span className="text-orange"> notes</span>.
              </span>
            </h1>
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-12 gap-6 md:gap-10">
          <div className="hidden md:block md:col-span-2 eyebrow">↓ The premise</div>
          <p className="col-span-12 md:col-span-7 text-[1.0625rem] md:text-[1.1875rem] leading-[1.55] max-w-[52ch]">
            Long-form answers to questions we keep getting asked. A monthly
            diary from us, on what discovery calls keep teaching us, and a
            handful of write-ups from whatever's been clipped that week.
          </p>
          <div className="col-span-12 md:col-span-3 flex md:justify-end items-start">
            <a
              href="#newsletter"
              className="inline-flex items-center justify-between gap-3 h-12 px-6 rounded-full bg-ink text-cream font-medium hover:bg-orange transition-colors"
            >
              Get them by email
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="border-t border-rule grid grid-cols-12 gap-6 md:gap-10 py-5">
          <div className="col-span-6 md:col-span-3 eyebrow">{count} posts · 2024—2026</div>
          <div className="hidden md:block md:col-span-3 eyebrow">~ one per fortnight</div>
          <div className="hidden md:block md:col-span-3 eyebrow">Written by Greg & Fliss</div>
          <div className="col-span-6 md:col-span-3 eyebrow md:text-right">
            No tracking · No popups
          </div>
        </div>
      </div>
    </section>
  );
}

function Filters({
  active,
  onChange,
  counts,
}: {
  active: Category;
  onChange: (c: Category) => void;
  counts: { name: Category; count: number }[];
}) {
  return (
    <section className="relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 pb-4 md:pb-6">
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          {counts.map(({ name, count }) => {
            const isActive = active === name;
            return (
              <button
                key={name}
                onClick={() => onChange(name)}
                className={`inline-flex items-center gap-2 h-9 px-4 rounded-full border transition-colors text-[0.8125rem] ${
                  isActive
                    ? "bg-orange text-cream border-orange"
                    : "border-rule text-ink hover:border-ink"
                }`}
              >
                <span>{name}</span>
                <span
                  className={`font-mono text-[0.6875rem] ${
                    isActive ? "text-cream/80" : "text-ink-muted"
                  }`}
                >
                  {String(count).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Pinned({ post }: { post: Post }) {
  return (
    <section className="relative pt-6 md:pt-10 pb-16 md:pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <Link
          to={`/insights/${post.slug}`}
          className="group grid grid-cols-12 gap-6 md:gap-10 items-stretch"
        >
          <div className="col-span-12 md:col-span-7">
            <div className="relative overflow-hidden rounded-md bg-cream-deep h-[300px] md:h-[480px]">
              <ImageWithFallback
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                <span className="font-mono text-[0.6875rem] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full bg-cream/90 text-ink">
                  Pinned · {post.num}
                </span>
                <span className="font-mono text-[0.6875rem] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full bg-cream/90 text-ink">
                  {post.category}
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 flex flex-col">
            <div className="eyebrow mb-4">{formatDate(post.date)} · {post.readTime} read</div>
            <h2 className="font-display text-[2rem] md:text-[3rem] leading-[1.02] tracking-[-0.03em] max-w-[18ch]">
              {post.title}
            </h2>
            <p className="mt-5 text-[1rem] text-ink-muted leading-[1.6] max-w-[42ch]">
              {post.dek}
            </p>
            <div className="mt-auto pt-8 flex items-center justify-between">
              <Byline author={post.author} />
              <span className="inline-flex items-center gap-2 text-[0.9375rem] text-orange group-hover:gap-3 transition-all">
                Read <span aria-hidden>→</span>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

function Stream({ posts }: { posts: Post[] }) {
  return (
    <section className="relative pb-20 md:pb-28 bg-cream-soft">
      <div aria-hidden className="absolute inset-0 grid-dots opacity-[0.22]" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 pt-16 md:pt-24">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-10 items-end">
          <div className="col-span-12 md:col-span-6">
            <div className="eyebrow mb-3">§ The rest</div>
            <h2 className="font-display">
              Everything else.
              <span className="display-italic text-ink-muted"> Newest first.</span>
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 md:col-start-9 text-[0.9375rem] text-ink-muted max-w-[36ch]">
            Filed without ceremony. Some are five-minute reads, some are long
            enough to need a cup of tea.
          </p>
        </div>

        <ul className="border-t border-ink">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                to={`/insights/${p.slug}`}
                className="group grid grid-cols-12 gap-4 md:gap-10 py-6 md:py-8 border-b border-rule items-start hover:bg-cream transition-colors"
              >
                <div className="col-span-2 md:col-span-1 pt-1">
                  <span className="font-mono text-[0.8125rem] text-orange">{p.num}</span>
                </div>
                <div className="col-span-10 md:col-span-2">
                  <div className="relative w-full h-20 md:h-24 rounded-md overflow-hidden bg-cream-deep">
                    <ImageWithFallback
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <div className="eyebrow mb-2">{p.category}</div>
                  <h3 className="font-display text-[1.25rem] md:text-[1.625rem] leading-[1.1] tracking-[-0.02em]">
                    {p.title}
                  </h3>
                  <p className="hidden md:block mt-2 text-[0.9375rem] text-ink-muted leading-[1.5] max-w-[56ch]">
                    {p.dek}
                  </p>
                </div>
                <div className="hidden md:flex md:col-span-2 flex-col gap-1 pt-1">
                  <Byline author={p.author} compact />
                  <div className="eyebrow">{p.readTime}</div>
                </div>
                <div className="hidden md:flex md:col-span-1 justify-end pt-1">
                  <span
                    aria-hidden
                    className="w-10 h-10 rounded-full border border-rule flex items-center justify-center text-ink-muted group-hover:bg-ink group-hover:text-cream group-hover:border-ink transition-colors"
                  >
                    →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="eyebrow">Archive · since 2024</p>
          <a
            href="/feed.xml"
            className="inline-flex items-center gap-2 text-[0.9375rem] hover:text-orange transition-colors self-start md:self-auto"
          >
            Subscribe by RSS <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section id="newsletter" className="bg-cream py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-6">
            <div className="eyebrow mb-3">§ The list</div>
            <h2 className="font-display leading-[0.95] tracking-[-0.035em] text-[2.5rem] md:text-[4.5rem] max-w-[14ch]">
              Get the next one
              <span className="display-italic text-orange"> in your inbox</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <p className="text-[0.9375rem] text-ink-muted leading-[1.55] max-w-[42ch]">
              One email every other Tuesday. Long reads, studio diary, and the
              odd useful link. Drop in any time, no hard feelings if you bail.
            </p>
            <form
              className="mt-6 flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@studio.com"
                className="flex-1 h-12 px-5 rounded-full bg-cream-soft border border-rule focus:border-ink focus:outline-none text-[0.9375rem] placeholder:text-ink-muted"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-orange text-cream font-medium hover:bg-orange-press transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-3 eyebrow">412 readers · we don't sell the list</div>
          </div>
        </div>
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
            <div className="eyebrow text-cream/60 mb-5">§ Postscript</div>
            <h2 className="font-display text-cream leading-[0.95] tracking-[-0.03em] text-[2.5rem] md:text-[5rem] max-w-[16ch]">
              Reading is free.
              <span className="display-italic text-orange"> So is</span> a
              strategy call.
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

function Byline({
  author,
  compact = false,
}: {
  author: Post["author"];
  compact?: boolean;
}) {
  const initials =
    author === "Greg" ? "G" : author === "Fliss" ? "F" : "G·F";
  return (
    <div className="flex items-center gap-2.5">
      <span className="w-7 h-7 rounded-full bg-ink text-cream font-mono text-[0.6875rem] flex items-center justify-center">
        {initials}
      </span>
      <span className={compact ? "eyebrow" : "text-[0.875rem] text-ink-muted"}>
        {author}
      </span>
    </div>
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
