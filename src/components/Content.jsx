import AboutMe from "./AboutMe";
import MoreWorks from "./MoreWorks";
import CircularText from "../data/animation/CircularText";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const Content = () => {
   const contentRef = useRef(null);
   const aboutRef = useRef(null);
   const titleRef = useRef(null);

   useEffect(() => {
      const context = gsap.context(() => {
         const timeline = gsap.timeline();
         timeline.fromTo(
            aboutRef.current,
            { yPercent: -100, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 1, ease: "power1.out" }
         );
         timeline.fromTo(
            titleRef.current,
            { yPercent: -100, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 1, ease: "power1.out" },
            "<2.5"
         );
      }, contentRef);

      return () => context.revert();
   }, []);

   return (
      <div
         ref={contentRef}
         className="relative overflow-hidden min-h-screen Helvetica-regular text-slate-700
                    bg-gradient-to-br from-pink-100 via-purple-100 to-sky-100"
      >
         {/* ===== Blob dekoratif pastel ===== */}
         <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-pink-300/50 blur-3xl" />
         <div className="pointer-events-none absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-sky-300/50 blur-3xl" />
         <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-yellow-200/60 blur-3xl" />
         <div className="pointer-events-none absolute top-1/2 left-10 h-56 w-56 rounded-full bg-emerald-200/50 blur-3xl" />

         <div className="relative container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-10">
               {/* ===== Sidebar kecil ===== */}
               <div className="md:col-span-2 flex flex-col justify-between order-last md:order-first space-y-6">
                  <p
                     ref={aboutRef}
                     className="text-sm leading-relaxed bg-white/60 backdrop-blur-md border border-white/80
                                rounded-3xl p-4 shadow-[0_8px_30px_rgba(167,139,250,0.2)]"
                  >
                     ✨ Lebih banyak pengalaman dan kemampuan saya dapat
                     ditemukan dalam ringkasan pekerjaan yang telah saya
                     lakukan
                  </p>
                  <h3
                     className="hidden md:block text-sm font-semibold tracking-wide text-violet-500
                                border-l-4 border-violet-300 pl-3"
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
                     className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full
                                bg-white/80 border border-emerald-200 text-emerald-600
                                text-xs font-semibold tracking-wide shadow-sm"
                  >
                     <span className="h-2 w-2 rounded-full bg-emerald-400" />
                     Open to work
                  </div>

                  <h1
                     ref={titleRef}
                     className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                                font-bold font-nunito-sans leading-tight tracking-tight text-slate-800"
                  >
                     <p>HELLO, MY NAME IS</p>

                     <div className="flex flex-wrap items-center gap-3 my-2">
                        <span
                           className="inline-block px-4 py-1 rounded-2xl text-slate-800
                                      bg-gradient-to-r from-rose-200 via-violet-200 to-sky-200
                                      shadow-sm ring-1 ring-white/70"
                        >
                           ZODY ARIFIANSYAH
                        </span>
                        <span className="text-violet-400">
                           <CircularText
                              text="2001*2001*2001*"
                              onHover="speedUp"
                              spinDuration={20}
                              className="custom-class hidden md:hidden xl:block"
                           />
                        </span>
                     </div>

                     <span
                        className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300
                                   bg-clip-text text-transparent"
                     >
                        FRONT-END WEB DEVELOPER
                     </span>
                  </h1>

                  {/* Chip skill */}
                  <div className="flex flex-wrap gap-2 mt-6">
                     {[
                        { label: "Laravel", color: "bg-sky-200 text-sky-700" },
                        { label: "Tailwind", color: "bg-emerald-200 text-emerald-700" },
                     ].map((skill) => (
                        <span
                           key={skill.label}
                           className={`${skill.color} px-4 py-1.5 rounded-full text-sm font-semibold
                                       hover:-translate-y-1 transition-transform duration-200 cursor-default`}
                        >
                           {skill.label}
                        </span>
                     ))}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-3 mt-8">
                     <a
                        href="#more-works"
                        className="px-6 py-3 rounded-full font-bold text-white bg-purple-400
                                   shadow-[0_8px_20px_rgba(167,139,250,0.5)]
                                   hover:bg-purple-500 hover:-translate-y-1 transition-all duration-200"
                     >
                        Lihat Karya 🚀
                     </a>
                     <a
                        href="#about-me"
                        className="px-6 py-3 rounded-full font-bold text-purple-500 bg-white/80
                                   border-2 border-purple-200 hover:bg-purple-50
                                   hover:-translate-y-1 transition-all duration-200"
                     >
                        Tentang Saya
                     </a>
                  </div>
               </motion.div>
            </div>

            {/* ===== About Me ===== */}
            <div
               id="about-me"
               className="about-me my-12 rounded-[2rem] bg-white/60 backdrop-blur-md
                          border border-white/80 p-6 md:p-10
                          shadow-[0_10px_40px_rgba(244,114,182,0.15)]"
            >
               <AboutMe />
            </div>

            {/* ===== More Works ===== */}
            <div
               id="more-works"
               className="more-works my-12 pb-12 rounded-[2rem] bg-white/50 backdrop-blur-md
                          border border-white/80 p-6 md:p-10
                          shadow-[0_10px_40px_rgba(125,211,252,0.2)]"
            >
               <MoreWorks />
            </div>
         </div>
      </div>
   );
};

export default Content;