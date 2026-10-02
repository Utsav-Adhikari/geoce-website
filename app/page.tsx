"use client";

import Link from "next/link";
import { Building2, Cloud, Droplet, HardHat, Plane, Sprout, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { projects } from "./project-data";

const heroSlides = [
  {
    image: "/hero/1-1920x660.jpg",
    title: "Engineering infrastructure for resilient communities",
    subtitle: "Planning, design, and delivery across transport, energy, water, and rural development.",
  },
  {
    image: "/hero/nurung-khola-ip_-ilam-2-1770271768427-345599300.jpg",
    title: "Sustainable water and irrigation systems",
    subtitle: "Integrated solutions for irrigation, drainage, flood control, and environmental resilience.",
  },
  {
    image: "/hero/WhatsApp-Image-2022-06-10-at-2.16.30-PM-1-768x576.jpeg",
    title: "Built around performance, accountability, and long-term value",
    subtitle: "Supporting complex infrastructure projects through practical engineering and project leadership.",
  },
  {
    image: "/hero/WhatsApp-Image-2022-06-10-at-2.38.08-PM-960x330.jpeg",
    title: "Construction excellence in motion",
    subtitle: "From project planning to execution, GEOCE supports resilient infrastructure delivery on site.",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (index: number) => {
    setActiveSlide((index + heroSlides.length) % heroSlides.length);
  };

  const goToPrevious = () => {
    setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNext = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[activeSlide];

  return (
    <div className="min-h-screen bg-[#f1efe9] text-[#1d2a2f]">
      <main className="w-full px-0 py-0">
        <section className="relative overflow-hidden bg-white shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
          <div className="relative h-[560px] w-full sm:h-[540px] lg:h-[680px]">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f2f]/80 via-[#0d1f2f]/60 to-[#0d1f2f]/25" />

            <div className="absolute inset-0 z-10">
              <div className="mx-auto flex h-full w-full max-w-[1400px] items-start justify-start px-5 pt-12 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
                <div className="max-w-xl text-white">
                  <h1 className="text-3xl font-black leading-tight sm:text-4xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-slate-200 sm:text-base lg:text-lg">
                    {slide.subtitle}
                  </p>
                  <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                    <Link
                      href="/services"
                      className="inline-flex w-full items-center justify-center rounded-full bg-[#343797] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(52,55,151,0.25)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#292c7a] sm:w-auto"
                    >
                      Explore Services
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex w-full items-center justify-center rounded-full border border-white/60 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/15 sm:w-auto"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              aria-label="Previous slide"
              onClick={goToPrevious}
              className="absolute bottom-4 left-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#0b2d4d]/60 text-xl text-white shadow-lg backdrop-blur-sm transition hover:bg-[#0b2d4d]/80 sm:bottom-auto sm:left-6 sm:top-1/2 sm:h-12 sm:w-12 sm:-translate-y-1/2 sm:text-2xl"
            >
              ←
            </button>

            <button
              type="button"
              aria-label="Next slide"
              onClick={goToNext}
              className="absolute bottom-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#0b2d4d]/60 text-xl text-white shadow-lg backdrop-blur-sm transition hover:bg-[#0b2d4d]/80 sm:bottom-auto sm:right-6 sm:top-1/2 sm:h-12 sm:w-12 sm:-translate-y-1/2 sm:text-2xl"
            >
              →
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 border-t border-slate-200 bg-white/80 px-4 py-4 backdrop-blur-sm">
            {heroSlides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-200 ${
                  index === activeSlide ? "w-10 bg-[#0b2d4d]" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </section>

        <section className="bg-[#efeee9] px-2 py-8 sm:px-4 lg:px-5 lg:py-10">
          <div className="mx-auto max-w-[1360px] overflow-hidden rounded-[18px] border border-[#d2ccc3] bg-[#f6f4f1] shadow-[0_10px_35px_rgba(15,23,42,0.06)]">
            <div className="px-4 py-8 sm:px-8 lg:px-12 lg:py-10">
              <div className="mb-6 border-b border-[#d2ccc3] pb-3">
                <h2 className="text-[15px] font-extrabold uppercase tracking-[0.18em] text-slate-900 sm:text-[17px]">
                  ENGINEERING EXPERTISE. DEVELOPMENT IMPACT.
                </h2>
              </div>

              <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-center">
                <div className="overflow-hidden rounded-2xl border border-[#d2ccc3] bg-[#eceae6] shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
                  <img
                    src="/hero/geoce-office.jpg"
                    alt="GEOCE office"
                    className="h-[200px] w-full object-cover transition duration-300 hover:scale-[1.02]"
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-lg font-semibold uppercase tracking-[0.08em] text-slate-800 sm:text-xl">About us</p>
                  <p className="text-base leading-7 text-slate-700">
                    GEOCE Consultants is a multidisciplinary engineering and development consultancy dedicated to delivering practical, sustainable, and high-impact infrastructure solutions across Nepal.
                  </p>
                  <p className="text-base leading-7 text-slate-700">
                    Since 1986, we have supported communities, institutions, and public and private sector clients through engineering design, planning, environmental analysis, and project implementation across transport, irrigation, energy, rural development, and institutional services.
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center rounded-lg border border-[#d2ccc3] bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-800 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-slate-50 sm:text-[13px]"
                  >
                    + Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-[#d2ccc3] px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
              <div className="overflow-hidden rounded-[24px] bg-[#0b2d4d] shadow-[0_18px_45px_rgba(11,45,77,0.16)]">
                <div className="relative overflow-hidden px-5 py-7 text-white sm:px-8 sm:py-9 lg:px-10 lg:py-10">
                  <div className="absolute -right-12 -top-20 h-52 w-52 rounded-full border border-white/10" />
                  <div className="absolute -right-2 -top-10 h-32 w-32 rounded-full border border-white/10" />
                  <div className="relative flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-xl">
                      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#9eddd0]">
                        Built for what matters
                      </p>
                      <h2 className="max-w-2xl text-2xl font-black uppercase leading-tight tracking-[0.04em] sm:text-3xl">
                        Our areas of expertise
                      </h2>
                      <p className="mt-3 max-w-lg text-sm leading-6 text-slate-200">
                        Multidisciplinary thinking for infrastructure that serves communities, protects resources, and performs for generations.
                      </p>
                    </div>
                    <Link
                      href="/services"
                      className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-[#0b2d4d] sm:self-auto"
                    >
                      Explore all services
                      <span className="text-base leading-none transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>

                <div className="bg-[#dfe3df] p-3 sm:p-5 lg:p-6">
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
                    {[
                      {
                        name: "AGRICULTURE &\nRURAL DEVELOPMENT",
                        slug: "agriculture-rural-development",
                        href: "/services/agriculture-rural-development",
                        color: "bg-[#e5f8f2]",
                        icon: Sprout,
                        iconColor: "text-emerald-700",
                        span: "lg:col-span-4",
                      },
                      {
                        name: "AIRPORTS",
                        slug: "airports",
                        href: "/#projects",
                        color: "bg-[#eaf6fc]",
                        icon: Plane,
                        iconColor: "text-sky-700",
                        span: "lg:col-span-4",
                      },
                      {
                        name: "ARCHITECTURE",
                        slug: "architecture",
                        href: "/services/architecture",
                        color: "bg-[#fff0f1]",
                        icon: Building2,
                        iconColor: "text-rose-600",
                        span: "lg:col-span-4",
                      },
                      {
                        name: "ROADS &\nBRIDGES",
                        slug: "roads-bridges",
                        href: "/services/roads-bridges",
                        color: "bg-[#eef2ff]",
                        icon: HardHat,
                        iconColor: "text-indigo-700",
                        span: "lg:col-span-3",
                      },
                      {
                        name: "ENVIRONMENT AND\nCLIMATE CHANGE",
                        slug: "environment-and-climate-change",
                        href: "/services/environment-and-climate-change",
                        color: "bg-[#f1edff]",
                        icon: Cloud,
                        iconColor: "text-violet-700",
                        span: "lg:col-span-3",
                      },
                      {
                        name: "IRRIGATION,\nDRAINAGE AND\nFLOOD CONTROL",
                        slug: "irrigation-drainage-and-flood-control",
                        href: "/services/irrigation-drainage-and-flood-control",
                        color: "bg-[#e7f9fc]",
                        icon: Droplet,
                        iconColor: "text-cyan-700",
                        span: "lg:col-span-3",
                      },
                      {
                        name: "POWER AND ENERGY",
                        slug: "power-and-energy",
                        href: "/services/power-and-energy",
                        color: "bg-[#fff7df]",
                        icon: Zap,
                        iconColor: "text-amber-700",
                        span: "lg:col-span-3",
                      },
                    ].map((item, index) => (
                      <Link
                        key={item.slug}
                        href={item.href}
                        className="group relative flex min-h-[124px] flex-col justify-start overflow-hidden rounded-[15px] border border-[#c8cfca] bg-[#f8f8f6] p-3.5 text-left shadow-[0_3px_0_rgba(11,45,77,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#0b2d4d] hover:shadow-[0_14px_24px_rgba(11,45,77,0.14)] sm:min-h-[136px] sm:p-4"
                      >
                        <div className="flex items-start justify-between">
                          <div className={`flex h-10 w-10 items-center justify-center rounded-full border ${item.color} ${item.iconColor} transition duration-300 group-hover:rotate-6 group-hover:scale-105`}>
                            <item.icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                          </div>
                          <span className="text-[10px] font-bold tracking-[0.16em] text-slate-400">0{index + 1}</span>
                        </div>
                        <div className="mt-4">
                          <div className="mb-2 h-px w-8 bg-[#d0454a] transition-all duration-300 group-hover:w-14" />
                          <div className="flex items-end justify-between gap-3">
                            <div className="text-[11.5px] font-bold uppercase leading-[1.4] tracking-[0.12em] text-slate-800 whitespace-pre-line sm:text-[12px]">
                              {item.name}
                            </div>
                            <span className="text-lg leading-none text-[#0b2d4d] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">↗</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div id="projects" className="border-t border-[#d2ccc3] px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
              <div className="mb-5 flex items-end justify-between gap-4 border-b border-[#d2ccc3] pb-3">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-600">Construction &amp; Design</p>
                  <h2 className="mt-2 text-[15px] font-extrabold uppercase tracking-[0.18em] text-slate-900 sm:text-[16px]">
                    Featured Projects
                  </h2>
                </div>
                <Link
                  href="/projects"
                  className="shrink-0 text-sm font-semibold text-slate-700 underline decoration-slate-500 underline-offset-4 transition hover:text-slate-900"
                >
                  View All <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <Link
                    key={project.title}
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
                      <h3 className="mt-2 text-base font-bold leading-6 text-slate-900 sm:text-[17px]">
                        {project.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-[#d2ccc3] px-5 py-5 sm:px-8 lg:px-12">
              <div className="mb-4 flex items-center justify-between border-b border-[#d2ccc3] pb-3">
                <h2 className="text-[14px] font-bold uppercase tracking-[0.2em] text-slate-800">
                  FROM CONCEPT TO COMPLETION
                </h2>
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-[4px] border border-[#d2ccc3] bg-white text-[10px] text-slate-700">
                  ↗
                </span>
              </div>

              <ol className="grid grid-cols-2 gap-x-4 gap-y-5 text-slate-800 sm:grid-cols-4 sm:gap-x-2 sm:gap-y-0">
                {[
                  { number: "01", title: "PLAN", description: <>FEASIBILITY<br />STUDIES</> },
                  { number: "02", title: "DESIGN", description: <>ENGINEERING<br />DESIGN</> },
                  { number: "03", title: "IMPLEMENT", description: <>PROJECT<br />EXECUTION</> },
                  { number: "04", title: "MANAGE", description: <>MONITORING<br />&amp; SUPPORT</> },
                ].map((step) => (
                  <li key={step.number} className="border-t border-[#d2ccc3] pt-3 sm:border-0 sm:pt-2 sm:text-center">
                    <div className="flex items-baseline gap-2 sm:block">
                      <span className="text-[10px] font-bold tracking-[0.16em] sm:text-[12px] sm:tracking-[0.18em]">
                        {step.number}
                      </span>
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.14em] sm:mt-4 sm:text-[12px] sm:tracking-[0.18em]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-[10px] uppercase leading-[1.7] tracking-[0.1em] sm:mt-5 sm:text-[12px] sm:tracking-[0.14em]">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border-t border-[#d2ccc3] px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
              <div className="mb-4 flex items-center justify-between border-b border-[#d2ccc3] pb-3">
                <h2 className="text-[15px] font-extrabold uppercase tracking-[0.18em] text-slate-900">
                  WHY GEOCE?
                </h2>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#d2ccc3] bg-white text-xs text-slate-700">
                  ↗
                </span>
              </div>

              <div className="rounded-[10px] border border-[#d2ccc3] bg-[#f0efec] p-5">
                <div className="grid gap-8 md:grid-cols-[1.2fr_1.8fr]">
                  <div className="grid grid-cols-2 gap-4 text-[13px] uppercase tracking-[0.14em] text-slate-700">
                    <div>
                      <div className="text-[52px] font-bold leading-none text-slate-800">40+</div>
                      <div className="mt-2 text-[15px] font-bold">Years</div>
                      <div className="mt-1 text-[15px] font-bold">Experience</div>
                    </div>
                    <div>
                      <div className="text-[52px] font-bold leading-none text-slate-800">100+</div>
                      <div className="mt-2 text-[15px] font-bold">Projects</div>
                    </div>
                    <div className="mt-2 col-span-2">
                      <div className="text-[15px] font-extrabold text-slate-800">Multidisciplinary</div>
                      <div className="mt-2 text-[13px] font-medium leading-6">Engineering, architecture, environment and development services</div>
                    </div>
                  </div>

                  <div className="space-y-4 text-[13px] uppercase tracking-[0.14em] text-slate-700">
                    <div className="border-b border-[#d2ccc3] pb-3">
                      <div className="text-[15px] font-extrabold text-slate-800">Integrated expertise</div>
                      <div className="mt-2 leading-[1.8] text-slate-600 normal-case tracking-[0.06em] text-[13px] font-semibold">
                        We combine technical capability with practical project delivery to solve complex infrastructure and development challenges.
                      </div>
                    </div>

                    <div className="border-b border-[#d2ccc3] pb-3">
                      <div className="text-[15px] font-extrabold text-slate-800">End-to-end support</div>
                      <div className="mt-2 leading-[1.8] text-slate-600 normal-case tracking-[0.06em] text-[13px] font-semibold">
                        From planning and design to implementation and monitoring, we help clients move from concept to lasting impact.
                      </div>
                    </div>

                    <div>
                      <div className="text-[15px] font-extrabold text-slate-800">Meaningful outcomes</div>
                      <div className="mt-2 leading-[1.8] text-slate-600 normal-case tracking-[0.06em] text-[13px] font-semibold">
                        Our focus is on resilient infrastructure, sustainable systems, and solutions that deliver long-term value to communities and institutions.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#d2ccc3] px-0 py-0">
              <div
                className="relative overflow-hidden"
                style={{
                  backgroundImage:
                    "url('/hero/construction-site-hero.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-[#0d1f2f]/75" />

                <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col gap-10 px-6 py-14 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-16">
                  <div className="max-w-[620px]">
                    <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-200 sm:text-[12px]">
                      ENGINEERING PARTNER
                    </p>
                    <h3 className="text-[2.3rem] font-black leading-[0.95] tracking-[-0.04em] sm:text-[3.1rem] lg:text-[4rem]">
                      Build with precision
                      <span className="mt-2 block">Deliver with confidence</span>
                    </h3>
                    <p className="mt-6 max-w-[520px] text-base leading-7 text-slate-200 sm:text-lg">
                      Talk with our engineering team to scope, validate, and accelerate your next build.
                    </p>

                    <Link
                      href="mailto:info@geoceconsultants.com"
                      className="mt-8 inline-flex max-w-full flex-wrap items-center gap-2 rounded-lg bg-[#3d4fcb] px-3 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-[0_12px_30px_rgba(61,79,203,0.32)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#4b5ae0] sm:gap-3 sm:px-5 sm:text-sm sm:tracking-[0.12em]"
                    >
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/12 text-lg">✉</span>
                      <span className="min-w-0 break-all">info@geoceconsultants.com</span>
                      <span className="shrink-0">→</span>
                    </Link>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="flex h-[180px] w-[260px] items-center justify-center rounded-full bg-white/95 p-5 shadow-[0_20px_40px_rgba(15,23,42,0.25)] sm:h-[210px] sm:w-[320px]">
                      <div className="grid grid-cols-3 gap-3">
                        <img
                          src="https://next.geoceconsultants.com/_next/image?url=%2Fadb.png&w=640&q=75"
                          alt="Asian Development Bank"
                          className="h-16 w-16 rounded-full border border-slate-200 bg-white object-contain p-2 shadow-sm"
                        />
                        <img
                          src="https://next.geoceconsultants.com/_next/image?url=%2Fundp.png&w=640&q=75"
                          alt="UNDP"
                          className="h-16 w-16 rounded-full border border-slate-200 bg-white object-contain p-2 shadow-sm"
                        />
                        <img
                          src="https://next.geoceconsultants.com/_next/image?url=%2Fworld-bank.jpg&w=640&q=75"
                          alt="World Bank"
                          className="h-16 w-16 rounded-full border border-slate-200 bg-white object-contain p-2 shadow-sm"
                        />
                        <img
                          src="https://next.geoceconsultants.com/_next/image?url=%2Fscaef.png&w=640&q=75"
                          alt="SCAEF"
                          className="h-16 w-16 rounded-full border border-slate-200 bg-white object-contain p-2 shadow-sm"
                        />
                        <img
                          src="https://next.geoceconsultants.com/_next/image?url=%2Fnepal-gov.png&w=640&q=75"
                          alt="Nepal Government"
                          className="h-16 w-16 rounded-full border border-slate-200 bg-white object-contain p-2 shadow-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#d2ccc3] px-5 py-8 text-center sm:px-8 lg:px-12 lg:py-10">
              <h2 className="border-b border-[#d2ccc3] pb-3 text-[15px] font-extrabold uppercase tracking-[0.18em] text-slate-900">
                HAVE A PROJECT IN MIND?
              </h2>
              <div className="mt-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-lg border border-[#d2ccc3] bg-white px-5 py-3 text-[13px] font-bold uppercase tracking-[0.16em] text-slate-800 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-slate-50"
                >
                  CONTACT US -&gt;
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
