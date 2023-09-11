module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier',
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  ignorePatterns: ['.cache', '.next', '.vite', 'dist', 'out', 'node_modules', 'test'],
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    jest: {
      version: 29,
    },
  },
  rules: {
    'react/jsx-key': 'off',
    'import/no-anonymous-default-export': 'off',
    'no-console': [
      'warn',
      {
        allow: ['error', 'warn', 'info'],
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages `node` related come first.
          ['^node(?!:?$)', '^dotenv'],
          // Packages `react` related come after.
          ['^react', '^@?\\w'],
          // Internal packages.
          ['^(@|components)(/.*|$)', '^(@|context)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Other relative imports. Put same-folder imports and `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Stylesheet file imports.
          ['^.+\\.?(css)$'],
        ],
      },
    ],
  },
  globals: {
    React: true,
    JSX: true,
  },
}
