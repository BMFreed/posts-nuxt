const prettierConfig = require('../.prettierrc')
const configOverrides = require('./configOverrides')
const vueOverrides = require('./vueOverrides')
const typeScriptRules = require('./rulesets/typeScriptRules')

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  plugins: ['nested-if'],
  extends: [
    'plugin:nuxt/recommended',
    'hardcore',
    'hardcore/ts',
    'hardcore/vue',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  ignorePatterns: ['.*rc.js', 'eslint/**'],
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
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'never',
      // Указание формата vue необходимо для корректного резолва файлов:
      // https://github.com/vitejs/vite/issues/178
      { vue: 'always' },
    ],
    ...typeScriptRules,
  },
  overrides: [configOverrides, vueOverrides],
}
