import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { getPath } from "@/utils/path";

export default function HistoriaPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      
      <section className="py-8 md:py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16" data-aos="fade-up">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 md:mb-12 text-[#ff0000]">
              Nossa História
            </h1>
            
            {/* Versão mobile do texto */}
            <div className="md:hidden text-lg text-gray-300 max-w-4xl mx-auto space-y-4">
              <p className="text-justify">
                O Dragon Kiss nasceu em 2025, trazendo a São Paulo uma nova experiência em churrasco. Sob o comando do Chef João Leite, combinamos técnicas clássicas e modernas para criar momentos únicos em cada evento.
              </p>
            </div>

            {/* Versão desktop do texto */}
            <div className="hidden md:block text-xl text-gray-300 max-w-4xl mx-auto space-y-4">
              <p className="text-justify">
                Fundado em 2025, o Dragon Kiss conta com uma equipe de profissionais apaixonados pela arte da cozinha, com anos de experiência em serviços de catering, buffet e churrasco, atendendo São Paulo e região.
              </p>
              <p className="text-justify">
                Nosso Chef João Leite combina técnicas clássicas e modernas, inspirando-se em tradições culinárias de todo o mundo. Sua paixão pela arte culinária se reflete em pratos que unem sabor, criatividade e autenticidade.
              </p>
              <p className="text-justify">
                Nos orgulhamos ao entender os elementos únicos de cada evento e sempre encontraremos maneiras de exceder as suas expectativas. Cada detalhe é cuidadosamente pensado para garantir uma execução impecável, transformando seu evento em uma verdadeira experiência gastronômica.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Biografia do Chef */}
            <div className="mb-12 md:mb-16" data-aos="fade-up">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-2/5 flex justify-center">
                  <div className="relative aspect-[3/4] w-full max-w-sm rounded-lg overflow-hidden shadow-lg">
                    <Image 
                      src={getPath('/me.png')} 
                      alt="Chef João Leite" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="w-full md:w-3/5 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#ff0000]">Chef João Leite</h2>
                  
                  {/* Versão mobile da bio */}
                  <div className="md:hidden">
                    <p className="text-gray-300 text-justify">
                      Fundador da Dragon Kiss, João Leite traz sua paixão pela culinária para criar experiências únicas através do "Beijo do Dragão" - um método especial que combina fogo, tempero e técnica.
                    </p>
                    <blockquote className="border-l-4 border-[#ff0000] pl-4 italic text-gray-400 py-2 mt-4">
                      "O 'Beijo do Dragão' é um método que usa as chamas fortes da grelha para produzir um resultado extraordinário."
                    </blockquote>
                  </div>

                  {/* Versão desktop da bio */}
                  <div className="hidden md:block space-y-4">
                    <p className="text-gray-300 text-justify">
                      Fundador da Dragon Kiss, a paixão do Chef João Leite pela culinária começou ainda na infância, observando sua mãe preparar os pratos tradicionais da família.
                    </p>
                    <p className="text-gray-300 text-justify">
                      Com os anos, ele acumulou experiência e um amor inabalável pela gastronomia, e criou a Dragon Kiss para trazer aos seus eventos um toque único: o poder do fogo, a qualidade dos ingredientes e a autenticidade de um churrasco excepcional.
                    </p>
                    <p className="text-gray-300 text-justify">
                      Nosso foco é simples, mas ousado – oferecer momentos memoráveis através de cortes suculentos, temperos marcantes e uma apresentação que encanta os sentidos.
                    </p>
                    <blockquote className="border-l-4 border-[#ff0000] pl-4 italic text-gray-400 py-2">
                      "O 'Beijo do Dragão' é um método que usa as chamas fortes da grelha para produzir um resultado extraordinário. Vejo em cada evento uma oportunidade de contar essa história através do sabor."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Como tudo começou */}
            <div className="mb-8 md:mb-16" data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#ff0000]">Como Tudo Começou</h2>
              
              {/* Versão mobile */}
              <div className="md:hidden bg-gray-800 p-6 rounded-lg space-y-4">
                <p className="text-gray-300 text-justify">
                  Tudo começou em 2023, com um churrasco especial para amigos. O que era uma paixão se transformou em missão: criar experiências gastronômicas memoráveis através do nosso método único, o "Beijo do Dragão".
                </p>
                <p className="text-gray-300 text-justify">
                  Em 2025, essa paixão virou negócio, e desde então servimos centenas de pessoas, mantendo sempre o mesmo padrão de qualidade que nos tornou conhecidos.
                </p>
              </div>

              {/* Versão desktop */}
              <div className="hidden md:block bg-gray-800 p-6 rounded-lg space-y-4">
                <p className="text-gray-300 text-justify">
                  A Dragon Kiss nasceu de um sonho e de uma observação simples: as pessoas não querem apenas comer bem, querem viver experiências memoráveis. Tudo começou em 2022, quando organizei um churrasco para 20 pessoas no quintal da minha casa.
                </p>
                <p className="text-gray-300 text-justify">
                  Naquele dia, percebi que havia algo especial acontecendo. Não era apenas sobre a comida, mas sobre a atmosfera, o aroma da carne grelhada, o som da conversa animada, e a alegria dos convidados ao se deliciarem com os preparos.
                </p>
                <p className="text-gray-300 text-justify">
                  Comecei a receber pedidos de amigos e familiares para organizar eventos similares. Cada vez mais, desenvolvia técnicas para criar o que chamei de "Beijo do Dragão" - um método de preparo que combina temperatura, tempo e temperos especiais.
                </p>
                <p className="text-gray-300 text-justify">
                  Em 2025, decidi transformar essa paixão em um negócio. A Dragon Kiss nasceu oficialmente, e desde então, temos servido centenas de pessoas em eventos de todos os tamanhos, sempre mantendo a mesma qualidade e atenção aos detalhes que nos tornou conhecidos.
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