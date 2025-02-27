module.exports = {
  extends: [
    "next",
    "airbnb",
    "airbnb-typescript",
    "plugin:react/jsx-runtime",
    "prettier",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:typescript-sort-keys/recommended",
    "plugin:storybook/recommended",
  ],
  plugins: [
    "react",
    "@typescript-eslint",
    "sort-keys-fix",
    "typescript-sort-keys",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["**/*.js", "**/*.d.ts"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.stories.*", "**/*.test.*", "jest.*"] },
    ],
    "@typescript-eslint/quotes": "off",
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        shorthandFirst: true,
      },
    ],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "sort-keys-fix/sort-keys-fix": "error",
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
      },
    ],
    "no-console": "error",
    "@typescript-eslint/comma-dangle": "off",
    "import/prefer-default-export": "off",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "operator-linebreak": "off",
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/indent": "off",
    "implicit-arrow-linebreak": "off",
    "react/require-default-props": "off",
    "object-curly-newline": "off",
    "consistent-return": "off",
  },
};
