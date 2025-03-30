const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#9f0000]">
            Entre em Contato
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto">
            Estamos prontos para tornar o seu evento inesquecível! Entre em contato conosco para mais informações ou para fazer uma reserva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Informações de Contato */}
          <div className="bg-gray-100 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 md:mb-8 text-[#9f0000]">Informações de Contato</h3>
            <ul className="space-y-6 md:space-y-8">
              <li className="flex items-start gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 md:h-8 md:w-8 text-[#9f0000] flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <span className="text-lg md:text-xl font-semibold block mb-1 text-gray-800">Endereço:</span>
                  <span className="text-base md:text-lg text-gray-700">São Paulo - SP</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 md:h-8 md:w-8 text-[#9f0000] flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <span className="text-lg md:text-xl font-semibold block mb-1 text-gray-800">Telefone:</span>
                  <a 
                    href="https://api.whatsapp.com/send/?phone=5511950407707&text=Oi%21+Quero+fazer+um+evento+com+voc%C3%AA&type=phone_number&app_absent=0" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base md:text-lg text-gray-700 hover:text-[#9f0000] hover:underline flex items-center"
                  >
                    (11) 91288-4404
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1 text-green-600"
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 md:h-8 md:w-8 text-[#9f0000] flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <span className="text-lg md:text-xl font-semibold block mb-1 text-gray-800">E-mail:</span>
                  <a href="mailto:dragonkisseventos@gmail.com" className="text-base md:text-lg text-gray-700 hover:text-[#9f0000] hover:underline break-all">
                    dragonkisseventos@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 md:h-8 md:w-8 text-[#9f0000] flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.172 13.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101"
                  />
                </svg>
                <div>
                  <span className="text-lg md:text-xl font-semibold block mb-1 text-gray-800">Instagram:</span>
                  <a 
                    href="https://www.instagram.com/dragonkiss.eventos/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-base md:text-lg text-gray-700 hover:text-[#9f0000] hover:underline"
                  >
                    @dragonkiss.eventos
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-gray-100 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-6 md:mb-8 text-[#9f0000]">Envie-nos uma mensagem</h3>
            <form className="space-y-5 md:space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-lg md:text-xl font-medium text-gray-800">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 sm:px-5 py-3 text-base md:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9f0000] focus:border-transparent"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-lg md:text-xl font-medium text-gray-800">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 sm:px-5 py-3 text-base md:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9f0000] focus:border-transparent"
                  placeholder="Seu e-mail"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-lg md:text-xl font-medium text-gray-800">Telefone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 sm:px-5 py-3 text-base md:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9f0000] focus:border-transparent"
                  placeholder="Seu telefone"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-lg md:text-xl font-medium text-gray-800">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 sm:px-5 py-3 text-base md:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9f0000] focus:border-transparent"
                  placeholder="Escreva sua mensagem aqui..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full px-6 sm:px-8 py-3 sm:py-4 text-lg md:text-xl font-bold text-white bg-[#9f0000] hover:bg-[#7e0000] rounded-lg transition-colors duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 