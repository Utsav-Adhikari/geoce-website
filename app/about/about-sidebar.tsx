import Link from "next/link";

type AboutSidebarProps = {
  active: "about" | "values" | "organisation" | "policy" | "membership";
};

const links = [
  { key: "about", label: "About us", href: "/about" },
  { key: "values", label: "Our Values", href: "/about/our-values" },
  { key: "organisation", label: "Organisation Chart", href: "/about/organisation-chart" },
  { key: "policy", label: "Our Policy", href: "/about/our-policy" },
  { key: "membership", label: "Membership", href: "/about/membership" },
] as const;

export default function AboutSidebar({ active }: AboutSidebarProps) {
  return (
    <aside className="lg:sticky lg:top-28">
      <div className="rounded-[18px] border border-slate-200 bg-white p-4 shadow-[0_16px_36px_rgba(15,23,42,0.06)]">
        <p className="px-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#2d6ea6]">About GEOCE</p>
        <nav aria-label="About GEOCE" className="mt-3 grid gap-1">
          {links.map((link) => {
            const isActive = link.key === active;

            return (
              <Link
                key={link.key}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`group flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-[#0b2d4d] text-white shadow-[0_8px_18px_rgba(11,45,77,0.18)]"
                    : "text-slate-600 hover:bg-[#eef4f8] hover:text-[#0b2d4d]"
                }`}
              >
                <span>{link.label}</span>
                <span className={`text-base transition-transform group-hover:translate-x-1 ${isActive ? "text-[#9eddd0]" : "text-[#2d6ea6]"}`}>
                  →
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
