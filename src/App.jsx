import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Panier from "./pages/panier";

import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/panier" element={<Panier />} />
      </Routes>
    </BrowserRouter>
  );
}
