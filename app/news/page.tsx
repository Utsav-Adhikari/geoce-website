"use client";

import Link from "next/link";
import { useState } from "react";
import { newsArticles, newsCategories } from "../news-data";

export default function NewsPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(newsCategories[0]);

  const searchTerm = query.trim().toLowerCase();
  const visibleArticles = newsArticles.filter((article) => {
    const matchesCategory = activeCategory === newsCategories[0] || article.category === activeCategory;
    const matchesSearch = `${article.title} ${article.summary} ${article.category} ${article.tags.join(" ")}`
      .toLowerCase()
      .includes(searchTerm);

    return matchesCategory && matchesSearch;
  });
  const leadArticle = visibleArticles[0];
  const remainingArticles = visibleArticles.slice(1);

  return (
    <main className="min-h-screen bg-[#f1efe9] py-12 text-[#1d2a2f] lg:py-16">
      <div className="mx-auto w-full max-w-[1400px] px-3 sm:px-4 lg:px-7">
        <header className="grid gap-6 border-b border-[#d2ccc3] pb-8 md:grid-cols-[1fr_0.7fr] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2d6ea6]">GEOCE / Newsroom</p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">News &amp; Insights</h1>
          </div>
          <p className="max-w-lg text-base leading-7 text-slate-700">
            Project milestones and field updates from GEOCE’s work in resilient infrastructure, water, and development.
          </p>
        </header>

        <section aria-label="Search and filter news" className="border-b border-[#d2ccc3] py-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <label className="flex min-h-11 w-full max-w-md items-center gap-3 border-b border-[#8d9997] px-1 text-slate-600 focus-within:border-[#2d6ea6]">
              <span aria-hidden="true" className="text-lg">⌕</span>
              <span className="sr-only">Search news</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search updates, topics, or clients"
                className="min-w-0 flex-1 bg-transparent py-2 text-sm text-slate-900 outline-none placeholder:text-slate-500"
              />
            </label>
            <div className="flex gap-2 overflow-x-auto pb-1" aria-label="Filter by category">
              {newsCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={`shrink-0 border px-3 py-2 text-xs font-semibold transition ${
                    activeCategory === category
                      ? "border-[#173f4a] bg-[#173f4a] text-white"
                      : "border-[#c9c6bd] bg-transparent text-slate-700 hover:border-[#173f4a] hover:text-[#173f4a]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-600" aria-live="polite">
            {visibleArticles.length} {visibleArticles.length === 1 ? "update" : "updates"}
          </p>
        </section>

        {leadArticle ? (
          <section className="border-b border-[#d2ccc3] py-8 lg:py-10" aria-labelledby="lead-story-title">
            <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#52656b]">
              <span className="h-px w-8 bg-[#2d6ea6]" />
              <span>In focus</span>
              <span className="text-slate-400">/</span>
              <span>{leadArticle.category}</span>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10">
              <Link href={`/news/${leadArticle.slug}`} className="group block overflow-hidden bg-[#d8d9d4]">
                <div className="aspect-[1.6] overflow-hidden">
                  <img
                    src={leadArticle.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </Link>
              <article>
                <time dateTime={leadArticle.dateTime} className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {leadArticle.date}
                </time>
                <h2 id="lead-story-title" className="mt-3 text-2xl font-black leading-tight text-slate-900 sm:text-3xl">
                  <Link href={`/news/${leadArticle.slug}`} className="transition hover:text-[#2d6ea6]">
                    {leadArticle.title}
                  </Link>
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-700">{leadArticle.summary}</p>
                <Link
                  href={`/news/${leadArticle.slug}`}
                  className="mt-6 inline-flex items-center border-b border-[#2d6ea6] pb-1 text-sm font-bold text-[#2d6ea6] transition hover:text-[#173f4a]"
                >
                  Read update <span aria-hidden="true" className="ml-3">→</span>
                </Link>
              </article>
            </div>
          </section>
        ) : (
          <div className="border-b border-[#d2ccc3] py-12 text-center">
            <h2 className="text-xl font-bold text-slate-900">No updates match that search.</h2>
            <p className="mt-2 text-sm text-slate-600">Try another keyword or choose a different topic.</p>
            <button
              type="button"
              onClick={() => { setQuery(""); setActiveCategory(newsCategories[0]); }}
              className="mt-4 border border-[#173f4a] px-4 py-2 text-sm font-semibold text-[#173f4a] transition hover:bg-[#173f4a] hover:text-white"
            >
              Clear filters
            </button>
          </div>
        )}

        {remainingArticles.length > 0 && (
          <section className="py-8 lg:py-10" aria-labelledby="more-updates-title">
            <div className="mb-5 flex items-end justify-between gap-4 border-b border-[#d2ccc3] pb-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#52656b]">From the archive</p>
                <h2 id="more-updates-title" className="mt-2 text-xl font-extrabold text-slate-900">More updates</h2>
              </div>
              <span className="text-xs font-semibold text-slate-500">{remainingArticles.length} stories</span>
            </div>
            <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {remainingArticles.map((article) => (
                <article key={article.slug} className="group min-w-0">
                  <Link href={`/news/${article.slug}`} className="block overflow-hidden bg-[#d8d9d4]">
                    <div className="aspect-[1.6] overflow-hidden">
                      <img
                        src={article.image}
                        alt=""
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </Link>
                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#52656b]">
                    <span>{article.category}</span>
                    <span aria-hidden="true" className="text-slate-400">/</span>
                    <time dateTime={article.dateTime} className="text-slate-500">{article.date}</time>
                  </div>
                  <h3 className="mt-2 text-lg font-bold leading-6 text-slate-900">
                    <Link href={`/news/${article.slug}`} className="transition hover:text-[#2d6ea6]">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{article.summary}</p>
                  <Link href={`/news/${article.slug}`} className="mt-3 inline-flex text-sm font-semibold text-[#2d6ea6]">
                    Read update <span aria-hidden="true" className="ml-2">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
