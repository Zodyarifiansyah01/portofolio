import "./index.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import DetailListWork from "./components/works/DetailListWork";
import PageAbout from "./pages/about/pageAbout";
import PageTransition from "./components/pageTransition";
import AppRoutes from "./routes/routes";

function App() {
   const location = useLocation();

   return (
      <>
         <PageTransition />
         <main>
            <Routes location={location} key={location.pathname}>
               <Route path={AppRoutes.home} element={<Home />} />
               <Route path={AppRoutes.detailWorks} element={<DetailListWork />} />
               <Route path={AppRoutes.pageAbout} element={<PageAbout />} />
            </Routes>
         </main>
      </>
   );
}

export default App;