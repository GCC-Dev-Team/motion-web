/** @type {import("prettier").Config} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  arrowParens: 'avoid',
  trailingComma: 'none',
  semi: false,
  bracketSameLine: true,
  endOfLine: 'auto',
  htmlWhitespaceSensitivity: 'strict',
  singleQuote: true
}

export default config
