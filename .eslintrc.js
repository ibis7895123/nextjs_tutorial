module.exports = {
  plugins: ["prettier"],
  extends: ["plugin:react/recommended", "plugin:tailwindcss/recommended"],
  rules: {
    "prettier/prettier": "error",
  },
  // tailwind.config.js などの config ファイル、ESLint の対象外にする
  ignorePatterns: ["*.config.js"],
};
