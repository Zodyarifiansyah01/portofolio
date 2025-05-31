import { useLocation } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { imagesdata } from "../data";

const CaseWorkTop = () => {
   const location = useLocation().pathname;

   const pathOriginal = location.split("/").slice(1).filter(Boolean);
   const pathDisplay = pathOriginal.map(segment => segment.replace(/-/g, ' '));

   const slug_akhir = pathOriginal[pathOriginal.length - 1];
   const slug = imagesdata.find((item) => item.slug === slug_akhir);

   return (
      <div className="bg-black h-[30%]">
         <div className="container mx-auto flex flex-col justify-center items-start h-full px-4 pt-20 pb-6">

            <div className="flex items-center gap-x-1">
               {pathDisplay.map((segment, index) => (
                  <div key={index} className="text-white flex items-center gap-x-1 capitalize">
                     <span className={``}>{segment}</span>
                     {index !== pathDisplay.length - 1 && <FaAngleRight />}
                  </div>
               ))}
            </div>

            {slug && (
               <div key={slug.id} className="flex flex-col gap-2 mt-4">
                  <h1 className="text-3xl font-semibold text-white">{slug.titleApp}</h1>
                  <div className="flex flex-wrap gap-2 text-sm font-semibold text-white">
                     {slug.tagList.map((tag, index) => (
                        <span key={index} className="outline-1  outline-gray-300 rounded-full px-2 py-1 text-sm mr-2 mb-2 bg-[#f2f2f2] text-gray-700">
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
