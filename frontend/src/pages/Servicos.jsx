export default function Servicos() {
  return (
    <div className="py-16 px-6">
      <section className="max-w-screen-lg mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-pink-600 mb-4">Serviços</h2>
        <p className="text-lg text-gray-700">
          Na <strong>Doce Surpresa</strong>, cada detalhe é pensado com carinho
          para tornar momentos inesquecíveis. Oferecemos serviços personalizados
          que transformam sentimentos em experiências únicas.
        </p>
      </section>

      <section className="max-w-screen-lg mx-auto grid md:grid-cols-2 gap-8 text-left">
        {/* Serviço 1 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold text-pink-600 mb-2">
            🎀 Montagem de Presentes Personalizados
          </h3>
          <p className="text-gray-700">
            Criamos kits exclusivos com base no gosto e na ocasião de quem vai
            receber. Desde lembranças delicadas até cestas completas, tudo é
            montado com cuidado e afeto.
          </p>
        </div>

        {/* Serviço 2 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold text-pink-600 mb-2">
            🎉 Organização de Surpresas Especiais
          </h3>
          <p className="text-gray-700">
            Seja um pedido de namoro, uma comemoração íntima ou um aniversário
            surpresa, ajudamos a planejar e executar cada detalhe, garantindo
            emoção e surpresa.
          </p>
        </div>

        {/* Serviço 3 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold text-pink-600 mb-2">
            💌 Cartões com Mensagens Personalizadas
          </h3>
          <p className="text-gray-700">
            Acreditamos que palavras têm poder. Por isso, incluímos mensagens
            escritas com o coração para tornar cada presente ainda mais
            especial.
          </p>
        </div>

        {/* Serviço 4 */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold text-pink-600 mb-2">
            📦 Entrega com Afeto
          </h3>
          <p className="text-gray-700">
            Nosso serviço de entrega é pensado para manter o encanto até o
            último momento. Cuidamos para que cada surpresa chegue com
            segurança, beleza e pontualidade.
          </p>
        </div>
      </section>
    </div>
  );
}
