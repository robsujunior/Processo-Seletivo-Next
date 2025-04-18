import { useState } from "react";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Contato from "./pages/Contato";

function App() {
  const [abaAtual, setAbaAtual] = useState("home");

  const renderAba = () => {
    switch (abaAtual) {
      case "home":
        return <Home />;
      case "sobre":
        return <Sobre />;
      case "servicos":
        return <Servicos />;
      case "contato":
        return <Contato />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="font-manrope min-h-screen bg-pink-50">
      <nav className="flex gap-6 bg-gradient-to-r from-pink-500 to-pink-700 text-white px-6 py-4 shadow-lg sticky top-0 z-10">
        <button
          onClick={() => setAbaAtual("home")}
          className="text-xl font-semibold hover:underline"
        >
          Home
        </button>
        <button
          onClick={() => setAbaAtual("sobre")}
          className="text-xl font-semibold hover:underline"
        >
          Sobre
        </button>
        <button
          onClick={() => setAbaAtual("servicos")}
          className="text-xl font-semibold hover:underline"
        >
          Serviços
        </button>
        <button
          onClick={() => setAbaAtual("contato")}
          className="text-xl font-semibold hover:underline"
        >
          Contato
        </button>
      </nav>
      <main>{renderAba()}</main>
    </div>
  );
}

export default App;
