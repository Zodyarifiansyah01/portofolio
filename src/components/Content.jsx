import { motion } from "framer-motion";
import AboutMe from "./AboutMe";
import MoreWorks from "./MoreWorks";
import CircularText from "../data/animation/CircularText";
import DecryptedText from "../data/animation/DecryptedText";

const Content = () => {
   return (
      <div className="container mx-auto px-4 lg:px-6">
         <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6">
            <motion.div
               className="md:col-span-2 flex flex-col justify-between order-last md:order-first space-y-6"
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5 }}
            >
               <p className="text-sm md:text-base">
                  Lebih banyak pengalaman dan kemampuan saya dapat ditemukan
                  dalam ringkasan pekerjaan yang telah saya lakukan
               </p>
               <h3 className="hidden md:block text-lg font-semibold">
                  " SENANG BERKENAL DENGAN ANDA "
               </h3>
            </motion.div>

            <motion.div
               className="md:col-span-10 md:pl-8 lg:pl-16"
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5 }}
            >
               <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-nunito-sans leading-tight">
                  <DecryptedText
                     text="HELLO, MY NAME IS"
                     animateOn="view"
                     speed={100}
                     maxIterations={10}
                     revealDirection="center"
                  />

                  <div className="flex flex-wrap items-center gap-2">
                     <span className="bg-orange-500 text-black px-2 inline-block">
                        <DecryptedText
                           text="ZODY ARIFIANSYAH"
                           animateOn="view"
                           speed={100}
                           maxIterations={20}
                           revealDirection="center"
                        />
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
                     <DecryptedText
                        text="FRONT-END WEB DEVELOPER FROM INDONESIA"
                        animateOn="view"
                        speed={100}
                        maxIterations={20}
                        revealDirection="center"
                     />
                  </span>
               </h1>
            </motion.div>
         </div>
         <motion.div
            className="about-me my-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
         >
            <AboutMe />
         </motion.div>

         <motion.div
            className="more-works my-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
         >
            <MoreWorks />
         </motion.div>
      </div>
   );
};

export default Content;
