const prettierConfig = require('../.prettierrc')
const configOverrides = require('./configOverrides')
const vueOverrides = require('./vueOverrides')

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  plugins: ['eslint-plugin-nuxt', 'eslint-plugin-vue', 'nested-if'],
  extends: ['plugin:nuxt/recommended', 'hardcore', 'hardcore/vue'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'single'],
    'arrow-body-style': ['error', 'always'],
    'func-style': ['error', 'expression'],
    'putout/putout': 'off',
    'ext/lines-between-object-properties': ['error', 'never'],
    'prettier/prettier': ['error', prettierConfig],
    'max-len': [
      'error',
      {
        code: prettierConfig.printWidth,
        comments: prettierConfig.printWidth + 40,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'nested-if/nested-if-statements': ['error', 2],
    '@typescript-eslint/explicit-function-return-type': 'error',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'never', { vue: 'always' }],
  },
  overrides: [configOverrides, vueOverrides],
}
