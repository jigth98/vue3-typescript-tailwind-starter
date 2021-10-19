module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        '@vue/typescript/recommended',
        '@vue/prettier/@typescript-eslint',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/eslint-recommended',
        //'prettier', // Avoid conflicts between prettier and eslint
    ],
    parserOptions: {
        ecmaVersion: 2020,
        parser: require.resolve('@typescript-eslint/parser'),
    },
    plugins: ['@typescript-eslint'],

    // Prerequisite `eslint-plugin-vue`, being extended, sets
    // root property `parser` to `'vue-eslint-parser'`, which, for code parsing,
    // in turn delegates to the parser, specified in `parserOptions.parser`:
    // https://github.com/vuejs/eslint-plugin-vue#what-is-the-use-the-latest-vue-eslint-parser-error
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'vue/script-indent': ['error', 4, { baseIndent: 0 }],
        'comma-dangle': ['error', 'only-multiline'],
        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 1,
                switchCase: 0,
                ignores: [],
            },
        ],
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                // The core 'no-unused-vars' rules (in the eslint:recommeded ruleset)
                // does not work with type definitions
                'no-unused-vars': 'off',
            },
        },
    ],
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
    },
}
