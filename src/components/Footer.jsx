import React from "react";
import { motion } from "framer-motion"; // Impor motion

const Footer = ({ menuItems }) => {
  return (
    <motion.div
      className="bg-gray-800 text-white py-4 rounded-md"
      initial={{ opacity: 0 }} // Mulai dengan opacity 0
      animate={{ opacity: 1 }} // Animasi menjadi opacity 1
      transition={{ duration: 1 }} // Durasi transisi
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Mulai dengan opacity 0 dan geser ke kiri
            animate={{ opacity: 1, x: 0 }} // Animasi menjadi opacity 1 dan posisi 0
            transition={{ duration: 0.5 }} // Durasi transisi
          >
            <h5 className="text-xl font-semibold mb-2">About Us</h5>
            <p className="text-sm text-justify">
              "I am committed to delivering the best results with a focus on
              quality and innovative solutions that meet user needs, while
              ensuring user satisfaction through dedication and creativity."
            </p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} // Mulai dengan opacity 0 dan geser ke kanan
            animate={{ opacity: 1, x: 0 }} // Animasi menjadi opacity 1 dan posisi 0
            transition={{ duration: 0.5 }}
          >
            <h5 className="text-xl font-semibold mb-2">Quick Links</h5>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="text-sm hover:text-gray-400">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Mulai dengan opacity 0 dan geser ke kiri
            animate={{ opacity: 1, x: 0 }} // Animasi menjadi opacity 1 dan posisi 0
            transition={{ duration: 0.5 }}
          >
            <h5 className="text-xl font-semibold mb-2">Contact</h5>
            <p className="text-sm">Email: zodyarifiansyah01@gmail.com</p>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }} // Mulai dengan opacity 0
          animate={{ opacity: 1 }} // Animasi menjadi opacity 1
          transition={{ duration: 1 }}
        >
          <p className="text-sm">
            &copy; 2025 Arifiansyah. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
