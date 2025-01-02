import { useEffect } from "react";
import { motion } from "framer-motion";

const ModalPopup = ({ onClose, menuItems, className }) => {
  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
      onClick={handleCloseModal}
      className={`modal fixed inset-0 bg-slate-500 bg-opacity-50 flex justify-center items-center z-10 ${className}`}
    >
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        exit={{ y: -50 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg"
      >
        <ul className="flex gap-6 text-black">
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
      </motion.div>
    </motion.div>
  );
};

export default ModalPopup;
