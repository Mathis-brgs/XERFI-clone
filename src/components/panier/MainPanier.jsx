export default function MainPanier({
  panier,
  supprimerArticle,
  postalSelected,
  postalSetSelected,
  diffusionMode,
  setDiffusionMode,
  fraisPostaux,
  fraisDiffusion,
}) {
  return (
    <ul className="border py-2 mx-4 rounded-xl border-black w-3/5">
      {panier.map((item) => (
        <li key={item.id} className="flex py-2 px-4">
          <span className="font-semibold">{item.nom}</span>
          <span className="flex-auto text-right mr-4 font-bold">
            {item.prix} €HT
          </span>
          <button
            onClick={() => supprimerArticle(item.id)}
            className="text-red-600 hover:underline flex font-bold"
          >
            X
          </button>
        </li>
      ))}
      <div className="flex pt-8">
        <h4 className="px-4 font-bold">Mode de réception :</h4>
        <span className="flex-auto text-right mr-11 font-bold">
          {fraisPostaux} €HT
        </span>
      </div>
      <div className="flex flex-col items-start gap-y-4 mt-2">
        <div className="flex items-center gap-x-2 mx-4">
          <button className="w-4 h-4 bg-blue-800 text-white rounded pointer-events-none"></button>
          <p className="text-sm">
            Disponibilité immédiate de l'étude PDF sur xerfi.com, sauf si
            l'étude est précommandée
          </p>
        </div>

        <div className="flex items-center gap-x-2 mx-4">
          <button
            onClick={() => postalSetSelected(!postalSelected)}
            className={`w-4 h-4 rounded pointer-events-auto text-white ${
              postalSelected
                ? "bg-blue-800 border-none"
                : "bg-transparent border border-black"
            }`}
          ></button>
          <p className="text-sm">
            + Réception d'un classeur papier par voie postale
          </p>
        </div>
      </div>
      <div className="flex pt-8">
        <h4 className="px-4 font-bold pt-8">Modalités de diffusion :</h4>
        <span className="flex-auto text-right mr-11 font-bold">
          {fraisDiffusion} €HT
        </span>
      </div>
      <div className="flex flex-col items-start gap-y-4 mt-2">
        <div className="flex items-center gap-x-2 mx-4">
          <button
            onClick={() => setDiffusionMode("personnelle")}
            className={`w-4 h-4 rounded pointer-events-auto text-white ${
              diffusionMode === "personnelle"
                ? "bg-blue-800 border-none"
                : "bg-transparent border border-black"
            }`}
          ></button>
          <p className="text-sm">Utilisation personnelle</p>
        </div>

        <div className="flex items-center gap-x-2 mx-4 pb-4">
          <button
            onClick={() => setDiffusionMode("2-5")}
            className={`w-4 h-4 rounded pointer-events-auto text-white ${
              diffusionMode === "2-5"
                ? "bg-blue-800 border-none"
                : "bg-transparent border border-black"
            }`}
          ></button>
          <p className="text-sm">2 à 5 personnes</p>
        </div>
      </div>
    </ul>
  );
}
