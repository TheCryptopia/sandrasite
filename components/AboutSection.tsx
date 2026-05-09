import { SiteNav } from "@/components/SiteNav";

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-charcoal-cocoa text-soft-bone"
      aria-labelledby="about-heading"
    >
      <SiteNav />
      <div className="mx-auto flex max-w-2xl flex-col items-center px-5 pb-24 pt-10 text-center sm:px-8 sm:pb-28 sm:pt-14">
        <div
          className="mb-10 h-40 w-40 shrink-0 rounded-full border border-soft-bone/20 bg-soft-bone/5 sm:h-44 sm:w-44"
          aria-hidden
        >
          <div className="flex h-full w-full items-center justify-center font-bold text-2xl tracking-tight text-soft-bone/40 sm:text-3xl">
            SA
          </div>
        </div>
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-soft-bone/55">
          About
        </p>
        <h1
          id="about-heading"
          className="mb-4 text-3xl font-normal leading-tight tracking-tight sm:text-4xl"
        >
          Sandra Almanza
        </h1>
        <p className="mb-10 text-[13px] tracking-wide text-soft-bone/70">
          <a
            href="mailto:your-email@example.com"
            className="transition-colors hover:text-electric-persimmon"
          >
            your-email@example.com
          </a>
        </p>
        <p className="mb-6 max-w-xl text-base leading-relaxed text-soft-bone/90 sm:text-[17px]">
          I work at the intersection of community, operations, and emerging
          tech, helping technical ecosystems feel{" "}
          <span className="font-semibold text-electric-persimmon">
            clearer, more human, and easier to participate in
          </span>
          .
        </p>
        <p className="mb-10 max-w-xl text-base leading-relaxed text-soft-bone/80 sm:text-[17px]">
          My work sits in the in-between spaces: onboarding that actually
          sticks, documentation real users finish reading, communities that do
          not go quiet three months in, and content that helps people
          understand why a technology matters.
        </p>
        <p className="text-sm italic leading-relaxed text-soft-bone/75">
          <a
            href="#contact"
            className="border-b border-soft-bone/25 transition-colors hover:border-electric-persimmon hover:text-soft-bone"
          >
            Sometimes I take on community, content, and ops projects →
          </a>
        </p>
      </div>
    </section>
  );
}
