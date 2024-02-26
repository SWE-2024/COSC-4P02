/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      {
        "brock-dark": {
          "primary": "#aa0000", // base brock color
          "secondary": "#00a5ff", // default
          "accent": "#c81414", // slightly brighter brock color
          "neutral": "#160e02", // default
          "base-100": "#1c1917", // background color
          "info": "#79deff", // default
          "success": "#00c900", // default
          "warning": "#e99600", // default
          "error": "#bc1f49", // default
        }
      }],
  },
}