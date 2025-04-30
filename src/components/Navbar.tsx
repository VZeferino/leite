'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getPath } from '@/utils/path';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <nav className="bg-[#9f0000] text-white z-50">
      <div className="px-4 flex items-center justify-between h-14">
        <Link href="/" className="flex items-center">
          <div className="flex items-center">
            <Image 
              src={getPath('/logo.avif')} 
              alt="Dragon Kiss Logo" 
              width={32} 
              height={32}
              className="w-8 h-8 md:w-[50px] md:h-[50px]" 
              priority
            />
            <span className="ml-2 text-sm md:text-2xl font-bold whitespace-nowrap">DRAGON KISS</span>
          </div>
        </Link>

        {/* Menu para desktop */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href={isHomePage ? "#sobre" : "/#sobre"} className="hover:text-gray-200 transition-colors">
            Sobre
          </Link>
          <Link href={isHomePage ? "#menu" : "/#menu"} className="hover:text-gray-200 transition-colors">
            Cardápio
          </Link>
          <Link href="/galeria" className="hover:text-gray-200 transition-colors">
            Galeria
          </Link>
          <Link href={isHomePage ? "#contato" : "/#contato"} className="hover:text-gray-200 transition-colors">
            Contato
          </Link>
          <Link 
            href={isHomePage ? "#contato" : "/#contato"} 
            className="px-5 py-2 border border-white rounded hover:bg-white hover:text-[#9f0000] transition-colors">
            Agendar Evento
          </Link>
        </div>

        {/* Botão menu mobile */}
        <button 
          className="flex md:hidden items-center justify-center w-8 h-8 flex-shrink-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#9f0000] border-t border-[#ff0000]">
          <div className="flex flex-col py-2">
            <Link 
              href={isHomePage ? "#sobre" : "/#sobre"} 
              className="px-4 py-2 hover:bg-[#8f0000] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              href={isHomePage ? "#menu" : "/#menu"} 
              className="px-4 py-2 hover:bg-[#8f0000] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cardápio
            </Link>
            <Link 
              href="/galeria" 
              className="px-4 py-2 hover:bg-[#8f0000] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Galeria
            </Link>
            <Link 
              href={isHomePage ? "#contato" : "/#contato"} 
              className="px-4 py-2 hover:bg-[#8f0000] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <Link 
              href={isHomePage ? "#contato" : "/#contato"} 
              className="mx-4 my-2 px-4 py-2 border border-white rounded text-center hover:bg-white hover:text-[#9f0000] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Agendar Evento
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 