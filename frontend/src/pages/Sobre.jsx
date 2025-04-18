import membro1 from "../img/membro1.jpg";
import membro2 from "../img/membro2.jpg";
import membro3 from "../img/membro3.jpg";

export default function Sobre() {
  return (
    <div className="py-16 px-4">
      {/* SOBRE NÓS */}
      <section className="bg-white shadow-xl rounded-lg p-8 max-w-screen-lg mx-auto mb-12 text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-4">Sobre Nós</h2>
        <p className="text-lg text-gray-700">
          A <strong>Doce Surpresa</strong> nasceu com o propósito de transformar
          gestos de carinho em momentos inesquecíveis. Somos uma empresa
          apaixonada por criar experiências únicas por meio de presentes
          personalizados e surpresas planejadas com muito amor e dedicação.
          Acreditamos que cada detalhe importa. Por isso, cuidamos de cada etapa
          — da escolha dos produtos à entrega — com atenção e sensibilidade,
          para que cada presente conte uma história e desperte emoções
          verdadeiras. Seja para comemorar uma data especial ou simplesmente
          demonstrar afeto, estamos aqui para ajudar você a surpreender quem ama
          da forma mais doce possível.
        </p>
      </section>

      {/* HISTÓRIA */}
      <section className="bg-white shadow-xl rounded-lg p-8 max-w-screen-lg mx-auto mb-12 text-center">
        <h3 className="text-3xl font-semibold text-pink-600 mb-4">
          Nossa História
        </h3>
        <p className="text-lg text-gray-700">
          A Doce Surpresa foi criada como parte de um projeto fictício
          desenvolvido para o processo seletivo da NextStep, empresa júnior da
          UFVJM. A proposta nasceu da vontade de unir criatividade, organização
          e sensibilidade em um só lugar, simulando o funcionamento de uma
          empresa que valoriza o cuidado com o outro por meio de presentes e
          experiências personalizadas. Apesar de fictícia, a Doce Surpresa foi
          pensada com carinho e seriedade, como se realmente fosse ganhar vida.
          Cada detalhe — da identidade visual à proposta de valor — foi
          desenvolvido com o objetivo de demonstrar habilidades, mas também de
          transmitir a essência de uma marca que poderia, um dia, transformar
          gestos simples em grandes momentos.
        </p>
      </section>

      {/* EQUIPE */}
      <section className="bg-white shadow-xl rounded-lg p-8 max-w-screen-lg mx-auto mb-12 text-center">
        <h3 className="text-3xl font-semibold text-pink-600 mb-6">
          Nossa Equipe
        </h3>
        <div className="flex justify-center flex-wrap gap-8">
          <div className="text-center">
            <img
              src={membro1}
              alt="Isaac Newton"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-pink-300"
            />
            <h4 className="font-semibold text-xl text-pink-600">
              Isaac Newton
            </h4>
            <p className="text-gray-600">CEO</p>
          </div>
          <div className="text-center">
            <img
              src={membro2}
              alt="Albert Einstein"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-pink-300"
            />
            <h4 className="font-semibold text-xl text-pink-600">
              Albert Einstein
            </h4>
            <p className="text-gray-600">Diretor de Design</p>
          </div>
          <div className="text-center">
            <img
              src={membro3}
              alt="Galileu Galilei"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-pink-300"
            />
            <h4 className="font-semibold text-xl text-pink-600">
              Galileu Galilei
            </h4>
            <p className="text-gray-600">Diretor de Marketing</p>
          </div>
        </div>
      </section>

      {/* MISSÃO E VALORES */}
      <section className="bg-white shadow-xl rounded-lg p-8 max-w-screen-lg mx-auto mb-12 text-left">
        <h3 className="text-3xl font-semibold text-pink-600 mb-6 text-center">
          Nossa Missão e Valores
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Encantar pessoas por meio de presentes personalizados e experiências
          planejadas com afeto, tornando momentos simples em lembranças
          inesquecíveis.
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 pl-2">
          <li>
            <strong>Empatia:</strong> Entender o que faz cada momento ser
            especial.
          </li>
          <li>
            <strong>Criatividade:</strong> Buscar formas únicas de emocionar por
            meio dos detalhes.
          </li>
          <li>
            <strong>Dedicação:</strong> Cuidar de cada etapa com carinho e
            responsabilidade.
          </li>
          <li>
            <strong>Comprometimento:</strong> Entregar qualidade e atenção em
            tudo que fazemos.
          </li>
          <li>
            <strong>Humanização:</strong> Valorizar os sentimentos e as conexões
            entre as pessoas.
          </li>
        </ul>
      </section>
    </div>
  );
}
