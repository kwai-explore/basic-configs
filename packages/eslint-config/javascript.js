// @ts-check
const { defineConfig } = require('eslint-define-config');

/**
 * @type {import('eslint-define-config').EslintConfig['rules']}
 */
const tsCheckRules = {
    'import/no-webpack-loader-syntax': 'off',
    'dot-notation': 'off',
    'no-unsafe-optional-chaining': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'lines-between-class-members': 'off',
    'default-param-last': 'off',
    'no-array-constructor': 'off',
    'no-dupe-class-members': 'off',
    'no-empty-function': 'off',
    'no-implied-eval': 'off',
    'no-new-func': 'off',
    'no-loss-of-precision': 'off',
    'no-loop-func': 'off',
    'no-magic-numbers': 'off',
    'no-redeclare': 'off',
    'no-shadow': 'off',
    'no-throw-literal': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'require-await': 'off',
    'no-return-await': 'off',
    // The following rules are enabled in Airbnb config, but are already checked (more thoroughly) by the TypeScript compiler
    // Some of the rules also fail in TypeScript files, for example: https://github.com/typescript-eslint/typescript-eslint/issues/662#issuecomment-507081586
    'constructor-super': 'off',
    'getter-return': 'off',
    'no-const-assign': 'off',
    'no-dupe-args': 'off',
    'no-dupe-keys': 'off',
    'no-func-assign': 'off',
    'no-new-symbol': 'off',
    'no-obj-calls': 'off',
    'no-this-before-super': 'off',
    'no-undef': 'off',
    'no-unreachable': 'off',
    'no-unsafe-negation': 'off',
    'valid-typeof': 'off',
    'import/named': 'off',
};

/**
 * @type {import('eslint-define-config').EslintConfig['rules']}
 */
const vueDisableRules = {
    'import/first': 'off',
};

/**
 * @type {import('eslint-define-config').EslintConfig['rules']}
 */
const deprecatedRules = {
    'lines-around-directive': 'off',
    'no-buffer-constructor': 'off',
    'no-new-require': 'off',
    'no-path-concat': 'off',
};

module.exports = defineConfig({
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaFeatures: {
            // ????????? return ??????????????? global ?????????
            globalReturn: false,
            // ???????????? script ??????
            impliedStrict: true,
        },
        // ???????????? babelrc ???????????????????????? babel-eslint ?????????
        requireConfigFile: false,
        // ????????? import export ??????????????????????????????
        allowImportExportEverywhere: false,
    },
    extends: ['eslint-config-airbnb-base', 'prettier'],
    rules: {
        curly: ['error', 'all'],
        /**
         * ??????????????????????????? this
         */
        'class-methods-use-this': 'off',
        /**
         * ??? Angular ?????? Vue ???????????????????????????
         */
        'import/prefer-default-export': 'off',
        'no-console': 'off',
        'spaced-comment': 'off',
        /**
         * ?????? prettier ??????
         */
        'prefer-template': 'off',
        /**
         * ???????????? require
         */
        'global-require': 'off',
        /**
         * ????????????????????????????????????????????????
         */
        'no-nested-ternary': 'off',
        /**
         * ?????? exhaustiveCheck
         */
        'no-case-declarations': 'off',
        'no-plusplus': 'off',
        'no-else-return': 'off',
        yoda: 'off',
        'no-extra-boolean-cast': 'off',
        camelcase: 'off',
        'import/no-deprecated': 'off',
        'import/namespace': 'off',
        'import/default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/newline-after-import': 'off',
        // ?????????????????????????????????????????????
        'import/no-extraneous-dependencies': 'off',
        'no-undef-init': 'off',
        'prefer-destructuring': 'off',
        'no-bitwise': 'off',
        'max-classes-per-file': 'off',
        'no-continue': 'off',
        'arrow-body-style': 'off',
        'no-await-in-loop': 'off',
        'no-lonely-if': 'off',
        'no-empty': 'off',
        'no-template-curly-in-string': 'off',
        'import/order': [
            'warn',
            {
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'internal',
                    },
                ],
                groups: [['external', 'builtin'], 'internal', ['parent', 'sibling', 'index'], 'object'],
            },
        ],
        'import/no-duplicates': ['error', { considerQueryString: true }],
        'require-atomic-updates': 'off', // FIXME: ???????????????????????????
        'no-undefined': 'off',
        'no-extra-parens': 'off',
        'max-params': 'off',
        'prefer-promise-reject-errors': 'off',
        'no-useless-return': 'off',
        /**
         * ???????????? for of
         */
        'no-restricted-syntax': 'off',
        'no-unneeded-ternary': 'off',
        /**
         * ????????????????????????????????????????????? undefined???????????????????????? undefined
         * @yutianxiang
         *
         * ??? ts ?????????????????????ts ??????
         * @lihongda03
         */
        'consistent-return': 'off',
        'func-names': 'error',
        ...tsCheckRules,
        ...vueDisableRules,
        ...deprecatedRules,
    },
});
