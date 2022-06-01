module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'jest': true
    },
    'extends': [
        'plugin:react/recommended',
        'prettier'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint',
        'prettier'
    ],
    'rules': {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
        'react/react-in-jsx-scope': 'off',
        'camelcase': 'error',
        'spaced-comment': 'error',
        'quotes': ['error', 'single'],
        'no-duplicate-imports': 'error'
    },
    'settings': {
        'import/resolver': {
          'typescript': {}
        }
    }
}
