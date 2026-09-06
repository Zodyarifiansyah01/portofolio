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
               0.20
            )

            // Pointer: ABOUT → STUDY
            .to(
               pointerCircleRef.current,
               {
                  x: -900,
                  y: -150,
                  duration: 0.25,
                  ease: "power2.inOut",
               },
               0.20
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
                  x: -1800,
                  y: 100,
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
               0.50
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
               0.70
            )

            // Pointer: SKILL → PORTFOLIO
            .to(
               pointerCircleRef.current,
               {
                  x: 0,
                  y: -100,
                  duration: 0.25,
                  ease: "power2.inOut",
               },
               0.70
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
                  x: 300,
                  y: -250,
                  duration: 0.25,
                  ease: "power2.inOut",
               },
               0.85
            );

      }, containerRef);

      return () => context.revert();
   }, []);

   return (
      <div
         ref={containerRef}
         className="relative min-h-[300vh] w-full overflow-hidden bg-[#e7e3dc] text-[#171717]"
      >
         <div className="about-stage relative flex h-screen items-center justify-center overflow-hidden px-6 md:px-16">
            {/* Background grid */}
            <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,#17171712_1px,transparent_1px),linear-gradient(to_bottom,#17171712_1px,transparent_1px)] [background-size:5rem_5rem]" />

            {/* Ambient shape */}
            <div
               ref={pointerCircleRef}
               id="pointer-circle"
               className="pointer-events-none absolute -right-40 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-[#d45d3f]/10 blur-3xl"
            />

            <div className="relative z-10 w-full max-w-6xl">
               {/* Header */}
               <div className="mb-10 flex items-center justify-between border-b border-[#171717]/30 pb-4 text-[10px] uppercase tracking-[0.28em] md:text-xs">
                  <span>About / 01</span>

                  <span className="hidden md:inline">
                     Designer & Developer
                  </span>

                  <span>October 2024 — November 2025</span>
               </div>

               {/* Progress */}
               <div className="absolute left-0 top-[4.3rem] h-px w-full overflow-hidden bg-[#171717]/10">
                  <div
                     ref={progressRef}
                     className="h-full origin-left scale-x-0 bg-[#d45d3f]"
                  />
               </div>

               <div className="relative min-h-[30rem]">
                  {/* ABOUT */}
                  <section
                     ref={aboutRef}
                     className="absolute inset-0 flex min-h-[30rem] flex-col justify-center"
                  >
                     <div ref={aboutContentRef}>
                        <div className="mb-6 flex items-center gap-3">
                           <span className="h-2 w-2 rounded-full bg-[#d45d3f]" />

                           <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d45d3f]">
                              A little context
                           </p>
                        </div>

                        <h1 className="max-w-5xl font-noto-serif text-6xl leading-[0.88] tracking-[-0.04em] md:text-[8.5rem]">
                           About <em className="font-normal">me.</em>
                        </h1>

                        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                           <p className="max-w-2xl text-base leading-relaxed text-[#171717]/75 md:text-xl">
                              Saya lulusan Teknik Informatika Universitas Esa Unggul
                              (2023) yang senang mengubah masalah kompleks menjadi
                              pengalaman digital yang sederhana, indah, dan intuitif.
                           </p>

                           <span className="hidden text-right text-xs uppercase tracking-[0.2em] text-[#171717]/40 md:block">
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
                     className="absolute inset-0 flex min-h-[30rem] flex-col justify-center"
                  >
                     <div ref={studyContentRef}>
                        <div className="mb-6 flex items-center gap-3">
                           <span className="h-2 w-2 rounded-full bg-[#d45d3f]" />

                           <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d45d3f]">
                              The foundation
                           </p>
                        </div>

                        <h2 className="max-w-5xl font-noto-serif text-6xl leading-[0.88] tracking-[-0.04em] md:text-[8.5rem]">
                           Universitas{" "}
                           <em className="font-normal">Esa Unggul.</em>
                        </h2>

                        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                           <p className="max-w-2xl text-base leading-relaxed text-[#171717]/75 md:text-xl">
                              Di sini saya membangun fondasi teknologi, kepemimpinan,
                              dan cara berpikir yang mendukung pekerjaan saya di dunia
                              web dan UI/UX.
                           </p>

                           <div className="hidden text-right md:block">
                              <span className="block font-noto-serif text-5xl">
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
                     className="absolute inset-0 flex min-h-[30rem] flex-col justify-center"
                  >
                     <div ref={skillContentRef}>
                        <div className="mb-6 flex items-center gap-3">
                           <span className="h-2 w-2 rounded-full bg-[#d45d3f]" />

                           <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d45d3f]">
                              What I work with
                           </p>
                        </div>

                        <h2 className="max-w-5xl font-noto-serif text-6xl leading-[0.88] tracking-[-0.04em] md:text-[8.5rem]">
                           My <em className="font-normal">skills.</em>
                        </h2>

                        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[#171717]/20 pt-6 md:grid-cols-4">
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
                                 className="border-b border-[#171717]/15 pb-3 text-sm uppercase tracking-[0.08em] md:text-base"
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
                     className="absolute inset-0 flex min-h-[30rem] flex-col justify-center"
                  >
                     <div ref={portfolioContentRef}>
                        <div className="mb-6 flex items-center gap-3">
                           <span className="h-2 w-2 rounded-full bg-[#d45d3f]" />

                           <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d45d3f]">
                              Selected work
                           </p>
                        </div>

                        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                           <h2 className="max-w-4xl font-noto-serif text-6xl leading-[0.88] tracking-[-0.04em] md:text-[8.5rem]">
                              My <em className="font-normal">work.</em>
                           </h2>

                           <div className="hidden text-right md:block">
                              <span className="block font-noto-serif text-5xl">
                                 03
                              </span>

                              <span className="text-[10px] uppercase tracking-[0.2em] text-[#171717]/40">
                                 Portfolio
                              </span>
                           </div>
                        </div>

                        <div className="mt-10 grid gap-4 md:grid-cols-3">
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
                                 title: "E-Canteen ",
                                 category: "Web Design / Development",
                              },

                           ].map((project) => (
                              <a
                                 key={project.number}
                                 href="#"
                                 className="group border-t border-[#171717]/30 pt-4 transition-opacity hover:opacity-60"
                              >
                                 <div className="flex items-start justify-between">
                                    <span className="text-xs text-[#171717]/40">
                                       {project.number}
                                    </span>

                                    <span className="text-xs">
                                       ↗
                                    </span>
                                 </div>

                                 <h3 className="mt-10 font-noto-serif text-2xl md:text-3xl">
                                    {project.title}
                                 </h3>

                                 <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-[#171717]/50">
                                    {project.category}
                                 </p>
                              </a>
                           ))}
                        </div>
                     </div>
                  </section>
               </div>

               {/* Bottom label */}
               <div className="absolute bottom-8 left-0 flex w-full items-center justify-between border-t border-[#171717]/20 pt-4 text-[10px] uppercase tracking-[0.2em] text-[#171717]/50">
                  <span>Scroll / Explore</span>
                  <span>04</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;