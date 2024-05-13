/** @type {import("prettier").Config} */
export default {
  semi: true,
  trailingComma: "es5",
  tabWidth: 2,
  singleQuote: false,
  tailwindConfig: "./tailwind.config.cjs",
  plugins: ["prettier-plugin-tailwindcss"],
};

{ "plugins": ["prettier-plugin-tailwindcss"] }
