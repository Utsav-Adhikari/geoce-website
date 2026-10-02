import AboutSidebar from "../about-sidebar";

export default function OrganisationChartPage() {
  return (
    <main className="min-h-screen bg-[#f3f4f1] px-5 py-16 text-slate-800 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
          <AboutSidebar active="organisation" />
          <div>
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2d6ea6]">About</p>
          <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Organisation Chart</h1>
        </div>

        <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
          <img
            src="https://geoceconsultants.com/wp-content/uploads/2015/10/GEOCE-Org-Struct-3.jpg"
            alt="GEOCE organization chart"
            className="block h-auto w-full object-contain"
          />
        </div>

          </div>
        </div>
      </div>
    </main>
  );
}
