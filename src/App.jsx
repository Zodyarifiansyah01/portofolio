import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailListWork from "./components/works/DetailListWork";
import PageAbout from "./pages/about/pageAbout";
import PageTransition from "./components/pageTransition";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
   const location = useLocation();
   const [showContent, setShowContent] = useState(false);

   useEffect(() => {
      setShowContent(false);
      const timeOut = setTimeout(() => {
         setShowContent(true);
      }, 1000)

      return () => clearTimeout(timeOut);
   }, [location.pathname])
   return (
      <>
         <PageTransition />
         {showContent && <AnimatedRoutes />}
      </>
   );
}

export default App;



const AnimatedRoutes = () => {
   const location = useLocation();

   return (
      <Routes location={location} key={location.pathname}>
         <Route path="/" element={<Home />} />
         <Route path="/Detail-Works/:slug" element={<DetailListWork />} />
         <Route path="/PageAbout" element={<PageAbout />} />
      </Routes>
   );
};