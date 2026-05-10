import { SiteNav } from "@/components/SiteNav";

function HeroWord({ children }: { children: React.ReactNode }) {
  return <span className="hero-highlight-word">{children}</span>;
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#290F0D] text-[#F6F1E8]"
      aria-labelledby="about-heading"
    >
      <SiteNav heroTheme />
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-14 sm:px-10 md:max-w-[52rem] md:pb-32 md:pt-20 lg:pt-24">
        <div className="md:pl-2 lg:pl-4">
          <h1
            id="about-heading"
            className="max-w-xl text-3xl font-bold leading-[1.15] tracking-tight text-[#F6F1E8] sm:text-4xl md:text-[2.75rem]"
          >
            Sandra Almanza
          </h1>

          <p className="mt-10 max-w-2xl text-lg font-bold leading-snug text-[#F6F1E8] sm:text-xl md:text-2xl md:leading-snug">
            Bringing <HeroWord>trust</HeroWord>, <HeroWord>connection</HeroWord>
            , and <HeroWord>belonging</HeroWord> to technical communities
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#F6F1E8]/92 sm:text-[17px]">
            Making emerging tech{" "}
            <HeroWord>easier to enter</HeroWord>,{" "}
            <HeroWord>easier to trust</HeroWord>, and{" "}
            <HeroWord>harder to leave</HeroWord>.
          </p>

          <div className="mt-12 max-w-2xl space-y-6 text-base leading-[1.75] text-[#F6F1E8]/88 sm:text-[17px]">
            <p>
              3+ years in tech building community, content, and ops systems
              that help people feel{" "}
              <HeroWord>connected and supported</HeroWord>. I care about each
              touchpoint, from onboarding to making spaces feel{" "}
              <HeroWord>human-first</HeroWord>.
            </p>

            <div className="hero-question-block" role="note" aria-label="Guiding questions">
              <p className="hero-question-line">
                What value can people take away from their experience?
              </p>
              <p className="hero-question-line">
                What do they feel comfortable sharing?
              </p>
              <p className="hero-question-line">
                What makes them keep coming back?
              </p>
            </div>

            <p>
              I help answer these questions and set up the systems that make
              them run smoothly.
            </p>
          </div>

          <p className="mt-2">
            <a
              href="mailto:alcu20ilac@gmail.com"
              className="hero-cta-link"
            >
              For community, ops, and content projects in emerging tech →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
