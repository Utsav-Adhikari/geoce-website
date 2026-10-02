import Link from "next/link";
import { notFound } from "next/navigation";
import { newsArticles } from "../../news-data";

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = newsArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = newsArticles.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <main className="min-h-screen bg-[#f1efe9] py-8 text-[#1d2a2f] lg:py-12">
      <div className="mx-auto w-full max-w-[1400px] px-3 sm:px-4 lg:px-7">
        <article className="overflow-hidden border border-[#d2ccc3] bg-white">
          <div className="aspect-[2.1] max-h-[520px] min-h-[220px] overflow-hidden bg-[#d8d9d4]">
            <img src={article.image} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="px-5 py-7 sm:px-9 sm:py-10 lg:px-12">
            <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#52656b]">
              <span>{article.category}</span>
              <span aria-hidden="true" className="text-slate-400">/</span>
              <time dateTime={article.dateTime} className="text-slate-500">{article.date}</time>
            </div>
            <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              {article.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">{article.summary}</p>
            <div className="mt-8 max-w-3xl space-y-5 border-t border-[#d2ccc3] pt-7">
              {article.body.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-slate-700">{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2 border-t border-[#d2ccc3] pt-5">
              {article.tags.map((tag) => (
                <span key={tag} className="border border-[#d2ccc3] px-3 py-1.5 text-xs font-semibold text-slate-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        <section className="mt-10" aria-labelledby="related-news-title">
          <div className="mb-5 flex items-end justify-between gap-4 border-b border-[#d2ccc3] pb-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#52656b]">Keep exploring</p>
              <h2 id="related-news-title" className="mt-2 text-xl font-extrabold text-slate-900">More updates</h2>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {relatedArticles.map((related) => (
              <Link key={related.slug} href={`/news/${related.slug}`} className="border-t border-[#8d9997] py-4 transition hover:border-[#2d6ea6]">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#52656b]">{related.category} / {related.date}</p>
                <h3 className="mt-2 text-lg font-bold leading-6 text-slate-900">{related.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{related.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
