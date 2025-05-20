const etapes = ["PANIER", "CONNEXION", "COORDONNÉES", "PAIEMENT", "VALIDATION"];

export default function ProgressionCommande({ etapeActuelle }) {
  return (
    <div className="flex justify-center space-x-4 mb-6">
      {etapes.map((etape, index) => {
        const estActive = index <= etapeActuelle;

        return (
          <div
            key={etape}
            className={`px-10 py-4 text-m font-bold
              ${
                estActive
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }
            `}
          >
            {etape}
          </div>
        );
      })}
    </div>
  );
}
