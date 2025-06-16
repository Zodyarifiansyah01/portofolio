import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

const PageTransition = () => {
   const location = useLocation();

   useEffect(() => {
      gsap.killTweensOf("#page-transition");
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
      <div id="page-transition" className="fixed z-50 top-0 left-0 w-full h-full bg-white flex items-center justify-center pointer-events-none">
         <p id='title-page-transition' className="text-black text-2xl">Arifiansyah</p>
      </div>
   );
};

export default PageTransition;



// animasinya kalau back lagi maka mengggunakan animasi yang else , kenapa pas back lagi engga ada animasinya import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { gsap } from "gsap";


// const PageTransition = () => {
//    const location = useLocation();

//    useEffect(() => {
//       gsap.killTweensOf("#page-transition"); // Hentikan animasi sebelumnya
//       const tl = gsap.timeline();
//       tl.clear(); // bersihkan timeline lama sebelum membuat baru

//       if (location.pathname !== "/") {
//          console.log("Current path:", location.pathname);
//          tl.fromTo("#page-transition",
//             { opacity: 1, yPercent: -100 },
//             { opacity: 1, yPercent: 0, duration: 0.5 }
//          );

//          tl.to("#page-transition", {
//             duration: 0.8,
//             delay: 0.5,
//             opacity: 1,
//             yPercent: 0
//          });

//          // Keluar ke atas lagi
//          tl.to("#page-transition", {
//             duration: 0.6,
//             opacity: 1,
//             yPercent: -100
//          });

//       } else {
//          tl.fromTo("#page-transition",
//             { opacity: 1, },
//             { opacity: 1, duration: 0.5 }
//          );

//          tl.to("#page-transition", {
//             duration: 0.8,
//             delay: 0.5,
//             opacity: 1,

//          });

//          // Keluar ke atas lagi
//          tl.to("#page-transition", {
//             duration: 0.6,
//             opacity: 1,
//             yPercent: -100
//          });
//       }
//    }, [location.pathname]);

//    useEffect(() => {
//       gsap.fromTo("#title-page-transition", {
//          duration: 0.5,
//          delay: 0.5,
//          opacity: 0,
//          yPercent: -100
//       }, {
//          duration: 0.5,
//          delay: 0.5,
//          opacity: 1,
//          ease: "power1.out",
//          yPercent: 0
//       });
//    }, [location.pathname]);



//    return (
//       <div id="page-transition" className="fixed z-50 top-0 left-0 w-full h-full bg-white flex items-center justify-center">
//          <p id='title-page-transition' className="text-black text-2xl">Arifiansyah</p>
//       </div>
//    )


// };

// export default PageTransition;