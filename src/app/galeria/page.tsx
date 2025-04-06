import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { getPath } from "@/utils/path";

export default function GaleriaPage() {
  return (
    <main>
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
                  src={getPath('/menu-1.jpg')} 
                  alt="Carnes Premium" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-[#ff0000]">Carnes Premium</h2>
                <p className="text-gray-300">
                  Nossas carnes são selecionadas com rigor, garantindo a melhor qualidade. 
                  Desde a picanha premium até o cordeiro, cada corte é preparado com técnicas 
                  especiais para realçar o sabor natural.
                </p>
              </div>
            </div>
            
            {/* Técnica do Beijo do Dragão */}
            <div className="bg-gray-800 rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="100">
              <div className="relative h-64">
                <Image 
                  src={getPath('/menu-2.jpg')} 
                  alt="Técnica do Beijo do Dragão" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-[#ff0000]">Técnica do Beijo do Dragão</h2>
                <p className="text-gray-300">
                  Nossa técnica exclusiva combina temperatura, tempo e temperos especiais. 
                  O "Beijo do Dragão" é finalizado na mesa com um maçarico, criando uma 
                  experiência visual e gustativa inesquecível.
                </p>
              </div>
            </div>
            
            {/* Acompanhamentos */}
            <div className="bg-gray-800 rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="200">
              <div className="relative h-64">
                <Image 
                  src={getPath('/menu-3.jpg')} 
                  alt="Acompanhamentos" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-[#ff0000]">Acompanhamentos</h2>
                <p className="text-gray-300">
                  Nossos acompanhamentos são preparados com ingredientes frescos e técnicas 
                  tradicionais. Do arroz branco à farofa, cada item complementa perfeitamente 
                  as carnes grelhadas.
                </p>
              </div>
            </div>
            
            {/* Eventos */}
            <div className="bg-gray-800 rounded-lg overflow-hidden" data-aos="fade-up">
              <div className="relative h-64">
                <Image 
                  src={getPath('/menu-4.jpg')} 
                  alt="Eventos" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-[#ff0000]">Eventos</h2>
                <p className="text-gray-300">
                  Oferecemos uma experiência completa para seu evento, com equipe profissional, 
                  estrutura de grelhados e atendimento personalizado. Desde casamentos até 
                  confraternizações empresariais.
                </p>
              </div>
            </div>
            
            {/* Molhos Especiais */}
            <div className="bg-gray-800 rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="100">
              <div className="relative h-64">
                <Image 
                  src={getPath('/about-img.jpg')} 
                  alt="Molhos Especiais" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-[#ff0000]">Molhos Especiais</h2>
                <p className="text-gray-300">
                  Nossos molhos são preparados com ingredientes selecionados e técnicas 
                  exclusivas. Do molho vermelho ao chimichurri, cada receita foi desenvolvida 
                  para realçar o sabor das carnes.
                </p>
              </div>
            </div>
            
            {/* Sobremesas */}
            <div className="bg-gray-800 rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="200">
              <div className="relative h-64">
                <Image 
                  src={getPath('/hero-bg.jpg')} 
                  alt="Sobremesas" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-[#ff0000]">Sobremesas</h2>
                <p className="text-gray-300">
                  Para finalizar com chave de ouro, nossas sobremesas são preparadas com 
                  ingredientes de alta qualidade. Do pudim de leite à banana caramelizada, 
                  cada doce é uma experiência única.
                </p>
              </div>
            </div>
          </div>
          
          {/* Galeria de Fotos */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white" data-aos="fade-up">Momentos Especiais</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { src: '/testimonial-1.jpg', alt: 'Momento Dragon Kiss 1' },
                { src: '/testimonial-2.jpg', alt: 'Momento Dragon Kiss 2' },
                { src: '/testimonial-3.jpg', alt: 'Momento Dragon Kiss 3' },
                { src: '/menu-1.jpg', alt: 'Momento Dragon Kiss 4' },
                { src: '/menu-2.jpg', alt: 'Momento Dragon Kiss 5' },
                { src: '/menu-3.jpg', alt: 'Momento Dragon Kiss 6' },
                { src: '/menu-4.jpg', alt: 'Momento Dragon Kiss 7' },
                { src: '/about-img.jpg', alt: 'Momento Dragon Kiss 8' }
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
                  "O Dragon Kiss transformou nosso casamento em uma experiência gastronômica inesquecível. 
                  Os convidados não paravam de elogiar as carnes e o atendimento foi impecável."
                </p>
                <p className="text-white font-bold">Maria e João Silva</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <p className="text-gray-300 italic mb-4">
                  "Contratamos o Dragon Kiss para nossa confraternização empresarial e superou todas as expectativas. 
                  Profissionalismo, qualidade e sabor incomparável."
                </p>
                <p className="text-white font-bold">Carlos Oliveira - Diretor de Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 