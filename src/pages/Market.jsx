import { useEffect, useState } from "react";
import { useCommande } from "../contexts/CommandeContext";

export default function Market() {
  const {
    articlesDisponibles,
    isLoading,
    chargerArticlesDisponibles,
    ajouterArticle,
    panier,
  } = useCommande();

  const [filtreCategorie, setFiltreCategorie] = useState("Tous");
  const [recherche, setRecherche] = useState("");

  // Charger les articles au montage du composant
  useEffect(() => {
    chargerArticlesDisponibles();
  }, []);

  // Extraire les catégories uniques pour le filtre
  const categories = [
    "Tous",
    ...new Set(articlesDisponibles.map((article) => article.categorie)),
  ];

  // Filtrer les articles selon la catégorie et la recherche
  const articlesFiltres = articlesDisponibles.filter((article) => {
    const matchCategorie =
      filtreCategorie === "Tous" || article.categorie === filtreCategorie;
    const matchRecherche = article.nom
      .toLowerCase()
      .includes(recherche.toLowerCase());
    return matchCategorie && matchRecherche;
  });

  // Vérifier si un article est déjà dans le panier
  const estDansPanier = (id) => {
    return panier.some((item) => item.id === id);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Catalogue d'études
      </h1>

      {/* Filtres et recherche */}
      <div className="flex justify-between mb-8">
        <div className="flex space-x-4">
          {categories.map((categorie) => (
            <button
              key={categorie}
              className={`px-4 py-2 rounded ${
                filtreCategorie === categorie
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setFiltreCategorie(categorie)}
            >
              {categorie}
            </button>
          ))}
        </div>

        <div className="w-1/3">
          <input
            type="text"
            placeholder="Rechercher une étude..."
            className="w-full p-2 border rounded"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />
        </div>
      </div>

      {/* Affichage des articles */}
      {isLoading ? (
        <div className="text-center py-12">
          <p className="text-xl">Chargement des études...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articlesFiltres.map((article) => (
            <div
              key={article.id}
              className="border rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="bg-gray-100 h-40 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-500">Aperçu de l'étude</span>
              </div>

              <h3 className="font-bold text-lg mb-2">{article.nom}</h3>
              <p className="text-gray-600 mb-4">
                Catégorie: {article.categorie}
              </p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-xl">{article.prix} €HT</span>

                <button
                  className={`px-4 py-2 rounded ${
                    estDansPanier(article.id)
                      ? "bg-green-600 text-white"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                  onClick={() => ajouterArticle(article)}
                  disabled={estDansPanier(article.id)}
                >
                  {estDansPanier(article.id) ? "Ajouté" : "Ajouter au panier"}
                </button>
              </div>
            </div>
          ))}

          {articlesFiltres.length === 0 && (
            <div className="col-span-3 text-center py-12">
              <p className="text-xl text-gray-500">
                Aucune étude ne correspond à votre recherche
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
