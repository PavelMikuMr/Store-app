module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:tailwindcss/recommended'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier', 'tailwindcss'],
  rules: {
    'react/react-in-jsx-scope': ['off'],
    'react/require-default-props': 0,
    'react/button-has-type': 0,
    'react/no-unused-prop-types': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/prop-types': 1,
    'react/jsx-no-useless-fragment': [2, { allowExpressions: true }],
    'react/jsx-props-no-spreading': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-shadow': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'tailwindcss/no-custom-classname': 0,
    'no-undef': 0,
    'no-unused-vars': 1,
    'consistent-return': 1,
    'no-console': 1,
    'import/prefer-default-export': 0,
    // for redux props
    'no-param-reassign': ['error', { props: false }],
    // classes
    // Enforce that class methods utilize this
    'class-methods-use-this': 'warn',
    'no-underscore-dangle': [
      'error',
      { enforceInClassFields: false, allowAfterThis: true, allow: ['foo_', '_bar'] }
    ],
    'global-require': 0,
    'linebreak-style': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/no-extraneous-dependencies': 0,
    'tailwindcss/classnames-order': 0
  }
}
