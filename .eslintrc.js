module.exports = {
    'extends': [
        'esnext',
        'airbnb',
    ],
    'env': {
        'browser': true,
        'node': true,
        'es6': true,
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
        'global-require': 0,

        'import/no-extraneous-dependencies': 0,
        'import/no-unresolved': 0,
        'import/no-commonjs': 0,
        'import/no-nodejs-modules': 0,

        'no-console': 0,
        'no-plusplus': 0,
        'no-param-reassign': 0,
        'no-restricted-syntax': [2, 'WithStatement'],
        'no-invalid-this': 0,

        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': 0,
        'react/prefer-stateless-function': 0,
    }
};