module.exports = {
  preset: null,
  extensionsToTreatAsEsm: [],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {},
  transformIgnorePatterns: [
    'node_modules/(?!(supertest|mongoose)/)',
  ],
  testEnvironment: 'node',
};
