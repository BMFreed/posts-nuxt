module.exports = {
  '@typescript-eslint/explicit-function-return-type': 'error',
  // Дальше переопределяем правила из config-hardcore
  '@typescript-eslint/quotes': 'off',
  '@typescript-eslint/strict-boolean-expressions': 'off',
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'default',
      format: ['strictCamelCase'],
    },
    {
      selector: 'function',
      format: ['strictCamelCase', 'StrictPascalCase'],
    },
    {
      selector: ['enumMember', 'typeParameter'],
      format: ['StrictPascalCase'],
    },
    {
      selector: ['typeAlias'],
      format: ['StrictPascalCase'],
      prefix: ['T'],
    },
    {
      selector: ['interface'],
      format: ['StrictPascalCase'],
      prefix: ['I'],
    },
    {
      selector: ['objectLiteralProperty'],
      format: null,
      modifiers: ['requiresQuotes'],
    },
  ],
}
