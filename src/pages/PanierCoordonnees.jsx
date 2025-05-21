import { useState } from "react";
import ProgressionCommande from "../components/Panier/ProgressionCommande";

export default function PanierCoordonnees() {
  const initialFacturation = {
    civilite: "M.",
    prenom: "",
    nom: "",
    fonction: "",
    email: "",
    telephone: "",
    raisonSociale: "",
    adresse: "",
    complementAdresse: "",
    codePostal: "",
    ville: "",
    pays: "France",
    referenceClient: "",
    siret: "",
  };

  const [facturation, setFacturation] = useState(initialFacturation);
  const [error, setError] = useState("");

  const handleFacturationChange = (e) => {
    const { name, value } = e.target;
    setFacturation((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFacturation(initialFacturation);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const champsObligatoires = [
      "prenom",
      "nom",
      "fonction",
      "email",
      "codePostal",
      "ville",
      "raisonSociale",
      "adresse",
      "telephone",
    ];

    for (const champ of champsObligatoires) {
      if (!facturation[champ]) {
        setError(`Le champ ${champ} est obligatoire.`);
        return;
      }
    }

    setError("");
  };

  // Fonction pour formater label (ex: raisonSociale -> Raison sociale)
  const formatLabel = (str) =>
    str.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());

  return (
    <div className="p-4">
      <ProgressionCommande etapeActuelle={2} />
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto p-6 space-y-8 border rounded shadow"
      >
        <h2 className="text-xl font-semibold mb-4">
          Informations de facturation
        </h2>

        {/* Civilité, Prénom, Nom sur la même ligne */}
        <div className="grid grid-cols-3 gap-6 mb-4">
          {/* Civilité */}
          <div className="flex flex-col">
            <label className="mb-1">Civilité</label>
            <select
              name="civilite"
              value={facturation.civilite}
              onChange={handleFacturationChange}
              className="border rounded p-2"
            >
              <option value="M.">M.</option>
              <option value="Mme">Mme</option>
            </select>
          </div>

          {/* Prénom */}
          <div className="flex flex-col">
            <label className="mb-1">
              Prénom<span className="text-red-600 ml-1">*</span>
            </label>
            <input
              type="text"
              name="prenom"
              value={facturation.prenom}
              onChange={handleFacturationChange}
              required
              className="border rounded p-2"
            />
          </div>

          {/* Nom */}
          <div className="flex flex-col">
            <label className="mb-1">
              Nom<span className="text-red-600 ml-1">*</span>
            </label>
            <input
              type="text"
              name="nom"
              value={facturation.nom}
              onChange={handleFacturationChange}
              required
              className="border rounded p-2"
            />
          </div>
        </div>

        {/* Le reste en grille 2 colonnes responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { field: "fonction", required: true },
            { field: "email", required: true, type: "email" },
            { field: "telephone", required: true, type: "tel" },
            { field: "raisonSociale", required: true },
            { field: "adresse", required: true },
            { field: "complementAdresse", required: false },
            { field: "codePostal", required: true },
            { field: "ville", required: true },
          ].map(({ field, required, type }) => (
            <div key={field} className="flex flex-col">
              <label className="mb-1">
                {formatLabel(field)}
                {required && <span className="text-red-600 ml-1">*</span>}
              </label>
              <input
                type={type || "text"}
                name={field}
                value={facturation[field]}
                onChange={handleFacturationChange}
                required={required}
                className="border rounded p-2"
              />
            </div>
          ))}

          {/* Pays - sur 2 colonnes */}
          <div className="md:col-span-2 flex flex-col">
            <label className="mb-1">Pays</label>
            <input
              type="text"
              name="pays"
              value={facturation.pays}
              disabled
              className="border rounded p-2 bg-gray-100"
            />
          </div>
        </div>

        <p className="text-sm text-gray-600 italic">
          *Les champs marqués d'un astérisque doivent obligatoirement être
          remplis
        </p>

        {error && <p className="text-red-600 font-semibold">{error}</p>}

        <div className="flex flex-col md:flex-row justify-between mt-6 space-y-4 md:space-y-0">
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-300 px-6 py-2 rounded hover:bg-gray-400"
          >
            Tout effacer
          </button>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            POURSUIVRE
          </button>
        </div>
      </form>
    </div>
  );
}
