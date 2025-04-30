/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  eslint: {
    // Desabilitar verificação de ESLint durante a build para evitar erros que interrompam o deploy
    ignoreDuringBuilds: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Configuração para GitHub Pages com domínio personalizado
  // Como agora estamos usando um domínio personalizado, não precisamos mais do basePath
  basePath: '',
  
  // Desativa a exportação de 404 para funcionar melhor no GitHub Pages
  trailingSlash: true,
  
  // Configuração adicional para assets estáticos
  assetPrefix: '',
};

export default nextConfig; 