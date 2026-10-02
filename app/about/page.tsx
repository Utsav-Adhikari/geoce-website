import AboutSidebar from "./about-sidebar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fb] px-3 py-16 text-slate-900 sm:px-4 lg:px-7">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
          <AboutSidebar active="about" />
          <div>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2d6ea6]">About</p>
              <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                We shape resilient infrastructure for Nepal.
              </h1>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                <img
                  src="/hero/geoce-office.jpg"
                  alt="GEOCE Consultants office"
                  className="h-[360px] w-full object-cover"
                />
              </div>

              <div className="space-y-5">
                <p className="text-base leading-8 text-slate-700">
                  GEOCE Consultants is a multidisciplinary engineering and development consultancy committed to delivering practical, sustainable, and high-impact solutions across Nepal. Since 1986, we have supported public and private sector development through engineering design, planning, environmental analysis, and project implementation.
                </p>
                <p className="text-base leading-8 text-slate-700">
                  Our work spans transportation, irrigation, urban development, energy, environment, rural development, and institutional strengthening—always grounded in local context and long-term resilience.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="rounded-full border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700">
                    Engineering & Planning
                  </span>
                  <span className="rounded-full border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700">
                    Environment & Climate
                  </span>
                  <span className="rounded-full border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700">
                    Rural Development
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
