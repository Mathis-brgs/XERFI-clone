import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Panier from "./pages/panier";

import Dashboard from "./pages/Dashboard";
import PanierConnexion from "./pages/PanierConnexion";
import PanierCoordonnees from "./pages/PanierCoordonnees";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/panier/connexion" element={<PanierConnexion />} />
        <Route path="/panier/coordonnees" element={<PanierCoordonnees />} />
      </Routes>
    </BrowserRouter>
  );
}
