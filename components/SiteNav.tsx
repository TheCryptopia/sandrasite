const links = [
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-soft-bone/10 bg-charcoal-cocoa/95 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8"
        aria-label="Primary"
      >
        <a
          href="#about"
          className="text-sm font-bold tracking-[0.12em] text-soft-bone transition-colors hover:text-electric-persimmon"
        >
          Sandra Almanza
        </a>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-bold uppercase tracking-[0.18em] text-soft-bone/85">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="border-b border-transparent pb-0.5 transition-colors hover:border-electric-persimmon hover:text-soft-bone"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
