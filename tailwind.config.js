/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // Путь к вашему HTML файлу
    './src/**/*.{js,jsx,ts,tsx}', // Путь ко всем компонентам, где используются классы tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
