/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      "alice-blue": {
        "default": "#f0f8ff",
        "slightly-darker": "#e0e8ef",
      },
      "background-black": {
        "default": "#00000033",
        "slightly-lighter": "#10101033",
      },
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],


  daisyui: {
    themes: [
      // {
      //   "brock-dark": {
      //     "base-100": "#1a1a1a",
      //     "secondary": "#8c0000",
      //     "primary": "#AC0000",
      //     "accent": "#cc0000",
      //     "neutral": "#383838",
      //     "info": "#79deff",
      //     "success": "#00c900",
      //     "warning": "#e99600",
      //     "error": "#bc1f49",
      //   }
      // },
      // {
        {
          "brock-dark": {
            "primary": "#aa0000", // base brock color
            "secondary": "#161412", // prev: #59c4ff
            "accent": "#c81414", // slightly brighter brock color
            "neutral": "#160e02", // default
            "base-100": "#1c1917", // background color
            "info": "#79deff", // default
            "success": "#00c900", // default
            "warning": "#e99600", // default
            "error": "#bc1f49", // default
          },
        }
      ],
  },
}