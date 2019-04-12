module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  setupFiles: ['./jest.setup.js'],
  setupFilesAfterEnv: ['./jest.extend.js'],
}
