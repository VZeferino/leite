import Image from 'next/image';
import { getPath } from '@/utils/path';

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
          <h3 className="font-bold text-lg text-[#9f0000]">{name}</h3>
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
      text: "Contratei para o meu aniversário e o serviço foi excelente, a comida maravilhosa e todos saíram extremamente satisfeitos da minha festa, até os vegetarianos amaram.",
      name: "Livia Volpe",
      role: "Cliente",
      imageSrc: getPath("/testimonial-1.jpg")
    },
    {
      text: "Experiência super positiva, organização, higiene, sabor, cordialidade e excelente apresentação. Super recomendo!!!",
      name: "Katia Franco",
      role: "Cliente",
      imageSrc: "https://ui-avatars.com/api/?name=K+F&background=9f0000&color=fff&size=100"
    },
    {
      text: "Equipe super atenciosos e prestativos, comida saborosa e bem preparada, gostei muito",
      name: "Aureni Couto",
      role: "Cliente",
      imageSrc: "https://ui-avatars.com/api/?name=A+C&background=9f0000&color=fff&size=100"
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

        <div className="text-center mt-12">
          <a 
            href="https://www.google.com/search?sca_esv=125590fea1908471&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzYQrvZvUiOOelDr1E2vT3Xz15Yl9OkFA6dTvv26fYXh4QtCK9y9a2f8ZAEkhCyqh8VlhqtvaAvhkre3xT0G7iadlWDMse4DtHGNDzxMGrnrgw_6mjdlcXngPeivaosIUkiWchos%3D&q=Dragon+Kiss+%E2%80%93+Buffet+e+Churrasco+a+Domic%C3%ADlio+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#9f0000] text-white font-bold rounded-lg hover:bg-[#800000] transition-colors"
          >
            Ver mais avaliações no Google
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 