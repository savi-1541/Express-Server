import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import prettier from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended", prettier],
    languageOptions: { globals: globals.node, sourceType: "module" },
    rules: {
      "no-console": "warn",
      quotes: ["error", "double"],
      "no-unused-vars": "error",
      "no-empty-function": "error",
      "no-redeclare": "error",
      semi: "error",
      indent: ["error", 2],
      "consistent-return": "error",
      "prefer-const": "error",
      "no-var": "error",
      "comma-dangle": ["error", "always-multiline"],
    },
  },
]);
