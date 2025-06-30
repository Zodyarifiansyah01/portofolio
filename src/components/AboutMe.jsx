import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
   return (
      <div className="grid grid-cols-12 gap-4 md:p-8" id="about">
         {/* Header Section */}
         <div
            className="col-span-12 md:col-span-4 text-justify"
         >
            <h1 className="font-bold text-2xl md:text-3xl">ABOUT MY</h1>
            <h1 className="font-bold text-2xl md:text-3xl font-noto-serif">
               WORK
            </h1>
         </div>

         <motion.div
            className="col-span-12 md:col-span-8 text-sm md:text-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
         >
            <div className="text-justify">
               {/* Paragraf pertama */}
               <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="mb-4"
               >
                  Saya percaya pada hubungan yang kuat antara desain dan
                  pengalaman pengguna, yang tercapai melalui eksekusi yang
                  hati-hati dan perhatian terhadap detail. Saya senang bekerja
                  dengan proyek-proyek yang menarik dan bermakna, proyek yang
                  benar-benar bisa saya banggakan.
               </motion.p>

               {/* Paragraf kedua */}
               <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
               >
                  Tujuan saya selalu untuk menciptakan antarmuka yang bersih,
                  sempurna pada piksel, dengan animasi yang halus dan lancar.
                  Saya mengutamakan tidak hanya menulis kode yang efisien,
                  tetapi juga memastikan integritas desain dan mengoptimalkan
                  UX/UI untuk pengalaman pengguna yang terbaik.
               </motion.p>
            </div>
         </motion.div>
      </div>
   );
};

export default AboutMe;



// scrub = true adalah untuk membuat animasi berjalan sesuai scroll