/**
 * @file ESlint flat config
 */
const globals = require("globals");
const pluginJs = require("@eslint/js");
const jsdoc = require('eslint-plugin-jsdoc');

/** @type {import('eslint').Linter.Config[]} */
module.exports = {
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node
    }
  },
  ...pluginJs.configs.recommended,
  ...jsdoc.configs['flat/recommended'],
  plugins: {
    jsdoc
  },
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
    curly: 'warn',
    indent: ['warn', 2, { ArrayExpression: 'first', SwitchCase: 1 }],
    'no-multiple-empty-lines': ['warn', { max: 2 }],
    'no-multi-spaces': ['warn', { ignoreEOLComments: true }],

    /** JSDoc rules */
    'jsdoc/require-jsdoc': ['error', { require: { ClassDeclaration: true, FunctionDeclaration: true, MethodDefinition: true }, checkConstructors: false }],
    "jsdoc/check-access": 1, // Recommended
    "jsdoc/check-alignment": 1, // Recommended
    // "jsdoc/check-examples": 1,
    "jsdoc/check-indentation": 1,
    "jsdoc/check-line-alignment": 1,
    "jsdoc/check-param-names": 1, // Recommended
    "jsdoc/check-template-names": 1,
    "jsdoc/check-property-names": 1, // Recommended
    "jsdoc/check-syntax": 1,
    "jsdoc/check-tag-names": 1, // Recommended
    "jsdoc/check-types": 1, // Recommended
    "jsdoc/check-values": 1, // Recommended
    "jsdoc/empty-tags": 1, // Recommended
    "jsdoc/implements-on-classes": 1, // Recommended
    // "jsdoc/informative-docs": 1,
    // "jsdoc/match-description": 1,
    "jsdoc/multiline-blocks": 1, // Recommended
    "jsdoc/no-bad-blocks": 1,
    "jsdoc/no-blank-block-descriptions": 1,
    "jsdoc/no-defaults": 1,
    // "jsdoc/no-missing-syntax": ['warn', {contexts:['FunctionDeclaration']}],
    "jsdoc/no-multi-asterisks": 1, // Recommended
    // "jsdoc/no-restricted-syntax": 1,
    // "jsdoc/no-types": 1,
    "jsdoc/no-undefined-types": 1, // Recommended
    "jsdoc/require-asterisk-prefix": 1,
    "jsdoc/require-description": 1,
    // "jsdoc/require-example": 1,
    "jsdoc/require-file-overview": 1,
    "jsdoc/require-hyphen-before-param-description": 1,
    "jsdoc/require-param": 1, // Recommended
    "jsdoc/require-param-description": 1, // Recommended
    "jsdoc/require-param-name": 1, // Recommended
    "jsdoc/require-param-type": 1, // Recommended
    "jsdoc/require-property": 1, // Recommended
    "jsdoc/require-property-description": 1, // Recommended
    "jsdoc/require-property-name": 1, // Recommended
    "jsdoc/require-property-type": 1, // Recommended
    "jsdoc/require-returns": 1, // Recommended
    "jsdoc/require-returns-check": 1, // Recommended
    "jsdoc/require-returns-description": 1, // Recommended
    "jsdoc/require-returns-type": 1, // Recommended
    "jsdoc/require-template": 1,
    "jsdoc/require-throws": 1,
    "jsdoc/require-yields": 1, // Recommended
    "jsdoc/require-yields-check": 1, // Recommended
    "jsdoc/sort-tags": 1,
    "jsdoc/tag-lines": 1, // Recommended
    "jsdoc/valid-types": 1, // Recommended
  }
};
