import { Link, useLocation } from "react-router-dom";
import { useCommande } from "../contexts/CommandeContext";

export default function Navbar() {
  const { nombreItems } = useCommande();
  const location = useLocation();

  return (
    <nav style={{ background: "linear-gradient(60deg, #6EFCED 10%, #2B6384)" }}>
      <div className="max-w-7xl px-24 py-10 flex justify-between items-center">
        <div>
          <Link to="/" className="text-2xl font-bold text-black">
            XERFI
          </Link>
        </div>

        <div className="flex space-x-6 items-end">
          <Link
            to="/"
            className={`hover:underline text-black ${
              location.pathname === "/" ? "font-bold" : ""
            }`}
          >
            Accueil
          </Link>

          <Link
            to="/market"
            className={`hover:underline text-black ${
              location.pathname === "/market" ? "font-bold" : ""
            }`}
          >
            Catalogue
          </Link>

          <Link
            to="/dashboard"
            className={`hover:underline text-black ${
              location.pathname === "/dashboard" ? "font-bold" : ""
            }`}
          >
            Dashboard
          </Link>

          <Link
            to="/panier"
            className={`relative hover:underline text-black ${
              location.pathname === "/panier" ? "font-bold" : ""
            }`}
          >
            Panier
            {nombreItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {nombreItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
