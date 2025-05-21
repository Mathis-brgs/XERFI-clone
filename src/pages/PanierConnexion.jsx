import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProgressionCommande from "../components/Panier/ProgressionCommande";

export default function PanierConnexion() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailExists, setEmailExists] = useState(null);
  const [password, setPassword] = useState("");
  const [inscriptionData, setInscriptionData] = useState({
    nom: "",
    prenom: "",
    fonction: "",
    societe: "",
    telephone: "",
    motdepasse: "",
    confirmation: "",
  });
  const [error, setError] = useState("");

  const checkEmailExists = async (email) => {
    return email.toLowerCase() === "mborges@xerfi.fr";
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailExists(null);
    setPassword("");
    setError("");
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email) {
      setError("Veuillez saisir un email.");
      return;
    }
    const exists = await checkEmailExists(email);
    setEmailExists(exists);
  };

  const handleConnexionSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (password === "") {
      setError("Veuillez entrer votre mot de passe.");
      return;
    }

    // Ici tu appellerais ton API de connexion avec email + password
    navigate("/panier/coordonnees");
  };

  const handleInscriptionSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (
      !inscriptionData.nom ||
      !inscriptionData.prenom ||
      !inscriptionData.fonction ||
      !inscriptionData.societe ||
      !inscriptionData.telephone ||
      !inscriptionData.motdepasse ||
      !inscriptionData.confirmation
    ) {
      setError("Veuillez remplir tous les champs.");
      return;
    }
    if (inscriptionData.motdepasse !== inscriptionData.confirmation) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    navigate("/panier/coordonnees");
  };

  if (emailExists === null) {
    // Phase saisie email initiale
    return (
      <div className="p-4">
        <ProgressionCommande etapeActuelle={1} />
        <div className="border rounded-xl border-black pt-8 pb-16 w-3/4 mx-auto">
          <p className="text-center pb-4">
            Pour poursuivre la navigation, nous vous invitons à vous connecter
            ou à créer un compte Xerfi.
          </p>
          <div className="max-w-md mx-auto mt-8 ">
            <form
              onSubmit={handleEmailSubmit}
              className="space-y-4 flex flex-col"
            >
              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full border rounded p-2"
                  required
                />
              </div>

              {error && <p className="text-red-600">{error}</p>}

              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 uppercase font-bold"
              >
                POURSUIVRE
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (emailExists) {
    // Formulaire connexion
    return (
      <div className="p-4">
        <ProgressionCommande etapeActuelle={1} />
        <div className="border rounded-xl border-black pt-8 pb-16 w-3/4 mx-auto">
          <p className="text-center pb-4">
            Compte trouvé, veuillez entrer votre mot de passe.
          </p>
          <div className="max-w-md mx-auto mt-8 ">
            <form
              onSubmit={handleConnexionSubmit}
              className="space-y-4 flex flex-col"
            >
              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
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
              {error && <p className="text-red-600">{error}</p>}
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 uppercase font-bold"
              >
                SE CONNECTER
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Formulaire inscription
  return (
    <div className="p-4">
      <ProgressionCommande etapeActuelle={1} />
      <div className="border rounded-xl border-black pt-8 pb-16 w-3/4 mx-auto">
        <p className="text-center pb-4">
          Aucun compte trouvé, veuillez créer un compte.
        </p>
        <div className="max-w-md mx-auto mt-8 ">
          <form
            onSubmit={handleInscriptionSubmit}
            className="space-y-4 flex flex-col"
          >
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full border rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Nom</label>
              <input
                type="text"
                value={inscriptionData.nom}
                onChange={(e) =>
                  setInscriptionData({
                    ...inscriptionData,
                    nom: e.target.value,
                  })
                }
                className="w-full border rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Prénom</label>
              <input
                type="text"
                value={inscriptionData.prenom}
                onChange={(e) =>
                  setInscriptionData({
                    ...inscriptionData,
                    prenom: e.target.value,
                  })
                }
                className="w-full border rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Fonction</label>
              <input
                type="text"
                value={inscriptionData.fonction}
                onChange={(e) =>
                  setInscriptionData({
                    ...inscriptionData,
                    fonction: e.target.value,
                  })
                }
                className="w-full border rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Société</label>
              <input
                type="text"
                value={inscriptionData.societe}
                onChange={(e) =>
                  setInscriptionData({
                    ...inscriptionData,
                    societe: e.target.value,
                  })
                }
                className="w-full border rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Téléphone</label>
              <input
                type="tel"
                value={inscriptionData.telephone}
                onChange={(e) =>
                  setInscriptionData({
                    ...inscriptionData,
                    telephone: e.target.value,
                  })
                }
                className="w-full border rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Mot de passe</label>
              <input
                type="password"
                value={inscriptionData.motdepasse}
                onChange={(e) =>
                  setInscriptionData({
                    ...inscriptionData,
                    motdepasse: e.target.value,
                  })
                }
                className="w-full border rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Confirmation mot de passe</label>
              <input
                type="password"
                value={inscriptionData.confirmation}
                onChange={(e) =>
                  setInscriptionData({
                    ...inscriptionData,
                    confirmation: e.target.value,
                  })
                }
                className="w-full border rounded p-2"
                required
              />
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 uppercase font-bold"
            >
              CRÉER MON COMPTE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
