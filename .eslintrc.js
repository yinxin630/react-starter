module.exports = {
    'extends': "airbnb",
    'env': {
        'browser': true,
        'node': true,
    },
    'plugins': [
        'react',
        'jsx-a11y',
        'import'
    ],
    'globals': [
        'window',
    ],
    'rules': {
        'indent': [2, 4],
        'import/no-extraneous-dependencies': 0,
        'import/no-unresolved': 0,
        'global-require': 0,
        'no-console': 0,
        'no-plusplus': 0,
        'no-param-reassign': 0,
        'no-restricted-syntax': [2, 'WithStatement'],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': 0,
        'react/prefer-stateless-function': 0,
    }
};