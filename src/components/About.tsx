import Image from 'next/image';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-100">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#9f0000]">
              Nossa História
            </h2>
            <p className="text-gray-700 mb-6">
              Aqui em São Paulo, a paixão encontra o ingrediente e o resultado é o Dragon Kiss. 
              Nos tornamos Campeões Regionais de Grelhados em eventos gastronômicos diversos.
            </p>
            <p className="text-gray-700 mb-6">
              Na nossa casa, qualquer corte de carne é transformado em poesia 
              quando passa pelo fogo. Aprecie nossa técnica japonesa de grelhar e conheça o verdadeiro
              &ldquo;Beijo do Dragão&rdquo; - nosso corte especial finalizado na mesa com um maçarico.
            </p>
            <p className="text-gray-700">
              Venha nos visitar e experimente o sabor que tem conquistado São Paulo 
              e que já se tornou referência para os amantes de boa gastronomia.
            </p>
          </div>
          <div className="md:w-1/2 relative h-80 md:h-96 w-full">
            <div className="absolute inset-0 bg-[#9f0000] transform rotate-3 rounded"></div>
            <div className="absolute inset-0 bg-white transform -rotate-3 rounded overflow-hidden">
              <div className="relative h-full w-full">
                <Image 
                  src="/about-img.jpg" 
                  alt="Chefs do Dragon Kiss preparando o Beijo do Dragão" 
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