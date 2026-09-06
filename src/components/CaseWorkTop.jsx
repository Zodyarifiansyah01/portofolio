import { Link, useLocation } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { imagesdata } from "../data";
import AppRoutes from "../routes/routes";
import { ChevronLeft } from 'lucide-react'

const CaseWorkTop = () => {
   const location = useLocation().pathname;

   const pathOriginal = location.split("/").slice(1).filter(Boolean);
   const pathDisplay = pathOriginal.map(segment => segment.replace(/-/g, ' '));

   const slug_akhir = pathOriginal[pathOriginal.length - 1];
   const slug = imagesdata.find((item) => item.slug === slug_akhir);

   const handleBack = () => {
      const audio = new Audio('/assets/sound/close.mp3');
      audio.play();
   }

   const handleHover = () => {
      const audio = new Audio('/assets/sound/hover.mp3');
      audio.play();
   }

   return (
      <div className="bg-[#161616] min-h-[30%]">
         <div className="container mx-auto flex flex-col justify-center items-start h-full px-4 pt-20 pb-8">

            {/* Back button */}
            <Link
               to={AppRoutes.home}
               onClick={handleBack}
               onMouseEnter={handleHover}
               className="group inline-flex items-center gap-x-1.5 text-sm font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 active:scale-95 transition-all duration-200 px-3 py-2 rounded-full mb-5 backdrop-blur-sm"
            >
               <ChevronLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
               Back
            </Link>

            {/* Breadcrumb */}
            <div className="flex items-center flex-wrap gap-x-1.5 text-xs sm:text-sm text-gray-400">
               {pathDisplay.map((segment, index) => {
                  const isLast = index === pathDisplay.length - 1;
                  return (
                     <div key={index} className="flex items-center gap-x-1.5 capitalize">
                        <span className={isLast ? "text-white font-medium" : "text-gray-400"}>
                           {segment}
                        </span>
                        {!isLast && <FaAngleRight className="text-gray-600 w-3 h-3" />}
                     </div>
                  );
               })}
            </div>

            {/* Title & tags */}
            {slug && (
               <div key={slug.id} className="flex flex-col gap-3 mt-5">
                  <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                     {slug.titleApp}
                  </h1>
                  <div className="flex flex-wrap gap-2">
                     {slug.tagList.map((tag, index) => (
                        <span
                           key={index}
                           className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full bg-white/10 text-gray-200 border border-white/10 hover:bg-white/15 transition-colors duration-200"
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