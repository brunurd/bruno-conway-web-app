export default {
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
      lines: 60,
      statements: 60,
      branches: 60,
      functions: 60,
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
};
