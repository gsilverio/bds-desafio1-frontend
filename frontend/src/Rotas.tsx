import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Catalogo from "./pages/Catalogo";
import Home from "./pages/Home";

const Rotas = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Catalogo />} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;
