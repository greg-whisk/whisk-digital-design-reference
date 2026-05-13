import { Link } from "react-router";
import { useState } from "react";

type Channel = {
  num: string;
  kind: string;
  title: string;
  promise: string;
  detail: string;
  responseTime: string;
  bestFor: string[];
  cta: { label: string; href: string };
  accent?: boolean;
};

const channels: Channel[] = [
  {
    num: "01",
    kind: "Strategy call",
    title: "Book a strategy call.",
    promise: "Thirty minutes. Free. Useful even if we don't end up working together.",
    detail:
      "You bring the brief, the half-formed idea, or the website that's been bothering you. We bring a notebook and the questions we ask every founder. You leave with a clearer picture of what to do — with us, or without us.",
    responseTime: "Slots inside 7 days",
    bestFor: ["New project", "Rebrand", "Second opinion"],
    cta: { label: "Pick a Tuesday slot", href: "https://cal.com/whiskdigital" },
    accent: true,
  },
  {
    num: "02",
    kind: "In person",
    title: "Coffee in Hastings.",
    promise: "We're a ten-minute walk from the train. The coffee at Goat is on us.",
    detail:
      "Hastings is ninety minutes from London Bridge. Bring the team, bring the dog, bring nothing. We talk for an hour, walk down to the seafront, and you catch the 4:12 home with a clearer head.",
    responseTime: "Pick a Wed or Thu",
    bestFor: ["Larger scopes", "Team workshops", "You like trains"],
    cta: { label: "Suggest a date", href: "mailto:hello@whisk.digital?subject=Coffee%20in%20Hastings" },
  },
  {
    num: "03",
    kind: "WhatsApp",
    title: "WhatsApp us.",
    promise: "For when an email feels like overkill. We answer between 9 and 6.",
    detail:
      "Send a voice note, paste a link, ask a question. We're not always at the desk, but you'll hear back the same working day — usually inside the hour.",
    responseTime: "Same working day",
    bestFor: ["Quick questions", "Existing clients", "Voice notes"],
    cta: { label: "Open WhatsApp", href: "https://wa.me/447700900123" },
  },
  {
    num: "04",
    kind: "Email",
    title: "Email Fliss.",
    promise: "If you'd rather write a long one. Read between meetings, replied to after them.",
    detail:
      "All enquiries land in Fliss's inbox. She reads everything herself — no agency triage, no automated reply, no junior associate to nudge.",
    responseTime: "Inside 24 hours",
    bestFor: ["Long briefs", "Quiet enquiries", "Press"],
    cta: { label: "hello@whisk.digital", href: "mailto:hello@whisk.digital" },
  },
];

const notFor: { title: string; body: string }[] = [
  {
    title: "Cold pitches from agencies.",
    body: "We're an agency. We do the thing you're selling. Save your CRM credits.",
  },
  {
    title: "SEO link-building requests.",
    body: "We won't add your guest post, swap a link, or buy a backlink package. Promise.",
  },
  {
    title: "RFPs with twelve agencies in the cc.",
    body: "If you're shopping a brief, we're not the right room. We pick projects carefully and so should you.",
  },
  {
    title: "Anything under £8k.",
    body: "We've tried small projects. They make both of us miserable. Try one of these instead.",
  },
];

const directory: { label: string; value: string; href?: string }[] = [
  { label: "Hello", value: "hello@whisk.digital", href: "mailto:hello@whisk.digital" },
  { label: "WhatsApp", value: "+44 7700 900 123", href: "https://wa.me/447700900123" },
  { label: "Phone", value: "+44 1424 123 456", href: "tel:+441424123456" },
  { label: "Press", value: "press@whisk.digital", href: "mailto:press@whisk.digital" },
  { label: "Careers", value: "We're not hiring — but tea is fine." },
  { label: "Letter", value: "12 George Street · Hastings · TN34 3EG" },
];

export function ContactPage() {
  return (
    <>
      <ContactHero />
      <Channels />
      <NotFor />
      <Hours />
      <Directory />
      <BriefForm />
      <Footnote />
    </>
  );
}

function ContactHero() {
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
            <div className="eyebrow">§ Contact</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h1 className="text-ink leading-[0.92]">
              <span className="block font-display tracking-[-0.035em] text-[clamp(3rem,8.5vw,8rem)]">
                Two humans,
              </span>
              <span className="block font-display italic text-ink-muted tracking-[-0.025em] text-[clamp(2.5rem,6.5vw,6rem)] mt-2">
                one studio,
              </span>
              <span className="block font-body font-bold tracking-[-0.04em] text-[clamp(3rem,8.5vw,8rem)] mt-2">
                four <span className="text-orange">inboxes</span>.
              </span>
            </h1>
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-12 gap-6 md:gap-10">
          <div className="hidden md:block md:col-span-2 eyebrow">↓ Pick a door</div>
          <p className="col-span-12 md:col-span-7 text-[1.0625rem] md:text-[1.1875rem] leading-[1.55] max-w-[52ch]">
            Some people want a Tuesday slot in the calendar. Some want to walk
            down to the seafront. Some want to send a voice note at 11pm.
            They're all the front door — pick the one that fits.
          </p>
          <div className="col-span-12 md:col-span-3 flex md:justify-end items-start">
            <a
              href="#brief"
              className="inline-flex items-center justify-between gap-3 h-12 px-6 rounded-full bg-ink text-cream font-medium hover:bg-orange transition-colors"
            >
              Send a written brief
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="border-t border-rule grid grid-cols-12 gap-6 md:gap-10 py-5">
          <div className="col-span-6 md:col-span-3 eyebrow">2 humans · 0 form gatekeepers</div>
          <div className="hidden md:block md:col-span-3 eyebrow">Reply inside 24 hrs</div>
          <div className="hidden md:block md:col-span-3 eyebrow">Hastings · TN34</div>
          <div className="col-span-6 md:col-span-3 eyebrow md:text-right">
            Booking Q3 · 2 slots remaining
          </div>
        </div>
      </div>
    </section>
  );
}

function Channels() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {channels.map((c, i) => (
            <ChannelCard key={c.num} channel={c} offset={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ChannelCard({ channel, offset }: { channel: Channel; offset: number }) {
  const isAccent = channel.accent;
  const isOdd = offset % 2 === 1;
  return (
    <article
      className={`col-span-12 md:col-span-6 ${
        isOdd ? "md:mt-16" : ""
      } group relative rounded-md border ${
        isAccent ? "bg-ink text-cream border-ink" : "bg-cream-soft border-rule"
      }`}
    >
      <div className="p-7 md:p-10 grid grid-cols-12 gap-5 md:gap-8 min-h-[440px]">
        <div className="col-span-3 md:col-span-2 flex flex-col justify-between">
          <span
            className={`font-mono text-[0.6875rem] tracking-[0.18em] uppercase ${
              isAccent ? "text-cream/60" : "text-ink-muted"
            }`}
          >
            № {channel.num}
          </span>
          <span
            className={`font-mono text-[0.625rem] tracking-[0.16em] uppercase ${
              isAccent ? "text-orange" : "text-orange"
            }`}
          >
            ↑ {channel.responseTime}
          </span>
        </div>
        <div className="col-span-9 md:col-span-10 flex flex-col">
          <div
            className={`eyebrow mb-4 ${isAccent ? "text-orange" : "text-orange"}`}
          >
            {channel.kind}
          </div>
          <h2
            className={`font-display tracking-[-0.025em] leading-[1.02] text-[1.75rem] md:text-[2.5rem] max-w-[14ch] ${
              isAccent ? "text-cream" : "text-ink"
            }`}
          >
            {channel.title}
          </h2>
          <p
            className={`mt-4 font-display italic text-[1.0625rem] md:text-[1.25rem] leading-[1.35] max-w-[28ch] ${
              isAccent ? "text-cream/85" : "text-ink"
            }`}
          >
            {channel.promise}
          </p>
          <p
            className={`mt-4 text-[0.9375rem] leading-[1.6] max-w-[44ch] ${
              isAccent ? "text-cream/70" : "text-ink-muted"
            }`}
          >
            {channel.detail}
          </p>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {channel.bestFor.map((b) => (
              <span
                key={b}
                className={`font-mono text-[0.6875rem] tracking-[0.1em] uppercase border rounded-full px-2.5 py-1 ${
                  isAccent
                    ? "border-cream/25 text-cream/80"
                    : "border-rule text-ink-muted"
                }`}
              >
                {b}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-8">
            <a
              href={channel.cta.href}
              className={`inline-flex items-center gap-3 h-12 px-6 rounded-full font-medium transition-colors ${
                isAccent
                  ? "bg-orange text-cream hover:bg-orange-press"
                  : "bg-ink text-cream hover:bg-orange"
              }`}
            >
              {channel.cta.label}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function NotFor() {
  return (
    <section className="relative py-20 md:py-28 bg-cream-soft">
      <div aria-hidden className="absolute inset-0 grid-dots opacity-[0.22]" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-10 md:mb-14">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-3">§ Plain talk</div>
            <h2 className="font-display">
              What we don't respond to.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 md:col-start-9 text-[0.9375rem] text-ink-muted max-w-[36ch]">
            Said gently. The inbox is small, and being honest about what we
            ignore is more useful than a pretend SLA.
          </p>
        </div>

        <ul className="border-t border-ink">
          {notFor.map((n, i) => (
            <li
              key={n.title}
              className="grid grid-cols-12 gap-4 md:gap-10 py-6 md:py-7 border-b border-rule items-start"
            >
              <div className="col-span-2 md:col-span-1">
                <span className="font-mono text-[0.8125rem] text-orange">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="col-span-10 md:col-span-5">
                <h3 className="font-display text-[1.25rem] md:text-[1.625rem] leading-[1.1] tracking-[-0.02em]">
                  {n.title}
                </h3>
              </div>
              <p className="col-span-12 md:col-span-6 text-[0.9375rem] md:text-[1rem] text-ink-muted leading-[1.55] max-w-[52ch]">
                {n.body}
              </p>
            </li>
          ))}
        </ul>

        <p className="eyebrow mt-10">
          If you're not sure → send anyway. We'd rather decline politely than
          miss the right one.
        </p>
      </div>
    </section>
  );
}

function Hours() {
  return (
    <section className="bg-ink text-cream py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-5">
            <div className="eyebrow text-cream/60 mb-5">§ Where we are</div>
            <h2 className="font-display text-cream leading-[0.95] tracking-[-0.03em] text-[2.25rem] md:text-[3.5rem] max-w-[16ch]">
              A room above the
              <span className="display-italic text-orange"> fishing nets</span>,
              GMT.
            </h2>
            <p className="mt-5 text-cream/70 text-[1rem] leading-[1.6] max-w-[48ch]">
              We work UK hours. We answer most things the same day. We never
              answer on Sundays — which we recommend you also try.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:gap-y-10">
              <HourBlock label="Monday — Thursday" value="09:00 — 18:00" />
              <HourBlock label="Friday" value="09:00 — 14:00" sub="show-and-tell after lunch" />
              <HourBlock label="Saturday" value="Closed" sub="we walk Marlow" />
              <HourBlock label="Sunday" value="Closed" sub="and so should you" />
            </div>
            <div className="mt-10 pt-8 border-t border-cream/15 grid grid-cols-2 gap-x-8 gap-y-5">
              <HourBlock label="Timezone" value="GMT / BST" />
              <HourBlock label="Coords" value="50.8543° N, 0.5734° E" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HourBlock({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div>
      <div className="font-mono text-[0.6875rem] tracking-[0.18em] uppercase text-cream/55">
        {label}
      </div>
      <div className="font-display text-[1.5rem] md:text-[1.875rem] leading-[1.1] tracking-[-0.02em] mt-2">
        {value}
      </div>
      {sub && (
        <div className="font-display italic text-cream/55 mt-1 text-[0.9375rem]">
          {sub}
        </div>
      )}
    </div>
  );
}

function Directory() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-10">
          <div className="col-span-12 md:col-span-6">
            <div className="eyebrow mb-3">§ Directory</div>
            <h2 className="font-display">
              Every line,
              <span className="display-italic text-ink-muted"> in one place.</span>
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 md:col-start-9 text-[0.9375rem] text-ink-muted max-w-[36ch]">
            For when you already know what you want and just need the right
            address.
          </p>
        </div>

        <ul className="border-t border-ink">
          {directory.map((row) => (
            <li
              key={row.label}
              className="grid grid-cols-12 gap-4 md:gap-10 py-5 md:py-6 border-b border-rule items-center"
            >
              <div className="col-span-4 md:col-span-3 eyebrow">{row.label}</div>
              <div className="col-span-8 md:col-span-9 flex items-center justify-between gap-4">
                {row.href ? (
                  <a
                    href={row.href}
                    className="font-display text-[1.125rem] md:text-[1.375rem] tracking-[-0.015em] hover:text-orange transition-colors"
                  >
                    {row.value}
                  </a>
                ) : (
                  <span className="font-display italic text-[1.125rem] md:text-[1.375rem] tracking-[-0.015em] text-ink-muted">
                    {row.value}
                  </span>
                )}
                {row.href && (
                  <span
                    aria-hidden
                    className="hidden md:inline-flex w-9 h-9 rounded-full border border-rule items-center justify-center text-ink-muted hover:bg-ink hover:text-cream hover:border-ink transition-colors"
                  >
                    →
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BriefForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="brief" className="bg-cream-soft py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow mb-3">§ Written brief</div>
            <h2 className="font-display leading-[0.98] tracking-[-0.025em] text-[2rem] md:text-[3rem] max-w-[14ch]">
              Tell us
              <span className="display-italic text-orange"> what's on the wall</span>.
            </h2>
            <p className="mt-5 text-[0.9375rem] text-ink-muted leading-[1.6] max-w-[36ch]">
              Six fields. Fliss reads it the same day. If we're not the right
              studio, we'll say so and point you at someone who is.
            </p>
            <ul className="mt-7 space-y-2 text-[0.875rem] text-ink-muted">
              <li className="flex gap-3"><span className="font-mono text-orange">↳</span> No login. No tracking. No popup.</li>
              <li className="flex gap-3"><span className="font-mono text-orange">↳</span> Reply inside 24 hours.</li>
              <li className="flex gap-3"><span className="font-mono text-orange">↳</span> Five-minute fill, max.</li>
            </ul>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="col-span-12 md:col-span-7 md:col-start-6 bg-cream rounded-md border border-rule p-7 md:p-10"
          >
            <div className="grid grid-cols-12 gap-5">
              <Field label="Your name" name="name" placeholder="Mara Lin" col={6} />
              <Field label="Email" name="email" placeholder="mara@studio.com" col={6} type="email" />
              <Field label="Company / project" name="company" placeholder="Optional" col={12} />
              <SelectField
                label="What's the shape?"
                name="shape"
                col={6}
                options={[
                  "Rebrand + website",
                  "Brand strategy only",
                  "Website only",
                  "Identity refresh",
                  "Not sure yet",
                ]}
              />
              <SelectField
                label="Budget"
                name="budget"
                col={6}
                options={[
                  "£8k — £14k",
                  "£14k — £25k",
                  "£25k — £50k",
                  "£50k +",
                  "I'd rather discuss",
                ]}
              />
              <div className="col-span-12">
                <label className="block">
                  <span className="eyebrow">The brief, in your own words</span>
                  <textarea
                    name="brief"
                    rows={6}
                    placeholder="What's the project, what's on fire, and what would 'done' look like for you?"
                    className="mt-2 w-full bg-cream-soft border border-rule focus:border-ink focus:outline-none rounded-md px-4 py-3 text-[0.9375rem] placeholder:text-ink-muted leading-[1.55]"
                  />
                </label>
              </div>

              <div className="col-span-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                <p className="eyebrow">Submitting agrees to a polite reply, nothing more.</p>
                <button
                  type="submit"
                  disabled={sent}
                  className="inline-flex items-center justify-center gap-3 h-12 px-6 rounded-full bg-orange text-cream font-medium hover:bg-orange-press disabled:opacity-60 transition-colors"
                >
                  {sent ? "Sent — we'll be in touch" : "Send the brief"}
                  <span aria-hidden>→</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

const colClass: Record<number, string> = {
  6: "col-span-12 md:col-span-6",
  12: "col-span-12",
};

function Field({
  label,
  name,
  placeholder,
  col,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  col: 6 | 12;
  type?: string;
}) {
  return (
    <label className={`${colClass[col]} block`}>
      <span className="eyebrow">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-2 w-full h-11 bg-cream-soft border border-rule focus:border-ink focus:outline-none rounded-md px-4 text-[0.9375rem] placeholder:text-ink-muted"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  col,
}: {
  label: string;
  name: string;
  options: string[];
  col: 6 | 12;
}) {
  return (
    <label className={`${colClass[col]} block`}>
      <span className="eyebrow">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="mt-2 w-full h-11 bg-cream-soft border border-rule focus:border-ink focus:outline-none rounded-md px-4 text-[0.9375rem] appearance-none"
      >
        <option value="" disabled>
          Pick one
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function Footnote() {
  return (
    <section className="bg-ink text-cream py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="eyebrow text-cream/60 mb-5">§ While you're here</div>
            <h2 className="font-display text-cream leading-[0.95] tracking-[-0.03em] text-[2rem] md:text-[3.5rem] max-w-[20ch]">
              No reply yet?
              <span className="display-italic text-orange"> Read the method</span>{" "}
              while you wait.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col gap-3">
            <Link
              to="/method"
              className="inline-flex items-center justify-between gap-3 h-12 px-6 rounded-full bg-orange text-cream font-medium hover:bg-orange-press transition-colors"
            >
              The 321 Method
              <span aria-hidden>→</span>
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center justify-between gap-3 h-12 px-6 rounded-full border border-cream/25 text-cream font-medium hover:bg-cream hover:text-ink transition-colors"
            >
              Selected work
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
