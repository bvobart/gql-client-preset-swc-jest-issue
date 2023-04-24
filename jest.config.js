module.exports = {
  testMatch: undefined, // undefined since testRegex is defined.
  testRegex: '(/__tests__/.*|(\\.|/)test)\\.(js?|ts?)$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  modulePathIgnorePatterns: ['<rootDir>/.*/__mocks__'],
  transform: {
    '^.+\\.tsx?$': ['@swc/jest'],
  },
};
