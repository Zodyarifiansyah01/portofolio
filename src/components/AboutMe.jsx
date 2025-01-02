import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-12 md:p-8">
      <motion.div
        className="text-3xl md:text-5xl col-span-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-bold">ABOUT MY</h1>
        <h1 className="font-bold font-noto-serif">WORK</h1>
      </motion.div>
      <motion.div
        className="col-span-8 text-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            I believe in the strong connection between design and user
            experience, achieved through careful execution and attention to
            detail. I thrive on working with projects that are both engaging and
            meaningful, ones that I can truly take pride in.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            My goal is always to create clean, pixel-perfect interfaces with
            smooth and fluid animations. I prioritize not only writing efficient
            code but also ensuring design integrity and optimizing UX/UI for the
            best possible user experience.
          </motion.p>
          <motion.a
            className="mt-8 inline-flex items-center text-white group "
            href=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <span className="group-hover:text-gray-400">READ MORE</span>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-2 text-white group-hover:text-gray-400"
            />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
