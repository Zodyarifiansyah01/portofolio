import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailListWork from "./components/works/DetailListWork";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<DetailListWork />} />
    </Routes>
  );
}

export default App;
