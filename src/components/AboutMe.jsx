import React, { useEffect } from "react";
import { gsap } from "gsap";

const AboutMe = () => {
   useEffect(() => {
      const tl = gsap.timeline();
      tl.fromTo('#paragraf-1', { y: 50, opacity: 0 }, {
         y: 0, delay: 2.5, opacity: 1, duration: 1, ease: "power2.out"
      });

      tl.fromTo('#paragraf-2', { y: 50, opacity: 0 }, {
         y: 0, opacity: 1, duration: 1, ease: "power2.out"
      }, "-=0.5");

   }, []);
   return (
      <div className="grid grid-cols-12 gap-4 md:p-8" id="about">
         {/* Header Section */}
         <div
            className="col-span-12 md:col-span-4 text-justify"
         >
            <h1 className="font-bold text-2xl md:text-3xl about-me" >ABOUT MY</h1>
            <h1 className="font-bold text-2xl md:text-3xl font-noto-serif">
               WORK
            </h1>
         </div>

         <div className="col-span-12 md:col-span-8 text-sm md:text-lg">
            <div className="text-justify">
               <p id="paragraf-1" className="mb-4" >
                  Saya percaya pada hubungan yang kuat antara desain dan
                  pengalaman pengguna, yang tercapai melalui eksekusi yang
                  hati-hati dan perhatian terhadap detail. Saya senang bekerja
                  dengan proyek-proyek yang menarik dan bermakna, proyek yang
                  benar-benar bisa saya banggakan.
               </p>

               <p id="paragraf-2">
                  Tujuan saya selalu untuk menciptakan antarmuka yang bersih,
                  sempurna pada piksel, dengan animasi yang halus dan lancar.
                  Saya mengutamakan tidak hanya menulis kode yang efisien,
                  tetapi juga memastikan integritas desain dan mengoptimalkan
                  UX/UI untuk pengalaman pengguna yang terbaik.
               </p>
            </div>
         </div>
      </div>
   );
};

export default AboutMe;



// scrub = true adalah untuk membuat animasi berjalan sesuai scroll