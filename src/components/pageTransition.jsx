import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

const PageTransition = () => {
   const location = useLocation();

   useEffect(() => {
      const tl = gsap.timeline({
         onStart: () => (document.body.style.overflow = ""),
         onComplete: () => (document.body.style.overflow = ""),
      });

      const split = new SplitText("#title-page-transition", {
         types: 'chars',
         mask: "chars"
      });

      gsap.set("#page-transition", { yPercent: -100, opacity: 1 });

      if (location.pathname !== "/") {
         tl.to("#page-transition", {
            yPercent: 0,
            duration: 0.6,
            ease: "power1.out",
         })
            .from(split.chars, {
               duration: 1.5,
               autoAlpha: 0,
               x: 20,
               ease: "power3.out",
            }, "-=0.2")
            .to("#page-transition", {
               duration: 0.6,
               yPercent: -100,
               ease: "power1.in",
               delay: 0.5,
            });
      } else {
         tl.set("#page-transition", { yPercent: 0, opacity: 1 })
            .from(split.chars, {
               duration: 1.5,
               autoAlpha: 0,
               x: 20,
               ease: "power3.out",
            })
            .to("#page-transition", {
               duration: 0.6,
               yPercent: -100,
               ease: "power1.in",
               delay: 0.5,
            });
      }

      return () => {
         split.revert();
         tl.kill();
         // document.documentElement.style.overflowY = "scroll";
      };
   }, [location.pathname]);


   return (
      <div
         id="page-transition"
         className="fixed z-50 top-0 left-0 w-full h-full bg-white flex items-center justify-center"
      >
         <p id="title-page-transition" className="text-black text-2xl">
            Arifiansyah
         </p>
      </div>
   );
};

export default PageTransition;
