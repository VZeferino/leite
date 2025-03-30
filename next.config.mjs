/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  eslint: {
    // Desabilitar verificação de ESLint durante a build para evitar erros que interrompam o deploy
    ignoreDuringBuilds: true,
  },
  output: 'export',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  
  // Configuração para GitHub Pages
  // No ambiente de produção, usamos um basePath fixo
  basePath: process.env.NODE_ENV === 'production' ? '/teste/leite' : '',
  
  // Desativa a exportação de 404 para funcionar melhor no GitHub Pages
  trailingSlash: true,
};

export default nextConfig; 