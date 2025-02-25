import type { Config } from "tailwindcss";

// theme link: https://coolors.co/2f2b23-3a5a40-785478-00a7e1-048ba8

const config: Config = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          sidePanel: '#3A5A40',
          main: '#DAD7CD',
        },
        separator: {
          light: '#E0E0E0',
          dark: '#2F2B23',
        },
        titleText: {
          light: '#EBFAFF',
          dark: '#222',
        },
        listItem: {
          light: '#EBFAFF',
          dark: '#333',
        },
        chips: {
          base: '#785478',
          text: '#fff',
        }
      },
      fontFamily: {
        regular: '\'League Spartan\', sans-serif',
        techMono: '\'Inconsolata\', monospace',
      },
      screens: {
        print: { raw: 'print' },
        screen: { raw: 'screen' },
      },
    },
  },
  plugins: [],
};
export default config;
