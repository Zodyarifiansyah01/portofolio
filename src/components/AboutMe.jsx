import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-12 gap-4 md:p-8" id="about">
      {/* Header Section */}
      <motion.div
        className="col-span-12 md:col-span-4 text-justify"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-bold text-2xl md:text-3xl">ABOUT MY</h1>
        <h1 className="font-bold text-2xl md:text-3xl font-noto-serif">WORK</h1>
      </motion.div>

      <motion.div
        className="col-span-12 md:col-span-8 text-sm"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-justify">
          {/* First paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mb-4"
          >
            I believe in the strong connection between design and user
            experience, achieved through careful execution and attention to
            detail. I thrive on working with projects that are both engaging and
            meaningful, ones that I can truly take pride in.
          </motion.p>

          {/* Second paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            My goal is always to create clean, pixel-perfect interfaces with
            smooth and fluid animations. I prioritize not only writing efficient
            code but also ensuring design integrity and optimizing UX/UI for the
            best possible user experience.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
