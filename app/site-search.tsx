"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function SiteSearch() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    inputRef.current?.focus();
    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  const closeSearch = () => {
    setIsOpen(false);
  };

  const updateQuery = (value: string) => {
    setQuery(value);
    if (value.trim()) {
      router.replace(`/search?q=${encodeURIComponent(value)}`, { scroll: false });
    } else if (window.location.pathname === "/search") {
      router.replace("/", { scroll: false });
    }
  };

  return (
    <div ref={containerRef} className="relative z-50">
      <button
        type="button"
        aria-label="Search this site"
        aria-expanded={isOpen}
        onClick={() => {
          if (isOpen) {
            closeSearch();
          } else {
            setQuery(new URLSearchParams(window.location.search).get("q") ?? "");
            setIsOpen(true);
          }
        }}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d7d1c7] bg-white text-xl text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-slate-50"
      >
        ⌕
      </button>

      {isOpen && (
        <div
          className="absolute right-0 top-1/2 z-50 w-[min(85vw,420px)] -translate-y-1/2"
          onKeyDown={(event) => {
            if (event.key === "Escape") closeSearch();
          }}
        >
          <label className="flex h-11 items-center gap-3 rounded-full border border-[#d7d1c7] bg-white px-4 shadow-[0_8px_24px_rgba(15,23,42,0.16)]">
            <span aria-hidden="true" className="text-lg text-[#2d6ea6]">⌕</span>
            <span className="sr-only">Search services, projects, domains, news, and About pages</span>
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(event) => updateQuery(event.target.value)}
              placeholder="Search this site..."
              className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-500"
            />
            <button
              type="button"
              aria-label="Close search"
              onClick={closeSearch}
              className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            >
              ×
            </button>
          </label>
        </div>
      )}
    </div>
  );
}
