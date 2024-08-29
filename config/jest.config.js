const path = require('node:path');

const jestConfig = {
  rootDir: process.cwd(),
  testPathIgnorePatterns: [
    '/.storybook/',
    '/dist/',
    '/coverage/',
    '/public/',
    '/config/',
  ],
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: './coverage',
      outputName: 'junit.xml',
    }],
  ],
  maxWorkers: 1,
  coverageThreshold: {
    global: {
      lines: 40,
      statements: 40,
      branches: 40,
      functions: 40,
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost/',
    customExportConditions: [''],
  },
  setupFilesAfterEnv: [
    '<rootDir>/.jest/setup.ts',
  ],
  setupFiles: [
    path.resolve(process.cwd(), 'config', 'jest.polyfills.js'),
  ],
};

module.exports = jestConfig;
