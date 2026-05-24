import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const config = [
  {
    ignores: [
      "css/**",
      "js/**",
      "fonts/**",
      "images/**",
      "vids/**",
      "en/**",
      "*.html"
    ]
  },
  ...nextVitals,
  ...nextTypescript,
  {
    rules: {
      "@next/next/no-css-tags": "off",
      "@next/next/no-img-element": "off"
    }
  }
];

export default config;
