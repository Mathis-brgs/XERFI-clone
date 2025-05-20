import { useNavigate } from "react-router-dom";

const etapes = [
  { label: "PANIER", path: "/panier" },
  { label: "CONNEXION", path: "/panier/connexion" },
  { label: "COORDONNÉES", path: "/panier/coordonnees" },
  { label: "PAIEMENT", path: "/panier/paiement" },
  { label: "VALIDATION", path: "/panier/validation" },
];

export default function ProgressionCommande({ etapeActuelle }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center space-x-4 mb-6">
      {etapes.map((etape, index) => {
        const estActive = index <= etapeActuelle;
        const estCliquable = index < etapeActuelle;

        const baseStyle = `px-8 py-2 text-m font-bold`;
        const activeStyle = estActive
          ? "bg-blue-600 text-white"
          : "bg-gray-200 text-gray-600";
        const clickableStyle = estCliquable
          ? "cursor-pointer hover:underline"
          : "cursor-default";

        return (
          <div
            key={etape.label}
            className={`${baseStyle} ${activeStyle} ${clickableStyle}`}
            onClick={() => {
              if (estCliquable) {
                navigate(etape.path);
              }
            }}
          >
            {etape.label}
          </div>
        );
      })}
    </div>
  );
}
