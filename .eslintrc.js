module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  ignorePatterns: ["**/*.svg", "**/*.ico", "**/*.png", "**/*.scss", "**/*.md", "**/*.yml", "node_modules", "dist", ".cache", "public", ".eslintrc.js"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
