module.exports = {
    preset: 'react-native',
    testMatch: ['<rootDir>/__tests__/**/*.test.js'],
    transformIgnorePatterns: [
      'node_modules/(?!(react-native|expo-router)/)',
    ],
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.jest.json',
      },
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  };
  