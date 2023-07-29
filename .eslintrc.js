const prettierConfig = require('./.prettierrc');
const vueOverrides = require('./eslint/vueOverrides');
const configOverrides = require('./eslint/configOverrides');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['eslint-plugin-nuxt', 'eslint-plugin-vue'],
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'plugin:nuxt/recommended',
    'hardcore',
    'hardcore/vue',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  rules: {
    'arrow-body-style': ['error', 'always'],
    'func-style': ['error', 'expression'],
    'putout/putout': 'off',
    'ext/lines-between-object-properties': ['error', 'never'],
    quotes: ['error', 'single'],
    'prettier/prettier': ['error', prettierConfig],
    'max-len': [
      'error',
      {
        code: prettierConfig.printWidth,
        comments: prettierConfig.printWidth,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
  overrides: [configOverrides, vueOverrides],
};
