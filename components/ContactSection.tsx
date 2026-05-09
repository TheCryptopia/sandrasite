const actions: {
  label: string;
  href: string;
  external?: boolean;
}[] = [
  { label: "Email me", href: "mailto:your-email@example.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/", external: true },
  { label: "Book time", href: "https://cal.com/", external: true },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-0 bg-electric-persimmon text-charcoal-cocoa"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-charcoal-cocoa/70">
          Contact
        </p>
        <h2
          id="contact-heading"
          className="mb-8 max-w-4xl text-2xl font-black uppercase leading-[1.15] tracking-tight sm:mb-10 sm:text-4xl md:text-5xl"
        >
          Building something in emerging tech and care about how people
          actually experience it?
        </h2>
        <p className="mb-14 max-w-2xl text-base leading-relaxed text-charcoal-cocoa/88 sm:mb-16 sm:text-[17px]">
          I’m most useful in the in-between spaces: onboarding that actually
          sticks, documentation real users finish reading, communities that do
          not go quiet three months in, and content that helps technical ideas
          reach the people they are meant for.
        </p>
        <ul className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-x-12 sm:gap-y-6">
          {actions.map(({ label, href, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group inline-flex items-center text-sm font-bold uppercase tracking-[0.2em] text-charcoal-cocoa transition-opacity hover:opacity-80"
              >
                <span className="border-b-2 border-charcoal-cocoa pb-0.5 transition-colors group-hover:border-charcoal-cocoa/60">
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
