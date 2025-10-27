// Простая функция для правильных путей к изображениям
export function getImagePath(path: string): string {
  // Для GitHub Pages используем фиксированный baseURL
  const baseURL = '/nastya-2025/'
  
  // Убираем ведущий слеш если есть
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // Возвращаем полный путь с baseURL
  return `${baseURL}${cleanPath}`
}
