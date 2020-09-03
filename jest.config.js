/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest/utils');

/**
 * @type {import('./tsconfig.json')}
 */
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  bail: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  testPathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/config',
    '<rootDir>/dist',
  ],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
};
