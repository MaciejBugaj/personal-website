module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "standard",
    "standard",
    "prettier",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-empty-function": "off",
    "space-before-function-paren": "off",
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "_" }],
    "@typescript-eslint/no-explicit-any": "off",
  },
  globals: {
    JSX: "readonly",
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
};
