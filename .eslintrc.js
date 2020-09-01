module.exports = {
  extends: ['ruppy-node', 'plugin:@typescript-eslint/recommended'],
  env: { node: true, jest: true },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  settings: { 'import/resolver': { typescript: {} } },
  rules: {
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
