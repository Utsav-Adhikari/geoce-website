import Link from "next/link";
import { searchSite } from "../search-data";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const { q } = await searchParams;
  const query = typeof q === "string" ? q.trim() : "";
  const results = searchSite(query);

  return (
    <main className="min-h-screen bg-[#f1efe9] py-12 text-[#1d2a2f] lg:py-16">
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <header className="border-b border-[#d2ccc3] pb-7">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2d6ea6]">GEOCE / Site Search</p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">Search Results</h1>
          {query && (
            <p className="mt-3 text-sm text-slate-600">
              {results.length} {results.length === 1 ? "result" : "results"} for <span className="font-semibold text-slate-900">“{query}”</span>
            </p>
          )}
        </header>

        {query ? (
          results.length > 0 ? (
            <section aria-label="Search results" className="divide-y divide-[#d2ccc3]">
              {results.map((result) => (
                <article key={`${result.section}-${result.href}`} className="py-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#2d6ea6]">{result.section}</p>
                  <h2 className="mt-1 text-lg font-bold text-slate-900">
                    <Link href={result.href} className="transition hover:text-[#2d6ea6]">
                      {result.title}
                    </Link>
                  </h2>
                  <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">{result.description}</p>
                </article>
              ))}
            </section>
          ) : (
            <div className="py-12">
              <h2 className="text-lg font-bold text-slate-900">No matches found</h2>
              <p className="mt-2 text-sm text-slate-600">Try another keyword, service, project, or client name.</p>
            </div>
          )
        ) : (
          <p className="py-12 text-sm text-slate-600">Enter a keyword in the search field to find services, projects, domains, news, and About pages.</p>
        )}
      </div>
    </main>
  );
}