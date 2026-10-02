import AboutSidebar from "../about-sidebar";

export default function OurValuesPage() {
  return (
    <main className="min-h-screen bg-[#f3f4f1] px-5 py-16 text-slate-800 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
          <AboutSidebar active="values" />
          <div>
          <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2d6ea6]">About</p>
          <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Our Values</h1>
        </div>

        <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
          <img
            src="https://geoceconsultants.com/wp-content/uploads/2021/11/WhatsApp-Image-2022-06-10-at-2.16.37-PM-1-960x330.jpeg"
            alt="GEOCE values"
            className="h-[260px] w-full object-cover md:h-[330px]"
          />
        </div>

        <div className="mt-10 rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.04)]">
          <p className="text-base leading-8 text-slate-700">
            GEOCE values the trust placed in us by our clients and communities; and seek to be:
          </p>

          <ul className="mt-6 list-disc space-y-3 pl-6 text-base leading-7 text-slate-700">
            <li>
              Trusted by our clients to provide project leadership and integrated design, and to navigate
              the process for projects of all sizes.
            </li>
            <li>
              Trusted by the community to provide solution rich in social and environmental equality.
            </li>
          </ul>

          <p className="mt-6 text-base leading-8 text-slate-700">
            Our values focus on integrity, people and teamwork.
          </p>

          <div className="mt-8 space-y-8">
            <section>
              <h2 className="text-2xl font-black text-slate-900">Integrity</h2>
              <p className="mt-3 text-base leading-8 text-slate-700">
                We embrace the highest standards of personal and professional integrity. Our business
                principles are never compromised.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">People</h2>
              <p className="mt-3 text-base leading-8 text-slate-700">
                Our people are our most important competitive resource – the true assets of our firm. It
                is only through our people that our greater vision can be realized.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">Teamwork</h2>
              <p className="mt-3 text-base leading-8 text-slate-700">
                Teamwork is fundamental to our culture. We respect and value input and opinion, and
                encourage innovation, creativity and entrepreneurship. We treat each other with trust
                and respect.
              </p>
            </section>
          </div>
        </div>
          </div>
        </div>
      </div>
    </main>
  );
}
