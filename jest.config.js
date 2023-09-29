/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/__mocks__/singleton.ts'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '^@/(.*)$': '<rootDir>/$1',
    '__mocks__/(.*)$': '<rootDir>/__mocks__/$1',
  },
}
