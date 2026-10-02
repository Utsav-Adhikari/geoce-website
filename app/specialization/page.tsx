import Link from "next/link";
import { specializationTopics } from "../specializations";

export default function SpecializationPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <div className="mx-auto w-full max-w-[1400px] px-3 py-12 sm:px-4 lg:px-7">
        <div className="mb-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2d6ea6]">
              Areas of Specialisation
            </p>
            <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Multidisciplinary expertise built for resilient development
            </h1>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {specializationTopics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/specialization/${topic.slug}`}
              className="group rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:border-[#2d6ea6] hover:shadow-[0_28px_55px_rgba(45,110,166,0.12)]"
            >
              <div className="mb-4 inline-flex rounded-full bg-[#e8f0f9] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2d6ea6]">
                Specialization
              </div>
              <h2 className="text-2xl font-black text-slate-900">{topic.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{topic.brief}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1d3557] transition group-hover:gap-3">
                Learn more
                <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
