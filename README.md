# eslint-config-typescript

This package provides Typescript `.eslintrc` as an extensible shared config.

## Usage

It requires:
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint`

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "@jeansarlon/eslint-config-typescript" peerDependencies
  ```

  Which produces and runs a command like:

  ```sh
    npm install --save-dev @jeansarlon/eslint-config-typescript @typescript-eslint/eslint-plugin@^
    #.#.# @typescript-eslint/parser@^#.#.# eslint@^#.#.#
  ```

2. Add `extends: '@jeansarlon/eslint-config-typescript'` to your project's `.eslintrc`.
