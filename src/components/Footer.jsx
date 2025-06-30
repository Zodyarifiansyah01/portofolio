import React from "react";
import { motion } from "framer-motion"; // Impor motion

const Footer = ({ menuItems = [] }) => {
   return (
      <motion.div
         className=" text-white py-8 rounded-lg shadow-xl mt-32"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1 }}
      >
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
               {/* About Us Section */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="md:col-span-3 border-t  border-gray-400"
               >
                  <h5 className="text-sm mb-4 text-gray-400 mt-8">( About Us )</h5>
                  <p className="text-white font-semibold text-base leading-relaxed">
                     "Saya berkomitmen untuk memberikan hasil terbaik dengan
                     fokus pada kualitas dan solusi inovatif yang memenuhi
                     kebutuhan pengguna, sambil memastikan kepuasan pengguna
                     melalui dedikasi dan kreativitas."
                  </p>
               </motion.div>




               {/* Contact Section */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="border-t border-gray-200"
               >
                  <h5 className="text-sm mb-4 text-gray-400 mt-8">( Contact )</h5>
                  <p className="text-white font-semibold text-base leading-relaxed break-words">
                     zodyarifiansyah01@gmail.com
                  </p>
               </motion.div>
            </div>


            <motion.div
               className="mt-52 text-center"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.8 }}
            >
               <p className="text-gray-500 text-xs md:text-sm">
                  &copy; 2025 Arifiansyah. All rights reserved.
               </p>
            </motion.div>
         </div>
      </motion.div>
   );
};

export default Footer;













// const Footer = ({ menuItems = [] }) => {
//    return (
//       <motion.div
//          className="bg-gradient-to-b from-black from-10% via-gray-500 via-40% to-white to-88% text-white py-8 rounded-lg shadow-xl"
//          initial={{ opacity: 0 }}
//          animate={{ opacity: 1 }}
//          transition={{ duration: 1 }}
//       >
//          <div className="container mx-auto px-4">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-40">
//                {/* About Us Section */}
//                <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                >
//                   <h5 className="text-xl font-bold mb-4 text-white">About Us</h5>
//                   <p className="text-white text-sm leading-relaxed">
//                      "Saya berkomitmen untuk memberikan hasil terbaik dengan
//                      fokus pada kualitas dan solusi inovatif yang memenuhi
//                      kebutuhan pengguna, sambil memastikan kepuasan pengguna
//                      melalui dedikasi dan kreativitas."
//                   </p>
//                </motion.div>

//                {/* Quick Links Section */}
//                <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.4 }}
//                   aria-label="Quick Links"
//                   role="navigation"
//                >
//                   <h5 className="text-xl font-bold mb-4 text-white">Quick Links</h5>
//                   <ul className="space-y-3">
//                      {menuItems.map((item) => (
//                         <li key={item.name}>
//                            <a
//                               href={item.link}
//                               className="text-white hover:text-gray-900 transition-colors text-sm flex items-center gap-2"
//                            >
//                               <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
//                               {item.name}
//                            </a>
//                         </li>
//                      ))}
//                   </ul>
//                </motion.div>

//                {/* Contact Section */}
//                <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.6 }}
//                >
//                   <h5 className="text-xl font-bold mb-4 text-white">Contact</h5>
//                   <p className="text-white text-sm flex items-center gap-2">
//                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                      </svg>
//                      zodyarifiansyah01@gmail.com
//                   </p>
//                </motion.div>
//             </div>

//             <motion.div
//                className="mt-12 pt-6 border-t border-gray-200 text-center"
//                initial={{ opacity: 0 }}
//                animate={{ opacity: 1 }}
//                transition={{ duration: 1, delay: 0.8 }}
//             >
//                <p className="text-gray-500 text-xs md:text-sm">
//                   &copy; 2025 Arifiansyah. All rights reserved.
//                </p>
//             </motion.div>
//          </div>
//       </motion.div>
//    );
// };

// export default Footer;