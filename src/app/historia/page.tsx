import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { getPath } from "@/utils/path";

export default function HistoriaPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20"></div> {/* Espaço para o navbar fixo */}
      
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white" data-aos="fade-up">
            Nossa História
          </h1>
          
          <div className="max-w-4xl mx-auto">
            {/* Foto e biografia do fundador */}
            <div className="mb-16" data-aos="fade-up">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image 
                      src={getPath('/me.png')} 
                      alt="Chef João Leite" 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#ff0000]">Chef João Leite</h2>
                  <p className="text-gray-300 mb-4">
                    Fundador da Dragon Kiss, o Chef João Leite traz mais de 15 anos de experiência no mundo da gastronomia. 
                    Sua paixão pela culinária começou ainda na infância, observando sua avó preparar pratos tradicionais da família.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Formado em Gastronomia pela Universidade Anhembi Morumbi, João trabalhou em renomados restaurantes de São Paulo 
                    antes de decidir seguir seu próprio caminho. Sua especialidade em churrasco e grelhados o levou a desenvolver 
                    técnicas únicas que hoje são a marca registrada da Dragon Kiss.
                  </p>
                  <p className="text-gray-300">
                    "O verdadeiro 'Beijo do Dragão' nasceu de uma obsessão por perfeição. Queria criar algo que não apenas 
                    alimentasse, mas que proporcionasse uma experiência sensorial completa. Cada evento é uma oportunidade 
                    de contar uma história através do sabor."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Como tudo começou */}
            <div className="mb-16" data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#ff0000]">Como Tudo Começou</h2>
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="text-gray-300 mb-4">
                  A Dragon Kiss nasceu de um sonho e de uma observação simples: as pessoas não querem apenas comer bem, 
                  querem viver experiências memoráveis. Tudo começou em 2018, quando organizei um churrasco para 50 pessoas 
                  no quintal da minha casa.
                </p>
                <p className="text-gray-300 mb-4">
                  Naquele dia, percebi que havia algo especial acontecendo. Não era apenas sobre a comida, mas sobre a 
                  atmosfera, o aroma da carne grelhada, o som da conversa animada, o sabor único que eu havia desenvolvido 
                  para as carnes.
                </p>
                <p className="text-gray-300 mb-4">
                  Comecei a receber pedidos de amigos e familiares para organizar eventos similares. Cada vez mais, 
                  desenvolvia técnicas para criar o que chamei de "Beijo do Dragão" - um método de preparo que combina 
                  temperatura, tempo e temperos especiais para criar carnes com sabor e textura incomparáveis.
                </p>
                <p className="text-gray-300">
                  Em 2020, decidi transformar essa paixão em um negócio. A Dragon Kiss nasceu oficialmente, e desde então, 
                  temos servido milhares de pessoas em eventos de todos os tamanhos, sempre mantendo a mesma qualidade e 
                  atenção aos detalhes que nos tornou conhecidos.
                </p>
              </div>
            </div>
            
            {/* Equipe */}
            <div className="mb-16" data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#ff0000]">Nossa Equipe</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                    <Image 
                      src={getPath('/vini.png')} 
                      alt="Fotógrafo" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Vinicius Teixeira</h3>
                  <p className="text-gray-300">
                    Nosso fotógrafo oficial, Vinicius captura a essência de cada evento com seu olhar único. 
                    Com mais de 10 anos de experiência em fotografia gastronômica, ele transforma cada prato 
                    em uma obra de arte visual.
                  </p>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                    <Image 
                      src={getPath('/vitor.png')} 
                      alt="Desenvolvedor" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Vitor Zeferino</h3>
                  <p className="text-gray-300">
                    Desenvolvedor responsável por criar nossa presença digital. Vitor trabalha incansavelmente 
                    para garantir que a experiência Dragon Kiss seja perfeita tanto offline quanto online, 
                    desenvolvendo nosso site e sistemas de agendamento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 