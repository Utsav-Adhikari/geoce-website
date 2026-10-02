import Link from "next/link";
import { projects } from "../project-data";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f1efe9] py-12 text-[#1d2a2f] lg:py-16">
      <div className="mx-auto w-full max-w-[1400px] px-3 sm:px-4 lg:px-7">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-[#d2ccc3] pb-5">
          <div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#52656b]">Construction &amp; Design</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">Projects</h1>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600">
            Explore selected GEOCE assignments across resilient transport, flood management, and irrigation.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group overflow-hidden rounded-[14px] border border-[#d2ccc3] bg-white shadow-[0_6px_18px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(15,23,42,0.12)]"
            >
              <div className="aspect-[1.55] overflow-hidden bg-[#e4e3df]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-4 sm:p-5">
                <p className="text-[10px] font-bold uppercase leading-5 tracking-[0.14em] text-[#52656b]">
                  {project.category}
                </p>
                <h2 className="mt-2 text-base font-bold leading-6 text-slate-900 sm:text-[17px]">
                  {project.title}
                </h2>
                <span className="mt-4 inline-flex text-sm font-semibold text-[#2d6ea6]">
                  Project details <span aria-hidden="true" className="ml-2">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
