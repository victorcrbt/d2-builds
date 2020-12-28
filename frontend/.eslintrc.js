module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // 'prettier',
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  rules: {
    'arrow-parens': ['warn', 'as-needed'],
    'react/jsx-one-expression-per-line': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-console': ['warn', { allow: ['tron', 'warn', 'error'] }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    indent: 'off',
    'operator-linebreak': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-expressions': 'off',
    'react/button-has-type': 'off',
    'no-param-reassign': 'off',
    'arrow-body-style': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': [
      'error',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      alias: {
        map: [
          ['@src', './src'],
          ['@assets', './src/assets'],
          ['@components', './src/components'],
          ['@config', './src/config'],
          ['@constants', './src/constants'],
          ['@contexts', './src/contexts'],
          ['@helpers', './src/helpers'],
          ['@hocs', './src/hocs'],
          ['@hooks', './src/hooks'],
          ['@i18n', './src/i18n'],
          ['@pages', './src/pages'],
          ['@services', './src/services'],
          ['@store', './src/store'],
          ['@styles', './src/styles'],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
      // node: {
      //   extensions: ['.ts', '.tsx', '.js', '.jsx'],
      // },
    },
  },
};
