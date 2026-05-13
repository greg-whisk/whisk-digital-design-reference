import { Link, NavLink } from "react-router";

const links = [
  { to: "/work", label: "Work" },
  { to: "/method", label: "Method" },
  { to: "/studio", label: "Studio" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-cream/85 backdrop-blur-md border-b border-rule/60">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-[1.375rem] tracking-tight">
          <span className="inline-block w-2 h-2 rounded-full bg-orange" />
          <span>Whisk</span>
          <span className="text-ink-muted">/ Digital</span>
        </Link>
        <nav className="hidden md:flex items-center gap-9 text-[0.875rem]">
          {links.map((l) =>
            l.to.startsWith("/#") ? (
              <a key={l.to} href={l.to} className="hover:text-orange transition-colors">
                {l.label}
              </a>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `hover:text-orange transition-colors ${isActive ? "text-orange" : ""}`
                }
              >
                {l.label}
              </NavLink>
            )
          )}
        </nav>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-ink text-cream text-[0.8125rem] font-medium hover:bg-orange transition-colors"
        >
          Start a project
          <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}
