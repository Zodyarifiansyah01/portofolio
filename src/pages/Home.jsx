import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Content from "../components/Content"
import Footer from "../components/Footer";
import ModalPopup from '../components/ModalPopup';

import { AnimatePresence } from "framer-motion";

import { menuItems } from "../data";

import { SoundProvider } from "../context/SoundContext";

const Home = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const handleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };
   useEffect(() => {
      if (isMenuOpen) {
         document.body.classList.add('overflow-hidden');
      } else {
         document.body.classList.remove('overflow-hidden');
      }
   }, [isMenuOpen]);

   return (
      <>
         <SoundProvider>
            <div className={`min-h-screen flex flex-col ${isMenuOpen ? "overflow-hidden" : ""}`}>

               <AnimatePresence>

                  {isMenuOpen && (
                     <ModalPopup
                        onClose={handleMenu}
                        menuItems={menuItems}
                     />
                  )}
               </AnimatePresence>

               <Navbar openModal={handleMenu} menuItems={menuItems} />
               <Content isScroll={isMenuOpen} />
            </div>
         </SoundProvider>

         <Footer menuItems={menuItems} />
      </>
   );
};

export default Home;
