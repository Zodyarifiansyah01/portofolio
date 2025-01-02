import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import ModalPopup from "../components/modalPopup";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Contact", link: "#" },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);
  return (
    <div className="container mx-auto">
      <ModalPopup
        className={isMenuOpen ? "block " : "hidden "}
        onClose={handleMenu}
        menuItems={menuItems}
      />
      <Navbar openModal={handleMenu} menuItems={menuItems} />
      <Content />
    </div>
  );
};

export default Home;
