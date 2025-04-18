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
         className={`fixed inset-0 bg-slate-500 bg-opacity-50 z-10 ${className}`}
      >
         <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white h-full w-[300px] p-6 overflow-y-auto shadow-lg"
         >
            <ul className="flex flex-col gap-2 text-black">
               {menuItems.map((item, index) => (
                  <motion.li
                     key={index}
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     transition={{ type: "spring", stiffness: 300 }}
                  >
                     <a
                        href={item.link}
                        onClick={handleCloseModal}
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
