import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
   const containerRef = useRef(null);
   const aboutRef = useRef(null);
   const studyRef = useRef(null);
   const skillRef = useRef(null);
   const portfolioRef = useRef(null);

   const aboutContentRef = useRef(null);
   const studyContentRef = useRef(null);
   const skillContentRef = useRef(null);
   const portfolioContentRef = useRef(null);

   const progressRef = useRef(null);

   const pointerCircleRef = useRef(null);

   useLayoutEffect(() => {
      const context = gsap.context(() => {
         const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
         ).matches;

         if (reduceMotion) {
            gsap.set(
               [
                  aboutRef.current,
                  studyRef.current,
                  skillRef.current,
                  portfolioRef.current,
                  aboutContentRef.current,
                  studyContentRef.current,
                  skillContentRef.current,
                  portfolioContentRef.current,
               ],
               { clearProps: "all" }
            );
            return;
         }

         gsap.set(aboutContentRef.current, {
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
         });

         gsap.set(studyContentRef.current, {
            y: 80,
            autoAlpha: 0,
            filter: "blur(10px)",
         });

         gsap.set(skillContentRef.current, {
            y: 80,
            autoAlpha: 0,
            filter: "blur(10px)",
         });

         gsap.set(portfolioContentRef.current, {
            y: 80,
            autoAlpha: 0,
            filter: "blur(10px)",
         });

         gsap.set(
            [
               aboutRef.current,
               studyRef.current,
               skillRef.current,
               portfolioRef.current,
            ],
            {
               autoAlpha: 1,
            }
         );

         // matchMedia: nilai transform pointer disesuaikan per breakpoint
         // supaya di layar sempit lingkaran dekoratif tidak "kabur" jauh
         // keluar viewport atau menyebabkan scroll horizontal.
         const mm = gsap.matchMedia();

         mm.add(
            {
               isMobile: "(max-width: 639px)",
               isTablet: "(min-width: 640px) and (max-width: 1023px)",
               isDesktop: "(min-width: 1024px)",
            },
            (ctx) => {
               const { isMobile, isTablet } = ctx.conditions;

               const pointerMoves = isMobile
                  ? [
                     { x: -140, y: -60 },
                     { x: -260, y: 60 },
                     { x: 0, y: -80 },
                     { x: 60, y: -140 },
                  ]
                  : isTablet
                     ? [
                        { x: -420, y: -100 },
                        { x: -820, y: 80 },
                        { x: 0, y: -90 },
                        { x: 160, y: -180 },
                     ]
                     : [
                        { x: -900, y: -150 },
                        { x: -1800, y: 100 },
                        { x: 0, y: -100 },
                        { x: 300, y: -250 },
                     ];

               const timeline = gsap.timeline({
                  scrollTrigger: {
                     trigger: containerRef.current,
                     start: "top top",
                     end: "bottom bottom",
                     scrub: 1,
                     pin: ".about-stage",
                     anticipatePin: 1,
                     invalidateOnRefresh: true,
                  },
               });

               timeline
                  .to(
                     progressRef.current,
                     {
                        scaleX: 1,
                        ease: "none",
                        duration: 1,
                     },
                     0
                  )

                  // ABOUT — 0% → 25%
                  .to(
                     aboutContentRef.current,
                     {
                        y: -100,
                        autoAlpha: 0,
                        filter: "blur(10px)",
                        duration: 0.25,
                        ease: "power2.inOut",
                     },
                     0.2
                  )

                  // Pointer: ABOUT → STUDY
                  .to(
                     pointerCircleRef.current,
                     {
                        x: pointerMoves[0].x,
                        y: pointerMoves[0].y,
                        duration: 0.25,
                        ease: "power2.inOut",
                     },
                     0.2
                  )

                  // STUDY — 25% → 50%
                  .to(
                     studyContentRef.current,
                     {
                        y: 0,
                        autoAlpha: 1,
                        filter: "blur(0px)",
                        duration: 0.15,
                        ease: "power2.out",
                     },
                     0.25
                  )

                  .to(
                     studyContentRef.current,
                     {
                        y: -100,
                        autoAlpha: 0,
                        filter: "blur(10px)",
                        duration: 0.15,
                        ease: "power2.inOut",
                     },
                     0.45
                  )

                  // Pointer: STUDY → SKILL
                  .to(
                     pointerCircleRef.current,
                     {
                        x: pointerMoves[1].x,
                        y: pointerMoves[1].y,
                        duration: 0.25,
                        ease: "power2.inOut",
                     },
                     0.45
                  )

                  // SKILL — 50% → 75%
                  .to(
                     skillContentRef.current,
                     {
                        y: 0,
                        autoAlpha: 1,
                        filter: "blur(0px)",
                        duration: 0.15,
                        ease: "power2.out",
                     },
                     0.5
                  )

                  .to(
                     skillContentRef.current,
                     {
                        y: -100,
                        autoAlpha: 0,
                        filter: "blur(10px)",
                        duration: 0.15,
                        ease: "power2.inOut",
                     },
                     0.7
                  )

                  // Pointer: SKILL → PORTFOLIO
                  .to(
                     pointerCircleRef.current,
                     {
                        x: pointerMoves[2].x,
                        y: pointerMoves[2].y,
                        duration: 0.25,
                        ease: "power2.inOut",
                     },
                     0.7
                  )

                  // PORTFOLIO — 75% → 100%
                  .to(
                     portfolioContentRef.current,
                     {
                        y: 0,
                        autoAlpha: 1,
                        filter: "blur(0px)",
                        duration: 0.15,
                        ease: "power2.out",
                     },
                     0.75
                  )

                  // Pointer akhir
                  .to(
                     pointerCircleRef.current,
                     {
                        x: pointerMoves[3].x,
                        y: pointerMoves[3].y,
                        duration: 0.25,
                        ease: "power2.inOut",
                     },
                     0.85
                  );

               // cleanup khusus untuk breakpoint ini
               return () => timeline.kill();
            }
         );
      }, containerRef);

      return () => context.revert();
   }, []);

   return (
      <div
         ref={containerRef}
         className="relative min-h-[260vh] w-full overflow-x-hidden bg-[#e7e3dc] text-[#171717] sm:min-h-[280vh] md:min-h-[300vh]"
      >
         <div className="about-stage relative flex h-screen items-center justify-center overflow-hidden px-4 sm:px-6 md:px-16">
            {/* Background grid */}
            <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,#17171712_1px,transparent_1px),linear-gradient(to_bottom,#17171712_1px,transparent_1px)] [background-size:2.5rem_2.5rem] sm:[background-size:5rem_5rem]" />

            {/* Ambient shape */}
            <div
               ref={pointerCircleRef}
               id="pointer-circle"
               className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#d45d3f]/10 blur-2xl sm:-right-32 sm:h-80 sm:w-80 sm:blur-3xl md:-right-40 md:h-[30rem] md:w-[30rem]"
            />

            <div className="relative z-10 w-full max-w-6xl">
               {/* Header */}
               <div className="mb-6 flex flex-wrap items-center justify-between gap-y-2 border-b border-[#171717]/30 pb-4 text-[9px] uppercase tracking-[0.2em] sm:mb-10 sm:text-[10px] sm:tracking-[0.28em] md:text-xs">
                  <span>About / 01</span>

                  <span className="hidden md:inline">
                     Designer & Developer
                  </span>

                  <span>October 2024 — November 2025</span>
               </div>

               {/* Progress */}
               <div className="absolute left-0 top-[3.6rem] h-px w-full overflow-hidden bg-[#171717]/10 sm:top-[4.3rem]">
                  <div
                     ref={progressRef}
                     className="h-full origin-left scale-x-0 bg-[#d45d3f]"
                  />
               </div>

               <div className="relative min-h-[24rem] sm:min-h-[28rem] md:min-h-[30rem]">
                  {/* ABOUT */}
                  <section
                     ref={aboutRef}
                     className="absolute inset-0 flex min-h-[24rem] flex-col justify-center sm:min-h-[28rem] md:min-h-[30rem]"
                  >
                     <div ref={aboutContentRef}>
                        <div className="mb-4 flex items-center gap-3 sm:mb-6">
                           <span className="h-2 w-2 rounded-full bg-[#d45d3f]" />

                           <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d45d3f] sm:text-xs sm:tracking-[0.22em]">
                              A little context
                           </p>
                        </div>

                        <h1 className="max-w-5xl font-noto-serif text-4xl leading-[0.95] tracking-[-0.02em] sm:text-6xl sm:leading-[0.9] sm:tracking-[-0.03em] md:text-7xl lg:text-[8.5rem] lg:leading-[0.88] lg:tracking-[-0.04em]">
                           About <em className="font-normal">me.</em>
                        </h1>

                        <div className="mt-6 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                           <p className="max-w-2xl text-sm leading-relaxed text-[#171717]/75 sm:text-base md:text-xl">
                              Saya lulusan Teknik Informatika Universitas Esa Unggul
                              (2023) yang senang mengubah masalah kompleks menjadi
                              pengalaman digital yang sederhana, indah, dan intuitif.
                           </p>

                           <span className="hidden text-right text-xs uppercase tracking-[0.2em] text-[#171717]/40 sm:block">
                              Scroll to
                              <br />
                              continue
                           </span>
                        </div>
                     </div>
                  </section>

                  {/* STUDY */}
                  <section
                     ref={studyRef}
                     className="absolute inset-0 flex min-h-[24rem] flex-col justify-center sm:min-h-[28rem] md:min-h-[30rem]"
                  >
                     <div ref={studyContentRef}>
                        <div className="mb-4 flex items-center gap-3 sm:mb-6">
                           <span className="h-2 w-2 rounded-full bg-[#d45d3f]" />

                           <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d45d3f] sm:text-xs sm:tracking-[0.22em]">
                              The foundation
                           </p>
                        </div>

                        <h2 className="max-w-5xl font-noto-serif text-4xl leading-[0.95] tracking-[-0.02em] sm:text-6xl sm:leading-[0.9] sm:tracking-[-0.03em] md:text-7xl lg:text-[8.5rem] lg:leading-[0.88] lg:tracking-[-0.04em]">
                           Universitas{" "}
                           <em className="font-normal">Esa Unggul.</em>
                        </h2>

                        <div className="mt-6 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                           <p className="max-w-2xl text-sm leading-relaxed text-[#171717]/75 sm:text-base md:text-xl">
                              Di sini saya membangun fondasi teknologi, kepemimpinan,
                              dan cara berpikir yang mendukung pekerjaan saya di dunia
                              web dan UI/UX.
                           </p>

                           <div className="hidden text-right sm:block">
                              <span className="block font-noto-serif text-3xl md:text-5xl">
                                 01
                              </span>

                              <span className="text-[10px] uppercase tracking-[0.2em] text-[#171717]/40">
                                 Education
                              </span>
                           </div>
                        </div>
                     </div>
                  </section>

                  {/* SKILL */}
                  <section
                     ref={skillRef}
                     className="absolute inset-0 flex min-h-[24rem] flex-col justify-center sm:min-h-[28rem] md:min-h-[30rem]"
                  >
                     <div ref={skillContentRef}>
                        <div className="mb-4 flex items-center gap-3 sm:mb-6">
                           <span className="h-2 w-2 rounded-full bg-[#d45d3f]" />

                           <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d45d3f] sm:text-xs sm:tracking-[0.22em]">
                              What I work with
                           </p>
                        </div>

                        <h2 className="max-w-5xl font-noto-serif text-4xl leading-[0.95] tracking-[-0.02em] sm:text-6xl sm:leading-[0.9] sm:tracking-[-0.03em] md:text-7xl lg:text-[8.5rem] lg:leading-[0.88] lg:tracking-[-0.04em]">
                           My <em className="font-normal">skills.</em>
                        </h2>

                        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-[#171717]/20 pt-4 sm:mt-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-4 sm:pt-6 md:grid-cols-4">
                           {[
                              "React.js",
                              "JavaScript",
                              "Tailwind CSS",
                              "HTML",
                              "Laravel",
                              "GSAP",
                              "UI / UX",
                              "Figma",
                              "Git",
                              "REST API",
                              "Responsive Design",
                           ].map((skill) => (
                              <div
                                 key={skill}
                                 className="border-b border-[#171717]/15 pb-2 text-xs uppercase tracking-[0.06em] sm:pb-3 sm:text-sm md:text-base"
                              >
                                 {skill}
                              </div>
                           ))}
                        </div>
                     </div>
                  </section>

                  {/* PORTFOLIO */}
                  <section
                     ref={portfolioRef}
                     className="absolute inset-0 flex min-h-[24rem] flex-col justify-center sm:min-h-[28rem] md:min-h-[30rem]"
                  >
                     <div ref={portfolioContentRef}>
                        <div className="mb-4 flex items-center gap-3 sm:mb-6">
                           <span className="h-2 w-2 rounded-full bg-[#d45d3f]" />

                           <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d45d3f] sm:text-xs sm:tracking-[0.22em]">
                              Selected work
                           </p>
                        </div>

                        <div className="flex flex-col gap-4 sm:gap-8 md:flex-row md:items-end md:justify-between">
                           <h2 className="max-w-4xl font-noto-serif text-4xl leading-[0.95] tracking-[-0.02em] sm:text-6xl sm:leading-[0.9] sm:tracking-[-0.03em] md:text-7xl lg:text-[8.5rem] lg:leading-[0.88] lg:tracking-[-0.04em]">
                              My <em className="font-normal">work.</em>
                           </h2>

                           <div className="hidden text-right md:block">
                              <span className="block font-noto-serif text-3xl md:text-5xl">
                                 03
                              </span>

                              <span className="text-[10px] uppercase tracking-[0.2em] text-[#171717]/40">
                                 Portfolio
                              </span>
                           </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-4 sm:mt-10 sm:gap-x-6 sm:gap-y-10 md:grid-cols-3">
                           {[
                              {
                                 number: "01",
                                 title: "Unit Layanan Terpadu",
                                 category: "Web Design / Development",
                              },
                              {
                                 number: "02",
                                 title: "Physiotherapy Clinic",
                                 category: "Web Design / Development",
                              },
                              {
                                 number: "04",
                                 title: "E-Canteen",
                                 category: "Web Design / Development",
                              },
                           ].map((project) => (
                              <a
                                 key={project.number}
                                 href="#"
                                 className="group border-t border-[#171717]/30 pt-2 transition-opacity hover:opacity-60"
                              >
                                 <div className="flex items-start justify-between">
                                    <span className="text-xs text-[#171717]/40">
                                       {project.number}
                                    </span>
                                    <span className="text-xs">↗</span>
                                 </div>

                                 <h3 className="mt-2 font-noto-serif text-lg sm:mt-8 sm:text-2xl md:mt-10 md:text-3xl">
                                    {project.title}
                                 </h3>

                                 <p className="mt-2 text-[9px] uppercase tracking-[0.15em] text-[#171717]/50 sm:text-[10px]">
                                    {project.category}
                                 </p>
                              </a>
                           ))}
                        </div>
                     </div>
                  </section>
               </div>

               {/* Bottom label */}
               <div className="absolute bottom-4 left-0 flex w-full items-center justify-between border-t border-[#171717]/20 pt-3 text-[9px] uppercase tracking-[0.16em] text-[#171717]/50 sm:bottom-8 sm:pt-4 sm:text-[10px] sm:tracking-[0.2em]">
                  <span>Scroll / Explore</span>
                  <span>04</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;