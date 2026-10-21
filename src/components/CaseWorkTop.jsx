import { Link, useLocation } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { imagesdata } from "../data";
import AppRoutes from "../routes/routes";
import { ChevronLeft } from "lucide-react";

// Warna pastel bergantian untuk tag
const tagTones = [
   "bg-rose-100 text-rose-600 border-rose-200",
   "bg-violet-100 text-violet-600 border-violet-200",
   "bg-sky-100 text-sky-600 border-sky-200",
   "bg-emerald-100 text-emerald-600 border-emerald-200",
   "bg-amber-100 text-amber-600 border-amber-200",
];

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
      <div className="relative overflow-hidden bg-gradient-to-br from-[#fdf2f8] via-[#f5f3ff] to-[#f0f9ff]">
         {/* Blob pastel samar */}
         <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-rose-200/40 blur-3xl" />
         <div className="pointer-events-none absolute -top-16 right-0 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />

         <div className="relative container mx-auto flex flex-col items-start px-4 lg:px-6 pt-20 pb-8">
            {/* Tombol kembali */}
            <Link
               to={AppRoutes.home}
               onClick={handleBack}
               onMouseEnter={handleHover}
               className="group inline-flex items-center gap-x-1.5 rounded-full border border-slate-200
                          bg-white/80 px-3.5 py-2 mb-5 text-sm font-medium text-slate-600 shadow-sm
                          backdrop-blur-sm transition-all duration-200
                          hover:border-violet-300 hover:text-violet-500 active:scale-95
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
            >
               <ChevronLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
               Kembali
            </Link>

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb">
               <ol className="flex flex-wrap items-center gap-x-1.5 text-xs sm:text-sm text-slate-500">
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
                                    ? "font-semibold text-violet-500"
                                    : "text-slate-500"
                              }
                           >
                              {segment}
                           </span>
                           {!isLast && (
                              <FaAngleRight className="h-3 w-3 text-slate-300" />
                           )}
                        </li>
                     );
                  })}
               </ol>
            </nav>

            {/* Judul dan tag */}
            {slug && (
               <div key={slug.id} className="mt-5 flex flex-col gap-4">
                  <h1 className="font-nunito-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-800">
                     {slug.titleApp}
                  </h1>
                  <div className="flex flex-wrap gap-2">
                     {slug.tagList.map((tag, index) => (
                        <span
                           key={index}
                           className={`rounded-full border px-3.5 py-1 text-xs sm:text-sm font-medium
                                       transition-transform duration-200 hover:-translate-y-0.5
                                       ${tagTones[index % tagTones.length]}`}
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