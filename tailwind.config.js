/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#D434FE',
        'secondary': '#FFFF00',
        'line': 'rgba(255, 255, 255, 0.18)',
        'primaryLinear': 'linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);',
        purpleHero: "#a937d2",

      },
      fontFamily: {
        Clash: ['Clash'],
        Unica: ['Unica One', 'Cursive'],
      },
      backgroundImage: {
        primaryLinear: 'linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);',
        btnlinear: "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)",
        ballLinear: 'linear-gradient(270deg, #8F01FE 0%, #FF2674 97.24%);',
        timelineLinear: 'linear-gradient(270deg, #903AFF 0%, #D434FE 100%);',
        line: 'rgba(255, 255, 255, 0.18);',
        privacy: 'rgba(217, 217, 218, 0.03);',
        'hero': "url('./assets/images/hero.png')",
        'earth': "url('./assets/images/earth.png')",
        'idea': 'url("./assets/images/idea.png")',
        'award': 'url("./assets/images/award_bg.png")',
        'metrix': 'url("./assets/images/flares/metrix.png")',
        'radial-gradient': 'radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(0, 0, 0, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)'

      },
      content: {
        'curved': 'url("./assets/svgs/curved.svg")',
        'bulb': 'url("./assets/images/bulb.png")',

      },
      listStyleImage: {
        checkmark: 'url("./assets/svgs/checkmark.svg")',
      },
      boxShadow: {
        'register': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'spin-slow': 'spin 250s linear infinite',
      }
    },
  },
  plugins: [],
}

