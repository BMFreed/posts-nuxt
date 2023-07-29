module.exports = {
  files: ['*.vue'],
  rules: {
    'vue/html-button-has-type': 'off',
    'vue/block-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: 'ts',
        },
      },
    ],
  },
};
