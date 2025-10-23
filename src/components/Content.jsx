// import { motion } from "framer-motion";
// import AboutMe from "./AboutMe";
// import MoreWorks from "./MoreWorks";
// import CircularText from "../data/animation/CircularText";
// import DecryptedText from "../data/animation/DecryptedText";

// const Content = () => {
//    return (
//       <div className="container mx-auto px-4 lg:px-6 Helvetica-regular">
//          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6">
//             <motion.div
//                className="md:col-span-2 flex flex-col justify-between order-last md:order-first space-y-6"
//                initial={{ opacity: 0, x: -50 }}
//                animate={{ opacity: 1, x: 0 }}
//                transition={{ duration: 0.5 }}
//             >
//                <p className="text-sm ">
//                   Lebih banyak pengalaman dan kemampuan saya dapat ditemukan
//                   dalam ringkasan pekerjaan yang telah saya lakukan
//                </p>
//                <h3 className="hidden md:block text-lg font-semibold">
//                   " SENANG BERKENAL DENGAN ANDA "
//                </h3>
//             </motion.div>

//             <motion.div
//                className="md:col-span-10 md:pl-8 lg:pl-16"
//                initial={{ opacity: 0, x: 50 }}
//                animate={{ opacity: 1, x: 0 }}
//                transition={{ duration: 0.5 }}
//             >
//                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-nunito-sans leading-tight">
//                   {/* <DecryptedText
//                      text="HELLO, MY NAME IS"
//                      animateOn="view"
//                      speed={100}
//                      maxIterations={10}
//                      revealDirection="center"
//                   /> */}
//                   <p>HELLO, MY NAME IS</p>

//                   <div className="flex flex-wrap items-center gap-2">
//                      <span className="bg-orange-500 text-black px-2 inline-block">
//                         {/* <DecryptedText
//                            text="ZODY ARIFIANSYAH"
//                            animateOn="view"
//                            speed={100}
//                            maxIterations={20}
//                            revealDirection="center"
//                         /> */}
//                         ZODY ARIFIANSYAH
//                      </span>
//                      <span>
//                         <CircularText
//                            text="2001*2001*2001*"
//                            onHover="speedUp"
//                            spinDuration={20}
//                            className="custom-class hidden md:hidden xl:block"
//                         />
//                      </span>
//                   </div>
//                   <span className="block mt-2">
//                      {/* <DecryptedText
//                         text="FRONT-END WEB DEVELOPER FROM INDONESIA"
//                         animateOn="view"
//                         speed={100}
//                         maxIterations={20}
//                         revealDirection="center"
//                      /> */}
//                      FRONT-END WEB DEVELOPER
//                   </span>
//                </h1>
//             </motion.div>
//          </div>
//          <motion.div
//             className="about-me my-8"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//          >
//             <AboutMe />
//          </motion.div>

//          <motion.div
//             className="more-works my-8"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//          >
//             <MoreWorks />
//          </motion.div>
//       </div>
//    );
// };

// export default Content;

import AboutMe from "./AboutMe";
import MoreWorks from "./MoreWorks";
import CircularText from "../data/animation/CircularText";
import { useEffect } from "react";
import { gsap } from "gsap";


const Content = () => {
   useEffect(() => {
      const tl = gsap.timeline();
      // Masuk dari atas
      gsap.set("#about", { yPercent: -100, opacity: 0 });
      gsap.set("#title", { yPercent: -100, opacity: 0 });

      tl.to("#about", {
         yPercent: 0,
         duration: 1,
         ease: "power1.out",
         opacity: 1,
      });

      tl.to("#title", {
         yPercent: 0,
         duration: 1,
         ease: "power1.out",
         opacity: 1,
         delay: 2

      }, "<0.5");
   }, []);

   return (
      <div className="container mx-auto px-4 lg:px-6 Helvetica-regular">
         <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6">
            <div
               className="md:col-span-2 flex flex-col justify-between order-last md:order-first space-y-6"

            >
               <p className="text-sm " id="about">
                  Lebih banyak pengalaman dan kemampuan saya dapat ditemukan
                  dalam ringkasan pekerjaan yang telah saya lakukan
               </p>
               <h3 className="hidden md:block text-lg font-semibold">
                  " SENANG BERKENAL DENGAN ANDA "
               </h3>
            </div>

            <div
               className="md:col-span-10 md:pl-8 lg:pl-16"
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5 }}
            >
               <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-nunito-sans leading-tight">

                  <p>HELLO, MY NAME IS</p>

                  <div className="flex flex-wrap items-center gap-2">
                     <span className="bg-orange-500 text-black px-2 inline-block">

                        ZODY ARIFIANSYAH
                     </span>
                     <span>
                        <CircularText
                           text="2001*2001*2001*"
                           onHover="speedUp"
                           spinDuration={20}
                           className="custom-class hidden md:hidden xl:block"
                        />
                     </span>
                  </div>
                  <span className="block mt-2">

                     FRONT-END WEB DEVELOPER
                  </span>
               </h1>
            </div>
         </div>
         <div
            className="about-me my-8"
         >
            <AboutMe />
         </div>

         <div
            className="more-works my-8"
         >
            <MoreWorks />
         </div>
      </div>
   );
};

export default Content;

