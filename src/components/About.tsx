import Image from 'next/image';
import { getPath } from '@/utils/path';
import Link from 'next/link';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-100">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#9f0000]">
              Sobre
            </h2>
            <p className="text-gray-700 mb-6 text-justify">
              Aqui em São Paulo, as pessoas esperam o inesperado - e o espetacular. E na Dragon Kiss, nós também. Criamos experiências únicas, nos especializando em eventos sociais, corporativos e casamentos. Em resumo, qualquer evento que você possa imaginar. Com as habilidades de um time talentoso que já viu e fez de tudo, entregamos momentos deliciosamente alegres.
            </p>
            <Link 
              href="/historia" 
              className="inline-block px-6 py-3 bg-[#9f0000] text-white font-bold rounded-lg hover:bg-[#800000] transition-colors"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Conheça mais sobre nossa história
            </Link>
          </div>
          <div className="md:w-1/2 relative h-80 md:h-96 w-full">
            <div className="absolute inset-0 bg-[#9f0000] transform rotate-3 rounded"></div>
            <div className="absolute inset-0 bg-white transform -rotate-3 rounded overflow-hidden">
              <div className="relative h-full w-full">
                <Image 
                  src={getPath('/pro/IMG_6494.jpg')}
                  alt="Evento Dragon Kiss" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 