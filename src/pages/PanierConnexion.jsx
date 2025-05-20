import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProgressionCommande from "../components/Panier/ProgressionCommande";

export default function PanierConnexion() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleConnexion = (e) => {
    e.preventDefault();

    navigate("/panier/coordonnees");
  };

  return (
    <div className="p-4">
      <ProgressionCommande etapeActuelle={1} />
      <div className="max-w-md mx-auto mt-8">
        <form onSubmit={handleConnexion} className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 uppercase font-bold"
          >
            Se connecter et continuer
          </button>
        </form>

        <div className="mt-4">
          <button
            onClick={() => navigate("/panier")}
            className="text-blue-600 underline"
          >
            Retour au panier
          </button>
        </div>
      </div>
    </div>
  );
}
