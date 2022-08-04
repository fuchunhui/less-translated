/** @type {import('prettier').Config} */
module.exports = {
  singleQuote: true,
  endOfLine: 'lf',
  tabWidth: 2,
  trailingComma: 'es5',
  plugins: [require('prettier-plugin-tailwindcss')],
};
