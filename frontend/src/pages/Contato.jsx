// src/pages/Contato.jsx
import { useState } from "react";
import { Mail } from "lucide-react"; // Ícone do Lucide para email

const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novaMensagem = { nome, email, mensagem };

    await fetch("http://localhost:3001/mensagens", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novaMensagem),
    });

    alert("Mensagem enviada com sucesso!");
    setNome("");
    setEmail("");
    setMensagem("");
  };

  return (
    <div className="rounded p-6 min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-semibold text-center text-pink-600 mb-6 flex items-center justify-center">
          <Mail className="mr-2 text-pink-600" /> Fale Conosco
        </h2>

        <label className="block mb-4">
          <span className="text-lg font-medium text-gray-700">Nome:</span>
          <input
            className="w-full border p-3 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-lg font-medium text-gray-700">Email:</span>
          <input
            className="w-full border p-3 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="block mb-6">
          <span className="text-lg font-medium text-gray-700">Mensagem:</span>
          <textarea
            className="w-full border p-3 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            rows="4"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
};

export default Contato;
