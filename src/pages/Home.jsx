import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Content from "../components/Content"
import Footer from "../components/Footer";
import ModalPopup from '../components/ModalPopup';

import { menuItems } from "../data";

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
         <div className={`min-h-screen flex flex-col ${isMenuOpen ? "overflow-hidden" : ""}`}>

            <ModalPopup
               className={isMenuOpen ? "block" : "hidden"}
               onClose={handleMenu}
               menuItems={menuItems}
            />
            <Navbar openModal={handleMenu} menuItems={menuItems} />
            <Content isScroll={isMenuOpen} />
         </div>
         <Footer menuItems={menuItems} />
      </>
   );
};

export default Home;
