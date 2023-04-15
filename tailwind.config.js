/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    colors: {
      'b-blue': '#3a7bfd',
      'check-bg-grad-start': '#57ddff',
      'check-bg-grad-end': '#c058f3',
      // light theme
      'vl-gray': '#fafafa',
      'l-gray-blue': '#d2d3db',
      'd-gray-blue': '#9394a5',
      'vd-gray-blue': '#484b6a',
      // dark theme
      'vd-blue': '#161722',
      'vd-destat-blue': '#25273c',
      'l-grayish-blue': '#cacde8',
      'l-grayish-blue-hover': '#e4e5f1',
      'd-grayish-blue': '#777a92',
      'vd-grayish-blue': '#4d5066',
      'vdd-grayish-blue': '#393a4c'

    },
    fontFamily: {
      "sans": ['Josefin Sans', 'sans']
    },
    extend: {
    }
  },
  plugins: []
}
