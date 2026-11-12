import AboutMe from "./AboutMe";
import MoreWorks from "./MoreWorks";
import CircularText from "../data/animation/CircularText";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const Content = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline.fromTo(
        "#hero-title",
        { yPercent: -100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          delay: 2.5,
          duration: 1,
          ease: "power1.out",
        },
        "<0.5",
      );
      timeline.fromTo(
        "#openToWorkBadge",
        { yPercent: -100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "power1.out",
        },
        "<0.5",
      );
      timeline.fromTo(
        "#experience-summary",
        { xPercent: -100, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 1, ease: "power1.out" },
        "<0.5",
      );
      timeline.fromTo(
        ".skill-chip",
        { xPercent: -50, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "power1.out",
          stagger: 0.9, // jeda 0,9 detik antar chip
        },
        "<0.5",
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

          {/* ===== Hero ===== */}
          <motion.div
            className="md:col-span-10 md:pl-8 lg:pl-16"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge status */}
            <div
              id="openToWorkBadge"
              className="mb-5 inline-flex items-center gap-2 border-b border-[#171717]/30 pb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d45d3f] sm:text-xs"
            >
              <span className="h-2 w-2 rounded-full bg-[#d45d3f]" />
              Open to work
            </div>

            <h1
              id="hero-title"
              className="text-[#171717]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#171717]/60 sm:text-sm sm:tracking-[0.28em]">
                Hello, my name is
              </p>

              <div className="my-2 flex flex-wrap items-center gap-3">
                <span className="inline-block font-noto-serif text-4xl leading-[0.95] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[8.5rem] lg:leading-[0.88] lg:tracking-[-0.04em]">
                  ZODY ARIFIANSYAH
                </span>
                <span className="text-[#d45d3f]">
                  <CircularText
                    text="2001*2001*2001*"
                    onHover="speedUp"
                    spinDuration={20}
                    className="custom-class hidden md:hidden xl:block"
                  />
                </span>
              </div>

              <span
                className="mt-4 block text-sm font-semibold uppercase tracking-[0.12em] text-[#d45d3f] sm:text-lg md:text-xl"
              >
                FRONT-END WEB DEVELOPER
              </span>
            </h1>

            {/* Chip skill */}
            <div className="flex flex-wrap gap-2 mt-6" id="skill-chips">
              {[
                { label: "Laravel" },
                { label: "Tailwind" },
              ].map((skill) => (
                <span
                  key={skill.label}
                  className="skill-chip cursor-default border-b border-[#171717]/30 px-1 py-1.5 text-sm font-semibold uppercase tracking-[0.08em] transition-transform duration-200 hover:-translate-y-1"
                >
                  {skill.label}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                id="cta-works"
                href="#more-works"
                className="bg-[#d45d3f] px-6 py-3 font-bold text-white transition-all duration-200 hover:-translate-y-1 hover:bg-[#bd4e33]"
              >
                Lihat Karya 🚀
              </a>

              <a
                id="cta-about"
                href="#about"
                className="border border-[#171717]/40 px-6 py-3 font-bold text-[#171717] transition-all duration-200 hover:-translate-y-1 hover:border-[#d45d3f] hover:text-[#d45d3f]"
              >
                Tentang Saya
              </a>
            </div>
          </motion.div>
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
