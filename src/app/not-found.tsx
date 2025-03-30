import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-6xl font-bold text-[#ff0000] mb-6">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Página não encontrada</h2>
        <p className="text-lg mb-8 max-w-lg">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link 
          href="/" 
          className="px-6 py-3 bg-[#ff0000] text-white font-bold rounded-lg hover:bg-[#cc0000] transition-colors"
        >
          Voltar para página inicial
        </Link>
      </div>
      <Footer />
    </main>
  );
} 