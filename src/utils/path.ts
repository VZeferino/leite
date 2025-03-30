/**
 * Utilitário para ajustar caminhos de arquivos de acordo com o basePath configurado
 */

// Obtém o basePath do ambiente (conforme definido no next.config.mjs)
const basePath = process.env.NODE_ENV === 'production' ? '/teste/leite' : '';

/**
 * Ajusta o caminho fornecido para incluir o basePath quando necessário
 */
export function getPath(path: string): string {
  // Se o caminho já começar com http ou https, não modifica
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Garante que o caminho comece com /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Retorna o caminho com o basePath
  return `${basePath}${normalizedPath}`;
} 