module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      'vue',
    ],
    rules: {
      'no-console': 'off',
      'no-debugger': 'off',
    },
    globals: {
      google: 'readonly',
    },
  };
  