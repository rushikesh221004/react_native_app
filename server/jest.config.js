module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/src/__tests__/**/*.test.ts'],
  maxWorkers: 1,
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup.ts'],
};
