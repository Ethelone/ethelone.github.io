/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      // Light Theme Colors WIP
      'primary-light': '#D0A343',
      'secondary-light': '#569CCB',
      'background-light': '#ffffff',
      'text-light': '#333333',

      // Dark Theme Colors
      'primary-dark': '#1F1F1F',
      'secondary-dark': '#569CCB', //masih dipikirin
      'background-dark': '#181818',
      'text-dark': '#ffffff',
      'accent-1-dark': '#D0A343',
      'accent-2-dark': '#569CCB',
      'accent-3-dark': '#519ABA',
    },
  },
  },
  plugins: [daisyui,],
}
