module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    // "prettier",
  ],
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  plugins: ["react"],
  rules: {
    semi: ["error", "always"],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-max-props-per-line": [1, { maximum: 1 }],
    "react/jsx-first-prop-new-line": [1, "multiline"],
    "react/jsx-closing-bracket-location": [1, "line-aligned"],
    "react/react-in-jsx-scope": "off",
  },
};
