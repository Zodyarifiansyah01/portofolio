import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Content from "../components/Content"
import Footer from "../components/Footer";
import ModalPopup from '../components/ModalPopup';

import { AnimatePresence } from "framer-motion";

import { menuItems } from "../data";

import { SoundProvider } from "../context/SoundContext";

const Home = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   useEffect(() => {
      if (isMenuOpen) {
         document.body.classList.add("overflow-hidden");
      } else {
         document.body.classList.remove("overflow-hidden");
      }

      return () => document.body.classList.remove("overflow-hidden");
   }, [isMenuOpen]);

   return (
      <>
         <SoundProvider>
            <div className={`min-h-screen flex flex-col ${isMenuOpen ? "overflow-hidden" : ""}`}>
               <AnimatePresence>
                  {isMenuOpen && (
                     <ModalPopup
                        onClose={() => setIsMenuOpen(false)}
                        menuItems={menuItems}
                     />
                  )}
               </AnimatePresence>

               <Navbar
                  isMenuOpen={isMenuOpen}
                  onMenuToggle={() => setIsMenuOpen((isOpen) => !isOpen)}
                  menuItems={menuItems}
               />
               <Content />
            </div>
         </SoundProvider>

         <Footer />
      </>
   );
};

export default Home;
