'use client';

import React, { useState } from 'react';

const MenuFull = () => {
  const [activeTab, setActiveTab] = useState('prata');

  return (
    <section className="py-20 bg-black text-white">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#ff0000]">
            Cardápio Completo
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Confira nossos pacotes de menu e faça sua escolha para uma experiência gastronômica inesquecível.
          </p>
          
          {/* Tabs para seleção do tipo de menu */}
          <div className="flex flex-col sm:flex-row justify-center mb-12 gap-4">
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
        </div>
        
        {/* Conteúdo dos menus */}
        <div className="bg-gray-900 rounded-xl shadow-lg p-8 mb-16">
          {activeTab === 'prata' && (
            <div className="menu-prata">
              <h3 className="text-3xl font-bold text-center mb-8 text-gray-100">MENU PRATA</h3>
              
              <div className="space-y-6">
                <MenuItemGroup title="05 Acompanhamentos" />
                <MenuItemGroup title="02 Réchaud" />
                <MenuItemGroup title="Carvão" />
                <MenuItemGroup title="Churrasqueiro" />
                <MenuItemGroup title="Auxiliares" />
                <MenuItemGroup title="GRELHADOS" isHighlighted />
                <MenuItemGroup title="Picanha" />
                <MenuItemGroup title="Contrafilé" />
                <MenuItemGroup title="Linguiça toscana" />
                <MenuItemGroup title="Coxinha de frango" />
                <MenuItemGroup title="Asinha de frango" />
                <MenuItemGroup title="Pão de alho" />
                <MenuItemGroup title="Incluso mão de obra e insumos para atender o evento." isNote />
              </div>
            </div>
          )}
          
          {activeTab === 'ouro' && (
            <div className="menu-ouro">
              <h3 className="text-3xl font-bold text-center mb-8 text-yellow-400">MENU OURO</h3>
              
              <div className="space-y-6">
                <MenuItemGroup title="06 Acompanhamentos" />
                <MenuItemGroup title="01 Acompanhamento Especial" />
                <MenuItemGroup title="02 Réchaud" />
                <MenuItemGroup title="Carvão" />
                <MenuItemGroup title="Churrasqueiro" />
                <MenuItemGroup title="Auxiliares" />
                <MenuItemGroup title="GRELHADOS" isHighlighted />
                <MenuItemGroup title="Picanha Premium" />
                <MenuItemGroup title="Linguiça toscana" />
                <MenuItemGroup title="Linguiça Cuiabana" />
                <MenuItemGroup title="Linguiça apimentada" />
                <MenuItemGroup title="Coxinha de frango" />
                <MenuItemGroup title="Asinha de frango" />
                <MenuItemGroup title="Pão de alho artesanal" />
                <MenuItemGroup title="Queijo coalho" />
                <MenuItemGroup title="Incluso mão de obra e insumos para atender o evento." isNote />
              </div>
            </div>
          )}
          
          {activeTab === 'platina' && (
            <div className="menu-platina">
              <h3 className="text-3xl font-bold text-center mb-8 text-gray-300">MENU PLATINA</h3>
              
              <div className="space-y-6">
                <MenuItemGroup title="06 Acompanhamentos" />
                <MenuItemGroup title="03 Acompanhamentos Especiais" />
                <MenuItemGroup title="01 Sobremesa" />
                <MenuItemGroup title="01 Tempero do Chef" />
                <MenuItemGroup title="02 Molhos" />
                <MenuItemGroup title="03 Réchaud" />
                <MenuItemGroup title="Bebidas" />
                <MenuItemGroup title="Carvão" />
                <MenuItemGroup title="Churrasqueiro" />
                <MenuItemGroup title="Auxiliares" />
                <MenuItemGroup title="GRELHADOS" isHighlighted />
                <MenuItemGroup title="Picanha Angus Importada" />
                <MenuItemGroup title="Carré de Cordeiro" />
                <MenuItemGroup title="Prime rib Angus Importada" />
                <MenuItemGroup title="Assado de tira Angus Importado" />
                <MenuItemGroup title="Bife Ancho ou Chorizo Importado" />
                <MenuItemGroup title="Filé de Salmão" />
                <MenuItemGroup title="Incluso mão de obra e insumos para atender o evento." isNote />
              </div>
            </div>
          )}
        </div>
        
        {/* Seções adicionais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <MenuSection 
            title="ACOMPANHAMENTOS" 
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
            subtitle="Exclusivos dos Menus Ouro e Platina"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <MenuSection 
            title="MOLHOS"
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
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
                name: "CARRÉ DE CORDEIRO NA HORTELÃ",
                description: "Servido com uma variação do tradicional chimichurri para combinar perfeitamente com o cordeiro.",
                note: "**Disponível apenas no Menu Platina."
              },
              {
                name: "CARRÉ DE CORDEIRO MEDITERRÂNEO",
                description: "Um molho composto de iogurte grego, limão siciliano, páprica defumada e ervas frescas, é uma bomba de sabor cremosa e adocicada.",
                note: "**Disponível apenas no Menu Platina."
              }
            ]}
          />
          
          <MenuSection 
            title="MENU BEBIDAS"
            subtitle="Oferecemos a possibilidade de incluir bebidas em qualquer um dos Menus, com direito a copos descartáveis, gelo e garçons para servir os convidados. Estarão inclusos:"
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
        
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-6">
            Entre em contato conosco para solicitar um orçamento personalizado para seu evento!
          </p>
          <a 
            href="/#contato"
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
const MenuItemGroup = ({ title, isHighlighted = false, isNote = false }) => {
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
const MenuSection = ({ title, subtitle, items }) => {
  return (
    <div className="bg-gray-900 rounded-xl shadow-lg p-8">
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