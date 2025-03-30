import Image from 'next/image';

const TestimonialCard = ({ text, name, role, imageSrc }: {
  text: string;
  name: string;
  role: string;
  imageSrc: string;
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative h-16 w-16 rounded-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">&ldquo;{text}&rdquo;</p>
      <div className="mt-4 flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      text: "O Beijo do Dragão é simplesmente sensacional! A carne é preparada na perfeição e a finalização na mesa com o maçarico é um espetáculo à parte. Comida e entretenimento juntos!",
      name: "Carlos Silva",
      role: "Chef Executivo",
      imageSrc: "/testimonial-1.jpg"
    },
    {
      text: "Melhor restaurante de carnes de São Paulo! O atendimento é impecável e os cortes são de primeira qualidade. A experiência completa vale cada centavo.",
      name: "Marina Oliveira",
      role: "Crítica Gastronômica",
      imageSrc: "/testimonial-2.jpg"
    },
    {
      text: "Surpreendente! A técnica japonesa de grelhar dá um sabor único às carnes. O ambiente é aconchegante e elegante. Já estou planejando voltar com amigos.",
      name: "Ricardo Mendes",
      role: "Empresário",
      imageSrc: "/testimonial-3.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#9f0000]">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A opinião de quem já experimentou o verdadeiro Beijo do Dragão e viveu nossa experiência gastronômica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              name={testimonial.name}
              role={testimonial.role}
              imageSrc={testimonial.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 