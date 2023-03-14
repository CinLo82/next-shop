module.export = {
  root:true,
  env: { 
    browser:true, 
    amd:true, 
    es6:true },
  extends: [
    'eslint:recommended', 
    'plugin: jsx-a11y/recommended', 
    'plugin:prettier/recommended', 
    'next', 
    'prettier',
    'next/core-web-vitals',
    'plugin:import/recommended',
    'plugin:next/recommended'
  ],
  plugins: [
    'next'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  rules: {
    semi: ['error', 'always'],
    'prettier/prettier': 0,
    'import/order': ['error'],
    'import/extensions': ['warn', 'never'],
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off'
    }
  },
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.jsx'],
        map: [
          ['@hooks', './src/hooks'],
          ['@context', './src/context'],
          ['@components', './src/components'],
          ['@containers', './src/containers'],
          ['@styles', './src/styles'],
          ['@icons', './src/assets/icons'],
          ['@logos', './src/assets/logos'],
          ['@gifs', './src/assets/gifs'],
        ],
      },
    },
  },
}