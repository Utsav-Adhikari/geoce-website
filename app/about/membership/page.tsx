import AboutSidebar from "../about-sidebar";

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-[#f3f4f1] px-5 py-16 text-slate-800 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
          <AboutSidebar active="membership" />
          <div>
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2d6ea6]">About</p>
          <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Membership</h1>
        </div>

        <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
          <img
            src="https://geoceconsultants.com/wp-content/uploads/2022/06/Jomsom-Airport-960x330.jpg"
            alt="GEOCE membership"
            className="h-[260px] w-full object-cover md:h-[330px]"
          />
        </div>

        <div className="mt-10 rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.04)]">
          <p className="text-base leading-8 text-slate-700">
            The firm is one of the founder members of the Society of Consulting Architectural and
            Engineering Firms (SCAEF), Nepal. It is a registered member of SCAEF.
          </p>

          <p className="mt-6 text-base leading-8 text-slate-700">
            GEOCE is registered with various international organizations, such as:
          </p>

          <ul className="mt-6 list-disc space-y-3 pl-6 text-base leading-7 text-slate-700">
            <li>Asian Development Bank</li>
            <li>World Bank</li>
            <li>United Nations Development Program</li>
            <li>United Nations Capital Development Fund</li>
          </ul>
        </div>
          </div>
        </div>
      </div>
    </main>
  );
}
