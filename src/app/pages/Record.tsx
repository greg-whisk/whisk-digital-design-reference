import { Link } from "react-router";
import { useState } from "react";

type Mode = "video" | "upload" | "type";

const prompts = [
  {
    num: "01",
    title: "Who are you, and what do you do?",
    body: "Just one sentence — your name, and what you make or do. Helps the next viewer place you. Pretend you're telling a neighbour.",
  },
  {
    num: "02",
    title: "What did you come to us wanting to fix?",
    body: "The website, the brand, the proposal — whatever was on fire when you first emailed. Don't worry about being diplomatic, the friction is the bit other founders relate to most.",
  },
  {
    num: "03",
    title: "What's different now?",
    body: "Anything concrete — a booking, a confidence, a moment when a friend noticed the change. We don't need a number, we need the moment it landed.",
  },
];

const tips = [
  "Window light over your shoulder, not behind you.",
  "Phone in landscape, propped on a stack of books.",
  "Two minutes is plenty. Three is generous.",
  "Stumble, restart, swear — we'll edit the bits.",
];

export function RecordPage() {
  const [mode, setMode] = useState<Mode>("video");
  const [recording, setRecording] = useState(false);
  const [consent, setConsent] = useState(false);

  return (
    <>
      <RecordHero />
      <Prompts />
      <Studio mode={mode} setMode={setMode} recording={recording} setRecording={setRecording} />
      <DetailsForm consent={consent} setConsent={setConsent} mode={mode} />
      <Footnote />
    </>
  );
}

function RecordHero() {
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
          <span className="font-mono text-[0.6875rem] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full bg-orange text-cream">
            Private link · clients only
          </span>
          <span className="eyebrow">Two minutes</span>
          <span className="eyebrow text-ink-muted">·</span>
          <span className="eyebrow">No login</span>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-2">
            <div className="eyebrow">↓ The ask</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h1 className="text-ink leading-[0.94]">
              <span className="block font-display italic text-ink-muted tracking-[-0.02em] text-[clamp(1.5rem,3vw,2.25rem)] mb-3">
                Hi —
              </span>
              <span className="block font-display tracking-[-0.035em] text-[clamp(2.5rem,7.5vw,7rem)] max-w-[18ch]">
                would you say a few words about your{" "}
                <span className="display-italic text-orange">project</span> with us?
              </span>
            </h1>
          </div>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-12 gap-6 md:gap-10">
          <div className="hidden md:block md:col-span-2 eyebrow">↳ Why we ask</div>
          <p className="col-span-12 md:col-span-7 text-[1.0625rem] md:text-[1.1875rem] leading-[1.55] max-w-[52ch]">
            This is the one ask I make of every client when a project wraps —
            a short video testimonial, sixty to ninety seconds, that I can use
            on the studio site or send to the single most useful thing you can
            give us. Other founders watch it before they email me, and I
            promise to make it take less time than this paragraph took you to
            read.
          </p>
          <div className="col-span-12 md:col-span-3 flex md:justify-end items-start">
            <a
              href="#studio"
              className="inline-flex items-center justify-between gap-3 h-12 px-6 rounded-full bg-ink text-cream font-medium hover:bg-orange transition-colors"
            >
              Start recording
              <span aria-hidden>●</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="border-t border-rule grid grid-cols-12 gap-6 md:gap-10 py-5">
          <div className="col-span-6 md:col-span-3 eyebrow">3 prompts · pick your favourite</div>
          <div className="hidden md:block md:col-span-3 eyebrow">Records in your browser</div>
          <div className="hidden md:block md:col-span-3 eyebrow">Edited before we ship</div>
          <div className="col-span-6 md:col-span-3 eyebrow md:text-right">
            You sign off the final cut
          </div>
        </div>
      </div>
    </section>
  );
}

function Prompts() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-10 md:mb-14">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-3">§ Three prompts</div>
            <h2 className="font-display">
              Answer one,
              <span className="display-italic text-ink-muted"> or all three</span>.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 md:col-start-9 text-[0.9375rem] text-ink-muted max-w-[36ch]">
            These are scaffolds, not a script. Riff, skip, contradict — the
            best clips never quite stay on the rails.
          </p>
        </div>

        <ol className="grid grid-cols-12 gap-5 md:gap-7">
          {prompts.map((p, i) => (
            <li
              key={p.num}
              className={`col-span-12 md:col-span-4 ${
                i === 1 ? "md:mt-8" : i === 2 ? "md:mt-4" : ""
              }`}
            >
              <article className="relative h-full bg-cream-soft border border-rule rounded-md p-6 md:p-8">
                <div className="flex items-start gap-5">
                  <span className="font-display italic text-orange text-[2.5rem] md:text-[3.25rem] leading-none tracking-[-0.03em]">
                    {p.num}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-[1.25rem] md:text-[1.5rem] leading-[1.1] tracking-[-0.02em] max-w-[20ch]">
                      {p.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-5 text-[0.9375rem] text-ink-muted leading-[1.6] max-w-[44ch]">
                  {p.body}
                </p>
              </article>
            </li>
          ))}
        </ol>

        <p className="mt-10 font-display italic text-ink-muted text-[1.0625rem] md:text-[1.25rem] leading-[1.4] max-w-[42ch]">
          Answer them in any order, briefly, casually, off-the-cuff. We'll do
          the heavy lifting on the edit.
        </p>
      </div>
    </section>
  );
}

function Studio({
  mode,
  setMode,
  recording,
  setRecording,
}: {
  mode: Mode;
  setMode: (m: Mode) => void;
  recording: boolean;
  setRecording: (r: boolean) => void;
}) {
  return (
    <section id="studio" className="relative py-20 md:py-28 bg-cream-soft">
      <div aria-hidden className="absolute inset-0 grid-dots opacity-[0.2]" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-8 md:mb-10">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-3">§ The booth</div>
            <h2 className="font-display">
              Record it here.
              <span className="display-italic text-ink-muted"> Or any way you like.</span>
            </h2>
          </div>
          <div className="hidden md:block md:col-span-4 md:col-start-9 eyebrow md:text-right">
            Browser only · nothing leaves until you press send
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
          <aside className="col-span-12 md:col-span-3 order-2 md:order-1">
            <div className="eyebrow mb-4">§ A few light tips</div>
            <ul className="space-y-3">
              {tips.map((t, i) => (
                <li
                  key={t}
                  className="relative pl-7 text-[0.9375rem] text-ink-muted leading-[1.5]"
                >
                  <span className="absolute left-0 top-0 font-mono text-[0.6875rem] tracking-[0.18em] uppercase text-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </aside>

          <div className="col-span-12 md:col-span-9 order-1 md:order-2">
            <div className="bg-cream border border-rule rounded-md overflow-hidden">
              <div className="flex flex-wrap items-center gap-2 p-4 md:p-5 border-b border-rule bg-cream-soft">
                {(
                  [
                    { id: "video", label: "Record video" },
                    { id: "upload", label: "Upload a clip" },
                    { id: "type", label: "Type it instead" },
                  ] as { id: Mode; label: string }[]
                ).map((t) => {
                  const active = mode === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setMode(t.id)}
                      className={`inline-flex items-center h-9 px-4 rounded-full border text-[0.8125rem] transition-colors ${
                        active
                          ? "bg-ink text-cream border-ink"
                          : "border-rule text-ink hover:border-ink"
                      }`}
                    >
                      {t.label}
                    </button>
                  );
                })}
                <span className="ml-auto eyebrow">
                  {mode === "video"
                    ? "↳ Webcam mode"
                    : mode === "upload"
                      ? "↳ MP4 / MOV · up to 500MB"
                      : "↳ A short paragraph is fine"}
                </span>
              </div>

              {mode === "video" && (
                <div className="p-5 md:p-7">
                  <div className="relative aspect-[16/9] rounded-md overflow-hidden bg-ink">
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-[0.06]"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(0deg, #FFF6EB 0 1px, transparent 1px 4px)",
                      }}
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span
                        className={`inline-block w-2 h-2 rounded-full ${
                          recording ? "bg-orange animate-pulse" : "bg-cream/40"
                        }`}
                      />
                      <span className="font-mono text-[0.6875rem] tracking-[0.18em] uppercase text-cream/70">
                        {recording ? "REC · 00:23" : "Ready · 00:00"}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <span className="font-mono text-[0.6875rem] tracking-[0.18em] uppercase text-cream/55 px-2 py-1 rounded-full border border-cream/15">
                        Camera ✓
                      </span>
                      <span className="font-mono text-[0.6875rem] tracking-[0.18em] uppercase text-cream/55 px-2 py-1 rounded-full border border-cream/15">
                        Mic ✓
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div className="flex gap-0.5 items-end h-8">
                        {Array.from({ length: 28 }).map((_, i) => (
                          <span
                            key={i}
                            className="w-[3px] bg-cream/40 rounded-sm"
                            style={{
                              height: `${recording ? 18 + Math.abs(Math.sin(i * 0.6)) * 22 : 6 + (i % 3) * 2}px`,
                            }}
                          />
                        ))}
                      </div>
                      <span className="font-display italic text-cream/55 text-[0.9375rem]">
                        Press record when you're ready
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <button
                      onClick={() => setRecording(!recording)}
                      className={`inline-flex items-center justify-center gap-3 h-12 px-7 rounded-full font-medium transition-colors ${
                        recording
                          ? "bg-ink text-cream hover:bg-ink/85"
                          : "bg-orange text-cream hover:bg-orange-press"
                      }`}
                    >
                      <span
                        aria-hidden
                        className={`inline-block w-2.5 h-2.5 ${
                          recording ? "bg-cream rounded-sm" : "bg-cream rounded-full"
                        }`}
                      />
                      {recording ? "Stop recording" : "Start recording"}
                    </button>
                    <p className="eyebrow">
                      Recorded in your browser · 2 min cap · we never see it until you send
                    </p>
                  </div>
                </div>
              )}

              {mode === "upload" && (
                <div className="p-5 md:p-7">
                  <label className="block border-2 border-dashed border-rule rounded-md p-10 md:p-14 text-center hover:bg-cream-soft transition-colors cursor-pointer">
                    <input type="file" accept="video/*" className="sr-only" />
                    <div className="font-display text-[1.5rem] md:text-[1.875rem] leading-[1.05] tracking-[-0.025em]">
                      Drop a clip here.
                    </div>
                    <p className="mt-3 text-[0.9375rem] text-ink-muted">
                      Or click to pick one from your laptop or phone.
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 h-10 px-5 rounded-full bg-ink text-cream text-[0.8125rem] font-medium">
                      Choose file <span aria-hidden>↑</span>
                    </span>
                  </label>
                </div>
              )}

              {mode === "type" && (
                <div className="p-5 md:p-7">
                  <textarea
                    rows={8}
                    placeholder="A short paragraph. Two sentences is fine. Three is generous."
                    className="w-full bg-cream-soft border border-rule focus:border-ink focus:outline-none rounded-md px-4 py-3 text-[0.9375rem] placeholder:text-ink-muted leading-[1.6]"
                  />
                  <p className="mt-3 eyebrow">
                    ↳ We may lightly tidy the punctuation. We never change the meaning.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DetailsForm({
  consent,
  setConsent,
  mode,
}: {
  consent: boolean;
  setConsent: (v: boolean) => void;
  mode: Mode;
}) {
  const [sent, setSent] = useState(false);
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="col-span-12 md:col-span-4">
            <div className="eyebrow mb-3">§ Where to credit it</div>
            <h2 className="font-display leading-[0.98] tracking-[-0.025em] text-[2rem] md:text-[3rem] max-w-[14ch]">
              A few last
              <span className="display-italic text-orange"> details</span>.
            </h2>
            <p className="mt-5 text-[0.9375rem] text-ink-muted leading-[1.6] max-w-[36ch]">
              So we can credit you properly. We won't show anything publicly
              until you've signed off on the final cut.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="col-span-12 md:col-span-7 md:col-start-6 bg-cream-soft border border-rule rounded-md p-7 md:p-10"
          >
            <div className="grid grid-cols-12 gap-5">
              <Field label="Your name" name="name" placeholder="Mara Lin" col={6} />
              <Field
                label="Role / company"
                name="role"
                placeholder="Founder, Mara Lin Ceramics"
                col={6}
              />
              <Field
                label="Project we worked on"
                name="project"
                placeholder="Rebrand + website, 2025"
                col={12}
              />
              <SelectField
                label="Where you're happy to be credited"
                name="credit"
                col={12}
                options={[
                  "Website + case studies + LinkedIn",
                  "Website + case studies only",
                  "Case studies only (no homepage)",
                  "Anonymised (no name shown)",
                ]}
              />

              <div className="col-span-12">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 accent-orange shrink-0"
                  />
                  <span className="text-[0.9375rem] text-ink leading-[1.5]">
                    You can use this on whisk.digital, in case-study pages,
                    and across our social. I'll see the final cut before it
                    goes anywhere public.
                  </span>
                </label>
              </div>

              <div className="col-span-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                <p className="eyebrow">
                  {mode === "video"
                    ? "↳ Sends your recording + these details"
                    : mode === "upload"
                      ? "↳ Sends your uploaded clip + these details"
                      : "↳ Sends your written words + these details"}
                </p>
                <button
                  type="submit"
                  disabled={sent || !consent}
                  className="inline-flex items-center justify-center gap-3 h-12 px-6 rounded-full bg-orange text-cream font-medium hover:bg-orange-press disabled:opacity-40 disabled:hover:bg-orange transition-colors"
                >
                  {sent ? "Sent — thank you" : "Send it to Whisk"}
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

const colClass: Record<6 | 12, string> = {
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
        className="mt-2 w-full h-11 bg-cream border border-rule focus:border-ink focus:outline-none rounded-md px-4 text-[0.9375rem] placeholder:text-ink-muted"
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
        className="mt-2 w-full h-11 bg-cream border border-rule focus:border-ink focus:outline-none rounded-md px-4 text-[0.9375rem] appearance-none"
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
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
          <div className="col-span-12 md:col-span-2">
            <div className="eyebrow text-cream/55">↳ Thank you</div>
          </div>
          <p className="col-span-12 md:col-span-7 font-display italic text-cream leading-[1.2] tracking-[-0.015em] text-[1.25rem] md:text-[1.625rem] max-w-[36ch]">
            Honestly — this is the single most useful thing you can give us.
            <span className="text-orange"> Tea on us</span> next time you're in
            Hastings.
          </p>
          <div className="col-span-12 md:col-span-3 flex md:justify-end">
            <Link
              to="/"
              className="inline-flex items-center gap-3 h-12 px-6 rounded-full border border-cream/25 text-cream font-medium hover:bg-cream hover:text-ink transition-colors"
            >
              Back to whisk.digital
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
