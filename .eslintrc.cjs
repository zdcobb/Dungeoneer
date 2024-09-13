module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: [
    "node_modules/*",
    "public/mockServiceWorker.js",
    "generators/*",
  ],
  extends: ["eslint:recommended"],
  plugins: ["react", "@typescript-eslint", "prettier"],
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],

      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended",
        // "plugin:tailwindcss/recommended",
        "plugin:vitest/legacy-recommended",
      ],
      rules: {
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/explicit-function-return-type": ["off"],
        "@typescript-eslint/explicit-module-boundary-types": ["off"],
        "@typescript-eslint/no-empty-function": ["off"],
        "@typescript-eslint/no-explicit-any": ["off"],
        "import/default": "off",
        "import/order": [
          "error",
          {
            groups: [
              "builtin",
              "external",
              "internal",
              "parent",
              "sibling",
              "index",
              "object",
            ],
            "newlines-between": "always",
            alphabetize: { order: "asc", caseInsensitive: true },
          },
        ],
        "import/no-cycle": "error",
        "import/no-named-as-default": "off",
        "import/no-named-as-default-member": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "linebreak-style": ["error", "unix"],
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "prettier/prettier": ["error", {}, { usePrettierrc: true }],
      },
    },
  ],
};
