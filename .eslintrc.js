const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error'
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    indent: [1, 2, { SwitchCase: 1 }],
    // camelcase: RULES.OFF,
    'no-undef': RULES.OFF,
    'no-unused-vars': RULES.OFF,
    'no-use-before-define': RULES.OFF,
    'react/jsx-boolean-value': RULES.OFF,
    'react/jsx-first-prop-new-line': RULES.OFF,
    'react/prop-types': RULES.OFF,
    'react/react-in-jsx-scope': RULES.OFF
  }
}
