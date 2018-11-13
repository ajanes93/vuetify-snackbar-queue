module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': 'off',
        'vue/script-indent': ['error', 4, {
            'baseIndent': 1,
            'switchCase': 1
        }],
        'no-case-declarations': 0,
        'no-unused-vars': 0,
        //Turn off requiring ===
        'eqeqeq': 0,
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    globals: {
        moment: true,
        accounting: true,
        _: true,
        uuid: true,
        md5: true,
        google: true
    }
}
