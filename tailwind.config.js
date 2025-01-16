/** @type {import('tailwindcss').Config} */

const backupFonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nippo: [
          'Nippo-medium', ...backupFonts
        ], // Add Nippo as a custom font
        cairo: ['Cairo', ...backupFonts], // Add Cairo to the font list
      },
      colors: {
        primary: {
          light: '#0cf',  // Light variant
        },
      },
    },
  },
  plugins: [],
}

