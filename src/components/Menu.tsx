import Image from 'next/image';
import Link from 'next/link';
import { getPath } from '@/utils/path';

const MenuCard = ({ title, price, description, imageSrc }: {
  title: string;
  price: string;
  description: string;
  imageSrc: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-xl">{title}</h3>
          <span className="text-[#9f0000] font-bold">{price}</span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
    </div>
  );
};

const Menu = () => {
  const featuredItems = [
    {
      title: "Beijo do Dragão",
      price: "R$ 120,00",
      description: "Corte prime finalizado na mesa com maçarico, acompanha molho especial e legumes grelhados.",
      imageSrc: getPath("/menu-1.jpg")
    },
    {
      title: "Tomahawk Grelhado",
      price: "R$ 180,00",
      description: "Corte nobre de 600g grelhado na brasa, temperado com especiarias e ervas frescas.",
      imageSrc: getPath("/menu-2.jpg")
    },
    {
      title: "Costelinha BBQ",
      price: "R$ 85,00",
      description: "Costelinha suína com molho barbecue da casa e finalizada no maçarico.",
      imageSrc: getPath("/menu-3.jpg")
    },
    {
      title: "Salmão Defumado",
      price: "R$ 95,00",
      description: "Salmão defumado e grelhado, servido com risoto de limão siciliano.",
      imageSrc: getPath("/menu-4.jpg")
    }
  ];

  return (
    <section id="menu" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#9f0000]">
            Nosso Cardápio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça algumas de nossas especialidades, preparadas com os melhores ingredientes e com técnicas que realçam os sabores naturais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item, index) => (
            <MenuCard 
              key={index}
              title={item.title}
              price={item.price}
              description={item.description}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href={getPath('/cardapio')} 
            className="px-8 py-4 text-lg font-bold text-white bg-[#9f0000] hover:bg-[#7e0000] rounded-lg transition-colors duration-300"
          >
            Ver Cardápio Completo
          </Link>
          <p className="mt-4 text-gray-600">
            Oferecemos diferentes opções de pacotes para eventos, com diversos tipos de carnes, acompanhamentos e adicionais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu; 