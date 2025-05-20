import { useState } from "react";
import ProgressionCommande from "../components/Panier/ProgressionCommande";

export default function Panier() {
  const [panier, setPanier] = useState([
    {
      id: 1,
      nom: "Le marché et la distribution automobile en Europe",
      prix: 4500,
    },
    { id: 2, nom: "Le marché de l'informatique en Europe", prix: 5000 },
  ]);

  const [selected, setSelected] = useState(false);

  const [paiementEffectue, setPaiementEffectue] = useState(false);

  const total = panier.reduce((acc, item) => acc + item.prix, 0);

  const supprimerArticle = (id) => {
    setPanier(panier.filter((item) => item.id !== id));
  };

  const payer = () => {
    setPaiementEffectue(true);
  };

  if (paiementEffectue) {
    return (
      <div className="p-4">
        <ProgressionCommande etapeActuelle={4} />
        <h1 className="text-xl font-bold text-green-600">
          Paiement effectué !
        </h1>
        <p>Merci pour votre achat.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <ProgressionCommande etapeActuelle={0} />

      <h1 className="text-xl font-bold mb-4 mx-16">Votre panier</h1>

      {panier.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div className="flex">
          <ul className="border py-2 mx-16 rounded-xl border-black w-1/2">
            {panier.map((item) => (
              <li key={item.id} className="flex justify-between py-2 px-4">
                <span>
                  {item.nom} - {item.prix} €
                </span>
                <button
                  onClick={() => supprimerArticle(item.id)}
                  className="text-red-600 hover:underline"
                >
                  X
                </button>
              </li>
            ))}
            <h4 className="px-4 font-bold pt-8">Mode de réception :</h4>
            <div className="flex flex-col items-start gap-y-4 mt-2">
              <div className="flex items-center gap-x-2 mx-4">
                <button className="w-5 h-5 bg-blue-800 text-white rounded pointer-events-none"></button>

                <p className="text-sm">
                  Disponibilité immédiate de l'étude PDF sur xerfi.com, sauf si
                  l'étude est précommandée
                </p>
              </div>

              <div className="flex items-center gap-x-2 mx-4">
                <button
                  onClick={() => setSelected(!selected)}
                  className={`w-5 h-5 rounded pointer-events-auto text-white ${
                    selected
                      ? "bg-blue-800 border-none"
                      : "bg-transparent border border-black"
                  }`}
                ></button>
                <p className="text-sm">
                  + Réception d'un classeur papier par voie postale
                </p>
              </div>
            </div>
          </ul>

          <div className="mt-4 font-semibold">Total : {total} €HT</div>

          <button
            onClick={payer}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Commmander
          </button>
        </div>
      )}
    </div>
  );
}
