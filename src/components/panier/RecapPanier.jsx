export default function RecapPanier({
  total,
  fraisPostaux,
  fraisDiffusion,
  totalAvecFrais,
  payer,
}) {
  return (
    <div className="ml-8 mt-4 font-semibold">
      <p>Total produits : {total} €HT</p>
      <p className="text-red-600">Frais postaux : {fraisPostaux} €HT</p>
      <p className="text-red-600">Frais diffusion : {fraisDiffusion} €HT</p>
      <p className="mt-2 font-bold">Total à payer : {totalAvecFrais} €HT</p>

      <button
        onClick={payer}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Commander
      </button>
    </div>
  );
}
