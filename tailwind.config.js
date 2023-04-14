/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    colors: {
      'b-blue': '#3a7bfd',
      'check-bg-grad-start': '#57ddff',
      'check-bg-grad-end': '#c058f3',
      'vl-gray': '#fafafa',
      'vl-gray-blue': '#e4e5f1',
      'l-gray-blue': '#d2d3db',
      'd-gray-blue': '#9394a5',
      'vd-gray-blue': '#484b6a'
    },
    extend: {}
  },
  plugins: []
}
