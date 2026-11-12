import { Link, useLocation } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { imagesdata } from "../data";
import AppRoutes from "../routes/routes";
import { ChevronLeft } from "lucide-react";

const CaseWorkTop = () => {
   const location = useLocation().pathname;

   const pathOriginal = location.split("/").slice(1).filter(Boolean);
   const pathDisplay = pathOriginal.map((segment) => segment.replace(/-/g, " "));

   const slug_akhir = pathOriginal[pathOriginal.length - 1];
   const slug = imagesdata.find((item) => item.slug === slug_akhir);

   const handleBack = () => {
      const audio = new Audio("/assets/sound/close.mp3");
      audio.play();
   };

   const handleHover = () => {
      const audio = new Audio("/assets/sound/hover.mp3");
      audio.play();
   };

   return (
      <div className="relative overflow-hidden bg-[#e7e3dc] text-[#171717]">
         <div className="relative container mx-auto flex flex-col items-start px-4 lg:px-6 pt-20 pb-8">
            {/* Tombol kembali */}
            <Link
               to={AppRoutes.home}
               onClick={handleBack}
               onMouseEnter={handleHover}
               className="group mb-5 inline-flex items-center gap-x-1.5 border border-[#171717]/30
                          px-3.5 py-2 text-sm font-medium text-[#171717]/75
                          transition-colors duration-200 hover:border-[#d45d3f] hover:text-[#d45d3f]
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d45d3f]"
            >
               <ChevronLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
               Kembali
            </Link>

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb">
               <ol className="flex flex-wrap items-center gap-x-1.5 text-xs text-[#171717]/55 sm:text-sm">
                  {pathDisplay.map((segment, index) => {
                     const isLast = index === pathDisplay.length - 1;
                     return (
                        <li
                           key={index}
                           className="flex items-center gap-x-1.5 capitalize"
                           aria-current={isLast ? "page" : undefined}
                        >
                           <span
                              className={
                                 isLast
                                    ? "font-semibold uppercase tracking-[0.08em] text-[#d45d3f]"
                                    : "text-[#171717]/55"
                              }
                           >
                              {segment}
                           </span>
                           {!isLast && (
                              <FaAngleRight className="h-3 w-3 text-[#171717]/30" />
                           )}
                        </li>
                     );
                  })}
               </ol>
            </nav>

            {/* Judul dan tag */}
            {slug && (
               <div key={slug.id} className="mt-5 flex flex-col gap-4">
                  <h1 className="font-noto-serif text-4xl leading-[0.95] tracking-[-0.02em] text-[#171717] sm:text-6xl lg:text-7xl">
                     {slug.titleApp}
                  </h1>
                  <div className="flex flex-wrap gap-2">
                     {slug.tagList.map((tag, index) => (
                        <span
                           key={index}
                           className="inline-flex items-center gap-2 rounded-full border border-[#171717]/15 bg-white/35 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#171717]/65 transition-colors duration-300 hover:border-[#d45d3f]/50 hover:bg-[#d45d3f]/10 hover:text-[#d45d3f] sm:text-xs"
                        >
                           {tag}
                        </span>
                     ))}
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default CaseWorkTop;