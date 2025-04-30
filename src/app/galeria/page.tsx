import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { getPath } from "@/utils/path";

export default function GaleriaPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div className="pt-20"></div> {/* Espaço para o navbar fixo */}
      
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white" data-aos="fade-up">
            Nossa Galeria
          </h1>
          
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            Explore nossa galeria de imagens e conheça a experiência Dragon Kiss. 
            Cada foto conta uma história de sabor, técnica e dedicação à gastronomia.
          </p>
          
          {/* Categorias */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Carnes */}
            <div className="bg-gray-800 rounded-lg overflow-hidden" data-aos="fade-up">
              <div className="relative h-64">
                <Image 
                  src={getPath('/carnes cruas/ribeye.jpg')} 
                  alt="Carnes Premium" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-[#ff0000]">Carnes Premium</h2>
                <p className="text-gray-300">
                  Selecionamos apenas os melhores cortes premium, como Ribeye, T-bone e Picanha Angus. 
                  Cada peça é cuidadosamente escolhida e preparada para garantir a máxima suculência e sabor, 
                  trazendo a verdadeira experiência da alta gastronomia para seu evento.
                </p>
              </div>
            </div>
            
            {/* Picanha Grelhada */}
            <div className="bg-gray-800 rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="100">
              <div className="relative h-64">
                <Image 
                  src={getPath('/carnes grelhadas/picanha.jpg')} 
                  alt="Picanha Grelhada" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-[#ff0000]">Picanha Perfeita</h2>
                <p className="text-gray-300">
                  Nossa picanha é preparada no ponto exato, com uma crosta dourada e 
                  suculenta por dentro. Grelhada lentamente para preservar todos os 
                  sucos e sabores naturais da carne, é servida em fatias generosas que 
                  derretem na boca.
                </p>
              </div>
            </div>
            
            {/* Acompanhamentos */}
            <div className="bg-gray-800 rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="200">
              <div className="relative h-64">
                <Image 
                  src={getPath('/preparos especiais/espeto de legumes.jpg')} 
                  alt="Espetinhos Vegetarianos" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-[#ff0000]">Opções Vegetarianas</h2>
                <p className="text-gray-300">
                  Nossos espetinhos vegetarianos são preparados com legumes frescos e coloridos, 
                  cuidadosamente selecionados. Abobrinha, pimentão, cogumelos, cebola roxa e 
                  outros vegetais grelhados na medida certa, mantendo o sabor e a crocância 
                  ideais para uma experiência saudável e deliciosa.
                </p>
              </div>
            </div>
            
            {/* Preparos Especiais */}
            <div className="bg-gray-800 rounded-lg overflow-hidden" data-aos="fade-up">
              <div className="relative h-64">
                <Image 
                  src={getPath('/preparos especiais/cordeiro.jpg')} 
                  alt="Preparos Especiais" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-[#ff0000]">Preparos Especiais</h2>
                <p className="text-gray-300">
                  Nossos preparos especiais incluem o suculento carré de cordeiro, 
                  costelinha suína ao molho barbecue, e o exclusivo frango jamaicano 
                  com especiarias. Todos acompanhados de molhos artesanais como nosso 
                  chimichurri tradicional argentino, preparado com ervas frescas e 
                  temperos selecionados.
                </p>
              </div>
            </div>
            
            {/* Acompanhamentos Tradicionais */}
            <div className="bg-gray-800 rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="100">
              <div className="relative h-64">
                <Image 
                  src={getPath('/eventos/acompanhamentos 1.jpg')} 
                  alt="Acompanhamentos Tradicionais" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-[#ff0000]">Acompanhamentos Tradicionais</h2>
                <p className="text-gray-300">
                  Nossa seleção inclui a tradicional farofa artesanal preparada na hora, 
                  vinagrete caseiro com legumes frescos picados na medida certa, e a 
                  cremosa maionese de batata com bacon crocante e ovos cozidos. Cada 
                  acompanhamento é preparado com ingredientes selecionados para complementar 
                  perfeitamente suas carnes favoritas.
                </p>
              </div>
            </div>
            
            {/* Molhos */}
            <div className="bg-gray-800 rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="200">
              <div className="relative h-64">
                <Image 
                  src={getPath('/eventos/molhos.jpg')} 
                  alt="Molhos Especiais" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-[#ff0000]">Molhos Artesanais</h2>
                <p className="text-gray-300">
                  Nossa seleção de molhos artesanais inclui o autêntico chimichurri 
                  argentino com ervas frescas e azeite, e o clássico molho borderlaise, 
                  preparado com vinho tinto e especiarias. Cada molho é cuidadosamente 
                  elaborado para realçar o sabor das nossas carnes grelhadas, criando 
                  harmonias perfeitas em cada mordida.
                </p>
              </div>
            </div>
          </div>
          
          {/* Galeria de Fotos */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white" data-aos="fade-up">Momentos Especiais</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { src: '/eventos/mesa de buffet 1.jpg', alt: 'Mesa de Buffet Completa' },
                { src: '/eventos/mesa de buffet 2.jpg', alt: 'Apresentação do Buffet' },
                { src: '/eventos/mesa de buffet 3.jpg', alt: 'Buffet Decorado' },
                { src: '/eventos/mesa de buffet 4.jpg', alt: 'Buffet em Evento' },
                { src: '/eventos/saladas 1.jpg', alt: 'Saladas Especiais' },
                { src: '/eventos/saladas 2.jpg', alt: 'Variedade de Saladas' },
                { src: '/eventos/carnes rechaud 1.jpg', alt: 'Carnes no Rechaud' },
                { src: '/eventos/feijao tropeiro.jpg', alt: 'Feijão Tropeiro Especial' }
              ].map((img, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay={index * 50}>
                  <Image 
                    src={getPath(img.src)} 
                    alt={img.alt} 
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Depoimentos */}
          <div className="bg-gray-800 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">O que nossos clientes dizem</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-700 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  "Simplesmente o melhor churrasco para curtir com amigos e família! Atendimento impecável, comida deliciosa e um clima super agradável. Recomendo de olhos fechados!"
                </p>
                <p className="text-white font-bold">Vitor Queiroz</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  "Ótimo profissional e qualidade impecável, super recomendo"
                </p>
                <p className="text-white font-bold">Cristiane dos Santos</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 