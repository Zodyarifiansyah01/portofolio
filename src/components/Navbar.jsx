import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Navbar = ({ openModal, menuItems }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <motion.nav
      className="py-8 px-4 flex justify-between items-center "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex gap-10 items-center"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-orange-500 w-fit px-4 py-2 rounded-full text-white shadow-md ">
          <h2 className="text-sm md:text-xl font-semibold">Arifiansyah</h2>
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-6 text-white">
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex gap-4 items-center"
      >
        <div>
          <FontAwesomeIcon
            icon={faBars}
            onClick={openModal}
            className="text-white text-3xl flex items-center gap-4 z-20 md:hidden"
          />
        </div>
        <div
          className="relative group h-8 hidden md:block"
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          <a href="#" className="hover:text-gray-300 transition duration-300">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white text-3xl"
            />
          </a>
          {isDropdownVisible && (
            <motion.div
              className="flex flex-col gap-4 absolute top-full mt-2 bg-white rounded-lg shadow-lg"
              id="media-social"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://www.instagram.com/zodyarifiansyah_/"
                className="py-2 px-4 text-black hover:text-gray-700 transition duration-300"
              >
                Zodyarifiansyah
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://www.instagram.com/abhiprayaui/"
                className="py-2 px-4 text-black hover:text-gray-700 transition duration-300"
              >
                abhiprayaui
              </motion.a>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
