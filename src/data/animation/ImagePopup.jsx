import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";


const ImagePopup = ({ item }) => {
   const [isOpen, setIsOpen] = useState(false);
   const imageRef = useRef(null);
   const bodyRef = useRef(document.body);

   const handleOpen = () => {
      setIsOpen(true);
   };

   const handelClose = () => {
      setIsOpen(false);
   };

   useEffect(() => {
      if (isOpen) {
         const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
         bodyRef.current.style.overflow = "hidden";
         bodyRef.current.style.paddingRight = `${scrollbarWidth}px`;
      } else {
         bodyRef.current.style.overflow = "";
         bodyRef.current.style.paddingRight = "0px";
      }

      return () => {
         bodyRef.current.style.overflow = "";
         bodyRef.current.style.paddingRight = "0px";
      };
   }, [isOpen]);

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (isOpen && imageRef.current && !imageRef.current.contains(event.target)) {
            handelClose();
         }
      };
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
   }, [isOpen]);

   return (
      <>
         <div
            ref={imageRef}
            onClick={handleOpen}
            className="group cursor-pointer relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
         >
            <img
               src={item.img}
               alt="Sample trash"
               className={`${isOpen ? "hidden" : "block"} w-full object-cover transition-opacity duration-300 group-hover:opacity-90`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
               <span className="text-white font-medium text-sm">{item.title}</span>
            </div>
         </div>

         {
            createPortal(
               <AnimatePresence>
                  {isOpen && (
                     <motion.div
                        className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                     >
                        <motion.div
                           className="relative cursor-pointer w-[95%] sm:w-4/5 max-w-3xl"
                           initial={{ scale: 0.8, opacity: 0 }}
                           animate={{ scale: 1, opacity: 1 }}
                           exit={{ scale: 0.8, opacity: 0 }}
                           transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                           <div
                              className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-cover bg-center p-4 sm:p-8"
                              style={{
                                 backgroundImage: `url('/assets/imagesUIUX/imageSampah/dirty-beach-environment-from-plastic-garbage_127090-1070.png')`,
                              }}
                           >
                              <div className="bg-black/60 w-full text-white p-4 sm:p-6 rounded-xl shadow-lg backdrop-blur-sm max-h-[90vh] overflow-y-auto">
                                 <motion.h2
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="text-lg sm:text-xl font-bold mb-2"
                                 >
                                    {item.title}
                                 </motion.h2>

                                 <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                                    className="text-sm sm:text-base leading-relaxed"
                                 >
                                    {item.paragraf}
                                    <span> {item.sumber}</span>
                                 </motion.p>
                              </div>
                           </div>
                        </motion.div>
                     </motion.div>
                  )}
               </AnimatePresence>,
               document.body
            )}

      </>
   );
};

export default ImagePopup;
