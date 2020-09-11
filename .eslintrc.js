module.exports = {
  extends: ['ruppy-node', 'plugin:@typescript-eslint/recommended'],
  env: { jest: true },
  parserOptions: { parser: '@typescript-eslint/parser', sourceType: 'module' },
  plugins: ['@typescript-eslint'],
  settings: { 'import/resolver': { typescript: {} } },
  rules: {
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
