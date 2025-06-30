import { motion } from "framer-motion";
import { imagesdata } from "../data";
import { useState } from "react";
import { gsap } from "gsap";
import OverflowBody from "../hooks/overflowBody";

const PortofolioDisplay = ({ dataId }) => {
   const data = imagesdata.find((item) => item.slug === dataId);
   const [imagefull, setImageFull] = useState(false);
   const [selectedImageIndex, setSelectedImageIndex] = useState(null);


   const imageClose = () => {
      setImageFull(false);
   };

   const handleClick = (index) => {
      setSelectedImageIndex(index);
      setImageFull(true);
   };

   OverflowBody({ OverflowBody: imagefull });

   return (
      <motion.div
         className="mt-4 mb-2 Helvetica-regular"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1, delay: 0.8 }}
      >
         <strong className="text-xl">Images</strong>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full mx-auto mt-2">
            {data.PortofolioDisplay?.map((item, index) => (
               <div
                  key={item.img + index}
                  className="overflow-hidden rounded-lg shadow-lg bg-white h-[200px]"
               >
                  <img
                     onClick={() => handleClick(index)}
                     src={item.img}
                     alt={item.title}
                     className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                  />
               </div>
            ))}
         </div>

         {imagefull && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 md:pl-0"
            >
               <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center justify-center"
               >
                  <div className="relative max-w-[900px] max-h-[80vh] w-auto h-auto">
                     <img
                        src={data.PortofolioDisplay[selectedImageIndex]?.img}
                        alt={data.PortofolioDisplay[selectedImageIndex]?.title}
                        className="w-full h-auto rounded-lg object-contain"
                        onClick={(e) => e.stopPropagation()}
                     />
                     <div
                        onClick={imageClose}
                        className="absolute top-2 right-[2%] bg-slate-200 rounded-xl text-black px-3 py-1 cursor-pointer z-10"
                     >
                        x
                     </div>
                  </div>
               </motion.div>
            </motion.div>
         )}


      </motion.div>
   );
};

export default PortofolioDisplay;
