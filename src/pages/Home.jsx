import Login from "../components/abonnes/Login";
import loginImage from "../assets/homepage_xerfi_abonnes.jpg";

const Home = () => {
  return (
    <div className="font-sans">
      <div className="flex min-h-[60vh]">
        <div className="w-1/2 h-[60vh] overflow-hidden pl-24">
          <img
            src={loginImage}
            alt="Illustration de connexion"
            className="w-full h-auto object-cover object-top"
          />
        </div>

        <div className="w-1/2 flex flex-col justify-center bg-white px-12 py-16">
          <div className="mb-6 ml-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              IDENTIFIEZ-VOUS
            </h2>
            <p className="text-lg text-gray-900">
              Pour accéder à votre espace abonné
            </p>
          </div>
          <Login />
        </div>
      </div>

      <footer className="bg-gray-200 text-center text-sm py-6">
        &copy; {new Date().getFullYear()} Xerfi. Tous droits réservés.
      </footer>
    </div>
  );
};

export default Home;
