import { notFound } from "next/navigation";
import { projects } from "../../project-data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const details = [
    { label: "Period", value: project.period },
    { label: "Value", value: project.value },
    { label: "Client", value: project.client },
    { label: "Funding", value: project.funding },
    { label: "Association", value: project.association },
    { label: "Staff input", value: project.staffInput },
  ];

  return (
    <main className="min-h-screen bg-[#f1efe9] py-8 text-[#1d2a2f] lg:py-12">
      <div className="mx-auto w-full max-w-[1400px] px-3 sm:px-4 lg:px-7">
        <article className="overflow-hidden rounded-[16px] border border-[#d2ccc3] bg-white shadow-[0_12px_36px_rgba(15,23,42,0.08)]">
          <div className="relative aspect-[2.2] min-h-[240px] max-h-[520px] bg-[#e4e3df]">
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101d22]/85 via-[#101d22]/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/80">{project.category}</p>
              <h1 className="mt-3 max-w-4xl text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
                {project.title}
              </h1>
            </div>
          </div>

          <div className="p-5 sm:p-8 lg:p-10">
            <section aria-label="Project facts" className="grid gap-px overflow-hidden rounded-lg border border-[#d2ccc3] bg-[#d2ccc3] sm:grid-cols-2 lg:grid-cols-3">
              {details.map((detail) => (
                <div key={detail.label} className="min-w-0 bg-[#f7f5f2] p-4 sm:p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#52656b]">{detail.label}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">{detail.value}</p>
                </div>
              ))}
            </section>

            <section className="mt-9">
              <h2 className="border-b border-[#d2ccc3] pb-3 text-lg font-extrabold uppercase tracking-[0.1em] text-slate-900">
                Salient Details
              </h2>
              <div className="mt-5 max-w-4xl space-y-4">
                {project.overview.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-slate-700">{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="mt-9">
              <h2 className="border-b border-[#d2ccc3] pb-3 text-lg font-extrabold uppercase tracking-[0.1em] text-slate-900">
                Scope and Outcomes
              </h2>
              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="border-l-2 border-[#2d6ea6] bg-[#f7f5f2] px-4 py-3 text-sm leading-7 text-slate-700">
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
