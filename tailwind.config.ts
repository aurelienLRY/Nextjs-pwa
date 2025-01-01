import { nextui } from '@nextui-org/react';

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'swissborg': {
          dark: '#1a1e29',    // Couleur sombre du fond
          secondary: '#132d46',  // Couleur plus sombre
          primary: '#01c38e', // Couleur verte principale
          gray: '#6a6e79',    // Couleur grise
          light: '#FFFFFF'    // Couleur claire
        }
      },
      fontFamily: {
        'tt-commons': ['TT Commons', 'sans-serif']
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};

export default config;
