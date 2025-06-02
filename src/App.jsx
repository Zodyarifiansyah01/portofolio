import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailListWork from "./components/works/DetailListWork";
import PageAbout from "./pages/about/pageAbout";

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Detail-Works/:slug" element={<DetailListWork />} />
         <Route path="/PageAbout" element={<PageAbout />} />
      </Routes>
   );
}

export default App;
