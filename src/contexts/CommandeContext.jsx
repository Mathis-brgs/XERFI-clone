import { createContext, useState, useContext, useEffect } from "react";

// Création du contexte
export const CommandeContext = createContext();

// Hook personnalisé pour utiliser le contexte
export const useCommande = () => useContext(CommandeContext);

// Provider du contexte
export const CommandeProvider = ({ children }) => {
  // État initial du panier - sera chargé depuis la base de données à terme
  const [panier, setPanier] = useState([
    {
      id: 1,
      nom: "Le marché et la distribution automobile en Europe",
      prix: 4500,
    },
    { id: 2, nom: "Le marché de l'informatique en Europe", prix: 5000 },
  ]);

  // État pour stocker tous les articles disponibles (pour la future page de marketplace)
  const [articlesDisponibles, setArticlesDisponibles] = useState([]);

  // État pour indiquer si les données sont en cours de chargement
  const [isLoading, setIsLoading] = useState(false);

  // État pour les options de livraison et diffusion
  const [postalSelected, setPostalSelected] = useState(false);
  const [diffusionMode, setDiffusionMode] = useState("personnelle");

  // Calculs pour le panier
  const nombreItems = panier.length;
  const total = panier.reduce((acc, item) => acc + item.prix, 0);
  const fraisPostaux = postalSelected ? nombreItems * 400 : 0;
  const fraisDiffusion = diffusionMode !== "personnelle" ? total : 0;
  const totalAvecFrais = total + fraisPostaux + fraisDiffusion;

  // Fonctions pour manipuler le panier
  const supprimerArticle = (id) => {
    setPanier(panier.filter((item) => item.id !== id));
    // À terme, effectuer une requête API pour supprimer l'article du panier en base de données
  };

  const ajouterArticle = (article) => {
    // Vérifier si l'article est déjà dans le panier
    const articleExiste = panier.some((item) => item.id === article.id);

    if (!articleExiste) {
      setPanier([...panier, article]);
      // À terme, effectuer une requête API pour ajouter l'article au panier en base de données
    }
  };

  // Fonction pour charger les articles disponibles depuis la base de données
  const chargerArticlesDisponibles = async () => {
    setIsLoading(true);
    try {
      // À terme, remplacer par une vraie requête API
      // Simulation d'une requête API
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Données simulées de produits - à remplacer par les données réelles de votre API
      const articlesFromAPI = [
        {
          id: 1,
          nom: "Le marché et la distribution automobile en Europe",
          prix: 4500,
          categorie: "Automobile",
        },
        {
          id: 2,
          nom: "Le marché de l'informatique en Europe",
          prix: 5000,
          categorie: "Informatique",
        },
        {
          id: 3,
          nom: "Le marché de l'énergie en France",
          prix: 3800,
          categorie: "Énergie",
        },
        {
          id: 4,
          nom: "Le secteur bancaire en Europe",
          prix: 5200,
          categorie: "Finance",
        },
        {
          id: 5,
          nom: "L'industrie pharmaceutique mondiale",
          prix: 6000,
          categorie: "Santé",
        },
      ];

      setArticlesDisponibles(articlesFromAPI);
    } catch (error) {
      console.error("Erreur lors du chargement des articles:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Charger les articles au moment opportun (à remplacer par l'appel sur la page Market)
  useEffect(() => {
    // Cette logique sera déclenchée sur la page Market
    // chargerArticlesDisponibles();
  }, []);

  // Valeur du contexte à fournir
  const value = {
    // État du panier
    panier,
    setPanier,
    postalSelected,
    setPostalSelected,
    diffusionMode,
    setDiffusionMode,
    nombreItems,
    total,
    fraisPostaux,
    fraisDiffusion,
    totalAvecFrais,

    // Fonctions de gestion du panier
    supprimerArticle,
    ajouterArticle,

    // Données pour la marketplace
    articlesDisponibles,
    isLoading,
    chargerArticlesDisponibles,
  };

  return (
    <CommandeContext.Provider value={value}>
      {children}
    </CommandeContext.Provider>
  );
};
