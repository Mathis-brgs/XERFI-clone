import { useCommande } from "../contexts/CommandeContext";
import ProgressionCommande from "../components/Panier/ProgressionCommande";
import MainPanier from "../components/Panier/MainPanier";
import RecapPanier from "../components/Panier/RecapPanier";
import PaiementMode from "../components/PaiementMode";

export default function PanierPaiement() {
  const {
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
        <div className="lg:col-span-2 py-2">
          <PaiementMode />
        </div>
        <div className="lg:col-span-1 py-2">
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
      </div>
    </div>
  );
}
