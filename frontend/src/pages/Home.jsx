import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Gift, Box, Heart, Image, Key, Palette } from "lucide-react"; // Ícones do Lucide

import presente1 from "../img/presente1.jpg";
import presente2 from "../img/presente2.jpg";
import presente3 from "../img/presente3.jpg";
import presente4 from "../img/presente4.jpg";
import presente5 from "../img/presente5.jpg";
import presente6 from "../img/presente6.jpg";

export default function Home() {
  return (
    <div className="relative">
      {/* Chuva de presentes nas laterais */}
      <div className="absolute top-0 left-0 bottom-0 w-1/4 overflow-hidden">
        <div className="gift-rain left">
          {Array.from({ length: 30 }).map((_, index) => (
            <Gift key={index} className="gift-item" />
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0 bottom-0 w-1/4 overflow-hidden">
        <div className="gift-rain right">
          {Array.from({ length: 30 }).map((_, index) => (
            <Gift key={index} className="gift-item" />
          ))}
        </div>
      </div>

      {/* Texto acima do carrossel */}
      <div className="text-center mb-8 p-6 bg-gradient-to-r from-pink-400 to-pink-600 text-white shadow-md">
        <h2 className="text-4xl font-bold mb-2">
          <Gift className="inline-block mr-3 text-4xl" /> Um pouco do nosso
          trabalho
        </h2>
        <p className="text-lg">Veja como podemos transformar suas ideias!</p>
      </div>

      {/* Carrossel de imagens */}
      <div className="w-full sm:w-2/3 md:w-1/3 lg:w-1/4 mx-auto">
        <Carousel autoPlay infiniteLoop interval={5000}>
          <div>
            <img
              src={presente1}
              alt="Pessoa feliz com presente"
              className="object-cover w-full h-full"
            />
            <p className="legend text-lg font-semibold text-gray-800">
              <Heart className="inline-block mr-2 text-red-500" /> Escrevendo
              sonhos
            </p>
          </div>
          <div>
            <img
              src={presente2}
              alt="Kit especial"
              className="object-cover w-full h-full"
            />
            <p className="legend text-lg font-semibold text-gray-800">
              <Box className="inline-block mr-2 text-yellow-500" /> Caixas da
              felicidade
            </p>
          </div>
          <div>
            <img
              src={presente3}
              alt="Pessoa feliz com presente"
              className="object-cover w-full h-full"
            />
            <p className="legend text-lg font-semibold text-gray-800">
              <Palette className="inline-block mr-2 text-green-500" /> Alegria
              em cada detalhe
            </p>
          </div>
          <div>
            <img
              src={presente4}
              alt="Pessoa feliz com presente"
              className="object-cover w-full h-full"
            />
            <p className="legend text-lg font-semibold text-gray-800">
              <Image className="inline-block mr-2 text-blue-500" /> Lindos
              quadros
            </p>
          </div>
          <div>
            <img
              src={presente5}
              alt="Pessoa feliz com presente"
              className="object-cover w-full h-full"
            />
            <p className="legend text-lg font-semibold text-gray-800">
              <Heart className="inline-block mr-2 text-red-500" /> Feitos à mão
              para você
            </p>
          </div>
          <div>
            <img
              src={presente6}
              alt="Pessoa feliz com presente"
              className="object-cover w-full h-full"
            />
            <p className="legend text-lg font-semibold text-gray-800">
              <Key className="inline-block mr-2 text-gray-700" /> Chaveiros
              personalizados
            </p>
          </div>
        </Carousel>
      </div>

      {/* Seção adicional com ícones */}
      <div className="text-center mt-12 p-6 bg-gradient-to-l from-pink-200 via-pink-300 to-pink-500 shadow-lg">
        <h3 className="text-3xl font-semibold text-white mb-4">
          <Gift className="inline-block mr-2 text-4xl" /> Presentes perfeitos
          para todas as ocasiões
        </h3>
        <div className="flex justify-center space-x-10">
          <div className="flex items-center space-x-2">
            <Box className="text-yellow-500" />
            <span className="text-white">Embalagens Exclusivas</span>
          </div>
          <div className="flex items-center space-x-2">
            <Heart className="text-red-500" />
            <span className="text-white">Pensando em Você</span>
          </div>
          <div className="flex items-center space-x-2">
            <Key className="text-gray-700" />
            <span className="text-white">Itens Personalizados</span>
          </div>
        </div>
      </div>

      {/* Estilos de chuva de presentes */}
      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(-100px); opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
          }

          .gift-rain {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            animation: fall 5s linear infinite;
            z-index: 10;
          }

          .gift-rain.left {
            left: 0;
          }

          .gift-rain.right {
            right: 0;
          }

          .gift-item {
            position: absolute;
            top: -50px;
            font-size: 2rem;
            color: #ff6363;
            animation: fall 4s linear infinite;
            opacity: 1;
          }

          /* Espalhando os presentes pelo lado esquerdo */
          .gift-item:nth-child(1) {
            animation-delay: 0s;
            left: 10%;
          }
          .gift-item:nth-child(2) {
            animation-delay: 1s;
            left: 25%;
          }
          .gift-item:nth-child(3) {
            animation-delay: 2s;
            left: 50%;
          }
          .gift-item:nth-child(4) {
            animation-delay: 3s;
            left: 70%;
          }
          .gift-item:nth-child(5) {
            animation-delay: 4s;
            left: 85%;
          }
          .gift-item:nth-child(6) {
            animation-delay: 5s;
            left: 30%;
          }
          .gift-item:nth-child(7) {
            animation-delay: 6s;
            left: 15%;
          }
          .gift-item:nth-child(8) {
            animation-delay: 7s;
            left: 55%;
          }
          .gift-item:nth-child(9) {
            animation-delay: 8s;
            left: 90%;
          }
          .gift-item:nth-child(10) {
            animation-delay: 9s;
            left: 40%;
          }
          .gift-item:nth-child(11) {
            animation-delay: 10s;
            left: 60%;
          }
          .gift-item:nth-child(12) {
            animation-delay: 11s;
            left: 20%;
          }
          .gift-item:nth-child(13) {
            animation-delay: 12s;
            left: 75%;
          }
          .gift-item:nth-child(14) {
            animation-delay: 13s;
            left: 50%;
          }
          .gift-item:nth-child(15) {
            animation-delay: 14s;
            left: 30%;
          }
          .gift-item:nth-child(16) {
            animation-delay: 15s;
            left: 65%;
          }
          .gift-item:nth-child(17) {
            animation-delay: 16s;
            left: 25%;
          }
          .gift-item:nth-child(18) {
            animation-delay: 17s;
            left: 80%;
          }
          .gift-item:nth-child(19) {
            animation-delay: 18s;
            left: 10%;
          }
          .gift-item:nth-child(20) {
            animation-delay: 19s;
            left: 45%;
          }
        `}
      </style>
    </div>
  );
}
