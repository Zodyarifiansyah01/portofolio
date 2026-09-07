import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useSound } from "../context/SoundContext";

const overlayVariants = {
   hidden: { opacity: 0 },
   visible: { opacity: 1, transition: { duration: 0.3 } },
   exit: { opacity: 0, transition: { duration: 0.2 } },
};

const drawerVariants = {
   hidden: { x: "-100%" },
   visible: {
      x: 0,
      transition: {
         type: "spring",
         stiffness: 300,
         damping: 30,
         when: "beforeChildren",
         staggerChildren: 0.05,
      },
   },
   exit: {
      x: "-100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
   },
};

const itemVariants = {
   hidden: { opacity: 0, x: -20 },
   visible: { opacity: 1, x: 0 },
};

const ModalPopup = ({ onClose, menuItems = [] }) => {
   const { handleClick } = useSound();

   const handleCloseModal = (e) => {
      if (e.target === e.currentTarget) {
         onClose();
      }
   };

   const handleMenuClick = () => {
      onClose();
   };

   return (
      <motion.div
         variants={overlayVariants}
         initial="hidden"
         animate="visible"
         exit="exit"
         onClick={handleCloseModal}
         className="fixed inset-0 z-40 bg-slate-500 bg-opacity-50"
      >
         <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white h-full w-[300px] p-6 shadow-lg"
         >
            <ul className="flex flex-col gap-2 text-black">
               {menuItems.map((item, index) => (
                  <motion.li
                     key={index}
                     variants={itemVariants}
                     whileHover={{ scale: 1.05, x: 4 }}
                     whileTap={{ scale: 0.95 }}
                     transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                     <Link
                        to={item.link}
                        onClick={() => {
                           handleClick();
                           handleMenuClick();
                        }}
                        className="hover:text-gray-300 transition duration-300"
                     >
                        {item.name}
                     </Link>
                  </motion.li>
               ))}
            </ul>
         </motion.div>
      </motion.div>
   );
};

export default ModalPopup;