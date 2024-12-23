import globals from "globals";
import eslint from "@eslint/js";

import prettier from 'eslint-plugin-prettier/recommended';
import react from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      "dist/*",
      "*.js",
      "*.cjs",
      "*.mjs",
    ],
  },
  {
    languageOptions: {
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  eslint.configs.recommended,
  react.configs.flat.recommended,

  prettier,
];