import Link from 'next/link';
import { getPath } from '@/utils/path';

const MenuPackage = ({ title, description, color, index, slug }: {
  title: string;
  description: string;
  color: string;
  index: number;
  slug: string;
}) => {
  return (
    <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100}>
      <div className="p-6">
        <h3 className={`font-bold text-2xl mb-4 ${color}`}>{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <Link href={`/cardapio#${slug}`} className="inline-block mt-2 text-[#ff0000] hover:text-[#cc0000]">
          Ver detalhes →
        </Link>
      </div>
    </div>
  );
};

const MenuSimple = () => {
  const menuPackages = [
    {
      title: "Menu Prata",
      description: "Pacote essencial para eventos, incluindo picanha, contrafilé, linguiças, acompanhamentos e toda estrutura necessária.",
      color: "text-gray-300",
      slug: "prata",
    },
    {
      title: "Menu Ouro",
      description: "Experiência premium com picanha premium, variedade de linguiças, acompanhamentos especiais e mais opções para seu evento.",
      color: "text-yellow-400",
      slug: "ouro",
    },
    {
      title: "Menu Platina",
      description: "Nossa experiência mais exclusiva com carnes nobres importadas, cordeiro, acompanhamentos especiais, sobremesas e bebidas.",
      color: "text-white",
      slug: "platina",
    }
  ];

  return (
    <section id="menu" className="py-20 bg-black text-white">
      <div className="container px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#ff0000]">
            Nosso Cardápio
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Oferecemos diferentes opções de pacotes para eventos, com diversos tipos de carnes, acompanhamentos e adicionais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {menuPackages.map((item, index) => (
            <MenuPackage 
              key={index}
              title={item.title}
              description={item.description}
              color={item.color}
              index={index}
              slug={item.slug}
            />
          ))}
        </div>

        <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="300">
          <Link 
            href="/cardapio" 
            className="inline-block px-8 py-4 text-xl font-bold text-white bg-[#ff0000] hover:bg-[#cc0000] rounded-lg transition-colors"
          >
            Ver Cardápio Completo
          </Link>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            No cardápio completo você encontrará detalhes sobre nossos pacotes para eventos, acompanhamentos, sobremesas, molhos e muito mais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSimple; 