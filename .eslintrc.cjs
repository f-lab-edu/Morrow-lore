module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "react-refresh"],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  rules: {
    "no-var": "warn",
    eqeqeq: "warn",
    "react/prop-types": 0,
    "no-extra-semi": "error",
    "no-console": ["off"],
    "import/prefer-default-export": ["off"],
    "react-hooks/exhaustive-deps": ["warn"],
    "react/jsx-pascal-case": "warn",
    "react/jsx-key": "warn",
    "no-debugger": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "react/function-component-definition": [
      2,
      { namedComponents: ["arrow-function", "function-declaration"] },
    ],
    "react/react-in-jsx-scope": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-one-expression-per-line": 0,
    "no-nested-ternary": 0,
    "react/jsx-curly-brace-presence": [
      "warn",
      { props: "never", children: "never" },
    ],
    "import/no-unresolved": ["error", { caseSensitive: false }],
    "import/no-extraneous-dependencies": 0,
    "no-shadow": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "import/extensions": ["off"],
    "linebreak-style": 0,
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
