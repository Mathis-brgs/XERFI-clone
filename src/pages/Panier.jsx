import { useState } from "react";
import ProgressionCommande from "../components/Panier/ProgressionCommande";
import MainPanier from "../components/Panier/MainPanier";
import RecapPanier from "../components/Panier/RecapPanier";

export default function Panier() {
  const [panier, setPanier] = useState([
    {
      id: 1,
      nom: "Le marché et la distribution automobile en Europe",
      prix: 4500,
    },
    { id: 2, nom: "Le marché de l'informatique en Europe", prix: 5000 },
  ]);

  const [postalSelected, postalSetSelected] = useState(false);
  const [diffusionMode, setDiffusionMode] = useState("personnelle");
  const [paiementEffectue, setPaiementEffectue] = useState(false);

  const nombreItems = panier.length;
  const total = panier.reduce((acc, item) => acc + item.prix, 0);
  const fraisPostaux = postalSelected ? nombreItems * 400 : 0;
  const fraisDiffusion = diffusionMode !== "personnelle" ? total : 0;
  const totalAvecFrais = total + fraisPostaux + fraisDiffusion;

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

      <h1 className="text-xl font-bold mb-4 mx-20">
        Votre panier ({nombreItems} {nombreItems > 1 ? "articles" : "article"})
      </h1>

      {panier.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div className="flex mx-16">
          <MainPanier
            panier={panier}
            supprimerArticle={supprimerArticle}
            postalSelected={postalSelected}
            postalSetSelected={postalSetSelected}
            diffusionMode={diffusionMode}
            setDiffusionMode={setDiffusionMode}
            fraisPostaux={fraisPostaux}
            fraisDiffusion={fraisDiffusion}
          />
          <RecapPanier
            total={total}
            fraisPostaux={fraisPostaux}
            fraisDiffusion={fraisDiffusion}
            totalAvecFrais={totalAvecFrais}
            payer={payer}
          />
        </div>
      )}
    </div>
  );
}
