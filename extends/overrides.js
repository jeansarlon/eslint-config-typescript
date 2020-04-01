module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: [
        '@typescript-eslint'
      ],
      rules: {
        // Checked by Typescript - ts(2378)
        // https://eslint.org/docs/rules/getter-return
        'getter-return': 'off',
        // Checked by Typescript - ts(2300)
        // https://eslint.org/docs/rules/no-dupe-args
        'no-dupe-args': 'off',
        // Checked by Typescript - ts(1117)
        // https://eslint.org/docs/rules/no-dupe-keys
        'no-dupe-keys': 'off',
        // Checked by Typescript - ts(7027)
        // https://eslint.org/docs/rules/no-unreachable
        'no-unreachable': 'off',
        // Checked by Typescript - ts(2367)
        // https://eslint.org/docs/rules/valid-typeof
        'valid-typeof': 'off',
        // Checked by Typescript - ts(2588)
        // https://eslint.org/docs/rules/no-const-assign
        'no-const-assign': 'off',
        // Checked by Typescript - ts(2588)
        // https://eslint.org/docs/rules/no-new-symbol
        'no-new-symbol': 'off',
        // Checked by Typescript - ts(2376)
        // https://eslint.org/docs/rules/no-this-before-super
        'no-this-before-super': 'off',
        // This is checked by Typescript using the option `strictNullChecks`.
        // https://eslint.org/docs/rules/no-undef
        'no-undef': 'off',
        // This is already checked by Typescript.
        // https://eslint.org/docs/rules/no-dupe-class-members
        'no-dupe-class-members': 'off',
        // This is already checked by Typescript.
        // https://eslint.org/docs/rules/no-redeclare
        'no-redeclare': 'off',
        // Typescript allows const and let instead of var.
        // https://eslint.org/docs/rules/no-vars
        'no-var': 'error',
        // https://eslint.org/docs/rules/prefer-const
        'prefer-const': 'error',
        // The rest parameters should be prefered in Typescript.
        // https://eslint.org/docs/rules/prefer-rest-params
        'prefer-rest-params': 'error',
        // The spread operator should be prefered in Typescript.
        // https://eslint.org/docs/rules/prefer-spread
        'prefer-spread': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
        '@typescript-eslint/array-type': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
        '@typescript-eslint/ban-types': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
        '@typescript-eslint/class-name-casing': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
        '@typescript-eslint/consistent-type-assertions': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
        '@typescript-eslint/consistent-type-definitions': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          { overrides: { constructors: 'no-public' } }
        ],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/interface-name-prefix.md
        '@typescript-eslint/interface-name-prefix': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
        '@typescript-eslint/no-empty-interface': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
        '@typescript-eslint/no-explicit-any': 'warn',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
        '@typescript-eslint/no-inferrable-types': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
        '@typescript-eslint/no-misused-new': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
        '@typescript-eslint/no-namespace': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
        '@typescript-eslint/no-non-null-assertion': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
        '@typescript-eslint/no-parameter-properties': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
        '@typescript-eslint/no-var-requires': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
        '@typescript-eslint/triple-slash-reference': 'error',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
        '@typescript-eslint/type-annotation-spacing': 'error'
      }
    }
  ]
}
