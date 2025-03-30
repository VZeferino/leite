/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export',
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  
  // Configuração para GitHub Pages
  // Ajusta automaticamente o basePath com base no repositório
  basePath: process.env.NODE_ENV === 'production' 
    ? (process.env.GITHUB_REPOSITORY 
        ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` 
        : '/teste/leite')
    : '',
  
  // Desativa a exportação de 404 para funcionar melhor no GitHub Pages
  trailingSlash: true,
};

export default nextConfig; 