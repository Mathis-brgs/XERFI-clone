import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import { CommandeProvider } from "./contexts/CommandeContext";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <CommandeProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </CommandeProvider>
  );
}
