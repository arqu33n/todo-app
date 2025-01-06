export default {
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest', // Для обработки файлов JSX/TSX
  },
  testEnvironment: 'jsdom', // Для работы с DOM в тестах
  moduleFileExtensions: ['js', 'jsx', 'json'], // Расширения файлов, которые Jest будет обрабатывать
  setupFilesAfterEnv: ['./src/setupTests.js'],
  transformIgnorePatterns: [
    '/node_modules/(?!react-router-dom|other-package-to-transform)/', // Убедитесь, что нужные пакеты будут обработаны Babel
  ],
}
