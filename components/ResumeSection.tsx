const roles = [
  {
    title: "Immunefi",
    role: "Community Manager",
    bullets: [
      "Managed and supported a 10,000+ security researcher community.",
      "Helped coordinate large-scale community programs including Immunefi Island and All Stars.",
      "Worked across community, communications, support, and internal teams to improve contributor experience.",
      "Supported workflow improvements and automation to reduce low-quality or invalid activity.",
    ],
  },
  {
    title: "AthenaDAO / AthenaBIO",
    role: "Community & Partnerships",
    bullets: [
      "Supported community, partnerships, marketing, and cross-functional coordination.",
      "Helped communicate women’s health and DeSci topics in an accessible way.",
      "Grew AthenaBIO’s LinkedIn presence through timely, educational content.",
    ],
  },
  {
    title: "Code4rena",
    role: "Community Relations Coordinator",
    bullets: [
      "Supported contributor onboarding, documentation, communication, and researcher engagement.",
      "Helped maintain smoother coordination between contributors and internal teams.",
    ],
  },
  {
    title: "Curiosidad Cuántica",
    role: "Co-Founder / Co-Host",
    bullets: [
      "Co-created a Spanish-language podcast that makes quantum computing more accessible to curious beginners.",
      "Produces episode guides, guest research, social clips, recaps, and educational content.",
      "Bridges technical topics with clear storytelling for Spanish-speaking audiences.",
    ],
  },
] as const;

const highlights = [
  { stat: "10,000+", text: "security researchers supported" },
  { stat: "$1M+", text: "community program earnings supported through Immunefi Island" },
  { stat: "Spanish-language", text: "quantum computing education" },
  { stat: "Community + Ops + Content", text: "as the core positioning" },
] as const;

export function ResumeSection() {
  return (
    <section
      id="resume"
      className="bg-soft-bone text-charcoal-cocoa"
      aria-labelledby="resume-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-charcoal-cocoa/45">
          Resume
        </p>
        <h2
          id="resume-heading"
          className="mb-14 max-w-xl text-2xl font-bold leading-snug tracking-tight sm:mb-16 sm:text-3xl"
        >
          Community operations for technical ecosystems.
        </h2>

        <div className="grid gap-12 lg:grid-cols-[1fr_minmax(0,340px)] lg:gap-16 lg:items-start">
          <div id="work" className="space-y-8">
            {roles.map((job) => (
              <article
                key={job.title}
                className="border border-charcoal-cocoa/12 bg-soft-bone px-6 py-7 transition-shadow hover:shadow-[0_1px_0_0_rgba(42,36,32,0.06)] sm:px-8 sm:py-8"
              >
                <h3 className="mb-4 text-lg font-bold leading-snug">
                  {job.title}{" "}
                  <span className="font-semibold text-charcoal-cocoa/70">
                    — {job.role}
                  </span>
                </h3>
                <ul className="list-none space-y-3 text-[15px] leading-relaxed text-charcoal-cocoa/78">
                  {job.bullets.map((item) => (
                    <li key={item} className="relative pl-4 before:absolute before:left-0 before:top-[0.65em] before:h-px before:w-2 before:bg-electric-persimmon/85">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <aside
            className="border border-charcoal-cocoa/12 bg-charcoal-cocoa/[0.03] px-6 py-8 sm:px-8 sm:py-10 lg:sticky lg:top-28"
            aria-label="Highlights"
          >
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.22em] text-charcoal-cocoa/45">
              Highlights
            </p>
            <ul className="space-y-8">
              {highlights.map((h) => (
                <li key={h.stat}>
                  <p className="text-xl font-black tracking-tight text-charcoal-cocoa">
                    {h.stat}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal-cocoa/65">
                    {h.text}
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
