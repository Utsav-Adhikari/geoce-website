import Link from "next/link";
import { services, specialistServiceLines } from "../services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f1efe9] text-[#1d2a2f]">
      <div className="mx-auto w-full max-w-[1400px] px-3 py-10 sm:px-4 lg:px-7 lg:py-14">
        <header className="grid gap-8 border-b border-[#d2ccc3] pb-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2d6ea6]">Services / What we do</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
              Engineering support from first survey to final delivery.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700">
              Multidisciplinary expertise for infrastructure, communities, and the environments they depend on.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-px border border-[#c9c6bd] bg-[#c9c6bd] text-center">
            {[
              { number: "01", label: "Plan" },
              { number: "02", label: "Design" },
              { number: "03", label: "Deliver" },
            ].map((phase) => (
              <div key={phase.number} className="min-w-[78px] bg-[#f8f7f3] px-3 py-3 sm:min-w-[92px]">
                <span className="block text-[10px] font-bold tracking-[0.16em] text-[#2d6ea6]">{phase.number}</span>
                <span className="mt-1 block text-xs font-bold uppercase tracking-[0.12em] text-slate-800">{phase.label}</span>
              </div>
            ))}
          </div>
        </header>

        <section className="mt-9 grid gap-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-12">
          <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#52656b]">Explore by discipline</p>
            <h2 className="mt-2 text-xl font-extrabold text-slate-900">Specialist service lines</h2>
            <nav aria-label="Specialist service lines" className="mt-4 flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
              {specialistServiceLines.map((serviceLine, index) => (
                <Link
                  key={serviceLine.slug}
                  href={`/services/${serviceLine.slug}`}
                  className="group flex shrink-0 items-start gap-3 border border-[#d2ccc3] bg-white/60 px-3 py-3 transition hover:border-[#2d6ea6] hover:bg-white lg:border-x-0 lg:border-t-0 lg:bg-transparent lg:px-2"
                >
                  <span className="pt-0.5 text-[10px] font-bold tracking-[0.12em] text-[#2d6ea6]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="max-w-[230px] text-xs font-semibold leading-5 text-slate-700 transition group-hover:text-[#173f4a] lg:text-sm">
                    {serviceLine.title}
                  </span>
                  <span aria-hidden="true" className="ml-auto text-xs text-[#2d6ea6]">↗</span>
                </Link>
              ))}
            </nav>
          </aside>

          <div className="min-w-0 space-y-4">
            {specialistServiceLines.map((serviceLine, index) => {
              const capabilities = serviceLine.body.flatMap((section) => section.items).slice(0, 3);

              return (
                <article
                  key={serviceLine.slug}
                  id={serviceLine.slug}
                  className="scroll-mt-28 grid overflow-hidden border border-[#d2ccc3] bg-[#f8f7f3] md:grid-cols-[minmax(0,0.9fr)_1.1fr]"
                >
                  <Link href={`/services/${serviceLine.slug}`} className="group block min-h-[220px] overflow-hidden bg-[#d8d9d4] md:min-h-[280px]">
                    <img
                      src={serviceLine.image}
                      alt={serviceLine.title}
                      className="h-full min-h-[220px] w-full object-cover transition duration-500 group-hover:scale-[1.03] md:min-h-[280px]"
                    />
                  </Link>
                  <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#2d6ea6]">
                      Service line / {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-3 text-2xl font-black leading-tight text-slate-900 sm:text-3xl">
                      {serviceLine.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-700">{serviceLine.summary}</p>
                    <ul className="mt-4 grid gap-x-4 gap-y-2 sm:grid-cols-2">
                      {capabilities.map((capability) => (
                        <li key={capability} className="flex items-start gap-2 text-xs leading-5 text-slate-700">
                          <span aria-hidden="true" className="mt-1 text-[#2d6ea6]">+</span>
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${serviceLine.slug}`}
                      className="mt-5 inline-flex w-fit items-center border-b border-[#2d6ea6] pb-1 text-sm font-bold text-[#2d6ea6] transition hover:text-[#173f4a]"
                    >
                      Explore service <span aria-hidden="true" className="ml-3">→</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-14 bg-[#173f4a] px-5 py-7 text-white sm:px-8 sm:py-9 lg:px-10" aria-labelledby="delivery-capabilities-title">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/20 pb-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#a9c9c2]">Across every project phase</p>
              <h2 id="delivery-capabilities-title" className="mt-2 text-2xl font-black">Services at every stage</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/75">A joined-up team for moving complex projects from evidence to implementation.</p>
          </div>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <section key={service.title} className="border-l border-white/30 pl-4">
                <p className="text-[10px] font-bold tracking-[0.16em] text-[#a9c9c2]">0{index + 1}</p>
                <h3 className="mt-2 text-base font-bold leading-5">{service.title}</h3>
                <ul className="mt-3 space-y-2">
                  {service.items.slice(0, 4).map((item) => (
                    <li key={item} className="text-xs leading-5 text-white/75">{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
