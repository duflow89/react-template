/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],

  collectCoverageFrom: ['<rootDir>/src/store/**/*.[jt]s?(x)', '<rootDir>/src/utils/**/*.[jt]s?(x)'],

  rootDir: '../',

  roots: ['<rootDir>/src'],

  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },

  globals: {
    __dirname: '<rootDir>',
  },

  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)?$',

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.ts',
    '^~/(.*)$': '<rootDir>/src/$1',
  },
};
