module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
    'plugin:react/recommended',
  ],
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js, cjs}', '*.js', '*.jsx',
      ],
      'parserOptions': {
        'sourceType': 'module',
      },
    },
  ],
  settings: {
    react: {
      version: '^18.2.0',
    },
  },
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],

  'rules': {
    'max-len': ['error', {code: 120}],
    'react/prop-types': 'off',
    'object-curly-spacing': ['error', 'always'],
    'react/no-unescaped-entities': 'off',
    'react/jsx-no-comment-textnodes': 'off',
  },
};
