module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '**/*.{js,html}',
    '!node_modules/**',
    '!coverage/**',
    '!jest.config.js'
  ],
  testMatch: [
    '**/tests/**/*.test.js'
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  }
};
