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
  ...nextTypescript
];

export default config;
