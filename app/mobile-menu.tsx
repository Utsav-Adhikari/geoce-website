"use client";

import Link from "next/link";
import { useState } from "react";

type MobileMenuItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export default function MobileMenu({ items }: { items: MobileMenuItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative xl:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d7d1c7] bg-white text-xl text-slate-700 shadow-sm transition duration-200 hover:bg-slate-50"
      >
        {isOpen ? "×" : "☰"}
      </button>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute right-0 top-[calc(100%+0.75rem)] z-50 max-h-[calc(100dvh-6rem)] w-[min(88vw,22rem)] overflow-y-auto border border-[#d7d1c7] bg-white p-3 shadow-[0_18px_44px_rgba(15,23,42,0.18)]"
        >
          {items.map((item) => item.children?.length ? (
            <details key={item.label} className="border-b border-[#e6e2da] last:border-b-0">
              <summary className="cursor-pointer px-3 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-800">
                {item.label}
              </summary>
              <div className="pb-2 pl-3">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold text-[#2d6ea6]"
                >
                  Overview
                </Link>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </details>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block border-b border-[#e6e2da] px-3 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-800 last:border-b-0"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}