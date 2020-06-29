module.exports = {
  testEnvironment: "jest-environment-node",
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/build/"],
  testRegex: "(\\.|/)(test|spec)\\.[jt]sx?$",
  transform: {
    "^.+\\.jsx?$": "babel-jest", // esm someday
  },
  transformIgnorePatterns: [],
  modulePaths: ["<rootDir>/test", "<rootDir>/src"],
  modulePathIgnorePatterns: ["<rootDir>/build"],
  setupFiles: ["./jest.setup.js"],
};
