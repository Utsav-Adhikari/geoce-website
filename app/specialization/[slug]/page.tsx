import Link from "next/link";
import { notFound } from "next/navigation";
import { specializationTopics } from "../../specializations";

function DomainSidebar({ currentSlug }: { currentSlug: string }) {
  return (
    <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Explore domains</p>
      <nav
        aria-label="Domain topics"
        className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0"
      >
        {specializationTopics.map((item, index) => {
          const isActive = item.slug === currentSlug;

          return (
            <Link
              key={item.slug}
              href={`/specialization/${item.slug}`}
              aria-current={isActive ? "page" : undefined}
              className={`flex shrink-0 items-start gap-3 border px-3 py-3 text-[11px] font-semibold uppercase leading-5 tracking-[0.12em] transition lg:border-x-0 lg:border-t-0 lg:px-2 ${
                isActive
                  ? "border-[#2d6ea6] bg-[#e8f0f9] text-[#1d3557] lg:border-[#d7d1c7]"
                  : "border-transparent text-slate-600 hover:border-[#d7d1c7] hover:bg-white/70 hover:text-[#1d3557]"
              }`}
            >
              <span className="shrink-0 pt-0.5 text-[10px] font-bold text-[#2d6ea6]">{String(index + 1).padStart(2, "0")}</span>
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export function generateStaticParams() {
  return specializationTopics.map((topic) => ({ slug: topic.slug }));
}

export default async function SpecializationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = specializationTopics.find((item) => item.slug === slug);

  if (!topic) {
    notFound();
  }

  const isArchitecture = topic.slug === "architecture";
  const isEnvironment = topic.slug === "environment-climate-change";
  const isEngineering = topic.slug === "engineering";
  const isAgriculture = topic.slug === "agriculture-rural-development";
  const isInstitutional = topic.slug === "institutional-development";
  const isNaturalResource = topic.slug === "natural-resource-management";

  if (isArchitecture || isEnvironment || isEngineering || isAgriculture || isInstitutional || isNaturalResource) {
    const galleryImages = isArchitecture
      ? [
          "/architecture/bl5.jpg",
          "/architecture/bl13-300x242.jpg",
          "/architecture/P1.png",
        ]
      : isEnvironment
        ? ["/environment/en15.jpg", "/environment/es2.png"]
        : isEngineering
          ? ["/engineering/bg3.png", "/engineering/bum2.jpg", "/engineering/repx2.jpg"]
          : isAgriculture
            ? ["/agriculture/dc2.jpg", "/agriculture/rapi2.jpg", "/agriculture/spp2.jpg"]
            : isInstitutional
              ? ["/institutional/is1.png", "/institutional/wrp2.jpg"]
              : ["/natural-resource/image1.png", "/natural-resource/image2.png"];

    const featurePoints = isArchitecture
      ? ["Building Design", "Structural Design", "Interior Design"]
      : isEnvironment
        ? ["Environmental Assessment", "Climate Resilience", "Sustainable Planning"]
        : isEngineering
          ? ["Transportation Infrastructure", "Water Systems", "Urban Development"]
          : isAgriculture
            ? ["Agricultural Planning", "Rural Infrastructure", "Livelihood Development"]
            : isInstitutional
              ? ["Institutional Strategy", "Capacity Development", "Governance Support"]
              : ["Watershed Management", "Resource Governance", "Sustainable Land Use"];

    const label = isArchitecture
      ? "Architecture"
      : isEnvironment
        ? "Environment & Climate Change"
        : isEngineering
          ? "Engineering"
          : isAgriculture
            ? "Agriculture & Rural Development"
            : isInstitutional
              ? "Institutional Development"
              : "Natural Resource Management";

    return (
      <main className="min-h-screen bg-[#efefed] py-8 text-slate-800">
        <div className="mx-auto grid w-full max-w-[1400px] gap-8 px-3 sm:px-4 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10 lg:px-7">
          <DomainSidebar currentSlug={slug} />
          <div className="min-w-0">
            <div className="px-0 sm:px-0">
              <header className="relative overflow-hidden rounded-[24px] bg-[#0b2d4d] px-6 py-7 text-white shadow-[0_18px_40px_rgba(11,45,77,0.16)] sm:px-8 sm:py-9 lg:px-10 lg:py-10">
                <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full border border-white/10" />
                <div className="absolute right-10 top-8 h-24 w-24 rounded-full border border-white/10" />
                <div className="relative max-w-4xl">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#9eddd0]">GEOCE / Domain expertise</p>
                  <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    <h1 className="max-w-2xl text-3xl font-black leading-[1.05] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
                      {label}
                    </h1>
                  </div>
                  <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg">
                    {topic.brief}
                  </p>
                </div>
              </header>

              <div className={`mt-6 grid gap-4 ${galleryImages.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
                {galleryImages.map((image, index) => (
                  <article
                    key={`${image}-${index}`}
                    className="group relative isolate min-h-[250px] overflow-hidden rounded-[20px] border border-slate-300 bg-slate-900 shadow-[0_10px_24px_rgba(15,23,42,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_32px_rgba(15,23,42,0.18)] sm:min-h-[300px] lg:min-h-[340px]"
                  >
                    <img
                      src={image}
                      alt={`${label} project view ${index + 1}`}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071b2d]/90 via-[#071b2d]/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-6">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9eddd0]">Field view 0{index + 1}</p>
                        <p className="mt-2 text-sm font-semibold tracking-[0.04em]">{label}</p>
                      </div>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 text-lg transition duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-[#0b2d4d]">↗</span>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-700">
              {featurePoints.map((point) => (
                <div key={point} className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-700" />
                  <span>{point}</span>
                </div>
              ))}
              </div>

              <div className="mt-10 space-y-8">
              <div className="border-b border-slate-400 pb-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                  Overview
                </p>
              </div>
              <p className="max-w-[62rem] text-base leading-7 text-slate-600">
                {topic.description}
              </p>

              <div className="flex items-end justify-between border-b border-slate-300 pb-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#2d6ea6]">
                  Capabilities
                </p>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">What we deliver</span>
              </div>
              <div className="grid max-w-4xl gap-3 sm:grid-cols-2 sm:gap-4">
                {topic.capabilities.map((capability, index) => (
                  <div
                    key={capability}
                    className="group flex min-h-[82px] items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-left shadow-[0_6px_16px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-[#2d6ea6] hover:shadow-[0_12px_24px_rgba(45,110,166,0.12)]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e8f0f9] text-[10px] font-bold tracking-[0.08em] text-[#2d6ea6] transition group-hover:bg-[#0b2d4d] group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-slate-700">{capability}</span>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <div className="mx-auto grid w-full max-w-[1400px] gap-8 px-3 py-12 sm:px-4 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10 lg:px-7">
        <DomainSidebar currentSlug={slug} />
        <div className="min-w-0">
        <div className="rounded-[28px] bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2d6ea6]">
            Specialization
          </p>
          <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            {topic.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">{topic.brief}</p>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">Overview</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">{topic.description}</p>
          </div>

          <div className="mt-10">
            <div className="flex items-end justify-between border-b border-slate-200 pb-3">
              <h2 className="text-2xl font-black text-slate-900">Capabilities</h2>
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">What we deliver</span>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {topic.capabilities.map((capability, index) => (
                <li
                  key={capability}
                  className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold leading-6 text-slate-700 transition hover:-translate-y-0.5 hover:border-[#2d6ea6] hover:bg-white hover:shadow-[0_10px_22px_rgba(45,110,166,0.1)]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8f0f9] text-[10px] font-bold tracking-[0.08em] text-[#2d6ea6] transition group-hover:bg-[#0b2d4d] group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </div>
    </main>
  );
}
