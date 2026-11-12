import AboutMe from "./AboutMe";
import MoreWorks from "./MoreWorks";
import CircularText from "../data/animation/CircularText";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import AppRoutes from "../routes/routes";
import { useSound } from "../context/SoundContext";

const INTRO_DELAY = 2.5; // sesuaikan dengan durasi preloader

const Content = () => {
  const contentRef = useRef(null);
  const { handleHover, handleClick } = useSound();

  useLayoutEffect(() => {
    // hormati pengguna yang mematikan animasi
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      const tl = gsap.timeline({
        delay: INTRO_DELAY,
        defaults: { ease: "power3.out" },
      });

      // Semua posisi dihitung dari awal timeline (detik), mudah diatur
      tl.fromTo(
        "#openToWorkBadge",
        { y: 20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.8 },
        0,
      )
        // Judul: naik dari balik mask, baris demi baris
        .fromTo(
          ".hero-line",
          { yPercent: 110 },
          { yPercent: 0, duration: 1.1, ease: "power4.out", stagger: 0.12 },
          0.15,
        )
        .fromTo(
          "#circular-text",
          { scale: 0.7, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1, duration: 1.2 },
          0.5,
        )
        .fromTo(
          ".skill-chip",
          { y: 16, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.1 },
          0.8,
        )
        .fromTo(
          "#experience-summary",
          { x: -24, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, duration: 0.9 },
          0.9,
        )
        .fromTo(
          ".cta",
          { y: 16, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.1 },
          1.0,
        )
        .fromTo(
          "#greeting-text",
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.9 },
          1.2,
        );
    }, contentRef);

    return () => context.revert();
  }, []);

  return (
    <div
      ref={contentRef}
      className="relative min-h-screen overflow-hidden bg-[#e7e3dc] text-[#171717] Helvetica-regular"
    >
      <div className="relative container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-10">
          {/* ===== Sidebar kecil ===== */}
          <div className="md:col-span-2 flex flex-col justify-between order-last md:order-first space-y-6">
            <p
              id="experience-summary"
              className="border-l border-[#171717]/30 pl-4 text-sm leading-relaxed text-[#171717]/75"
            >
              ✨ Lebih banyak pengalaman dan kemampuan saya dapat ditemukan
              dalam ringkasan pekerjaan yang telah saya lakukan
            </p>
            <h3
              id="greeting-text"
              className="hidden border-l border-[#d45d3f] pl-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#d45d3f] md:block"
            >
              &quot;Senang berkenalan dengan Anda&quot;
            </h3>
          </div>

          {/* ===== Hero (motion.div diganti div biasa) ===== */}
          <div className="md:col-span-10 md:pl-8 lg:pl-16">
            {/* Badge status */}
            <div
              id="openToWorkBadge"
              className="mb-5 inline-flex items-center gap-2 border-b border-[#171717]/30 pb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d45d3f] sm:text-xs"
            >
              <span className="h-2 w-2 rounded-full bg-[#d45d3f]" />
              Open to work
            </div>

            <h1 id="hero-title" className="text-[#171717]">
              {/* Setiap baris: wrapper overflow-hidden (mask) + isi yang digerakkan */}
              <span className="block overflow-hidden py-[0.1em] -my-[0.1em]">
                <span className="hero-line block text-xs font-semibold uppercase tracking-[0.2em] text-[#171717]/60 sm:text-sm sm:tracking-[0.28em]">
                  Hello, my name is
                </span>
              </span>

              <span className="my-2 flex flex-wrap items-center gap-3">
                {/* py + -my agar huruf tidak terpotong oleh leading yang rapat */}
                <span className="block overflow-hidden py-[0.12em] -my-[0.12em]">
                  <span className="hero-line block font-noto-serif text-4xl leading-[0.95] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[8.5rem] lg:leading-[0.88] lg:tracking-[-0.04em]">
                    ZODY ARIFIANSYAH
                  </span>
                </span>
                <span id="circular-text" className="text-[#d45d3f]">
                  <CircularText
                    text="2001*2001*2001*"
                    onHover="speedUp"
                    spinDuration={20}
                    className="custom-class hidden md:hidden xl:block"
                  />
                </span>
              </span>

              <span className="mt-4 block overflow-hidden py-[0.1em] -my-[0.1em]">
                <span className="hero-line block text-sm font-semibold uppercase tracking-[0.12em] text-[#d45d3f] sm:text-lg md:text-xl">
                  FRONT-END WEB DEVELOPER
                </span>
              </span>
            </h1>

            {/* Chip skill: wrapper = GSAP, inner = hover CSS */}
            <div className="flex flex-wrap gap-2 mt-6" id="skill-chips">
              {[{ label: "Laravel" }, { label: "Tailwind" }].map((skill) => (
                <span key={skill.label} className="skill-chip inline-block">
                  <span className="block cursor-default border-b border-[#171717]/30 px-1 py-1.5 text-sm font-semibold uppercase tracking-[0.08em] transition-transform duration-200 hover:-translate-y-1">
                    {skill.label}
                  </span>
                </span>
              ))}
            </div>

            {/* CTA: wrapper = GSAP, link = hover CSS */}
            <div className="flex flex-wrap gap-3 mt-8">
              <div className="cta">
                <a
                  id="cta-works"
                  onMouseEnter={handleHover}
                  onClick={handleClick}
                  href="#more-works"
                  className="block bg-[#d45d3f] px-6 py-3 font-bold text-white transition-all duration-200 hover:-translate-y-1 hover:bg-[#bd4e33]"
                >
                  Lihat Karya 🚀
                </a>
              </div>

              <div className="cta">
                <Link
                  onMouseEnter={handleHover}
                  onClick={handleClick}
                  to={AppRoutes.pageAbout}
                  className="block border border-[#171717]/40 px-6 py-3 font-bold text-[#171717] transition-all duration-200 hover:-translate-y-1 hover:border-[#d45d3f] hover:text-[#d45d3f]"
                >
                  Tentang Saya
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ===== About Me ===== */}
        <div
          id="about-me"
          className="about-me my-12 border-y border-[#171717]/20 py-6 md:py-10"
        >
          <AboutMe />
        </div>

        {/* ===== More Works ===== */}
        <div
          id="more-works"
          className="more-works my-12 border-y border-[#171717]/20 py-6 pb-12 md:py-10"
        >
          <MoreWorks />
        </div>
      </div>
    </div>
  );
};

export default Content;
