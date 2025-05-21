import { useCommande } from "../contexts/CommandeContext";
import ProgressionCommande from "../components/Panier/ProgressionCommande";
import MainPanier from "../components/Panier/MainPanier";
import RecapPanier from "../components/Panier/RecapPanier";

export default function PanierPaiement() {
  const {
    panier,
    nombreItems,
    total,
    fraisPostaux,
    fraisDiffusion,
    totalAvecFrais,
    postalSelected,
    setPostalSelected,
    diffusionMode,
    setDiffusionMode,
  } = useCommande();

  return (
    <div className="container mx-auto p-4">
      <ProgressionCommande etapeActuelle={3} />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3">
        {panier.length === 0 ? (
          <div className="lg:col-span-3 text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Votre panier est vide.</h2>
          </div>
        ) : (
          <>
            <div className="lg:col-span-2">
              {/* <MainPanier panier={panier} supprimerArticle={supprimerArticle} /> */}
            </div>
            <div className="lg:col-span-1">
              <RecapPanier
                nombreItems={nombreItems}
                total={total}
                fraisPostaux={fraisPostaux}
                fraisDiffusion={fraisDiffusion}
                totalAvecFrais={totalAvecFrais}
                postalSelected={postalSelected}
                setPostalSelected={setPostalSelected}
                diffusionMode={diffusionMode}
                setDiffusionMode={setDiffusionMode}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
