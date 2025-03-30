'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getPath } from '@/utils/path';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#9f0000] text-white z-50">
      <div className="container flex justify-between items-center py-2">
        <Link href="/" className="font-bold flex items-center gap-3">
          <Image 
            src={getPath('/logo.avif')} 
            alt="Dragon Kiss Logo" 
            width={50} 
            height={50}
            className="max-h-12 w-auto" 
          />
          <span className="text-xl md:text-2xl font-bold">DRAGON KISS</span>
        </Link>

        {/* Menu para desktop */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#sobre" className="hover:text-gray-200 transition-colors">
            Sobre
          </Link>
          <Link href="#menu" className="hover:text-gray-200 transition-colors">
            Cardápio
          </Link>
          <Link href="#local" className="hover:text-gray-200 transition-colors">
            Localização
          </Link>
          <Link href="#contato" className="hover:text-gray-200 transition-colors">
            Contato
          </Link>
          <Link 
            href="#reserva" 
            className="px-5 py-2 border border-white rounded hover:bg-white hover:text-[#9f0000] transition-colors">
            Fazer Reserva
          </Link>
        </div>

        {/* Botão menu mobile */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
        <div className="md:hidden bg-[#9f0000] pb-4">
          <div className="container flex flex-col gap-4">
            <Link 
              href="#sobre" 
              className="hover:text-gray-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              href="#menu" 
              className="hover:text-gray-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cardápio
            </Link>
            <Link 
              href="#local" 
              className="hover:text-gray-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Localização
            </Link>
            <Link 
              href="#contato" 
              className="hover:text-gray-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <Link 
              href="#reserva" 
              className="px-5 py-2 border border-white rounded text-center hover:bg-white hover:text-[#9f0000] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Fazer Reserva
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 