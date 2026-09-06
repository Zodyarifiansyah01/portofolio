import { motion, AnimatePresence } from "framer-motion";
import { imagesdata } from "../data";
import { useEffect, useState } from "react";
import { X, Maximize2 } from "lucide-react";

const PortofolioDisplay = ({ dataId }) => {
   const data = imagesdata.find((item) => item.slug === dataId);
   const [imagefull, setImageFull] = useState(false);
   const [selectedImageIndex, setSelectedImageIndex] = useState(null);

   const images = data?.PortofolioDisplay ?? [];

   const imageClose = () => {
      setImageFull(false);
      setSelectedImageIndex(null);
   };

   const handleClick = (index) => {
      setSelectedImageIndex(index);
      setImageFull(true);
   };

   useEffect(() => {
      const handleKeyDown = (e) => {
         if (e.key === "Escape") imageClose();
      };

      if (imagefull) {
         document.body.style.overflow = "hidden";
         window.addEventListener("keydown", handleKeyDown);
      }

      return () => {
         document.body.style.overflow = "";
         window.removeEventListener("keydown", handleKeyDown);
      };
   }, [imagefull]);

   if (!data) return null;

   return (
      <motion.section
         className="mt-8 mb-4 font-sans"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, delay: 0.2 }}
      >
         <div className="mb-5 flex items-end justify-between gap-4">
            <div>
               <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  Images
               </h2>
            </div>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
               {images.length} {images.length === 1 ? "image" : "images"}
            </span>
         </div>

         <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {images.map((item, index) => (
               <motion.button
                  key={`${item.img}-${index}`}
                  type="button"
                  onClick={() => handleClick(index)}
                  className="group relative h-[220px] overflow-hidden rounded-2xl bg-slate-100 text-left shadow-sm ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                     duration: 0.4,
                     delay: 0.25 + index * 0.06,
                  }}
               >
                  <img
                     src={item.img}
                     alt={item.title || `Portfolio ${index + 1}`}
                     loading="lazy"
                     className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                     <div className="min-w-0">
                        {item.title && (
                           <p className="truncate text-sm font-semibold text-white">
                              {item.title}
                           </p>
                        )}

                        <p className="mt-0.5 text-xs text-white/70">
                           View image
                        </p>
                     </div>

                     <span className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
                        <Maximize2 className="h-4 w-4" />
                     </span>
                  </div>
               </motion.button>
            ))}
         </div>

         <AnimatePresence>
            {imagefull && selectedImageIndex !== null && (
               <motion.div
                  className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={imageClose}
               >
                  <motion.div
                     className="relative flex max-h-[92vh] max-w-6xl items-center justify-center"
                     initial={{ opacity: 0, scale: 0.92, y: 15 }}
                     animate={{ opacity: 1, scale: 1, y: 0 }}
                     exit={{ opacity: 0, scale: 0.92, y: 15 }}
                     transition={{
                        duration: 0.3,
                        ease: "easeOut",
                     }}
                     onClick={(e) => e.stopPropagation()}
                  >
                     <img
                        src={images[selectedImageIndex]?.img}
                        alt={images[selectedImageIndex]?.title}
                        className="max-h-[88vh] max-w-full rounded-2xl object-contain shadow-2xl"
                     />

                     <button
                        type="button"
                        onClick={imageClose}
                        aria-label="Close image"
                        className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-all hover:bg-white hover:text-black"
                     >
                        <X className="h-5 w-5" />
                     </button>

                     {images[selectedImageIndex]?.title && (
                        <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-black/50 px-4 py-3 text-sm text-white backdrop-blur-md">
                           {images[selectedImageIndex].title}
                        </div>
                     )}
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </motion.section>
   );
};

export default PortofolioDisplay;