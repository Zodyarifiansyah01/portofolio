import React from "react";
import { motion } from "framer-motion";
import AboutMe from "./AboutMe";
import MoreWorks from "./MoreWorks";

const Content = () => {
  return (
    <div className="container mx-auto px-4 lg:px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6">
        <motion.div
          className="md:col-span-2 flex flex-col justify-between order-last md:order-first space-y-6"
          // initial itu apa yang terjadi sebelum animasi dimulai
          // animate itu apa yang terjadi ketika animasi dimulai
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm md:text-base">
            More of my experience and abilities in the summary of the work I
            have done
          </p>
          <h3 className="hidden md:block text-lg font-semibold">
            " NICE TO MEET YOU "
          </h3>
        </motion.div>
        <motion.div
          className="md:col-span-10 md:pl-8 lg:pl-16"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-nunito-sans leading-tight">
            HELLO, MY NAME IS
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-orange-500 text-black px-2 inline-block">
                ZODY ARIFIANSYAH
              </span>
              <span className="text-base font-thin">2001</span>
            </div>
            <span className="block mt-2">
              FRONT-END WEB DEVELOPER FROM INDONESIA
            </span>
          </h1>
        </motion.div>
      </div>
      <div className="about-me my-8">
        <AboutMe />
      </div>
      <div className="more-works my-8">
        <MoreWorks />
      </div>
    </div>
  );
};

export default Content;
