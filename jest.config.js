// jest.config.js
export default {
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.vue$": "vue-jest",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
