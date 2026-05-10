const links = [
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
] as const;

type SiteNavProps = {
  /** Espresso + oxide styling for the first hero block only */
  heroTheme?: boolean;
};

export function SiteNav({ heroTheme = false }: SiteNavProps) {
  const headerClass = heroTheme
    ? "sticky top-0 z-50 border-b border-[#F6F1E8]/12 bg-[#290F0D]/92 backdrop-blur-md"
    : "sticky top-0 z-50 border-b border-soft-bone/10 bg-charcoal-cocoa/95 backdrop-blur-sm";

  const linkBase =
    "border-b border-transparent pb-0.5 text-[11px] font-bold uppercase tracking-[0.18em]";

  const linkClass = heroTheme
    ? `${linkBase} hero-nav-link text-[#F6F1E8]/88 hover:border-[#5A9BA6]`
    : `${linkBase} text-soft-bone/85 transition-colors hover:border-electric-persimmon hover:text-soft-bone`;

  return (
    <header className={headerClass}>
      <nav
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8"
        aria-label="Primary"
      >
        <a
          href="#about"
          className={
            heroTheme
              ? "hero-signature text-[#F6F1E8] transition-colors hover:text-[#5A9BA6]"
              : "text-sm font-bold tracking-[0.12em] text-soft-bone transition-colors hover:text-electric-persimmon"
          }
        >
          {heroTheme ? "Sandra" : "Sandra Almanza"}
        </a>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={linkClass}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
