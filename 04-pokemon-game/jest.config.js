module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue3-jest',
    '^.+\\js$': 'babel-jest',
  },
  transformIgnorePatterns: ["/node_modules/(?!axios)/"],
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
  ],
}
