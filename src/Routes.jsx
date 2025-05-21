import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Panier from "./pages/panier";
import Dashboard from "./pages/Dashboard";
import PanierConnexion from "./pages/PanierConnexion";
import PanierCoordonnees from "./pages/PanierCoordonnees";
import Market from "./pages/Market";
import PanierPaiement from "./pages/PanierPaiement";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/panier" element={<Panier />} />
      <Route path="/panier/connexion" element={<PanierConnexion />} />
      <Route path="/panier/coordonnees" element={<PanierCoordonnees />} />
      <Route path="/market" element={<Market />} />
      <Route path="/panier/paiement" element={<PanierPaiement />} />
    </Routes>
  );
};

export default AppRoutes;
