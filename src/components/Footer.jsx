import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
   return (
      <footer className="w-full bg-[#e7e3dc] px-4 pb-6 pt-12 text-[#171717] Helvetica-regular">
         <motion.div
            className="container relative mx-auto overflow-hidden border-y border-[#171717]/20 py-8 md:py-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
         >
            {/* Teks besar sebagai watermark */}
            <span
               aria-hidden="true"
               className="pointer-events-none select-none absolute -bottom-[0.18em] left-1/2 -translate-x-1/2
                          text-[26vw] md:text-[18vw] font-noto-serif leading-none tracking-tighter
                          text-[#171717]/[0.06] whitespace-nowrap"
            >
               ZODY
            </span>

            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-10">
               {/* Headline + quote */}
               <div className="md:col-span-7">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#d45d3f] sm:text-sm">
                     ( Contact )
                  </p>
                  <h2 className="font-noto-serif text-4xl leading-[0.95] tracking-[-0.02em] sm:text-6xl md:text-7xl">
                     Punya ide proyek?
                     <br />
                     Mari kita wujudkan.
                  </h2>
               </div>

               <div className="md:col-span-5 flex flex-col justify-end gap-6">
                  <p className="text-sm leading-relaxed text-[#171717]/75 md:text-base">
                     &quot;Saya berkomitmen untuk memberikan hasil terbaik dengan
                     fokus pada kualitas dan solusi inovatif yang memenuhi
                     kebutuhan pengguna, sambil memastikan kepuasan pengguna
                     melalui dedikasi dan kreativitas.&quot;
                  </p>

                  <a
                     href="mailto:zodyarifiansyah01@gmail.com"
                     className="group inline-flex w-fit max-w-full items-center gap-3 border border-[#171717]/30 py-2 pl-4 pr-2 text-sm font-semibold text-[#171717] transition-colors duration-300 hover:border-[#d45d3f] hover:text-[#d45d3f] md:text-base"
                  >
                     <span className="break-all">zodyarifiansyah01@gmail.com</span>
                     <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#d45d3f] text-white transition-transform duration-300 group-hover:rotate-45"
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
                            border-t border-[#171717]/20 pt-6">
               <p className="text-xs text-[#171717]/60 md:text-sm">
                  &copy; 2025 Arifiansyah. All rights reserved.
               </p>
               <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="border border-[#171717]/30 px-4 py-1.5 text-xs font-medium text-[#171717] transition-colors duration-200 hover:border-[#d45d3f] hover:text-[#d45d3f] md:text-sm"
               >
                  Kembali ke atas
               </button>
            </div>
         </motion.div>
      </footer>
   );
};

export default Footer;