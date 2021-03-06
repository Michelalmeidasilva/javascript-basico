export default {
  env: {
    browser: true,
    es2015: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: [2, 'single'],
    semi: [2, 'never'],
    'comma-dangle': [2, 'never'],
    'no-trailing-spaces': [2],
    'prettier/prettier': 2,
    'space-before-function-paren': 0,
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: false }]
  }
}
