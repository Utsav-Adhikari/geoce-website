import Link from "next/link";
import { notFound } from "next/navigation";
import { specialistServiceLines } from "../../services";

export function generateStaticParams() {
  return specialistServiceLines.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = specialistServiceLines.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f3f6fb] py-10 text-slate-900">
      <div className="mx-auto w-full max-w-[1400px] px-3 sm:px-4 lg:px-7">
        <div className="grid gap-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:items-start lg:gap-10">
          <aside className="min-w-0 lg:sticky lg:top-28">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
              Specialist Service Lines
            </p>
            <nav
              aria-label="Specialist Service Lines"
              className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0"
            >
              {specialistServiceLines.map((serviceLine, index) => {
                const isActive = serviceLine.slug === slug;

                return (
                  <Link
                    key={serviceLine.slug}
                    href={`/services/${serviceLine.slug}`}
                    aria-current={isActive ? "page" : undefined}
                    className={`group flex shrink-0 items-start gap-3 border px-3 py-3 transition lg:border-x-0 lg:border-t-0 lg:px-2 ${
                      isActive
                        ? "border-[#2d6ea6] bg-[#edf5ff] text-[#1d3557] lg:border-[#d7d1c7]"
                        : "border-transparent text-slate-600 hover:border-[#d7d1c7] hover:bg-white/70 hover:text-[#1d3557]"
                    }`}
                  >
                    <span className="pt-0.5 text-[10px] font-bold tracking-[0.12em] text-[#2d6ea6]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="max-w-[230px] text-xs font-semibold leading-5 sm:text-sm">
                      {serviceLine.title}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </aside>

          <article className="min-w-0 overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
            <div className="relative h-[240px] sm:h-[300px] lg:h-[360px]">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-slate-900/10" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-200">
                  Services
                </p>
                <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {service.title}
                </h1>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <p className="max-w-4xl text-lg leading-8 text-slate-700">{service.summary}</p>

              <div className="mt-10 space-y-8">
                {service.body.map((section) => (
                  <section key={section.heading}>
                    <h2 className="border-b border-slate-200 pb-3 text-xl font-black text-slate-900 sm:text-2xl">
                      {section.heading}
                    </h2>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-700"
                        >
                          <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>

              {service.note ? (
                <div className="mt-10 rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-base leading-8 text-slate-700">{service.note}</p>
                </div>
              ) : null}
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
