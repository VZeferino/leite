import Link from 'next/link';
import Image from 'next/image';
import { getPath } from '@/utils/path';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getPath('/hero-bg.jpg')}
          alt="Churrasco do Dragon Kiss"
          fill
          priority
          className="object-cover"
        />
      </div>
      
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Conteúdo do Hero */}
      <div className="relative z-20 container h-full flex flex-col justify-center text-white pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            CONHEÇA NOSSAS CHAMAS
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            O &ldquo;BEIJO DO DRAGÃO&rdquo;
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Experimente o verdadeiro sabor da brasa em cortes selecionados, preparados com técnicas únicas que ressaltam o melhor de cada ingrediente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#menu" 
              className="btn btn-primary text-center"
            >
              Ver Cardápio
            </Link>
            <Link 
              href="#reserva" 
              className="btn border border-white text-center hover:bg-white hover:text-[#9f0000] transition-colors"
            >
              Fazer Reserva
            </Link>
          </div>
        </div>
      </div>
      
      {/* Seta para scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="white" 
          className="w-8 h-8"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero; 