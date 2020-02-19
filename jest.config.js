module.exports = {
  verbose: true,
  setupFiles: [`./jest.setup.js`],
  moduleNameMapper: {
    "@components": `<rootDir>/src/components/`,
    "@consts": `<rootDir>/src/consts/`,
    "@mocks": `<rootDir>/src/mocks/`,
  }
};
