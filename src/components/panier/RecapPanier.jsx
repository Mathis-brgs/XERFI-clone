import { useNavigate, useLocation } from "react-router-dom";
import { useCommande } from "../../contexts/CommandeContext";

export default function RecapPanier() {
  const {
    panier,
    total,
    fraisPostaux,
    fraisDiffusion,
    totalAvecFrais,
    postalSelected,
    diffusionMode,
  } = useCommande();

  const tva = totalAvecFrais * 0.055;
  const location = useLocation();
  const navigate = useNavigate();
  const isPaiementPage = location.pathname === "/panier/paiement";

  return (
    <div className="flex flex-col items-center">
      <div className="font-semibold border py-2 rounded-xl border-black px-4 w-full max-w-md">
        <div className="py-2 mb-6">
          <div className="flex">
            <h5 className="font-semibold">Mes études</h5>
            <span className="text-right flex-auto">{total} €HT</span>
          </div>
          {panier.map((item) => (
            <li key={item.id} className="flex">
              <span className="text-sm">{item.nom}</span>{" "}
            </li>
          ))}
          <div className="flex mt-8">
            <h5 className="font-semibold">Mode de réception</h5>
            <span className="text-right flex-auto">{fraisPostaux} €HT</span>
          </div>
          <p className={"text-xs italic"}>PDF sur xerfi.com</p>
          {postalSelected && (
            <p className={"text-xs italic"}>+ classeur papier</p>
          )}
          <div className="flex mt-8">
            <h5 className="font-semibold">Modalité de diffusion</h5>
            <span className="text-right flex-auto">{fraisDiffusion} €HT</span>
          </div>
          {diffusionMode === "2-5" ? (
            <p className={"text-xs italic"}>Diffusion 2-5 pers.</p>
          ) : (
            <p className={"text-xs italic"}>Utilisation personnelle</p>
          )}
        </div>

        <p className="font-bold border-t border-black pt-4">
          TVA : {tva.toFixed(2)} €HT
        </p>
        <p className="mt-2 font-bold">
          Total HT : {totalAvecFrais.toFixed(2)} €HT
        </p>

        <h3 className="mt-8 pb-2 font-bold">
          MONTANT TOTAL : {(totalAvecFrais + tva).toFixed(2)} €TTC
        </h3>
      </div>

      {isPaiementPage ? (
        <div className="mt-4 w-full max-w-md flex items-center justify-center space-x-6">
          <span className="text-lg font-semibold text-green-700 whitespace-nowrap">
            Paiement sécurisé
          </span>
          <button
            onClick={() => navigate("/panier/connexion")}
            className="bg-blue-600 text-white px-12 py-3 rounded hover:bg-blue-700 uppercase font-bold"
          >
            Payer
          </button>
        </div>
      ) : (
        <div className="mt-4 w-full max-w-md flex justify-center">
          <button
            onClick={() => navigate("/panier/connexion")}
            className="bg-blue-600 text-white px-12 py-3 rounded hover:bg-blue-700 uppercase font-bold"
          >
            Commander
          </button>
        </div>
      )}
    </div>
  );
}
