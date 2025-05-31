import { motion } from "framer-motion";
import { imagesdata } from "../data";
import { useLocation } from "react-router-dom";
const PortofolioDisplay = () => {
   const location = useLocation().pathname;
   const slug = location.split("/").pop();

   const data = imagesdata.find((item) => item.slug === slug);
   console.log(data.PortofolioDisplay);

   return (
      <motion.div
         className="mb-8 text-justify"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1, delay: 0.8 }}
      >
         <h2 className="text-lg lg:text-2xl font-semibold text-gray-800 mb-4">
            Images
         </h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-auto">
            {data.PortofolioDisplay?.map((item, index) => (
               <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                     key={index}
                     src={item.img}
                     alt={item.title}
                     className="w-full h-full object-cover"
                  />
               </div>
            ))}

         </div>
      </motion.div>
   )
}

export default PortofolioDisplay