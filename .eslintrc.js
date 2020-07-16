module.exports = {
    extends: [
        'react-app',
        'airbnb-base',
    ],
    env: {
        browser: true,
        node: true,
    },
    rules: {
        indent: ['error', 4],
        'max-len': ['error', { code: 120 }],
        'object-curly-newline': ['error', {
            ObjectPattern: { multiline: true, minProperties: 10 },
        }],
        'arrow-parens': ['error', 'as-needed'],
    },
};
