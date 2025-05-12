'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getPath } from '@/utils/path';

// Interface para os itens do menu
interface MenuItem {
  name: string;
  description?: string;
  note?: string;
}

const MenuFull = () => {
  const [activeTab, setActiveTab] = useState('prata');

  // Efeito para ler o hash da URL e definir a aba ativa na montagem do componente
  useEffect(() => {
    const hash = window.location.hash.substring(1); // Pega o hash sem o #
    const validTabs = ['prata', 'ouro', 'platina', 'acompanhamentos', 'adicionais'];
    if (hash && validTabs.includes(hash)) {
      setActiveTab(hash);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Executa apenas uma vez na montagem

  return (
    <section className="py-20 bg-black text-white">
      <div className="container px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#ff0000]">
            Cardápio Completo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça todas as opções disponíveis para o seu evento. Oferecemos diferentes pacotes para atender às suas necessidades.
          </p>
        </div>

        {/* Tabs de navegação */}
        <div className="flex flex-col items-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="100">
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setActiveTab('prata')}
              className={`px-6 py-3 text-lg font-bold rounded-lg transition-colors ${
                activeTab === 'prata'
                  ? 'bg-[#ff0000] text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Menu Prata
            </button>
            <button
              onClick={() => setActiveTab('ouro')}
              className={`px-6 py-3 text-lg font-bold rounded-lg transition-colors ${
                activeTab === 'ouro'
                  ? 'bg-[#ff0000] text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Menu Ouro
            </button>
            <button
              onClick={() => setActiveTab('platina')}
              className={`px-6 py-3 text-lg font-bold rounded-lg transition-colors ${
                activeTab === 'platina'
                  ? 'bg-[#ff0000] text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Menu Platina
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setActiveTab('entradas')}
              className={`px-6 py-3 text-lg font-bold rounded-lg transition-colors ${
                activeTab === 'entradas' 
                  ? 'bg-[#ff0000] text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Entradas
            </button>
            <button 
              onClick={() => setActiveTab('acompanhamentos')}
              className={`px-6 py-3 text-lg font-bold rounded-lg transition-colors ${
                activeTab === 'acompanhamentos' 
                  ? 'bg-[#ff0000] text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Acompanhamentos
            </button>
            <button 
              onClick={() => setActiveTab('adicionais')}
              className={`px-6 py-3 text-lg font-bold rounded-lg transition-colors ${
                activeTab === 'adicionais' 
                  ? 'bg-[#ff0000] text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Adicionais
            </button>
          </div>
        </div>

        {/* Conteúdo dos menus */}
        <div className="bg-gray-900 rounded-lg p-6 md:p-8 lg:p-10 shadow-xl">
          {/* Menu Prata */}
          {activeTab === 'prata' && (
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-300">Menu Prata</h3>
                <p className="text-gray-300 text-lg">
                  Pacote essencial para eventos, incluindo picanha, contrafilé, entradas, acompanhamentos e toda estrutura necessária.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <MenuSection 
                    title="INCLUSOS"
                    subtitle="Itens incluídos no pacote básico."
                    items={[
                      { name: "02 ENTRADAS" },
                      { name: "05 ACOMPANHAMENTOS" },
                      { name: "02 RÉCHAUDS" },
                      { name: "CARVÃO" },
                      { name: "CHURRASQUEIRO" },
                      { name: "AUXILIARES" }
                    ]}
                  />
                </div>
                
                <div className="space-y-8">
                  <MenuSection 
                    title="CARNES"
                    subtitle="Carnes incluídas no pacote."
                    items={[
                      { name: "PICANHA" },
                      { name: "CONTRAFILÉ" },
                      { name: "LINGUIÇA TOSCANA" },
                      { name: "COXINHA DE FRANGO" },
                      { name: "ASINHA DE FRANGO" }
                    ]}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Menu Ouro */}
          {activeTab === 'ouro' && (
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-400">Menu Ouro</h3>
                <p className="text-gray-300 text-lg">
                  Experiência premium com picanha, variedade de entradas, acompanhamentos especiais e mais opções para seu evento.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <MenuSection 
                    title="INCLUSOS"
                    subtitle="Itens incluídos no pacote premium."
                    items={[
                      { name: "04 ENTRADAS" },
                      { name: "06 ACOMPANHAMENTOS" },
                      { name: "01 ACOMPANHAMENTO ESPECIAL" },
                      { name: "02 RÉCHAUDS" },
                      { name: "CARVÃO" },
                      { name: "CHURRASQUEIRO" },
                      { name: "AUXILIARES" }
                    ]}
                  />
                </div>
                
                <div className="space-y-8">
                  <MenuSection 
                    title="CARNES"
                    subtitle="Carnes incluídas no pacote premium."
                    items={[
                      { name: "PICANHA PREMIUM" },
                      { name: "BIFE ANCHO" },
                      { name: "FRALDINHA" },
                      { name: "LINGUIÇA TOSCANA" },
                      { name: "COXINHA DE FRANGO" },
                      { name: "ASINHA DE FRANGO" }
                    ]}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Menu Platina */}
          {activeTab === 'platina' && (
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Menu Platina</h3>
                <p className="text-gray-300 text-lg">
                  Nossa experiência mais exclusiva com carnes nobres importadas, cordeiro, acompanhamentos especiais, sobremesas e bebidas.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <MenuSection 
                    title="INCLUSOS"
                    subtitle="Itens incluídos no pacote exclusivo."
                    items={[
                      { name: "06 ENTRADAS" },
                      { name: "06 ACOMPANHAMENTOS" },
                      { name: "03 ACOMPANHAMENTOS ESPECIAIS" },
                      { name: "01 SOBREMESA" },
                      { name: "02 TEMPEROS DO CHEF" },
                      { name: "02 MOLHOS" },
                      { name: "03 RÉCHAUDS" },
                      { name: "BEBIDAS" },
                      { name: "CARVÃO" },
                      { name: "CHURRASQUEIRO" },
                      { name: "AUXILIARES" }
                    ]}
                  />
                </div>
                
                <div className="space-y-8">
                  <MenuSection 
                    title="CARNES"
                    subtitle="Carnes nobres incluídas no pacote exclusivo."
                    items={[
                      { name: "PICANHA ANGUS IMPORTADA" },
                      { name: "CARRÉ DE CORDEIRO" },
                      { name: "PRIME RIB ANGUS IMPORTADA" },
                      { name: "ASSADO DE TIRA ANGUS IMPORTADO" },
                      { name: "BIFE ANCHO OU CHORIZO IMPORTADO" },
                      { name: "FILÉ DE SALMÃO" }
                    ]}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Entradas */}
          {activeTab === 'entradas' && (
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#ff0000]">Entradas</h3>
                <p className="text-gray-300 text-lg">
                  Conheça nossas opções de entradas para abrir o apetite antes do prato principal.
                </p>
              </div>
              
              <div className="space-y-12">
                <MenuSection 
                  title="ENTRADAS"
                  subtitle="Acompanhamentos iniciais para abrir o apetite."
                  items={[
                    { name: "LINGUIÇA APIMENTADA" },
                    { name: "PÃO DE ALHO" },
                    { name: "QUEIJO COALHO" },
                    { name: "MILHO GRELHADO" }
                  ]}
                />

                <MenuSection 
                  title="ENTRADAS PREMIUM"
                  subtitle="*Menus Ouro e Platina podem selecionar opções de entradas desta lista."
                  items={[
                    {
                      name: "PÃO DE ALHO ARTESANAL",
                      description: "Pão francês, maionese caseira, alho, queijo muçarela e cheiro verde."
                    },
                    {
                      name: "CHORIPÁN",
                      description: "Pão francês com chimichurri caseiro e linguiça."
                    },
                    {
                      name: "PROVOLETA",
                      description: "Fatia de provolone grelhada com um toque de mel e pimenta calabresa."
                    },
                    {
                      name: "LINGUIÇA CUIABANA",
                      description: "Feita com queijo, carne suína e especiarias naturais, é suculenta e deliciosa."
                    },
                    {
                      name: "BRUSCHETTA",
                      description: "Pão italiano crocante, dourado no azeite, coberto com tomates suculentos, manjericão fresco, parmesão ralado, um toque de balsâmico e azeite extravirgem."
                    },
                    {
                      name: "ESPETINHO DE LEGUMES",
                      description: "Com cogumelos paris, pimentões, cebola roxa, abobrinha e pêssego, é regado em um tempero especial da casa."
                    }
                  ]}
                />
              </div>
            </div>
          )}

          {/* Acompanhamentos */}
          {activeTab === 'acompanhamentos' && (
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#ff0000]">Acompanhamentos</h3>
                <p className="text-gray-300 text-lg">
                  Conheça todos os acompanhamentos disponíveis para complementar seu churrasco.
                </p>
              </div>
              
              <div className="space-y-12">
                <MenuSection 
                  title="ACOMPANHAMENTOS TRADICIONAIS"
                  subtitle="Acompanhamentos clássicos que não podem faltar em um bom churrasco."
                  items={[
                    {
                      name: "SALADA VERDE",
                      description: "Alface americana, tomate cereja, picles de cebola roxa e pepino, com molho para acompanhar."
                    },
                    {
                      name: "SALADA COLESLAW",
                      description: "Repolhos verde e roxo, cenoura ralada, maionese caseira e molho agridoce à base de vinagre de maçã e mostarda dijon."
                    },
                    {
                      name: "MAIONESE DE BATATA",
                      description: "Batata yukon, cenoura picada, maionese, limão e azeite extravirgem."
                    },
                    {
                      name: "VINAGRETE",
                      description: "Nossa vinagrete leva tomates, pimentão, vinagre de vinho, salsinha e azeite extravirgem."
                    },
                    {
                      name: "PÃO FRANCÊS",
                      description: "Crocantes e fresquinhos."
                    },
                    {
                      name: "ARROZ BRANCO",
                      description: "Arroz com alho refogado na manteiga."
                    },
                    {
                      name: "FEIJÃO TROPEIRO",
                      description: "Prato típico da roça com feijão vermelho, couve, ovos e azeite extravirgem."
                    },
                    {
                      name: "FAROFA ARTESANAL",
                      description: "Farinha de mandioca com ovos, manteiga, tomates e bacon."
                    },
                    {
                      name: "MANDIOCA FRITA",
                      description: "Crocante por fora e macia por dentro."
                    },
                    {
                      name: "BATATA FRITA",
                      description: "Dourada, crocante e saborosa."
                    },
                    {
                      name: "ARROZ BIRO BIRO",
                      description: "Arroz branco com manteiga, linguiça, bacon, ovos e batata palha por cima."
                    }
                  ]}
                />

                <MenuSection 
                  title="ACOMPANHAMENTOS ESPECIAIS"
                  subtitle="Acompanhamentos exclusivos que elevam a experiência gastronômica."
                  items={[
                    {
                      name: "SALADA DE MANGA",
                      description: "Alface lisa, abacate, manga, amêndoas tostadas, pimenta rosa, azeite e vinagre de vinho branco.",
                      note: "*Frutas estão sujeitas a variações sazonais."
                    },
                    {
                      name: "FAROFA DA CASA",
                      description: "Farinha d'água torrada com ovos, contrafilé em tiras finas, castanhas-do-Pará picadas, urucum e cheiro verde."
                    },
                    {
                      name: "MANDIOCA FRITA NA MANTEIGA DE GARRAFA",
                      description: "Para dar um sabor ainda mais especial a essa iguaria brasileira."
                    },
                    {
                      name: "ONION RINGS",
                      description: "Anéis de cebola fritos com molho especial para acompanhar."
                    },
                    {
                      name: "DADINHOS DE TAPIOCA",
                      description: "Feitos à base de queijo coalho, leite e tapioca, estes deliciosos dadinhos vêm acompanhados de um molho de pimenta agridoce."
                    }
                  ]}
                />
              </div>
            </div>
          )}

          {/* Adicionais */}
          {activeTab === 'adicionais' && (
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#ff0000]">Adicionais</h3>
                <p className="text-gray-300 text-lg">
                  Complemente seu evento com nossas opções adicionais de molhos, sobremesas, bebidas e temperos especiais.
                </p>
              </div>
              
              <div className="space-y-12">
                <MenuSection 
                  title="MOLHOS ESPECIAIS"
                  subtitle="Molhos especiais para realçar o sabor das carnes."
                  items={[
                    {
                      name: "MOLHO BÉARNAISE",
                      description: "Cremoso e aromático, com um toque de estragão e vinagre de vinho tinto, perfeito para realçar a carne grelhada."
                    },
                    {
                      name: "MOLHO BORDELAISE",
                      description: "Rico e encorpado, feito com vinho tinto, manteiga e tutano."
                    },
                    {
                      name: "MOLHO AU POIVRE",
                      description: "Pimenta do reino fresca e tomilho formam a base deste molho, finalizado com creme de leite fresco, mostarda dijon e um toque de conhaque."
                    },
                    {
                      name: "GELEIA DE ABACAXI COM PIMENTA",
                      description: "Abacaxi e pimenta se casam em um doce de tirar o fôlego."
                    },
                    {
                      name: "CHIMICHURRI",
                      description: "Molho tradicional argentino com salsinha, alho, orégano, vinagre, azeite e uma sutil picância, é o acompanhamento perfeito para carnes."
                    }
                  ]}
                />

                <MenuSection 
                  title="SOBREMESAS"
                  subtitle="Sobremesas deliciosas para finalizar o evento com chave de ouro."
                  items={[
                    {
                      name: "TORTA DE LIMÃO",
                      description: "Fresca e cítrica, com uma base de biscoito crocante e um recheio cremoso, a combinação perfeita do doce com o azedo."
                    },
                    {
                      name: "PAVÊ DE CHOCOLATE",
                      description: "Feita com chocolate meio amargo e creme de ovos com leite condensado, é uma receita que agrada qualquer paladar."
                    },
                    {
                      name: "PUDIM DE LEITE CONDENSADO",
                      description: "Clássica receita com ovos, leite condensado e calda de caramelo por cima."
                    },
                    {
                      name: "ABACAXI NA BRASA",
                      description: "Grelhado com açúcar e canela, finalizado com raspas de limão e mel."
                    }
                  ]}
                />

                <MenuSection 
                  title="TEMPEROS DO CHEF"
                  subtitle="Para clientes que desejam adicionar um toque sofisticado ao evento, oferecemos temperos escolhidos a dedo pelo Chef João Leite, com sabores inesquecíveis."
                  items={[
                    {
                      name: "FRANGO JAMAICANO",
                      description: "Marinado com especiarias caribenhas e levemente apimentado, denota uma experiência inesquecível."
                    },
                    {
                      name: "COSTELINHA DE PORCO BARBECUE",
                      description: "Temperada com especiarias e finalizada em um molho agridoce, é o autêntico toque do American BBQ."
                    },
                    {
                      name: "CORAÇÃO DE FRANGO NA CERVEJA",
                      description: "Marinado na cerveja, alho, azeite e limão."
                    },
                    {
                      name: "PICANHA AO ALHO",
                      description: "Finalizada no molho maçaricado de alho, manteiga, parmesão e azeite, é a Rainha das carnes com o sabor clássico de churrascaria.",
                      note: "**Disponível apenas nos Menus Ouro e Platina."
                    },
                    {
                      name: "CARRÉ DE CORDEIRO COM CHIMICHURRI DE HORTELÃ",
                      description: "Uma variação do tradicional chimichurri para combinar perfeitamente com o cordeiro.",
                      note: "**Disponível apenas no Menu Platina."
                    },
                    {
                      name: "CARRÉ DE CORDEIRO NO MOLHO DE ALHO, LIMÃO E ERVAS",
                      description: "Um molho composto de iogurte grego, limão siciliano, páprica defumada e ervas frescas, é uma bomba de sabor cremosa e adocicada.",
                      note: "**Disponível apenas no Menu Platina."
                    }
                  ]}
                />

                <MenuSection 
                  title="MENU BEBIDAS"
                  subtitle="Oferecemos a possibilidade de incluir bebidas em qualquer um dos Menus, com direito a copos descartáveis, gelo e garçons para servir os convidados."
                  items={[
                    { name: "ÁGUA MINERAL" },
                    { name: "ÁGUA COM GÁS" },
                    { name: "COCA-COLA" },
                    { name: "REFRI SODA" },
                    { name: "SUCO DE UVA INTEGRAL" },
                    { name: "SUCO DE LARANJA INTEGRAL" },
                    { name: "CERVEJA HEINEKEN" }
                  ]}
                />
              </div>
            </div>
          )}
        </div>
        
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="300">
          <p className="text-xl text-gray-300 mb-6">
            Entre em contato conosco para solicitar um orçamento personalizado para seu evento!
          </p>
          <a 
            href="https://api.whatsapp.com/send/?phone=5511912884404&text=Oi%21+Quero+fazer+um+evento+com+voc%C3%AA&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-xl font-bold text-white bg-[#ff0000] hover:bg-[#cc0000] rounded-lg transition-colors"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

// Componente para exibir um item do menu com título e possivelmente destacado
const MenuItemGroup = ({ title, isHighlighted = false, isNote = false }: {
  title: string;
  isHighlighted?: boolean;
  isNote?: boolean;
}) => {
  return (
    <div className={`py-2 ${isNote ? 'text-gray-400 italic text-center mt-6' : ''}`}>
      <p className={`
        ${isHighlighted ? 'text-[#ff0000] font-bold text-xl uppercase mb-2' : ''}
        ${isNote ? 'text-sm' : 'text-lg text-gray-200'}
      `}>
        {title}
      </p>
    </div>
  );
};

// Componente para uma seção de menu com título e itens
const MenuSection = ({ title, subtitle, items }: {
  title: string;
  subtitle?: string;
  items: MenuItem[];
}) => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4 text-[#ff0000]">{title}</h3>
      {subtitle && <p className="text-gray-300 italic mb-6">{subtitle}</p>}
      
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="border-b border-gray-800 pb-4 last:border-b-0">
            <h4 className="font-bold text-lg text-gray-100 mb-2">{item.name}</h4>
            {item.description && <p className="text-gray-300">{item.description}</p>}
            {item.note && <p className="text-gray-400 italic text-sm mt-2">{item.note}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuFull; 
