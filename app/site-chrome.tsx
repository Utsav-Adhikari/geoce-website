import Link from "next/link";
import MobileMenu from "./mobile-menu";
import SiteSearch from "./site-search";
import { specialistServiceLines } from "./services";
import { specializationTopics } from "./specializations";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT US",
    href: "/about",
    children: [
      { label: "Our Organisation", href: "/about/organisation-chart" },
      { label: "Our Values", href: "/about/our-values" },
      { label: "Our Policy", href: "/about/our-policy" },
      { label: "Membership", href: "/about/membership" },
    ],
  },
  {
    label: "DOMAINS",
    href: "/specialization",
    children: specializationTopics.map((topic) => ({
      label: topic.title,
      href: `/specialization/${topic.slug}`,
    })),
  },
  {
    label: "SERVICES",
    href: "/services",
    children: specialistServiceLines.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
    })),
  },
  { label: "PROJECTS", href: "/projects" },
  { label: "NEWS", href: "/news" },
  { label: "CONTACT", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d7d1c7] bg-white shadow-[0_4px_20px_rgba(41,52,63,0.06)]">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-2 px-3 py-3 sm:gap-4 sm:px-4 sm:py-4 lg:px-7">
        <Link href="/" className="flex shrink-0 items-center" aria-label="GEOCE home">
          <img
            src="https://next.geoceconsultants.com/geoce-logo-2022.png"
            alt="GEOCE Consultants"
            className="h-[44px] w-auto object-contain drop-shadow-[0_4px_10px_rgba(17,24,39,0.08)] sm:h-[58px] lg:h-[76px]"
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-700 xl:flex">
          {navItems.map((item) => {
            const children = item.children ?? [];
            const hasChildren = children.length > 0;

            return (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="relative inline-flex items-center gap-2 transition duration-200 hover:text-[#0b2d4d] after:absolute after:-bottom-2 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#0b2d4d] after:transition-all after:duration-200 group-hover:after:w-full"
                >
                  <span>{item.label}</span>
                  {hasChildren && <span className="text-[10px]">▾</span>}
                </Link>

                {hasChildren && (
                  <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-[300px] -translate-x-1/2 rounded-[18px] border border-[#d7d1c7] bg-white p-3 opacity-0 shadow-[0_20px_40px_rgba(15,23,42,0.12)] transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="grid gap-2">
                      {children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="rounded-lg px-3 py-2 text-[10px] font-medium uppercase tracking-[0.14em] text-slate-700 transition duration-200 hover:bg-[#f4f7fb] hover:text-[#0b2d4d]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <SiteSearch />
          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[#1d4667] bg-[#0b2d4d]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-4 px-6 py-6 text-white sm:px-10 sm:flex-row sm:justify-center lg:justify-end lg:px-12">
        <div className="flex flex-col items-center gap-3 text-center text-sm text-slate-200 sm:flex-row sm:gap-4 sm:text-left">
          <a
            href="https://www.linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/5 text-lg transition hover:bg-white/10"
            aria-label="LinkedIn"
          >
            in
          </a>
          <span className="text-sm text-slate-200">© 2026 GEOCE Consultants (P.) Ltd. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
