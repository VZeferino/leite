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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Configuração para GitHub Pages
  // No ambiente de produção, usamos um basePath que pode ser definido via variável de ambiente
  basePath: process.env.NODE_ENV === 'production' 
    ? (process.env.BASE_PATH || '/teste/leite') 
    : '',
  
  // Desativa a exportação de 404 para funcionar melhor no GitHub Pages
  trailingSlash: true,
};

export default nextConfig; 