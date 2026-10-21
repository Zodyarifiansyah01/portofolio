import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
   return (
      <footer className="w-full bg-slate-50 px-4 pb-6 pt-12 Helvetica-regular">
         <motion.div
            className="container relative mx-auto overflow-hidden rounded-[2.5rem] p-8 md:p-14
                       bg-gradient-to-br from-rose-200 via-violet-200 to-sky-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
         >
            {/* Teks besar sebagai watermark */}
            <span
               aria-hidden="true"
               className="pointer-events-none select-none absolute -bottom-[0.18em] left-1/2 -translate-x-1/2
                          text-[26vw] md:text-[18vw] font-extrabold leading-none tracking-tighter
                          text-white/40 whitespace-nowrap"
            >
               ZODY
            </span>

            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-10">
               {/* Headline + quote */}
               <div className="md:col-span-7">
                  <p className="text-sm font-medium text-violet-600/80 mb-4">
                     ( Contact )
                  </p>
                  <h2 className="font-nunito-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-slate-800">
                     Punya ide proyek?
                     <br />
                     Mari kita wujudkan.
                  </h2>
               </div>

               <div className="md:col-span-5 flex flex-col justify-end gap-6">
                  <p className="text-sm md:text-base leading-relaxed text-slate-700">
                     &quot;Saya berkomitmen untuk memberikan hasil terbaik dengan
                     fokus pada kualitas dan solusi inovatif yang memenuhi
                     kebutuhan pengguna, sambil memastikan kepuasan pengguna
                     melalui dedikasi dan kreativitas.&quot;
                  </p>

                  <a
                     href="mailto:zodyarifiansyah01@gmail.com"
                     className="group inline-flex w-fit max-w-full items-center gap-3 rounded-full
                                bg-white pl-6 pr-2 py-2 text-sm md:text-base font-semibold text-slate-800
                                shadow-sm hover:bg-slate-800 hover:text-white transition-colors duration-300"
                  >
                     <span className="break-all">zodyarifiansyah01@gmail.com</span>
                     <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                                   bg-violet-300 text-slate-800 transition-transform duration-300
                                   group-hover:rotate-45"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-4 w-4"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                           strokeWidth={2.5}
                        >
                           <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
                        </svg>
                     </span>
                  </a>
               </div>
            </div>

            {/* Baris bawah */}
            <div className="relative mt-24 md:mt-32 flex flex-col sm:flex-row items-center justify-between gap-4
                            pt-6 border-t border-white/70">
               <p className="text-xs md:text-sm text-slate-700">
                  &copy; 2025 Arifiansyah. All rights reserved.
               </p>
               <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="rounded-full bg-white/70 px-4 py-1.5 text-xs md:text-sm font-medium text-slate-700
                             hover:bg-white transition-colors duration-200"
               >
                  Kembali ke atas
               </button>
            </div>
         </motion.div>
      </footer>
   );
};

export default Footer;