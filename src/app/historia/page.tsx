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
            {/* Biografia do Chef */}
            <div className="mb-16" data-aos="fade-up">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3">
                  <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
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
                    Fundador da Dragon Kiss, a paixão do Chef João Leite pela culinária começou ainda na infância, observando sua mãe preparar os pratos tradicionais da família.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Com os anos, ele acumulou experiência e um amor inabalável pela gastronomia, e criou a Dragon Kiss para trazer aos seus eventos um toque único: o poder do fogo, a qualidade dos ingredientes e a autenticidade de um churrasco excepcional. Nosso foco é simples, mas ousado – oferecer momentos memoráveis através de cortes suculentos, temperos marcantes e uma apresentação que encanta os sentidos.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Seja um encontro intimista ou uma grande celebração, a Dragon Kiss está pronta para incendiar seu evento com sabores que ficam na memória. Vamos juntos transformar sua ocasião em algo espetacular!
                  </p>
                  <blockquote className="border-l-4 border-[#ff0000] pl-4 italic text-gray-400">
                    "O 'Beijo do Dragão' é um método que usa as chamas fortes da grelha para produzir um resultado extraordinário. Vejo em cada evento uma oportunidade de contar essa história através do sabor."
                  </blockquote>
                </div>
              </div>
            </div>
            
            {/* Como tudo começou */}
            <div className="mb-16" data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#ff0000]">Como Tudo Começou</h2>
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="text-gray-300 mb-4">
                  A Dragon Kiss nasceu de um sonho e de uma observação simples: as pessoas não querem apenas comer bem, querem viver experiências memoráveis. Tudo começou em 2022, quando organizei um churrasco para 20 pessoas no quintal da minha casa.
                </p>
                <p className="text-gray-300 mb-4">
                  Naquele dia, percebi que havia algo especial acontecendo. Não era apenas sobre a comida, mas sobre a atmosfera, o aroma da carne grelhada, o som da conversa animada, e a alegria dos convidados ao se deliciarem com os preparos.
                </p>
                <p className="text-gray-300 mb-4">
                  Comecei a receber pedidos de amigos e familiares para organizar eventos similares. Cada vez mais, desenvolvia técnicas para criar o que chamei de "Beijo do Dragão" - um método de preparo que combina temperatura, tempo e temperos especiais para criar preparos com sabor e textura incomparáveis. Esse nome reflete nossa visão: trazer o poder do fogo e a intensidade dos sabores a cada evento. Assim, o que começou como uma centelha de inspiração se tornou uma empresa apaixonada por fazer do churrasco não apenas uma refeição, mas uma celebração inesquecível.
                </p>
                <p className="text-gray-300">
                  Em 2024, decidi transformar essa paixão em um negócio. A Dragon Kiss nasceu oficialmente, e desde então, temos servido centenas de pessoas em eventos de todos os tamanhos, sempre mantendo a mesma qualidade e atenção aos detalhes que nos tornou conhecidos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 