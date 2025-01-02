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
          dark: '#1a1e29',    
          secondary: '#132d46',  
          primary: '#01c38e', 
          gray: '#6a6e79',    
          light: '#FFFFFF'    
        }
      },
      fontFamily: {
        'tt-commons': ['TT Commons', 'sans-serif']
      }
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#01c38e",
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#132d46",
              foreground: "#FFFFFF",
            },
            focus: "#01c38e",
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#01c38e",
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#132d46",
              foreground: "#FFFFFF",
            },
            focus: "#01c38e",
            background: "#1a1e29",
          },
        },
      },
    }),
  ],
};

export default config;
