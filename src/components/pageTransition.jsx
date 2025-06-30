import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

const PageTransition = () => {
   const location = useLocation();

   useEffect(() => {

      const tl = gsap.timeline();
      tl.clear();

      // Set posisi awal animasi tergantung path
      if (location.pathname !== "/") {
         // Masuk dari atas
         gsap.set("#page-transition", { yPercent: -100, opacity: 1 });

         tl.to("#page-transition", {
            yPercent: 0,
            duration: 0.5,
            ease: "power1.out"
         });

         tl.to("#page-transition", {
            duration: 0.8,
            delay: 0.5,
            opacity: 1
         });

         // Keluar ke atas lagi
         tl.to("#page-transition", {
            duration: 0.6,
            yPercent: -100,
            ease: "power1.in"
         });

      } else {
         // Masuk dari bawah
         gsap.set("#page-transition", { yPercent: 0, opacity: 1 });

         tl.to("#page-transition", {
            yPercent: 0,
            duration: 0.5,
            ease: "power1.out"
         });

         tl.to("#page-transition", {
            duration: 0.8,
            delay: 0.5,
            opacity: 1
         });

         // Keluar ke bawah
         tl.to("#page-transition", {
            duration: 0.6,
            yPercent: -100,
            ease: "power1.in"
         });
      }

   }, [location.pathname]);

   useEffect(() => {
      gsap.fromTo("#title-page-transition",
         {
            opacity: 0,
            yPercent: -100
         },
         {
            opacity: 1,
            yPercent: 0,
            duration: 0.5,
            delay: 0.5,
            ease: "power1.out"
         }
      );
   }, [location.pathname]);

   return (
      <div id="page-transition" className="fixed z-50 top-0 left-0 w-full h-full bg-white flex items-center justify-center">
         <p id='title-page-transition' className="text-black text-2xl">Arifiansyah</p>
      </div>
   );
};

export default PageTransition;
