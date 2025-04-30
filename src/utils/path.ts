/**
 * Utilitário para ajustar caminhos de arquivos de acordo com o basePath configurado
 */

// Agora que estamos usando um domínio personalizado, não precisamos mais do basePath
const basePath = '';

/**
 * Ajusta o caminho fornecido para incluir o basePath quando necessário
 */
export function getPath(path: string): string {
  // Se o caminho já começar com http ou https, não modifica
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Remove barras duplicadas e garante que o caminho comece com /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const cleanPath = normalizedPath.replace(/\/+/g, '/');
  
  // Retorna o caminho com o basePath (que agora está vazio)
  return `${basePath}${cleanPath}`;
} 