import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailListWork from "./components/works/DetailListWork";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Detail-Works/:slug" element={<DetailListWork />} />
    </Routes>
  );
}

export default App;
