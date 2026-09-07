import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useSound } from "../context/SoundContext";

const socials = [
   { handle: "zodyarifiansyah_", href: "https://www.instagram.com/zodyarifiansyah_/" },
   { handle: "abhiprayaui", href: "https://www.instagram.com/abhiprayaui/" },
];

const Navbar = ({ openModal, menuItems }) => {
   const [isDropdownVisible, setIsDropdownVisible] = useState(false);
   const [isMobileOpen, setIsMobileOpen] = useState(false);
   const dropdownRef = useRef(null);
   const { handleHover, handleClick } = useSound();

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownVisible(false);
         }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
   }, []);

   const handleMenuClick = () => {
      setIsMobileOpen((prev) => !prev);
      openModal?.();
   };

   return (
      <motion.nav
         className="sticky top-0 z-30 border-b border-white/10 bg-black/40 backdrop-blur-md"
         initial={{ opacity: 0, y: -12 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, ease: "easeOut" }}
      >
         <div className="container mx-auto flex items-center justify-between px-4 py-5">
            {/* Wordmark */}
            <a href="#" className="group flex items-center gap-2">
               <span className="text-lg font-semibold tracking-tight text-white md:text-xl">
                  Arifiansyah
               </span>
               <span className="h-1.5 w-1.5 rounded-full bg-orange-500 transition-transform duration-300 group-hover:scale-150" />
            </a>

            {/* Desktop links */}
            {/* about */}
            <ul className="hidden items-center gap-8 md:flex">
               {menuItems.map((item, index) => (
                  <li key={index} className="relative">
                     <Link
                        onMouseEnter={handleHover}
                        onClick={handleClick}
                        to={item.link}
                        className="group relative py-1 text-sm text-zinc-300 transition-colors duration-200 hover:text-white"
                     >
                        {item.name}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
                     </Link>
                  </li>
               ))}
            </ul>

            {/* Right cluster */}
            <div className="flex items-center gap-3">
               {/* Instagram dropdown */}
               <div className="relative hidden md:block" ref={dropdownRef}>
                  <button
                     type="button"
                     onClick={() => setIsDropdownVisible((v) => !v)}
                     aria-expanded={isDropdownVisible}
                     aria-label="Instagram links"
                     className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                  >
                     <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                  </button>

                  <AnimatePresence>
                     {isDropdownVisible && (
                        <motion.div
                           initial={{ opacity: 0, y: -8 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, y: -8 }}
                           transition={{ duration: 0.18 }}
                           className="absolute right-0 mt-3 w-56 overflow-hidden rounded-xl border border-white/10 bg-zinc-900 shadow-xl shadow-black/40"
                        >
                           {socials.map((social) => (
                              <a
                                 key={social.handle}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 href={social.href}
                                 className="group flex items-center justify-between px-4 py-3 text-sm text-zinc-200 transition-colors duration-150 hover:bg-white/5 hover:text-white"
                              >
                                 <span>@{social.handle}</span>
                                 <FontAwesomeIcon
                                    icon={faChevronRight}
                                    className="text-xs text-zinc-500 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-orange-500"
                                 />
                              </a>
                           ))}
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>

               {/* Mobile toggle */}
               <button
                  type="button"
                  onClick={handleMenuClick}
                  aria-label={isMobileOpen ? "Close menu" : "Open menu"}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors duration-200 hover:bg-white/10 md:hidden"
               >
                  <FontAwesomeIcon icon={isMobileOpen ? faXmark : faBars} className="text-xl" />
               </button>
            </div>
         </div>
      </motion.nav>
   );
};

export default Navbar;