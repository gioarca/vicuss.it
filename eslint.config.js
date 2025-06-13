import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  // Ignora la cartella di build
  { ignores: ["dist"] },

  // Regole per JS, JSX, TS, TSX
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    rules: {
      // Regole base ESLint e React
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // Ignora variabili non utilizzate in UPPER_CASE (es. costanti)
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]+" }],
    },
    settings: {
      react: { version: "detect" },
    },
  },
];
