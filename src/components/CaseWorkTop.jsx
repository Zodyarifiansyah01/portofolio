import { useLocation } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { imagesdata } from "../data";

const CaseWorkTop = () => {
   let location = useLocation().pathname
   const path = location.split("/").slice(1).filter(Boolean);


   console.log(imagesdata, "imagesdata")
   return (
      <>
         <div className="bg-gray-300 h-[30%]">
            <div className="container mx-auto flex flex-col justify-center items-start h-full px-4 pt-20 pb-6">
               <div className="flex items-center gap-x-1">
                  {path.map((segment, index) => (
                     <div key={index} className="text-[#0d0d0d] flex items-center gap-x-1">
                        <span>{segment}</span>{index !== path.length - 1 && (<FaAngleRight />)}
                     </div>
                  ))}
               </div>
               <div>
                  {
                     imagesdata.map((item) => (
                        item.slug === path[1] && (
                           <div key={item.id} className="flex flex-col gap-2 mt-4">
                              <h1 className="text-3xl font-semibold text-[#0d0d0d]">{item.titleApp}</h1>
                              <div>
                                 {item.tagList.map((tag, index) => (
                                    <span key={index} className="outline-1 flex-wrap outline-gray-300 rounded-full px-2 py-1 text-sm mr-2 mb-2 bg-gray-100 text-gray-700">
                                       {tag}
                                    </span>
                                 ))}
                              </div>
                           </div>
                        )
                     ))
                  }
               </div>
            </div>
         </div>
      </>
   )
}

export default CaseWorkTop;