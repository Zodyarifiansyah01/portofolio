import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import ModalPopup from "../components/modalPopup";
import Footer from "../components/Footer";
import { menuItems } from "../data";

const Home = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const handleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };
   useEffect(() => {
      if (isMenuOpen) {
         document.body.style.overflow = "hidden";
      }
   }, [isMenuOpen]);

   return (
      <>
         <div className="min-h-screen flex flex-col">
            <ModalPopup
               className={isMenuOpen ? "block" : "hidden"}
               onClose={handleMenu}
               menuItems={menuItems}
            />
            <Navbar openModal={handleMenu} menuItems={menuItems} />
            <Content isScroll={isMenuOpen} className="flex-grow" />
         </div>
         <Footer menuItems={menuItems} />
      </>
   );
};

export default Home;
