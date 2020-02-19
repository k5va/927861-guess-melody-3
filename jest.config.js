module.exports = {
  verbose: true,
  setupFiles: [`./jest.setup.js`],
  moduleNameMapper: {
    "@components": `<rootDir>/src/components/`,
    "@consts": `<rootDir>/src/consts/`,
    "@utils": `<rootDir>/src/utils/`,
    "@hocs": `<rootDir>/src/hocs/`,
    "@mocks": `<rootDir>/src/mocks/`,
  }
};
