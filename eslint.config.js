const globals = require("globals");
const pluginJs = require("@eslint/js");

/** @type {import('eslint').Linter.Config[]} */
module.exports = {
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node
    }
  },
  ...pluginJs.configs.recommended,
  rules: {
      semi: 'warn',
      "eol-last": 'warn',
      "no-trailing-spaces": 'warn',
      "default-case": 'error',
      "default-case-last": 'warn',
      "no-const-assign": 'warn',
      "no-invalid-regexp": 'error',
      "no-unreachable": 'error',
      "no-useless-assignment": 'warn',
      "block-scoped-var": 'error',
      "capitalized-comments": ["warn", "always", { "ignoreConsecutiveComments": true }],
      "no-unneeded-ternary": 'warn',
      "no-unused-expressions": 'warn',
      "no-useless-catch": 'warn',
      "no-var": 'warn',
      "prefer-const": 'warn',
      curly: 'warn'
  }
};
