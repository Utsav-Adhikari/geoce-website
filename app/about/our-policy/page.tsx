import AboutSidebar from "../about-sidebar";

export default function OurPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f3f4f1] px-5 py-16 text-slate-800 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
          <AboutSidebar active="policy" />
          <div>
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2d6ea6]">About</p>
          <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Our Policy</h1>
        </div>

        <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
          <img
            src="https://geoceconsultants.com/wp-content/uploads/2021/11/WhatsApp-Image-2022-06-10-at-2.16.38-PM-960x330.jpeg"
            alt="GEOCE policy"
            className="h-[260px] w-full object-cover md:h-[330px]"
          />
        </div>

        <div className="mt-10 rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.04)]">
          <p className="text-base leading-8 text-slate-700">
            GEOCE is committed to maintaining the highest possible professional standards in all the
            work it carries out and the services the firm provides.
          </p>

          <p className="mt-6 text-base leading-8 text-slate-700">
            Providing quality services and solutions to our clients is a major concentration of GEOCE.
          </p>

          <p className="mt-6 text-base leading-8 text-slate-700">
            It is the policy of the firm to move ahead in line with new scientific and technology
            development in the fields of its operation. At the same time the company is conscious
            about the application of appropriate technology and innovations.
          </p>

          <p className="mt-6 text-base leading-8 text-slate-700">
            GEOCE is conscious of its responsibility to transfer specialized knowledge and experience to
            those who remain to continue the professional development. As a knowledge based
            organization, our shared knowledge is our main resource. Particularly in the light of the
            fast growth of specialization, GEOCE also maintains policy to nurture close co-operation
            and association with international and national consulting firms in various projects.
          </p>

          <div className="mt-8 space-y-6">
            <section>
              <h2 className="text-2xl font-black text-slate-900">Mission</h2>
              <p className="mt-3 text-base leading-8 text-slate-700">
                To be broadly embedded in our communities<br />
                To be engaged in meaningful and memorable works<br />
                To be recognized and rewarded for our efforts and accomplishment
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-slate-900">Vision</h2>
              <p className="mt-3 text-base leading-8 text-slate-700">
                To be integrated design practice, locally rooted with a global reach, were visionary and
                avid professionals collaborate to design the future.
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
