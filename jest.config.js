export default {
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest', // для JSX/TSX преобразования
  },
  testEnvironment: 'jsdom', // необходимо для работы с DOM в тестах
  moduleFileExtensions: ['js', 'jsx', 'json'], // расширения файлов, которые Jest будет обрабатывать
}
