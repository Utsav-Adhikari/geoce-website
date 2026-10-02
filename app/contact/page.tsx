import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f0f0ee] px-3 py-16 text-slate-800 sm:px-4 lg:px-7">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="rounded-[20px] border border-slate-200 bg-[#f8f8f6] p-4 shadow-[0_12px_30px_rgba(15,23,42,0.04)] md:p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
              Get in touch
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500">
              ✉
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-4 rounded-[14px] border border-slate-200 bg-[#f3f3f1] p-4">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
                Contact GEOCE
              </div>

              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#343797]" />
                  <span>
                    GEOCE Consultants (P.) Ltd., Jhamsikhel, Lalitpur, Nepal
                    <br />
                    Postal Address: GPO Box 4266, Kathmandu
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#343797]" />
                  <span>
                    Phone: +977-1-5421175, 5445542
                    <br />
                    Fax: +977-1-5426096
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#343797]" />
                  <span>
                    Email: info@geoceconsultants.com
                    <br />
                    Business: business@geoceconsultants.com
                  </span>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14132.956405664132!2d85.30758400000002!3d27.679004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1a37d60c7d30f126!2sGEOCE%20CONSULTANTS%20(P)%20LTD!5e0!3m2!1sen!2snp!4v1653644692419!5m2!1sen!2snp"
                  title="GEOCE Consultants office location"
                  className="h-64 w-full rounded-lg border border-slate-200"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="rounded-[14px] border border-slate-200 bg-[#f8f8f6] p-4">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
                Send an inquiry
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                  <span>Address</span>
                  <input
                    type="text"
                    placeholder="Your address"
                    className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </label>
                <label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                  <span>Name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </label>
                <label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                  <span>Phone</span>
                  <input
                    type="tel"
                    placeholder="Your phone"
                    className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </label>
                <label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                  <span>Email</span>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </label>
                <label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                  <span>Organization</span>
                  <input
                    type="text"
                    placeholder="Organization"
                    className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </label>
                <label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                  <span>Project Type</span>
                  <input
                    type="text"
                    placeholder="Project Type"
                    className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </label>
                <label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-500 sm:col-span-2">
                  <span>Message</span>
                  <textarea
                    rows={4}
                    placeholder="Message"
                    className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </label>
                <div className="flex items-end sm:col-span-2">
                  <button
                    type="button"
                    className="ml-auto rounded-md bg-[#d9d9d5] px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700 transition hover:bg-[#cfcfc9]"
                  >
                    Send inquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
