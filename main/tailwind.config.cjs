/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{vue,js,ts,jsx,tsx,html}"],
  theme: {
    colors: {
        dark_blue: 'hsl(212, 21%, 14%)',
        grayish_blue: 'hsl(228, 12%, 48%)',
        white: 'hsl(0, 0%, 100%)',
        cyan: 'hsl(158, 36%, 37%)',
        cream: 'hsl(30, 38%, 92%)'
      },
      fontSize: {
        body: ['14px'],
        hed: ['34px'],
        med: ['24px']
      },
      fontFamily: {
        'monster': ['Montserrat'],
        'fran': ['Fraunces'],
      },
    extend: {},
  },
  plugins: [],
}
