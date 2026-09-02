import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
   const containerRef = useRef(null);
   const aboutRef = useRef(null);
   const studyRef = useRef(null);

   useLayoutEffect(() => {
      const context = gsap.context(() => {
         const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

         if (reduceMotion) {
            gsap.set([aboutRef.current, studyRef.current], { clearProps: "all" });
            return;
         }

         gsap.set(studyRef.current, { autoAlpha: 0, y: 32 });

         const timeline = gsap.timeline({
            scrollTrigger: {
               trigger: containerRef.current,
               start: "top top",
               end: "bottom bottom",
               scrub: 0.8,
               pin: ".about-stage",
               anticipatePin: 1,
               invalidateOnRefresh: true,
            },
         });

         timeline
            .to(aboutRef.current, { autoAlpha: 0, y: -32, duration: 0.45, ease: "power2.in" })
            .to(studyRef.current, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" }, "<");
      }, containerRef);

      return () => context.revert();
   }, []);

   return (
      <div ref={containerRef} className="relative min-h-[180vh] w-full overflow-hidden bg-[#e7e3dc] text-[#171717]">
         <div className="about-stage relative flex h-screen items-center justify-center px-6 py-20 md:px-16">
            <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,#17171712_1px,transparent_1px),linear-gradient(to_bottom,#17171712_1px,transparent_1px)] [background-size:5rem_5rem]" />
            <div className="relative w-full max-w-6xl">
               <div className="mb-10 flex items-center justify-between border-b border-[#171717]/30 pb-4 text-xs uppercase tracking-[0.28em]">
                  <span>About / 01</span>
                  <span className="hidden md:inline">Designer & Developer</span>
               </div>

               <section ref={aboutRef} className="absolute inset-0 flex min-h-[22rem] flex-col justify-center">
                  <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#d45d3f]">A little context</p>
                  <h1 className="max-w-4xl font-noto-serif text-5xl leading-[0.95] md:text-8xl">About <em>me</em></h1>
                  <p className="mt-8 max-w-2xl text-lg leading-relaxed md:text-2xl">
                     Saya lulusan Teknik Informatika Universitas Esa Unggul (2023) yang senang mengubah masalah kompleks menjadi pengalaman digital yang sederhana, indah, dan intuitif.
                  </p>
               </section>

               <section ref={studyRef} className="absolute inset-0 flex min-h-[22rem] flex-col justify-center">
                  <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#d45d3f]">The foundation</p>
                  <h2 className="max-w-4xl font-noto-serif text-5xl leading-[0.95] md:text-8xl">Universitas <em>Esa Unggul</em></h2>
                  <p className="mt-8 max-w-2xl text-lg leading-relaxed md:text-2xl">
                     Di sini saya membangun fondasi teknologi, kepemimpinan, dan cara berpikir yang mendukung pekerjaan saya di dunia web dan UI/UX.
                  </p>
               </section>
            </div>
         </div>
      </div>
   );
};

export default About;
