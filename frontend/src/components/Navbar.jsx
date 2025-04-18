import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-xl p-4 text-pink-600 flex justify-center space-x-6 rounded-lg mb-12 max-w-screen-lg mx-auto">
      <Link
        to="/"
        className="hover:underline hover:text-pink-800 transition-colors"
      >
        Home
      </Link>
      <Link
        to="/sobre"
        className="hover:underline hover:text-pink-800 transition-colors"
      >
        Sobre
      </Link>
      <Link
        to="/servicos"
        className="hover:underline hover:text-pink-800 transition-colors"
      >
        Serviços
      </Link>
      <Link
        to="/contato"
        className="hover:underline hover:text-pink-800 transition-colors"
      >
        Contato
      </Link>
    </nav>
  );
};

export default Navbar;
