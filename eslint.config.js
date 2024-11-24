/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  {
    files: ["src/**/*.tsx?"],
    extends: [
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
    ],
    ignores: ["vite.config.ts"],
    parser: "@typescript-eslint/parser",
    parserOptions: { project: ["./tsconfig.json"] },
    root: true,
    rules: {
      "import/no-anonymous-default-export": "off",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
